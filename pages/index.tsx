import Intro from "../components/IndexSection/Intro"
import Projects from "../components/IndexSection/Projects"
import styles from "./styles/index.module.css"
import React from 'react'

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
        <h1>Resume</h1>
      </section>

      <section className={styles.section} style={{ background: "#C2DEBD" }}>
        <h1>About Me</h1>
      </section>
    </div>
  )
}

export default IndexPage
