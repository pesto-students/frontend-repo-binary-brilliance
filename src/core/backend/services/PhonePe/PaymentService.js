// Import necessary utilities and modules
import PaymentUtils from "@/core/backend/utils/PaymentUtils";
import EnvironmentUtils from "@/core/common/utils/EnvironmentUtils";
import axios from "axios";
import sha256 from "crypto-js/sha256";
import PaymentSecretUtils from "@/core/backend/utils/PaymentSecretUtils";
import { Buffer } from 'buffer';
import { redirect } from "next/dist/server/api-utils";
import {toInteger} from "lodash";
import MerchantTransaction from '@/core/backend/models/MerchantTransaction';

const PaymentService = {
    initiatePayment: async (bookingInformation) => {
        const {
            event,
            bookingUserDetails,
            venueID,
            numberOfTicketsToBeReserved,
            ticketPrice
        } = bookingInformation;

        const {
            name,
            email,
            phone,
            address
        } = bookingUserDetails;

        const totalPrice = toInteger(numberOfTicketsToBeReserved) * toInteger(ticketPrice);

        const merchantID = PaymentSecretUtils.getPaymentMerchantID();
        const transactionID = PaymentUtils.getTransactionID();
        const merchantUserID = PaymentUtils.getMerchantUserID();
        const amountInPaise = PaymentUtils.getPaymentAmountInPaise(totalPrice);
        const redirectURL= PaymentUtils.getRedirectURL();
        const callbackUrl= PaymentUtils.getCallBackURL();

        const paymentPayload = {
            merchantId: merchantID,
            merchantTransactionId: transactionID,
            merchantUserId: merchantUserID,
            amount: amountInPaise,
            redirectUrl: `${redirectURL}?merchantID=${merchantID}&transactionID=${transactionID}&venueID=${venueID}&numberOfTicketsToBeReserved=${numberOfTicketsToBeReserved}`,
            redirectMode: 'POST',
            // callbackUrl: `${callbackUrl}/${transactionID}`,
            mobileNumber: phone,
            name: name,
            paymentInstrument: { type: "PAY_PAGE" },
        };

        const payloadEncoded = Buffer.from(JSON.stringify(paymentPayload)).toString('base64');
        const saltKey = PaymentSecretUtils.getPaymentSaltKey();
        const checksum = sha256(payloadEncoded + '/pg/v1/pay' + saltKey) + '###' + PaymentSecretUtils.getSaltIndex();
        const paymentURL = PaymentUtils.getPaymentURL();

        const options = {
            method: 'POST',
            url: paymentURL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
            },
            data: {
                request: payloadEncoded,
            },
        };

        try {
            const response = await axios.request(options);
            const redirectUrl = response.data.data.instrumentResponse.redirectInfo.url;
            await MerchantTransaction.saveTransactionInformation(transactionID, email);
            return {
                merchantUserID,
                transactionID,
                redirectUrl
            };
        } catch (error) {
            console.error('Error initiating payment:', error);
            throw error;
        }
    },
};

export default PaymentService;
