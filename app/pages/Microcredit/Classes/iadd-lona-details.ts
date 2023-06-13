export interface IAddLonaDetails {
    LonaId?:number;
    LonaGuarantorId :number,
    NoColumn?:number,
     IsDelete? :boolean,
     StatusLonaGuarantor? :boolean,
     lonaDetailsId?:number,

}

export interface IIssuanceLona{
    LonaId:number;
    StatusLona:number;
    AmountAfterAddInterest:number;
    StartDateLona:Date;
    EndDateLona:Date;
}
