package evasion.gestionutilisateurs;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

@Repository
public interface CompteRepository extends CrudRepository<Compte,Long>{

        @Query("SELECT c FROM Compte c WHERE nom = :nom and prenom = :prenom and date_naissance = :date_naissance and genre = :genre and email = :email")
        public List<Compte> findCompte(@Param("nom") String nom, @Param("prenom") String prenom, @Param("date_naissance") String date_naissance,
                                   @Param("genre") String genre, @Param("email") String email);
        public List<Compte> findByEmailAndMotDePasse(String email,String mot_de_passe);
        public void saveAndFlush(Compte c);
    }
