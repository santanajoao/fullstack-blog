import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import prisma from '../../src/lib/prisma';
import app from '../../src/app';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import accountMock from '../mocks/account.mock';
import { getAccountPublicFields } from '../../src/utils/account';
import { Account } from '@prisma/client';

chai.use(chaiHttp);

const { expect } = chai;

describe('Account routes integration tests', function () {
  beforeEach(sinon.restore);

  const { accountCreationFields } = accountMock;

  describe('POST /accounts/signup', function () {
    it('should return a token', async function () {
      sinon.stub(prisma, 'account').value({
        findUnique: sinon.stub().resolves(null),
        create: sinon.stub().resolves(accountMock.account),
      });
      sinon.stub(jwt, 'sign').returns('test token' as unknown as void);
      sinon.stub(bcrypt, 'hash').resolves(true);
      const accountPublicFields = getAccountPublicFields(accountMock.account as Account);
      
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send(accountCreationFields);

      expect(status).to.be.equal(201);
      expect(body).to.be.deep
        .equal({ token: 'test token', account: accountPublicFields });
    });

    it('should return bad request if name was not sent', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          email: accountCreationFields.email,
          password: accountCreationFields.password,
        });
    
      expect(status).to.be.equal(400);
      expect(body).to.be.deep
        .equal({ message: 'O campo "username" é obrigatório' });
    });

    it('should return bad request if email was not sent', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          password: accountCreationFields.password,
          username: accountCreationFields.username,
        });
    
      expect(status).to.be.equal(400);
      expect(body).to.be.deep
        .equal({ message: 'O campo "email" é obrigatório' });
    });

    it('should return bad request if password was not sent', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          email: accountCreationFields.email,
          username: accountCreationFields.username,
        });
    
      expect(status).to.be.equal(400);
      expect(body).to.be.deep
        .equal({ message: 'O campo "password" é obrigatório' });
    });

    it('should return unprocessable content if name lenght is less than 3', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          ...accountCreationFields,
          username: accountMock.tooShortName,
        });
    
      expect(status).to.be.equal(422);
      expect(body).to.be.deep
        .equal({ message: 'O nome deve ter pelo menos 3 caracteres' });
    });

    it('should return unprocessable content if username lenght is bigger than 30', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          ...accountCreationFields,
          username: accountMock.tooLongName,
        });
    
      expect(status).to.be.equal(422);
      expect(body).to.be.deep
        .equal({ message: 'O nome deve ter 30 caracteres ou menos' });
    });

    it('should return unprocessable content if password lenght is less than 8', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          ...accountCreationFields,
          password: accountMock.tooShortPassword,
        });
    
      expect(status).to.be.equal(422);
      expect(body).to.be.deep
        .equal({ message: 'A senha deve ter pelo menos 8 caracteres' });
    });
  
    it('should return unprocessable content if password lenght is bigger than 126', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          ...accountCreationFields,
          password: accountMock.tooLongPassword,
        });
    
      expect(status).to.be.equal(422);
      expect(body).to.be.deep
        .equal({ message: 'A senha deve ter 126 caracteres ou menos' });
    });

    it('should return unprocessable content if email is invalid', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send({
          ...accountCreationFields,
          email: accountMock.invalidEmail,
        });
    
      expect(status).to.be.equal(422);
      expect(body).to.be.deep
        .equal({ message: 'O email deve ser válido' });
    });

    it('should return conflict if email is already in use', async function () {
      sinon.stub(prisma, 'account').value({
        findUnique: sinon.stub().resolves(accountMock.account),
      });

      const { status, body } = await chai
        .request(app)
        .post('/accounts/signup')
        .send(accountCreationFields);
    
      expect(status).to.be.equal(409);
      expect(body).to.be.deep
        .equal({ message: 'Esse email já está em uso' });
    });
  });

  describe('POST /accounts/signup', function () {
    it('should return a token', async function () {
      sinon.stub(prisma, 'account').value({
        findUnique: sinon.stub().resolves(accountMock.account),
      });
      sinon.stub(bcrypt, 'compare').resolves(true);
      sinon.stub(jwt, 'sign').returns('test token' as unknown as void);

      
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send(accountMock.signInFields);
      
      const accountPublicFields = getAccountPublicFields(accountMock.account as Account);
      
      expect(status).to.be.equal(200);
      expect(body).to.be.deep
        .equal({ token: 'test token', account: accountPublicFields });
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
        .equal({ message: 'O campo "email" é obrigatório' });
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
        .equal({ message: 'O campo "password" é obrigatório' });
    });

    it('should return not found if email not in database', async function () {
      sinon.stub(prisma, 'account').value({
        findUnique: sinon.stub().resolves(null),
      });
      
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send(accountMock.signInFields);

      expect(status).to.be.equal(404);
      expect(body).to.be.deep
        .equal({ message: 'Não foi possível encontrar uma conta com esse email' });
    });

    it('should return unauthorized if password is wrong', async function () {
      sinon.stub(prisma, 'account').value({
        findUnique: sinon.stub().resolves(accountMock.account),
      });
      sinon.stub(bcrypt, 'compare').resolves(false);
      
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send(accountMock.signInFields);

      expect(status).to.be.equal(401);
      expect(body).to.be.deep
        .equal({ message: 'Senha incorreta' });
    });

    it('should return unprocessable content if password lenght is less than 8', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send({
          ...accountCreationFields,
          password: accountMock.tooShortPassword,
        });
    
      expect(status).to.be.equal(422);
      expect(body).to.be.deep
        .equal({ message: 'A senha deve ter pelo menos 8 caracteres' });
    });
  
    it('should return unprocessable content if password lenght is bigger than 126', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send({
          ...accountCreationFields,
          password: accountMock.tooLongPassword,
        });
    
      expect(status).to.be.equal(422);
      expect(body).to.be.deep
        .equal({ message: 'A senha deve ter 126 caracteres ou menos' });
    });

    it('should return unprocessable content if email is invalid', async function () {
      const { status, body } = await chai
        .request(app)
        .post('/accounts/signin')
        .send({
          ...accountCreationFields,
          email: accountMock.invalidEmail,
        });
    
      expect(status).to.be.equal(422);
      expect(body).to.be.deep
        .equal({ message: 'O email deve ser válido' });
    });
  });
});
