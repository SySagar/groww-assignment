import { Cart } from "./components/cart";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <Cart/>
    </main>
  );
}
