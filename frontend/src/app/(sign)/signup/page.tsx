import SignUpForm from "@/components/Sign/SignUpForm";
import SignLink from "@/components/Sign/SignLink";
import SignTitle from "@/components/Sign/SignTitle";

export default function SignUp() {
  return (
    <>
      <SignTitle>Crie sua conta</SignTitle>

      <SignUpForm />
      
      <SignLink href="/signin">Já tem uma conta? Entre aqui!</SignLink>
    </>
  );
}
