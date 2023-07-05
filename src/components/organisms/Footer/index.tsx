import React from "react";
import * as S from "./styled";
import Branding from "../../atoms/Branding";
import { ISectionLinks, ITextLink } from "../../../Types/linksFooter";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  FACEBOOK,
  INSTAGRAM,
  LINKEDIN,
} from "../../../constants/contacts";
import CircleIcon from "../../atoms/CircleIcon";

const listLinks: ISectionLinks[] = [
  {
    title: "Links Principais",
    links: [
      { title: "Home", url: "/" },
      { title: "Ferramenta", url: "/" },
      { title: "Preços", url: "/" },
      { title: "Contato", url: "/" },
    ],
  },
  {
    title: "Cases",
    links: [
      { title: "Geração de Leads B2B", url: "/" },
      { title: "Geração de Leads em Software", url: "/" },
      { title: "Geração de Leads em Imobiliária", url: "/" },
      { title: "Cases de Sucesso", url: "/" },
    ],
  },
  {
    title: "Materiais",
    links: [
      { title: "Blog", url: "/" },
      { title: "Parceria com Agências", url: "/" },
      { title: "Guia Definitivo do Marketing", url: "/" },
      { title: "Materiais Gratuitos", url: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <S.Fotter>
      <Branding />
      <S.ContainerLinks>
        {listLinks.map((sectionLinks: ISectionLinks) => (
          <S.ColumLinks>
            <S.TitleSectionLinks>{sectionLinks.title}</S.TitleSectionLinks>
            <S.ListLiks>
              {sectionLinks.links.map((link: ITextLink, index) => (
                <li key={index}>
                  <S.Link href={link.url}>{link.title}</S.Link>
                </li>
              ))}
            </S.ListLiks>
          </S.ColumLinks>
        ))}
        <S.ColumContacts>
          <S.TitleSectionLinks>Siga a Leadster</S.TitleSectionLinks>
          <div>
            <S.ListSocialICons>
              <a href={LINKEDIN} target="_blank">
                <CircleIcon icon={"/assets/linkedin.svg"} />
              </a>
              <a href={FACEBOOK} target="_blank">
                <CircleIcon icon={"/assets/facebook.svg"} />
              </a>
              <a href={INSTAGRAM} target="_blank">
                <CircleIcon icon={"/assets/instagram.svg"} />
              </a>
            </S.ListSocialICons>
            <S.ContainerInfContacts>
              <p>
                <span>E-mail:</span> {CONTACT_EMAIL}
              </p>
              <p>
                <span>Telefone:</span> {CONTACT_PHONE}
              </p>
            </S.ContainerInfContacts>
          </div>
        </S.ColumContacts>
      </S.ContainerLinks>
      <S.Divider />

      <S.RowCopyright>
        <p>Copyright © 2015 - 2022 Todos os direitos reservados | <a href={'/'}>Leadster</a></p>
        <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>
      </S.RowCopyright>
    </S.Fotter>
  );
};

export default Footer;
