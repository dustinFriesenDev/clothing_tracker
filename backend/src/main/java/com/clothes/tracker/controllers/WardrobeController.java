package com.clothes.tracker.controllers;

import com.clothes.tracker.data.WardrobeRepository;
import com.clothes.tracker.dto.WardrobeDTO;
import com.clothes.tracker.model.Wardrobe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wardrobe")
public class WardrobeController {

    @Autowired
    private WardrobeRepository wardrobeRepository;

    @GetMapping("/all")
    public List<Wardrobe> displayAllItems(){
        return wardrobeRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public Wardrobe updateWardrobe(@PathVariable int id, @RequestBody Wardrobe newWardrobe){
        return wardrobeRepository.findById(id)
                .map(clothes -> {
//                    clothes.setType(newWardrobe.getType());
//                    clothes.setStyle(newWardrobe.getStyle());
//                    clothes.setAmount(newWardrobe.getAmount());
//                    clothes.setSize(newWardrobe.getSize());
//                    clothes.setColor(newWardrobe.getColor());
//                    clothes.setSeason(newWardrobe.getSeason());
                    clothes.setHave(newWardrobe.isHave());
                    return wardrobeRepository.save(clothes);
                }).orElseThrow(() -> new Error("Item not found"));
    }

}
