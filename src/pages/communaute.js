import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './communaute.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUniversity, faSchool, faBuilding, faQuoteLeft, faHandshake, faEnvelope, faGlobe, faBook, faScrewdriverWrench, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// Liste des établissements membres
const membres = [
  {
    nom: 'Bibliothèque Sainte Geneviève',
    ville: 'Paris',
    logo: 'img/logos/bsg-logo.png',
    siteInternet: 'https://www.bsg.univ-paris3.fr/iguana/www.main.cls',
    bibliothequeNumerique: 'https://genovefa.bsg.univ-paris3.fr/s/genovefa/page/accueil',
  },
  {
    nom: 'Sciences Po Paris',
    ville: 'Paris',
    logo: 'img/logos/sciencespo-logo.png',
    siteInternet: 'hhttps://www.sciencespo.fr/fr/',
    bibliothequeNumerique: 'https://bibnum.sciencespo.fr/s/catalogue/page/accueil',
  },
  {
    nom: 'Bibliothèque universitaire des langues et civilisations',
    logo: 'img/logos/bulac-logo.png',
    ville: 'Paris',
    siteInternet: 'https://www.bulac.fr/',
    bibliothequeNumerique: 'https://bina.bulac.fr/s/bina/page/welcome',
  },
  {
    nom: 'Université Paris Saclay',
    ville: 'Orsay',
    logo: 'img/logos/saclay-logo.png',
    siteInternet: 'https://www.universite-paris-saclay.fr/',
    bibliothequeNumerique: 'https://numaclay.universite-paris-saclay.fr/s/numaclay/page/accueil',
  },
  {
    nom: 'Ecole Normale Supérieure de Paris',
    ville: 'Paris',
    logo: 'img/logos/ens-logo.png',
    siteInternet: 'https://www.ens.psl.eu/',
    bibliothequeNumerique: 'https://lucienne.ens.psl.eu/s/lucienne/page/welcome',
  },
  {
    nom: 'Humathèque Condorcet',
    ville: 'Aubervilliers',
    logo: 'img/logos/condorcet-logo.png',
    siteInternet: 'https://www.humatheque-condorcet.fr/',
    bibliothequeNumerique: 'https://bibnum.campus-condorcet.fr/s/bibnum/page/accueil',
  },
  {
    nom: 'Sorbonne Université',
    ville: 'Paris',
    logo: 'img/logos/sorbonneuniversite-logo.png',
    siteInternet: 'https://www.sorbonne-universite.fr/',
    bibliothequeNumerique: 'https://patrimoine.sorbonne-universite.fr/',
  },
  {
    nom: 'Bibliothèque nationale de France',
    ville: 'Paris',
    logo: 'img/logos/bnf-logo.png',
    siteInternet: 'https://www.bnf.fr/fr',
    bibliothequeNumerique: 'https://gallica.bnf.fr/accueil/fr/html/accueil-fr',
  },
  /*{
    nom: 'Museum national d\'histoire naturelle',
    ville: 'Paris',
    logo: 'img/logos/mnhn-logo.png',
    siteInternet: 'https://www.mnhn.fr/fr/bibliotheques-du-museum',
  },*/
  {
    nom: 'Université Claude Bernard Lyon I',
    ville: 'Lyon',
    logo: 'img/logos/lyon1-logo.png',
    siteInternet: 'https://www.univ-lyon1.fr/',
  },
  {
    nom: 'Médiathèque Simonne Veil',
    ville: 'Valenciennes',
    logo: 'img/logos/simoneveil-logo.png',
    siteInternet: 'https://mediatheques.agglo-pvm.fr/vos-mediatheques/mediatheque-simone-veil',
  },
  {
    nom: 'Institut national d\'histoire de l\'art',
    ville: 'Paris',
    logo: 'img/logos/inha-logo.png',
    siteInternet: 'https://www.inha.fr/',
    bibliothequeNumerique: 'https://bibliotheque-numerique.inha.fr/',
  },
  {
    nom: 'Archives d\'Alsace',
    ville: 'Strasbourg',
    logo: 'img/logos/archivesalsace-logo.png',
    siteInternet: 'https://archives.alsace.eu/',
  },
  {
    nom: 'Centre d\'études supérieures de la Renaissance',
    ville: 'Tours',
    logo: 'img/logos/cesr-logo.png',
    siteInternet: 'https://cesr.univ-tours.fr/',
  },
  /*{
    nom: 'Bibliothèque interuniversitaire de la Sorbonne',
    ville: 'Paris',
    logo: 'img/logos/bis-logo.png',
    siteInternet: 'https://www.bis-sorbonne.fr/',
    bibliothequeNumerique: 'https://nubis.bis-sorbonne.fr/',
  },*/
  {
    nom: 'Musée du Quai Branly',
    ville: 'Paris',
    logo: 'img/logos/mqb-logo.png',
    siteInternet: 'https://www.quaibranly.fr/fr/',
  },
    {
    nom: 'Musée du Louvre',
    ville: 'Paris',
    logo: 'img/logos/louvre-logo.png',
    siteInternet: 'https://www.louvre.fr/',
    bibliothequeNumerique: 'https://collections.louvre.fr/'
  },
    {
    nom: 'Musée d\'Orsay',
    ville: 'Paris',
    logo: 'img/logos/orsay-logo.png',
    siteInternet: 'https://www.musee-orsay.fr/fr',
  }
];

