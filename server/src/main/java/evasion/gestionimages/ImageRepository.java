package evasion.gestionimages;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

@Repository
public interface ImageRepository extends CrudRepository<Image,Long>{

        public List<Image> findByChemin(String chemin);
        public List<Image> findById(Long id);
        public void saveAndFlush(Image i);
    }
