import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Button from "../../atoms/Button";
import ButtonDropdown from "../../atoms/ButtonDropdown";
import CardVideo from "../../atoms/CardVideo";
import Pagination from "../../molecules/Pagination";
import ModalPlayVideo from "../../molecules/ModalPlayVideo";
import mock from "../../../Mock/videos.json";
import { IWebinar } from "../../../Types/webinar";
const SectionContent = () => {
  const postsPerPage = 9;

  function slicePostMock(page: number, amountPerPage: number) {
    return mock.videos.slice(
      page * amountPerPage,
      page * amountPerPage + amountPerPage
    );
  }
  const [indexItemSelected, setIndexItemSelected] = useState(3);
  const [actualPage, setActualPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoSelected, setVideoSelected] = useState<IWebinar>();
  const [posts, setPosts] = useState<IWebinar[]>(
    slicePostMock(actualPage, postsPerPage)
  );
  const ItemsMenu = [
    "Agências",
    "Chatbot",
    "Marketing digital",
    "Geração de Lead",
    "Mídia Paga",
  ];
  useEffect(() => {
    setPosts(slicePostMock(actualPage, postsPerPage));
  }, [actualPage]);
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
          {posts.map((webinar) => (
            <CardVideo
              onClick={() => {
                setVideoSelected(webinar);
                setModalIsOpen(true);
              }}
            />
          ))}
        </S.Content>
        <hr />

        <Pagination
          actualPage={actualPage}
          setNumberPage={setActualPage}
          totalPage={2}
          totalRegister={mock.videos.length}
        />
      </S.ContentSection>
      {videoSelected && (
        <ModalPlayVideo
          videoSelected={videoSelected}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </S.Container>
  );
};

export default SectionContent;
