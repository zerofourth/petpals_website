import React from "react";
import { Link } from "react-router-dom";

import style from "./Home.module.css"; // Reusing the styles from Home.js
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.container} // Reusing the container style from Home.js
    >{/* Reusing the NavBar component */}
      <div className={style.centerDiv}>
        <h1 className={style.title}>About Us</h1>
        <p className={style.des}>
          Team PetPals aims to provide every animal the love and care it deserves. A project by Bijosh , Prittyush and Sourav
        </p>
        <p className={style.des}>Made by Team 10 for Project - BCA581</p>
        <p className={style.des}>For queries contact : bps.petpals@gmail.com</p>
        {/* Navigation link to go back to the home page */}
        <Link to="/Donations" className={style.button87}>
          Donate to Charity
        </Link>
      </div>
    </motion.div>
  );
}

export default AboutUs;
