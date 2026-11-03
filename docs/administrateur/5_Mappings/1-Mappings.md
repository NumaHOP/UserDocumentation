---
title: Généralités
sidebar_label: Généralités
sidebar_position: 1
description: Gestion des mappings
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "shuffle"]} /> Mappings: généralités

Les _mappings_ sont des **fichiers de configuration des correspondances** entre et les notices bibliographiques issues des systèmes d'information documentaire (SIGB) et de systèmes d'information archivistique (SIA) et les unités documentaires de l'application Numahop.

Ils sont employés au moment de l’**import de notices** dans l’application NumaHOP, et permettent leur conversion vers le standard interopérable **Dublin Core**.

Trois types de mappings sont proposés :
- Mapping des **notices MARC**, à partir de fichiers XML-MARC, JSON-MARC, ou ISO-2709 ;
- Mapping des **notices EAD**, à partir de fichiers XML-EAD ;
- Mapping des **notices CSV**, à partir de fichiers tabulés CSV.

## Edition des _mappings_

L'édition des _mappings_ s’effectue depuis le menu applicatif <Icon icon={["fa", "gear"]} /> **Administration**, puis dans l'encart consacré. L'utilisateur peut configurer autant de _mappings_ que nécessaire pour chaque bibliothèque.

Pour chaque type de _mapping_, il est possible de :
- <Icon icon={["fa", "square-plus"]} /> **Créer** un nouveau _mapping_ personnalisé ;
- <Icon icon={["fa", "upload"]} /> **Importer** un nouveau _mapping_ (uniquement pour les _mappings_ MARC et EAD) ;
- <Icon icon={["fa", "floppy-disk"]} /> **Sauvegarder** un _mapping_ en cours d'édition ;
- <Icon icon={["fa", "reply"]} /> **Annuler** les dernières modifications apportées à un _mapping_ ;
- <Icon icon={["fa", "clock-rotate-left"]} /> **Restaurer** la version antérieure d'un _mapping_ existant ;
- <Icon icon={["fa", "download"]} /> **Exporter** au format `json` un _mapping_ existant ;
- <Icon icon={["fa", "copy"]} /> **Dupliquer** un _mapping_ existant ;
- <Icon icon={["fa", "trash"]} /> **Supprimer** un _mapping_ existant.

:::warning Sauvegarde
Lorsqu’une règle est modifiée, la ligne apparaît en jaune tant que le _mapping_ n’a pas été enregistré. L'enregistrement du _mapping_ et des modifications s'effectue depuis l'icône <Icon icon={["fa", "floppy-disk"]} /> **Sauvegarder**, située en haut à droite de l'écran.
- Tant que le mapping n’a pas été enregistré, il est possible d'annuler les dernières modifications grâce au bouton <Icon icon={["fa", "reply"]} /> **Annuler** ;
- Lorsque le _mapping_ a été enregistré, il est possible de restaurer une version antérieure grâce à l'icône <Icon icon={["fa", "clock-rotate-left"]} /> **Restaurer**, en choisissant la version souhaitée (date et heure).
:::

### Créer un _mapping_

Après la selection du type de notices, la création d'un nouveau _mapping_ s’effectue depuis l'icône <Icon icon={["fa", "square-plus"]} /> **Créer** situé en haut à gauche de d'écran. L'utilisateur est invité à renseigner plusieurs champs.

- le **titre** du _mapping_ ;
- la **bibliothèque** à laquelle le _mapping_ est attribué ;
- l'**identifiant du parent** (uniquement pour les _mappings_ MARC et CSV).

L'utilisateur ajoute autant de **Règles de _mapping_** que nécessaire depuis le bouton <Icon icon={["fa", "square-plus"]} /> **Ajouter une règle** située en fin de tableau.


### Modifier un _mapping_

Après la selection du type de notice et du _mapping_ à modifier, l'utilisateur peut ajouter une nouvelle règle depuis l'icône <Icon icon={["fa", "square-plus"]} /> **Ajouter une règle** située en fin de tableau, ou éditer une règle existante. Chaque règle de mapping est éditable depuis les trois icônes situées à droite de la ligne.

- <Icon icon={["fa", "pen-to-square"]} /> **Modifier** une règle de _mapping_ ;
- <Icon icon={["fa", "copy"]} /> **Dupliquer** une règle de _mapping_ ;
- <Icon icon={["fa", "trash"]} /> **Supprimer** une règle du _mapping_.


### Importer un _mapping_

:::info
L'import de _mappings_ n'est possible que pour les types de notices MARC et EAD.
:::

