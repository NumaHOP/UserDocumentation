---
title: Statistiques
sidebar_label: Statistiques
sidebar_position: 5
description: Présentation du module de statistiques
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "chart-pie"]} /> Statistiques

Le module Statistiques est accessible via l'icône <Icon icon={["fa", "chart-pie"]} /> **Statistiques** du menu applicatif. Il permet d'obtenir différents tableaux de données.

- **Tableaux de suivi** : nombre et statuts des documents des projets;
- **Etats d'avancement** : n de documents dans chaque étape de _workflow_ ;
- **Moyennes** de l'instance ;
- **Tableaux de bord** : détail des actions effectuées.

Pour chaque tableau, l'îcone <Icon icon={["fa", "rotate"]} /> **Réinitialiser les filtres de la recherche** permet de rafraichir et d'actualiser les données affichées, et l'icône <Icon icon={["fa", "download"]} /> **Export** permet d'exporter les tableaux au format CSV.

## Tableaux de suivi

### Suivi des projets

Ce tableau permet d’avoir une vue synthétique **du nombre et des statuts des documents** des projets.

:::info Filtres
Les données peuvent être filtrées par **projet** ou **dates**.
:::

### Suivi des documents publiés

:::warning En cours de rédaction
:::

### Suivi des documents rejetés

:::warning En cours de rédaction
:::

## Etats d'avancement

### Etats d'avancement des livraisons

Ce tableau permet d'obtenir le **nombre de documents dans chaque étape de _workflow_** par livraison.

:::info Filtres
Les données peuvent être filtrées par **bibliothèque**, **projet**, **lot**, **livraison**, **date de livraison**, **identifiant** des unités documentaires, ou **statut** des unités documentaires.
:::

:::warning Accès administrateur
Le filtre par bibliothèque n'est accessible qu'aux administrateurs.
:::

### Etats d'avancement par unités documentaires

Ce tableau permet d'optenir **le nombre de documents dans chaque étape de _workflow_** par unité documentaire.

:::info Filtres
Les données peuvent être filtrées par **bibliothèque**, **projet**, **lot**, **train**, **identifiant** des unités documentaires, **statut** des unités documentaires, ou **date** des étapes de _workflow_. Il est possible de sélectionner les colonnes des étapes de _workflow_ à afficher.
:::

:::warning Accès administrateur
Le filtre par bibliothèque n'est accessible qu'aux administrateurs.
:::

## Moyennes

### Moyennes générales

Ce tableau permet d'obtenir un suivi par projet contenant **le nombre total de documents**, **le nombre total de pages**, **le poids total des documents**, **le temps moyen de contrôle d’un document**, **le délai moyen de relivraison**, **la durée moyenne d’un _workflow_**.

:::info Filtres
Les données peuvent être filtrées par **projet**, **lot**, **livraison** ou **date**.
:::

### Moyennes par prestataires

Ce tableau permet d'obtenir un **suivi de l’activité des prestataires** par bibliothèque sur le nombre de lots livrés et le nombre de livraisons effectuées.

:::info Filtres
Les données peuvent être filtrées par **bibliothèque**, **prestataire** ou **date de livraison**.
:::

### Moyennes par étapes de _workflow_

Ce tableau permet d'obtenir **la durée moyenne de chaque étape de _workflow_**, par projet et _workflow_.

:::info Filtres
Les données peuvent être filtrées par **_workflow_**, **étape de _workflow_** ou **date**.
:::

### Moyennes par utilistauers

Ce tableau permet d'obtenir, pour un utilisateur, le **nombre d’unités documentaires contrôlées**, le
**nombre moyen de pages** par unité documentaire contrôlée et la **durée moyenne de contrôle**.

:::info Filtres
Les données peuvent être filtrées par **projet**, **lot**, **livraison** ou **date**.
:::

## Tableaux de bord

### Tableaux de bord par utilisateurs

Ce tableau permet d'obtenir, pour un utilisateur, le **détail des actions effectuées** (date de début et durée) sur les unités documentaires et les étapes de _workflow_.

:::info Filtres
Les données peuvent être filtrées par **projet**, **lot**, **profil**, **étape de _workflow_** ou **date**.
:::

### Tableaux de bord par profils

Ce tableau permet d'obtenir le **détail des actions effectuées** (date de début et durée) par **profil
d'utilisateur** sur les unités documentaires et les étapes de _workflow_.

:::info Filtres
Les données peuvent être filtrées par **projet**, **lot**, **profil**, **étape de _workflow_** ou par **date**.
:::

### Tableaux de bord par trains

Ce tableau permet d'obtenir le **détail des trains**.

:::info Filtres
Les données peuvent être filtrées par \*projet**, **train**, **statut du train**, **date d’envoi**, **date de réception** ou par **valeurs d’assurance\*\*.
:::

### Tableaux de bord par avancement des projets

Ce tableau permet d'obtenir le **détail d’avancement de tous les projets**.

:::info Filtres
Les données peuvent être filtrées par **projet** et par **date**.
:::
