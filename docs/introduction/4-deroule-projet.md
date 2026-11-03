---
title: Déroulé d'un projet
sidebar_label: Déroulé d'un projet
sidebar_position: 4
description: Exemples fonctionnels de projets types
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "diagram-project"]} /> Déroulé d'un projet

![Déroulé des projets NumaHOP](/img/numahop-objets.png)

On distingue deux principaux types de projets.

- les **projets standards**, qui couvrent l’intégralité du cycle de vie des documents, de la sélection des documents physiques et de leur signalement, jusqu’à la diffusion et à l'archivage des reproductions numériques ;
- les **reprises de passif**, qui visent à intégrer des documents déjà numérisés dans NumaHOP, sans passer par une phase de numérisation physique, pour permettre une structuration, un contrôle, une diffusion et le cas échant un archivage, pour en faire un ensemble cohérent.

:::warning Ordre des interventions
Le déroulé de ces projets types détaillé ci-dessous reposent d'abord sur le parametrage des configurations de NumaHOP, puis sur l'enchaînement des étapes d'un _worflow_.

- les étapes de configuration peuvent être **effectuées dans n'importe quel ordre**, à condition que le _workflow_ n’ait pas été démarré au niveau d'un lot ;
- le démarrage d'un _worflow_ impose le **respect strict des étapes successives** qu'il définit.
:::

:::danger Différences fondamentales
La différence fondamentale entre les projets standards et les projets de reprise de passif concerne les unités documentaires, et se configure dans la selection du type de lot (**Physique** ou **Numérique**).

Par ailleurs, dans le cas de projets standards, **les unités documentaires sont importées et rattachées à un lot**, alors que dans le cas de reprises de passif, **les unités documentaires sont générées automatiquement à la livraison**, à partir de lots vides.
  :::

## Projets standards

### Configurations préalables

Les configurations préalables doivent être réalisées par un **administrateur**. Elles sont identiques à celles d'un projet de reprise de passif.

