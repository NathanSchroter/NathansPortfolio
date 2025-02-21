import OnceOne from "@/public/onceOne.png";
import OnceTwo from "@/public/onceTwo.png";
import OnceThree from "@/public/onceThree.png";
import OnceFour from "@/public/onceFour.png";
import Image from "next/image";
import OnceFigma from "@/public/onceFigmaOne.png"
import OnceFigmaTwo from "@/public/onceFigmaTwo.png"
import OnceFigmaThree from "@/public/onceFigmaThree.png"
import React from "react";
import styles from "../styles/caseStudyOne.module.css";
import Footer from "@/components/footer";

export default function CulturalRecipeApp() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <section className={styles.introduction}>
            <h1>Case Study: Cultural Social Media App for Global Recipes</h1>
            <p>
              This project was designed to serve as a cultural social media platform where users could showcase, share, and learn unique recipes from different cultures worldwide. By integrating a social media-style interface, the app encourages engagement and interaction among food enthusiasts, home cooks, and professional chefs alike.
            </p>
          </section>
          <Image src={OnceOne} alt="Illustration of app interface" />
        </div>
        
        <section className={styles.problemStatement}>
          <h2>Problem Statement</h2>
          <p>
            Many individuals tend to stick to familiar meals, leading to a repetitive and uninspiring diet. Additionally, finding authentic recipes from other cultures can often be challenging. Our goal was to create a platform that not only introduces users to diverse cuisines but also provides an engaging way to learn and prepare them through interactive features.
          </p>
        </section>
        <Image src={OnceThree} alt="User exploring recipe options" />

        <div className={styles.sectionOne}>
          <section className={styles.approach}>
            <h2>Approach & Methodology</h2>
            <p>
              To achieve our goal, we adopted a structured approach, starting with research and ideation. We explored how users interact with existing food platforms and identified features that enhance learning and engagement. Our design process emphasized user-friendly navigation, ensuring that even novice users could easily find and follow recipes.
            </p>
            <p>
              The app was built using React Native for the frontend, providing a seamless cross-platform experience. A cloud-based backend was implemented to store user-generated content efficiently. Additionally, we integrated essential social features, such as the ability to like, comment, share, and save recipes, fostering a sense of community among users.
            </p>
            <p>
              One of the standout elements was the inclusion of video tutorials, allowing users to visually follow each step of a recipe. This feature made learning new recipes more accessible and engaging.
            </p>
          </section>
          <Image src={OnceTwo} alt="App wireframe and design layout" />
        </div>

        <section className={styles.execution}>
          <h2>Execution & Implementation</h2>
          <p>
            The development process was carried out in multiple phases, starting with detailed planning and wireframing. Once the UI/UX design was finalized, we moved on to development, ensuring the app's core functionalities operated smoothly. Extensive testing was conducted to identify and fix potential bugs, followed by deployment to a select group of users for beta testing. Their feedback helped refine the final version of the platform, making it more intuitive and feature-rich.
          </p>
        </section>
        <Image src={OnceFour} alt="Testing and deployment process" />

        <section className={styles.results}>
          <h2>Results & Impact</h2>
          <p>
            The app was well-received by early users, who enjoyed discovering and experimenting with new recipes. Many users reported an increased appreciation for different cultures through their cuisines. The interactive features, particularly video tutorials, played a significant role in user engagement, making the cooking process more accessible and enjoyable.
          </p>
          <p>
            Additionally, the platform fostered a growing community of food lovers who actively shared their culinary knowledge, enhancing cultural exchange through food.
          </p>
        </section>
          <Image src={OnceFigma} alt="figma photo one"/>
          <Image src={OnceFigmaThree} alt="figma photo three"/>
        <section className={styles.lessons}>
          <h2>Lessons Learned</h2>
          <p>
            Throughout the development of this project, several key insights emerged. The social media-style interface proved to be highly effective in driving user engagement. The inclusion of video tutorials significantly enhanced the learning experience, making it easier for users to replicate complex recipes. Moreover, the backend infrastructure performed smoothly, handling large amounts of user-generated content efficiently.
          </p>
          <p>
            However, there were areas for improvement. Expanding the diversity of recipes remains a challenge, as contributions need to come from a broad range of users. Additionally, refining search and filtering options would make it easier for users to find specific dishes based on dietary preferences or ingredients. Looking ahead, integrating AI-based personalized food recommendations could further enhance user experience.
          </p>
        </section>
        <Image src={OnceFigmaTwo}/>
        <section className={styles.conclusion}>
          <h2>Conclusion</h2>
          <p>
            The Cultural Recipe App successfully tackled the issue of food monotony by offering a dynamic and educational platform for global culinary discovery. Through social engagement and interactive learning, users were able to broaden their culinary horizons and deepen their appreciation for diverse cuisines. With continued development, this platform has the potential to become a go-to resource for food lovers worldwide.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

