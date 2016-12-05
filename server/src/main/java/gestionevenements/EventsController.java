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
    //@RequestMapping(value = "/evenement", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Evenement> getAllEvents() {
        final List<Evenement> resultList = new ArrayList<>();
       final Iterable<Evenement> all = evenementRepository.findAll();

       System.out.println("\n\nUN TEST\n\n");
       all.forEach(new Consumer<Evenement>() {
           @Override
           public void accept(Evenement evenement) {
               resultList.add(evenement);
           }
       });
       return resultList;
    }

    @MessageMapping("/evenementsDate")
    @SendTo("/topic/listeEvenementsDate")
    public List<Evenement> getEventsByDate(@PathVariable Message message) {
        final List<Evenement> eventsFound = new LinkedList<>();
        final Iterable<Evenement> events = evenementRepository.findByDateEvt(message.getMessage());
        System.out.println("\n\n\n\n un evt : " + events + "\n\n\n\n ");
        events.forEach(new Consumer<Evenement>() {
            @Override
            public void accept(Evenement evenement) {
                System.out.println("\n\n\n\n un evt : " + evenement + "\n\n\n\n ");
                eventsFound.add(evenement);
            }
        });
        /*for (Evenement e : evenements)
            if (e.getDate().equals(message.getMessage()))
                eventsFound.add(e);*/
        return eventsFound;
    }

    @MessageMapping("/evenementsLieu")
    @SendTo("/topic/listeEvenementsLieu")
    public List<Evenement> getEventsByLieu(@PathVariable Message message) {
        final List<Evenement> eventsFound = new LinkedList<>();
        final Iterable<Evenement> events = evenementRepository.findByLieuEvt(message.getMessage());

        events.forEach(new Consumer<Evenement>() {
            @Override
            public void accept(Evenement evenement) {
                eventsFound.add(evenement);
            }
        });
        /*
        for (Evenement e : evenements)
            if (e.getLieu().equals(message.getMessage()))
                eventsFound.add(e);
        */
        return eventsFound;
    }
}
