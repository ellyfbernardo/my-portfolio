import styles from "./page.module.css";
import Image from "next/image";
import gif from "./assets/workinggif.webp"

export default function Home() {
  return (
    <div className={styles.page}>

      <h1>
        Portfólio em construção...
      </h1>
      <Image
      className={styles.gif}
        src={gif}
        alt="working man gif"
      />
      </div>
  );
}