// Prestataires
const prestataires = [
  {
    auteur: 'Tech\'Advantage',
    etablissement: 'Rueil-Malmaison',
    siteInternet: 'https://www.tech-advantage.com/',
    citation: "Tech’Advantage a accompagné le développement initial de NumaHop, en capitalisant sur son expertise historique en solutions numériques pour les bibliothèques et les institutions culturelles, héritée de Progilone.",
    photo: 'img/photos/techadvantage.jpg',
    logo: 'img/logos/techadvantage-logo.png',
    description: "Prestataire historique, Tech’Advantage a joué un rôle clé dans la conception et le déploiement de NumaHop, en s’appuyant sur son héritage technique et son expérience de plus de 30 ans dans le numérique scientifique et culturel."
  },
  {
    auteur: 'BibLibre',
    etablissement: 'Marseille',
    siteInternet: 'https://www.biblibre.com/fr/',
    citation: "BibLibre contribue activement à Numahop en publiant et en maintenant le code source, renforçant ainsi son engagement pour des solutions libres et ouvertes au service des bibliothèques.",
    photo: 'img/photos/biblibre.jpg',
    logo: 'img/logos/biblibre-logo.png',
    description: "Spécialiste des logiciels libres pour les bibliothèques, BibLibre a intégré Numahop à son offre pour proposer une solution clé en main, maintenue et adaptée aux besoins des institutions."
  },
  {
    auteur: 'Sempiternelia',
    etablissement: 'Nanteuil-lès-Meaux',
    siteInternet: 'https://sempiternelia.net/',
    citation: "Sempiternelia intègre Numahop à son catalogue de services pour les bibliothèques, en proposant une solution complète incluant développement, hébergement et formation, adaptée aux enjeux des humanités numériques.",
    photo: 'https://sempiternelia.net/wp-content/uploads/2020/09/logo-sempiternelia.png',
    logo: 'img/logos/sempiternelia-logo.png',
    description: "Avec une expertise reconnue en humanités numériques, Sempiternelia a enrichi son panel de produits avec Numahop, offrant ainsi aux bibliothèques une solution flexible et intégrée."
  },
];


