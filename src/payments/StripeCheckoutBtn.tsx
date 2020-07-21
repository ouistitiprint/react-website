import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import * as orders from "../data/orders";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(orders.stripePublishableKey);

const useStyles = makeStyles({
    stripeBtn: {
        borderRadius: 0,
    },
    powerByStripe: {
        textAlign: "center",
    },
    stripeLink: {
        fontWeight: "bold",
    }
});

export interface IStripeCheckoutBtn {
    priceApiId: string,
}

const StripeCheckoutBtn: React.FC<IStripeCheckoutBtn> = ({ priceApiId }) => {
    const classes = useStyles();

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
                successUrl: 'https://ouistitiprint.com/?status=paymentSuccessful',
                cancelUrl: 'https://ouistitiprint.com/?status=paymentCanceled',
                shippingAddressCollection: {
                    allowedCountries: orders.allowedCountries,
                },
                submitType: 'pay',
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
        <Container disableGutters>
        <Button role="link" onClick={handleClick} size="large" variant="contained" color="primary" disableElevation fullWidth className={classes.stripeBtn}>
            Checkout
        </Button>
        <Typography variant="body2" component="p" className={classes.powerByStripe}>
                {"Payment and shipping address collection handled by "}
                <Link href={"https://stripe.com/"} color="inherit" underline={"none"} className={classes.stripeLink}>
                    {"stripe"}
                </Link>
                {"."}
        </Typography>
        </Container>
    );
}

export default StripeCheckoutBtn;

