import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import Footer from '@/components/footer';
import React, { useState } from 'react';
import Once from "@/public/onceuponameal.png"
import Overlay from '@/components/overlay';

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

  const handleNavigation = () => router.push('/casestudyOne');
  const handleNavigationTwo = () => router.push('/casestudyTwo');
  const handleNavigationThree = () => router.push('/casestudyThree');
  const handleNavigationFour = () => router.push('/casestudyFour');

    const [isOverlayVisible, setOverlayVisible] = useState(false);
  
    const showOverlay = () => {
      setOverlayVisible(true);
    };
  
    const hideOverlay = () => {
      setOverlayVisible(false);
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

        {/* Case Study Sections */}
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
            <button onClick={showOverlay}>Preview</button>
            <Overlay isVisible={isOverlayVisible} 
            image = {Once}
            text = {"This case study explores the development of a cultural social media app designed to connect people worldwide through the joy of food. The platform enables users to discover, share, and learn diverse cultural recipes, breaking the monotony of everyday meals while promoting global culinary appreciation. By integrating social media features, video tutorials, and an intuitive user experience, the app fosters an interactive and educational environment. Despite challenges in content diversity and technical limitations, the project successfully demonstrated its potential through positive user feedback and enhanced cultural awareness. With future improvements like AI-powered recommendations and advanced search filters, this app could revolutionize the way people explore and engage with global cuisines."}
            onClose={hideOverlay} />
         
          </div>




          <div className={styles.caseStudyImageContainer}>
            <Image src="/onceOne.png" alt="Once Upon a Meal Case Study" width={400} height={550} className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigation}>View Case Study</button>
        </div>

        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>DESIGNING Bookstore with a filtering system</h2>
          <div className={styles.icons}>
            <Image src="/css.png" alt="CSS" width={30} height={30} />
            <Image src="/js.png" alt="JavaScript" width={30} height={30} />
            <Image src="/gitHubOne.png" alt="GitHub" width={30} height={30} />
            <Image src="/html.png" alt="HTML" width={30} height={30} />
          </div>
          <div className={styles.caseStudyImageContainer}>
            <Image src="/bookThree.png" alt="Bookstore Case Study" width={400} height={550} className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigationTwo}>View Case Study</button>
        </div>

        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>Designing UNA</h2>
          <div className={styles.icons}>
            <Image src="/ps.png" alt="Photoshop" width={30} height={30} />
            <Image src="/ai.png" alt="Illustrator" width={30} height={30} />
            <Image src="/css.png" alt="CSS" width={30} height={30} />
            <Image src="/js.png" alt="JavaScript" width={30} height={30} />
            <Image src="/html.png" alt="HTML" width={30} height={30} />
            <Image src="/gitHubOne.png" alt="GitHub" width={30} height={30} />
            <Image src="/figma.png" alt="Figma" width={30} height={30} />
          </div>
          <div className={styles.caseStudyImageContainer}>
            <Image src="/una.png" alt="UNA Case Study" width={400} height={550} className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigationThree}>View Case Study</button>
        </div>

        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>Prototyping Draft Labs</h2>
          <div className={styles.icons}>
            <Image src="/ps.png" alt="Photoshop" width={30} height={30} />
            <Image src="/ai.png" alt="Illustrator" width={30} height={30} />
            <Image src="/figma.png" alt="Figma" width={30} height={30} />
          </div>
          <div className={styles.caseStudyImageContainer}>
            <Image src="/draft.png" alt="Draft Labs Case Study" width={400} height={550} className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigationFour}>Coming Soon</button>
        </div>
      </div>
      <Footer />
    </>
  );
}










