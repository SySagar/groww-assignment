import { Cart } from "./components/cart";
import { Summary } from "./components/summary";
import { additionText } from "./lib/constants";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.cart}>
          <Cart />
        </div>
        <div>
          <Summary />

          <p className={styles.additionText}>{additionText}</p>
        </div>
      </div>
    </main>
  );
}
