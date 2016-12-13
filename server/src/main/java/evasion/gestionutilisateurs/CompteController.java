package evasion.gestionutilisateurs;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import javax.inject.Inject;
import java.util.*;
import java.util.function.Consumer;

@Controller
public class CompteController {

    @Inject
    CompteRepository compteRepository;

    public CompteController() {
    }

    @MessageMapping("/ajoutCompte")
    @SendTo("/topic/userCreation")
    public Long AddUser(String nom, String prenom, String dateNaissance, String genre, String email, String mdp, boolean flagSuppression) {

        try {
            Compte c = new Compte (nom, prenom, dateNaissance, genre, email, mdp);
            compteRepository.saveAndFlush(c);
            return c.getId();
        }
        catch (Exception e) {
            return 0L;
        }
    }
}
