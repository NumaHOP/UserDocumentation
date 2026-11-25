---
title: Contrôles qualité
sidebar_label: Contrôles qualité
sidebar_position: 4
description: Configuration des contrôles qualité
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "file-lines"]} />Le contrôle qualité dans le <Icon icon={["fa", "chart-diagram"]} />workflow NumaHOP

Le contrôle qualité intervient après livraison des fichiers par le prestataire. NumaHop effectue d’abord une série de contrôles automatisés en fonction du paramétrage effectué.

Une fois les contrôles automatiques validés, les documents passent en attente de contrôles manuels. Il est alors possible d’appliquer deux niveaux de contrôle :
- Du pré-rejet et de la pré-validation
- Puis une étape de validation définitive des contrôles


Le contrôle qualité dans NumaHop se fait grâce à la visionneuse embarquée. Selon les paramétrages choisis, il peut être :
- Exhaustif (vérification de toutes les pages de tous les documents du lot)
- Effectué par échantillonnage (un nombre de pages limité par document, un nombre de documents limité par lot ou un nombre de pages limité par lot). Le pourcentage d’échantillonnage est également indiqué dans les paramétrages.


```mermaid
flowchart TD

A["Création du **Projet**, du **Lot** et import de sunités documentaires<br>Démarrage du workflow"] --> B1["Création des constats d'état"]
B1 --> C1["Création des constats d'état"]
C1 --> D1["Validation des constats d'état"]
D1 --> E1["Livraison des fichiers numérisés"]
E1 --> F1["Contrôles automatiques"]
F1 --> G1["Premier niveau de contrôle: pré-rejet et pré-validation"]
F1 --> G1["Validation des contrôles"]

G1 --> H1["Rejet du document"]
H1 --> I1["Génération du rapport de contrôle"]

G1 --> H2["Validation du document"]
H2 --> I2["Validation de la notice"]

I1 --> E1["Livraison des fichiers numérisés"]
```

# <Icon icon={["fa", "eye"]} /> Configuration des contrôles

:::warning Page en cours de rédaction
:::

Dans Numahop, les contrôles sont paramétrés dans le menu <Icon icon={["fa", "gear"]} />**Administration**, puis dans la section **Contrôles** .

On va ensuite créer des configurations de contrôle types, correspondant à différents types de <Icon icon={["fa", "chart-diagram"]} />**workflows** ou de situation, et qui pourront ensuite être définies au niveau d'un <Icon icon={["fa", "book"]} />**projet**, voire d'un Icon icon={["fa", "boxes-stacked"]} />**lot**. 




