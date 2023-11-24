import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Greeting from "./components/Greeting/Greeting";
import Rent from "./components/Rent/Rent";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Greeting />
      <Rent />
      <Footer />
    </main>
  );
}
