import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import Footer from '@/components/footer';
import Overlay from '@/components/overlay';
// import Video from "@/public/onceVid.mp4";
import Once from "@/public/onceuponameal.png";
import bookstore from "@/public/Bookstore.png";
import una from "@/public/una.png";
import draft from "@/public/draft.png";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const handleScroll = () => {
      document.body.classList.add('scrolling');
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => router.push(path);

  const [overlayData, setOverlayData] = useState(null);

  const showOverlay = (image, text) => {
    setOverlayData({ image, text });
  };

  const hideOverlay = () => {
    setOverlayData(null);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Graphic Designer and UX/UI Designer</h1>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/logo.png" alt="Nathan" width={100} height={200} className={styles.profileImage} />
          </div>
        </div>

        {/* Case Study: Once Upon a Meal */}
        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>DESIGNING Once Upon a Meal</h2>
          <div className={styles.preview}>
            <div className={styles.icons}>
              <Image src="/react.png" alt="React" width={30} height={30} />
              <Image src="/ps.png" alt="Photoshop" width={30} height={30} />
              <Image src="/ai.png" alt="Illustrator" width={30} height={30} />
              <Image src="/css.png" alt="CSS" width={30} height={30} />
              <Image src="/js.png" alt="JavaScript" width={30} height={30} />
              <Image src="/gitHubOne.png" alt="GitHub" width={30} height={30} />
              <Image src="/html.png" alt="HTML" width={30} height={30} />
            </div>
            <div className={styles.summaryOne}>
            <button  onClick={() => showOverlay(Once, "This cultural social media app was designed to help users discover, share, and learn unique recipes from around the world. It aimed to break food monotony by providing diverse cultural dishes through an interactive platform with social media-style features like video tutorials, likes, and comments. Built using React Native and local cloud storage, the app faced challenges in content diversity and video optimization but successfully created an engaging and educational experience. Users appreciated its intuitive design and cultural insights, with future improvements planned for recipe diversity, search features, and AI-based recommendations.")}>
            <p>Summary</p> 
            </button>
            </div>
          </div>
          <div className={styles.caseStudyImageContainer}>
            <Image src="/onceOne.png" alt="Once Upon a Meal Case Study" width={400} height={550} className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={() => handleNavigation('/casestudyOne')}>View Case Study</button>
        </div>

        {/* Case Study: Bookstore */}
        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>DESIGNING Bookstore with a filtering system</h2>
          <div className={styles.preview}>
            <div className={styles.icons}>
              <Image src="/css.png" alt="CSS" width={30} height={30} />
              <Image src="/js.png" alt="JavaScript" width={30} height={30} />
              <Image src="/gitHubOne.png" alt="GitHub" width={30} height={30} />
              <Image src="/html.png" alt="HTML" width={30} height={30} />
            </div>
            <div className={styles.summaryOne}>
            <button onClick={() => showOverlay(bookstore, "This project focused on implementing a dynamic book filtering system in Next.js, allowing users to sort books by category, author, alphabetical order, and edition. The main challenge was optimizing sorting functions for efficiency and responsiveness, particularly for alphabetical sorting. Using JavaScript’s .sort method and state management with useState and useEffect, the project successfully created a seamless and practical filtering experience. The implementation improved user interaction and performance, highlighting the importance of sorting algorithms and optimization. Future improvements could include a search feature, enhanced book styling, and interactive book details for a better user experience.")}>
                <p>Summary</p>   
            </button>
            </div>
          </div>
          <div className={styles.caseStudyImageContainer}>
            <Image src="/bookThree.png" alt="Bookstore Case Study" width={400} height={550} className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={() => handleNavigation('/caseStudyTwo')}>View Case Study</button>
        </div>

        {/* Case Study: UNA */}
        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>Designing UNA</h2>
          <div className={styles.preview}>
            <div className={styles.icons}>
              <Image src="/ps.png" alt="Photoshop" width={30} height={30} />
              <Image src="/ai.png" alt="Illustrator" width={30} height={30} />
              <Image src="/css.png" alt="CSS" width={30} height={30} />
              <Image src="/js.png" alt="JavaScript" width={30} height={30} />
              <Image src="/html.png" alt="HTML" width={30} height={30} />
              <Image src="/gitHubOne.png" alt="GitHub" width={30} height={30} />
              <Image src="/figma.png" alt="Figma" width={30} height={30} />
            </div>
            <div className={styles.summaryOne} >
            <button  onClick={() => showOverlay(una, "This project focused on designing an innovative avatar-based social media platform that enhances user interaction beyond traditional scrolling. Inspired by games like Club Penguin, users could navigate a virtual city, meet new people, and engage with content in a more immersive way. The project utilized Figma to create an interactive prototype, following an Agile development strategy with iterative testing. Challenges included user navigation difficulties due to the novel concept, but feedback-driven refinements improved usability. The prototype was well-received, demonstrating potential for future development. Key lessons included early risk assessment and frequent testing to streamline the user experience.")}>
             <p> Summary</p>
            </button>
            </div>
          </div>
          <div className={styles.caseStudyImageContainer}>
            <Image src="/una.png" alt="UNA Case Study" width={400} height={550} className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={() => handleNavigation('/casestudyThree')}>View Case Study</button>
        </div>

        {/* Case Study: Draft Labs */}
        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>Prototyping Draft Labs</h2>
          <div className={styles.preview}>
            <div className={styles.icons}>
              <Image src="/ps.png" alt="Photoshop" width={30} height={30} />
              <Image src="/ai.png" alt="Illustrator" width={30} height={30} />
              <Image src="/figma.png" alt="Figma" width={30} height={30} />
            </div>
            <div className={styles.summaryOne}>
            <button onClick={() => showOverlay(draft, "The Draft Labs project was a prototyping initiative for a beer distribution web app, emphasizing user research, UI/UX design, and style guide integration before development. The goal was to create an interactive prototype connecting beer enthusiasts with new products while streamlining company shipments. Using Figma, Google Forms, and Trello, the team conducted user research, analyzed competitors, and developed a structured design framework. Key outcomes included a comprehensive style guide, an interactive prototype, and a better understanding of pre-development processes. The project refined design and research skills, setting a strong foundation for future development.")}>
              <p>Summary</p>
            </button>
            </div>
          </div>
          <div className={styles.caseStudyImageContainer}>
            <Image src="/draft.png" alt="Draft Labs Case Study" width={400} height={550} className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={() => handleNavigation('/casestudyFour')}>Coming Soon</button>
        </div>
      </div>

      <Footer />

      {/* Overlay Component */}
      {overlayData && (
        <Overlay 
          isVisible={!!overlayData} 
          image={overlayData.image} 
          text={overlayData.text} 
          onClose={hideOverlay} 
        />
      )}
    </>
  );
}











