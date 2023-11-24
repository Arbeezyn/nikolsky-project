import CompanyInfo from "../components/CompanyInfo/CompanyInfo";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./About.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <CompanyInfo />
      <Footer />
    </main>
  );
}
