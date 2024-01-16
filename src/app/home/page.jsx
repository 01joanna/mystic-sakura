import HomeApp from "./HomeApp";
import styles from "@/app/home/styles.module.css";

export const metadata = {
  title: "Mistic Sakura | Home",
  description: "Tarot..",
};
export default function Home() {
  return (
    <main className={styles.sky}>
      <HomeApp />
    </main>
  );
}
