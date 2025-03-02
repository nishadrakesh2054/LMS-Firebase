import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// components
import NavBar from "./NavBar";
import Hero from "./Hero";

import Layouts from "./Layouts";
import Features from "./Features";

import ContactUs from "./ContactUs";
import Footer from "./Footer";


// dummy data
import {

  layouts,
  features,
 

} from "./data";

const Landing = () => {
  useEffect(() => {
    if (document.body)
      document.body.classList.remove(
        "authentication-bg",
        "authentication-bg-pattern"
      );

    // manage go to top button
    let mybutton = document.getElementById("back-to-top-btn");
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        mybutton!.style.display = "block";
      } else {
        mybutton!.style.display = "none";
      }
    });
  }, []);

  /**
   * reach to top of web page
   */
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id="landing">
      {/* navbar */}
      <NavBar  />

      {/* hero */}
      <Hero />

  



      {/* layout demos */}
      <Layouts layouts={layouts} />

      {/* features */}
      <Features features={features} />


   

  

      {/* contact */}
      <ContactUs />

      {/* footer */}
      <Footer />

      <Link
        to="#"
        onClick={() => topFunction()}
        className="back-to-top-btn btn btn-primary"
        id="back-to-top-btn"
      >
        <i className="mdi mdi-chevron-up"></i>
      </Link>
    </div>
  );
};


export default Landing;
