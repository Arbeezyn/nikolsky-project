"use client";

import React from "react";
import styles from "./NewsCard.module.css";
import Link from "next/link";

const NewsCard = (props: Product) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={props.imageUrl}
        alt="Изображение новости"
      />
      <div className={styles.title}>
        <Link href={`/news/${props._id}`}>{props.title}</Link>
      </div>
    </div>
  );
};

export default NewsCard;
