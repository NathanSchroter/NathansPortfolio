import styles from "@/styles/projects.module.css";
import SampleCard from "@/components/sampleCards";
import Canucks from "@/public/Canucks.png";
import Bitmask from "@/public/Bitmask.png";
import Bookstore from "@/public/bookOne.png";
import Cofee from "@/public/cofee.png";
import Elegant from "@/public/Elegant.png";
import Knight from "@/public/Knight.png";
import Love from "@/public/Love.png";
import Music from "@/public/Music.png";
import Ocean from "@/public/ocean.png";
import Meal from "@/public/onceuponameal.png";
import UNA from "@/public/UNA.png";
import Draft from "@/public/Draft.png";
import Footer from "@/components/footer";

export default function Projects() {
    return (
        <>
            <div className={styles.mainContainer}>
                <SampleCard 
                    image={Canucks} 
                    title="Vancouver Canucks Graphic" 
                    subtitle="Graphic Design, Adobe Illustrator"
                    // caseStudyLink="/caseStudyOne"
                />
                <SampleCard 
                    image={Bitmask} 
                    title="Bitmask + Graphic Design Website" 
                    subtitle="Graphic Design, CSS, HTML, Javascript, Next.js"
                    // caseStudyLink="/caseStudyTwo"
                />
                <SampleCard 
                    image={Bookstore} 
                    title="Bookstore Website" 
                    subtitle="CSS, HTML, Javascript, Next.js"
                    // caseStudyLink="/caseStudyThree"
                />
                <SampleCard 
                    image={Cofee} 
                    title="Coffee Machine Graphic" 
                    subtitle="Adobe Illustrator"
                    // caseStudyLink="/caseStudyFour"
                />
                <SampleCard 
                    image={Elegant} 
                    title="Double Exposure Photo" 
                    subtitle="Adobe Photoshop"
                    // caseStudyLink="/caseStudyFive"
                />
                <SampleCard 
                    image={Knight} 
                    title="Knight Graphic" 
                    subtitle="Adobe Illustrator"
                    // caseStudyLink="/caseStudySix"
                />
                <SampleCard 
                    image={Love} 
                    title="Love Photo" 
                    subtitle="Photoshop"
                    // caseStudyLink="/caseStudySeven"
                />
                <SampleCard 
                    image={Music} 
                    title="Favorite Music Artist" 
                    subtitle="Photoshop"
                    // caseStudyLink="/caseStudyEight"
                />
                <SampleCard 
                    image={Ocean} 
                    title="Ocean Gradient Drawing" 
                    subtitle="Adobe Illustrator"
                    // caseStudyLink="/caseStudyNine"
                />
                <SampleCard 
                    image={Meal} 
                    title="Once Upon A Meal" 
                    subtitle="Illustrator, Prototyping, CSS, HTML, Javascript, React.js"
                    // caseStudyLink="/caseStudyTen"
                />
                <SampleCard 
                    image={UNA} 
                    title="UNA" 
                    subtitle="Illustrator, Prototyping"
                    // caseStudyLink="/caseStudyEleven"
                />
                <SampleCard 
                    image={Draft} 
                    title="Draft Labs" 
                    subtitle="Illustrator, Prototyping"
                    // caseStudyLink="/caseStudyTwelve"
                />
            </div>
            <Footer />
        </>
    );
}

