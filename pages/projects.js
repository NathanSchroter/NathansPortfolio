import styles from "@/styles/projects.module.css";
import SampleCard from "@/components/sampleCards";
import Canucks from "@/public/canucks.png";
import Bitmask from "@/public/bitmask.png";
import Bookstore from "@/public/bookOne.png";
import Game from "@/public/codeGame.png";
import Cofee from "@/public/cofee.png";
import Elegant from "@/public/elegant.png";
import Knight from "@/public/knight.png";
import Love from "@/public/love.png";
import Music from "@/public/music.png";
import Ocean from "@/public/ocean.png";
import Meal from "@/public/onceuponameal.png";
import UNA from "@/public/una.png";
import Draft from "@/public/draft.png";
import Menu from "@/public/pizzaOne.png";

import Footer from "@/components/footer";


export default function Projects() {
    return (
        <>
            <div className={styles.mainContainer}>
                <SampleCard 
                    image={Canucks} 
                    title="Vancouver Canucks Graphic" 
                    subtitle="Graphic Design, Adobe Illustrator"
                />
                {/* <SampleCard 
                    image={Bitmask} 
                    title="Bitmask + Graphic Design Website" 
                    subtitle="Graphic Design, CSS, HTML, Javascript, Next.js"
                /> */}
                <SampleCard 
                    image={Bookstore} 
                    title="Bookstore Website" 
                    subtitle="CSS, HTML, Javascript, Next.js"
                />
                <SampleCard 
                    image={Cofee} 
                    title="Coffee Machine Graphic" 
                    subtitle="Adobe Illustrator"
                />
                <SampleCard 
                    image={Elegant} 
                    title="Double Exposure Photo" 
                    subtitle="Adobe Photoshop"
                />
                <SampleCard 
                    image={Knight} 
                    title="Knight Graphic" 
                    subtitle="Adobe Illustrator"
                />
                <SampleCard 
                    image={Love} 
                    title="Love Photo" 
                    subtitle="Photoshop"
                />
                <SampleCard 
                    image={Music} 
                    title="Favorite Music Artist" 
                    subtitle="Photoshop"
                />
                <SampleCard 
                    image={Ocean} 
                    title="Ocean Gradient Drawing" 
                    subtitle="Adobe Illustrator"
                />
                <SampleCard 
                    image={Meal} 
                    title="Once Upon A Meal" 
                    subtitle="Illustrator, Prototyping, CSS, HTML, Javascript, React.js"
                />
                <SampleCard 
                    image={UNA} 
                    title="UNA" 
                    subtitle="Illustrator, Prototyping"
                />
                <SampleCard 
                    image={Draft} 
                    title="Draft Labs" 
                    subtitle="Illustrator, Prototyping"
                />
                <SampleCard 
                    image={Game} 
                    title="Draft Labs" 
                    subtitle="Css, HTML, "
                />
                   <SampleCard 
                    image={Menu} 
                    title="Pizza Menu" 
                    subtitle="Indesign, Adobe Illustrator, Adobe Photoshop"
                />
            </div>
            <Footer />
        </>
    );
}

