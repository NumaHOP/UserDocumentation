---
title: Introduction à NumaHop
sidebar_label: Introduction à NumaHop
sidebar_position: 0
description: Aperçu d'ensemble du logiciel
---

import Icon from '@site/src/components/Icon';

# **Résumé du Chiffrage : Modernisation de NumaHOP (2026)**
*Projet porté par **BibLibre** pour **Collex/Persée***

---
Le siège social de l'association NumaHOP est fixé à l'adresse suivante : Bibliothèque de Sorbonne Université, Tour Zamansky, 15e étage – Boîte courrier 192 – 4 place Jussieu, 75252 PARIS CEDEX 05.
---

## 📌 **1. Présentation du Logiciel et de son Usage**

### **Contexte et Objectifs**
- **NumaHOP** est une plateforme logicielle destinée aux bibliothèques, nécessitant une **modernisation technique** pour :
  - Améliorer la **sécurité**, l'**interopérabilité** et la **maintenabilité**.
  - **Ouvrir le projet** à de nouveaux contributeurs et établissements.
  - **Renforcer la gouvernance communautaire** et la **documentation technique**.
  - **Livrer une version stable et moderne** avant fin **2026** (financement **CollEx-Persée**).

- **Public cible** :
  - Bibliothèques, établissements académiques (ex. **ENS-PSL**, **BULAC**).
  - Communauté open source (dépôt GitHub : [NumaHOP/NumaHOP](https://github.com/NumaHOP/NumaHOP)).

- **Fonctionnalités clés** :
  - Gestion d'**unités documentaires (UD)**.
  - Traitements automatisés (ex. détection de fichiers corrompus).
  - Navigation entre documents (amélioration prévue : mécanismes *Previous/Next*).
  - Intégration avec des outils tiers (**IIIF**, connecteurs externes, API publiques).

---

### **Méthodologie de Développement**
- **Approche Agile** :
  - Cycles de développement **courts**.
  - **Priorisation dynamique** des tâches.
  - Livraisons **intermédiaires** et validation progressive.
  - Adaptation continue aux **découvertes techniques**.
- **Mode régie** : 80 jours alloués (enveloppe prévisionnelle).
- **Collaboration** :
  - **Copilotage tripartite** : Association NumaHOP, CollEx-Persée, BibLibre.
  - Réunions de pilotage **mensuelles** (juillet à décembre 2026).
  - Points techniques réguliers entre développeurs.

---

---

## 🏗️ **2. Architecture Technique**

### **2.1. Architecture Actuelle**
   **Composant**          | **Technologie**       | **Version**          | **État**                          |
 |------------------------|-----------------------|----------------------|-----------------------------------|
 | **Frontend**           | AngularJS             | Obsolète             | À remplacer (priorité haute)     |
 | **Backend**            | Spring Boot           | 3.0 (nov. 2022)      | Retard : 7 versions (4.1 en 2026) |
 | **Base de données**    | -                     | -                    | Intégration avec Elasticsearch    |
 | **API**                | REST                  | 68/150 routes non conformes | À harmoniser               |
 | **Authentification**   | -                     | -                    | Mécanismes à moderniser           |
 | **Visionneuse**        | Mirador (React)       | -                    | Intégration existante             |

---

### **2.2. Axes de Modernisation**
#### **🔹 Axe 1 : Pérennité Technique**
- **Fixation de l'API REST** :
  - **Problème** : Disparités dans l'implémentation des routes, non-respect des standards.
  - **Objectifs** :
    - Harmoniser les échanges frontend/backend.
    - Fiabiliser les flux de données.
    - Préparer l'interopérabilité (IIIF, API publiques).
    - Documenter les services exposés (approche **code-first** → OpenAPI).
  - **Estimation** : **13 à 21 jours**.

- **Remplacement d'AngularJS** :
  - **Options envisagées** :
 | **Framework** | **Avantages**                          | **Inconvénients**                     | **Pérennité** |
 |---------------|----------------------------------------|---------------------------------------|---------------|
 | **React**     | Écosystème large, modularité, performances | Nécessite des choix d'architecture (routing, état) | ⭐⭐⭐⭐⭐ |
 | **Angular**   | Structuration native, TypeScript, intégration Spring | Courbe d'apprentissage, bundle lourd | ⭐⭐⭐⭐  |
 | **Vue.js**    | Simplicité, légèreté, déjà utilisé par BibLibre (Koha) | Écosystème fragmenté | ⭐⭐⭐⭐  |
  - **Critères de choix** :
    - Cohérence avec les composants existants (ex. Mirador en React).
    - Maintenabilité à long terme.
    - Capacité à assurer une **transition sécurisée**.
  - **Estimation** : **≥ 34 jours** (dépend du choix final).

---

#### **🔹 Axe 2 : Librairies et Dépendances**
- **Mise à niveau de Spring Boot** :
  - **Problème** : Version 3.0 (nov. 2022) → **4.1 (mai 2026)**.
  - **Risques** :
    - Vulnérabilités de sécurité.
    - Obsolescence des API internes.
    - Incompatibilités avec les nouvelles versions des bibliothèques.
  - **Approche** :
    - Migration **par étapes** (3.0 → 3.5 → 4.x).
    - Validation des impacts sur :
      - API REST.
      - Authentification.
      - Elasticsearch.
      - Tests unitaires.
  - **Estimation** : **8 jours**.

- **Mise à jour des dépendances applicatives** :
  - **Cibles** :
    - Apache Commons.
    - Librairies utilitaires historiques.
    - Composants Elasticsearch.
    - Dépendances frontend (AngularJS).
  - **Outils** :
    - **Dependabot** (GitHub) pour :
      - Détection des versions obsolètes.
      - Alertes de sécurité.
      - Propositions de mises à jour.
  - **Estimation** : **5 à 8 jours**.

- **Correction des failles de sécurité** :
  - **Aucune faille critique identifiée** à ce jour.
  - **Actions prévues** :
    - Corrections ciblées **au fil de l'eau**.
    - Remplacement des composants obsolètes (AngularJS, dépendances).
    - **Audit de sécurité externe** (pentest) **recommandé** après modernisation.
  - **Estimation** : Non quantifiable (dépend des découvertes).

---

#### **🔹 Axe 3 : Stabilisation et Réduction de la Dette Technique**
- **Correction des anomalies** :
  - **36 issues ouvertes** sur GitHub, dont **10 bugs prioritaires**.
  - **Focus** :
    - Dysfonctionnements fonctionnels.
    - Comportements instables.
    - Erreurs de traitement documentaire.
    - Détection des fichiers corrompus (point critique).
  - **Estimation** : **Traitement itératif** (intégré à la régie).

- **Optimisation des traitements backend** :
  - **Problématiques** :
    - Traitements longs ou peu robustes.
    - Blocages liés à des dépendances.
  - **Améliorations prévues** :
    - Relance des traitements échoués.
    - Lancement à la volée.
    - Meilleure journalisation et diagnostic.
    - Renforcement des **tests automatisés** (intégration complète).
  - **Estimation** : Intégré aux développements existants.

- **Améliorations ergonomiques** :
  - **Navigation entre unités documentaires** :
    - Ajout de boutons *Previous/Next* sur les pages de détail.
  - **Estimation** : **5 jours**.

---
#### **🔹 Axe 4 : Ouverture et Réutilisation**
- **Documentation technique** :
  - **Objectifs** :
    - Améliorer la **réutilisabilité** et la **maintenabilité**.
    - Faciliter l'onboarding des nouveaux contributeurs.
  - **Contenu** :
    - Architecture applicative.
    - Dépendances techniques.
    - Procédures d'installation, déploiement, configuration.
    - Bonnes pratiques de développement.
  - **Approche** : Documentation **maintenue au fil de l'eau** (intégrée aux développements).
  - **Estimation** : Intégré aux autres tâches.

- **Internationalisation (I18N)** :
  - **Traduction progressive** du code et de la documentation en **anglais**.
  - **Nouveaux composants frontend** développés directement en anglais.
  - **Mécanismes d'I18N** :
    - Gestion pérenne des traductions futures.
    - Interface de traduction communautaire.
  - **Estimation** : Intégré au remplacement du frontend.

---

---
---
## 🚨 **3. Dette Technique et Priorités de Développement**

### **3.1. Synthèse des Priorités**
 | **Axe**               | **Tâche**                          | **Priorité** | **Estimation**       | **Statut**          |
 |-----------------------|------------------------------------|--------------|----------------------|---------------------|
 | **Pérennité**         | Fixation de l'API REST              | ⭐⭐⭐⭐⭐      | 13–21 jours          | **Prérequis**       |
 | **Pérennité**         | Remplacement AngularJS              | ⭐⭐⭐⭐⭐      | ≥ 34 jours           | **À arbitrer**      |
 | **Librairies**        | Mise à niveau Spring Boot           | ⭐⭐⭐⭐       | 8 jours              | **Critique**        |
 | **Librairies**        | Mise à jour des dépendances         | ⭐⭐⭐        | 5–8 jours            | **Important**       |
 | **Sécurité**          | Correction des failles              | ⭐⭐⭐        | Non quantifiable     | **Au fil de l'eau** |
 | **Stabilisation**     | Correction des anomalies            | ⭐⭐⭐        | Intégré à la régie   | **Continu**        |
 | **Stabilisation**     | Amélioration navigation/ergonomie   | ⭐⭐          | 5 jours              | **Secondaire**      |
 | **Ouverture**         | Documentation technique             | ⭐⭐          | Intégré              | **Continu**        |
 | **Ouverture**         | Internationalisation (I18N)         | ⭐⭐          | Intégré              | **Secondaire**      |

---

### **3.2. Répartition des Ressources**
- **Enveloppe totale** : **80 jours de régie**.
- **Estimations précises** :
  - **31 à 42 jours** pour les tâches quantifiables (API, Spring Boot, dépendances, ergonomie).
  - **38 à 49 jours** de réserve pour :
    - Remplacement du frontend (AngularJS → React/Angular/Vue.js).
    - Traitement des anomalies non estimables.
    - Nettoyage progressif de la dette technique.

---
### **3.3. Calendrier Prévisionnel**
 | **Période**       | **Événement**                          |
 |-------------------|----------------------------------------|
 | **Juin 2026**     | Réunion de lancement + démarrage des développements |
 | **T3–T4 2026**    | Livraisons intermédiaires + COPIL mensuels |
 | **Décembre 2026** | Livraison finale + facturation         |

---
---
## 📊 **4. Recommandations et Points d'Attention**
- **Priorités absolues** :
  1. **Fixation de l'API REST** (prérequis pour le frontend).
  2. **Mise à niveau de Spring Boot** (sécurité et compatibilité).
  3. **Remplacement d'AngularJS** (pérennité et sécurité).

- **Risques identifiés** :
  - **Compatibilité** : Montées de version (Spring Boot, dépendances) → tests renforcés nécessaires.
  - **Dette technique** : Ancienneté du code → difficultés de maintenance.
  - **Sécurité** : Obsolescence d'AngularJS et des dépendances → audit externe **recommandé**.

- **Opportunités** :
  - **Mutualisation** : Utilisation de React (déjà présent via Mirador).
  - **Ouverture communautaire** : Traduction en anglais et documentation technique.
  - **Automatisation** : Intégration de Dependabot pour le suivi des dépendances.

---
---
## 📎 **5. Pièces Jointes et Ressources**
- **Devis** : BI026-05 4045 (remise de 15 % sur le coût journalier).
- **Dépôt GitHub** : [NumaHOP/NumaHOP](https://github.com/NumaHOP/NumaHOP) (36 issues ouvertes).
- **Ressources externes** :
  - [Comparatif Angular vs Vue.js vs React (Dyma, 2026)](https://www.dyma.fr/comparatif-angular-vs-vuejs-vs-react).
  - [Spring Boot Generations & Support](https://spring.io/projects/generations#support).