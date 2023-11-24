"use client";
import axios from "axios";
import React, { useEffect } from "react";
import styles from "./UpdateNews.module.css";
import { useRouter } from "next/navigation";

const UpdateNews = () => {
  const router = useRouter();
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  const onClickButton = () => {
    try {
      const postId = window.location.pathname.split("/").pop();
      const response = axios.patch(
        `http://localhost:4444/posts/${postId}`,
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

  useEffect(() => {
    const postId = window.location.pathname.split("/").pop();
    axios
      .get(`http://localhost:4444/posts/${postId}`)
      .then((response) => {
        setTitle(response.data.title);
        setText(response.data.text);
        setImageUrl(response.data.imageUrl);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Редактирование новости</h2>
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

export default UpdateNews;
