import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './presentation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsToCircle, faCog, faUsers, faFileExport, faSliders, faScrewdriverWrench, faCheckDouble, faVideo, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const features = [
  {
    title: 'Gestion centralisée',
    icon: faArrowsToCircle,
    description: 'Centralisez et organisez vos notices documentaires et vos reproductions numériques en un seul endroit, accessible en ligne.',
    tags: [
      { label: 'Projets', link: '/docs/utilisateur/gestion-projets' },
      { label: 'Lots', link: '/docs/utilisateur/gestion-lots' },
      { label: 'Trains', link: '/docs/utilisateur/gestion-trains' },
      { label: 'Unités documentaires', link: '/docs/utilisateur/Unités%20documentaires/ud-gestion-unitaire' },
    ]
  },
  {
    title: 'Espace collaboratif',
    icon: faUsers,
    description: 'Travaillez en équipe au sein de votre établissement et avec vos partenaires, en configurant des rôles et permissions spécifiques à chaque utilisateurs.',
    tags: [
      { label: 'Groupes', link: '/docs/administrateur/Groupes%20&%20utilisateurs/groupes' },
      { label: 'Utilisateurs', link: '/docs/administrateur/Groupes%20&%20utilisateurs/utilisateurs' },
      { label: "Livraisons", link: '/docs/utilisateur/gestion-livraisons' }
    ]
  },
  {
    title: 'Configuration flexible',
    icon: faSliders,
    description: 'Adaptez les worflows, les constats d\'état et les contrôles aux besoins spécifiques à votre établissement et à chacun de vos projets de numérisation.',
    tags: [
      { label: 'Worflows', link: '/docs/administrateur/Configurations/workflows' },
      { label: 'Contrôles', link: '/docs/administrateur/Configurations/controles' },
      { label: 'Constat d\'états', link: '/docs/utilisateur/constat-etat-unitaire' }
    ]
  },
  {
    title: 'Dérivation simplifiée',
    icon: faScrewdriverWrench,
    description: 'Importez et dérivez les données natives de vos systèmes d\'information documentaire vers le standard interopérable Dublin Core.',
    tags: [
      { label: 'Mappings', link: "/docs/administrateur/Mappings/Mappings" },
      { label: 'Import de notices', link: '/docs/utilisateur/Imports/notices-simples' }
    ]
  },
  {
    title: 'Contrôle qualité',
    icon: faCheckDouble,
    description: 'Facilitez le travail de contrôle en parametrant les contrôles automatiques et manuels en fonction vos entreprises de numérisation.',
    tags: [
      { label: 'Contrôles automatiques', link: '/docs/utilisateur/Contrôles/controles-automatiques' },
      { label: 'Contrôles manuels', link: '/docs/utilisateur/Contrôles/controles-manuels' }
    ]
  },
  {
    title: 'Export automatisé',
    icon: faFileExport,
    description: 'Disséminez vos unités documentaires et leurs dérivées sur différentes plateformes de diffusion et d\'archivage.',
    tags: [
      { label: 'Archivage', link: '/docs/utilisateur/Archivage/archivage-cines' },
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      src: "https://www.youtube.com/embed/Dvdf_P-1sjQ?si=XpHqJYAuo6q9CIax",
      title: "Les Lundis Numériques\nInstitut national d'histoire de l'art"
    },
    {
      src: "https://www.youtube.com/embed/JRLUKbGO7RE",
      title: "Journées professionnelles 2022\nUniversité Paris-Saclay"
    },
    {
      src: "https://www.youtube.com/embed/9iVJMFaQ7MA?si=iw58bwqNGtAYNpqy",
      title: "Journées professionnelles 2019\nBibliothèque universitaire des langues et civilisations"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const formatTitle = (title) => {
    const lines = title.split('\n');
    return lines.map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <Layout title="Présentation de NumaHOP" description="Découvrez NumaHOP, la plateforme de gestion de contenus numérisés">
      <div className={styles.container}>
        {/* En-tête */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>NumaHOP</h1>
            <p className={styles.heroSubtitle}>
              Une plateforme de gestion des chaînes de numérisation
              automatisée et modulable destinée aux bibliothèques, centres
              d'archives, et les institutions culturelles.
            </p>
            <p>NumaHOP est une solution complète pour la gestion de contenus
              numérisés, spécialement conçue pour les bibliothèques,
              les archives et les institutions culturelles. NumaHOP facilite la numérisation, l'organisation,
              et la dissémination de vos collections.</p>
            <ul>
              <li><strong>Un gain de temps</strong> : un outil intégré unique,
                sans modules tiers et multiples.</li>
              <li><strong>Une plus grande fiabilité et qualité</strong> sur toutes
                les étapes de la chaîne : des contrôles et des conversions automatisés.</li>
              <li><strong>Une meuilleure prise en main</strong> par les équipes : outil
                intégré pour toutes les étapes, assurant confort de travail
                et ergonomie.</li>
              <li><strong>Des coûts limités :</strong> des fichiers dérivés et OCR produits
                directement dans la plateforme.</li></ul>
            <p>Que vous soyez une petite bibliothèque ou une grande
              institution, NumaHOP s'adapte à vos besoins et vous
              accompagne dans votre transition numérique.</p>

          </div>
          <div className={styles.heroImage}>
            <img src={useBaseUrl('/img/numahop-schema.jpg')} alt="Schema NumaHOP" />
            <a
              href={useBaseUrl('/img/numahop-poster.jpg')}
              download="numahop-poster.jpg"
              className={styles.downloadLink}
            >
              Télécharger le poster
            </a>
          </div>

        </header>

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

        {/* Section des vidéos de démonstration - CARROUSEL */}
        <section className={styles.videosSection}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faVideo} className={styles.sectionIcon} />
            NumaHOP en vidéo
          </h2>
          
          <div className={styles.carouselContainer}>
            <button 
              onClick={goToPrevious} 
              className={styles.carouselButton}
              aria-label="Vidéo précédente"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className={styles.carouselWrapper}>
              <div 
                className={styles.carouselInner}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {videos.map((video, index) => (
                  <div key={index} className={styles.carouselItem}>
                    <div className={styles.videoCard}>
                      <div className={styles.videoContainer}>
                        <iframe
                          src={video.src}
                          title={`Video ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className={styles.videoTitle}>{formatTitle(video.title)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={goToNext} 
              className={styles.carouselButton}
              aria-label="Vidéo suivante"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          {/* Indicateurs */}
          <div className={styles.carouselDots}>
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${styles.carouselDot} ${index === currentIndex ? styles.carouselDotActive : ''}`}
                aria-label={`Aller à la vidéo ${index + 1}`}
              />
            ))}
          </div>
        </section>

      </div >
    </Layout >
  );
};

export default PresentationPage;
