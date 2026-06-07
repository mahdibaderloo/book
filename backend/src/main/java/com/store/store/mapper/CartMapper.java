package com.store.store.mapper;

import com.store.store.dto.CartDTO;
import com.store.store.dto.CartItemDTO;
import com.store.store.entity.Cart;

import java.util.stream.Collectors;

public class CartMapper {

    public static CartDTO toDTO(Cart cart) {
        return new CartDTO(
                cart.getId(),
                cart.getItems().stream()
                        .map(item -> new CartItemDTO(
                                item.getId(),
                                item.getProductId(),
                                item.getProductTitle(),
                                item.getQuantity(),
                                item.getPrice(),
                                item.getImageUrl()
                        ))
                        .collect(Collectors.toList())
        );
    }
}