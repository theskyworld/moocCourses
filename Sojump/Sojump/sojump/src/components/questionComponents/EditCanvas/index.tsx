import styles from "./EditCanvas.module.scss";
import { FC } from "react";
import QuestionTitle from "../QuestionTitle";
import QuestionInput from "../QuestionInput";


const EditCanvas: FC = () => {
    return (
        <div className={styles.canvas}>
            <div className={styles['component-wrapper']}>
                <div className={styles.component}>
                    <QuestionTitle />
                </div>
            </div>
            <div className={styles['component-wrapper']}>
                <div className={styles.component}>
                    <QuestionInput />
                </div>
            </div>
        </div>
    )
}

export default EditCanvas;