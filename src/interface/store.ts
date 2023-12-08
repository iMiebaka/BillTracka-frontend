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
  progess: number;
  shippingFee: number;
  issueDate: string;
  dueDate: string;
  notes: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  clientState: string;
  clientCity: string;
  clientCountry: string;
  clientLga: string;
  status: string;
  discount: number;
  total: number;
  amountPaid: number;
  amountDue: number;
  items: ITItemsDetails[];
}

export interface ITContextValue {
  routePath: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (pre: boolean) => void;
  setRoutePath: (path: string) => void;
  clientInvoice: ITClientInvoice;
  setClientInvoice: (clientInvoice: ITClientInvoice) => void;
  // Methods
  runToast: ({ status, message }: ITRunToast) => void;
}
