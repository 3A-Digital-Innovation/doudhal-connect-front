import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeClient } from '../../../types/interfaces/type-client';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Client } from '../../../types/interfaces/Client';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tableau-affichage-generique',
  standalone: true,
  imports: [
    CommonModule,
    NgbTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,

    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './tableau-affichage-generique.component.html',
  styleUrls: ['./tableau-affichage-generique.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableauAffichageGeneriqueComponent implements OnInit {
  @Input({ required: true }) readonly typeElement: TypeClient =
    TypeClient.Eleve;
  @Input({ required: true }) clients: Client[] = [];
  @Input({ required: true }) readonly titres: string[] = [
    'Identifiant',
    'Nom',
    'Prénom',
    'Classe',
    'Option',
    "Date d'inscription",
    'Numéro de téléphone',
    'Adresse',
  ];
  @Input({ required: true }) pageSizes: number[] = [3, 5, 10, 20, 50];

  protected classes: { libelle: string; valeur: string }[] = [];
  protected options: { libelle: string; valeur: string }[] = [];
  protected filteredClients: Client[] = [];
  protected filtreClasse: string = '';
  protected filtreOption: string = '';
  protected filterIdNomPrenomTel: string = '';
  protected currentPageSize: number = 10;
  protected currentPageNumber: number = 1;
  protected nombrePage: number = 0;

  protected tooltipTitle = '';
  protected tooltipTrash = 'Supprimer';
  protected tooltipModif = 'Modifier';
  protected tooltipAffichage = 'Afficher';

  constructor(private matPaginatorIntl: MatPaginatorIntl) {
    this.tooltipTitle = `Ajouter ${this.typeElement.substring(
      0,
      this.typeElement.length - 1
    )}`;
    this.currentPageSize = this.pageSizes[0];
    this.classes = this.getClasses();
  }

  ngOnInit(): void {
    this.nombrePage =
      this.getClients().length % this.currentPageSize != 0
        ? Math.floor(this.getClients().length / this.currentPageSize) + 1
        : this.getClients().length / this.currentPageSize;
    this.clients = this.getClients().slice(0, this.currentPageSize);
    this.filteredClients = this.clients;

    this.matPaginatorIntl.firstPageLabel = 'Première';
    this.matPaginatorIntl.nextPageLabel = 'Suivante';
    this.matPaginatorIntl.itemsPerPageLabel = "Nombre d'eleve par page";
    this.matPaginatorIntl.getRangeLabel = () => {
      return 'Page 1';
    };
  }

  private getClients(): Client[] {
    return [
      {
        identifiant: '1',
        nom: 'DIALLO',
        prenom: 'Aboubacar Sidig',
        classe: {
          libelle: '7e Année',
          valeur: '7',
        },
        dateInscription: '04/01/2024',
        numeroTelephone: '0623741097',
        adresse: '7 rue jouven 13003',
      },
      {
        identifiant: '2',
        nom: 'BAH',
        prenom: 'Aboubacar',
        classe: {
          libelle: '11e Année',
          valeur: '11',
        },
        option: {
          libelle: 'Mathématique',
          valeur: 'M',
        },
        dateInscription: '04/01/2024',
        numeroTelephone: '0623741097',
        adresse: '7 rue jouven 13003',
      },
      {
        identifiant: '3',
        nom: 'DIALLO',
        prenom: 'Sidig',
        classe: {
          libelle: 'Terminale',
          valeur: 'T',
        },
        option: {
          libelle: 'Sociale',
          valeur: 'S',
        },
        dateInscription: '04/01/2024',
        numeroTelephone: '0623741097',
        adresse: '7 rue jouven 13003',
      },
      {
        identifiant: '4',
        nom: 'BAH',
        prenom: 'Sidig',
        classe: {
          libelle: '5e Année',
          valeur: '5',
        },
        dateInscription: '04/01/2024',
        numeroTelephone: '0623741097',
        adresse: '7 rue jouven 13003',
      },
      {
        identifiant: '5',
        nom: 'DIALLO',
        prenom: 'Aboubacar Sidig',
        classe: {
          libelle: '9e Année',
          valeur: '9',
        },
        dateInscription: '04/01/2024',
        numeroTelephone: '0623741097',
        adresse: '7 rue jouven 13003',
      },
      {
        identifiant: '6',
        nom: 'BAH',
        prenom: 'Aboubacar',
        classe: {
          libelle: '12e Année',
          valeur: '12',
        },
        option: {
          libelle: 'Expérientale',
          valeur: 'E',
        },
        dateInscription: '04/01/2024',
        numeroTelephone: '0623741097',
        adresse: '7 rue jouven 13003',
      },
      {
        identifiant: '7',
        nom: 'DIALLO',
        prenom: 'Sidig',
        classe: {
          libelle: '8e Année',
          valeur: '8',
        },
        dateInscription: '04/01/2024',
        numeroTelephone: '0623741097',
        adresse: '7 rue jouven 13003',
      },
      {
        identifiant: '8',
        nom: 'DIALLO',
        prenom: 'Aboubacar Sidig',
        classe: {
          libelle: 'Terminale',
          valeur: 'T',
        },
        option: {
          libelle: 'Mathématique',
          valeur: 'M',
        },
        dateInscription: '04/01/2024',
        numeroTelephone: '0623741097',
        adresse: '7 rue jouven 13003',
      },
      {
        identifiant: '9',
        nom: 'BAH',
        prenom: 'Aboubacar',
        classe: {
          libelle: '11e Année',
          valeur: '11',
        },
        option: {
          libelle: 'Expérimentale',
          valeur: 'E',
        },
        dateInscription: '04/01/2024',
        numeroTelephone: '0623741097',
        adresse: '7 rue jouven 13003',
      },
      {
        identifiant: '10',
        nom: 'DIALLO',
        prenom: 'Sidig',
        classe: {
          libelle: '7e Année',
          valeur: '7',
        },
        dateInscription: '04/01/2024',
        numeroTelephone: '0623741097',
        adresse: '7 rue jouven 13003',
      },
    ];
  }

  private getClasses(): { libelle: string; valeur: string }[] {
    return [
      {
        libelle: '7e Année',
        valeur: '7',
      },
      {
        libelle: '5e Année',
        valeur: '5',
      },
      {
        libelle: '12e Année',
        valeur: '12',
      },
      {
        libelle: '3e Année',
        valeur: '3',
      },
      {
        libelle: '11e Année',
        valeur: '11',
      },
    ];
  }

  private getOptions(): { libelle: string; valeur: string }[] {
    return [
      {
        libelle: 'Mathématique',
        valeur: 'M',
      },
      {
        libelle: 'Social',
        valeur: 'S',
      },
      {
        libelle: 'Expérimentale',
        valeur: 'E',
      },
    ];
  }

  protected setClasse(classe: string): void {
    this.filtreClasse = classe;
    if (!this.filtreClasse && !this.filtreOption) {
      debugger;
      this.filteredClients = this.clients;
    } else {
      let lycee = ['11', '12', 'T'];
      this.options = lycee.includes(this.filtreClasse) ? this.getOptions() : [];
    }
  }

  protected setOption(option: string): void {
    this.filtreOption = option;
  }

  protected filtrerTableau(): void {
    if (this.filtreClasse) {
      this.filteredClients = this.filteredClients.filter(
        (c) => c.classe.valeur === this.filtreClasse
      );
    }
    if (this.filtreOption) {
      this.filteredClients = this.filteredClients.filter(
        (c) => c.option?.valeur === this.filtreOption
      );
    }
    if (this.filterIdNomPrenomTel) {
      this.filteredClients = this.filteredClients.filter(
        (c) =>
          c.numeroTelephone.toLocaleUpperCase() ===
          this.filterIdNomPrenomTel.toLocaleUpperCase()
      );
    }
  }

  protected changePageSize(e: any) {
    this.currentPageSize = e;
    this.nombrePage =
      this.getClients().length % this.currentPageSize != 0
        ? Math.floor(this.getClients().length / this.currentPageSize) + 1
        : this.getClients().length / this.currentPageSize;
    this.clients = this.getClients().slice(0, this.currentPageSize);
    this.filteredClients = this.clients;
  }

  protected getFirstPage(): void {
    this.currentPageNumber = 1;
    this.filteredClients = this.getClients().slice(
        this.currentPageSize * this.currentPageNumber - this.currentPageSize,
        this.currentPageSize * this.currentPageNumber
      );
  }

  protected getPrePage(): void {
    if (this.currentPageNumber > 1) {
      --this.currentPageNumber;
      this.filteredClients = this.getClients().slice(
        this.currentPageSize * this.currentPageNumber - this.currentPageSize,
        this.currentPageSize * this.currentPageNumber
      );
    }
  }

  protected getNextPage(): void {
    if (this.currentPageNumber <= this.nombrePage) {
      ++this.currentPageNumber;
      this.filteredClients = this.getClients().slice(
        this.currentPageSize * this.currentPageNumber - this.currentPageSize,
        this.currentPageSize * this.currentPageNumber
      );
    }
  }

  protected getLastPage(): void {
    this.currentPageNumber = this.nombrePage;
    this.filteredClients = this.getClients().slice(
        this.currentPageSize * this.currentPageNumber - this.currentPageSize,
        this.currentPageSize * this.currentPageNumber
      );
  }

  protected trackByTitreFn(index: number, titre: string): string {
    return titre;
  }

  protected ClientByIdentifiant(index: number, Client: Client): string {
    return Client.identifiant;
  }

  // dataSource = new MatTableDataSource<Client>(this.clients);

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}