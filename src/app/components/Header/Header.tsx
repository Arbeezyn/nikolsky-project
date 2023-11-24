"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Header = () => {
  const router = useRouter();
  const onExit = () => {
    if (localStorage.getItem("authToken")) {
      localStorage.removeItem("authToken");
      router.push("/");
    }
  };

  return (
    <div className={styles.header}>
      <ul className={styles.headerUl}>
        <li className={`${styles.headerLi} ${styles.logo}`}>ТЦ "Никольский"</li>
        <li className={`${styles.headerLi} ${styles.menuItem}`}>
          <Link href="/">Главная</Link>
        </li>
        <li className={`${styles.headerLi} ${styles.menuItem}`}>
          <Link href="/news">Новости</Link>
        </li>
        <li className={`${styles.headerLi} ${styles.menuItem}`}>
          <Link href="/about">О компании</Link>
        </li>
        <li className={`${styles.headerLi} ${styles.menuItem}`}>
          <Link href="/contacts">Контакты</Link>
        </li>
        {localStorage.getItem("authToken") && (
          <li className={styles.headerLi}>
            <button className={styles.adminButton} onClick={onExit}>
              Выйти из режима администратора
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
