import HiddenInputField from "@/components/Sign/HiddenInputField";
import SignButton from "@/components/Sign/SignButton";
import SignField from "@/components/Sign/SignField";
import SignFormWrapper from "@/components/Sign/SignFormWrapper";
import SignLink from "@/components/Sign/SignLink";
import SignTitle from "@/components/Sign/SignTitle";

export default function SignUp() {
  return (
    <>
      <SignTitle>Cria sua conta</SignTitle>
      <SignFormWrapper>
        <SignField id="name" label="Nome" type="text" />
        <SignField id="email" label="Email" type="email" />
        <HiddenInputField label="Senha" id="password" />
        
        <SignButton>Entrar</SignButton>
      </SignFormWrapper>
      
      <SignLink href="/signin">Já tem uma conta? Entre aqui!</SignLink>
    </>
  );
}
