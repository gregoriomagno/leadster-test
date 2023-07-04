import React from "react";
import Header from "../../components/molecules/Header";
import Footer from "../../components/organisms/Footer";
import Banner from "../../components/organisms/Banner";

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <main>
      <Banner />
      </main>
      <Footer />
    </>
  );
};

export default HomeTemplate;
