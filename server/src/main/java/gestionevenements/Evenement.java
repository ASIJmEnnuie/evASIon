package gestionevenements;


import javax.persistence.*;

@Entity
public class Evenement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_evt", nullable = false)
    private Long idEvt;
    @Column(name = "nom_evt", nullable = false)
    private String nomEvt;
    @Column(name = "lieu_evt")
    private String lieuEvt;
    @Column(name = "orga_evt")
    private String orgaEvt;
    @Column(name = "date_evt")
    private String dateEvt;
    @Column(name = "heure_evt")
    private String heureEvt;
    @Column(name = "desc_evt")
    private String descEvt;
    @Column(name = "nb_insc_evt")
    private int nbInscEvt;
    @Column(name = "nb_places_evt")
    private int nbPlacesEvt;
    @Column(name = "image_evt")
    private String imageEvt;

    public Evenement() {

    }

    public Evenement(String nomEvt) {
        this.nomEvt = nomEvt;
    }

    public Evenement(Long id, String nom, String lieu, String orga, String date, String heure,
                     String description, int nb_inscriptions, int nb_places, String image) {
        this.idEvt = id;
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
