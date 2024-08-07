const midtransClient = require("midtrans-client");
const { v4: uuidv4 } = require('uuid');

let snap = new midtransClient.Snap({
    isProduction: process.env.NODE_ENV === 'production',
    serverKey: process.env.SERVER_MIDTRANS_KEY,
});

module.exports = class PaymentController {
    static async getMidtransToken(req, res, next) {
        try {
            console.log(req.body,"<<<<<<<<<<<reqbody");
            
            const { amount, email } = req.body;

            if (!amount) {
                throw new Error('Amount is required');
            }

            const orderId = `trx-${uuidv4()}`;

            const parameter = {
                transaction_details: {
                    order_id: orderId,
                    gross_amount: amount,
                },
                credit_card: {
                    secure: true,
                },
                customer_details: {
       
                    email: email

                },
            };

            const transaction = await snap.createTransaction(parameter);
            const transactionToken = transaction.token;

            // Save order details and token to your database here

            res.status(200).json({ 
                token: transactionToken,
                orderId: orderId
            });

        } catch (error) {
            console.error('Midtrans Token Error:', error);
            res.status(500).json({ error: 'Failed to generate payment token' });
        }
    }

    // Add a method to handle Midtrans notifications
    static async handleNotification(req, res, next) {
        try {
            const notificationJson = req.body;
            const statusResponse = await snap.transaction.notification(notificationJson);
            
            const orderId = statusResponse.order_id;
            const transactionStatus = statusResponse.transaction_status;
            const fraudStatus = statusResponse.fraud_status;

            // Handle the transaction status here
            // Update your database based on the orderId and new status

            res.status(200).send('OK');
        } catch (error) {
            console.error('Notification Error:', error);
            res.status(500).send('Error processing notification');
        }
    }
}