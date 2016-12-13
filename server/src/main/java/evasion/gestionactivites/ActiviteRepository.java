package evasion.gestionactivites;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

@Repository
public interface ActiviteRepository extends CrudRepository<Activite,Long>{

        @Query("SELECT a FROM Activite a WHERE nom = :nom and adresse = :adresse and description = :description and site = :site and idAdminDerniereModif = :adminmodif and dateDerniereModif = :datemodif")

        public List<Activite> findActivities(@Param("nom") String nom, @Param("adresse") String adresse, @Param("description") String description,
                                   @Param("site") String site, @Param("adminmodif") String adminmodif, @Param("datemodif") String datemodif);
        public void saveAndFlush(Activite a);
    }
