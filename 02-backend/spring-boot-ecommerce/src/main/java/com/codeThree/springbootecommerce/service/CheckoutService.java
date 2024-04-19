package com.codeThree.springbootecommerce.service;

import com.codeThree.springbootecommerce.dto.Purchase;
import com.codeThree.springbootecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
