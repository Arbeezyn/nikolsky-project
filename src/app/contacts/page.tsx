"use client";

import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./Contacts.module.css";

const page = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Contact />
      <div className={styles.mapsContainer}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A5722657b0e73874db70851d0827cf96755b71a3dd793aad6a1539d076e57adde&amp;source=constructor"
          width="600"
          height="500"
          className={styles.map}
        ></iframe>
      </div>
      <Footer />
    </main>
  );
};

export default page;
