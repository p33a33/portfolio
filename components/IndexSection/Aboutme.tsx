import IndexCircle from "../IndexCircle"
import styles from "../styles/aboutme.module.css"

const Aboutme = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <IndexCircle color="#82B382"></IndexCircle>
                <h1>About Me</h1>
            </div>
            <ol className={styles.itemlist}>
                <li className={styles.item}>
                    <div className={styles.itemTitle}>이렇게 자랐어요</div>
                    <div className={styles.itemBody}></div>
                </li>
                <li className={styles.item}>
                    <div className={styles.itemTitle}>이런 삶을 살고있어요</div>
                    <div className={styles.itemBody}></div>
                </li>
                <li className={styles.item}>
                    <div className={styles.itemTitle}>이렇게 되고싶어요</div>
                    <div className={styles.itemBody}></div>
                </li>
                <li className={styles.item}>
                    <div className={styles.itemTitle}>이런곳에 관심이 있어요</div>
                    <div className={styles.itemBody}></div>
                </li>
            </ol>
        </div>
    )
}

export default Aboutme