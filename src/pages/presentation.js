import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './presentation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsToCircle, faCog, faUsers, faFileExport, faSliders, faScrewdriverWrench, faCheckDouble, faVideo } from '@fortawesome/free-solid-svg-icons';
import Link from '@docusaurus/Link';

const features = [
  {
    title: 'Gestion centralisée',
    icon: faArrowsToCircle,
    description: 'Centralisez et organisez vos notices documentaires et vos reproductions numériques en un seul endroit, accessible en ligne.',
    tags: [
      { label: 'Projets', link: '/docs/introduction' },
      { label: 'Lots', link: '/docs/introduction' },
      { label: 'Trains', link: '/docs/introduction' },
    ]
  },
  {
    title: 'Espace collaboratif',
    icon: faUsers,
    description: 'Travaillez en équipe au sein de votre établissement et avec vos partenaires, en configurant des rôles et permissions spécifiques à chaque utilisateurs.',
    tags: [
      { label: 'Groupes', link: '/docs/introduction' },
      { label: 'Utilisateurs', link: '/docs/introduction' },
      { label: "Livraisons", link: '/docs/introduction' }
    ]
  },
  {
    title: 'Configuration flexible',
    icon: faSliders,
    description: 'Adaptez les worflows, les constats d\'état et les contrôles aux besoins spécifiques à votre établissement et à chacun de vos projets de numérisation.',
    tags: [
      { label: 'Worflows', link: '/docs/introduction' },
      { label: 'Contrôles', link: '/docs/introduction' },
      { label: 'Constat d\'états', link: '/docs/introduction' }
    ]
  },
  {
    title: 'Dérivation simplifiée',
    icon: faScrewdriverWrench,
    description: 'Importez et dérivez les données natives de vos systèmes d\'information documentaire vers le standard interopérable Dublin Core.',
    tags: [
      { label: 'Mappings', link: "/docs/introduction" },
      { label: 'Import de notices', link: '/docs/introduction' }
    ]
  },
  {
    title: 'Contrôle qualité',
    icon: faCheckDouble,
    description: 'Facilitez le travail de contrôle en parametrant les contrôles automatiques et manuels en fonction vos entreprises de numérisation.',
    tags: [
      { label: 'Contrôles automatiques', link: '/docs/introduction' },
      { label: 'Contrôles manuels', link: '/docs/introduction' }
    ]
  },
  {
    title: 'Export automatisé',
    icon: faFileExport,
    description: 'Disséminez vos unités documentaires et leurs dérivées sur différentes plateformes de diffusion et d\'archivage.',
    tags: [
      { label: 'Archivage', link: '/docs/introduction' },
      { label: 'Export', link: '/docs/introduction' },
      { label: 'Fichiers dérivés', link: '/docs/introduction' }
    ],
  },
];

// Composant pour afficher une feature
const FeatureCard = ({ icon, title, description, tags }) => (
  <div className={styles.featureCard}>
    <div className={styles.featureIcon}>
      <FontAwesomeIcon icon={icon} size="3x" />
    </div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
    {/* Section des tags */}
    {tags && tags.length > 0 && (
      <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <Link
            key={index}
            className={clsx('badge badge--secondary', styles.tag)}
            to={tag.link}
          >
            {tag.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

const PresentationPage = () => {
  return (
    <Layout title="Présentation de NumaHOP" description="Découvrez NumaHOP, la plateforme de gestion de contenus numérisés">
      <div className={styles.container}>
        {/* En-tête */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>NumaHop</h1>
            <p className={styles.heroSubtitle}>
              Une plateforme de gestion des chaînes de numérisation
              automatisée et modulable destinée aux bibliothèques, centres
              d'archives, et les institutions culturelles.
            </p>
            <p>NumaHop est une solution complète pour la gestion de contenus
              numérisés, spécialement conçue pour les bibliothèques,
              les archives et les institutions culturelles. NumaHop facilite la numérisation, l'organisation,
              et la dissémination de vos collections.</p>
            <ul>
              <li>Un gain de temps : outil intégré unique,
                pas d’outils tiers et multiples.</li>
              <li>Une plus grande fiabilité et qualité sur toutes
                les étapes de la chaîne : contrôles automatisés,
                conversions automatisées.</li>
              <li>Une prise en main facilitée par les équipes : outil
                intégré pour toutes les étapes, confort de travail
                et ergonomie.</li>
              <li>Des coûts limités : fichiers dérivés et OCR produits
                directement dans la plate-forme.</li></ul>
            <p>Que vous soyez une petite bibliothèque ou une grande
              institution, NumaHop s'adapte à vos besoins et vous
              accompagne dans votre transition numérique.</p>

          </div>
          <div className={styles.heroImage}>
            <img src="img/numahop-schema.jpg" alt="Schema NumaHOP" />
            <a
              href="img/numahop-poster.jpg"
              download="numahop-poster.jpg"
              className={styles.downloadLink}
            >
              Télécharger le poster
            </a>
          </div>

        </header>

        {/* Section des vidéos de démonstration */}
        <section className={styles.videosSection}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faVideo} className={styles.sectionIcon} />
            NumaHOP en vidéo</h2>
          <div className={styles.videosGrid}>
            {/* Vidéo 1: Lundis Numériques INHA */}
            <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <iframe
                  src="https://www.youtube.com/embed/Dvdf_P-1sjQ?si=XpHqJYAuo6q9CIax"
                  title="Lundis numériques de l'INHA 2022"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoTitle}>Les Lundis Numériques<br />Institut national d'histoire de l'art</div>
            </div>

            <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <iframe
                  src="https://www.youtube.com/embed/JRLUKbGO7RE"
                  title="Journées professionnelles 2022"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoTitle}>
                Journées professionnelles 2022<br />Université Paris-Saclay
              </div>
            </div>


            {/* Vidéo 3: Recherche avancée */}
            <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <iframe
                  src="https://www.youtube.com/embed/9iVJMFaQ7MA?si=iw58bwqNGtAYNpqy"
                  title="Journées professionnelles 2019"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoTitle}>Journées professionnelles 2019<br />Bibliothèque universitaire des langues et civilisations</div>
            </div>

          </div>
        </section>


        {/* Section des fonctionnalités */}
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faCog} className={styles.sectionIcon} />
            Fonctionnalités clés
          </h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                tags={feature.tags}
              />
            ))}
          </div>
        </section>

      </div >
    </Layout >
  );
};

export default PresentationPage;
