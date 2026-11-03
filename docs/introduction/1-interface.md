---
title: Interface de NumaHOP
sidebar_label: Interface de NumaHOP
sidebar_position: 1
description: Aperçu d'ensemble du logiciel
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "display"]} /> Interface de NumaHOP

## Pré-requis techniques

NumaHOP est certifié pour fonctionner sur les navigateurs Web suivants :

- **Google Chrome**, version 50 et supérieures ;
- **Mozilla Firefox**, version 47 et supérieures ;

:::warning
Le fonctionnement sur **Microsoft Edge** ou **Internet Explorer** n’est pas garanti, du fait du mauvais affichage des langues sinistroverses sur ces navigateurs et de la non prise en charge de la visionneuse _Mirador_.
:::

## Ergonomie générale de l'application

### Boutons d'actions

Dans toutes les interfaces, les **différentes actions possibles sont associées à des icônes et une info-bulle**. Ils sont cohérents sur l'ensemble de la plateforme. D’autres icônes de fonctionnalités peuvent exister en fonction des modules sollicités. Ces nouveaux boutons d'action sont généralement situés en haut à droite de la fenêtre dans les interfaces, en haut à droite de la barre d’en-tête des tables, ou à la suite de la donnée qu'ils complètent.

- <Icon icon={["fa", "square-plus"]} /> **Ajouter** ;
- <Icon icon={["fa", "trash"]} /> **Supprimer** ;
- <Icon icon={["fa", "square-xmark"]} /> **Supprimer** ;
- <Icon icon={["fa", "pen-to-square"]} /> **Modifier** ;
- <Icon icon={["fa", "reply"]} /> **Annuler** ;
- <Icon icon={["fa", "floppy-disk"]} /> **Sauvegarder** ;
- <Icon icon={["fa", "square-poll-horizontal"]} /> **Détails** ;
- <Icon icon={["fa", "up-right-from-square"]} /> **Ouvrir** ;
- <Icon icon={["fa", "eye"]} /> **Contrôler** ;
- <Icon icon={["fa", "download"]} /> **Télécharger** ;
- <Icon icon={["fa", "share"]} /> **Télécharger** ;
- <Icon icon={["fa", "bars"]} /> **Autres actions** ;
- <Icon icon={["fa", "filter"]} /> **Filtrer** ;
- <Icon icon={["fa", "rotate"]} /> **Réinitialiser** ;
- <Icon icon={["fa", "arrows-up-down-left-right"]} /> **Déplacer** ;
- <Icon icon={["fa", "gear"]} /> **Parametrer** ;
- <Icon icon={["fa", "clock-rotate-left"]} /> **Restaurer**.

### Menus applicatifs

Le **menu lateral** permet d’accéder aux libellés complets des menus et sous-menus. La liste des menus disponibles est fonction des habilitations de l’utilisateur connecté.

| Menus / Modules                                          | Description                                                          | _Voir aussi_ |
| :------------------------------------------------------- | -------------------------------------------------------------------- | -----------: |
| <Icon icon={["fa", "lines-leaning"]} /> **Documents**             | Gestion des Unités documentaires, Notices, Constats d'état, Imports. |              |
| <Icon icon={["fa", "magnifying-glass"]} /> **Recherche** | Recherche avancée dans l'instance NumaHOP                                    |              |
| <Icon icon={["fa", "user"]} /> **Utilisateurs**          | Gestion des Bibliothèques, Profils, Utilisateurs                     |              |
| <Icon icon={["fa", "book"]} /> **Projets**               | Gestion des Projets, Lots, Trains, Livraisons                        |              |
| <Icon icon={["fa", "square-check"]} /> **Contrôles**     | Contrôle des documents numériques                                    |              |
| <Icon icon={["fa", "chart-pie"]} /> **Statistiques**     | Statistiques                                                         |              |
| <Icon icon={["fa", "gear"]} /> **Administration**        | Parametrage des configurations                                       |              |
| <Icon icon={["fa", "circle-question"]} /> **Aide**       | _Module inactif_                                                     |              |

### Informations NumaHOP

NumaHOP propose sur l’ensemble de ses interfaces une colonne **Informations** dépliable sur la droite de chaque interface. Elle correspond à la zone de communication entre NumaHOP et l'utilisateur : tous les messages émis par la plateforme s’y afficheront.

La gestion des messages applicatifs a été conçue pour interpeller immédiatement et visuellement l'utilisateur avec une apparition d'un message associé à un code couleur par niveau d’alerte, et un positionnement différent dans la colonne d’information.

:::tip Vert : action validée
Le message s’affiche en bas de la colonne d’information et disparaît au bout de quelques secondes, soit toute action effectuée par l'utilisateur et enregistrée par NumaHOP.
:::

:::info Bleu : informatif
Le message s’affiche en haut de la colonne d’information et reste toujours visible.
:::

:::caution Jaune : action non validée et non bloquante
Le message s’affiche en haut de la colonne d’information et reste toujours visible : il s'agit d'une erreur mineure détectée.
:::

:::danger Rouge : action non validée et bloquante
Le message s’affiche en haut de la colonne d’information et reste toujours visible pour informer l'utilisateur du problème rencontré ne permettant pas d’effectuer
l’action en cours : il s'agit d'une erreur bloquante.
:::
