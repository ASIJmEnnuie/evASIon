package gestionevenements;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

@Repository
public interface EvenementRepository extends CrudRepository<Evenement,Long>{

        /*List<Evenement> findByDateEvt(String dateEvt);
        List<Evenement> findByLieuEvt(String lieuEvt);*/
        @Query("SELECT e FROM Evenement e WHERE nomEvt = :nom and lieuEvt = :lieu and dateEvt = :date and heureEvt = :heure and activite = :activity and price = :prix")
        //@Query("select e from Evenement e where e.nomEvt = 'truc'")
        public List<Evenement> findEvents(@Param("nom") String nom, @Param("date") String date, @Param("lieu") String lieu,
                                   @Param("prix") String prix, @Param("activity") String activity, @Param("heure") String heure);
        public void saveAndFlush(Evenement e);
    }
