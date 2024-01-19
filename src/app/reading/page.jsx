import ReadingApp from "./ReadingApp"
import styles from "@/app/reading/styles.module.css";

export const metadata = {
  title: "Mistic Sakura | Home",
  description: "ReadingTarot..",
};
export default function Home() {
  return (
    <main className={styles.sky}>
      <ReadingApp />
    </main>
  );
}
