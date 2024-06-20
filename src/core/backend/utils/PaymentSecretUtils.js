const PaymentSecretUtils = {
    getPaymentMerchantID: () => {
        return process.env.PHONEPE_MERCHANT_ID;
    },
    getPaymentSaltKey: () => {
        return process.env.PHONEPE_SALT_KEY;
    },
    getSaltIndex: () => {
        return process.env.PHONEPE_SALT_INDEX;
    }
};

export default PaymentSecretUtils