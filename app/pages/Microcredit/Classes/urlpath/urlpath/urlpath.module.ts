import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class URLPathModule { 
   readonly BranchesURL = 'https://localhost:44328/api/Branches' // Branches
   readonly BranchesReportBRANCHEBranchCodeURL ='https://localhost:44328/api/Branches/ReportBRANCHEBranchCode'
 
 
// readonly CustomersURL = 'https://localhost:44328/api/customers/CreateCustomers' //Customers api

readonly CustomersURL = 'https://localhost:44328/api/customers' //Customers api

readonly SearchCustomerStatusURL  ='https://localhost:44328/api/Customers/SearchCustomerStatus'

readonly  SearchLonaGuarantorStatusURL = 'https://localhost:44328/api/Customers/SearchLonaGuarantorStatus'
readonly InterestRate = 'https://localhost:44328/api/interestRate' 
readonly EmployeesURL = 'https://localhost:44328/api/Employees' // Employees  api
readonly AddNewLoanURL = 'https://localhost:44328/api/AddNewLona/CreateNewLona' // api
  
readonly AddNewPaymentOfistallmentsURL =
 'https://localhost:44328/api/PaymentOfistallments/CreatePaymentOfistallmentsAsync' // api

 readonly DeleteLonaPaymentOfistallmentsURL =
 'https://localhost:44328/api/PaymentOfistallments/DeleteLonaPaymentOfistallments' // api
 
 
readonly ExpeditedPaymentUrl = 'https://localhost:44328/api/PaymentOfistallments/ExpeditedPayment'

readonly AddNPaymentOfistallmentsDeatilsURL  = 'https://localhost:44328/api/PaymentOfistallments/CreatePaymentOfistallmentsDetails' // api



readonly UpdatePayMonthAmountURL ='https://localhost:44328/api/PaymentOfistallments/UpdatePayMonthAmount'

readonly DeleteLonaURL ='https://localhost:44328/api/PaymentOfistallments/DeleteLona'

readonly GetAllPaymentOfistallmentsURL ='https://localhost:44328/api/PaymentOfistallments/' // api

readonly GetDetialsLonawithIDAsyncUrl ='https://localhost:44328/api/PaymentOfistallments/GetDetialsLonawithIDAsync' 


readonly UpdateLonaMasterAsyncURL = 'https://localhost:44328/api/AddNewLona/UpdateLonaMasterAsync' // api

readonly ChangeStatusMasterLona = 'https://localhost:44328/api/AddNewLona/ChangeStatusMasterLona' // api



readonly UIssuanceLonaAsyncURL = 'https://localhost:44328/api/AddNewLona/IssuanceLonaAsync' // api

readonly AddNewLoanmasterURL = 'https://localhost:44328/api/AddNewLona/CreateNewLonaMaster ' // api

readonly TrackLonaURL = 'https://localhost:44328/api/AddNewLona/ ' // api

readonly TrackLonaByidURL = 'https://localhost:44328/api/AddNewLona/GetLonaByidAsync'


readonly TrackLonaByidPaymentOfistallmentsURL = 'https://localhost:44328/api/PaymentOfistallments/GetLonaByidAsync'

 readonly GetPaymentOfistallmentsByIdUrl= 'https://localhost:44328/api/PaymentOfistallments/GetPaymentOfistallmentsById'


 
 readonly GetCalculateremainingamountUrl = 'https://localhost:44328/api/PaymentOfistallments/GetCalculateremainingamount'

  GetPaymentOfistallmentsForRemoveUrl= 'https://localhost:44328/api/PaymentOfistallments/GetPaymentOfistallmentsForRemove'

readonly   trackLonaWithGuarantorIdUrl ='https://localhost:44328/api/AddNewLona/trackLonaWithGuarantorIds'

readonly  SearchLonaGuarantorStatusesURL = 'https://localhost:44328/api/AddNewLona/SearchLonaGuarantorStatuses'

readonly SearchcanCustomerBeGuanantorStatuses ='https://localhost:44328/api/AddNewLona/SearchcanCustomerBeGuanantorStatuses'

readonly ProductsURL = 'https://localhost:44328/api/Products' // api Products


readonly ListProductsURL = 'https://localhost:44328/api/Products' // api Products



UpdateProducts


readonly GetProductsByIdURL = 'https://localhost:44328/api/Products/GetProductsById' // api Products

readonly GetProductbyBarcodeURL = 'https://localhost:44328/api/Products/GetProductbyBarcode/' // api Products
 

readonly ReportPermissionToEntertheStoreProduct ='https://localhost:44328/api/PermissionToEntertheStoreProduct/ReportPermissionToEntertheStoreProduct/'

  readonly ReportGetSIssuanceLoansbetweenDate = 'https://localhost:44328/api/AllIStatusLoans/ReportAllIssuanceLoans'



  


   readonly ReportGETpaymentOfistallmentsbetweenDateURL  ='https://localhost:44328/api/PaymentOfistallments/GETpaymentOfistallmentsbetweenDate/'




   readonly AllinfoAboutcustomerReportURL = 'https://localhost:44328/api/AddNewLona/ReportAllinfoAboutcustomer' // api

   readonly GetCountCustomersReportURL = 'https://localhost:44328/api/customers/ReportGetCountCustomers' // api
 
   ReportAllIssuanceLoans
   readonly ReportAllIssuanceLoansURL = 'https://localhost:44328/api/AllIStatusLoans/ReportAllIssuanceLoans' // api

readonly ReportProductUrl ='https://localhost:44328/api/product/ReportProduct/'

 
readonly ReportManageStoreUrl = 'https://localhost:44328/api/ManageStore/ReportManageStore/'

readonly ReportConvertofStore ='https://localhost:44328/api/ConvertofStores/ReportConvertofStore/'

readonly   ReceivingpermissionUrl ='https://localhost:44328/api/Receivingpermission/'
readonly ReportReceivingpermissionUrl = 'https://localhost:44328/api/Receivingpermission/ReportReceivingpermission/'
readonly QTProdouctURL = 'https://localhost:44328/api/QuantityProduct/GetQTProdouct'

readonly QTProdoucProductBYIDmanageStoreURL ="https://localhost:44328/api/QuantityProduct/GetQuantityProductBYIDandmanageStoreIDAsync/"

readonly GetAllquantityProducts ='https://localhost:44328/api/QuantityProduct/GetAllquantityProducts/'

readonly UpdateQTafterSellingURL ='https://localhost:44328/api/QuantityProduct/UpdateQTafterSelling' //after selling

readonly SuppliersURL = 'https://localhost:44328/api/Suppliers/'
 


 }
 