package com.clothes.tracker.data;

import com.clothes.tracker.model.Wardrobe;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface WardrobeRepository extends JpaRepository<Wardrobe, Integer> {

}
