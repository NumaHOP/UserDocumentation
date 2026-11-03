---
title: Export CALAMES
sidebar_label: Export CALAMES
sidebar_position: 2
description: Exporter un instrument de recherche depuis CALAMES
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "arrow-up-from-bracket"]} /> Export CALAMES


:::info Objectif
Cette démarche permet d'obtenir des instruments de recherche au format **XML-EAD**, compatible avec NumaHOP. La procédure d'export est détaillée dans le [**Manuel du correspondant CALAMES**](https://documentation.abes.fr/aidecalames/manuelcorrespondant/index.html#ExporterFichierProcedure).
:::

### Depuis l'outil de cataloguage

:::tip Documentation
La procédure d'export est détaillée dans le [**Manuel du correspondant CALAMES**](https://documentation.abes.fr/aidecalames/manuelcorrespondant/index.html#ExporterFichierProcedure).
:::

:::warning Droits
L'export d'un instrument de recherche depuis l'outil de catalogage collectif CALAMES nécessite un accès à l'application.
:::

L'export d'un instrument de recherche XML-EAD depuis l'interface de l'outil de catalogage CALAMES s'effectue depuis le volet latéral de droite, en selectionnant un **Instrument de recherche EAD**, puis par un clic-droit sur le fichier puis **Exporter**.

Une boîte de dialogue **Propriété du document** permet de choisir un modèle d'export, dont les caractéristiques sont détaillés dans les dans le [**Manuel du correspondant CALAMES**](https://documentation.abes.fr/aidecalames/manuelcorrespondant/index.html#PrincipesExports:uKWNrUYIpykel0Z5mmddNb). Généralement, l'export **Natif** est suffisant lorsque l'intégralité des documents d'un fonds sont envoyés en numérisation. Dans le cas contraire, il est possible de filtrer les composants à exporter avant la création du fichier avec la saisie d'une expression `XPath` dans le champ **Filtre** de la fenêtre d'export, qui prend la forme `//c[@id=''Calames-2015521155834512''] | // c[@id=''Calames-2015521155834512'']`.

:::tip Instruments de recherche d'autres établissements
Par défaut, le volet latéral de droite de l'interface de l'outil de catalogage CALAMES n'affiche que les instruments de recherche liés à l'établissement de l'utilisateur connecté. Il est possible de consulter l'ensemble des instruments de recherche de tous les établissements du réseau CALAMES par un clic-droit sur le dossier 📚 **Documents EAD**, puis **Voir tous les documents**. Les instruments de recherche grisés ne sont alors ni éditables, ni exportables, mais il est possible de copier des composants dans le presse-papier par un clic-droit **Edition**, puis **Copier**.
:::

### Depuis l'entrepôt OAI-PMH

:::tip Documentation
L'entrepôt OAI-PMH du catalogue collectif CALAMES est librement accessible en ligne. La procédure de moissonage est détaillée dans le [**Manuel de catalogage EAD dans CALAMES**](https://documentation.abes.fr/aidecalames/manuelcatalogageead/index.html#MoissonnageOaiPmh).
:::

Les données du catalogue CALAMES sont moissonnables grâce au protocole OAI-PMH à partir de l'URL `https://calames.abes.fr/oai/oai2.aspx?`. Il est possible de recupérer **un instrument de recherche** publié sous la forme d'un fichier XML-EAD, ou des **niveaux descriptifs** au sein d'un instrument de recherche sous la forme de notices XML-Dublin Core.

- Pour obtenir l'intégralité d'un instrument de recherche publié dans CALAMES, l'URL se compose `https://calames.abes.fr/oai/oai2.aspx?verb=GetRecord&metadataPrefix=oai_ead&identifier=oai:oaicalames.abes.fr:` à laquelle on ajoute l'identifiant `<eadid>` du fichier XML-EAD (ou le `FileID` utilisé dans l'URL publique du catalogue). Le fichier obtenu correspond au dernier état publié de l'instrument de recherche.

- Les données Dublin Core correspondent à une granularité plus fine, mais le passage d'une structure hiérarchique à un lot d'enregistrements de même niveau entraîne un appauvrissement significatif des informations. Par ailleurs, le seul champ de filtre disponible est celui de la date de publication. On peut tout de même récuperer les notices pour un établissement, en l'occurence l'Humathèque Condorcet, pour l'année 2025 avec la requête `https://calames.abes.fr/oai/oai2.aspx?verb=ListRecords&metadataPrefix=oai_dc&set=930019801&from=2025-01-01&until=2025-12-31`.


## Chargement dans NumaHOP

Le fichier `.xml`  peut être chargé dans NumaHOP en suivant les procedures d'import [des notice simples](/docs/utilisateur/5_Imports/1-notices-simples.md) ou des [notices mères-filles](/docs/utilisateur/5_Imports/2-notices-meres-filles.md).
