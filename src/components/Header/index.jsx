import * as S from "./styles";
import { Menu } from "../../components";
import logoNiceMultiservicos from "../../../public/logoNiceMultiservicos-Star.png";

export function Header() {
  return (
    <S.Container>
      <S.Logo src={logoNiceMultiservicos.src} alt="logo-Nice-Multiservicos" />

      <Menu />
    </S.Container>
  );
}
