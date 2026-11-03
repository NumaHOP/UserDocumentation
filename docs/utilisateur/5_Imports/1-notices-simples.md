---
title: Import de notices simples
sidebar_label: Import de notices simples
sidebar_position: 1
description: Import de notices simples
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "download"]} /> Import de notices simples

## Import de notice bibliographique à partir d’un fichier MARC XML

#### Mapping d'import dans NumaHOP

Pour configurer le mapping qui servira aux imports, il faut sélectionner
dans le menu de gauche l’icone Administration <img
src="https://www.numahop.fr/wp-content/uploads/2022/10/administration-NumaHOP.png"
class="alignnone wp-image-138" decoding="async" width="35"
height="37" />

Puis sélectionner dans l’encadrement en bas à droite de l’écran :
Mapping des notices MARC.

<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-1-300x80.png"
class="alignnone size-medium wp-image-403" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-1-300x80.png 300w, https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-1-768x204.png 768w, https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-1.png 787w"
sizes="(max-width: 300px) 100vw, 300px" width="300" height="80" />

Cliquez sur le +  pour ajouter un nouveau Mapping. <img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-2.png"
class="alignnone wp-image-315" loading="lazy" decoding="async"
width="143" height="27" />

Une fenêtre comme celle-ci-dessous va s’afficher

Donner un nom au mapping et associé le à une bibliothèque.

Puis vous pouvez cliquer sur le bouton « Ajouter une règle » en bas à
droite. Le pop-up ci-dessous s’affiche :

 

 

 

Exemple tronqué de mapping MARC ci-contre

Correspondance entre le Dublin Core et le format MARC du SIGB.

 

 

 

 

 

 

 

 

Exemple d’un fichier MARC XML : 1 enregistrement

#### Import du fichier MARC XML dans NumaHOP

Sélectionner dans le menu à gauche de l’écran  l’icône Bibliothèque :
<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/documents-numaHOP.png"
class="alignnone wp-image-134" loading="lazy" decoding="async"
width="24" height="29" />

Un menu apparait :  sélectionner « imports »

<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-6-216x300.png"
class="alignnone size-medium wp-image-408" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-6-216x300.png 216w, https://www.numahop.fr/wp-content/uploads/2022/10/import-notices-marc-6.png 225w"
sizes="(max-width: 216px) 100vw, 216px" width="216" height="300" />

Le formulaire des imports s’affiche sur la partie centrale de l’écran  :

Zone paramétrage :

Type d’import : simple

Format de fichier : MARC XML

Mapping MARC : nom de votre fichier MARC XML à importer

Zone Import :

Projet : nom du projet

Si la vérification des unités documentaires ou la recherche de doublons
a été activé, Numahop effectue alors  
un pré-import. A la fin du pré-import, l’utilisateur peut visualiser les
erreurs éventuelles, les doublons  
trouvés. L’import est au statut Validation utilisateur, à ce stade les
unités documentaires ne sont pas encore  
importées.

Visualisation du pré import :

Une fois la vérification faite, on peut cliquer sur Importer :

Dans la liste des notices importées, pour chaque notice, il y a un
raccourci pour accéder à l’unité documentaire créée automatiquement lors
de l’import.


---
title: Import de notice à partir d’un fichier CSV
sidebar_label: Import de notice à partir d’un fichier CSV
sidebar_position: 12
---

# Import de notice à partir d’un fichier CSV

### Mapping d'import csv dans NumaHOP

Pour configurer le mapping qui servira aux imports, il faut sélectionner
dans le menu de gauche l’icone « administrer »<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/administration-NumaHOP.png"
class="alignnone wp-image-138" decoding="async" width="32"
height="33" />

Puis sélectionner dans l’encadrement en bas à droite de l’écran :
Mapping des notices csv

Cliquer sur le +  pour ajouter un nouveau Mapping :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-2.png"
class="alignnone wp-image-315 size-full" loading="lazy" decoding="async"
width="257" height="49" />](https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-2.png)

Une fenêtre comme celle-ci-contre va s’afficher

Donner un nom au mapping et associé le à une bibliothèque.

Puis vous pouvez cliquer sur le bouton « Ajouter une règle » en bas à
droite. Le pop-up ci-dessous s’affiche :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-4-300x130.png"
class="aligncenter wp-image-317 size-medium" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-4-300x130.png 300w, https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-4-768x334.png 768w, https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-4.png 905w"
sizes="(max-width: 300px) 100vw, 300px" width="300" height="130" />](https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-4.png)

Exemple de mapping csv :

Certaines données de l’unité documentaire contiennent des valeurs
spécifiques à renseigner dans les règles  
de mapping (texte à indiquer en tant que chaîne de caractères),
notamment les droits qui est une données  
obligatoire :

