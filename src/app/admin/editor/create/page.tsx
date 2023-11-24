"use client";
import React from "react";
import styles from "./Create.module.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Login from "@/app/components/Login/Login";
import CreateNews from "@/app/components/CreateNews/CreateNews";
import UpdateNews from "@/app/components/UpdateNews/UpdateNews";

const page = () => {
  const storedAuthToken = localStorage.getItem("authToken");

  return storedAuthToken ? (
    <main className={styles.main}>
      <Header />
      <CreateNews />
      <Footer />
    </main>
  ) : (
    <div className={styles.errorContainer}>
      <p className={styles.error}>Вы не авторизованы</p>
    </div>
  );
};

export default page;
