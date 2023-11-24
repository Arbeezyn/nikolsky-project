import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import axios from "axios";
import Link from "next/link";

const Card = (props: Card) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const onSuccess = (id: string | undefined) => {
    if (id !== undefined) {
      axios
        .delete(`http://localhost:4444/rents/${id}`)
        .then((res) => {
          console.log(res);
          setIsDeleted(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const onDelete = (id: string | undefined) => {
    if (id !== undefined) {
      axios
        .delete(`http://localhost:4444/posts/${id}`)
        .then((res) => {
          console.log(res);
          setIsDeleted(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  useEffect(() => {
    // Reset isDeleted when props change
    setIsDeleted(false);
  }, [props]);

  if (isDeleted) {
    return null; // Don't render anything if the item is deleted
  }

  return (
    <div className={styles.container}>
      {props.type == "news" ? (
        <div className={styles.card}>
          <h2 className={styles.title}>{props.title}</h2>
          <div className={styles.content}>
            <img className={styles.image} src={props.imageUrl} alt="" />
            <p className={styles.text}>{props.text}</p>
          </div>
          <div className={styles.buttons}>
            <button
              onClick={() => onDelete(props._id)}
              className={styles.buttonSuccess}
            >
              Удалить
            </button>
            <button className={styles.buttonSuccess}>
              <Link href={`/admin/editor/${props._id}`}> Изменить</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.card}>
          <h2 className={styles.title}>Название компании/ФИО: {props.name}</h2>
          <p className={styles.phone}>Телефон: {props.phone} </p>
          <p className={styles.email}>Email: {props.email} </p>
          <p className={styles.area}>Требуемая площадь: {props.area} </p>
          <button
            onClick={() => onSuccess(props._id)}
            className={styles.buttonSuccess}
          >
            Выполнена
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
