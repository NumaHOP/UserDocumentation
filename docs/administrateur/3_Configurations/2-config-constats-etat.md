---
title: Constats d'état
sidebar_label: Constats d'état
sidebar_position: 2
description: Configuration des constats d'état
---

import Icon from '@site/src/components/Icon';

## <Icon icon={["fa", "file-lines"]} />Configuration des constats d'état

### Le template de constat d'état dans NumaHOP

Paramétrer la grille de constat d’état pour la simplifier ou l’adapter à
ses besoins est possible. Cependant, il est important de noter que
certaines modifications impacteront toutes les instances NumaHOP
partageant un même serveur.

#### Ouvrir la configuration du template

Dans le menu <Icon icon={["fa", "gear"]} />**Administration**, puis dans l’encart
**Configuration** cliquer sur **Constats d’état**  :

La liste des propriétés apparaît. Les différentes propriétés (en minuscules) sont réparties par catégories (en majuscules), que l’on
retrouve dans le constat.

#### Modifier une propriété

Il est possible de modifier une propriété, de modifier ses valeurs
correspondantes, et de la supprimer. Ces modifications impactent tous
les établissements qui partagent un serveur NumaHOP commun.

Il est également possible de rendre une propriété obligatoire ou non et
de lui assigner un champ commentaire. Ces modifications n’impactent que
l’établissement concerné.

En revanche, les catégories ne sont pas modifiables, ni renommables.

:::caution Il n’est pas possible de faire plusieurs templates de constats d’état.
Il faut donc que le template créé soit le plus large possible compte
tenu des différentes typologies de documents qui seront concernés.
:::

Une fois le template créé, il faut qu’il soit enregistré dans le menu
« Template » de l’interface NumaHOP. 

:::info  Indiquer au prestataire qui assure votre support que des modifications ont été apportées au template. 
De manière à ce que les techniciens puissent enregistrer ce template comme modèle dans la base.
Il est également possible de transmettre une signature de l’institution pour intégrer celle-ci au template, de manière à sortir de NumaHOP des constats d’état signés et validés par l’institution.
:::

###### Les modifications communes

Cliquer sur la propriété à modifier. Cela ouvre ses détails à droite.

Pour entrer en mode édition, cliquer sur le petit bouton <Icon icon={["fa", "pen-to-square"]} />**Modifier** en
haut à droite. Il est également possible de cliquer sur un des champs en
bleu pour ouvrir la propriété en mode édition :

Il est possible :
- D’assigner un libellé à la propriété,
- Un code,
- Et son ordre d’apparition dans le constat.

Il est également possible de configurer les différentes valeurs à
accoler aux propriétés. En mode édition, on peut renommer une valeur, la
supprimer ou en rajouter une en cliquant sur le <Icon icon={["fa", "square-plus"]} />

###### Les modifications locales

En cas de partage d’un serveur NumaHOP par plusieurs établissements, un
encart permet de procéder à des modifications strictement locales,
c’est-à-dire uniquement visibles pour l’établissement concerné. Il s’agit de l’encart du milieu, intitulé au nom de l’institution.

Chaque institution peut donc décider de rendre cette propriété active et
existante dans le constat d’état : en cliquant sur NON, la
propriété ne s’affichera pas dans le constat d’état. 
De la même façon, un établissement peut choisir de la rendre obligatoire ou non.

Enfin, **Commentaire** permet d’apposer un champ en texte libre en plus des valeurs à assigner à la propriété.

Ne pas oublier de cliquer sur le bouton <Icon icon={["fa", "floppy-disk"]} />**Enregistrer** une fois les
modifications terminées.

#### Changer une propriété de place


Il est possible de changer de place une propriété au sein d'une catégorie. 
Pour cela, il faut changer l’ordre des propriétés de la catégorie.

Pour faire passer une propriété d'un rang à un autre, indiquer sa position dans le champ
**Ordre**.
Attention, il faudra alors penser à modifier aussi le rang des propriétés adjacentes, ce n’est pas automatique.

:::caution Une fois une propriété enregistrée dans une catégorie, il n’est plus possible de la déplacer dans une autre catégorie. 
Dans ce cas, il faut la supprimer et la recréer dans la catégorie souhaitée.
:::

#### Ajouter une propriété

Dans le panneau de configuration du constat, cliquer sur <Icon icon={["fa", "square-plus"]} />. La liste
déroulante des différentes catégories s’affiche. Cliquer sur la catégorie dans laquelle la propriété doit s’intégrer.

Si la propriété doit s’intégrer dans **Description du document**, cliquer dessus dans le menu déroulant. 
La configuration de la propriété s’ouvre. Dans la barre supérieure, on voit le rattachement de la
propriété à la catégorie.

Remplir ensuite la grille et cliquer sur <Icon icon={["fa", "floppy-disk"]} />**Enregistrer**.

La nouvelle propriété apparaît dans la liste des propriétés du constat.

#### Supprimer une propriété

Dans la liste des propriétés affichées dans le panneau de configuration
du constat, cliquer sur la propriété à supprimer et sur <Icon icon={["fa", "trash-can"]} /> en haut à droite.
Une fenêtre s’affiche pour demander confirmation, cliquer sur **Supprimer** : la propriété disparait de la liste.


## Gestion des champs des constats d’état par bibliothèque

Il est possible de gérer les champs des constats d’état par bibliothèque. Les champs sont classés par catégorie.

### Catégories et champs disponibles

#### Description du document
- Cahiers
- Conditionnement de conservation
- Corps d’ouvrage
- Dimensions du document (H/L/P, mm)
- État général
- Format
- Papier
- Planches hors-format (H/l)
- Sens de lecture
- Type de documents

#### Numérotation
- Numérotation
- Autres pièces

#### Reliure
- État de la reliure
  - Angles d’ouvertures
  - Autres informations
  - Charnières
  - Coiffe de queue
  - Coiffe de tête
  - Dos
  - Déformations
  - Griffures, éraflures
  - Lacunes
  - Manques
  - Mors
  - Mors fendus
  - Plat inférieur
  - Plat supérieur
  - Titrage des tranches
  - Traces de réparations / restauration
  - Éléments détachés
  - Éléments mobiles
  - État général
  - Points de vigilance

### Paramétrage des champs par bibliothèque

Chaque bibliothèque peut décider pour chaque champ s’il :
- Est **Obligatoire** ou non
- Nécessite l’affichage d’une **Zone de commentaires complémentaire** ou non.
- S’affiche **Par défaut** à la création d’un constat d’état ou non.
- Est affiché pour les types de constat d’état suivants :
  - Multifeuillet
  - Monofeuillet
