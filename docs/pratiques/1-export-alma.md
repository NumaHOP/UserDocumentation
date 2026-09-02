---
title: Export ALMA
sidebar_label: Export ALMA
sidebar_position: 1
description: Exporter des notices biblographiques depuis ALMA
---

import Icon from '@site/src/components/Icon';

### Export ALMA

:::info Objectif
Cette démarche permet d'obtenir des notices bibliographiques avec **données de fonds** et **d'exemplaire** dans un fichier au **format MARC-XML**, compatible avec NumaHop.
:::

:::warning Droits
La création d'ensembles et l'export de notices depuis le système intégré de gestion de bibliothèque ALMA nécessite d'une part des **droits spécifiques** dans l'application, et un **accès au serveur SFTP** `sftp.campus-condorcet.fr`.
:::

#### 1. Créer un ensemble exemplarisé

L'export des notices bibliographiques depuise ALMA passe par la création d'un jeu de données, ou ensemble. Pour créer un ensemble, rendez-vous dans le menu applicatif 🔑 **Admin** du panneau latéral de gauche, puis dans le sous-menu ⭐ **Gérer les ensembles**. Dans le cadre de la numérisation, il convient de ⭐ **Créer un ensemble exemplarisé** grâce au bouton situé en haut à droite de l'écran pour accéder au formulaire.

- Nom de l'ensemble (_obligatoire_) ;
- Description (_facultatif_) ;
- Note (_facultatif_) ;
- Type de contenu de l'ensemble (_facultatif_) ;
- Ajouter des exemplaires à l'ensemble (_choix multiples_).

Dès cette étape, il est possible de selectionner le type de contenu qui constitura l'ensemble, généralement **Tous les titres**, ou **Titres physiques** et de préciser la méthode d'import des notices.

- **A partir de la recherche** : la selection des exemplaires s'effectue comme une recherche avancée dans ALMA ;
- **A partir d'un fichier** : la selection des exemplaires s'effectue par l'import d'un fichier tabulé contenant une liste de code-barres (_barcode_) ou d'identifiants MMS ;
- **A partir d'analyse** (_à documenter_).

Une fois les notices trouvées et selectionnées, le bouton ⭐ **Ajouter la sélection** permet de les importer dans l'ensemble. Il est toujours possible de modifier un le contenu d'un jeu de données depuis la liste des ensembles accessible avec le sous-menu ⭐ **Gérer les ensembles**, en cliquant sur ⭐ **Ajouter des membres à l'ensemble**.

#### 2. Exporter les notices d'exemplaires

L'export des notices bibliographiques réunies dans un ensemble exemplarisé s'effectue depuis le menu applicatif 🔑 **Admin** du panneau latéral de gauche, puis dans le sous-menu ⭐ **Exécuter un traitement**. Un export est un traitement en quatre étapes : dans la liste des traitements disponibles, selectionner ⭐ **Exporter des notices bibliographiques** en passant par le champ de recherche si nécessaire, puis ⭐ **Suivant** ; selectionner ensuite un jeu de données ou un ensemble exemplarisé préalablement créé, et à nouveau ⭐ **Suivant** ; il sera enfin possible éditer les **Paramètres de la tâche** si nécessaire.

- Format physique : XML (_valeur par défaut_) ;
- Format de sortie : UNIMARC Bibliographic (_valeur par défaut_) ;
- Nombre de notices dans le fichier : Un fichier (_valeur par défaut_) ;
- Procédure d'enrichissement : Ajouter des données de fonds (_à selectionner dans la liste_)
- Exporter dans le dossier : Privé (_valeur par défaut_) ;
- Configuration FTP (_non renseigné_) ;
- Sous-répertoire (_non renseigné_).

La dernière étape consiste à réviser, et le cas échant confirmer, l'éxécution du traitement. Dans le cadre de la numérisation, ce traitement est unique et ne doit pas être exécuter de manière régulière : on garde donc l'option par défaut **Exécuter maintenant** avant de ⭐ **Soumettre** le traitement.

Lorsque le traitement a été effectué, ALMA affiche une info bulle **Traitement effectué** dans le volet latéral de droite. Le lien **Voir l'historique de traitement** renvoie sur la page de **Suivi des traitements**, où l'on retrouve le traitement dans l'onglet **Historique**. Pour accéder au **Rapport**, cliquez sur l’intitulé du traitement, ou dans le menu déroulant **Plus d'actions** à droite de la ligne : on peut alors **Télécharger** le fichier exporté.

#### 3. Cas particuliers

:::info Multi-volumes et périodiques
Les multivolumes et périodiques ont la particularité de **regrouper plusieurs documents physiques sous une seule et même notice bibliographique**, entraînant des complications lors de la création d'unités documentaires distinctes dans NumaHop. Cette procédure permet d'exporter des notices exemplarisées directement depuis ALMA.

