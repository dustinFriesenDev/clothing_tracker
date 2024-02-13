package com.clothes.tracker.controllers;

import com.clothes.tracker.data.WardrobeRepository;
import com.clothes.tracker.model.Wardrobe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Wardrobe")
public class WardrobeController {

    @Autowired
    private WardrobeRepository wardrobeRepository;

    @GetMapping()
    public List<Wardrobe> displayAllItems(){
        return wardrobeRepository.findAll();
    }



}
