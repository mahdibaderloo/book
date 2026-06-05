package com.store.store.repository;

import com.store.store.entity.CartItem;
import com.store.store.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepository
        extends JpaRepository<CartItem, Long> {

    List<CartItem> findByUser(User user);

}