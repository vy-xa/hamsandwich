const express = require('express');
const bodyParser = require('body-parser');
const paypal = require('paypal-rest-sdk');

const app = express();
app.use(bodyParser.json());

paypal.configure({
    'mode': 'sandbox',
    'client_id': 'YOUR_PAYPAL_CLIENT_ID',
    'client_secret': 'YOUR_PAYPAL_CLIENT_SECRET'
});

app.post('/buy-credits', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://return.url",
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Skibidi Coin",
                    "sku": "001",
                    "price": "1.00",
                    "currency": "GBP",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "GBP",
                "total": "1.00"
            },
            "description": "Buying 1 Skibidi Coin"
        }]
    };

    paypal.payment.create(create_payment_json, (error, payment) => {
        if (error) {
            throw error;
        } else {
            for(let i = 0; i < payment.links.length; i++) {
                if(payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));
