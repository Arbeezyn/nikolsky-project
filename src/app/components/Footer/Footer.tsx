import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        Copyright © 2011-2023 Торговый Центр "Никольский"
      </p>
      <div className={styles.socials}>
        <a href="https://vk.com/tdc_nik">VK</a>
        <a href="https://www.instagram.com/tdc_nik/">Instagram</a>
      </div>
    </div>
  );
};

export default Footer;
