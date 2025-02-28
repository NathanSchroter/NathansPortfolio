import unaOne from "../public/unaOne.png";
import unaTwo from "../public/unaTwo.png";
import unaThree from "../public/unaThree.png";
import unaFour from "../public/unaFour.png";
import Image from "next/image";
import React from "react";
import styles from "../styles/caseStudyOne.module.css";
import Footer from "@/components/footer";

export default function DraftLabs() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <section className={styles.introduction}>
            <h1>Case Study: Avatar-Based Social Media Platform</h1>
            <p>
              This project was a prototype and research-based initiative designed to help us understand the preparation and planning necessary before coding. The goal was to create an interactive prototype app proposed to a client—in our case, our teachers and classmates.
            </p>
          </section>
          <Image src={unaOne} alt="photo one" />
        </div>
        <section className={styles.problemStatement}>
          <h2>Problem Statement</h2>
          <p>
            A new, innovative social media platform that differs from traditional platforms. This avatar-based social media experience moves beyond endless scrolling, allowing users to interact in a more dynamic and immersive way.
          </p>
        </section>
        <Image src={unaTwo} alt="photo one" />
        <div className={styles.sectionOne}>
          <section className={styles.approach}>
            <h2>Approach & Methodology</h2>
            <ul>
              <li>Inspired by classic interactive experiences like Club Penguin, users can navigate a virtual world with avatars.</li>
              <li>Users can walk around their city, meet new people, and engage with content in an innovative way.</li>
              <li>Standard social media features like posting and scrolling remain integrated.</li>
              <li>Prototyping was completed using Figma to create an interactive visual representation of the app.</li>
            </ul>
          </section>
          <Image src={unaThree} alt="photo one" />
        </div>
        <section className={styles.execution}>
          <h2>Execution & Implementation</h2>
          <p>
            The project followed a structured Agile approach with iterative sprints ensuring continuous feedback and adaptability. We used Trello to track progress and ensure alignment within the team.
          </p>
          <ul>
            <li>Conducted interviews and market research to define scope and objectives.</li>
            <li>Developed an MVP (Minimum Viable Product) to test core functionalities.</li>
            <li>Implemented unit, integration, A/B, and user acceptance testing.</li>
            <li>Rolled out in phases to minimize disruption.</li>
            <li>Collected feedback and made necessary refinements.</li>
          </ul>
        </section>
        <Image src={unaFour} alt="photo one" />
        <section className={styles.results}>
          <h2>Results & Impact</h2>
          <ul>
            <li>Users responded positively to the interactive approach.</li>
            <li>Engagement levels increased compared to traditional scrolling-based apps.</li>
            <li>The concept has potential for further development and scalability.</li>
          </ul>
        </section>
        <section className={styles.lessons}>
          <h2>Lessons Learned</h2>
          <p>What Worked Well:</p>
          <ul>
            <li>Iterative development allowed for quick adjustments based on feedback.</li>
            <li>Stakeholder collaboration helped align goals with user expectations.</li>
          </ul>
          <p>Areas for Improvement:</p>
          <ul>
            <li>Early risk assessment could have prevented some technical challenges.</li>
            <li>More frequent testing could have improved UX/UI decisions earlier.</li>
          </ul>
        </section>
        <section className={styles.conclusion}>
          <h2>Conclusion</h2>
          <p>
            This project successfully explored the potential of a more immersive and interactive social media experience. The positive reception suggests that such an approach could be the future of digital interactions.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}