import React, { useState } from "react";
// import "./index.css";
import styles from "./addStyleDemo.module.css";

const AddStyleDemo = () => {
    const [text, setText] = useState("hello");
    const [danger, setDanger] = useState(true);

    // 或者
    const style1 = {
        color: "green",
        border: "solid 1px #ccc",
        fontSize: "20px",
        borderRadius: "5px",
        width: "fit-content",
        padding : "0 5px",
    }

    // 使用动态的className
    let className1 = "add-style-demo";
    if (danger) className1 += " danger";
    return (
        <div>
            <p style={{ color: "green", border: "solid 1px #ccc", fontSize: "20px", width: "fit-content",padding : "0 5px", }}>{text}</p>
            <p style={style1}>{text}</p>
            <p className="add-style-demo">{text}</p>
            <p className={danger ? "add-style-demo danger" : "add-style-demo"}>{text}</p>
            {/* 或者 */}
            <p className={className1}>{text}</p>
            
            <p className={styles["add-style-demo"]}>{text}</p>
        </div>
    )
}

export default AddStyleDemo;