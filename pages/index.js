import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import Footer from '@/components/footer';
import Logo from "@/public/logo.png";
import OnceUponAMeal from "@/public/onceOne.png";
import UNA from "@/public/una.png";
import bookOne from "@/public/bookThree.png";
import Draft from "@/public/draft.png";
import ReactIcon from "@/public/react.png";
import PS from "@/public/ps.png";
import AI from "@/public/ai.png";
import CSS from "@/public/css.png";
import JS from "@/public/js.png";
import GIT from "@/public/gitHub.png";
import Html from "@/public/html.png";
import Figma from "@/public/figma.png";``

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

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Graphic Designer and UX/UI Designer</h1>
          </div>
          <div className={styles.imageContainer}>
            <img src={Logo.src} alt="Nathan" className={styles.profileImage} />
          </div>
        </div>

        {/* Case Study Sections */}
        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>DESIGNING Once Upon a Meal</h2>
          <div className={styles.icons}>
            <Image src={ReactIcon} />
            <Image src={PS} />
            <Image src={AI} />
            <Image src={CSS} />
            <Image src={JS} />
            <Image src={GIT} />
            <Image src={Html} />
          </div>
          <div className={styles.caseStudyImageContainer}>
            <img src={OnceUponAMeal.src} alt="Case Study" className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigation}>View Case Study</button>
        </div>

        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>DESIGNING Bookstore with a filtering system</h2>
          <div className={styles.icons}>
            <Image src={CSS} />
            <Image src={JS} />
            <Image src={GIT} />
            <Image src={Html} />
          </div>
          <div className={styles.caseStudyImageContainer}>
            <img src={bookOne.src} alt="Case Study" className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigationTwo}>View Case Study</button>
        </div>

        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>Designing UNA</h2>
          <div className={styles.icons}>
            <Image src={PS} />
            <Image src={AI} />
            <Image src={CSS} />
            <Image src={JS} />
            <Image src={Html} />
            <Image src={GIT} />
            <Image src={Figma} />
          </div>
          <div className={styles.caseStudyImageContainer}>
            <img src={UNA.src} alt="Case Study" className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigationThree}>View Case Study</button>
        </div>

        <div className={styles.caseStudySection}>
          <h2 className={styles.caseStudyTitle}>Prototyping Draft Labs</h2>
          <div className={styles.icons}>
            <Image src={PS} />
            <Image src={AI} />
            <Image src={Figma} />
          </div>
          <div className={styles.caseStudyImageContainer}>
            <img src={Draft.src} alt="Case Study" className={styles.caseStudyImage} />
          </div>
          <button className={styles.caseStudyButton} onClick={handleNavigationFour}>Coming Soon</button>
        </div>
      </div>
      <Footer />
    </>
  );
}