const CommunautePage = () => {
  return (
    <Layout title="Communauté NumaHOP" description="Découvrez l'association NumaHOP et ses établissements membres">
      <div className={styles.container}>
        {/* En-tête */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Association NumaHOP</h1>
            <p className={styles.heroSubtitle}>
              Fondée en 2023, l’Association des utilisateurs NumaHOP
              affirme l’importance de croiser les
              expertises autour de la numérisation, de la
              gestion des contenus et de
              l’interopérabilité des données.
            </p>
            <p>Elle œuvre à partager les pratiques et à
              renforcer les dynamiques de mutualisation,
              en menant des actions de formation, de
              traduction, et de documentation, ainsi que
              de développement de nouvelles
              fonctionnalités au sein du logiciel libre
              NumaHop.</p>
            <p>L'association est composée de membres institutionnels
              et de prestataires privés, tous engagés dans la
              préservation et la valorisation du patrimoine culturel numérique.</p>
            <p>Le Bureau de l'association, élu pour deux ans lors des assemblées générales,
              se réuni régulièrement pour
              coordonner ces actions à l'échelle nationale et internationale,
              avec pour objectif d'assurer l'évolution du logiciel, et sa
              promotion aurpès des professionnels du secteur.</p>
            <a href="docs/statuts">Les statuts de l'association NumaHop <FontAwesomeIcon icon={faExternalLinkAlt} /></a>

          </div>

          <div className={styles.heroImage}>
            <img src="img/numahop-schema.jpg" alt="Schema NumaHOP" />
            <a
              href="#rejoindre"
              className={styles.downloadLink}
            >
              Rejoindre & Contribuer
            </a>
          </div>

        </header>

        {/*
<div className={styles.associationStats}>
  <div className={styles.stat}>
    <div className={styles.statNumber}>20+</div>
    <div className={styles.statLabel}>Établissements membres</div>
  </div>
  <div className={styles.stat}>
    <div className={styles.statNumber}>500K+</div>
    <div className={styles.statLabel}>Documents numérisés</div>
  </div>
  <div className={styles.stat}>
    <div className={styles.statNumber}>10+</div>
    <div className={styles.statLabel}>Années d'expérience</div>
  </div>
</div>
*/}

        <section className={styles.membres}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faUniversity} className={styles.sectionIcon} />
            Établissements membres
          </h2>

          <div className={styles.membresGrid}>
            {membres.map((membre, index) => (
              <div key={index} className={styles.membreCard}>
                <div className={styles.membreLogo}>
                  <img src={membre.logo} alt={`Logo ${membre.nom}`} />
                </div>
                <h3 className={styles.membreNom}>{membre.nom}</h3>
                <p>{membre.ville}</p>

                <div className={styles.membreLinks}>
                  {membre.siteInternet && (
                    <a href={membre.siteInternet} target="_blank" rel="noopener noreferrer" className={styles.tag}>
                      <FontAwesomeIcon icon={faGlobe} /> Site internet
                    </a>)}
                  {membre.bibliothequeNumerique && (
                    <a href={membre.bibliothequeNumerique} target="_blank" rel="noopener noreferrer" className={styles.tag}>
                      <FontAwesomeIcon icon={faBook} /> Bibliothèque numérique
                    </a>)}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Prestataires */}
        <section className={styles.prestataires}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faScrewdriverWrench} className={styles.sectionIcon} />
            Prestataires
          </h2>
          <div className={styles.prestatairesGrid}>
            {prestataires.map((prestataire, index) => (
              <div key={index} className={styles.prestataireCard}>
                {/* Logo cliquable à la place de la photo et du titre */}
                <div className={styles.prestataireLogoContainer}>
                  <a href={prestataire.siteInternet} target="_blank" rel="noopener noreferrer">
                    <img
                      src={prestataire.logo}
                      alt={`Logo ${prestataire.auteur}`}
                      className={styles.prestataireLogo}
                    />
                  </a>
                </div>

                <div className={styles.prestataireContent}>
                  <p className={styles.prestataireDescription}>{prestataire.description}</p>
                  <div className={styles.prestataireCitationContainer}>
                    <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />
                    <p className={styles.prestataireCitation}>{prestataire.citation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Appel à rejoindre */}
        <section id="rejoindre" className={styles.rejoindre}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.sectionIcon} />
            Rejoignez nous
          </h2>

          {/* Cartes d\'options (2 colonnes) */}
          <div className={styles.rejoindreOptions}>
            {/* Carte : Liste de diffusion */}
            <div className={clsx(styles.optionCard, styles.cardHover)}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faUsers} className={styles.iconStyle} />
              </div>
              <h3 className={styles.cardTitle}>Échangez avec la communauté</h3>
              <p className={styles.cardDescription}>
                Partagez vos retours d'experience, et apprenez de la communauté des utilisateurs de NumaHop.
              </p>
              <a
                className={clsx('button button--primary', styles.cardButton)}
                href="https://groupes.renater.fr/sympa/info/numahop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.buttonIcon} />
                Rejoindre la liste Renater
              </a>
            </div>

            {/* Carte : Adhésion à l'association */}
            <div className={clsx(styles.optionCard, styles.cardHover)}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faHandshake} className={styles.iconStyle} />
              </div>
              <h3 className={styles.cardTitle}>Devenez membre de l’association</h3>
              <p className={styles.cardDescription}>
                Soutenez le projet et ses developpements en adhérant à l'association NumaHop.
              </p>
              <a
                className={clsx('button button--primary', styles.cardButton)}
                href="mailto:association-numahop@sorbonne-nouvelle.fr?subject=Demande%20d%27adhésion%20à%20NumaHOP&body=Bonjour,%0D%0A%0D%0AJe souhaite adhérer à l%27association NumaHOP. Pouvez-vous me transmettre les modalités ?%0D%0A%0D%0ACordialement,%0D%0A"
              >
                <FontAwesomeIcon icon={faEnvelope} className={styles.buttonIcon} />
                Contacter l'association NumaHop
              </a>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CommunautePage;