Une autre approche consiste à dupliquer et modifier des unités documentaires directement dans NumaHop.
:::

:::warning
Cette procédure ne s'applique pas aux multi-volumes ou périodique dont chacune des parties (volumes, tomes, ou numéro) possède une notice bibliographique.
:::

L'export des notices bibliographiques de multi-volumes ou de périodiques seffectue depuis le menu applicatif 📚 **Ressources** du panneau latéral de gauche, puis dans le sous-menu ⭐ **Profils de publication**. Il suffit, dans l'onglet **Détails**, sous **Contenu**, de selectionner l'ensemble à publier, puis d'⭐ **Enregistrer** la modification, avant de ⭐**Publier à nouveau**.

:::danger Reconstruire tout l'index
Dans la boîte de dialogue **Publier à nouveau**, sous **Mode de publication**, il convient de choisir l'option **Reconstruire tout l'index**, et non le mode par défaut.
:::

Le fichier généré est enregistré sur le serveur SFTP ALMA Ex-Libris `sftp.campus-condorcet.fr` dans `/exports/metadonnees-numerisation`.

Le profil de publication spécifique **NumaHop** est déja paramétré, mais peut être éditer le cas échéant depuis l'onglet **Enrichissement de données**, puis dans les encarts **Enrichissement des exemplaires physique**. En cas de modification, il conviendra de modifier les _mappings_ de NumaHop en conséquence.

- les **données de fonds** issues des informations de la _holding_ (étiquette 852) sont envoyées dans les champs MARC-XML `925$b`, `925$c` ou `925$h` ;
- les **notes d'exemplaires** sont envoyées dans le champ MARC-XML `935$a` pour l'idenifiant de l'exemplaire (PID), `935$b` pour le code-barres, et `935$c` pour la description.

# <Icon icon={["fa", "arrow-up-from-bracket"]} /> Export ALMA

 ## Présentation

 Cette interface permet de savoir comment réaliser un export de données au format Marc.xml depuis Alma.
 
 Pour se faire, elle décrit les étapes suivantes :
- Création d’un Jeu de données dans Alma	
- Export du jeu de données dans ALMA	
- Récuparation du fichier marc.xml	


 ## Création d'un jeu de données dans Alma
La première étape consiste à créer un jeu de données pour rassembler toutes les notices que vous souhaitez voir importer dans NumaHOP.

### Caractéristique du du jeu de données 
Aller dans **Admin** > **Gérer les ensemble** > **Créer un ensemble exemplarisé**

**Remplir la fenêtre d'information** suivante : 

| **Libellé** | **Commentaire** | **Détails** | **Exemple**  |
|---------|-------------|---------|---|
| Nom ensemble        | Nom de votre corpus            |🔴 Obligatoire         | *Esotérisme*  |
| Description         | Description plus fine du contenu            | 🔵 Facultatif        |*document de la Réserve*   |
|  Note       | Note informative            | 🔵 Facultatif        |   |
| Type de contenu de l'ensemble        |  Choisir le type de données à traiter            | 🔵 Facultatif        | *Titres physiques*  |
| Privé /actif        | Cocher la croix privée si vous souhaitez ne pas avoir un jeu de notices public             |🔵 Facultatif         | *privé*  |
| Ajout exemplaires à l'ensemble        | Choix de la méthodologie d'ajout des notices            |🔵 Facultatif         |*à partir de la recherche*   |


### Ajout de notices au jeu de données
Une fois votre jeu crée, cliquer sur **Ajouter des membles à l'ensemble**

**Lancer une recherche** par exemple par cote pour ajouter des notices à votre ensemble.

**Sélectionner la notice**, cliquer sur **Ajouter à la sélection**

Refaire l'opération de recherche et de sélection jusqu'à avoir un jeu de données complet pour l'export. 



## Export du jeu de données dans ALMA

### Exportation du jeu de données

Aller dans **Ressources** > **Publication** > **Profils de publication**

La liste des profils apparait, prendre le votre et cliquer sur **Plus d'actions** > **Modifier** 

**Changer le nom de l’ensemble** y indiquer votre jeu de données à exporter à l’aide du menu déroulant

Cliquer sur **Enregistrer**  > **Executer**

### Récupération du jeu de données sur le serveur STFP d'Alma

**Aller sur votre serveur Alma** > **Récupérer votre fichier Marc.xml** 


## Chargement dans NumaHOP

Vous pouvez maintenant charger vos notices à l'aide de la [procédure d'import des notice simples](docs/utilisateur/5_Imports/1-notices-simples.md)


