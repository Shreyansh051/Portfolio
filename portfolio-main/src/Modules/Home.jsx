import React from "react";
import CustomNav from "../Components/NavBar";
import styles from "../Css/Home.module.css";
import { Container,  Image } from "react-bootstrap";
import useWindowDimensions from "../utils/dimensionHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// library.add()

const Home = ({ history }) => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <CustomNav />
      <div
        className="position-absolute"
        style={{
          height: "100vh",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <Container className="h-100">
          <div className="d-flex h-100">
            <div className={`my-auto ${width > 760 ? "w-50" : ""}`}>
              <div>
              <div  >
              <img className={styles.name}  src="../images/Shreyansh.gif
              " alt="shreyansh"/>
</div>
                <p className={styles.description}>
                I am always enthusiastic about developing websites and web applications. I like to talk about new technologies</p>
                <br />
                <div>
                <div className={`${styles.third} d-flex ml-2 mt-3`}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Shreyansh051"
                      className={`${styles.effe}  ml-4 p-0 mr-3`}
                    >
                      <FontAwesomeIcon size="2x" icon={faGithubSquare} />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/shreyansh-21b181215/"
                      className={` ${styles.effe} p-0 mr-3`}
                    >
                      <FontAwesomeIcon size="2x" icon={faLinkedin} />
                    </a>
                  </div>
                  <br />
                  <button
                    className={` ${styles.resume} ${styles.bg}`}
                    onClick={() => window.open("/resume.pdf", "_blank")}
                  >
                    Resume
                  </button>
              
                </div>
              </div>
            </div>
            <div className="w-50 my-auto d-none d-md-block ">
              {/* <CodingSvg /> */}
              <Image
                src="../images/color.png"
                thumbnail
                roundedCircle
                className="profilePic"
                alt="profile-pic"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
