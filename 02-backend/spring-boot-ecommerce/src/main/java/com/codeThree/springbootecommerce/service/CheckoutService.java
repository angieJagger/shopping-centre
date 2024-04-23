package com.codeThree.springbootecommerce.service;

import com.codeThree.springbootecommerce.dto.PaymentInfo;
import com.codeThree.springbootecommerce.dto.Purchase;
import com.codeThree.springbootecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
