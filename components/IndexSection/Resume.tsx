import styles from "../styles/resume.module.css"
import IndexCircle from "../IndexCircle"

const Resume = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <IndexCircle color="#B0B283" />
                <h1>Resume</h1>
            </div>
            <div className={styles.details}>
                <div className={styles.skillsAndTools}>
                    <div className={styles.skills}>
                        <h2 className={styles.detailTitle}> Skills </h2>
                    </div>
                    <div className={styles.tools}>
                        <h2 className={styles.detailTitle}> Tools </h2>
                    </div>
                </div>
                <div className={styles.education}>
                    <h2 className={styles.detailTitle}> Education </h2>
                </div>
            </div>
        </div>
    )
}

export default Resume