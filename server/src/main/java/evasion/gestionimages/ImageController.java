package evasion.gestionimages;

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
public class ImageController {

    @Inject
    ImageRepository imageRepository;

    public ImageController() {
    }

    @MessageMapping("/imagesParId")
    @SendTo("/topic/imagelistById")
    public List<Image> getImageById(Long id) {
        final List<Image> imageFound = new LinkedList<>();
        final Iterable<Image> images = imageRepository.findById(id);

        images.forEach(new Consumer<Image>() {
            @Override
            public void accept(Image image) {
                imageFound.add(image);
            }
        });
        return imageFound;
    }

    public List<Image> getImagesByChemin(String chemin) {
        final List<Image> imageFound = new LinkedList<>();
        final Iterable<Image> images = imageRepository.findByChemin(chemin);

        images.forEach(new Consumer<Image>() {
            @Override
            public void accept(Image image) {
                imageFound.add(image);
            }
        });
        return imageFound;
    }

    @MessageMapping("/images")
    @SendTo("/topic/imagelist")
    public List<Image> imageList() {
        final List<Image> resultList = new ArrayList<>();
        final Iterable<Image> all = imageRepository.findAll();

        all.forEach(new Consumer<Image>() {
            @Override
            public void accept(Image image) {
               resultList.add(image);
            }
        });
        return resultList;
    }

    @MessageMapping("/ajoutImages")
    @SendTo("/topic/imageCreation")
    public Long AddImage(String chemin) {

        Image i = new Image (chemin);
        imageRepository.saveAndFlush(i);
        return i.getId();
    }
}
