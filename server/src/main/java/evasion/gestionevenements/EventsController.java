package evasion.gestionevenements;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import evasion.gestionactivites.*;
import javax.inject.Inject;
import java.util.*;
import java.util.function.Consumer;

@Controller
//@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class EventsController {

  //private final List<Evenement> evenements = new LinkedList<>();

    @Inject
    EvenementRepository evenementRepository;
    ActivitiesController activitiesController;

    public EventsController() {
    }

    @MessageMapping("/evenementsAvecCritere")
    @SendTo("/topic/eventlistWithCriteria")
    public List<Evenement> getEvents(@PathVariable String name, @PathVariable String date,
                                     @PathVariable String category, @PathVariable String price,
                                     @PathVariable String place, @PathVariable String time,
                                     @PathVariable String activity, @PathVariable String proximity) {
        String nomQuery = "%";
        String placeQuery = "%";
        String dateQuery = "%";
        String heureQuery = "%";
        String activityQuery = "%";
        String prixQuery = "%";
        Activite a = null;

        if (!name.equals("") && name != null)
            nomQuery = "nomEvt = " + name;
        if (!date.equals("") && date != null)
            dateQuery = "dateEvt = " + date;
        //Jusqu'à la Version 2, la catégorie n'est pas gérée.
        //categoryRepository.findByName(category)
        /*if (!category.equals("") && category != null)
            query = " and idCat = " + idCat;*/
        if (!place.equals("") && place != null)
            placeQuery = "lieuEvt = " + place;
        if (!price.equals("") && price != null)
            prixQuery = "price = " + price;

        List<Activite> activities = activitiesController.getActivityByName(activity);
        if (activities.size() != 0)
            a = activities.get(1);

        if (!activity.equals("") && activity != null && a != null)
            activityQuery = "activite = " + a.getId_act();
        if (!time.equals("") && time != null)
            heureQuery = "heureEvt = " + date;

        final List<Evenement> eventsFound = new LinkedList<>();
        final Iterable<Evenement> events = evenementRepository.findEvents(nomQuery, dateQuery, placeQuery, prixQuery, activityQuery, heureQuery);

        events.forEach(new Consumer<Evenement>() {
            @Override
            public void accept(Evenement evenement) {
                eventsFound.add(evenement);
            }
        });
        return eventsFound;
    }


    @MessageMapping("/events")
    @SendTo("/topic/eventlist")
    public List<Evenement> eventList() {
        final List<Evenement> resultList = new ArrayList<>();
        final Iterable<Evenement> all = evenementRepository.findAll();

        all.forEach(new Consumer<Evenement>() {
            @Override
            public void accept(Evenement evenement) {
               resultList.add(evenement);
            }
        });
        return resultList;
    }

    //TODO with activity ID
    @MessageMapping("/ajoutEvenements")
    @SendTo("/topic/eventCreation")
    public Long AddEvents(String activite, String nom, String lieu, String date, String heure, String nbPlaces, String description) {

        //activityRepository.findByName(activity) = idAct
        Long idactivite = 0L;
        try {
            int nbPlacesEvt = Integer.parseInt(nbPlaces);

            Evenement e = new Evenement (nom, lieu, date, heure, "0", description, 0, nbPlacesEvt, idactivite);
            evenementRepository.saveAndFlush(e);
            return e.getId_evt();
        }
        catch (Exception e) {
            return 0L;
        }
    }
}
