import { Cart } from "./components/cart";
import { Summary } from "./components/summary";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.cart}>
     <Cart/>
        </div>
        <div>
      <Summary/>
        </div>
      </div>
    </main>
  );
}
