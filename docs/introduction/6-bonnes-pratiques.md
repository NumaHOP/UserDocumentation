---
title: Bonnes pratiques
sidebar_label: Bonnes pratiques
sidebar_position: 6
description: Recommandations pour optimiser les performances et la qualité des traitements dans NumaHOP
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "thumbs-up"]} /> Bonnes pratiques


Le **dimensionnement** d’une application comme NumaHOP dépend de multiples facteurs interconnectés (nombre d’utilisateurs actifs, ressources du serveur, volume et taille des données, niveau de concurrence des traitements). Cette complexité rend nécessaire l’adoption de **bonnes pratiques** pour garantir la stabilité, la performance et la qualité des processus.

NumaHOP repose sur un **cœur fonctionnel** centré sur les processus de **livraison et de contrôle**. L'analyse des données traitées en production a permis d’identifier des règles optimales pour maintenir un équilibre entre qualité et performance.

### Dimensionnement des lots d’Unités Documentaires (UD)

Le nombre d’**UD par lot**, leur **nombre de pages** et le **poids des fichiers masters** associés sont les leviers principaux pour optimiser les traitements.

| **Poids moyen par UD**  | **Nombre maximal d’UD par lot** | **Cas d’usage typique**          |
|-------------------------|----------------------------------|-----------------------------------|
| ≤ 50 Mo                 | 500                              | Documents légers (PDF simples)    |
| 50 Mo – 100 Mo          | 300                              | Documents standards               |
| 100 Mo – 500 Mo         | 150                              | Documents riches (images HD)      |
| 500 Mo – 1 Go           | 50                               | Fichiers volumineux               |
| 1 Go – 5 Go             | 20                               | Archives ou dossiers complets    |
| 5 Go – 10 Go            | 10                               | Fichiers très lourds              |
| > 10 Go                 | 5                                | Cas exceptionnels                 |


### Gestion des ressources serveur

Les performances dépendent aussi de **l’activité globale du serveur**, en évitant de lancer des livraisons **simultanées** si le serveur est déjà sollicité par d’autres traitements. Par ailleurs, il est préférable de coordonner les plannings de livraison avec les autres utilisateurs pour répartir la charge.

### Bonnes pratiques

Pour garantir des **performances optimales** et une **qualité de traitement constante**, il convient de :
- **homogénéiser les lots** en regroupant les unités documentaires par tranches de poids similaires ;
- **planifier les livraisons** en échelonnant les traitements et éviter les pics de charge ;
- **surveiller les exceptions**, en particulier si une unités documentaires bloquée nécessite l’intervention du **prestataire de maintenance**.