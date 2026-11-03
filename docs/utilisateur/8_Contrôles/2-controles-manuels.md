---
title: Contrôles manuels
sidebar_label: Contrôles manuels
sidebar_position: 2
description: Contrôles manuels
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "eye"]} /> Contrôles manuels

# Guide pratique du contrôle qualité

#### Le contrôle qualité dans NumaHOP

##### Le contrôle qualité dans le workflow NumaHOP

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-1.png"
class="aligncenter wp-image-732 size-full" fetchpriority="high"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-1.png 680w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-1-300x227.png 300w"
sizes="(max-width: 680px) 100vw, 680px" width="680" height="515" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-1.png)

Le contrôle qualité intervient après livraison des fichiers par le
prestataire. NumaHOP effectue d’abord une série de contrôles automatisés
en fonction du paramétrage effectué.

Une fois les contrôles automatiques validés, les documents passent en
attente de contrôles manuels. Il est alors possible d’appliquer deux
niveaux de contrôle :

##### Les principe du contrôle qualité

Le contrôle qualité dans NumaHOP se fait grâce à la visionneuse
embarquée. Selon les paramétrages choisis, il peut être :

 

D’autre part, le contrôle qualité prévoit l’apposition d’erreurs sur les
pages concernées. Il y a deux types d’erreurs, majeures et mineures. De
la même façon que pour le type de contrôle, le pourcentage d’erreurs
acceptées est indiqué dans les paramétrages. Passé ce pourcentage
d’erreurs, NumaHOP proposera de rejeter le document.

 

 

#### Configurer le contrôle qualité

##### Créer une configuration du contrôle qualité

Paramétrer le contrôle qualité a lieu dans le module Administration,
puis l’onglet « Contrôles » de l’encart « Configuration ».

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-2.png"
class="alignnone wp-image-733 size-full" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-2.png 560w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-2-300x142.png 300w"
sizes="(max-width: 560px) 100vw, 560px" width="560" height="265" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-2.png)

Il est possible de créer plusieurs configurations, par exemple selon le
type de documents : un lot de manuscrits pourrait être contrôlé en
intégralité avec un taux d’erreur majeure limité, tandis qu’un contrôle
par échantillonnage pourrait être appliqué pour un lot de monographies
imprimées. Tout dépend des choix de l’établissement.

SI des configurations ont déjà été créées, la liste apparaît sur l’écran
d’accueil des contrôles. Pour en ajouter une, cliquer sur le bouton + :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-3.png"
class="alignnone wp-image-734 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-3.png 550w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-3-300x133.png 300w"
sizes="(max-width: 550px) 100vw, 550px" width="550" height="244" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-3.png)

##### Les différents réglages possibles

Penser à nommer la configuration pour la retrouver facilement.

Les taux d’erreurs

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-4.png"
class="alignnone size-full wp-image-735" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-4.png 685w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-4-300x31.png 300w"
sizes="(max-width: 685px) 100vw, 685px" width="685" height="71" />

C’est un pourcentage qu’il faut rentrer.

Un pourcentage de 20% de taux d’erreurs majeures signifie que pour un
document de 10 pages contenant 3 erreurs majeures (30%) enregistrées,
NumaHOP proposera le rejet du document.

Voici les erreurs enregistrées :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-5.png"
class="aligncenter wp-image-736 size-full" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-5.png 511w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-5-300x224.png 300w"
sizes="(max-width: 511px) 100vw, 511px" width="511" height="382" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-5.png)

La méthode et le taux d’échantillonnage  

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-6.png"
class="alignnone size-full wp-image-737" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-6.png 778w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-6-300x24.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-6-768x61.png 768w"
sizes="(max-width: 778px) 100vw, 778px" width="778" height="62" />

Si le contrôle a pour but d’être exhaustif, choisir « pas
d’échantillonnage ».

