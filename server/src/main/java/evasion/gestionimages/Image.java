package evasion.gestionimages;

import javax.persistence.*;
import java.util.Collection;
import evasion.gestionevenements.Evenement;
import evasion.gestionactivites.Activite;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "chemin")
    private String chemin;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "Image_Evenement",
               joinColumns = @JoinColumn(name = "id_img", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name = "id_evt", referencedColumnName="id_evt"))
    private Collection<Evenement> evenements;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "Image_Activite",
               joinColumns = @JoinColumn(name = "id_img", referencedColumnName="id"),
               inverseJoinColumns = @JoinColumn(name = "id_act", referencedColumnName="id"))
    private Collection<Activite> activites;

    public Image() {

    }

    public Image (String chemin) {
        this.chemin = chemin;
    }

    public Image (Long id, String chemin) {
        this.id = id;
        this.chemin = chemin;
    }

    public Long getId() {
        return this.id;
    }

    public void setId (Long id) {
        this.id = id;
    }

    public String getChemin() {
        return this.chemin;
    }

    public void setChemin(String chemin) {
        this.chemin = chemin;
    }

    public Collection<Evenement> getEvenements() {
        return evenements;
    }

    public Collection<Activite> getActivites() {
        return activites;
    }
}
