import styles from "@/styles/about.module.css";
import Image from "next/image";
import Me from "@/public/Me.png";
import Link from "next/link";
import Footer from "@/components/footer";
export default function About() {
  return (
    <div className={styles.container}>
        <div className={styles.topSection}>
        <Image src={Me}/>
      <section className={styles.intro}>
        <h1>
          I'm <span className={styles.highlight}></span>Nathan Schroter a<br></br>{" "}
          <span className={styles.highlight}>Graphic Designer & Web Developer</span>
        </h1>
        <p>
        Hello my name is Nathan Schroter I am 19 years old graduate from the Digital Design and Development program at BCIT. I excel at UX/Ui Design and Graphic Designing. More specifically I love to development using ReactJS, NextJS, Illustrator, Photoshop, Indesign, After Effects and content management systems like Wordpress.I am from Richmond B.C.Looking forward to meeting you
        </p>
        <div className={styles.buttons}>
        <Link href={'/Resume.pdf'} target='_blank' download='Nathans Resume'> <button className={styles.btn}>Download CV</button>   </Link>
        </div>
      </section>
        </div>
        <div className={styles.skillContainer}>
        <div className={styles.skillsCard}>
          <h3>Skills</h3>
          <div className={styles.skillsIcons}>
            {['AE', 'ID', 'css', 'Figma', 'HTML', 'AI', 'JS', 'PS', 'React'].map(icon => (
              <Image key={icon} src={`/icons/${icon}.png`} alt={icon} width={40} height={40} className={styles.skillIcon} />
            ))}
          </div>
          <p>Visit the projects section to see the work done with these web technologies.</p>
        </div>
        </div>
      <div className={styles.education}>

      <section className={styles.timeline}>
        <h2>Education</h2>
        <div className={styles.entry}>
          <span className={styles.date}>2023 - 2025</span>
          <h3>BCIT</h3>
          <p>Digital Design and Developemnt</p>
        </div>
        <div className={styles.entry}>
          <span className={styles.date}>2018 - 2023</span>
          <h3>Mcmath</h3>
          <p>General Highschool Diploma</p>
        </div>
      </section>
      <section className={styles.timeline}>
        <h2>General work Experience</h2>
        <div className={styles.entry}>
          <span className={styles.date}>May 2024 - Present day</span>
          <h3>Dough maker</h3>
          <p>Steveston pizza</p>
        </div>
        <div className={styles.entry}>
          <span className={styles.date}>July-August 2023</span>
          <h3>Window cleaner</h3>
          <p>Clean Werx</p>
        </div>
        <div className={styles.entry}>
          <span className={styles.date}>(July - August 2022)</span>
          <h3>Host</h3>
          <p>Shady Island </p>
        </div>
        <div className={styles.entry}>
          <span className={styles.date}>May-September 2021</span>
          <h3>Host</h3>
          <p>Shady Island</p>
        </div>
        <div className={styles.entry}>
          <span className={styles.date}>2017- 2021</span>
          <h3>Ice Hockey Official Level 1</h3>
          <p> Richmond Jets Richmond BC </p>
        </div>
      </section>
      </div>
      <Footer/>
    </div>
  );
}
