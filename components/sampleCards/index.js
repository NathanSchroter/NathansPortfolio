import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./sampleCards.module.css";

export default function SampleCard({ image, title, subtitle}) {
  const router = useRouter();


  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt="sampleCardImage" width={"auto"} height={"auto"} className={styles.sampleCard} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        {/* <button className={styles.viewButton} onClick={handleClick}>
          <p>View Case</p>
        </button> */}
      </div>
    </div>
  );
}


  
  
  






 

