import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Button from "../../atoms/Button";
import ButtonDropdown from "../../atoms/ButtonDropdown";
import CardVideo from "../../atoms/CardVideo";
import Pagination from "../../molecules/Pagination";
import ModalPlayVideo from "../../molecules/ModalPlayVideo";
import mock from "../../../Mock/videos.json";
import { IWebinar } from "../../../Types/webinar";
import { ICategoria } from "../../../styles/filter";

const ItemsMenu: ICategoria[] = [
  {
    label: "Agências",
    value: "agencias",
  },
  {
    label: "Chatbot",
    value: "chatbot",
  },
  {
    label: "Marketing digital",
    value: "marketing",
  },
  {
    label: "Geração de Lead",
    value: "gerecaoLead",
  },
  {
    label: "Mídia Paga",
    value: "midiaPaga",
  },
];
const SectionContent = () => {
  const postsPerPage = 9;

  function slicePostMock(
    webinars: IWebinar[],
    page: number,
    amountPerPage: number
  ) {
    return webinars?.slice(
      page * amountPerPage,
      page * amountPerPage + amountPerPage
    );
  }

  const [categorySelected, setCategorySelected] = useState<ICategoria>();
  const [actualPage, setActualPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoSelected, setVideoSelected] = useState<IWebinar>();
  const [webinarFiltered, setWebinarFiltered] = useState<IWebinar[]>(
    mock.videos
  );
  const [webinarShow, setWebinarShow] = useState<IWebinar[]>(mock.videos);

  useEffect(() => {
    setWebinarShow(slicePostMock(webinarFiltered, actualPage, postsPerPage));
  }, [actualPage, webinarFiltered]);

  useEffect(() => {
    setActualPage(0);
    if (categorySelected) {
      setWebinarFiltered(
        mock.videos.filter(
          (item: IWebinar) => item.categoria === categorySelected?.value
        )
      );
    }
  }, [categorySelected]);
 
  return (
    <S.Container>
      <S.ContentSection>
        <S.RowHeaderConten>
          <ul>
            {ItemsMenu.map((item: ICategoria, index) => (
              <li key={index}>
                <Button
                  className={categorySelected === item && "hover-disable"}
                  typeButton={categorySelected === item ? "flat" : "ghost"}
                  themeButton={categorySelected === item ? "primary" : "black"}
                  onClick={() => {
                    setCategorySelected(item);
                  }}
                >
                  {item.label}
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
          {webinarShow?.map((webinar, index) => (
            <CardVideo
              key={index}
              data={webinar}
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
          totalPage={
            webinarFiltered?.length > 0
              ? Math.ceil(webinarFiltered?.length / postsPerPage)
              : 1
          }
          totalRegister={webinarFiltered?.length}
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
