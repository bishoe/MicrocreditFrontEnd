import { IAddLonaInput } from "./iadd-lona-input";

export interface IAddLona {
    LonaId?:number;
    ProdcutId?:number;
    CustomerId?:number;
    interestRateid?:number;
    monthNumber?:number;
    StartDateLona?:Date;
    EndDateLona?:Date;
    dateAdd?:Date;
    AmountBeforeAddInterest?:number;
    AmountAfterAddInterest? :number;
    StatusLona?:number;
    IstalmentsNo?:number;
    StatusLonaGuarantor?:boolean;
    NoColumn?:number;
    customerName?:string;
    InputLonaGuarantor?:number,
    iAddLonaInput:IAddLonaInput[];
}
