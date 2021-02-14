import styles from "../styles/intro.module.css"
import React from 'react'
import IndexCircle from "../IndexCircle"

const Intro = () => {
    return (
        <>
            <div className={styles.introduction} style={{ width: "50vw" }}>
                <IndexCircle color={"dodgerblue"} />
                <div className={styles.introTitle}>
                    <h1>
                        안녕하세요, 프론트엔드 개발자 조성민입니다.
            </h1>
                </div>
                <div className={styles.introBody} translate="no">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque, reiciendis numquam officiis sunt nulla debitis ut aut quia laboriosam earum nobis ratione. Ab fugiat, nulla quod ea alias eligendi!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aperiam sequi sed. Maiores vitae repellendus rem sed deserunt laudantium consectetur? Cumque ducimus debitis asperiores itaque voluptatibus aspernatur quidem laboriosam fuga?
          </div>
            </div>
            <div className={styles.profilePic}>
                사진 하나 들어갈 예정
      </div>
        </>
    )
}

export default Intro
