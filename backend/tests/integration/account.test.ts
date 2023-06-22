import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import prisma from '../../src/lib/prisma';
import app from '../../src/app';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import accountMock from '../mocks/account.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Account routes integration tests', function () {
  beforeEach(sinon.restore);

  const { accountCreationFields } = accountMock;

  describe('POST /accounts/signup', function () {
    it('should return a token', async function () {
      sinon.stub(prisma, 'user').value({
        findUnique: sinon.stub().resolves(null),
        create: sinon.stub().resolves(accountMock.account),
      });
      sinon.stub(jwt, 'sign').returns('test token' as any);
      sinon.stub(bcrypt, 'hash').resolves(true);
  
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send(accountCreationFields);
    
      expect(status).to.be.equal(201)
      expect(body).to.be.deep.equal({ token: 'test token' });
    });

    it('should return bad request if name was not sent', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          email: accountCreationFields.email,
          password: accountCreationFields.password,
        });
    
      expect(status).to.be.equal(400)
      expect(body).to.be.deep
        .equal({ message: { name: 'O campo "name" é obrigatório' } });
    });

    it('should return bad request if email was not sent', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          password: accountCreationFields.password,
          name: accountCreationFields.name,
        });
    
      expect(status).to.be.equal(400)
      expect(body).to.be.deep
        .equal({ message: { email: 'O campo "email" é obrigatório' } });
    });

      it('should return bad request if password was not sent', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          email: accountCreationFields.email,
          name: accountCreationFields.name,
        });
    
      expect(status).to.be.equal(400)
      expect(body).to.be.deep
        .equal({ message: { password: 'O campo "password" é obrigatório' } });
    });

    it('should return unprocessable content if name lenght is less than 3', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          ...accountCreationFields,
          name: accountMock.tooShortName,
        });
    
      expect(status).to.be.equal(422)
      expect(body).to.be.deep
        .equal({ message: { name: 'O nome deve ter pelo menos 3 caracteres' } });
    });

    it('should return unprocessable content if name lenght is bigger than 30', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          ...accountCreationFields,
          name: accountMock.tooLongName,
        });
    
      expect(status).to.be.equal(422)
      expect(body).to.be.deep
        .equal({ message: { name: 'O nome deve ter 30 caracteres ou menos' } });
    });

    it('should return unprocessable content if password lenght is less than 8', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          ...accountCreationFields,
          password: accountMock.tooShortPassword,
        });
    
      expect(status).to.be.equal(422)
      expect(body).to.be.deep
        .equal({ message: { password: 'A senha deve ter pelo menos 8 caracteres' } });
    });
  
    it('should return unprocessable content if password lenght is bigger than 126', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          ...accountCreationFields,
          password: accountMock.tooLongPassword,
        });
    
      expect(status).to.be.equal(422)
      expect(body).to.be.deep
        .equal({ message: { password: 'A senha deve ter 126 caracteres ou menos' } });
    });

    it('should return unprocessable content if email is invalid', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          ...accountCreationFields,
          email: accountMock.invalidEmail,
        });
    
      expect(status).to.be.equal(422)
      expect(body).to.be.deep
        .equal({ message: { email: 'O email deve ser válido' } });
    });

    it('should return conflict if email is already in use', async function () {
      sinon.stub(prisma, 'user').value({
        findUnique: sinon.stub().resolves(accountMock.account),
      });

      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send(accountCreationFields);
    
      expect(status).to.be.equal(409)
      expect(body).to.be.deep
        .equal({ message: { email: 'Esse email já está em uso' } });
    });
  });

  describe('POST /accounts/signup', function () {
    it('should return a token', async function () {
      sinon.stub(prisma, 'user').value({
        findUnique: sinon.stub().resolves(accountMock.account),
      });
      sinon.stub(bcrypt, 'compare').resolves(true);
      sinon.stub(jwt, 'sign').returns('test token' as any);
      
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send(accountMock.signInFields);

      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal({ token: 'test token' });
    });

    it('should return bad request if email was not sent', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send({
          password: accountCreationFields.password,
        });

      expect(status).to.be.equal(400);
      expect(body).to.be.deep
        .equal({ message: { email: 'O campo "email" é obrigatório' } });
    });

    it('should return bad request if password was not sent', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send({
          email: accountCreationFields.email,
        });

      expect(status).to.be.equal(400);
      expect(body).to.be.deep
        .equal({ message: { password: 'O campo "password" é obrigatório' } });
    });

    it('should return not found if email not in database', async function () {
      sinon.stub(prisma, 'user').value({
        findUnique: sinon.stub().resolves(null),
      });
      
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send(accountMock.signInFields);

      expect(status).to.be.equal(404);
      expect(body).to.be.deep
        .equal({ message: { email: 'Não foi possível encontrar uma conta com esse email' } });
    });

    it('should return unauthorized if password is wrong', async function () {
      sinon.stub(prisma, 'user').value({
        findUnique: sinon.stub().resolves(accountMock.account),
      });
      sinon.stub(bcrypt, 'compare').resolves(false);
      
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send(accountMock.signInFields);

      expect(status).to.be.equal(401);
      expect(body).to.be.deep
        .equal({ message: { password:  'Senha incorreta' } });
    });
  });
});