Après la selection du type de notice, l'import s’effectue depuis l'icône <Icon icon={["fa", "upload"]} /> **Importer un mapping (JSON)**, situé en haut à gauche de l'écran. Il est possible d'**importer un nouveau _mapping_**, ou de **remplacer un _mapping_** existant préalablement selectionné.

L'import d'un _mapping_ ouvre une boîte de dialogue qui propose à l'utilisateur de selectionner un **Fichier à téléverser**.

:::warning Format des _mappings_
Les _mappings_ à importer doivent être dans un format `json` valide, et ne contenir que des propriétés préalablement renseignées dans les **Types de propriétés personnalisées**, paramétrables depuis le menu applicatif <Icon icon={["fa", "gear"]} /> **Administration**.

[**Configuration des propriétés personalisées**](/docs/administrateur/Configurations/proprietes) <Icon icon={["fa", "arrow-up-right-from-square"]} />.
:::

:::tip Communauté NumaHOP
Sollicitez les membres de la communauté NumaHOP pour le partage des _mappings_ au format `json` !
:::

### Exporter un _mapping_

:::info
L'export de _mappings_ n'est possible que pour les types de notices MARC et EAD.
:::

Après la selection du type de notice et du _mapping_, l'export s’effectue depuis l'icône  <Icon icon={["fa", "download"]} /> **Exporter (JSON)**, située en haut à droite de l'écran. Un fichier `json` est téléchargé.


## Edition des les règles d'un _mapping_

La création ou l'édition d'une règle de _mapping_ s'effectue depuis une boîte de dialogue accessible depuis la liste des règles.

- avec l'icône <Icon icon={["fa", "square-plus"]} /> **Ajouter une règle** en fin de tableau ;
- avec l'icône <Icon icon={["fa", "pen-to-square"]} /> **Modifier** sur la ligne de la règle.

| **Champ** | **Description** | **Valeur** | **Statut** |
| --- | --- | --- | --- |
| **Champs** | Propriétée Dublin Core, de l'Unité documentaire ou de la notice bibliographique à laquelle la règne doit s'appliquer.  |  | 🔴 Obligatoire |
| _Dublin Core_ | Propriété Dublin Core dans laquelle envoyer la métadonnée documentaire, à choisir parmi les types de propriétés par défaut, ou préalablement renségnées dans le sous-menu **Types de propriété personaliés**. | dc:title, dc:creator | 🔵 Facultatif |
| _Unité documentaire_ | Champ de l'unité documentaire NumaHOP dans laquelle envoyer la donnée, à choisir dans une liste fermée non éditable. | PGCN Id, Libellé, Type, Droits | 🔵 Facultatif |
| _Notice bibliographique_ | Champ de la notice bibliographique NumaHOP dans laquelle envoyer la donnée, à choisir dans une liste fermée non éditable. | Titre de la notice, SIGB, SUDOC, Calames, Document électronique | 🔵 Facultatif |
| _Règle par défaut_ | Indique si cette règle est appliquée par défaut. | Case à cocher | 🔴 Obligatoire |
| **Règle** | Formule `Groovy` de la règle à appliquer | `` | 🔴 Obligatoire |
| <Icon icon={["fa", "gear"]} /> _Initialisation de la règle_ | Description de la règle à appliquer (transformation, validation, etc.). | Capitaliser le titre | 🔵 Facultatif |
| **Condition d'application** | Condition spécifique pour déclencher l'application de la règle. | Si le champ est vide, Si la date > 2020 | 🔵 Facultatif |
| <Icon icon={["fa", "gear"]} /> _Initialisation de la condition_ | Description de la règle à appliquer (transformation, validation, etc.). | Capitaliser le titre | 🔵 Facultatif |

L’ordre des règles est celle de leur prise en compte lors de l'import dans NumaHOP, et peut être modifié à l’aide des flèches <Icon icon={["fa", "angle-down"]} /> et <Icon icon={["fa", "angle-up"]} /> situées à gauche de chaque règle de _mapping_.


### Syntaxe des expressions

Le langage utilisé pour les expressions de mapping et les conditions est
basé sur le langage Groovy (dérivé du Java). Attention, Groovy est
sensible à la casse.

#### Syntaxe de base

#### Collections

Lorsque des champs sont répétables, ils doivent être traités comme
collection d’éléments. Le cas échéant, seule la première occurrence sera
traitée.

#### Fonctions standard

Les fonctions standard Groovy peuvent être utilisées.


