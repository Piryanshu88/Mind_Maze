import React, { useState, useEffect } from "react";
import styles from "../Home/Home.module.css";
import { Center, Heading } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/Begin black.png";
import logo from "../../assets/Picsart_23-03-04_10-38-49-759.png"

import img2 from "../../assets/Begin green.png";
import { Link } from "react-router-dom";
export const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className={styles.container}>
      <Heading style={{ textAlign: "center" , marginTop:"2em", fontWeight:"lighter"}}>WELCOME TO <img src={logo } style={{width:"20%", margin:"auto"}}/></Heading>

      {/* slider */}
      <div className={styles.slider_container}>
        <div className={styles.slider}>
          <div className={styles.slides}>
            {/*********************************** 1st slide *****************************/}
            <div id="slides__1" className={styles.slide}>
              {/************** 1st slide begin button *******************/}

              <div data-aos="zoom-in-up" className={styles.begainContainer}>
                <Link to="/room/anime">
                  <img
                    className={styles.begin}
                    src={isHovering ? img1 : img2}
                    alt="begin"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </Link>
              </div>
              {/*  */}

              <img
                className={styles.slide__img}
                src="https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2017/12/capa-18-1024x576.jpg.webp"
              />
              <span className={styles.slide__text}>Let's Play Anime Quiz</span>
              <a
                className={styles.slide__prev}
                href="#slides__3"
                title="Next"
              ></a>
              <a
                className={styles.slide__next}
                href="#slides__2"
                title="Next"
              ></a>
            </div>

            {/*********************************** 2nd slide *****************************/}
            <div id="slides__2" className={styles.slide}>
              {/************** 2nd slide begin button *******************/}
              <div data-aos="zoom-in-up" className={styles.begainContainer}>
                <Link to="/room/education">
                  <img
                    className={styles.begin}
                    src={isHovering ? img1 : img2}
                    alt="begin"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </Link>
              </div>
              {/*  */}

              <img
                className={styles.slide__img}
                src="https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg"
              />
              <span className={styles.slide__text}>
                Let's Play ........ Quiz
              </span>
              <a
                className={styles.slide__prev}
                href="#slides__1"
                title="Prev"
              ></a>
              <a
                className={styles.slide__next}
                href="#slides__3"
                title="Next"
              ></a>
            </div>

            {/*********************************** 3rd slide *****************************/}
            <div id="slides__3" className={styles.slide}>
              {/************** 3rd slide begin button *******************/}
              <div data-aos="zoom-in-up" className={styles.begainContainer}>
                <img
                  className={styles.begin}
                  src={isHovering ? img1 : img2}
                  alt="begin"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              {/*  */}

              <img
                className={styles.slide__img}
                src="https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg"
              />
              <span className={styles.slide__text}>
                Let's Play ........ Quiz
              </span>
              <a
                className={styles.slide__prev}
                href="#slides__2"
                title="Prev"
              ></a>
              <a
                className={styles.slide__next}
                href="#slides__1"
                title="Prev"
              ></a>
            </div>
          </div>
        </div>

        <div>
          <div>
            <a className={styles.slider__navlink} href="#slides__1"></a>
          </div>
          <div>
            <a className={styles.slider__navlink} href="#slides__2"></a>
          </div>
          <div>
            <a className={styles.slider__navlink} href="#slides__3"></a>
          </div>
        </div>
      </div>
    </div>
  );
};
