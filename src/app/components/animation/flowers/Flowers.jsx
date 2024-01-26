import styles from "@/app/components/animation/flowers/styles.module.css";

export default function Flowers() {
  const snowFLowers = Array.from({ length: 8 }, (_, index) => ({
    id: index,
  }));

  return (
    <div className={styles.content}>
      <div className={styles.flowersContainer}>
        {snowFLowers.map((item) => (
          <div key={`rosas-${item.id}`} className={styles.flowers}></div>
        ))}
      </div>
    </div>
  );
}
