import React from "react";
import CustomNav from "../Components/NavBar";
import { Container, Row } from "react-bootstrap";
import IconCard from "../Components/IconCard";
import { frontSkillsList, backSkillsList } from "../utils/helperList";
import useWindowDimensions from "../utils/dimensionHelper";
import styles from "../Css/Skills.module.css"
const Skills = () => {
  const { width } = useWindowDimensions();

  let imgContainerWidthClass;
  let headingMargin;
  if (width < 577) {
    imgContainerWidthClass = "textCenter";
  }
  if (width > 577) {
    headingMargin = "headingMargin";
  }

  return (
    <>
      <CustomNav />
      <Container className={`mt-5 ${imgContainerWidthClass}  `}>
        <h2 className={`color-customBlue ${styles.center}  text-boldest ${headingMargin}`}>
        <mark className={styles.bg}>Front End</mark>
        </h2>
        <Row xs={1} sm={2} md={3} lg={4}>
          {frontSkillsList.map((s) => (
            <IconCard key={s.label} src={s.src} skillName={s.label} />
          ))}
        </Row>
      </Container>

      <Container className={` ${styles.center2} ${imgContainerWidthClass}  `}>
        <h2 className={`color-customBlue text-boldest ${headingMargin}`}>
           <mark className={styles.bg}>Back End</mark>
  
        </h2>
        <Row xs={1} sm={2} md={3} lg={4}>
          {backSkillsList.map((s) => (
            <IconCard key={s.label} src={s.src} skillName={s.label} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Skills;