Si le contrôle n’a pas pour but de s’appliquer à tous les documents mais
seulement à un échantillon, il faut indiquer le taux d’échantillonnage.
C’est un pourcentage.

Il existe 3 méthodes d’échantillonnage. Par exemple, pour un
échantillonnage de 40% sur un lot de 100 documents :

 

Les différents contrôles : activation et blocage

NumaHOP liste ensuite toute une série de contrôles qui sont effectués de
manière automatisée.

Libre à chaque établissement de rendre ces contrôles actifs ou pas. De
la même manière, ces contrôles peuvent être, si actifs, bloquants ou
pas.

Si un contrôle est activé et bloquant, NumaHOP va rejeter la livraison
d’un document non conforme, avant même que le contrôle qualité puisse
s’effectuer.

Ci-dessous, exemple de configuration pour un projet de numérisation
courante avec demande de génération d’un PDF océrisé.

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-7.png"
class="alignnone size-full wp-image-738" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-7.png 647w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-7-300x285.png 300w"
sizes="(max-width: 647px) 100vw, 647px" width="647" height="614" />

Une fois la configuration terminée, cliquer sur le bouton « Enregistrer
». <img
src="https://www.numahop.fr/wp-content/uploads/2022/11/workflow-6.png"
class="alignnone size-full wp-image-667" loading="lazy" decoding="async"
width="219" height="50" />

##### Sélectionner une configuration pour un lot

Lors de la création d’un lot, un encart est dédié aux configurations de
contrôle.

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-8.png"
class="aligncenter wp-image-739" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-8.png 513w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-8-300x121.png 300w"
sizes="(max-width: 388px) 100vw, 388px" width="388" height="156" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-8.png)

Dans l’entrée « Configuration contrôles », choisir la configuration
souhaitée. Une liste déroulante permet de retrouver toutes les
configurations enregistrées.

Rentrer ensuite les informations de compression, résolution minimale et
profil colorimétrique. Ces données sont surtout indispensables si les
contrôles correspondants sont activés et bloquants.

##### Le contrôle qualité dans le workflow

Le contrôle qualité peut être divisé en deux étapes dans le
[workflow](https://www.numahop.fr/2022/11/07/guide-du-workflow/). Il est
possible en effet de créer une étape intermédiaire de pré-validation ou
de pré-rejet et une étape de validation finale.

Pour cela, ouvrir le menu « Administration », et cliquer sur « Modèles
de Workflow » dans l’encart « Workflow » :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-9.png"
class="aligncenter wp-image-740 size-full" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-9.png 343w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-9-290x300.png 290w"
sizes="(max-width: 343px) 100vw, 343px" width="343" height="355" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-9.png)

Si plusieurs workflows ont été créés, ils sont rangés par ordre
alphabétique. Cliquer sur le modèle à assigner à un lot pour l’afficher
et le modifier :

 

Les détails du workflow s’affichent à droite de l’écran. Il suffit de
cliquer dans un des cadres pour entrer en mode édition et pouvoir
modifier le workflow.

Le contrôle qualité concerne ces 4 entrées :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-11.png"
class="size-full wp-image-742 aligncenter" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-11.png 396w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-11-300x137.png 300w"
sizes="(max-width: 396px) 100vw, 396px" width="396" height="181" />

Cliquer sur pré-rejet du document ou pré-validation du document. Cela
ouvre une nouvelle fenêtre :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-12.png"
class="alignnone size-full wp-image-743" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-12.png 800w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-12-300x108.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-12-768x277.png 768w"
sizes="(max-width: 800px) 100vw, 800px" width="800" height="289" />

Choisir de rentre cette étape requise ou non, et assigner l’étape au
groupe responsable correspondant. Cliquer sur OK. Si l’étape est
requise, elle sera de couleur orange. Si l’étape est non requise, elle
sera de couleur bleue.

Cliquer sur Enregistrer quand les modifications sont faites.

Il faudra penser à sélectionner le bon workflow pendant la création du
lot.

 

