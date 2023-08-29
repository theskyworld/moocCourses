## React受控组件

### `input`

```tsx
import React, { ChangeEvent, FC, useState } from "react";


const FormDemo: FC = () => {
    const [text, setText] = useState("hello");

    return (
        <>
            <p>{text}</p>
            {/* input */}
            <div>
                {/* 双向绑定 */}
                {/* 使用value，将text的值绑定到input上 */}
                {/* 监听onChange事件，随时将text的值进行修改，将input的值绑定到value上 */}
                <input type="text" value={text} onChange={(e: ChangeEvent<HTMLInputElement>) => { setText(e.target.value) }} />
            </div>

            {/* textarea */}
            <p>hello</p>
            <div>
                {/* 双向绑定 */}
                {/* 使用value，将text的值绑定到input上 */}
                {/* 监听onChange事件，随时将text的值进行修改，将input的值绑定到value上 */}
                <textarea type="textarea" value={text} onChange={(e: ChangeEvent<HTMLTextareaElement>) => { setText(e.target.value) }}><textarea>
            </div>
        </>
    )
}

export default FormDemo;
```

### `textarea`

```tsx
import React, { ChangeEvent, FC, useState } from "react";


const FormDemo: FC = () => {
    const [text, setText] = useState("hello");

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

            {/* textarea */}
            <div>
                {/* 双向绑定 */}
                {/* 使用value，将text的值绑定到input上 */}
                {/* 监听onChange事件，随时将text的值进行修改，将input的值绑定到value上 */}
                <textarea value={text} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setText(e.target.value) }} />
            </div>
        </>
    )
}

export default FormDemo;
```
