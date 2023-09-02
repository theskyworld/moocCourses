
export declare interface Option {
    id: string;
    value: string;
    text: string;
}

export declare interface QuestionRadioProps {
    title?: string;
    isVertical?: boolean;
    options?: Option[];
    value?: string;

    onChange? : (newProps: QuestionRadioProps) => void
    disabled?: boolean;
}