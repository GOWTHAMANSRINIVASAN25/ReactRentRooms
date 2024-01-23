import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import Why from "../../components/why/Why";
import About from "../../components/about/About";

import News from "../../components/news/News";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Why />
      <About />
       <News />
      <Footer />
    </div>
  );
}

export default Home;
