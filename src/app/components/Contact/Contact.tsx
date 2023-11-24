import React from "react";
import styles from "./Contact.module.css";
import { CiMap, CiPhone, CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>Контактная информация</h2>
      <div className={styles.contactItem}>
        <CiMap className={styles.contactIcon} />
        <p className={styles.contactDetails}>Город: Орехово-Зуево</p>
      </div>
      <div className={styles.contactItem}>
        <CiPhone className={styles.contactIcon} />
        <p className={styles.contactDetails}>Телефон: +7 (123) 456-7890</p>
      </div>
      <div className={styles.contactItem}>
        <CiMail className={styles.contactIcon} />
        <p className={styles.contactDetails}>Email: @example.com</p>
      </div>
    </div>
  );
};

export default Contact;
