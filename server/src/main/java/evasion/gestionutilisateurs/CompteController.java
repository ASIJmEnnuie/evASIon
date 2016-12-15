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

    @MessageMapping("/connexionUser")
    @SendTo("/topic/connexion")
    public Long connexion(String email, String mdp) {
        System.out.println("EMAIL = " + email);
        System.out.println("MDP = " + mdp);
        final List<Compte> compteFound = new LinkedList<>();
        final Iterable<Compte> comptes = compteRepository.findByEmailAndMotDePasse(email, mdp);

        comptes.forEach(new Consumer<Compte>() {
            @Override
            public void accept(Compte compte) {
                compteFound.add(compte);
            }
        });
        if (compteFound.size() != 0 )
            return compteFound.get(0).getId();
        else
            return 0L;
    }
}
