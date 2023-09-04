// 图层
import { EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Input, message, Space } from "antd";
import clsx from "clsx";
import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import useLoadQuestionDataWithComponents from "../../../hooks/useLoadQuestionDataWithComponents";
import { changeComponentTitle, changeSelectedId, ComponentInfo, toggleisHidden, toggleIsLocked } from "../../../store/componentsReducer";
import SortableContainer from "../../dragSortable/SortableContainer";
import SortableItem from "../../dragSortable/SortableItem";
import styles from "./Layers.module.scss";


const Layers: FC = () => {
    const {components, selectedId } = useGetComponentInfo();

    const dispatch = useDispatch();
    
    // 当前正在修改标题的组件id
    const [curChangingTitleId, setCurChangingTitleId] = useState('');

    // 点击选中组件
    function handleTitleClick(fe_id: string) {
        const curComponent = components.find(c => c.fe_id === fe_id);

        // 不能选中隐藏的组件
        if (curComponent && curComponent.isHidden) {
            message.info('不能选中隐藏的组件')
            return
        }

        // 将当前未在画布中选中的组件修改为当前在图层中要修改title的对应组件
        if (fe_id !== selectedId) {
            dispatch(changeSelectedId(fe_id));
            setCurChangingTitleId('');
            return;
        }
        // 用于changeCurComponentTitle
        setCurChangingTitleId(fe_id);
    }

    // 修改组件title
    function changeCurComponentTitle(event: ChangeEvent<HTMLInputElement>) {
        const newTitle = event.target.value.trim();
        if (!newTitle) return;
        if (!selectedId) return;
        dispatch(changeComponentTitle({ fe_id: selectedId, title: newTitle }));
    }

    // 切换显示/隐藏
    function changeisHidden() {
        dispatch(toggleisHidden())
    }

    // 切换锁定/解锁
    function changeIsLocked() {
        dispatch(toggleIsLocked())
    }


    function handleDragEnd(oldIndex : number, newIndex : number) {
        console.log(oldIndex, newIndex);
        
    }
    return (
        <SortableContainer items={components.map(c => ({ ...c, id: c.fe_id }))} onDragEnd={handleDragEnd}>
            {
                components.map(c => {
                    const { fe_id, title, isHidden, isLocked } = c;

                    const titleDefaultClassName = styles.title;
                    const selectedClassName = styles.selected
                    const titleClassName = clsx({
                        [titleDefaultClassName]: true,
                        [selectedClassName]: fe_id === selectedId,
                    });

                    return (
                        <SortableItem key={fe_id} id={fe_id}>
                            <div className={styles.wrapper}>
                                <div className={titleClassName} onClick={() => handleTitleClick(fe_id)}>
                                    {
                                        fe_id === curChangingTitleId && (
                                            <Input value={title} onChange={changeCurComponentTitle} onPressEnter={() => setCurChangingTitleId('')} onBlur={() => setCurChangingTitleId('')} />
                                        )
                                    }
                                    {fe_id !== curChangingTitleId && title}
                                </div>
                                <div className={styles.handler}>
                                    <Space>
                                        <Button
                                            size="small"
                                            shape="circle"
                                            className={!isHidden ? styles.btn : ''}
                                            icon={<EyeInvisibleOutlined />}
                                            type={isHidden ? 'primary' : 'text'}
                                            onClick={() => changeisHidden()}
                                        />
                                        <Button
                                            size="small"
                                            shape="circle"
                                            className={!isLocked ? styles.btn : ''}
                                            icon={<LockOutlined />}
                                            type={isLocked ? 'primary' : 'text'}
                                            onClick={() => changeIsLocked()}
                                        />
                                    </Space>
                                </div>
                            </div>
                       </SortableItem>
                    )
                }) 
            }
        </SortableContainer>
    )

}



export default Layers;