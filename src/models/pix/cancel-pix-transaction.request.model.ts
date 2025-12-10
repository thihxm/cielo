export interface CancelPIXTransactionRequestModel {
    paymentId?: string;
    merchantOrderId?: string;
    amount?: number;
    [x: string]: any;
}
