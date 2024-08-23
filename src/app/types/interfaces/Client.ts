export interface Client {
  identifiant: string;
  nom: string;
  prenom: string;
  classe: { libelle: string; valeur: string };
  option?: { libelle: string; valeur: string };
  dateInscription: string;
  numeroTelephone: string;
  adresse: string;
}
