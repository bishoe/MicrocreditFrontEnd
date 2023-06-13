export interface IPaymentOfistallments {

    PaymentId? :number;
    CustomerId?  :number
    IstalmentsAmount? :number;
    AmountPaid? :number;
    AmountRemaining? :number;
    LonaAmount? :number;
   DateAdd? :Date;
   IsDelete? :boolean;
   UserId? :string;
   LonaId?:number;
   ProdouctsID?:number;
   monthNumber?:number
   PaymentIdDetails?:number;
   NoIstalments?:number;
   DiscountPercentage?:number;  
   AmountBeforeDiscount? :number;
  AmountAfterDiscount ? :number;
   StatusLona? :number 
  ExpeditedPaymentDate ? :Date
}

export interface IPaymentOfistallmentsDetails {

    PaymentId? :number;
     IstalmentsAmount? :number;
    AmountPaid? :number;
    AmountRemaining? :number;
     monthNumber?:number
   PaymentIdDetails?:number;
   NoIstalments?:number;  
    DateAdd? :Date;
    StatusIstalments?:number;
    DueDate?:Date;

}
