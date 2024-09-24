import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton'
import { useStripe } from '@stripe/stripe-react-native';


const Payment = () => {

    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);

    const fetchPaymentSheetParams = async () => {
        const { paymentIntent, ephemeralKey, customer } = await response.json();

        return {
            paymentIntent,
            ephemeralKey,
            customer,
        };
    };

    const initializePaymentSheet = async () => {
        const {
            paymentIntent,
            ephemeralKey,
            customer,
        } = await fetchPaymentSheetParams();

        const { error } = await initPaymentSheet({
            merchantDisplayName: "Example, Inc.",
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
            //methods that complete payment after a delay, like SEPA Debit and Sofort.
            allowsDelayedPaymentMethods: true,
            defaultBillingDetails: {
                name: 'Jane Doe',
            }
        });
        if (!error) {
            setLoading(true);
        }
    };

    useEffect(() => {
        initializePaymentSheet();
    }, []);



    const openPaymentSheet = async () => {

    }

    return (
        <>
            <CustomButton title='Confirm Ride' className='my-10' onPress={openPaymentSheet} />
        </>
    )
}

export default Payment