#### Repérer les documents à contrôler

##### Depuis le tableau de bord

Dans l’onglet « documents à contrôler ou en cours de contrôle » :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-13.png"
class="aligncenter wp-image-744 size-full" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-13.png 693w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-13-300x136.png 300w"
sizes="(max-width: 693px) 100vw, 693px" width="693" height="314" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-13.png)

Cliquer sur la petite flèche de chaque unité documentaire à droite pour
ouvrir l’interface de contrôle.

##### Dans le menu "Contrôles"

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-14.png"
class="alignnone wp-image-745 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-14.png 693w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-14-300x208.png 300w"
sizes="(max-width: 693px) 100vw, 693px" width="693" height="481" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-14.png)

#### L'interface de contrôle

##### Présentation de l'interface de contrôle

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15.png"
class="alignnone wp-image-746 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15.png 1184w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15-300x167.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15-1024x570.png 1024w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15-768x427.png 768w"
sizes="(max-width: 1184px) 100vw, 1184px" width="1184" height="659" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-15.png)

##### La visionneuse

Par défaut, la visionneuse s’ouvre en mode Mosaïque. Cet affichage est
utile pour avoir une vue d’ensemble sur le document.

Pour contrôler dans le détail un document, cliquer sur « Contrôles
pages » :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-16.png"
class="aligncenter wp-image-747 size-full" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-16.png 863w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-16-300x131.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-16-768x336.png 768w"
sizes="(max-width: 863px) 100vw, 863px" width="863" height="378" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-16.png)

Cela ouvre la vue simple page :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-17.png"
class="alignnone wp-image-748 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-17.png 857w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-17-300x136.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-17-768x349.png 768w"
sizes="(max-width: 857px) 100vw, 857px" width="857" height="389" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-17.png)

Cela ouvre la vue simple page :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-18.png"
class="alignnone wp-image-749 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-18.png 866w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-18-300x198.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-18-768x508.png 768w"
sizes="(max-width: 866px) 100vw, 866px" width="866" height="573" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-18.png)

En bas de la visionneuse défile le bandeau avec toutes les pages du
document dans l’ordre. La page active est encadrée de bleue. Il est
possible dans la visionneuse d’afficher simple page, ou double page ou
encore de revenir à la mosaïque en cliquant sur la vignette de la barre
de commande supérieure de la visionneuse : <img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-19.png"
class="alignnone size-full wp-image-750" loading="lazy" decoding="async"
width="250" height="74" />

 

#### Signaler une erreur

Dans la zone de contrôle de la page, dès repérage d’une erreur, cliquer
dans l’encart « Erreurs » et choisir dans la liste déroulante l’erreur
correspondante :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-20.png"
class="alignnone wp-image-751 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-20.png 753w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-20-300x158.png 300w"
sizes="(max-width: 753px) 100vw, 753px" width="753" height="397" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-20.png)

L’erreur se reporte dans l’encart, et la page se marque d’une coche
rouge :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-21.png"
class="alignnone wp-image-752 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-21.png 783w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-21-300x182.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-21-768x467.png 768w"
sizes="(max-width: 783px) 100vw, 783px" width="783" height="476" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-21.png)

Procéder ainsi pour toutes les pages du document. Dans la visionneuse,
un code couleur identifie le statut des pages :

Attention : si l’on fait défiler les pages dans la visionneuse,
celles-ci se marquent automatiquement d’une coche verte.

#### Valider ou rejeter un document

Une fois toutes les pages du document ou de l’échantillon contrôlées,
cliquer sur « Revenir au contrôle global », tout en bas de la zone de
contrôle du document :

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-22.png"
class="alignnone wp-image-753 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-22.png 784w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-22-300x127.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-22-768x326.png 768w"
sizes="(max-width: 784px) 100vw, 784px" width="784" height="333" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-22.png)

