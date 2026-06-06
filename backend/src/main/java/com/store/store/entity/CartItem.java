package com.store.store.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "cart_items")
@Getter
@Setter
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer quantity = 1;

    private String productTitle;

    private Double price;

    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;
}