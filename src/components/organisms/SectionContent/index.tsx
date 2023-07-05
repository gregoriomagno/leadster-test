import React, { useState } from "react";
import * as S from "./styled";
import Button from "../../atoms/Button";
import ButtonDropdown from "../../atoms/ButtonDropdown";
import CardVideo from "../../atoms/CardVideo";
import Pagination from "../../molecules/Pagination";
import ModalPlayVideo from "../../molecules/ModalPlayVideo";
import mock from "../../../Mock/videos.json";
const SectionContent = () => {
  const [indexItemSelected, setIndexItemSelected] = useState(3);
  const [actualPage, setActualPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoSelected, setVideoSelected] = useState("");
  const ItemsMenu = [
    "Agências",
    "Chatbot",
    "Marketing digital",
    "Geração de Lead",
    "Mídia Paga",
  ];

  return (
    <S.Container>
      <S.ContentSection>
        <S.RowHeaderConten>
          <ul>
            {ItemsMenu.map((item, index) => (
              <li key={index}>
                <Button
                  className={indexItemSelected === index && "hover-disable"}
                  typeButton={indexItemSelected === index ? "flat" : "ghost"}
                  themeButton={
                    indexItemSelected === index ? "primary" : "black"
                  }
                  onClick={() => {
                    setIndexItemSelected(index);
                  }}
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
          <S.WrapperButtonDropdown>
            <p>Ordenar por</p>
            <ButtonDropdown options={["Data de Publicação"]} />
          </S.WrapperButtonDropdown>
        </S.RowHeaderConten>
        <hr />
        <S.Content>
          {mock.map((card) => (
            <CardVideo
              onClick={() => {
                setVideoSelected(card.url)
                setModalIsOpen(true);
              }}
            />
          ))}
        </S.Content>
        <hr />

        <Pagination
          actualPage={actualPage}
          setNumberPage={setActualPage}
          totalPage={5}
          totalRegister={25}
        />
      </S.ContentSection>
      <ModalPlayVideo
      videoSelected={videoSelected}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </S.Container>
  );
};

export default SectionContent;
