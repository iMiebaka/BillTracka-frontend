
export interface ITTranasactionType {
  style: "Paid" | "Unpaid" | "Overdue";
  amount: any;
  invoice: number;
  colorOne?: string
  colorTwo?: string
}

export interface ITMoreRouter {
  name: string;
  route: string
}
