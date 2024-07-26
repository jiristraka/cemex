import { OrderHistoryItem } from '../shared/models';

export const ORDER_HISTORY_ITEMS: OrderHistoryItem[] = [
  {
    status: 'In Progress',
    orderNumber: '3301',
    product: '1-200-2-C-28-12-1-3-000',
    productLine: 'Ready-Mix',
    quantity: '12 m3',
    dateRequested: '2021-07-20',
  },
  {
    status: 'Pending',
    orderNumber: '3305',
    productLine: 'Cement',
    product: 'Gris CPC 30 R Monterrey Extra 50Kg',
    quantity: '10 TN',
    dateRequested: '2022-10-10',
  },
  {
    status: 'Pending',
    orderNumber: '3290',
    productLine: 'Aggregates',
    product: 'Arena Triturada Caliza Malla 4',
    quantity: '2 TN',
    dateRequested: '2022-09-29',
  },
  {
    status: 'Completed',
    orderNumber: '3184',
    productLine: 'Aggregates',
    product: 'Arena Triturada Caliza Malla 4',
    quantity: '5 TN',
    dateRequested: '2022-05-14',
  },
  {
    status: 'Completed',
    orderNumber: '3295',
    productLine: 'Cement',
    product: 'Gris CPC30R Tolteca Extra 50Kg',
    quantity: '12 TN',
    dateRequested: '2022-05-04',
  },
  {
    status: 'Completed',
    orderNumber: '2994',
    productLine: 'Ready-Mix',
    product: '1-200-2-C-28-14-1-3-000',
    quantity: '15.5 m3',
    dateRequested: '2022-10-03',
  },
];
