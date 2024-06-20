import EnvironmentUtils from "@/core/common/utils/EnvironmentUtils";
import axios from "../../../../axios.config";
import PaymentSecretUtils from "@/core/backend/utils/PaymentSecretUtils";
import sha256 from "crypto-js/sha256";
import PaymentUtils from "@/core/backend/utils/PaymentUtils";

const PaymentRequests = {
    getPaymentStatus: async (merchantID, transactionID) => {
        try {
            const checksumValue = sha256(`/pg/v1/status/${merchantID}/${transactionID}` + PaymentSecretUtils.getPaymentSaltKey()).toString();
            const response = await axios.get(PaymentUtils.getPaymentStatusURL(merchantID, transactionID), {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-VERIFY': checksumValue + '###' + PaymentSecretUtils.getSaltIndex(),
                }
            });
            return response.data;
        } catch (error) {
            console.log('Error:', error);
            return {};
        }
    }
};

export default PaymentRequests;