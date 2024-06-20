import { v4 as uuidv4 } from "uuid";

const PaymentUtils = {
    getTransactionID: () => {
        return `Tr-${uuidv4().toString(36).slice(-6)}`;
    },
    getMerchantUserID: () => {
        return `MUID-${uuidv4().toString(36).slice(-6)}`;
    },
    getPaymentAmountInPaise: (ticketPrice = 0) => {
        return  ticketPrice * 100;
    },
    getPaymentURL: () => {
        return process.env.PHONEPE_API_URL_UAT;
    },
    getPaymentStatusURL: (merchantID, transactionID) => {
        return `${process.env.PHONEPE_PAYMENT_STATUS_API}/${merchantID}/${transactionID}`;
    },
    getRedirectURL:()=>{
        return process.env.REDIRECT_URL;
    },
    getCallBackURL:()=>{
        return process.env.CALLBACK_URL
    }
};

export default PaymentUtils;