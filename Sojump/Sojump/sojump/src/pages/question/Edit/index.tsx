import React, { FC } from "react";
import EditCanvas from "../../../components/questionComponents/EditCanvas";
import useLoadQuestionDataWithComponents from "../../../hooks/useLoadQuestionDataWithComponents";
import styles from "./IndexLayout.module.scss";
import { useDispatch } from "react-redux";
import { changeSelectedId } from "../../../store/componentsReducer";
import LeftPanel from "../../../components/questionComponents/LeftPanel";

const EditIndex: FC = () => {

    const { loading} = useLoadQuestionDataWithComponents();
    const dispatch = useDispatch();

    // 点击空白处时取消选中组件
    function clearSelectedId() {
        dispatch(changeSelectedId(''));
    }
    return (
        <>
            <div className={styles.container}>
                <div style={{ backgroundColor: "#fff" }}>Header</div>
                <div className={styles['content-wrapper']}>
                    <div className={styles.content}>
                        <div className={styles.left}><LeftPanel/></div>
                        <div className={styles.main} onClick={clearSelectedId}>
                            <div className={styles["canvas-wrapper"]}>
                                <div style={{ height: "900px" }}>
                                    <EditCanvas loading={ loading} />
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