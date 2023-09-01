import styles from "./EditCanvas.module.scss";
import { FC } from "react";
import QuestionTitle from "../QuestionTitle";
import QuestionInput from "../QuestionInput";
import { Spin } from "antd";

interface EditCanvasProps {
    loading: boolean;
}

const EditCanvas: FC<EditCanvasProps> = ({ loading }) => {
    
    if (loading) {
        return (
            <div style={{textAlign : "center", marginTop : "24px"}}>
                <Spin size="large" tip="Loading..."></Spin>
            </div>
        )
    }

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