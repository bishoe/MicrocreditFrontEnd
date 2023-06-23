import { NbMenuItem } from '@nebular/theme';
 
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '',
    icon: '',
    link: '/',
    home: true,
  },
  {
    title: 'تسجيل الدخول',
    icon: 'home-outline',
    link: '/pages/login',
  },
  {
    title: '',
    group: true,
  },
  {
    title: 'بيانات المستخدمين',
    icon: 'layout-outline',
    children: [
     
      {
        title: 'UserManagement',
        link: '/pages/UserManagement',
      },
      {
        title: 'المستخدمين المسجلين بالنظام',
        link: '/pages/AllUserManagement',
       },
 
       
      {
        title: 'اضافة مستخدم',
        link: '/pages/register',
        
      },
      
    ],
  },
  {
    title: 'ادارة النظام',
    icon: 'edit-2-outline',
    children: [
     
      {
        title: 'اضافة عميل',
        link: '/pages/customers',
      },
      {
        title: 'العملاء',
        link: '/pages/ListCustomers/',
      },
     
    {
      title:'الفائده',
      link: '/pages/InterestRate'
    },
    {title:'الفوائد',
    link:'/pages/ListInterestRate'
  },
  {
    title:'تعديل فائده',
  link:'/pages/UpdateInterestRate/InterestRateId'
},
// {
// title:'اضافة قرض',
// link:'/pages/addnewlona/customerId'

// },
{
title:'اضافة قرض جديد',
link:'/pages/mainaddnewlona'
},{
title:'طلبات القروض',
link:'/pages/TrackLona'
},

// {
// title:'اصدار قرض',
// link:'/pages/UpdateLona/lonaId'

// },
{
title:'القروض المصدره',
link:'/pages/ListPaymentOfistallments'
},
 
{
  title:'الغاء قسط',
  link:'/pages/ListRemoveistallment'

}

 
,
{
title:'الاقساط المستحقه',
link:'/pages/ReportDuelments'
},
{
  title:'الاقساط المدفوعه',
  link:'/pages/PaymentOfistallmentsbetweenDateReport'
} ,
{
title:'حالة تفصيليه',
link:'/pages/AllInfoAboutcustomerReport'

},  
{

title:'العملاء المسجلين بالنظام',
link:'/pages/CountCustomersReport'
},

{
  title:'القروض المصدره ',
  link:'/pages/IssuanceLoansbetweenDateReport'
}
,
{
title:'المنتجات',
link:'/pages/Products'

},
{
title:'تعديل منتج',
link:'/pages/ListProducts'
},


      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: '',
        link: '/',
      },
    ],
  },
  {
    title: '',
    icon: '',
    link: '/',
    children: [
      {
        title: '',
        link: '/',
      },
      {
        title: '',
        link: '/',
      },
      {
        title: '',
        link: '/',
      },
      {
        title: '',
        link: '/',
      },
    ],
  },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Extra Components',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
//   {
//     title: 'Customers',
//     icon: 'lock-outline',
//     children: [
//       {
//         title: 'Customers',
//         link: '/pages/Microcredit/Components/Customers/customers',
//       },
//       {
//         title: 'Register',
//         link: '/auth/register',
//       },
//       {
//         title: 'Request Password',
//         link: '/auth/request-password',
//       },
//       {
//         title: 'Reset Password',
//         link: '/auth/reset-password',
//       },
//     ],
//   },
 ];
