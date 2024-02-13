package com.clothes.tracker.data;

import com.clothes.tracker.model.Wardrobe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WardrobeRepository extends JpaRepository<Wardrobe, Integer> {

}