La visionneuse revient alors au mode mosaïque. Dans l’encart général des
contrôles, le nombre d’erreurs est reporté. Le mode mosaïque permet de
visualiser toutes les pages en erreur, marquées d’une coche rouge.

[<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-23.png"
class="alignnone wp-image-754 size-full" loading="lazy" decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-23.png 783w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-23-300x166.png 300w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-23-768x425.png 768w"
sizes="(max-width: 783px) 100vw, 783px" width="783" height="433" />](https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-23.png)

Si le nombre d’erreurs dépasse le seuil acceptable, NumaHOP affiche une
pop-up d’information :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-24.png"
class="alignnone size-full wp-image-755 aligncenter" loading="lazy"
decoding="async" width="182" height="204" />

Selon ces informations et le nombre d’erreurs, accepter ou rejeter le
document :

<img
src="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-25.png"
class="size-full wp-image-756 aligncenter" loading="lazy"
decoding="async"
srcset="https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-25.png 421w, https://www.numahop.fr/wp-content/uploads/2022/11/controle-qualite-25-300x106.png 300w"
sizes="(max-width: 421px) 100vw, 421px" width="421" height="149" />

Au fur et à mesure que les documents sont traités, ils avancent dans le
workflow et disparaissent de l’onglet « Documents à contrôler ou en
cours de contrôle » du tableau de bord.

Dans le cas où le contrôle qualité est effectué en deux étapes avec
pré-rejet/pré-validation, les documents parviennent sur le tableau de
bord des personnes figurant dans le groupe de workflow assigné à la
validation définitive des documents.

---

---
title: Contrôle qualité des images et des tables des matières - Livraison intermédiaire
sidebar_label: Contrôle qualité
---

# Contrôle qualité des images et des tables des matières - Livraison intermédiaire

---

## 1. Préconisations du CCTP

### 1.1. Ordre de numérisation du document

Chaque document est numérisé dans son intégralité (reliure, gardes, feuilles volantes, etc.). Les fichiers images doivent être restitués dans cet ordre exact :

- Dos
- Plat supérieur (déterminé par le sens de lecture)
- Contre-plat supérieur
- Gardes (y compris les pages vierges, numérotées ou non)
- Intégralité des feuillets (pages blanches comprises)
- Contre-plat inférieur
- Plat inférieur
- Tête
- Gouttière
- Queue
- Feuillets volants insérés dans le document (à numériser impérativement en recto/verso même s’il n’y a aucune information au verso)
- Défauts

Les demandes de vues supplémentaires liées à des particularités de conditionnement (boîtes, étuis d’origine), de reliure, ou de pliage de certains éléments des documents doivent être indiquées dans les constats d’état.

---

#### Reliures à rabat

Pour les reliures à rabat, les spécificités suivantes s’appliquent :

- Dos
- Plat supérieur
- Contre-plat supérieur
- Rabat replié sur la première garde ou, en l’absence de garde, sur la première page
- Gardes (y compris les pages vierges, numérotées ou non)
- Intégralité des feuillets (pages blanches comprises)
- Contre-plat inférieur avec rabat déplié
- Plat inférieur avec rabat déplié
- Tête
- Gouttière
- Queue
- Feuillets volants insérés dans le document (à numériser impérativement en recto/verso même s’il n’y a aucune information au verso)
- Défauts

---

#### Documents non reliés

Les documents non reliés, constitués de feuilles, sont classés selon le sens de lecture dans l’ordre de leur numérisation. Ces feuilles sont foliotées. Par défaut, on ne numérise pas l’épaisseur des côtés de ces liasses de feuilles. Si la numérisation de ces tranches est souhaitée, cela doit être mentionné dans le constat d’état.

---

### 1.2. Spécifications de numérisation

