import prisma from "../../../../prisma/prisma";

const MerchantTransaction = {
    saveTransactionInformation: async (merchantTransactionID, email) => {
        try {
            const transaction = await prisma.MerchantTransaction.create({
                data: {
                    MerchantTransactionId: merchantTransactionID,
                    Email: email,
                },
            });
            return transaction;
        } catch (error) {
            console.error('Error occurred while saving transaction information:', error);
            throw error;
        }
    },

    getByMerchantTransactionID: async (merchantTransactionID) => {
        try {
            const transaction = await prisma.merchantTransaction.findFirst({
                where: {
                    MerchantTransactionId: merchantTransactionID,
                },
            });
            return transaction;
        } catch (error) {
            console.error('Error occurred while fetching transaction information:', error);
            throw error;
        }
    },
};

export default MerchantTransaction;