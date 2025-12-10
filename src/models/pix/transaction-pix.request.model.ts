import { WithRequired } from '../../utils/types';
import { CustomerModel } from '../customer.model';
import { PaymentRequestModel } from '../payment.request.model';

export type PixTransactionRequestPayment = Omit<
    PaymentRequestModel,
    | 'currency'
    | 'country'
    | 'serviceTaxAmount'
    | 'installments'
    | 'interest'
    | 'provider'
    | 'capture'
    | 'authenticate'
    | 'recurrent'
    | 'creditCard'
    | 'recurrentPayment'
    | 'fraudAnalysis'
> & {
    type: 'Pix';
    provider: 'Cielo' | 'Cielo2';
    qrCode: {
        expiration?: number;
    };
};

export interface TransactionPIXRequestModel {
    merchantOrderId: string;
    customer: WithRequired<CustomerModel, 'identity'>;
    payment: PixTransactionRequestPayment;
    [x: string]: any;
}
