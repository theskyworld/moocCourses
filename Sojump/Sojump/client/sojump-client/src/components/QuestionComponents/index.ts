import QuestionInput from "./QuestionInput"
import QuestionRadio from "./QuestionRadio"
import QuestionTitle from './QuestionTitle'
import QuestionParagraph from './QuestionParagraph'
import QuestionInfo from "./QuestionInfo"
import QuestionTextarea from "./QuestionTextarea"
import QuestionCheckbox from "./QuestionCheckbox"

interface ComponentInfo {
    fe_id: string
    type: string
    // title: string
    isHidden: string
    props: any
}

export const getComponent = (comp: ComponentInfo) => {
    const { fe_id, type, isHidden, props = {} } = comp

    if (isHidden) return null

    switch (type) {
        case "questionInput":
            return <QuestionInput fe_id={ fe_id } props = { props } />;
            break;
        case "questionRadio":
            return <QuestionRadio fe_id={ fe_id } props = { props } />;
            break;
        case "questionTitle":
            return <QuestionTitle { ...props } />;
            break;
        case "questionParagraph":
            return <QuestionParagraph { ...props } />;
            break;
        case "questionInfo":
            return <QuestionInfo { ...props } />;
            break;
        case "questionTextarea":
            return <QuestionTextarea fe_id={ fe_id } props = { props } />;
            break;
        case "questionCheckbox":
            return <QuestionCheckbox fe_id={ fe_id } props = { props } />;
            break;


    }
    return null
}