export interface ITTranasactionType{
    style: "Paid" | "Unpaid" | "Overdue"
    amount: number
    invoice: number
    color: "green" | "blue" | "red"
}