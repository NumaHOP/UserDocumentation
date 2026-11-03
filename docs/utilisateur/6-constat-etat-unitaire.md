---
title: Gestion des constats d'état
sidebar_label: Gestion des constats d'état
sidebar_position: 1
description: Gestion des constats d'état
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "list-check"]} /> Gestion des constat d'état

## Constat d'état à l'unité documentaire

#### Utilité du constat d'état

##### Un constat, pour quoi faire ?

Il décrit l’état matériel du document à un moment donné.

Dans le cadre d’une opération de numérisation, surtout menée par un
prestataire extérieur, il est indispensable.

Il et préconisé d’en établir deux :

La comparaison des deux constats permet de vérifier l’évolution de
l’état du document.

En cas de dégradation du document, non constatée sur le constat d’état
initial, l’établissement pourra demander au prestataire de numérisation
de prendre en charge à ses frais la restauration du document.

##### Catégories du constat d'état

Il existe trois grandes catégories dans le constat d’état :

#### Créer un constat d'état

Une fois connecté à NumaHOP, le tableau de bord affiche l’état
d’avancement des documents selon le workflow prédéfini.

 

L’onglet « constats d’état à réaliser et valider par la bibliothèque »
affiche le nombre de documents concernés. L’onglet se déplie pour faire
apparaître tous les documents.

Tant que les constats n’ont pas été validés, ils restent présents dans
cet onglet sur le tableau de bord. Ils peuvent donc à tout moment être
retrouvés ici, même si certains ont déjà été commencés.

##### Créer une fiche de constat d'état

Sur l’unité documentaire (UD) concernée, cliquer sur le bouton
« Effectuer l’action » :

 

Puis cliquer sur « Créer le constat d’état ». Le constat d’état pour
l’unité documentaire sélectionnée s’ouvre :

Si aucun constat n’a été créé, par défaut le constat qui s’ouvre est
celui de l’état initial, à la date du jour. La grille du constat
s’affiche et est prête pour être remplie.

 

#### Propriétés et valeurs du constat d'état

A noter : les propriétés décrites ci-dessous et leurs valeurs ne sont
pas les éléments par défaut de NumaHOP. Il est effectivement possible de
renommer les propriétés dans les parties, d’en supprimer et d’en
rajouter. Il est également possible de rajouter et de supprimer des
valeurs correspondantes.

Attention : en cas de partage de serveur NumaHOP par plusieurs
établissements, les modifications effectuées impactent toutes les
instances NumaHOP de ces établissements.

Les propriétés et valeurs ci-dessous ont été renommées et ne sont plus
les mêmes que l’instance NumaHOP par défaut.

Il est possible, pour chaque propriété, de la rendre optionnelle ou même
de la masquer, d’associer ou non la possibilité de rajouter un
commentaire etc. Ceci fait l’objet d’un autre tutoriel.

Le constat se compose de deux grands ensembles :

 

Le constat est une succession de propriétés prédéfinies (à gauche),
auxquels sont accolées un certain nombre de valeurs également
prédéfinies (à droite). Il est possible d’adjoindre des commentaires
libres aux valeurs choisies, pour documenter le choix de celles-ci.

Selon les paramétrages effectués, certaines propriétés doivent être
remplies obligatoirement.

A la fin de chaque catégorie, un bouton « ajouter une nouvelle
description » permet de rajouter et dupliquer des propriétés.

##### Description du document

Plusieurs parties composent cette catégorie qui décrit le document et
son état matériel. Les documents au retour de la numérisation seront
confrontés à ce qui aura été renseigné dans cette partie.

On y trouve le type de document, la valeur d’assurance, la numérotation,
l’état du document et de la reliure…

Un exemple de propriétés et de valeurs dans le template des constats
pour la partie Description du document :

La dernière catégorie d’informations à remplir dans la partie
Description du document concerne l’estimation du nombre de vues à
numériser :

##### Les points de vigilance pour la manipulation

Directement dédiés au prestataire, qui y trouve là des points
d’attention pour manipuler les documents ainsi que des consignes de
numérisation.

Un exemple de propriétés possibles :

##### Ajouter des champs et des descriptions

Le bouton « Ajouter une nouvelle description » en bas de chaque ensemble
permet de rajouter une propriété et d’y accoler des valeurs. C’est
notamment utile quand il faut accoler plusieurs valeurs à une propriété.
Il faut alors dupliquer celle-ci.

#### Enregistrer, compléter et valider un constat d'état

##### Enregistrer un constat d'état

Le constat peut être enregistré à tout moment, en cliquant sur le bouton
« Enregistrer » permanent sur la page du constat. Il est possible de
commencer un constat, puis de l’enregistrer pour le terminer
ultérieurement.

A noter : un constat ne pourra pas être enregistré si les propriétés
obligatoires ne sont pas remplies.

##### Retrouver un constat d'état commencé précédemment

Pour revenir sur un constat déjà commencé puis enregistré, il y a deux
solutions.

Cliquer ensuite sur l’onglet Constat d’état pour afficher la grille :

On constate que dans les deux cas, l’affichage de la grille du constat
d’état n’est pas le même que lors de sa création :

