package com.store.store.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CartItemDTO {
    private Long id;
    private Long productId;
    private String productTitle;
    private Integer quantity;
    private Double price;
    private String imageUrl;
}