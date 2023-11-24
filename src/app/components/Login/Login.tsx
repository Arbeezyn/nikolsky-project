import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSignOut, setUserData } from "@/redux/userSlice";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  localStorage.getItem("authToken") ? router.push("/admin/editor") : null;

  const onFinish = async () => {
    try {
      const response = await axios.post("http://localhost:4444/auth/login", {
        email,
        password,
      });

      dispatch(
        setUserData({
          fullName: response.data.fullName,
          isAuth: true,
          token: response.data.token,
        })
      );
      router.push("/admin/editor");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.login}>
      <h2 className={styles.title}>Вход в панель администратора</h2>
      <form className={styles.form} action="/submit" method="post">
        <div className={styles.formElement}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formElement}>
          <label className={styles.label}>Пароль</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.formElement}>
          <input
            className={styles.input}
            type="button"
            value="Отправить"
            onClick={onFinish}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
