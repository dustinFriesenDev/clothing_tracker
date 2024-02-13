package com.clothes.tracker.model;

import jakarta.persistence.Entity;

@Entity
public class Wardrobe extends AbstractEntity{

    private String type; // jacket, tops, pants, shoes, underwear, socks
    private String style; // dressy, casual
    private int amount; // number of each item
    private String color; // color of clothing item
    private String size; // size of clothing item
    private boolean have; // true if you have, false if you need

    public Wardrobe(String type, String style, int amount, String color, String size, boolean have) {
        this.type = type;
        this.style = style;
        this.amount = amount;
        this.color = color;
        this.size = size;
        this.have = have;
    }

    public Wardrobe(){}

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public boolean isHave() {
        return have;
    }

    public void setHave(boolean have) {
        this.have = have;
    }

    @Override
    public String toString() {
        return type;
    }
}
