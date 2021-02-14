import IndexCircle from "../IndexCircle"
import styles from "../styles/projects.module.css"

const Projects = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div>
                    <IndexCircle color="#FF797A" />
                    <h1>
                        Projects
        </h1>
                </div>
            </div>
            <div className={styles.projects}>
                <div className={styles.projectOne}>
                    <h2>
                        THE LIVE
                    </h2>
                </div>
                <div className={styles.projectTwo}>
                    <h2>
                        WEDO
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Projects