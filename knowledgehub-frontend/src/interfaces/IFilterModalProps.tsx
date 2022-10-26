export interface IFilterModalProps{
    open:boolean;
    year:number | number[];
    handleClose:((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    handleSliderChange:any;
    handleSubmit:any;
};