import SignUpForm from "@/components/Sign/SignUpForm";
import Sign from '@/components/Sign';

export default function SignUp() {
  return (
    <>
      <Sign.Title>Crie sua conta</Sign.Title>

      <SignUpForm />
      
      <Sign.Link href="/signin">Já tem uma conta? Entre aqui!</Sign.Link>
    </>
  );
}
