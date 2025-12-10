import { CieloTransactionInterface } from '../interface/cielo-transaction.interface';
import { CancelTransactionResponseModel } from '../models/credit-card/cancel-transaction.response.model';
import {
    CancelPIXTransactionRequestModel,
    TransactionPIXRequestModel,
    TransactionPIXResponseModel,
} from '../models/pix';
import { HttpRequestMethodEnum, IHttpRequestOptions, Utils } from './utils';

export class PIX {
    private cieloTransactionParams: CieloTransactionInterface;
    private util: Utils;

    constructor(cieloTransactionParams: CieloTransactionInterface) {
        this.cieloTransactionParams = cieloTransactionParams;
        this.util = new Utils(cieloTransactionParams);
    }

    public transaction(
        transaction: TransactionPIXRequestModel
    ): Promise<TransactionPIXResponseModel> {
        return this.util.postToSales<
            TransactionPIXResponseModel,
            TransactionPIXRequestModel
        >(transaction);
    }

    public cancelTransaction(
        cancelTransactionRequest: CancelPIXTransactionRequestModel
    ): Promise<CancelTransactionResponseModel> {
        // Caso seja passado o valor do cancelamento, adiciona na url
        const amount = cancelTransactionRequest.amount
            ? `?amount=${cancelTransactionRequest.amount}`
            : '';
        const path = cancelTransactionRequest.paymentId
            ? `/1/sales/${cancelTransactionRequest.paymentId}/void${amount}`
            : `/1/sales/OrderId/${cancelTransactionRequest.merchantOrderId}/void${amount}`;
        const options: IHttpRequestOptions = this.util.getHttpRequestOptions({
            method: HttpRequestMethodEnum.PUT,
            path: path,
            hostname: this.cieloTransactionParams.hostnameTransacao,
        });
        return this.util.request<CancelTransactionResponseModel>(options, {});
    }
}
