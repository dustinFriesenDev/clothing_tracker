package com.clothes.tracker.controllers;

import com.clothes.tracker.data.WardrobeRepository;
import com.clothes.tracker.dto.WardrobeDTO;
import com.clothes.tracker.model.Wardrobe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.client.RestClientBuilderConfigurer;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/wardrobe")
@CrossOrigin("http://localhost:3000")
public class WardrobeController {

    @Autowired
    private WardrobeRepository wardrobeRepository;

    @GetMapping("/all")
    public List<Wardrobe> displayAllItems(){
        return wardrobeRepository.findAll();
    }


    //PATCH one item of clothing
    @PatchMapping("/update/{id}")
    public Wardrobe updateSingleItem(@PathVariable int id, @RequestBody Wardrobe newWardrobe){
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

    //PATCH HAVE IT for multiple items of clothing
    @PutMapping("/update")
    public Wardrobe updateWardrobe(@RequestBody List<Wardrobe> newWardrobe){
        for (Wardrobe wardrobe : newWardrobe){
            wardrobeRepository.updateItem(wardrobe.getId(), wardrobe.isHave());
        }



        List<Wardrobe> wardrobeItems = new ArrayList<>();
        for (int i = 0)


}