|-----------------------|-----------------------------------|-----------------------|
| Champs de l’unité     | Valeurs                           | Description           |
| documentaire          |                                   |                       |
|-----------------------|-----------------------------------|-----------------------|
| Droits                | TO\_CHECK                         | Droits à vérifier     |
|                       | FREE                              | Libre de droits       |
|                       | RESTRICTED                        | Sous droits           |
|                       | RESTRICTED\_WITH\_AUTHORIZATION   | Sous droits avec      |
|                       |                                   | l’accord de l’auteur  |
|-----------------------|-----------------------------------|-----------------------|
| Archivable            | TRUE                              |                       |
|                       | FALSE                             |                       |
|-----------------------|-----------------------------------|-----------------------|
| Diffusable            | TRUE                              |                       |
|                       | FALSE                             |                       |
|-----------------------|-----------------------------------|-----------------------|
| Type de constat       | MONO\_PAGE                        | Constat d’état        |
| d’état                | MULTI\_PAGE                       | mono-feuillet         |
|                       |                                   | Constat d’état        |
|                       |                                   | multi-feuillets       |
|-----------------------|-----------------------------------|-----------------------|

Champs de l’unité documentaire

Valeurs

Description

Droits

TO\_CHECK  
FREE  
RESTRICTED  
RESTRICTED\_WITH\_AUTHORIZATION  
  

Droits à vérifier  
Libre de droits  
Sous droits  
Sous droits avec l’accord de l’auteur

Archivable

TRUE  
FALSE

 

Diffusable

TRUE  
FALSE

 

Type de constat d’état

MONO\_PAGE  
MULTI\_PAGE

Constat d’état mono-feuillet  
Constat d’état multi-feuillets

### Construction du fichier csv

Il est conseillé de faire ce fichier sous Calc d’OpenOffice et
d’enregistrer le fichier sous l’extension .CSV

Pour les propriétés Dublin Core définis dans Types de propriété
personnalisés (dans l’administration  
NumaHOP), le nom de la colonne doit être
« dc:nom\_de\_la\_propriete\_dc », par exemple dc:title, dc:coverage,  
dc:publisher etc.  
Pour les propriétés hors Dublin Core, comme le PGCN Id, le radical, le
titre (notice et unité documentaire), les  
droits (par ailleurs ces propriétés sont obligatoire), elles doivent
être spécifiées dans le mapping d’import.

A l’enregistrement, il faut mettre comme séparateur de données une
virgule et mettre les données entre « »

### Import du fichier csv dans NumaHOP

Sélectionner dans le menu à gauche de l’écran  l’icône  Bibliothèque
<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/documents-numaHOP.png"
class="alignnone wp-image-134" loading="lazy" decoding="async"
width="27" height="32" />. Un menu apparaît, sélectionner « imports » :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-7-216x300.png"
class="alignleft wp-image-320 size-medium" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-7-216x300.png 216w, https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-7.png 225w"
sizes="(max-width: 216px) 100vw, 216px" width="216" height="300" />](https://www.numahop.fr/wp-content/uploads/2022/10/import-csv-7.png)

Le formulaire des imports s’affiche sur la partie centrale de l’écran :

Zone paramétrage :

Type d’import : simple

Format de fichier : csv

Mapping CSV : nom de votre fichier csv à importer

Zone Import :

Projet : nom du projet

Si la vérification des unités documentaires ou la recherche de doublons
a été activé, NumaHOP effectue alors  
un pré-import. A la fin du pré-import, l’utilisateur peut visualiser les
erreurs éventuelles, les doublons  
trouvés. L’import est au statut Validation utilisateur, à ce stade es
unités documentaires ne sont pas encore  
importées

Le pré import est fait, on peut visualiser les erreurs :

## Import CSV

### Construction du fichier CSV

- **Logiciel recommandé** : Utilisez **Calc d’OpenOffice** pour créer le fichier et enregistrez-le avec l’extension **.CSV**.
- **Format des colonnes** :
  - Pour les propriétés **Dublin Core** (exemple : `dc:title`, `dc:coverage`, `dc:publisher`), le nom de la colonne doit être `dc:nom_de_la_propriete_dc`.
  - Pour les propriétés **hors Dublin Core** (comme le PGCN Id, le radical, le titre, les droits), elles doivent être spécifiées dans le mapping d’import.
- **Paramètres d’enregistrement** :
  - Séparateur de données : **virgule (,)**
  - Encadrez les données avec des **guillemets ("")**.

---

### Import du fichier CSV dans NumaHOP

1. **Accéder à la section d’import**
   - Sélectionnez l’icône correspondante dans le menu de gauche.
   - Choisissez **Imports** dans le menu qui apparaît.

2. **Configurer le formulaire d’import**
   - **Zone Paramétrage** :
     - **Type d’import** : Simple
     - **Format de fichier** : CSV
     - **Mapping CSV** : Sélectionnez le nom de votre fichier CSV à importer
   - **Zone Import** :
     - **Projet** : Indiquez le nom du projet

3. **Pré-import et validation**
   - Si la vérification des unités documentaires ou la recherche de doublons est activée, NumaHOP effectue un **pré-import**.
   - À la fin du pré-import, l’utilisateur peut visualiser les **erreurs éventuelles** et les **doublons** trouvés.
   - L’import passe au statut **Validation utilisateur** : les unités documentaires ne sont pas encore importées.

---

### Visualisation des erreurs
- Une fois le pré-import terminé, les erreurs éventuelles peuvent être visualisées.
