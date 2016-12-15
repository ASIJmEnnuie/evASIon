package evasion.gestionactivites;

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
public class ActivitiesController {

    @Inject
    ActiviteRepository activiteRepository;

    public ActivitiesController() {
    }

    @MessageMapping("/activitesAvecCritere")
    @SendTo("/topic/listeActivitesCritere")
    public List<Activite> getActivities(@PathVariable String name, @PathVariable String adress,
                                        @PathVariable String description, @PathVariable String website,
                                        @PathVariable String adminmodif, @PathVariable String datemodif) {

        Activite a = new Activite(name, adress, description, website, adminmodif, datemodif);
        String nomQuery = "%";
        String adresseQuery = "%";
        String descriptionQuery = "%";
        String siteQuery = "%";
        String adminmodifQuery = "%";
        String datemodifQuery = "%";

        if (!name.equals("") && name != null)
            adresseQuery = "nom = " + name;
        if (!adress.equals("") && adress != null)
            adresseQuery = "adresse = " + adress;
        if (!description.equals("") && description != null)
            descriptionQuery = "description = " + description;
        if (!website.equals("") && website != null)
            siteQuery = "site = " + website;
        if (!adminmodif.equals("") && adminmodif != null)
            adminmodifQuery = "idAdminDerniereModif = " + adminmodif;
        if (!datemodif.equals("") && datemodif != null)
            datemodifQuery = "dateDerniereModif = " + datemodif;

        final List<Activite> activitiesFound = new LinkedList<>();
        final Iterable<Activite> activities = activiteRepository.findActivities(nomQuery, adresseQuery, descriptionQuery, siteQuery, adminmodifQuery, datemodifQuery);

        activities.forEach(new Consumer<Activite>() {
            @Override
            public void accept(Activite activite) {
                activitiesFound.add(activite);
            }
        });
        return activitiesFound;
    }


    @MessageMapping("/activites")
    @SendTo("/topic/listeActivites")
    public List<Activite> getAllActivities() {
        final List<Activite> resultList = new ArrayList<>();
        final Iterable<Activite> all = activiteRepository.findAll();

        all.forEach(new Consumer<Activite>() {
            @Override
            public void accept(Activite activite) {
               resultList.add(activite);
            }
        });
        return resultList;
    }

    @MessageMapping("/ajoutActivites")
    @SendTo("/topic/creationActivites")
    public Long AddActivities(String nom, String adresse, String description, String site, String adminmodif, String datemodif) {

        try {
            Activite a = new Activite (nom, adresse, description, site, adminmodif, datemodif);
            activiteRepository.saveAndFlush(a);
            return a.getId_act();
        }
        catch (Exception e) {
            return 0L;
        }
    }


    public List<Activite> getActivityByName(String name) {
        final List<Activite> activiteFound = new LinkedList<>();
        final Iterable<Activite> activites = activiteRepository.findByNomAct(name);

        activites.forEach(new Consumer<Activite>() {
            @Override
            public void accept(Activite activite) {
                activiteFound.add(activite);
            }
        });
        return activiteFound;
    }
}
