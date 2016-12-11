package gestionevenements;


import javax.persistence.*;

@Entity
public class Evenement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idEvt")
    private Long idEvt;
    @Column(name = "nom")
    private String nomEvt;
    @Column(name = "lieu")
    private String lieuEvt;
    @Column(name = "idOrga")
    private String orgaEvt;
    @Column(name = "dateEvt")
    private String dateEvt;
    @Column(name = "heure")
    private String heureEvt;
    @Column(name = "description")
    private String descEvt;
    @Column(name = "nbInscrits")
    private int nbInscEvt;
    @Column(name = "nbPlaces")
    private int nbPlacesEvt;
    @Column(name = "image")
    private String imageEvt;
    @Column(name = "prix")
    private String price;
    @Column(name = "idAct")
    private String activite;

    public Evenement() {

    }

    public Evenement(String nomEvt) {
        this.nomEvt = nomEvt;
    }

    public Evenement(String nom, String lieu, String date, String heure, String price, String activite) {
        this.nomEvt = nom;
        this.lieuEvt = lieu;
        this.dateEvt = date;
        this.heureEvt = heure;
        this.price = price;
        this.activite = activite;
    }

    public Evenement(Long idEvt, String nom, String lieu, String orga, String date, String heure,
                     String description, int nb_inscriptions, int nb_places, String image, String price, String activite) {
        this.idEvt = idEvt;
        this.nomEvt = nom;
        this.lieuEvt = lieu;
        this.orgaEvt = orga;
        this.dateEvt = date;
        this.heureEvt = heure;
        this.descEvt = description;
        this.nbInscEvt = nb_inscriptions;
        this.nbPlacesEvt = nb_places;
        this.imageEvt = image;
        this.price = price;
        this.activite = activite;
    }

    public Evenement(Long idEvt, String nom, String lieu, String orga, String date, String heure,
                     String description, int nb_inscriptions, int nb_places, String image) {
        this.idEvt = idEvt;
        this.nomEvt = nom;
        this.lieuEvt = lieu;
        this.orgaEvt = orga;
        this.dateEvt = date;
        this.heureEvt = heure;
        this.descEvt = description;
        this.nbInscEvt = nb_inscriptions;
        this.nbPlacesEvt = nb_places;
        this.imageEvt = image;
    }

    public Long getIdEvt() {
        return idEvt;
    }

    public String getNomEvt() {
        return nomEvt;
    }

    public String getLieuEvt() {
        return lieuEvt;
    }

    public String getOrgaEvt() {
        return orgaEvt;
    }

    public String getDateEvt() {
        return dateEvt;
    }

    public String getHeureEvt() {
        return heureEvt;
    }

    public String getDescEvt() {
        return descEvt;
    }

    public int getNbInscEvt() {
        return nbInscEvt;
    }

    public int getNbPlacesEvt() {
        return nbPlacesEvt;
    }

    public String getImageEvt() {
        return imageEvt;
    }

    public String getPrice() {
        return price;
    }

    public String getActivite() {
        return activite;
    }

    public void setIdEvt(Long id) {
        this.idEvt = id;
    }

    public void setNomEvt(String nom) {
        this.nomEvt = nom;
    }

    public void setLieuEvt(String lieu) {
        this.lieuEvt = lieu;
    }

    public void setOrgaEvt(String organisateur) {
        this.orgaEvt = organisateur;
    }

    public void setDateEvt(String date) {
        this.dateEvt = date;
    }

    public void setHeureEvt(String heure) {
        this.heureEvt = heure;
    }

    public void setDescEvt(String description) {
        this.descEvt = description;
    }

    public void setNbInscEvt(int nb_inscriptions) {
        this.nbInscEvt = nb_inscriptions;
    }

    public void setNbPlacesEvt(int nb_places) {
        this.nbPlacesEvt = nb_places;
    }

    public void setImageEvt(String image) {
        this.imageEvt = image;
    }

    @Override
    public String toString() {
        return String.format("Id : %d, Nom : %s, Lieu : %s.", idEvt, nomEvt, lieuEvt);
    }
}
