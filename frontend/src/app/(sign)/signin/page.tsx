import SignLink from "@/components/Sign/SignLink";
import SignTitle from "@/components/Sign/SignTitle";
import SignInForm from "@/components/Sign/SignInForm";

export default function SignIn() {
  return (
    <>
      <SignTitle>Entre em sua conta</SignTitle>
      
      <SignInForm />
      
      <SignLink href="/signup">
        Não tem uma conta? Crie uma agora!
      </SignLink>
    </>
  );
}
