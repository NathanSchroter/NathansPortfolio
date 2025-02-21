import unaOne from "@/public/unaOne.png";
import unaTwo from "@/public/unaTwo.png";
import unaThree from "@/public/unaThree.png";
import unaFour from "@/public/unaFour.png";
import Image from "next/image";
import UnaFigmaOne from "@/public/UnaFigmaOne.png";
import UnaFigmaTwo from "@/public/UnaFigmaTwo.png";
import UnaFigmaThree from "@/public/UnaFigmaThree.png";
import React from "react";
import styles from "../styles/caseStudyOne.module.css";
import Footer from "@/components/footer";

export default function Una() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <section className={styles.introduction}>
            <h1>Case Study: Avatar-Based Social Media Platform</h1>
            <p>
              This project was a research-driven initiative aimed at understanding the intricacies of preparation and planning before development. The goal was to conceptualize and design an interactive prototype that could be pitched to potential stakeholders, including our teachers and classmates.
            </p>
          </section>
          <Image src={unaOne} alt="Illustration of avatar-based interactions" />
        </div>
        
        <section className={styles.problemStatement}>
          <h2>Problem Statement</h2>
          <p>
            Traditional social media platforms often encourage passive engagement through endless scrolling. Our goal was to design a more immersive experience where users could interact in a dynamic virtual space. By leveraging avatars, users can move beyond conventional engagement and explore a digital environment in a more meaningful way.
          </p>
        </section>
        <Image src={unaTwo} alt="User exploring avatar-based platform" />

        <div className={styles.sectionOne}>
          <section className={styles.approach}>
            <h2>Approach & Methodology</h2>
            <p>
              Inspired by classic interactive experiences like Club Penguin, the platform was designed to allow users to navigate a virtual world through customizable avatars. Unlike traditional social networks, this approach emphasizes real-time interactions, encouraging users to explore, meet new people, and engage with digital content in novel ways.
            </p>
            <p>
              While maintaining familiar social media functionalities like posting and scrolling, we aimed to enhance the user experience with immersive elements. Our prototyping phase utilized Figma, enabling us to visually map out key features and test interactions before development.
            </p>
          </section>
          <Image src={unaThree} alt="App wireframe and user journey mapping" />
        </div>

        <section className={styles.execution}>
          <h2>Execution & Implementation</h2>
          <p>
            The development process followed an Agile methodology, allowing for iterative refinements based on continuous feedback. Using Trello, we efficiently tracked progress and ensured clear alignment within the team.
          </p>
          <p>
            To define our scope and objectives, we conducted extensive market research and user interviews. We then developed a Minimum Viable Product (MVP) to test core functionalities. Our testing process included unit testing, integration testing, A/B testing, and user acceptance testing, ensuring a high-quality user experience. By rolling out the platform in phases, we minimized disruptions and gathered valuable feedback for further enhancements.
          </p>
        </section>
        <Image src={unaFour} alt="Testing and deployment phases" />

        <section className={styles.results}>
          <h2>Results & Impact</h2>
          <p>
            Early users responded positively to the platform's interactive approach, finding it more engaging than traditional social media applications. The unique avatar-based experience fostered a sense of presence and interaction, leading to higher engagement levels.
          </p>
          <p>
            The project demonstrated significant potential for further development and scalability, highlighting a growing demand for more immersive digital interactions.
          </p>
        </section>
        <Image src={UnaFigmaOne}/>
        <section className={styles.lessons}>
          <h2>Lessons Learned</h2>
          <p>
            The iterative development approach proved invaluable, allowing us to quickly adapt based on feedback. Collaboration with stakeholders ensured that our design decisions aligned with user expectations.
          </p>
          <p>
            However, we identified areas for improvement. A more comprehensive early risk assessment could have helped mitigate technical challenges, and increasing the frequency of usability testing would have refined UX/UI decisions earlier in the process.
          </p>
        </section>
        <Image src={UnaFigmaTwo}/>
        <Image src={UnaFigmaThree}/>
        <section className={styles.conclusion}>
          <h2>Conclusion</h2>
          <p>
            This project successfully explored the potential of a more immersive and interactive social media experience. The positive reception suggests that avatar-driven digital spaces could represent the future of online engagement. By leveraging innovative technologies, such platforms have the opportunity to redefine how users interact in digital environments.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

