import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import * as orders from "../data/orders";
import Button from '@material-ui/core/Button';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(orders.stripePublishableKey);

export interface IStripeCheckoutBtn {
    priceApiId: string,
}

const StripeCheckoutBtn: React.FC<IStripeCheckoutBtn> = ({ priceApiId }) => {

    const handleClick = async () => {
        const stripe = await stripePromise;
        if (stripe) {
            stripe.redirectToCheckout({
                lineItems: [{ price: priceApiId, quantity: 1 }],
                mode: 'payment',
                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfillment
                successUrl: 'https://www.facebook.com/ouistitiprint/success',
                cancelUrl: 'https://www.facebook.com/ouistitiprint/canceled',
                shippingAddressCollection: {
                    allowedCountries: orders.allowedCountries,
                },
                submitType: 'donate',
            })
                .then(function (result) {
                    if (result.error) {
                        // If `redirectToCheckout` fails due to a browser or network
                        // error, display the localized error message to your customer.
                        console.error("Impossible to reach the url to checkout.")
                    }
                });
        } else {
            console.error("stripe is null. Payment canceled.")
        }

    };

    return (
        <Button role="link" onClick={handleClick} size="large" variant="contained" color="primary" disableElevation fullWidth>
            Checkout
        </Button>
    );
}

export default StripeCheckoutBtn;

