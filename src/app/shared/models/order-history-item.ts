export type OrderStatus = 'Pending' | 'Completed' | 'In Progress';

export interface OrderHistoryItem {
  status: OrderStatus;
  orderNumber: string;
  productLine: string;
  product: string;
  quantity: string;
  dateRequested: string;
}
