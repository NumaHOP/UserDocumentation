import React from 'react';
import Layout from '@theme/Layout';
import styles from './statuts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function StatutsPage() {
  return (
    <Layout title="Statuts de l'association NumaHOP" description="Statuts de l'association NumaHOP">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Statuts de l'association NumaHOP</h1>

          <h2>PRÉAMBULE</h2>
          <p>
            Les logiciels métiers sous licence libre sont assez peu nombreux et demandent une participation étroite 
            des développeurs et des utilisateurs pour rester opérationnels et fidèles aux principes de partage et 
            de diffusion des logiciels libres. L'Association NumaHOP propose ainsi un espace d'échange, de formation 
            et de travail commun autour de ce logiciel professionnel.
          </p>

          <h2>ARTICLE PREMIER – NOM</h2>
          <p>
            Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er juillet 1901 
            et le décret du 16 août 1901, ayant pour titre : Association NumaHOP.
          </p>

          <h2>ARTICLE 2 – OBJET</h2>
          <p>
            Cette association a pour objet le maintien, le développement, la documentation, la promotion, et la diffusion 
            du logiciel libre NumaHOP.
          </p>
          <p>Elle vise plus particulièrement à :</p>
          <ul>
            <li>encourager la collaboration et l'entraide entre les utilisateurs de NumaHOP grâce au partage de l'information, 
              de la documentation et des ressources ;</li>
            <li>entreprendre tout type d'action de valorisation et de formation pour promouvoir l'usage de NumaHOP ;</li>
            <li>se positionner comme un interlocuteur reconnu des acteurs publics ou privés intéressés par NumaHOP ;</li>
            <li>appuyer et participer aux demandes de développement du logiciel NumaHOP.</li>
          </ul>
          <p>Pour cela, l'association notamment :</p>
          <ul>
            <li>organise des réunions, journées d'études, ateliers, formations, etc. ;</li>
            <li>constitue des groupes de travail thématiques ;</li>
            <li>met en commun des moyens, des expériences et des savoir-faire ;</li>
            <li>participe au suivi ou au financement d'évolutions de NumaHOP ;</li>
            <li>et toute autre action qui répond aux objectifs qu'elle s'est fixés.</li>
          </ul>

          <h2>ARTICLE 3 – SIÈGE SOCIAL</h2>
          <p>
            Le siège social est fixé à l'adresse suivante :
          </p>
          <p>
            <em>Bibliothèque universitaire des Langues et Civilisations,</em><br />
            <em>Signalement et Exposition des Données,</em><br />
            <em>65 rue des Grands Moulins,</em><br />
            <em>75013 Paris XIIIe</em>
          </p>
          <p>Il pourra être transféré par simple décision du bureau.</p>

          <h2>ARTICLE 4 – DURÉE</h2>
          <p>La durée de l'association est illimitée.</p>

          <h2>ARTICLE 5 – COMPOSITION</h2>
          <p>
            L'association est composée de personnes physiques ou morales, membres d'honneur, membres bienfaiteurs et membres 
            actifs, ci-après dénommées membres, à jour de leur cotisation. Pour être membre, il faut présenter une demande au 
            bureau de l'association. L'adhésion est validée par le bureau de l'association. Le bureau de l'association peut refuser 
            une ou plusieurs d'entre elles sans être tenu de fournir ses motifs.
          </p>
          <p>L'adhésion à l'association implique un engagement à participer à son fonctionnement et à sa gestion commune.</p>

          <h2>ARTICLE 6 – BUREAU</h2>
          <p>
            Le bureau est chargé de la gestion courante de l'association et de la mise en œuvre des décisions prises par 
            l'assemblée générale.
          </p>
          <p>
            L'association est administrée par un bureau d'au moins 3 membres et jusqu'à 7, élus par l'assemblée générale pour deux 
            ans, et rééligibles. Le bureau se compose d'un président, d'un trésorier, d'un secrétaire. S'il y a lieu, un 
            vice-président, un secrétaire adjoint, un trésorier adjoint et un coordinateur des travaux peuvent être désignés. En 
            cas de vacance, le bureau pourvoit provisoirement au remplacement des délégués défaillants. Il est procédé à leur 
            remplacement définitif lors de l'assemblée générale suivante.
          </p>

          <h2>ARTICLE 7 – FONCTIONNEMENT DU BUREAU</h2>
          <p>
            Les membres du bureau se doivent d'être en contact étroit pour administrer au mieux l'association, y compris par 
            voie électronique. Les décisions sont prises à la majorité des voix des membres du bureau. En cas de partage égal 
            des voix, la voix de la présidence compte double.
          </p>
          <p>
            Les réunions du bureau sont convoquées par courriel par les soins du président, assisté par le secrétaire. Le 
            bureau ne peut valablement délibérer que si plus de la moitié de ses membres est présente. Les réunions sont présidées 
            par le président ou, par procuration, par le secrétaire si le président ou vice-président ne peuvent y assister.
          </p>
          <p>
            Afin de l'assister dans ses missions, le bureau peut nommer des chargés de mission sur des tâches spécifiques : 
            communication, animations de groupe de travail, etc.
          </p>

          <h2>ARTICLE 8 – RESSOURCES</h2>
          <p>Les ressources de l'association proviennent :</p>
          <ul>
            <li>
              des cotisations acquittées par les adhérents. Ces cotisations doivent être acquittées chaque année. Le montant 
              de la cotisation est fixé par l'assemblée générale ordinaire ;
            </li>
            <li>des subventions de l'Etat, des collectivités territoriales ou de tout autre organisme public ou privé ;</li>
            <li>de dons individuels ou d'établissements d'utilité publique.</li>
          </ul>
          <p>
            Un compte bancaire ou postal au nom de l'association est tenu dans un établissement désigné par le bureau. 
            L'assemblée générale désigne les personnes détentrices de la signature. La comptabilité de l'association est tenue 
            conformément aux textes législatifs en vigueur. Elle produit annuellement un bilan d'exercice. Ces comptes sont 
            soumis à vérification lors d'une assemblée générale.
          </p>

          <h2>ARTICLE 9 – PERTE DE LA QUALITÉ DE MEMBRE</h2>
          <p>La qualité de membre se perd par :</p>
          <ul>
            <li>
              la démission – celle-ci doit être adressée au président du bureau et n'a pas vocation à être justifiée ;
            </li>
            <li>
              la radiation prononcée par le bureau pour non-paiement de la cotisation, non-respect des contraintes de la 
              licence libre NumaHOP ou pour motif grave, c'est à dire toute action de nature à porter préjudice, directement ou 
              indirectement, aux activités de l'association ou à sa réputation, l'intéressé ayant été invité à fournir des 
              explications devant le bureau et/ou par écrit.
            </li>
          </ul>

          <h2>ARTICLE 10 – AFFILIATION</h2>
          <p>Elle peut par ailleurs adhérer à d'autres associations, unions ou regroupements par décision du bureau.</p>

          <h2>ARTICLE 11 – ASSEMBLÉE GÉNÉRALE</h2>
          <p>
            L'assemblée comprend tous les membres à jour de leur cotisation au 31 décembre de l'année précédant la date de 
            l'assemblée générale ou pour l'année en cours. Chaque membre peut se faire représenter par un autre membre de son 
            choix. Le nombre de pouvoirs est limité à deux par membre présent.
          </p>
          <p>
            Les membres sont convoqués au plus tard 15 jours avant la date fixée pour l'assemblée générale, par voie électronique. 
            L'ordre du jour figure sur la convocation. Toute proposition de modification de l'ordre du jour devra être déposée 
            huit jours ouvrés au moins avant la réunion et sera soumise à l'assemblée.
          </p>
          <p>
            L'assemblée générale ordinaire se réunit chaque année, en présentiel ou en visioconférence. Les décisions sont 
            prises à la majorité des membres présents ou représentés. Les décisions des assemblées générales s'imposent à 
            tous les membres, y compris absents ou représentés.
          </p>
          <p>
            Le président, assisté des membres du bureau, préside l'assemblée et expose la situation morale de l'association. Le 
            trésorier rend compte de sa gestion et soumet le bilan à l'approbation de l'assemblée. Les résultats du vote pour 
            l'élection du bureau sont communiqués lors de l'assemblée générale. Un procès-verbal de la réunion sera établi.
          </p>
          <p>Toutes les délibérations sont prises à main levée ou par vote électronique.</p>
          <p>
            Les décisions de l'assemblée générale statuant à titre ordinaire sont prises à la majorité absolue des membres 
            présents ou représentés.
          </p>
          <p>
            L'assemblée générale ne peut valablement délibérer que si un tiers au moins de ses membres est présent ou représenté. 
            Si le quorum n'est pas atteint, une nouvelle assemblée générale peut être convoquée dans un délai de 15 jours minimum 
            sans nécessité de quorum.
          </p>

          <h2>ARTICLE 12 – RÈGLEMENT INTÉRIEUR</h2>
          <p>
            Un règlement intérieur peut être établi par le bureau, et auquel cas il est soumis pour approbation à l'assemblée 
            générale. Ce règlement s'impose à tous les membres de l'association et est destiné à fixer les divers points non 
            prévus par les présents statuts, notamment ceux qui ont trait à l'administration interne de l'association.
          </p>

          <h2>ARTICLE 13 – DISSOLUTION</h2>
          <p>
            En cas de dissolution de l'association, l'assemblée générale désigne un ou plusieurs liquidateurs chargés de la 
            liquidation des biens de l'association. L'actif net de l'association sera attribué conformément à la loi.
          </p>

          <p>
            <em><a href="https://annuaire-entreprises.data.gouv.fr/entreprise/association-numahop-924455132#etablissements">Statuts déposés le 22 janvier 2026</a> <FontAwesomeIcon icon={faExternalLinkAlt} />.</em>
          </p>
        </div>
      </div>
    </Layout>
  );
}
