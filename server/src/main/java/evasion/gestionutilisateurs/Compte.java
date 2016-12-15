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
    private String dateNaissance;
    @Column(name = "genre")
    private String genre;
    @Column(name = "email")
    private String email;
    @Column(name = "mot_de_passe")
    private String motDePasse;
    @Column(name = "flag_suppression")
    private boolean flagSuppression;

    public Compte() {

    }

	public Compte(String nom, String prenom, String dateNaissance, String genre, String email, String motDePasse) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.genre = genre;
		this.email = email;
		this.motDePasse = motDePasse;
		this.flagSuppression = false;
	}

	public Compte(Long id, String nom, String prenom, String dateNaissance, String genre, String email,
			String motDePasse, boolean flagSuppression) {
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.genre = genre;
		this.email = email;
		this.motDePasse = motDePasse;
		this.flagSuppression = flagSuppression;
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

	public String getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(String dateNaissance) {
		this.dateNaissance = dateNaissance;
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

	public String getMotDePasse() {
		return motDePasse;
	}

	public void setMotDePasse(String motDePasse) {
		this.motDePasse = motDePasse;
	}

	public boolean isFlagSuppression() {
		return flagSuppression;
	}

	public void setFlagSuppression(boolean flagSuppression) {
		this.flagSuppression = flagSuppression;
	}

}
