package com.codeThree.springbootecommerce.dto;

import com.codeThree.springbootecommerce.entity.Address;
import com.codeThree.springbootecommerce.entity.Customer;
import com.codeThree.springbootecommerce.entity.Order;
import com.codeThree.springbootecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