Les descriptions déjà remplies apparaissent en bleu, et celles non
encore remplies n’apparaissent pas.

##### Compléter un constat d'état

Comme les propriétés non remplies n’apparaissent plus, il faut cliquer
sur « ajouter une nouvelle description » et choisir les propriétés
manquantes avec les valeurs correspondantes dans les listes déroulantes.

Dans l’exemple suivant, on voudrait rajouter la propriété « Eléments
détachés » dans l’état du document.

Cliquer sur « Ajouter une nouvelle description », puis se positionner
dans la barre de description créée. Cela ouvre la liste déroulante de
propriétés ; cliquer sur celle choisie.

Remplir ensuite les valeurs associées de la même manière que lors de la
création du constat.

##### Valider un constat d'état

Une fois que le constat est terminé, cliquer sur « enregistrer », situé
tout en bas du constat. Une vue simplifiée du constat s’affiche :

L’unité documentaire n’apparaît plus dans la liste des constats d’état à
réaliser sur la page d’accueil.

#### Réaliser un constat d'état hors ligne

##### Télécharger le modèle d'import

 

 

Il est possible de dresser les constats d’état hors ligne, dans un
tableur excel. Pour cela, utiliser la fonction « opération groupée » du
menu « Documents », et cliquer sur « unités documentaires » :

 

 

 

La liste de toutes les unités documentaires créées dans NumaHOP
apparaît. Pour n’afficher que celles dont il faut dresser des constats,
utiliser la fonction filtre.

 

Filtrer par projet, puis par lot. Bien vérifier que tous les autres
champs sont vides

La liste des UD souhaitées s’affiche.

Cliquer sur « tout cocher » en haut à gauche, puis en haut à droite,
cliquer sur « Actions sur la sélection » et « modèles d’import des
constats d’état » :

Une pop up s’ouvre :

Cliquer sur « Autoriser ». Un fichier excel est créé, à télécharger :
condition\_report\_import.slsx

##### Travailler dans Excel

Le fichier excel contient autant d’onglet que d’unités documentaires.

On retrouve les propriétés en première colonne, les valeurs (valeur –
liste) en colonne D et la zone de commentaire (saisie libre) en colonne
E.

En rouge, les propriétés et valeurs obligatoires telles que définies
dans le template. En jaune, les valeurs à liste déroulante.

Si une propriété nécessite d’intégrer deux valeurs, dupliquer la ligne
concernée :

Dans l’exemple ci-dessous, pour la propriété « Eléments détachés » dans
l’état de la reliure, cela concerne à la fois le plat recto et le plat
verso :

Attention : toutes les valeurs ne se présentent pas sous la forme de
liste déroulante. Par exemple, pour les dimensions du document, il faut
indiquer dans les trois cases soulignées de jaune respectivement la
hauteur, la largeur et l’épaisseur du document, en millimètres :

S’il n’y a aucune description ni commentaire à renseigner pour une
propriété, il suffit laisser celui-ci vide.

##### Réimporter les constats d'état dans NumaHOP

Revenir sur les UD groupées, de manière à n’afficher que les UD d’un
lot. L’idéal est de réimporter quand tous les constats d’un lot sont
faits, de manière à ne le faire qu’une fois.

Quand la liste des UD s’affiche, cliquer ensuite sur le bouton en haut à
droite « Importer des constats d’état » :

 

 

Et choisir le fichier correspondant. Une pop-up s’affiche après un petit
temps de traitement, pour indiquer l’import des constats avec la liste
des UD concernées :

##### Vérifier que l'import s'est bien déroulé

Il est possible de vérifier que l’import s’est bien passé en retournant
sur l’unité documentaire souhaitée.

 

Dans le menu « Documents », cliquer sur « Unités documentaires ». La
liste des UD s’affiche. Cliquer sur une UD pour laquelle un constat
d’état a été importé.

Le détail de l’unité documentaire s’ouvre. Cliquer sur l’onglet
« Constat d’état » :

On voit que le constat d’état réalisé dans le fichier excel a été
importé dans NumaHOP. Il est possible de le modifier si nécessaire.

#### Exporter un bordereau de constats d'état

Une fois que les constats sont terminés, il est possible d’exporter un
bordereau de constats d’état. Il comporte l’ensemble des descriptions
pour tous les constats de manière synthétique et sous forme de tableur.

Cocher ensuite les constats concernés ou cliquer sur « tout cocher » si
l’opération concerne toutes les UD d’un même lot puis cliquer sur
« Actions sur la sélection » à droite de l’écran. Sélectionner
« Télécharger le bordereau pdf ».

Un fichier pdf est téléchargé, intitulé « bordereau.pdf ». Il contient
la cote des documents, le titre, le nombre de pages et une colonne
Synthèse qui reprend l’intégralité des descriptions apportées sur le
constat de chaque UD.

#### Créer un constat d'état de retour

Au retour des documents, il faut vérifier que leur état est conforme à
celui d’avant leur départ.

