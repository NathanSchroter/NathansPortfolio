import draftOne from "../public/draftOne.png";
import draftTwo from "../public/draftTwo.png";
import draftThree from "../public/draftThree.png";
import draftFour from "../public/draftFour.png";
import draftFive from "../public/draftMockOne.png";
import draftSix from "../public/draftMockTwo.png";
import draftSeven from "../public/draftMockThree.png";
import draftEight from "../public/draftMockFour.png";


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
            <h1>Case Study: Beer Distribution Web App</h1>
            <p>
              This project was designed as a distribution web app prototype for our beer company.
              The objective was to create an interactive yet realistic prototype that could potentially be used in the future.
              The platform aimed to connect beer enthusiasts with new products while also allowing companies to receive and manage their beer shipments efficiently.
              The focus was on refining the user experience, research analysis, and design principles before actual development began.
            </p>
          </section>
          <Image src={draftEight} alt="photo one" />
        </div>
        <section className={styles.problemStatement}>
          <h2>Problem Statement</h2>
          <p>
            Unlike traditional projects that solve a specific problem, this project was centered around research, style guide integration, and prototyping.
            The main goal was to learn and practice pre-development steps such as user research, UI/UX planning, and prototyping before diving into coding.
            This process helped us better understand the layout, user needs, and overall functionality of the app while ensuring a seamless transition into future development.
          </p>
        </section>
        <Image src={draftTwo} alt="photo two" />
        <div className={styles.sectionOne}>
          <section className={styles.approach}>
            <h2>Approach & Methodology</h2>
            <ul>
              <li>Conducted research on possible consumers, distribution needs, and user expectations.</li>
              <li>Analyzed competitor apps to identify industry trends and best practices.</li>
              <li>Developed customer personas to better understand potential users.</li>
              <li>Created a style guide to ensure consistency in colors, typography, and UI elements.</li>
              <li>Designed wireframes to outline the app’s structure.</li>
              <li>Created an interactive prototype using tools like Figma.</li>
              <li>Ensured a logical and user-friendly navigation experience.</li>
            </ul>
          </section>
          <Image src={draftSeven} alt="photo three" />
        </div>
        <section className={styles.execution}>
          <h2>Execution & Implementation</h2>
          <ul>
            <li>Initial research and competitor analysis.</li>
            <li>Development of a comprehensive style guide.</li>
            <li>Wireframing of core pages and app structure.</li>
            <li>Creation of an interactive prototype with user flows.</li>
            <li>Feedback collection and prototype refinements.</li>
          </ul>
          <p>
            Challenges & Solutions:
          </p>
          <ul>
            <li>Defining User Needs: Since this was a concept project, gathering relevant data was challenging. We solved this by conducting surveys and analyzing competitors.</li>
            <li>Balancing Aesthetics & Functionality: Ensuring the UI was both visually appealing and practical required multiple iterations and testing.</li>
            <li>Prototyping Complexity: Making the prototype feel interactive and realistic took effort, but using Figma’s interactive components made the process smoother.</li>
          </ul>
        </section>
        <Image src={draftFour} alt="photo four" />
        <section className={styles.results}>
          <h2>Results & Impact</h2>
          <ul>
            <li>Comprehensive User Research: Understanding consumer preferences and distributor needs.</li>
            <li>A Structured Style Guide: Created a consistent design framework for future development.</li>
            <li>Interactive Prototype: Provided a realistic preview of how the final app would function.</li>
            <li>Better Pre-Development Understanding: Helped solidify our knowledge of planning and design before coding.</li>
          </ul>
        </section>
        <Image src={draftFive} alt="photo four" />
        <Image src={draftThree} alt="photo four" />
        <section className={styles.lessons}>
          <h2>Lessons Learned</h2>
          <p>What Worked Well:</p>
          <ul>
            <li>User research helped shape a more user-friendly design.</li>
            <li>The style guide ensured consistent branding and design choices.</li>
            <li>Interactive prototyping allowed for better visualization of app functionality.</li>
          </ul>
          <p>What Could Be Improved:</p>
          <ul>
            <li>Conducting more in-depth user testing to validate design choices.</li>
            <li>Exploring more advanced interactive prototype features.</li>
            <li>Creating a mobile-responsive design version for testing usability across devices.</li>
          </ul>
        </section>
        <Image src={draftOne} alt="photo four" />
        <Image src={draftEight} alt="photo four" />
        <section className={styles.conclusion}>
          <h2>Conclusion</h2>
          <p>
            This project was a valuable learning experience in prototyping, style guide development, and user research.
            By focusing on design and planning before coding, we gained a deeper understanding of how to build user-centric applications.
            The insights from this project will be instrumental when transitioning into actual development, ensuring a well-structured and efficient build process.
          </p>
        </section>

      </div>
      <Footer />
    </>
  );
}
