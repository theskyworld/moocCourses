import React, { ChangeEvent, FC, useState } from "react";


const FormDemo: FC = () => {
    const [text, setText] = useState("hello");
    const [gender, setGender] = useState("female");
    const [isChecked, setIsChecked] = useState(false);
    const [checkedValues, setCheckedValues] = useState<string[]>([]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const targetValue = e.target.value;
        // 存在，则移除
        if (checkedValues.includes(targetValue)) {
            setCheckedValues(checkedValues.filter(value => {
                if (value === targetValue) {
                    return false;
                }
                return true;
            }))
            // 不存在，则添加
        } else {
            setCheckedValues(checkedValues.concat(targetValue));
        }
    }



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
            {/* 绑定value值 */}
            <div>
                {/* 双向绑定 */}
                {/* 使用value，将text的值绑定到input上 */}
                {/* 监听onChange事件，随时将text的值进行修改，将input的值绑定到value上 */}
                <input type="text" value={text} onChange={(e: ChangeEvent<HTMLInputElement>) => { setText(e.target.value) }} />
            </div>

            {/* textarea */}
            {/* 绑定value值 */}
            <div>
                {/* 双向绑定 */}
                {/* 使用value，将text的值绑定到input上 */}
                {/* 监听onChange事件，随时将text的值进行修改，将input的值绑定到value上 */}
                <textarea value={text} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setText(e.target.value) }} />
            </div>

            {/* radio */}
            {/* 绑定checked值 */}
            <p>gender : {gender === "male" ? "男" : "女"}</p>
            <label htmlFor="radio1">男</label>
            <input type="radio" id="radio1" name="gender" value="male" checked={gender === 'male'} onChange={(e: ChangeEvent<HTMLInputElement>) => { setGender(e.target.value) }} />
            <label htmlFor="radio2">女</label>
            <input type="radio" id="radio2" name="gender" value="female" checked={gender === 'female'} onChange={(e: ChangeEvent<HTMLInputElement>) => { setGender(e.target.value) }} />

            {/* checkbox */}
            {/* 绑定checked值 */}
            <p>isChecked : {isChecked.toString()}</p>
            <p>isChecked : {isChecked ? "抓到我了哟..." : "真遗憾，这都没抓到!"}</p>
            <label htmlFor="checkbox1">选择</label>
            <input type="checkbox" id='checkbox1' checked={isChecked} onChange={(e: ChangeEvent<HTMLInputElement>) => { setIsChecked(!isChecked) }} />

            <br></br>

            <p>checkedValues : {JSON.stringify(checkedValues)}</p>
            <label htmlFor="ck1">Alice1</label>
            <input type="checkbox" id="ck1" value="Alice1" checked={checkedValues.includes("Alice1")} onChange={(e) => { handleChange(e) }} />
            <label htmlFor="ck2">Alice2</label>
            <input type="checkbox" id="ck2" value="Alice2" checked={checkedValues.includes("Alice2")} onChange={(e) => { handleChange(e) }} />
            <label htmlFor="ck3">Alice3</label>
            <input type="checkbox" id="ck3" value="Alice3" checked={checkedValues.includes("Alice3")} onChange={(e) => { handleChange(e) }} />

            {/* 添加隐藏域，进行提交 */}
            <input type="hidden" name="checkedValues" value={JSON.stringify(checkedValues)} />




        </>
    )
}

export default FormDemo;