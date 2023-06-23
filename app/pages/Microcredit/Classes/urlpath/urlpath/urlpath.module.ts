import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class URLPathModule { 
   readonly BranchesURL = 'http://localhost:8080/api/Branches' // Branches
   readonly BranchesReportBRANCHEBranchCodeURL ='http://localhost:8080/api/Branches/ReportBRANCHEBranchCode'
 
 
// readonly CustomersURL = 'http://localhost:8080/api/customers/CreateCustomers' //Customers api

readonly CustomersURL = 'http://localhost:8080/api/customers' //Customers api

readonly SearchCustomerStatusURL  ='http://localhost:8080/api/Customers/SearchCustomerStatus'

readonly  SearchLonaGuarantorStatusURL = 'http://localhost:8080/api/Customers/SearchLonaGuarantorStatus'
readonly InterestRate = 'http://localhost:8080/api/interestRate' 
readonly EmployeesURL = 'http://localhost:8080/api/Employees' // Employees  api
readonly AddNewLoanURL = 'http://localhost:8080/api/AddNewLona/CreateNewLona' // api
  
readonly AddNewPaymentOfistallmentsURL =
 'http://localhost:8080/api/PaymentOfistallments/CreatePaymentOfistallmentsAsync' // api

 readonly DeleteLonaPaymentOfistallmentsURL =
 'http://localhost:8080/api/PaymentOfistallments/DeleteLonaPaymentOfistallments' // api
 
 
readonly ExpeditedPaymentUrl = 'http://localhost:8080/api/PaymentOfistallments/ExpeditedPayment'

readonly AddNPaymentOfistallmentsDeatilsURL  = 'http://localhost:8080/api/PaymentOfistallments/CreatePaymentOfistallmentsDetails' // api



readonly UpdatePayMonthAmountURL ='http://localhost:8080/api/PaymentOfistallments/UpdatePayMonthAmount'

readonly DeleteLonaURL ='http://localhost:8080/api/PaymentOfistallments/DeleteLona'

readonly GetAllPaymentOfistallmentsURL ='http://localhost:8080/api/PaymentOfistallments/' // api

readonly GetDetialsLonawithIDAsyncUrl ='http://localhost:8080/api/PaymentOfistallments/GetDetialsLonawithIDAsync' 


readonly UpdateLonaMasterAsyncURL = 'http://localhost:8080/api/AddNewLona/UpdateLonaMasterAsync' // api


readonly UpdateLonaAsyncURL = 'http://localhost:8080/api/AddNewLona/UpdateLonaAsync' // api

readonly DeleteLonaMasterURL = 'http://localhost:8080/api/AddNewLona/DeleteLonaMasterAsync/' // api

readonly DeleteLonaDetailsURL = 'http://localhost:8080/api/AddNewLona/DeleteLonaDetailsAsync/' // api


readonly ChangeStatusMasterLona = 'http://localhost:8080/api/AddNewLona/ChangeStatusMasterLona' // api



readonly UIssuanceLonaAsyncURL = 'http://localhost:8080/api/AddNewLona/IssuanceLonaAsync' // api

readonly AddNewLoanmasterURL = 'http://localhost:8080/api/AddNewLona/CreateNewLonaMaster ' // api

readonly TrackLonaURL = 'http://localhost:8080/api/AddNewLona/ ' // api

readonly TrackLonaByidURL = 'http://localhost:8080/api/AddNewLona/GetLonaByidAsync'


readonly TrackLonaByidPaymentOfistallmentsURL = 'http://localhost:8080/api/PaymentOfistallments/GetLonaByidAsync'

 readonly GetPaymentOfistallmentsByIdUrl= 'http://localhost:8080/api/PaymentOfistallments/GetPaymentOfistallmentsById'


 
 readonly GetCalculateremainingamountUrl = 'http://localhost:8080/api/PaymentOfistallments/GetCalculateremainingamount'

  GetPaymentOfistallmentsForRemoveUrl= 'http://localhost:8080/api/PaymentOfistallments/GetPaymentOfistallmentsForRemove'

readonly   trackLonaWithGuarantorIdUrl ='http://localhost:8080/api/AddNewLona/trackLonaWithGuarantorIds'

readonly  SearchLonaGuarantorStatusesURL = 'http://localhost:8080/api/AddNewLona/SearchLonaGuarantorStatuses'

readonly SearchcanCustomerBeGuanantorStatuses ='http://localhost:8080/api/AddNewLona/SearchcanCustomerBeGuanantorStatuses'

readonly ProductsURL = 'http://localhost:8080/api/Products' // api Products


readonly ListProductsURL = 'http://localhost:8080/api/Products' // api Products



UpdateProducts


readonly GetProductsByIdURL = 'http://localhost:8080/api/Products/GetProductsById' // api Products

readonly GetProductbyBarcodeURL = 'http://localhost:8080/api/Products/GetProductbyBarcode/' // api Products
 

readonly ReportPermissionToEntertheStoreProduct ='http://localhost:8080/api/PermissionToEntertheStoreProduct/ReportPermissionToEntertheStoreProduct/'

  readonly ReportGetSIssuanceLoansbetweenDate = 'http://localhost:8080/api/AllIStatusLoans/ReportAllIssuanceLoans'



  


   readonly ReportGETpaymentOfistallmentsbetweenDateURL  ='http://localhost:8080/api/PaymentOfistallments/GETpaymentOfistallmentsbetweenDate/'




   readonly AllinfoAboutcustomerReportURL = 'http://localhost:8080/api/AddNewLona/ReportAllinfoAboutcustomer' // api

   readonly GetCountCustomersReportURL = 'http://localhost:8080/api/customers/ReportGetCountCustomers' // api
 
   ReportAllIssuanceLoans
   readonly ReportAllIssuanceLoansURL = 'http://localhost:8080/api/AllIStatusLoans/ReportAllIssuanceLoans' // api

readonly ReportProductUrl ='http://localhost:8080/api/product/ReportProduct/'

 
readonly ReportManageStoreUrl = 'http://localhost:8080/api/ManageStore/ReportManageStore/'

readonly ReportConvertofStore ='http://localhost:8080/api/ConvertofStores/ReportConvertofStore/'

readonly   ReceivingpermissionUrl ='http://localhost:8080/api/Receivingpermission/'
readonly ReportReceivingpermissionUrl = 'http://localhost:8080/api/Receivingpermission/ReportReceivingpermission/'
readonly QTProdouctURL = 'http://localhost:8080/api/QuantityProduct/GetQTProdouct'

readonly QTProdoucProductBYIDmanageStoreURL ="http://localhost:8080/api/QuantityProduct/GetQuantityProductBYIDandmanageStoreIDAsync/"

readonly GetAllquantityProducts ='http://localhost:8080/api/QuantityProduct/GetAllquantityProducts/'

readonly UpdateQTafterSellingURL ='http://localhost:8080/api/QuantityProduct/UpdateQTafterSelling' //after selling

readonly SuppliersURL = 'http://localhost:8080/api/Suppliers/'
 


 }
 