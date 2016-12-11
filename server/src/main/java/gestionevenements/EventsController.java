package gestionevenements;

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
//@RequestMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class EventsController {

  //private final List<Evenement> evenements = new LinkedList<>();

    @Inject
    EvenementRepository evenementRepository;

    public EventsController() {
    }

    @MessageMapping("/evenements")
    @SendTo("/topic/listeEvenements")
    public List<Evenement> getEvents(@PathVariable String name, @PathVariable String date,
                                     @PathVariable String category, @PathVariable String price,
                                     @PathVariable String place, @PathVariable String time,
                                     @PathVariable String activity, @PathVariable String proximity) {

        Evenement e = new Evenement(name, place, date, time, price, activity);
        String nomQuery = "%";
        String placeQuery = "%";
        String dateQuery = "%";
        String heureQuery = "%";
        String activityQuery = "%";
        String prixQuery = "%";

        //tmp
        int idAct = 1;
        int idCat = 1;

        if (!name.equals("") && name != null)
            nomQuery = "nomEvt = " + name;
        if (!date.equals("") && date != null)
            dateQuery = "dateEvt = " + date;
        //categoryRepository.findByName(category)
        /*if (!category.equals("") && category != null)
            query = " and idCat = " + idCat;*/
        if (!place.equals("") && place != null)
            placeQuery = "lieuEvt = " + place;
        if (!price.equals("") && price != null)
            prixQuery = "price = " + price;
        //activityRepository.findByName(activity)
        if (!activity.equals("") && activity != null)
            activityQuery = "activite = " + idAct;
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


    @MessageMapping("/allEvenements")
    @SendTo("/topic/listeAllEvenements")
    public List<Evenement> getAllEvents() {
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

    @MessageMapping("/ajoutEvenements")
    @SendTo("/topic/creationEvenements")
    public Long AddEvents(String activite, String nom, String lieu, String date, String heure, String nbPlaces, String description) {

        //activityRepository.findByName(activity) = idAct
        try {
            int nbPlacesEvt = Integer.parseInt(nbPlaces);

            Evenement e = new Evenement (nom, lieu, date, heure, "0", description, 0, nbPlacesEvt, activite);
            evenementRepository.saveAndFlush(e);
            return e.getIdEvt();
        }
        catch (Exception e) {
            return 0L;
        }
    }
    /*
    public List<Evenement> getEventsByDate(String date) {
        final List<Evenement> eventsFound = new LinkedList<>();
        final Iterable<Evenement> events = evenementRepository.findByDateEvt(message.getMessage());

        events.forEach(new Consumer<Evenement>() {
            @Override
            public void accept(Evenement evenement) {
                eventsFound.add(evenement);
            }
        });
        return eventsFound;
    }

    public List<Evenement> getEventsByLieu(String lieu) {
        final List<Evenement> eventsFound = new LinkedList<>();
        final Iterable<Evenement> events = evenementRepository.findByLieuEvt(message.getMessage());

        events.forEach(new Consumer<Evenement>() {
            @Override
            public void accept(Evenement evenement) {
                eventsFound.add(evenement);
            }
        });
        return eventsFound;
    }*/
}
