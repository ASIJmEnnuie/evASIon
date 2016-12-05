package gestionevenements;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface EvenementRepository extends CrudRepository<Evenement,Long>{

        List<Evenement> findByDateEvt(String dateEvt);
        List<Evenement> findByLieuEvt(String lieuEvt);
    }
