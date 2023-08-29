import React, { ChangeEvent, FC, useState } from "react";


const FormDemo: FC = () => {
    const [text, setText] = useState("hello");
    const [gender, setGender] = useState("female");

    function genHtml() {
        return { __html: text.replaceAll("\n", "<br>") }
    }
    return (
        <>
            {/* <p>{text}</p> */}
            {/* 注入JS文本域，实现text文本中的换行 */}
            {/* 将换行符换成换行标签 */}
            <p dangerouslySetInnerHTML={{ __html: text.replaceAll("\n", "<br>") }}></p>
            {/* 或者 */}
            {/* <p dangerouslySetInnerHTML={genHtml()}></p> */}
            {/* input */}
            <div>
                {/* 双向绑定 */}
                {/* 使用value，将text的值绑定到input上 */}
                {/* 监听onChange事件，随时将text的值进行修改，将input的值绑定到value上 */}
                <input type="text" value={text} onChange={(e: ChangeEvent<HTMLInputElement>) => { setText(e.target.value) }} />
            </div>

            {/* textarea */}
            <div>
                {/* 双向绑定 */}
                {/* 使用value，将text的值绑定到input上 */}
                {/* 监听onChange事件，随时将text的值进行修改，将input的值绑定到value上 */}
                <textarea value={text} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setText(e.target.value) }} />
            </div>

            {/* radio */}
            <p>gender : {gender === "male" ? "男" : "女"}</p>
            <label htmlFor="radio1">男</label>
            <input type="radio" id="radio1" name="gender" value="male" checked={gender === 'male'} onChange={(e: ChangeEvent<HTMLInputElement>) => { setGender(e.target.value) }} />
            <label htmlFor="radio2">女</label>
            <input type="radio" id="radio2" name="gender" value="female" checked={gender === 'female'} onChange={(e: ChangeEvent<HTMLInputElement>) => { setGender(e.target.value) }} />

        </>
    )
}

export default FormDemo;