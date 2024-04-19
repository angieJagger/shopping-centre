package com.codeThree.springbootecommerce.dao;

import com.codeThree.springbootecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository <Customer, Long> {

    Customer findByEmail(String theEmail);
}
