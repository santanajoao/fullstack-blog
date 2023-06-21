import HiddenInputField from "@/components/Sign/HiddenInputField"
import SignButton from "@/components/Sign/SignButton";
import SignField from "@/components/Sign/SignField";
import SignFormWrapper from "@/components/Sign/SignFormWrapper";
import SignLink from "@/components/Sign/SignLink";
import SignTitle from "@/components/Sign/SignTitle";

export default function SignIn() {

  return (
    <>
      <SignTitle>Entre em sua conta</SignTitle>
      <SignFormWrapper>
        <SignField label="Email" id="email" type="email"/>
        <HiddenInputField label="Senha" id="password" />
        
        <SignButton>Entrar</SignButton>
      </SignFormWrapper>

      <SignLink href="/signup">
        Não tem uma conta? Crie uma agora!
      </SignLink>
    </>
  );
}
