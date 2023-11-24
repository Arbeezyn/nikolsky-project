"use client";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import React, { useEffect, useState } from "react";
import styles from "./Editor.module.css";
import Card from "@/app/components/Card/Card";
import axios from "axios";
import { useRouter } from "next/navigation";

const Editor = () => {
  const router = useRouter();
  const [newsData, setNewsData] = useState<Card[]>([]);
  const [rentData, setRentData] = useState<Card[]>([]);
  const [menuType, setMenuType] = useState("news");
  const storedAuthToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`http://localhost:4444/posts`)
      .then((res) => {
        setNewsData(res.data);
      })

      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [menuType]);

  useEffect(() => {
    axios
      .get(`http://localhost:4444/rents`)
      .then((res) => {
        setRentData(res.data);
      })

      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [menuType]);

  return storedAuthToken ? (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.pages}>
          <div
            onClick={() => setMenuType("news")}
            className={`${styles.page} ${
              menuType === "news" ? styles.selected : ""
            }`}
          >
            Новости
          </div>
          <div
            onClick={() => setMenuType("rent")}
            className={`${styles.page} ${
              menuType === "rent" ? styles.selected : ""
            }`}
          >
            Аренда
          </div>
          <div
            onClick={() => router.push("/admin/editor/create")}
            className={`${styles.page} ${styles.create}`}
          >
            Добавить новость
          </div>
        </div>
        <div className={styles.content}>
          {menuType === "news"
            ? newsData.map((news) => (
                <Card
                  type="news"
                  key={news._id}
                  _id={news._id}
                  title={news.title}
                  imageUrl={news.imageUrl}
                  text={news.text}
                />
              ))
            : rentData.map((rent) => (
                <Card
                  type="rent"
                  key={rent._id}
                  _id={rent._id}
                  name={rent.name}
                  area={rent.area}
                  phone={rent.phone}
                  email={rent.email}
                />
              ))}
        </div>
      </div>
      <Footer />
    </main>
  ) : (
    <div className={styles.errorContainer}>
      <p className={styles.error}>Вы не авторизованы</p>
    </div>
  );
};

export default Editor;
