import { AirlineDataModel, Link } from '../..';
import { CustomerModel } from '../customer.model';

export type PixTransactionResponsePayment = {
    qrCode: {
        expiration?: number;
    };
    qrCodeBase64Image: string;
    qrCodeString: string;
    tid: string;
    proofOfSale: string;
    sentOrderId: string;
    amount: number;
    receivedDate?: string;
    extraDataCollection: any[];
    status: number;
    isSplitted: boolean;
    returnMessage: string;
    returnCode: string;
    paymentId: string;
    type: 'Pix';
    currency: string;
    country: string;
    links: Link[];
    airlineData?: AirlineDataModel;
    isCryptoCurrencyNegotiation: boolean;
};

export interface TransactionPIXResponseModel {
    merchantOrderId: string;
    customer: CustomerModel;
    payment: PixTransactionResponsePayment;
}
