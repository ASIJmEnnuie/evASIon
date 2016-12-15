package evasion.gestionevenements;

import javax.persistence.*;
import java.util.Collection;
import evasion.gestionimages.*;

@Entity
public class Evenement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_evt")
    private Long id_evt;
    @Column(name = "nom")
    private String nom_evt;
    @Column(name = "lieu")
    private String lieu_evt;
    @Column(name = "id_orga")
    private String orga_evt;
    @Column(name = "date_evt")
    private String date_evt;
    @Column(name = "heure")
    private String heure_evt;
    @Column(name = "description")
    private String desc_evt;
    @Column(name = "nb_inscrits")
    private int nb_insc_evt;
    @Column(name = "nb_places")
    private int nb_places_evt;
    @Column(name = "prix")
    private String price;
    @Column(name = "id_act")
    private String activite;

    @ManyToMany(mappedBy = "evenements")
    private Collection<Image> images;
    
    public Collection<Image> getImages() {return images;}

    public Evenement() {

    }

    public Evenement(String nomEvt) {
        this.nom_evt = nomEvt;
    }

    public Evenement(String nom, String lieu, String date, String heure, String price, String activite) {
        this.nom_evt = nom;
        this.lieu_evt = lieu;
        this.date_evt = date;
        this.heure_evt = heure;
        this.price = price;
        this.activite = activite;
    }

    public Evenement(String nom, String lieu, String date, String heure, String price, String description, int nbInscrits, int nbPlaces, String activite) {
        this.nom_evt = nom;
        this.lieu_evt = lieu;
        this.date_evt = date;
        this.heure_evt = heure;
        this.price = price;
        this.desc_evt = description;
        this.nb_insc_evt = nbInscrits;
        this.nb_places_evt = nbPlaces;
        this.activite = activite;
    }

    public Evenement(Long idEvt, String nom, String lieu, String orga, String date, String heure,
                     String description, int nb_inscriptions, int nb_places, String price, String activite) {
        this.id_evt = idEvt;
        this.nom_evt = nom;
        this.lieu_evt = lieu;
        this.orga_evt = orga;
        this.date_evt = date;
        this.heure_evt = heure;
        this.desc_evt = description;
        this.nb_insc_evt = nb_inscriptions;
        this.nb_places_evt = nb_places;
        this.price = price;
        this.activite = activite;
    }

    public Evenement(Long idEvt, String nom, String lieu, String orga, String date, String heure,
                     String description, int nb_inscriptions, int nb_places) {
        this.id_evt = idEvt;
        this.nom_evt = nom;
        this.lieu_evt = lieu;
        this.orga_evt = orga;
        this.date_evt = date;
        this.heure_evt = heure;
        this.desc_evt = description;
        this.nb_insc_evt = nb_inscriptions;
        this.nb_places_evt = nb_places;
    }

	public Long getId_evt() {
		return id_evt;
	}
	public void setId_evt(Long id_evt) {
		this.id_evt = id_evt;
	}
	public String getNom_evt() {
		return nom_evt;
	}
	public void setNom_evt(String nom_evt) {
		this.nom_evt = nom_evt;
	}
	public String getLieu_evt() {
		return lieu_evt;
	}
	public void setLieu_evt(String lieu_evt) {
		this.lieu_evt = lieu_evt;
	}
	public String getOrga_evt() {
		return orga_evt;
	}
	public void setOrga_evt(String orga_evt) {
		this.orga_evt = orga_evt;
	}
	public String getDate_evt() {
		return date_evt;
	}
	public void setDate_evt(String date_evt) {
		this.date_evt = date_evt;
	}
	public String getHeure_evt() {
		return heure_evt;
	}
	public void setHeure_evt(String heure_evt) {
		this.heure_evt = heure_evt;
	}
	public String getDesc_evt() {
		return desc_evt;
	}
	public void setDesc_evt(String desc_evt) {
		this.desc_evt = desc_evt;
	}
	public int getNb_insc_evt() {
		return nb_insc_evt;
	}
	public void setNb_insc_evt(int nb_insc_evt) {
		this.nb_insc_evt = nb_insc_evt;
	}
	public int getNb_places_evt() {
		return nb_places_evt;
	}
	public void setNb_places_evt(int nb_places_evt) {
		this.nb_places_evt = nb_places_evt;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getActivite() {
		return activite;
	}
	public void setActivite(String activite) {
		this.activite = activite;
	}

    @Override
    public String toString() {
        return String.format("Id : %d, Nom : %s, Lieu : %s.", id_evt, nom_evt, lieu_evt);
    }
}
