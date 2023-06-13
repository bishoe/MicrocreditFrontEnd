export interface ICustomers {
    customerId?  : Number;
    customerName : string;
     customerNationalid:string;
    dateissuancenationalID:Date;
    expirationdatenationalID:Date;
    firstPhone:string;
    secondPhone:string;
    businessName:string;
    workAddress:string;
    customerAddress :string;
    notes : string;
    dateAdd?: Date;
    DateEdit?: Date;
    UsersID? : Number;
    maxLonaForCustomer?:number;
    maxNumberGuarantorLona?:number;
    canCustomerBeGuanantor?:number;
}
