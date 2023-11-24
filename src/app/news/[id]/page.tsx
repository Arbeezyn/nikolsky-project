"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./NewsId.module.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

type Props = {
  params: {
    id: number;
  };
};

const newsId = ({ params: { id } }: Props) => {
  const [data, setData] = useState<Product>();
  useEffect(() => {
    axios
      .get(`http://localhost:4444/posts/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{data?.title}</h1>

        <img className={styles.img} src={data?.imageUrl} alt="" />

        <div className={styles.description}>
          <p>{data?.text}</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default newsId;
