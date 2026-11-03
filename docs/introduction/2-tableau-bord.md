---
title: Tableau de bord
sidebar_label: Tableau de bord
sidebar_position: 2
description: Parametrage du tableau de bord
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "chalkboard-user"]} /> Tableau de bord

Le logo NumaHOP situé en haut à droite de la page permet d'acceder directement au tableau de bord (_Dashbord_). Il présente à l’utilisateur connecté les **actions à effectuer** et les **données de l'insatnce**.

- les **actions à effectuer**, et pour lesquelles il est habilité, sont affichées automatiquement en fonction des contrôles réalisés et des étapes du workflow ;
- les **indicateurs** préalablement organisés par l'utilisateur, qui définit les **_widgets_** de son propre tableau de bord.

## Actions

Les actions apparaissent uniquement si elles existent. Par défaut, les actions sont listées en indiquant le **nombre de documents** accessibles à l’utilisateur
connecté, et sont **regroupées par étape de workflow**. En cliquant sur un des bandeaux d’étape, celui-ci se déplie et affiche les éléments concernés.

Les listes d'actions possibles permettent d'acceder directement aux unités docuemntaires à traiter.
- Documents en **attente de livraison** : [_Gestion des livraisons_](/docs/utilisateur/gestion-livraisons) <Icon icon={["fa", "arrow-up-right-from-square"]} /> ;
- Documents **à contrôler** ou **en cours de contrôle** : [_Contrôles manuels_](/docs/utilisateur/Contrôles/controles-manuels) <Icon icon={["fa", "arrow-up-right-from-square"]} /> ;
- Vérification des **pré-rejets/pré-validations** : [_Validation ou rejet des documents_](/docs/utilisateur/Contrôles/controles-manuels#35-validation-ou-rejet-du-document) <Icon icon={["fa", "arrow-up-right-from-square"]} />.

## _Widgets_

### Ajouter un _widget_

Les widgets sont paramétrables pour chaque utilisateur, par l’utilisateur lui-même, afin que chacun puisse bénéficier des informations qu’il juge pertinentes. Ils n'impactent donc pas le tableau de bord des autres utilisateurs.

La personalisation des widgets du tableau de bord se fait grâce au bouton <Icon icon={["fa", "pen-to-square"]} /> **Editer** situé en haut à droite de l’écran d’accueil. Plusieurs actions sont possibles.

- <Icon icon={["fa", "square-plus"]} /> **Ajouter** un _widget_ ;
- <Icon icon={["fa", "floppy-disk"]} /> **Sauvegarder** les modifications ;
- <Icon icon={["fa", "reply"]} /> **Annuler** les modifications;

Après avoir <Icon icon={["fa", "square-plus"]} /> **Ajouter** un _widget_, il s'intègre au tableau de bord. Il est alors possible de :

- <Icon icon={["fa", "arrows-up-down-left-right"]} />  **Déplacer** le _widget_ sur la grille ;
- <Icon icon={["fa", "square-xmark"]} />  **Supprimer** un _widget_ du tableau de bord.

:::tip
Selon les habilitations de l’utilisateur dans le workflow, certains _widgets_ seront plus utiles que d’autres.
- l'**espace disque disponible** s'adresse à un chef de projet ;
- les **activités des contrôles** sont déstinées à un contrôleur qualité.
::::

### Paramétrer un _widget_

Pour indiquer les données à afficher, le parametrage du _widget_ s'effectue depuis l'icone <Icon icon={["fa", "gear"]} /> **Configurer le widget**. La boîte de dialogue propose différents champs à renseigner selon les données voulues.

- **Renommer** le _widget_ ;
- **Choisir la bibliothèque** concernée (_liste déroulante_);
- **Selectionner un projet, un lot, ou un train** (_liste déroulante_);
- **Définir le statut** de l'élément selectionné (_liste déroulante_);
- **Définir le nombre de jours** à partir desquels récuperer des données.

### _Widgets_ disponibles

| **Widget**                          | Description                                                              | Paramétrages                                                                                                                                                                                      | Commentaires                                                   |
| :----------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Horloge**                        | Affichage de l’heure et de la date en temps réel.                        | Format d’affichage (24h/12h)                                                                                                                                                                      | Widget toujours visible en haut de l’interface.                |
| **Activité des projets**           | Dernières activités sur les projets (création, modification, statut).  | Titre : Nom du projet<br/>Bibliothèque (selon autorisation)<br/>Statuts (à afficher, colonne masquée si un seul statut)<br/>Délai : Depuis x jours (filtre)                                             | Permet un suivi rapide des projets actifs ou en retard.        |
| **Activité des trains**            | Dernières activités sur les trains (progression, blocages, validations).|<br/>Titre : Nom du train<br/>Bibliothèque (selon autorisation)<br/>Projet (selon autorisation)<br/>Statuts (colonne masquée si un seul statut)<br/>Délai : Depuis x jours (filtre)                          | Utile pour visualiser l’avancement des trains de livraison.    |
| **Activité des livraisons**        | Dernières activités sur les livraisons (en cours, terminées, en erreur).|<br/>Titre : Nom de la livraison<br/>Bibliothèque (selon autorisation)<br/>Projet (selon autorisation)<br/>Lot (selon autorisation)<br/>Statuts (colonne masquée si un seul statut)<br/>Délai : Depuis x jours | Permet de suivre les livraisons critiques ou en retard.        |
| **Activités des UD**               | Dernières activités sur les unités documentaires.                        |<br/>Titre : Nom de l’UD<br/>Bibliothèque (selon autorisation)<br/>Projet (selon autorisation)<br/>Lot (selon autorisation)<br/>Statuts (colonne masquée si un seul statut)<br/>Délai : Depuis x jours         | Suivi des modifications ou validations des UD.                 |
| **UD par statut**                  | Nombre d’unités documentaires par statut.                                |<br/>Titre : Libellé du widget<br/>Format : Anneau, camembert, histogramme, liste<br/>Projet (selon autorisation)<br/>Lot (selon autorisation)<br/>Etape de workflow (si applicable)                         | Visualisation synthétique de la répartition des UD par statut. |
| **Unités documentaires**          | Liste des unités documentaires (filtre possible).                        |<br/>Titre : Nom ou identifiant de l’UD<br/>Projet (selon autorisation)                                                                                                                                | Permet une recherche ou un export des UD.                      |
| **UD archivées/diffusées**         | Liste des UD archivées ou diffusées, avec filtre sur les erreurs.        |<br/>Titre : Nom de l’UD<br/>Type : Archivée/Diffusée<br/>En erreur : Oui/Non<br/>Délai : Depuis x jours                                                                                                   | Suivi des UD finalisées ou en échec.                           |
| **Délai de contrôle restant**      | Délai restant pour le contrôle des livraisons.                           |<br/>Titre : Nom de la livraison<br/>Bibliothèque (selon autorisation)<br/>Projet (selon autorisation)<br/>Lot (selon autorisation)<br/>Livraison (selon autorisation)                                       | Alertes visuelles pour les contrôles urgents.                  |
| **Détails d’un projet**            | Liste des documents de contrôle d’un projet.                             |<br/>Titre : Nom du projet<br/>Projet (obligatoire)                                                                                                                                                    | Accès direct aux documents associés à un projet.               |
| **Espace disque disponible**       | Espace disque utilisé/disponible par bibliothèque.                       |<br/>Titre : Libellé du widget<br/>Format : Camembert, histogramme, etc.<br/>Bibliothèque (obligatoire)                                                                                                  | Surveillance de l’espace de stockage.                          |
| **Décompte des utilisateurs**      | Nombre d’utilisateurs par bibliothèque.                                  |<br/>Titre : Libellé du widget<br/>Format : Anneau, camembert, histogramme, liste<br/>Bibliothèque (obligatoire)                                                                                         | Statistiques d’utilisation par bibliothèque.                   |
| **Activité des contrôles**         | Dernières unités documentaires contrôlées.                               |<br/>Titre : Nom de l’UD contrôlée<br/>Bibliothèque (selon autorisation)<br/>Projet (selon autorisation)<br/>Lot (selon autorisation)<br/>Statut du document<br/>Depuis : x jours                              | Suivi des contrôles récents et de leur statut.                 |
| **Contrôle des livraisons échantillonnées** | Contrôle des livraisons échantillonnées.                         |<br/>Titre : Nom de la livraison<br/>Bibliothèque (selon autorisation)<br/>Projet (selon autorisation)<br/>Lot (selon autorisation)<br/>Depuis : x jours                                                     | Permet de cibler les livraisons à contrôler en priorité.       |
