import { Typography } from "antd";
import { FC } from "react";
import { QuestionParagraphProps } from "./questionParagraph";


export const defaultQuestionParagraphProps : QuestionParagraphProps = {
    text: "一行段落",
    isCenter: false
}

const QuestionParagraph: FC<QuestionParagraphProps> = (props: QuestionParagraphProps) => {
    const { text = "", isCenter = false } = { ...defaultQuestionParagraphProps, ...props };
    const { Paragraph } = Typography;

    return (
        <Paragraph style={{textAlign : isCenter ? "center" : "start", marginBottom : "0"}}>
            {text}
        </Paragraph>
    )
}


export default QuestionParagraph;