Dans la plupart des cas, le document sera rendu dans le même état qu’à
l’aller. En revanche, il est possible que des dégradations soient
intervenues sur le document. Dans ce cas, c’est le constat d’état de
retour qui mentionnera ces dégradations, et qui sera la base
contractuelle pour établir la part de responsabilité du prestataire, et
éventuellement la prise en charge de la restauration du document par
celui-ci.

La procédure est la même que pour créer un constat d’état. Retrouver les
unités documentaires pour lesquelles établir le constat de retour.

Sur la page de l’unité documentaire, dans l’onglet constat d’état,
cliquer sur « créer un nouvel état » puis « état constaté au retour » :

Le constat d’état de retour est une duplication du constat initial. Tous
les champs remplis lors du premier constat le sont également dans
celui-ci.

Si le document présente des dégradations qui n’ont pas été reportées
lors du premier constat d’état, il faut alors les rajouter.

 

 

 

Cliquer sur l’onglet « modifier ».

Le constat s’ouvre en mode édition.

Des champs et descriptions supplémentaires peuvent être rajoutés.

Enregistrer le constat une fois terminé.

 

 

En haut à droite, cliquer sur le bouton « détails » : <img
src="https://www.numahop.fr/wp-content/uploads/2022/11/constat-detat-37.png"
class="alignnone wp-image-610" loading="lazy" decoding="async"
width="95" height="36" />

Cela permet d’afficher les différents onglets constitutifs de l’UD.

Dans l’onglet « Constat d’état », cliquer sur le petit bouton en haut à
droite « Constat d’état » pour choisir le format souhaité :

Le fichier se télécharge, et s’intitule « condition\_report\_cote.pdf ».

S’il y a eu un constat d’état de retour, le document téléchargé présente
les deux états : initial et de retour.

Le constat d’état est charté NumaHOP et comporte le template de la
signature d’un membre de la direction.

---
title: Rédaction et gestion des constats d’état dans NumaHOP
sidebar_label: Rédaction des constats d’état
---

# Rédaction d’un constat d’état dans NumaHOP

## Création d’un constat d’état

Si aucun constat d’état n’a été créé pour l’unité documentaire, seul le bouton de création est visible.

- À la création, seuls les champs paramétrés comme devant être visibles par défaut sont affichés.
- Les autres champs peuvent être ajoutés en cliquant sur **"Ajouter une nouvelle description"** dans la section correspondante.

:::caution Attention
Au moins un champ doit être renseigné dans la section **« Description du document »**. Le champ **« Synthèse »** étant obligatoirement présent, si rien n’est à signaler, renseignez ce champ avec **« RAS »** par exemple.
:::

Une fois enregistré, le constat d’état s’affiche de manière détaillée.

- La zone **« CONTACTS »** peut être dépliée pour être renseignée.
- La zone sous le constat d’état peut également être dépliée pour être renseignée.

---

## Création de nouveaux constats d’état

Si besoin, de nouveaux constats d’état peuvent être créés en cliquant sur l’icône dédiée et en choisissant le type de constat à créer.

- Le nouveau constat créé reprend alors les informations du constat précédent.
- La liste de tous les constats d’état créés pour l’unité documentaire est visible avec le nombre de constats existants.

:::info
Par défaut, seuls le constat initial et le dernier constat créé sont affichés. Pour voir un constat antérieur, il suffit de cliquer dessus dans la liste pour qu’il soit affiché à la place du dernier constat.
:::

---

## Téléchargement d’un fichier Excel depuis NumaHOP

### Réaliser les constats hors ligne

1. **Télécharger le fichier de rédaction des constats hors ligne**.
2. **Accéder aux unités documentaires des opérations groupées**.
3. **Sélectionner les unités documentaires** pour lesquelles vous voulez réaliser le constat.
4. **Sélectionner le modèle d’import de constats d’état** dans les **« Actions sur la sélection »**.
5. Le fichier Excel généré comporte autant d’onglets que d’unités documentaires sélectionnées.
6. **Remplir le constat** sur votre poste informatique, champ par champ et onglet par onglet.

---

## Import des constats d’état dans NumaHOP

1. **Accéder aux unités documentaires des opérations groupées**.
2. **Sélectionner les unités documentaires** pour lesquelles vous voulez réaliser le constat.
3. **Sélectionner **« Importer des constats d’état »****.

---

## Téléchargement des constats d’état en version papier

1. Aller dans l’onglet **« Constat d’état »** de l’unité documentaire.
2. Cliquer sur l’icône **« Constat d’état »** en haut à droite.
3. Sélectionner le format souhaité.

---

## Gestion en masse des constats d’état

Il est possible de gérer en masse les unités documentaires à travers leur dernier constat d’état.

- Des filtres peuvent être appliqués à l’ensemble des constats d’état pour n’afficher que ceux ayant des points communs.
  - Par exemple : tous les constats d’état dont la longueur est supérieure à 200 mm.

---

## Synchronisation avec le workflow

La réalisation et la validation des constats d’état est une étape intégrée (obligatoire ou non) dans le workflow de numérisation des documents.

### Ordre à respecter
1. Réalisation des constats d’état.
2. Lancement du workflow sur le lot.
3. Validation des constats d’état.

## Import de constat d'état en masse
