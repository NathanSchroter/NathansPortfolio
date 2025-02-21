import bookOne from "@/public/bookOne.png";
import bookTwo from "@/public/bookTwo.png";
import bookThree from "@/public/bookThree.png";
import bookFour from "@/public/bookFour.png";
import Image from "next/image";

import React from "react";
import styles from "../styles/caseStudyOne.module.css";
import Footer from "@/components/footer";

export default function Bookstore() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <section className={styles.introduction}>
            <h1>Case Study: Implementing Filters in Next.js for Book Sorting</h1>
            <p>
              This project was centered around developing an intuitive and efficient
              filtering system within a Next.js environment to enhance the user experience
              when sorting books. The objective was to create a seamless method for sorting
              books based on multiple parameters, including category, author, alphabetical order,
              and edition, allowing users to locate their desired books effortlessly.
            </p>
            <p>
              By implementing this filtering system, we explored the core principles of
              dynamic sorting and filtering within web applications. We analyzed performance
              optimization techniques and their direct impact on usability, ensuring that
              the sorting mechanism was both responsive and scalable.
            </p>
          </section>
          <Image src={bookOne} alt="Book sorting interface" />
        </div>

        <section className={styles.problemStatement}>
          <h2>Problem Statement</h2>
          <p>
            One of the primary challenges encountered during this project was implementing
            an efficient alphabetical sorting mechanism (A-Z, Z-A) while maintaining optimal
            application performance. Ensuring the sorting logic was smooth and did not cause
            lag, especially for large datasets, was crucial for providing a seamless user experience.
          </p>
          <p>
            Filtering systems play a crucial role in modern web applications, particularly in
            e-commerce platforms, digital libraries, and search functionalities. This project
            provided invaluable insights into overcoming technical challenges associated with
            real-world filtering and sorting requirements.
          </p>
        </section>
        <Image src={bookThree} alt="Book sorting functionality" />

        <div className={styles.sectionOne}>
          <section className={styles.approach}>
            <h2>Approach & Methodology</h2>
            <p>
              To ensure the filtering system was both efficient and scalable, we conducted thorough
              research on filtering techniques available within Next.js. By leveraging JavaScript's
              built-in sorting functions alongside React's state management, we were able to
              implement an effective filtering system tailored for book categorization.
            </p>
            <p>
              The project was structured in phases. Initially, we focused on developing category-based
              filtering, allowing users to narrow their search based on specific book genres. Following
              this, author-based filtering was introduced, enhancing search precision. The next phase
              involved implementing sorting logic for alphabetical ordering and edition sorting, which
              required optimizing the performance to handle larger book collections effectively.
            </p>
          </section>
          <Image src={bookTwo} alt="Sorting methodology visualization" />
        </div>

        <section className={styles.execution}>
          <h2>Execution & Implementation</h2>
          <p>
            The first step in implementation involved setting up an initial dataset of books,
            complete with relevant filtering attributes such as category, author, title, and edition.
            Once the data structure was established, filtering options were developed to allow users
            to sort books dynamically without excessive delays.
          </p>
          <p>
            To improve performance, we incorporated memoization techniques to minimize unnecessary
            re-renders when the filtering criteria changed. The sorting logic was further refined
            to address case sensitivity issues in alphabetical sorting, ensuring accurate results
            regardless of letter casing.
          </p>
          <p>
            Enhancing the UI was also a key focus. Dropdown menus and buttons were implemented to
            provide a user-friendly experience, making it easier for users to select filtering
            options without overwhelming the interface.
          </p>
          <p>
            <strong>Challenges & Solutions:</strong>
          </p>
          <p>
            Initially, the alphabetical sorting mechanism faced issues due to inconsistencies in
            letter casing, which led to incorrect sorting results. This was resolved by normalizing
            all book titles to lowercase before processing the sorting operation.
          </p>
          <p>
            Performance bottlenecks were another concern, particularly when handling larger datasets.
            To address this, we utilized memoization and optimized state updates, reducing redundant
            re-renders and improving overall efficiency.
          </p>
        </section>
        <Image src={bookFour} alt="Filter and sorting interface" />

        <section className={styles.results}>
          <h2>Results & Impact</h2>
          <p>
            By the end of the project, we successfully implemented a fully functional filtering system
            that allowed users to sort books based on various criteria. The optimized sorting logic
            significantly improved application responsiveness, providing users with an intuitive and
            efficient experience.
          </p>
          <p>
            The solution developed in this project can be seamlessly integrated into larger-scale
            applications such as online bookstores, digital libraries, and other platforms requiring
            sophisticated filtering mechanisms.
          </p>
        </section>

        <section className={styles.lessons}>
          <h2>Lessons Learned</h2>
          <p>
            This project provided several key takeaways. One of the most valuable lessons was
            developing effective state management strategies to optimize performance. Understanding
            JavaScript sorting techniques at a deeper level helped refine our approach, ensuring that
            filters worked efficiently across different datasets.
          </p>
          <p>
            The user interface enhancements played a crucial role in making the filtering process
            more intuitive. By improving UI elements such as dropdowns and navigation bars, we
            increased overall usability.
          </p>
          <p>
            Future improvements could include the addition of a search feature to allow users to
            refine their searches even further. Enhancing the visual representation of books and
            providing interactive elements such as book descriptions on click would also improve the
            overall user experience.
          </p>
        </section>

        <section className={styles.conclusion}>
          <h2>Conclusion</h2>
          <p>
            The development of this filtering system reinforced essential concepts in sorting algorithms,
            state management, and performance optimization. These are fundamental skills for building
            efficient and user-friendly filtering systems in modern web applications.
          </p>
          <p>
            Filtering remains a core functionality in many web applications, and the insights gained
            from this project will contribute to future enhancements and implementations in more
            complex real-world scenarios.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

