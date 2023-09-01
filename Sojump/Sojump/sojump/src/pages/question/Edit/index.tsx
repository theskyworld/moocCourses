import React, { FC } from "react";
import EditCanvas from "../../../components/questionComponents/EditCanvas";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
import styles from "./IndexLayout.module.scss";


const EditIndex: FC = () => {

    const { loading, data } = useLoadQuestionData();

    return (
        <>
            <div className={styles.container}>
                <div style={{ backgroundColor: "#fff" }}>Header</div>
                <div className={styles['content-wrapper']}>
                    <div className={styles.content}>
                        <div className={styles.left}>Left</div>
                        <div className={styles.main}>
                            <div className={styles["canvas-wrapper"]}>
                                <div style={{ height: "900px" }}>
                                    <EditCanvas />
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>Right</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditIndex;