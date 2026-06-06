package com.store.store.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddToCartRequest {

    private Long userId;
    private String title;
    private Double price;
    private String imageUrl;
}