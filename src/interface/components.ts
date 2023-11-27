
export interface ITTranasactionType {
  style: "Paid" | "Unpaid" | "Overdue";
  amount: number;
  invoice: number;
  color: "green" | "blue" | "red";
}

export interface ITMoreRouter {
  name: string;
  route: string
}
