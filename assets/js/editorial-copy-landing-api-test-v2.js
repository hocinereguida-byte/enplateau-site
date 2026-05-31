/*
  Scènes d'Arbitrage — Contenus publics de landing API test V2
  Version : 2026-05-31-pertinence-v1

  Rôle provisoire :
  - porter les contenus éditoriaux relus pour les landings de test ;
  - simuler la structure qui devra ensuite être servie par le Worker / KV ;
  - éviter toute rédaction ou répartition automatique par render-landing-api-test-v2.js.

  À retirer du chargement public lorsque le Worker renverra data.public_copy.pertinence.
*/
(function () {
  "use strict";

  window.SDALandingCopyTestV2 = {
    version: "2026-05-31-conversation-v9",
    items: {
      "CA24C4G": {
        cast: "CA24C4G",
        organisation: "Argon & Co",
        intervenant: "Aldric Vignon",
        copy_status: "reviewed_for_test",
        pertinence: {
          organisation: {
            title: "Opérations, supply chain et interdépendances industrielles",
            summary: "Argon & Co pourrait apporter une lecture issue de son expérience des opérations, de la supply chain et de l’excellence opérationnelle.",
            detail: "Dans cette conversation, cette expérience pourrait aider à éclairer les interdépendances industrielles qui accompagnent une trajectoire de croissance."
          },
          intervenant: {
            title: "Interdépendances décisives d’une trajectoire de croissance",
            summary: "Le profil d’Aldric Vignon pourrait permettre d’éclairer les interdépendances qui deviennent décisives dans une trajectoire de croissance industrielle.",
            detail: "Son expérience en operations strategy, procurement performance, sourcing et transformation des relations fournisseurs devrait permettre d’aborder les coopérations, les capacités mobilisables et les arbitrages de compétitivité associés."
          },
          lecture: {
            title: "Anticiper les interdépendances qui deviennent décisives dans une trajectoire de croissance industrielle",
            summary: "La lecture proposée porterait sur la chaîne de valeur et les choix d’organisation associés, plutôt que sur une expertise achats isolée.",
            detail: ""
          }
        }
      },
      "CKLJYPN": {
        cast: "CKLJYPN",
        organisation: "AlixPartners",
        intervenant: "Patrick Alves",
        copy_status: "reviewed_for_test",
        pertinence: {
          organisation: {
            title: "Trajectoires industrielles, performance et transformation",
            summary: "AlixPartners pourrait apporter une lecture des arbitrages économiques et financiers qui orientent une trajectoire industrielle.",
            detail: "Son expérience de la performance et de la transformation opérationnelle pourrait permettre d’éclairer la continuité, la transformation ou la réorientation d’une trajectoire."
          },
          intervenant: {
            title: "Relier décisions financières et capacité d’avenir",
            summary: "Le profil de Patrick Alves pourrait permettre d’éclairer les arbitrages économiques qui conditionnent la capacité d’avenir d’une trajectoire industrielle.",
            detail: "Son expérience de direction financière et d’accompagnement de transformations devrait permettre d’aborder les choix de cash, d’investissement et de valeur à long terme."
          },
          lecture: {
            title: "Préserver la capacité d’avenir quand les arbitrages économiques deviennent plus décisifs",
            summary: "La lecture proposée porterait sur l’articulation entre décisions économiques immédiates et trajectoire future, sans exposer de situation confidentielle.",
            detail: ""
          }
        }
      }
    },
    angleDetails: {
      "IND-C2-CST-01": {
        title: "Comment anticiper les interdépendances qui deviennent décisives dans une trajectoire de croissance industrielle ?",
        intro: "Une trajectoire de croissance industrielle ne dépend pas seulement de la demande ou de la capacité interne. Elle repose aussi sur des partenaires, des flux, des fournisseurs, des infrastructures, des compétences, des systèmes et des écosystèmes qui rendent cette trajectoire possible.",
        source: "anglePublic.accrocheLanding",
        status: "validated_for_test"
      },
      "IND-C1-ASC-01": {
        title: "Comment préserver la capacité d’avenir quand les arbitrages économiques deviennent plus décisifs ?",
        intro: "La lecture financière permet de reconnaître ce qu’il faut préserver pour que l’organisation conserve sa capacité à investir, transformer et piloter sa trajectoire industrielle.",
        source: "anglePublic.accrocheLanding",
        status: "validated_for_test"
      }
    }
  };
})();
