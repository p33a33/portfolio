import Intro from "../components/IndexSection/Intro"
import Projects from "../components/IndexSection/Projects"
import styles from "./styles/index.module.css"
import React from 'react'
import Resume from "../components/IndexSection/Resume"
import Aboutme from "../components/IndexSection/Aboutme"

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section} style={{ background: "aliceblue" }}>
        <Intro />
      </section>

      <section className={styles.section} style={{ background: "#FFC1C0" }}>
        <Projects />
      </section>

      <section className={styles.section} style={{ background: "#E4E5BD" }}>
        <Resume />
      </section>

      <section className={styles.section} style={{ background: "#C2DEBD" }}>
        <Aboutme />
      </section>
    </div>
  )
}

export default IndexPage
