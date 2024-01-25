import styles from "@/app/components/animation/flowers/styles.module.css";

export default function Flowers() {
  const snowFLowers = Array.from({ length: 8 }, (index) => ({
    id: index,
  }));

  return (
    <div className={styles.content}>
      <div className={styles.flowersContainer}>
        {snowFLowers.map((index) => (
          <div key={`rosas-${index}`} className={styles.flowers}></div>
        ))}
      </div>
    </div>
  );
}