1. Configurations d'un _workflow_ dédié : [_Workflows_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
2. Création des **utilisateurs** impliqués dans le projet : [_Gestion des Utilisateurs_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
3. Création des **groupes** de _workflow_ réunissants les différents acteurs du projet : [_Gestion des Groupes_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
4. Configuration des **contrôles** : [_Configuration des contrôles_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().

:::warning Précaution
L'administrateur doit s'assurer que l'affectation de l'utilisateur à un groupe de _workflow_ soit cohérente avec son profil d'utilisateur [_Gestion des Profils_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().
:::


### Parametrages des projets et lots

Les parametrages des projets et lots peuvent être réalisés aussi bien par un **administrateurs** que par un **utilisateur**.

1. Création du **projet** de numérisation : [_Projets_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;

2. Création du **lot** de numérisation: [_Lots_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().
  
:::danger Type de lot
Le type de lot d'un projet standard sera **_Physique_**.
:::

Le rattachement du lot au projet de numérisation peut se faire soit au moment de la création du lot, soit _a posteriori_ si le projet est créé après le lot. Il est possible de redéfinir au niveau du lot les informations qui n'ont pas été ou qui ne doivent pas être hérités du projet, et nécessaires au bon déroulement du lot en question.

:::info
Si le projet le permet, il est préférable de créer le projet avant le lot, pour garantir l'héritage des informations renseignées dans le projet au niveau du lot, parmi lesquelles ont trouve les mentions du prestataire de numérisation, du _workflow_, du serveur de livraison, des contrôles, et des configurations de diffusion et d'archivage.
:::

### Import des unités documentaires

1. Import des notices et création des unités documentaires : [_Imports_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
2. Association des unités documentaires aux lots le cas échéant [_Unités documentaires_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;

:::tip
Dans la mesure du possible, il est conseillé d'importer ou de créer les unités documentaires après la création des lots et des projets, pour faciliter le rattachement des unités documentaires aux dits projets et lots au moment de l'import, et ainsi éviter une étape de rattachement manuelle.
:::

### Etapes du workflow

Après le parametrage des configurations, la création du projet et du lot, puis de l'import des unités documentaires, le **workflow doit être démarré depuis le lot**.

:::danger Attention
Tant que le workflow d'un lot n'est pas démaré, il sera impossible de lui attribuer une livraison.
:::

| Étapes                                                         | Type           | Description                                                                                                                                                                | Validation de l'étape                                                           |
| ------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Génération du bordereau**                                   | 🔵 Facultatif  | À définir.                                                                                                                                                                 |                                                                                 |
| **Validation des constats d'état**                            | 🔵 Facultatif  | Réalisation du constat d'état initial (hors workflow) et validation de ce constat d'état.                                                                                  | <Icon icon={["fa", "square-check"]} /> en haut à droite dans le constat d'état. |
| **Validation bordereau et constat d'état par le prestataire** | 🔵 Facultatif  | Réalisation d'un constat d'état par le prestataire à réception du document et validation de ce constat d'état.                                                             | <Icon icon={["fa", "square-check"]} /> en haut à droite dans le constat d'état. |
| **Réalisation d'un constat d'état avant numérisation**        | 🔵 Facultatif  | Réalisation d'un constat d'état par le prestataire avant la numérisation du document et validation de ce constat d'état.                                                   | <Icon icon={["fa", "square-check"]} /> en haut à droite dans le constat d'état. |
| **En attente de numérisation**                                | ⚪ Transitoire | Étape non gérée par NumaHOP.                                                                                                                                               |                                                                                 |
| **Réalisation d'un constat d'état après numérisation**        | 🔵 Facultatif  | Réalisation d'un constat d'état par le prestataire suite à la numérisation du document et validation de ce constat d'état.                                                 | <Icon icon={["fa", "square-check"]} /> en haut à droite dans le constat d'état. |
| **Livraison des documents numérisés**                         | 🔴 Obligatoire | Livraison des documents numérisés sur la plateforme, suite au dépôt des fichiers sur le FTP.                                                                               | Création d'une livraison et lancement de la livraison.                          |
| **Contrôles automatiques en cours**                           | ⚪ Automatique | Réalisation des contrôles automatiques et génération des fichiers dérivés. Récupération de la table des matières et de l'OCR si paramétré.                                 |                                                                                 |
| **Contrôle qualité en cours**                                 | 🔴 Obligatoire | Contrôle visuel des documents numérisés.                                                                                                                                   | Réalisation du contrôle qualité.                                                |
| **Pré-rejet du document**                                     | 🔵 Facultatif  | Si l'étape est activée, le premier rejet du document générera un pré-rejet à confirmer dans l'étape « Validation du rejet ».                                               | Premier rejet du document lors du contrôle visuel.                              |
| **Pré-validation du document**                                | 🔵 Facultatif  | Si l'étape est activée, la première validation du document générera une pré-validation à confirmer dans l'étape « Validation du document ».                                | Première validation du document lors du contrôle visuel.                        |
| **Validation du rejet**                                       | 🔵 Facultatif  | Validation du rejet si l'étape « Pré-rejet du document » est activée.                                                                                                      | Rejet définitif du document.                                                    |
| **Validation du document**                                    | 🔴 Obligatoire | Validation ou rejet du document lors du contrôle qualité. En cas de rejet, envoi automatique du rapport de contrôle au prestataire, puis fin du workflow pour relivraison. | Validation ou rejet du document lors du contrôle qualité.                       |
| **Validation de la notice du document**                       | 🔴 Obligatoire | Validation de la notice de l'unité documentaire.                                                                                                                           | <Icon icon={["fa", "square-check"]} /> en haut à droite dans la notice.         |
| **Rapport de contrôles pour le prestataire**                  | ⚪ Automatique | Envoi du rapport de contrôle au prestataire.                                                                                                                               |                                                                                 |
| **Archivage du document**                                     | 🔵 Facultatif  | Envoi du document validé au CINES pour archivage. Tâche quotidienne automatisée. En cas d'erreur, l'utilisateur peut envoyer manuellement.                                 |                                                                                 |
| **Diffusion du document**                                     | 🔵 Facultatif  | Diffusion du document validé à Internet Archive. Tâche quotidienne automatisée. En cas d'erreur, l'utilisateur peut envoyer manuellement.                                  |                                                                                 |

## Projet de reprise de passif

### Configurations préalables

Les configurations préalables doivent être réalisées par un **administrateur**. Elles sont identiques à celles d'un projet standard.

1. Configurations d'un _workflow_ dédié : [_Workflows_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
2. Création des **utilisateurs** impliqués dans le projet : [_Gestion des Utilisateurs_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
3. Création des **groupes** de _workflow_ réunissants les différents acteurs du projet : [_Gestion des Groupes_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
4. Configuration des **contrôles** : [_Configuration des contrôles_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().

:::warning Précaution
L'administrateur doit s'assurer que l'affcetation de l'utilisateur à un groupe de _workflow_ soit cohérente avec sont profil d'utilisateur [_Gestion des Profils_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().
:::

### Parametrages des projets et lots

Les parametrages des projets et lots peuvent être réalisés aussi bien par un **administrateur** que par un **utilisateur**.

1. Création du **projet** de numérisation : [_Projets_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
2. Création du **lot** de numérisation: [_Lots_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]().

:::danger Type de lot
Le type de lot d'un projet standard sera **_Numérique_**.
:::

Le rattachement du lot au projet de numérisation peut se faire soit au moment de la création du lot, soit _a posteriori_ si le projet est créé après le lot. Il est possible de redéfinir au niveau du lot les informations qui n'ont pas été ou qui ne doivent pas être hérités du projet, et nécessaires au bon déroulement du lot en question.

:::info
Si le projet le permet, il est préférable de créer le projet avant le lot, pour garantir l'héritage des informations renseignées dans le projet au niveau du lot, parmi lesquelles ont trouve les mentions du prestataire de numérisation, du _workflow_, du serveur de livraison, des contrôles, et des configuration de diffusion et d'archivage.
:::

### Livraison des documents numériques

1. Création d'une **livraison** rattachée à un lot vide : [_Livraisons_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;
2. **Livraison** des documents numériques : [_Livraison_ <Icon icon={["fa", "arrow-up-right-from-square"]} />]() ;

:::danger Création automatique des unités documentaires
Pour un projet de reprise de passif, on ne rattache pas d'unités documentaire aux lots. La première étape d'un projet de reprise de passif est donc la livraison des documents, qui entraine la création des unités documentaires.
:::

:::warning Demarrage du workflow après livraison
Etant donné qu'aucun document n'est présent dans le lot, il n'est pas possible de démarrer le _workflow_ depuis le lot tant que la livraison n'aura pas été effectuée.
:::

### Etapes du _workflow_

Une fois la livraison effectuée, des configurations, du projet et du lots, et de l'import des unités documentaires, le **workflow doit être démarrer depuis le lot**.

:::danger
Tant que le workflow d'un lot n'est pas démaré, il sera impossible de lui attribuer une livraison.
:::

| Étape                                        | Type           | Description                                                                                                                                                                | Validation                                                              |
| -------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Contrôle qualité en cours**                | 🔴 Obligatoire | Contrôle visuel des documents numérisés.                                                                                                                                   | Réalisation du contrôle qualité.                                        |
| **Pré-rejet du document**                    | 🔵 Facultatif  | Si l'étape est activée, le premier rejet du document génère un pré-rejet à confirmer dans l'étape « Validation du rejet ».                                                 | Premier rejet du document lors du contrôle visuel.                      |
| **Pré-validation du document**               | 🔵 Facultatif  | Si l'étape est activée, la première validation du document génère une pré-validation à confirmer dans l'étape « Validation du document ».                                  | Première validation du document lors du contrôle visuel.                |
| **Validation du rejet**                      | 🔵 Facultatif  | Validation du rejet si l'étape « Pré-rejet du document » est activée. Envoi automatique du rapport de contrôle au prestataire, puis fin du workflow pour relivraison.      | Rejet définitif du document.                                            |
| **Validation du document**                   | 🔴 Obligatoire | Validation ou rejet du document lors du contrôle qualité. En cas de rejet, envoi automatique du rapport de contrôle au prestataire, puis fin du workflow pour relivraison. | Validation ou rejet du document lors du contrôle qualité.               |
| **Validation de la notice du document**      | 🔴 Obligatoire | Validation de la notice de l'unité documentaire.                                                                                                                           | <Icon icon={["fa", "square-check"]} /> en haut à droite dans la notice. |
| **Rapport de contrôles pour le prestataire** | ⚪ Automatique | Envoi du rapport de contrôle au prestataire.                                                                                                                               |                                                                         |
| **Archivage du document**                    | 🔵 Facultatif  | Envoi du document validé au CINES pour archivage. Tâche quotidienne automatisée. En cas d'erreur, l'utilisateur peut envoyer manuellement.                                 |                                                                         |
| **Diffusion du document**                    | 🔵 Facultatif  | Diffusion du document validé à Internet Archive. Tâche quotidienne automatisée. En cas d'erreur, l'utilisateur peut envoyer manuellement.                                  |                                                                         |
