"use client";
import React from "react";
import styles from "./CreateNews.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateNews = () => {
  const router = useRouter();
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  const onClickButton = () => {
    try {
      const response = axios.post(
        "http://localhost:4444/posts",
        {
          title,
          text,
          imageUrl,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        }
      );
      console.log(response);
      router.back();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Добавить новость</h2>
      <form className={styles.form} action="/submit" method="post">
        <div className={styles.formElement}>
          <label className={styles.label}>Заголовок новости</label>
          <input
            className={styles.input}
            type="text"
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.formElement}>
          <label className={styles.label}>Текст новости</label>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            id="text"
            name="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className={styles.formElement}>
          <label className={styles.label}>Ссылка на картинку</label>
          <input
            className={styles.input}
            type="tel"
            id="imageUrl"
            name="imageUrl"
            required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
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

export default CreateNews;