### Champs à valeur spécifique
   Champ de l’unité documentaire | Valeurs                          | Description                                      |
 |--------------------------------|----------------------------------|--------------------------------------------------|
 | Droits                          | `TO_CHECK`                       | Droits à vérifier                                |
 |                                 | `FREE`                           | Libre de droits                                  |
 |                                 | `RESTRICTED`                     | Sous droits                                      |
 |                                 | `RESTRICTED_WITH_AUTHORIZATION`  | Sous droits avec l’accord de l’auteur            |
 | Archivable                      | `TRUE`                           |                                                  |
 |                                 | `FALSE`                          |                                                  |
 | Type de constat d’état          | `MONO_PAGE`                      | Constat d’état mono-feuillet                     |
 |                                 | `MULTI_PAGE`                     | Constat d’état multi-feuillets                   |

---

### Syntaxe des expressions

#### Syntaxe de base
 | Syntaxe | Description                                                                                     | Exemples                                                                 |
 |---------|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
 | `" "`   | Chaînes de caractères                                                                           | R / C `1 "texte"` ou `'texte'`                                          |
 | `+`     | Concaténation de plusieurs chaînes de caractères ou de champs / sous-champs avec des chaînes de caractères | R / C `"a " + "b"`<br />`"source, " + \930$a`<br />`"source, $\930$a"` |
 | `==`    | "égal"                                                                                           | C `\607$2 == 'rameau'`                                                  |
 | `>`     | "supérieur"                                                                                     |                                                                          |
 | `<`     | "inférieur"                                                                                     |                                                                          |
 | `>=`    | "supérieur ou égal"                                                                             |                                                                          |
 | `<=`    | "inférieur ou égal"                                                                             |                                                                          |
 | `&&`    | ET                                                                                              | C `\200 && \210`                                                        |
 | `\|\|`  | OU                                                                                              | `\200 \|\| \210`                                                       |
 | `!`     | NON (négation)                                                                                 | `\607$2 != 'rameau'`<br />`!\410`                                        |

---

#### Collections
 | Syntaxe                          | Description                                                                                     | Exemples                                                                 |
 |----------------------------------|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
 | `[ , ]`                          | Collection d’éléments                                                                          | R / C `[\600$x, \600$y, \600$z]`                                        |
 | `grep().join('chaîne')`          | Parcours des éléments d'une collection et concaténation des éléments d'une collection dans une chaîne de caractères | R `[\600$x, \600$y, \600$z].grep().join(' - ')`                        |
 | `in`                             | Recherche dans une collection                                                                  | C `\702$4 in ['160', '610', '650'] : 704$4 = '160' ou '610' ou '650'` |

---

#### Fonctions standard
 | Syntaxe                          | Description                                                                                     | Exemple                                                                 |
 |----------------------------------|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
 | `capitalize()` / `uncapitalize()` | Majuscule / minuscule le 1er caractère d'une chaîne.                                           | R `"texte".capitalize()`<br />`"Texte".uncapitalize()`                   |
 | `toUpperCase()` / `toLowerCase()` | Majuscules / minuscules toute la chaîne de caractères.                                         | R `"texte".toUpperCase()`<br />`"TeXTe".toLowerCase()`                   |
 | `padLeft(nbDeCaractères)` / `padRight(nbDeCaractères)` | Ajoute des blancs au début ou à la fin de la chaîne de caractère. | R `"texte".padLeft(5)`<br />`"texte".padRight(5)`                        |
 | `trim()`                         | Supprime les espaces au début et à la fin d'une chaîne de caractères.                          | R / C `"     texte     ".trim()`                                |
 | `substring(posDébut, posFin)`    | Sous-chaîne de la chaîne de caractère                                                          | R / C `"texte".substring(2,4) : "xt"`                           |
 | `replaceAll(recherche, remplacement)` | Remplace une partie d'une chaîne de caractères par une autre.                          | R `\035$a.replaceAll('^ppn', '')`                               |
 | `length()`                       | Longueur de la chaîne de caractères                                                            | C `"texte".length()`<br />`\100$a.length()`                        |
 | `startsWith(prefixe)` / `endsWith(suffixe)` | Vrai ou faux selon si la chaîne de caractère commence / se termine par le préfixe / suffixe mentionné | C `\035$a.startsWith('ppn')`                                   |
## Export des notices depuis les systèmes d'information documentaire

:::tip Export EAD
Exporter des instruments de recherche et des notices au format XML/EAD
- depuis le SIA CALAMES <Icon icon={["fa", "arrow-up-right-from-square"]} /> ;
- depuis le SIA LIGEO <Icon icon={["fa", "arrow-up-right-from-square"]} />.
:::

:::tip Export MARC
Exporter des notices au format MARC
- depuis le SIGB ALMA <Icon icon={["fa", "arrow-up-right-from-square"]} />.
:::