- Le titulaire numérise en une image par page, sauf exception indiquée dans le constat d’état.
- L’intégralité de la page doit être visible sur l’image (cadrage au bord extérieur de la page, début de la page qui fait face visible, fond de cahier visible).
- La prise de vue doit intégrer la totalité du fond du cahier et au-delà, sans vitre visible et sans ombre portée.
- Un cache blanc doit systématiquement être utilisé pour toutes les pages présentant des lacunes, des trous, des déchirures ou pour masquer les écritures parasites dues à la transparence du papier.
- La présence des mains ou des doigts de l’opérateur ou de tout autre objet sur l’image est exclue.
- La numérisation ne doit pas engendrer de zone floue, de mauvaise répartition d’éclairage ou de variation de densité non justifiée sur l’image.
- Aucune déformation n’est autorisée sur les pages.
- Un fond neutre noir doit être visible lors de la numérisation de la reliure.
- La charte colorimétrique (mire colorimétrique) doit être visible sur la dernière vue de chaque document (vue doublée : une avec mire colorimétrique et une sans).

---

## 2. Déroulement du contrôle qualité des fichiers images et des tables de correspondance

### 2.1. Consignes pour le stockage et la lecture des fichiers

- Les fichiers sont livrés sur un serveur sFTP et livrés par le pôle F&D sur la plateforme NumaHOP.
- Le contrôle qualité s'effectue directement sur NumaHOP avec votre profil.
- La liste des documents à contrôler se trouve dans les Actions du tableau de bord, dans la fenêtre "Documents à contrôler ou en cours de contrôle" ([https://app.numahop.fr/#/login](https://app.numahop.fr/#/login)) ou en cliquant sur l’onglet "Contrôles".

---

#### Statuts des documents

Les documents à contrôler peuvent avoir deux statuts :
- **À contrôler** : Le contrôle qualité du document n’a pas encore commencé.
- **En cours de contrôle** : Le contrôle qualité a commencé et a été interrompu.

---

#### Table de correspondance

La table de correspondance folios/vues ou table des matières simplifiée est visible directement lors du contrôle qualité du document.

---

### 2.2. Étapes à ne pas oublier et points de vigilance

Le contrôle des images s’effectue en plusieurs étapes :

- Vérification de l’exhaustivité du nombre de vues (présence de tous les folios, pas de page manquante) avec l’aide de la vue en mosaïque et du feuilletage rapide en tenant compte de la foliotation.
- Vérification de la qualité de la numérisation en faisant défiler l’ensemble des images et en zoomant régulièrement pour vérifier les flous, le rendu des couleurs, l’absence de distorsion, etc.
- Vérification régulière de la correspondance entre les folios et les vues indiqués sur la table des matières remise par le prestataire (début, milieu et fin du document).

---

#### Enregistrement des erreurs

Chaque erreur constatée sur une image doit être enregistrée au moyen du menu déroulant accessible sur la droite de l’écran **"Erreurs"**.

---

#### Vérification des tables de correspondance

Chaque document doit disposer d’une table de correspondance folios/vues ou d’une table des matières simplifiée lors de la livraison. Le type de table attendu pour chaque document est indiqué sur le tableur.

La vérification des tables de correspondance folios/vues se fait directement sur NumaHOP en regardant si les folios indiqués correspondent bien sur l’ensemble du document. Pour les tables des matières simplifiées, vérifier systématiquement que l’indication du début de chaque composant du document est bien mentionnée au bon folio/vue dans la table des matières.

---

#### Modification des tables

La table de correspondance folios/vues ou la table des matières simplifiée peut être modifiée directement sur la plateforme en cas d’erreur du prestataire.

---

#### Points de vigilance

- Sens de lecture (pas de confusion du plat supérieur et du plat inférieur lors d’une numérisation dans le sens oriental).
- Utilisation d’un fond noir pour les vues reliures (dos, plats supérieurs et inférieurs, contreplats et garde faisant face au contreplat, gouttière, tête, queue, conditionnement le cas échéant).
- Utilisation d’un cache blanc pour faciliter la lisibilité dans certains cas (visibilité de l’encre par transparence, feuillets de différents formats au sein d’un même volume relié, trous…).
- Pas de courbure de la page ni de distorsion de l’image (la courbure ne doit pas être excessive, y compris pour les volumes épais). La vue doit être "à plat".
- Pas de troncature de l’information : l’ensemble de la page doit être visible jusqu’au fond de cahier, + un demi-centimètre/un centimètre de la page qui fait face.
- Rendu satisfaisant de l’image : pas de flou, pas de surexposition ou de rendu trop sombre.
- Rendu satisfaisant des couleurs et en particulier de l’or : ni trop brillant (risque de limiter la lisibilité du texte), ni trop terne.

---

## 3. Erreurs mineures / Erreurs majeures

Afin de déterminer si un document doit être rejeté ou validé, les erreurs sont réparties en plusieurs catégories :

---

### 3.1. Erreurs conduisant à un rejet automatique du document

- Fichier illisible ou corrompu : le fichier ne s’ouvre pas.
- Format de fichier image non respecté : le prestataire n’a pas livré un fichier jpeg, jpeg2000 ou pdf conforme.
- Format de métadonnées non respecté : le prestataire n’a pas livré un fichier METS conforme.
- Non-conformité du nommage : exemple : `MS.TURC.45.0001.jpg` au lieu de `MS_TURC_45_00001.jpg`.
- Non-conformité de l’organisation des fichiers / Ordre des vues non respecté : exemple : non-respect de la numérisation dans le sens oriental.
- Page manquante à la numérisation.
- Présence de corps étrangers sur l’image.

---

### 3.2. Erreurs majeures : aucune erreur tolérée

- Troncature d’information (si la troncature concerne par exemple le bord de la page faisant face à la page numérisée, sinon, renvoi automatique au prestataire pour reprise).
- Lisibilité du contenu (flou...) : si la lisibilité est légèrement altérée uniquement. Si la lisibilité est totalement compromise, renvoi automatique au prestataire.
- Non-respect de la résolution.
- Non-respect du seuil.
- Incohérence entre les métadonnées et les fichiers concernés : la correspondance folios/vues ou l’indication de début des composants du document n’est pas correctement renseignée dans la table des matières.

---

### 3.3. Erreurs mineures : 2 erreurs tolérées

- Mauvais rendu de la luminosité : ombre portée, halo lumineux sur l’image / surexposition / sous-exposition : l’image est trop claire ou trop sombre.
- Flou léger, problème de réglage du capteur : l’image "bave" sur les côtés.
- Dérive de la chromie : mauvais rendu des couleurs, mauvais rendu de l’or.
- Distorsions géométriques par rapport à l’original (courbure, la vue n’est pas suffisamment "à plat").
- Cadrage inadapté ou non homogène sur l’ensemble des vues.
- Absence de cache alors que son utilisation aurait été nécessaire.

---

### 3.4. Cumul des erreurs

Les erreurs majeures et mineures peuvent se cumuler sur une même page.

Les pages sont identifiées de la façon suivante :
- **Marque-page rouge** : la page a été rejetée.
- **Marque-page vert** : la page a été validée.

---

### 3.5. Validation ou rejet du document

À la fin du contrôle de la dernière vue du document, une icône apparaît. Celle-ci permet de mettre fin au contrôle en validant ou rejetant le document.

NumaHOP prend en compte le nombre d’erreurs signalées lors du contrôle du document en fonction du seuil toléré renseigné dans les paramétrages. Lorsque le seuil est atteint durant le contrôle, une alerte apparaît pour le signaler au contrôleur.

Différents messages de confirmation peuvent apparaître au moment de terminer le contrôle du document, tenant compte du nombre d’erreurs signalées :
- **Validation du document** : Aucune erreur n’a été reportée sur le document.
- **Validation du document** : Des erreurs ont été reportées mais le taux reste acceptable pour valider le document.
- **Rejet du document** : Des erreurs ont été reportées et le taux d’erreurs majeures et/ou mineures acceptable a été dépassé.


Le rejet ou la validation du document peut également être effectué depuis l’affichage en mosaïque des vues.

---

---
title: Mémo Contrôle Qualité NumaHOP
sidebar_label: Mémo Contrôle Qualité
---

# Mémo Contrôle Qualité NumaHOP

---

## Sommaire

1. [Étape 1 : Connexion](#étape-1--connexion)
2. [Étape 2 : Sélectionner le document à contrôler](#étape-2--sélectionner-le-document-à-contrôler)
3. [Étape 3 : Contrôle global du document](#étape-3--contrôle-global-du-document)
4. [Étape 4 : Interface contrôle page à page du document](#étape-4--interface-contrôle-page-à-page-du-document)
5. [Étape 5 : Contrôle visuel](#étape-5--contrôle-visuel)
6. [Étape 6 : Contrôle table des matières](#étape-6--contrôle-table-des-matières)
7. [Étape 7 : Notification des erreurs détectées](#étape-7--notification-des-erreurs-détectées)

---

## Étape 1 : Connexion

1. Aller sur le site [https://app.numahop.fr/#/login](https://app.numahop.fr/#/login).
2. Se connecter avec vos identifiants.

---

## Étape 2 : Sélectionner le document à contrôler

1. Vous arrivez sur votre tableau de bord.
2. Vous pouvez filtrer vos documents par projet et/ou par lot pour ne voir apparaître que les données que vous avez à traiter.
3. Pour le contrôle qualité, cliquez sur la case dédiée.
4. Une fois que vous avez cliqué dessus, un menu déroulant des documents à contrôler apparaît.
5. Pour contrôler un document, cliquez sur le document souhaité.

---

## Étape 3 : Contrôle global du document

1. L’interface suivante apparaît. Cette interface permet un contrôle visuel global du document.
2. Cette interface permet de rejeter un document globalement (ex : problème de couleurs etc.) sans avoir à noter toutes les pages.
3. Pour cela, sélectionnez l’erreur dans **"Erreurs globales"**.

### Informations disponibles
- Les informations du constat d’état (si le constat a été réalisé dans NumaHOP).
- Les notes de livraison du prestataire.
- Les informations de contrôle (si le document est livré une deuxième fois).

4. Si le contrôle global vous semble correct, vous pouvez passer en contrôles pages en cliquant sur le bouton correspondant.

---

## Étape 4 : Interface contrôle page à page du document

L’écran suivant apparaît :

### Éléments visibles
- Les images à contrôler.
- Les données techniques (accessibles en cliquant sur **"Données techniques"**).
- La table des matières avec les indications de Type, Page et Titre.
- Un écran permettant de noter les informations relatives au contrôle qualité.

### Actions possibles
- Télécharger l’original livré.
- Sélectionner des erreurs dans un menu déroulant en cliquant sur **"Erreurs"**.
- Commenter les erreurs dans **"Notes de contrôles"** ou ajouter d’autres erreurs.

---

## Étape 5 : Contrôle visuel

Pour effectuer le contrôle visuel, passez en mode pleine page.

### Ordre de numérisation des pages
La numérisation se fait de manière intégrale (sauf mention contraire), pages blanches comprises. L’ordre de numérisation des pages est le suivant :

- Dos
- Gouttière
- Plat supérieur
- Contreplat supérieur
- Pages blanches éventuelles
- Page de titre (de l’ouvrage ou de la pièce numérisée)
- Numérisation intégrale du document ou de la pièce
- Pages blanches éventuelles
- Contreplat inférieur
- Plat inférieur
- Tranche de tête
- Tranche de queue

Pour les brochures, le dos, la gouttière et les tranches ne doivent pas être numérisés (cf workflow musique en cas de doute).

---

### Récapitulatif des consignes de base

| Actions demandées                     | Oui/Non | Détails                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
