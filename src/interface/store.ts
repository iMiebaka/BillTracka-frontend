import { ReactNode } from "react";
export interface ContextNode {
  children: ReactNode;
}

export interface ITRunToast {
  status: "info" | "error" | "success";
  message: string;
}


export interface ITClientDetails {
  name: string;
  mobileNumber: string;
  email: string;
  address: string;
  state: string;
  lga: string;
}

export interface ITItemsDetails {
  name: string;
  price: string;
  quantity: string;
  discount: string;
}
export interface ITPaymentDetails {
  paymentStatus: string;
  paymentMode: string;
  issueDate: string;
  dueDate: string;
  note?: string;
}

export interface ITClientInvoice {
  shippingFee: number;
  progess: number;
  clientDetails: ITClientDetails;
  itemsDetails: ITItemsDetails[];
  paymentDetails: ITPaymentDetails;
}

export interface ITContextValue {
  routePath: string;
  setRoutePath: (path: string) => void;
  clientInvoice: ITClientInvoice;
  setClientInvoice: (clientInvoice: ITClientInvoice) => void;
  // Methods
  runToast: ({ status, message }: ITRunToast) => void;
}
