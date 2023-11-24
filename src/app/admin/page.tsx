"use client";
import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./Admin.module.css";
import Login from "../components/Login/Login";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const page = () => {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <Header />
        <Login />
        <Footer />
      </main>
    </Provider>
  );
};

export default page;
