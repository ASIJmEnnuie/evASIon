package evasion.gestionactivites;


import javax.persistence.*;

@Entity
public class Activite {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id_act;
    @Column(name = "nom")
    private String nom_act;
    @Column(name = "adresse")
    private String adresse;
    @Column(name = "description")
    private String description;
    @Column(name = "site")
    private String site;
    @Column(name = "id_admin_derniere_modif")
    private String id_admin_modif;
    @Column(name = "date_derniere_modif")
    private String date_modif;


    public Activite() {

    }

    public Activite(String nomAct) {
        this.nom_act = nomAct;
    }

    public Activite(Long idAct, String nom, String adresse, String secription, String site,
                     String id_admin_modif, String date_modif) {
        this.id_act = idAct;
        this.nom_act = nom;
        this.adresse = adresse;
        this.description = description;
        this.site = site;
        this.id_admin_modif = id_admin_modif;
        this.date_modif = date_modif;
    }

    public Activite(String nom, String adresse, String secription, String site,
                     String id_admin_modif, String date_modif) {
        this.nom_act = nom;
        this.adresse = adresse;
        this.description = description;
        this.site = site;
        this.id_admin_modif = id_admin_modif;
        this.date_modif = date_modif;
    }

	public Long getId_act() {
		return id_act;
	}
	public void setId_act(Long id_act) {
		this.id_act = id_act;
	}
	public String getNom_act() {
		return nom_act;
	}
	public void setNom_act(String nom_act) {
		this.nom_act = nom_act;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSite() {
		return site;
	}
	public void setSite(String site) {
		this.site = site;
	}
	public String getId_admin_modif() {
		return id_admin_modif;
	}
	public void setId_admin_modif(String id_admin_modif) {
		this.id_admin_modif = id_admin_modif;
	}
	public String getDate_modif() {
		return date_modif;
	}
	public void setDate_modif(String date_modif) {
		this.date_modif = date_modif;
	}

    @Override
    public String toString() {
        return String.format("Id : %d, Nom : %s, adresse : %s.", id_act, nom_act, adresse);
    }
}
