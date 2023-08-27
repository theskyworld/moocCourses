# React中添加样式的方式

## 普通的CSS写法

### 使用`style`

```tsx
import React, { useState } from "react";
import "./index.css";

const AddStyleDemo = () => {
    const [text, setText] = useState("hello");

    // 或者
    const style1 = {
        color: "green",
        border: "solid 1px #ccc",
        fontSize: "20px",
        borderRadius: "5px",
        width: "fit-content",
        padding : "0 5px",
    }
    return (
        <div>
            <p style={{ color: "green", border: "solid 1px #ccc", fontSize: "20px", width: "fit-content",padding : "0 5px", }}>{text}</p>
            <p style={style1}>{text}</p>
        </div>
    )
}

export default AddStyleDemo;
```

### 使用`className`

```css
/* index.css */

.add-style-demo {
    color : green;
    font-size : 20px;
    border : solid 1px #ccc;
    border-radius: 5px;
    width: fit-content;
    padding: 0 5px;
}
.danger {
    color : red;
}
```

```tsx
import "./index.css";
// 使用动态的className
    let className1 = "add-style-demo";
    if (danger) className1 += " danger";

<p className="add-style-demo">{text}</p>
<p className={danger ? "add-style-demo danger" : "add-style-demo"}>{text}</p>
            {/* 或者 */}
            <p className={className1}>{text}</p>

```

对于复杂的className，可以使用以下工具

- [clsx](https://www.npmjs.com/package/clsx)
- [classnames](https://www.npmjs.com/package/classnames)

## 使用CSS Module

用于解决不同CSS文件中，类名冲突的问题

通过使用CSS Module,命名CSS文件名时使用`xxx.module.css`的规范，使用具体的类名时，通过`styles`对象进行使用

React会在底层自动地依据当前CSS文件名添加类名的前缀和后缀

```css
/* addStyleDemo.module.css */

.add-style-demo {
    color : green;
    font-size : 20px;
    border : solid 1px #ccc;
    border-radius: 5px;
    width: fit-content;
    padding: 0 5px;
}
.danger {
    color : red;
}
```

```tsx
import styles from "./addStyleDemo.module.css";

<p className={styles["add-style-demo"]}>{text}</p>
```

添加前缀和后缀后为:
`addStyleDemo_add-style-demo__d2fap`

## 使用Sass

使用`create-react-app`的方式构建的react项目原生支持Sass，只需要安装Sass，并将文件名改为.sass后缀即可
