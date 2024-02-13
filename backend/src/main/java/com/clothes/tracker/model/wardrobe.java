package com.clothes.tracker.model;

import jakarta.persistence.Entity;

@Entity
public class wardrobe extends AbstractEntity{

    private String type; // jacket, tops, pans, shoes, underwear, socks
    private String style; // dressy, casual
    private int amount; //number of each item

}
