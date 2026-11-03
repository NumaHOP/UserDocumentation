---
title: Export ALMA
sidebar_label: Export ALMA
sidebar_position: 1
description: Exporter des notices biblographiques depuis ALMA
---

import Icon from '@site/src/components/Icon';

:::info Objectif
Cette démarche permet d'obtenir des notices bibliographiques avec **données de fonds** et **d'exemplaire** dans un fichier au **format MARC-XML**, compatible avec NumaHOP.
:::

:::warning Droits
La création d'ensembles et l'export de notices depuis le système intégré de gestion de bibliothèque ALMA nécessite d'une part des **droits spécifiques** dans l'application, et un **accès au serveur SFTP** de l'instance.
:::

### Créer un ensemble exemplarisé

L'export des notices bibliographiques depuis ALMA passe par la création d'un jeu de données, ou ensemble. Pour créer un ensemble, rendez-vous dans le menu applicatif **Admin** du panneau latéral de gauche, puis dans le sous-menu **Gérer les ensembles**. Dans le cadre de la numérisation, il convient de **Créer un ensemble exemplarisé** grâce au bouton situé en haut à droite de l'écran pour accéder au formulaire.

- Nom de l'ensemble (_obligatoire_) ;
- Description (_facultatif_) ;
- Note (_facultatif_) ;
- Type de contenu de l'ensemble (_facultatif_) ;
- Ajouter des exemplaires à l'ensemble (_choix multiples_).

Dès cette étape, il est possible de selectionner le type de contenu qui constitura l'ensemble, généralement **Tous les titres**, ou **Titres physiques** et de préciser la méthode d'import des notices.

- **A partir de la recherche** : la selection des exemplaires s'effectue comme une recherche avancée dans ALMA ;
- **A partir d'un fichier** : la selection des exemplaires s'effectue par l'import d'un fichier tabulé contenant une liste de code-barres (_barcode_) ou d'identifiants MMS.

Une fois les notices trouvées et selectionnées, le bouton **Ajouter la sélection** permet de les importer dans l'ensemble. Il est toujours possible de modifier un le contenu d'un jeu de données depuis la liste des ensembles accessible avec le sous-menu **Gérer les ensembles**, en cliquant sur **Ajouter des membres à l'ensemble**.

### Exporter les notices d'exemplaires

L'export des notices bibliographiques réunies dans un ensemble exemplarisé s'effectue depuis le menu applicatif **Admin** du panneau latéral de gauche, puis dans le sous-menu **Exécuter un traitement**. Un export est un traitement en quatre étapes : dans la liste des traitements disponibles, selectionner **Exporter des notices bibliographiques** en passant par le champ de recherche si nécessaire, puis **Suivant** ; selectionner ensuite un jeu de données ou un ensemble exemplarisé préalablement créé, et à nouveau **Suivant** ; il sera enfin possible éditer les **Paramètres de la tâche** si nécessaire.

- Format physique : XML (_valeur par défaut_) ;
- Format de sortie : UNIMARC Bibliographic (_valeur par défaut_) ;
- Nombre de notices dans le fichier : Un fichier (_valeur par défaut_) ;
- Procédure d'enrichissement : Ajouter des données de fonds (_à selectionner dans la liste_)
- Exporter dans le dossier : Privé (_valeur par défaut_) ;
- Configuration FTP (_non renseigné_) ;
- Sous-répertoire (_non renseigné_).

La dernière étape consiste à réviser, et le cas échant confirmer, l'éxécution du traitement. Dans le cadre de la numérisation, ce traitement est unique et ne doit pas être exécuter de manière régulière : on garde donc l'option par défaut **Exécuter maintenant** avant de **Soumettre** le traitement.

Lorsque le traitement a été effectué, ALMA affiche une info bulle **Traitement effectué** dans le volet latéral de droite. Le lien **Voir l'historique de traitement** renvoie sur la page de **Suivi des traitements**, où l'on retrouve le traitement dans l'onglet **Historique**. Pour accéder au **Rapport**, cliquez sur l’intitulé du traitement, ou dans le menu déroulant **Plus d'actions** à droite de la ligne : on peut alors **Télécharger** le fichier exporté.

### Cas particulier : multi-volumes et périodiques

:::info Multi-volumes et périodiques
Les multivolumes et périodiques ont la particularité de **regrouper plusieurs documents physiques sous une seule et même notice bibliographique**, entraînant des complications lors de la création d'unités documentaires distinctes dans NumaHOP. Cette procédure permet d'exporter des notices exemplarisées directement depuis ALMA.

Une autre approche consiste à dupliquer et modifier des unités documentaires directement dans NumaHOP.
:::

:::warning
Cette procédure ne s'applique pas aux multi-volumes ou périodique dont chacune des parties (volumes, tomes, ou numéro) possède une notice bibliographique.
:::

L'export des notices bibliographiques de multi-volumes ou de périodiques seffectue depuis le menu applicatif 📚 **Ressources** du panneau latéral de gauche, puis dans le sous-menu **Profils de publication**. Il suffit, dans l'onglet **Détails**, sous **Contenu**, de selectionner l'ensemble à publier, puis d'**Enregistrer** la modification, avant de **Publier à nouveau**.

:::danger Reconstruire tout l'index
Dans la boîte de dialogue **Publier à nouveau**, sous **Mode de publication**, il convient de choisir l'option **Reconstruire tout l'index**, et non le mode par défaut.
:::

Le fichier généré est enregistré sur le serveur SFTP ALMA de 'linstance.

Un profil de publication spécifique **NumaHOP** edoit être paramétré et éditer le cas échéant depuis l'onglet **Enrichissement de données**, puis dans les encarts **Enrichissement des exemplaires physique**.


## Chargement dans NumaHOP

Le fichier `.xml` peut être chargé dans NumaHOP en suivant la [procédure d'import des notice simples](docs/utilisateur/5_Imports/1-notices-simples.md)


