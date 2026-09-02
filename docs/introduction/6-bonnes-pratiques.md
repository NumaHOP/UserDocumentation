---
title: Bonnes pratiques
sidebar_label: Bonnes pratiques
sidebar_position: 6
description: Volumétrie et bonnes pratiques pour NumaHop
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "thumbs-up"]} /> Bonnes pratiques

:::warning Page en cours de rédaction
:::

La question de la **volumétrie** concernant une application logicielle reste une problématique complexe, car elle implique la prise en compte de nombreux paramètres variés et interdépendants. Parmi ceux-ci, on peut citer :
- Le nombre d'utilisateurs
- Les caractéristiques du serveur
- La quantité de données
- La taille de ces données
- La nature et le séquencement des opérations réalisées
- Le nombre d'opérations lancées simultanément
- ...

Cette liste n'est pas exhaustive.

---

## Focus sur NumaHop

Pour NumaHop, concentrons-nous d'abord sur le cœur fonctionnel de ses traitements : **le processus de livraison et de contrôle**. Notre analyse des données traitées et notre retour d'expérience permettent de dégager quelques bonnes pratiques pour garantir la qualité du processus et des performances acceptables pour les utilisateurs.


### Dimensionnement des lots

Le nombre d'**unités documentaires (UD)**, le nombre de pages qui les constituent, ainsi que la taille des fichiers masters associés, sont des paramètres clés à considérer.

#### Recommandations pour le poids par UD et le nombre d'UD par lot

| Poids par UD       | Nombre d'UD conseillé par lot |
|--------------------|-------------------------------|
| Jusqu'à 50 Mo      | Jusqu'à 500                   |
| De 50 à 100 Mo     | Jusqu'à 300                   |
| De 100 à 500 Mo    | Jusqu'à 150                   |
| De 500 Mo à 1 Go   | Jusqu'à 50                    |
| De 1 Go à 5 Go     | Jusqu'à 20                    |
| De 5 Go à 10 Go    | Jusqu'à 10                    |
| Au-delà de 10 Go   | Jusqu'à 5                     |


### Précisions sur les recommandations

Ces valeurs sont **indicatives**. Si une minorité d'unités documentaires dépasse les seuils de poids indiqués, cela n'invalide pas nécessairement le nombre conseillé pour le lot. Par exemple :

- Si la majorité des UD ne dépasse pas **50 Mo**, mais que quelques-unes (moins de 5%) sont au-delà, le nombre conseillé de **500 UD** peut rester valide.
- En revanche, si parmi ces 5% excédant le seuil de 50 Mo, la majorité dépasse **1 Go**, il est préférable de **restreindre le nombre d'UD** dans le lot.


### Impact de l'utilisation du serveur

Ces valeurs doivent également être ajustées en fonction de l'utilisation du serveur. Si d'autres livraisons sont en cours au moment de lancer la vôtre, cela peut impacter la qualité du processus et les performances.


## Conclusion

Pour garantir des performances optimales et une qualité de traitement constante, il est recommandé de :
- **Définir des lots homogènes** en termes de poids.
- **Coordonner les livraisons** pour éviter les surcharges du serveur.

Ces bonnes pratiques permettent d'assurer un processus fluide et efficace pour tous les utilisateurs de NumaHop.

TEST pour NHASK

Si une unité documentaire est bloquée, il faut prevenir le prestataire de maintenance pour déblocage!
