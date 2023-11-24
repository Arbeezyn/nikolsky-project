import React from "react";
import styles from "./CompanyInfo.module.css";

const CompanyInfo = () => {
  return (
    <div className={styles.companyInfoContainer}>
      <h2 className={styles.heading}>О Торговом Центре "Никольский"</h2>
      <p className={styles.paragraph}>
        Торговый Центр "Никольский" – это уникальное место, где современный
        дизайн сочетается с широким ассортиментом товаров и высоким уровнем
        обслуживания.
      </p>
      <p className={styles.paragraph}>
        Наш центр предлагает широкий выбор товаров, начиная от модной одежды и
        обуви, заканчивая электроникой и бытовой техникой. Мы гордимся тем, что
        предоставляем клиентам возможность находить все необходимое под одной
        крышей.
      </p>
      <p className={styles.paragraph}>
        Наши уютные магазины созданы для того, чтобы сделать ваше покупательное
        пребывание приятным и комфортным. Кроме того, мы постоянно обновляем
        ассортимент, чтобы предоставлять самые последние и модные товары.
      </p>
      <img
        src="https://cdn-p.cian.site/images/14/602/101/1012064100-6.jpg"
        alt="Фото торгового центра Никольский"
        className={styles.companyImage}
      />
      <p className={styles.paragraph}>
        Мы приглашаем вас посетить Торговый Центр "Никольский" и насладиться
        уникальным опытом шопинга. У нас есть все для вашего удовлетворения
        потребностей и желаний!
      </p>
    </div>
  );
};

export default CompanyInfo;
