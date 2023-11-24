"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./News.module.css";
import NewsCard from "../components/NewsCard/NewsCard";
import axios from "axios";

const News = () => {
  const [data, setData] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4444/posts?page=${page}&limit=8`)
      .then((res) => {
        setData(res.data);

        if (res.data.length < 8) {
          setLastPage(true);
        } else {
          setLastPage(false);
        }
      })

      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [page]);

  const handleNextPage = () => {
    if (!lastPage) {
      setPage(page + 1);
    }
  };

  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.title}>Новости</h1>
      <div className={styles.newsBlock}>
        {data.map((news) => (
          <NewsCard
            key={news._id}
            _id={news._id}
            title={news.title}
            imageUrl={news.imageUrl}
            text={news.text}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.button}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Предыдущая страница
        </button>
        <span className={styles.page}>Страница {page}</span>
        <button
          className={styles.button}
          onClick={handleNextPage}
          disabled={lastPage}
        >
          Следующая страница
        </button>
      </div>
      <Footer />
    </main>
  );
};

export default News;
