import React from "react";
import * as S from "./styled";
import Image from "next/image";
import Button from "../../atoms/Button";

const BannerDemostration = () => {
  return (
    <S.Container>
      <S.ContentLeft>
        <S.Content>
          <S.WrapperImage>
            <Image
              src={"/assets/comparativo_img_CTA.png"}
              alt="comparativo_img_CTA"
              width={579}
              height={618}
            />
          </S.WrapperImage>
          <S.ShadowShapeThree />
        </S.Content>
      </S.ContentLeft>
      <S.ContentRight>
        <S.TitleContainerRight>
          Pronto para triplicar sua <br />
          <b>Geração de Leads?</b>
        </S.TitleContainerRight>
        <S.SubTitleContainerRight>
          Fácil criação e ativação em <b> 4 minutos</b>
        </S.SubTitleContainerRight>
        <hr />
        <S.WrapperRating>
          <S.RowRatingButton>
            <Button>VER DEMONSTRAÇÃO</Button>
            <Image
              src={"/assets/selo_RD.png"}
              alt="logo-leadster"
              width={150}
              height={54}
            />
          </S.RowRatingButton>
          <S.ContainerNoCardScore>
            <Image
              src={"/assets/no-card-dark.webp"}
              alt={"icon-no-card"}
              width={16}
              height={16}
            />
            <p>Não é necessário cartão de crédito |</p>
            <Image
              src={"/assets/rating.webp"}
              alt={"icon-rating"}
              width={92}
              height={16}
            />
            <p>
              <b>4.9</b>/5 - Média de Satisfação
            </p>
          </S.ContainerNoCardScore>
        </S.WrapperRating>
      </S.ContentRight>
    </S.Container>
  );
};

export default BannerDemostration;
