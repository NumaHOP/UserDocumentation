import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faCode, faBookAtlas } from '@fortawesome/free-solid-svg-icons';

const FeatureList = [
  {
    title: 'Mutualisation',
    Icon: faSitemap,
    description: (
      <>
        NumaHOP est une plateforme mutualisée pour la gestion des chaînes de numérisation, depuis la constitution de lots de documents jusqu'à leur publication dans une bibliothèque numérique ou leur dépôt en archivage pérenne.
      </>
    ),
  },
  {
    title: 'Logiciel libre',
    Icon: faCode,
    description: (
      <>
        NumaHOP est un logiciel libre permet désormais d'accélérer, de simplifier les projets de numérisation, grâce à un interfaçage largement automatisé entre les différentes étapes de la numérisation et les acteurs concernés (prestataires de numérisation, bibliothèques, diffuseurs, CINES).
      </>
    ),
  },
  {
    title: 'Communauté',
    Icon: faBookAtlas,
    description: (
      <>
        NumaHOP a été financé par le Département de Paris et la Comue Université Sorbonne Paris Cité.
        Il a été développé par la société Progilone, sous la direction de trois établissements pilotes : la Bibliothèque de Sciences Po, la BULAC et la Bibliothèque Sainte-Geneviève.
      </>
    ),
  },
];

function Feature({ Icon, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Remplacez le SVG par l'icône Font Awesome */}
        <div className={styles.featureIcon}>
          <FontAwesomeIcon icon={Icon} size="3x" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
