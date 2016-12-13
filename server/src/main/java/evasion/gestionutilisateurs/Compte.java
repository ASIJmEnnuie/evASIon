package evasion.gestionutilisateurs;

import javax.persistence.*;

@Entity
public class Compte {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "nom")
    private String nom;
    @Column(name = "prenom")
    private String prenom;
    @Column(name = "date_naissance")
    private String date_naissance;
    @Column(name = "genre")
    private String genre;
    @Column(name = "email")
    private String email;
    @Column(name = "mot_de_passe")
    private String mot_de_passe;
    @Column(name = "flag_suppression")
    private boolean flag_suppression;

    public Compte() {

    }

	public Compte(String nom, String prenom, String date_naissance, String genre, String email, String mot_de_passe,
			boolean flag_suppression) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.date_naissance = date_naissance;
		this.genre = genre;
		this.email = email;
		this.mot_de_passe = mot_de_passe;
		this.flag_suppression = flag_suppression;
	}

	public Compte(Long id, String nom, String prenom, String date_naissance, String genre, String email,
			String mot_de_passe, boolean flag_suppression) {
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.date_naissance = date_naissance;
		this.genre = genre;
		this.email = email;
		this.mot_de_passe = mot_de_passe;
		this.flag_suppression = flag_suppression;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getDate_naissance() {
		return date_naissance;
	}

	public void setDate_naissance(String date_naissance) {
		this.date_naissance = date_naissance;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMot_de_passe() {
		return mot_de_passe;
	}

	public void setMot_de_passe(String mot_de_passe) {
		this.mot_de_passe = mot_de_passe;
	}

	public boolean isFlag_suppression() {
		return flag_suppression;
	}

	public void setFlag_suppression(boolean flag_suppression) {
		this.flag_suppression = flag_suppression;
	}

}
