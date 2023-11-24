"use client";
import React from "react";
import styles from "./Rent.module.css";
import axios from "axios";

const Rent = () => {
  const [name, setFullName] = React.useState("");
  const [area, setArea] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");

  const onClickButton = () => {
    try {
      const response = axios.post("http://localhost:4444/rents", {
        name,
        area,
        phoneNumber,
        email,
      });
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Аренда помещений</h2>
      <form className={styles.form} action="/submit" method="post">
        <div className={styles.formElement}>
          <label className={styles.label}>ФИО/Название организации</label>
          <input
            className={styles.input}
            type="text"
            id="fullname"
            name="name"
            required
            value={name}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className={styles.formElement}>
          <label className={styles.label}>Площадь требуемого помещения</label>
          <input
            className={styles.input}
            type="text"
            id="area"
            name="area"
            required
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>

        <div className={styles.formElement}>
          <label className={styles.label}>Номер телефона</label>
          <input
            className={styles.input}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className={styles.formElement}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formElement}>
          <input
            className={styles.input}
            type="button"
            value="Отправить"
            onClick={onClickButton}
          />
        </div>
      </form>
    </div>
  );
};

export default Rent;
