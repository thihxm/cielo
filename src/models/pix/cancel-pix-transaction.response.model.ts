import { Link } from '../link-model';

export interface CancelPIXTransactionResponseModel {
    status: number;
    tid: string;
    proofOfSale: string;
    authorizationCode: string;
    returnCode: string;
    returnMessage: string;
    links: Link[];
}
