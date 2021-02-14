import styles from "./styles/indexCircle.module.css"

const IndexCircle = ({ color }: { color: string }) => {
    return (
        <div className={styles.circle} style={{ background: color }} />
    )
}

export default IndexCircle