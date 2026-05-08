window.EN_PLATEAU_EDITORIAL_DATA = {
  "version": "2026-04-17",
  "sourceWorkbook": "referentiel_tunnel_final_en_plateau.xlsx",
  "notes": {
    "publicCycleLabels": true,
    "sourceLabelsRetained": true,
    "oneContextualizedAnglePerRow": true,
    "stableCodesRequired": true
  },
  "cycles": [
    {
      "code": "LOG",
      "label": "Logement & fabrique des territoires",
      "sourceLabel": "Production & transformation immobilière",
      "description": "Ce cycle regroupe des conversations structurantes sur les chaînes de décision de la promotion, de la production et de la transformation immobilière.",
      "contexts": [
        {
          "code": "TEN",
          "label": "Territoires en tension",
          "description": "Dans les territoires en tension, la rareté du foncier et la pression à produire coexistent avec des limites fortes de densité, d’acceptabilité et de soutenabilité."
        },
        {
          "code": "CRO",
          "label": "Territoires en croissance",
          "description": "Dans les territoires en croissance, le projet doit se caler sur la maturité réelle du marché, des usages et des équipements, sans aller plus vite que le territoire."
        },
        {
          "code": "REC",
          "label": "Territoires en reconversion",
          "description": "Dans les territoires en reconversion, la faisabilité dépend souvent d’un temps long, d’un portage patient et d’une capacité à traiter les passifs techniques, fonciers et symboliques."
        }
      ],
      "conversations": [
        {
          "code": "C1",
          "title": "À quel moment une opération ne tient plus ?",
          "tension": "Faisabilité apparente vs perte réelle d’équilibre économique",
          "description": "Quatre angles pour lire le moment où la faisabilité apparente d’une opération ne suffit plus à masquer la perte réelle d’équilibre économique.",
          "contexts": [
            {
              "code": "TEN",
              "label": "Territoires en tension",
              "description": "Dans les territoires en tension, la rareté du foncier et la pression à produire coexistent avec des limites fortes de densité, d’acceptabilité et de soutenabilité.",
              "angles": [
                {
                  "code": "A01",
                  "fullCode": "LOG-C1-TEN-A01",
                  "motherAngle": "À partir de quand le prix de sortie ou le niveau de loyer ne couvre-t-il plus l’équilibre réel de l’opération ?",
                  "question": "À partir de quand, malgré une demande présente, le prix de sortie ou le niveau de loyer dépasse-t-il ce que le marché solvable peut encore absorber ?",
                  "primaryProfile": "Conseil financement / investissement immobilier",
                  "alternateProfile": "Conseil marché / valorisation / commercialisation",
                  "profiles": [
                    "Conseil financement / investissement immobilier",
                    "Conseil marché / valorisation / commercialisation"
                  ]
                },
                {
                  "code": "A02",
                  "fullCode": "LOG-C1-TEN-A02",
                  "motherAngle": "Quels coûts ne peuvent plus être absorbés sans dégrader le projet ou le rendre artificiellement tenable ?",
                  "question": "Quels coûts — foncier, complexité technique, contraintes réglementaires, site dense — ne peuvent plus être absorbés sans dégrader fortement le produit ou le montage ?",
                  "primaryProfile": "Économie de projet / cost management",
                  "alternateProfile": "BET / ingénierie / faisabilité en site contraint",
                  "profiles": [
                    "Économie de projet / cost management",
                    "BET / ingénierie / faisabilité en site contraint"
                  ]
                },
                {
                  "code": "A03",
                  "fullCode": "LOG-C1-TEN-A03",
                  "motherAngle": "À partir de quand continue-t-on à lancer ou maintenir une opération dont on sait qu’elle ne tient plus vraiment ?",
                  "question": "À partir de quand continue-t-on à lancer ou maintenir une opération en misant sur la rareté ou sur une hausse future, alors que son équilibre réel est déjà dégradé ?",
                  "primaryProfile": "Asset strategy / montage d’opération",
                  "alternateProfile": "Financement / conseil marché",
                  "profiles": [
                    "Asset strategy / montage d’opération",
                    "Financement / conseil marché"
                  ]
                },
                {
                  "code": "A04",
                  "fullCode": "LOG-C1-TEN-A04",
                  "motherAngle": "À quel moment le produit ne rencontre-t-il plus son marché, même si l’opération paraît encore tenable sur le papier ?",
                  "question": "À quel moment un produit devient-il inadapté malgré la pression de la demande : trop cher, mal typé, trop dense ou mal positionné ?",
                  "primaryProfile": "Conseil marché / commercialisation / valorisation",
                  "alternateProfile": "Asset strategy / programmation",
                  "profiles": [
                    "Conseil marché / commercialisation / valorisation",
                    "Asset strategy / programmation"
                  ]
                }
              ]
            },
            {
              "code": "CRO",
              "label": "Territoires en croissance",
              "description": "Dans les territoires en croissance, le projet doit se caler sur la maturité réelle du marché, des usages et des équipements, sans aller plus vite que le territoire.",
              "angles": [
                {
                  "code": "A01",
                  "fullCode": "LOG-C1-CRO-A01",
                  "motherAngle": "À partir de quand le prix de sortie ou le niveau de loyer ne couvre-t-il plus l’équilibre réel de l’opération ?",
                  "question": "À partir de quand le projet est-il trop en avance sur la solvabilité réelle du marché local ou sur sa profondeur effective ?",
                  "primaryProfile": "Conseil marché / programmation / développement",
                  "alternateProfile": "Financement immobilier / valorisation",
                  "profiles": [
                    "Conseil marché / programmation / développement",
                    "Financement immobilier / valorisation"
                  ]
                },
                {
                  "code": "A02",
                  "fullCode": "LOG-C1-CRO-A02",
                  "motherAngle": "Quels coûts ne peuvent plus être absorbés sans dégrader le projet ou le rendre artificiellement tenable ?",
                  "question": "Quels coûts liés au phasage, aux équipements, aux adaptations de site ou aux infrastructures font-ils basculer l’opération hors d’un équilibre soutenable ?",
                  "primaryProfile": "Économie de projet / AMO de développement",
                  "alternateProfile": "Ingénierie urbaine / programmation",
                  "profiles": [
                    "Économie de projet / AMO de développement",
                    "Ingénierie urbaine / programmation"
                  ]
                },
                {
                  "code": "A03",
                  "fullCode": "LOG-C1-CRO-A03",
                  "motherAngle": "À partir de quand continue-t-on à lancer ou maintenir une opération dont on sait qu’elle ne tient plus vraiment ?",
                  "question": "À partir de quand un récit de croissance territoriale sert-il à maintenir un projet trop en avance sur ses conditions réelles de faisabilité ?",
                  "primaryProfile": "Programmation / stratégie de développement",
                  "alternateProfile": "Conseil marché / valorisation",
                  "profiles": [
                    "Programmation / stratégie de développement",
                    "Conseil marché / valorisation"
                  ]
                },
                {
                  "code": "A04",
                  "fullCode": "LOG-C1-CRO-A04",
                  "motherAngle": "À quel moment le produit ne rencontre-t-il plus son marché, même si l’opération paraît encore tenable sur le papier ?",
                  "question": "À quel moment le produit proposé arrive-t-il trop tôt, trop vite ou dans un format que le marché local n’absorbe pas encore ?",
                  "primaryProfile": "Programmation / conseil marché",
                  "alternateProfile": "Développement / commercialisation",
                  "profiles": [
                    "Programmation / conseil marché",
                    "Développement / commercialisation"
                  ]
                }
              ]
            },
            {
              "code": "REC",
              "label": "Territoires en reconversion",
              "description": "Dans les territoires en reconversion, la faisabilité dépend souvent d’un temps long, d’un portage patient et d’une capacité à traiter les passifs techniques, fonciers et symboliques.",
              "angles": [
                {
                  "code": "A01",
                  "fullCode": "LOG-C1-REC-A01",
                  "motherAngle": "À partir de quand le prix de sortie ou le niveau de loyer ne couvre-t-il plus l’équilibre réel de l’opération ?",
                  "question": "À partir de quand l’équilibre de l’opération dépend-il trop d’aides, de décotes foncières ou de compensations externes pour rester tenable ?",
                  "primaryProfile": "Ingénierie financière mixte / montages complexes",
                  "alternateProfile": "Stratégie territoriale / redéveloppement",
                  "profiles": [
                    "Ingénierie financière mixte / montages complexes",
                    "Stratégie territoriale / redéveloppement"
                  ]
                },
                {
                  "code": "A02",
                  "fullCode": "LOG-C1-REC-A02",
                  "motherAngle": "Quels coûts ne peuvent plus être absorbés sans dégrader le projet ou le rendre artificiellement tenable ?",
                  "question": "Quels coûts de dépollution, de remise à niveau, de portage ou de traitement de l’existant rendent l’opération dépendante d’un soutien permanent ?",
                  "primaryProfile": "Sites complexes / dépollution / réhabilitation lourde",
                  "alternateProfile": "Économie de projet / ingénierie financière",
                  "profiles": [
                    "Sites complexes / dépollution / réhabilitation lourde",
                    "Économie de projet / ingénierie financière"
                  ]
                },
                {
                  "code": "A03",
                  "fullCode": "LOG-C1-REC-A03",
                  "motherAngle": "À partir de quand continue-t-on à lancer ou maintenir une opération dont on sait qu’elle ne tient plus vraiment ?",
                  "question": "À partir de quand une opération n’est-elle plus portée par son économie propre, mais seulement par une volonté politique, une inertie foncière ou un espoir de retournement ?",
                  "primaryProfile": "Stratégie territoriale / AMO de reconversion",
                  "alternateProfile": "Ingénierie financière mixte / redéveloppement",
                  "profiles": [
                    "Stratégie territoriale / AMO de reconversion",
                    "Ingénierie financière mixte / redéveloppement"
                  ]
                },
                {
                  "code": "A04",
                  "fullCode": "LOG-C1-REC-A04",
                  "motherAngle": "À quel moment le produit ne rencontre-t-il plus son marché, même si l’opération paraît encore tenable sur le papier ?",
                  "question": "À quel moment le produit visé n’est-il pas relié à des usages, des ménages, des entreprises ou des investisseurs réellement présents ou mobilisables ?",
                  "primaryProfile": "Études de marché / redéveloppement / valorisation",
                  "alternateProfile": "Stratégie territoriale / programmation",
                  "profiles": [
                    "Études de marché / redéveloppement / valorisation",
                    "Stratégie territoriale / programmation"
                  ]
                }
              ]
            }
          ]
        },
        {
          "code": "C2",
          "title": "Jusqu’où un territoire peut-il encore absorber de la construction ?",
          "tension": "Capacité projetée du territoire vs capacité réelle d’absorption",
          "description": "Quatre angles pour mesurer jusqu’où un territoire peut absorber de la construction en rythme, en usages, en équipements et en acceptabilité.",
          "contexts": [
            {
              "code": "TEN",
              "label": "Territoires en tension",
              "description": "Dans les territoires en tension, la rareté du foncier et la pression à produire coexistent avec des limites fortes de densité, d’acceptabilité et de soutenabilité.",
              "angles": [
                {
                  "code": "A05",
                  "fullCode": "LOG-C2-TEN-A05",
                  "motherAngle": "À partir de quand la production projetée dépasse-t-elle ce qu’un territoire peut réellement absorber en rythme, en usages ou en solvabilité ?",
                  "question": "À partir de quand la pression à produire dépasse-t-elle ce que le territoire peut encore absorber en densité, en mobilités, en services ou en solvabilité ?",
                  "primaryProfile": "Programmation / stratégie territoriale",
                  "alternateProfile": "Conseil marché / urbanisme opérationnel",
                  "profiles": [
                    "Programmation / stratégie territoriale",
                    "Conseil marché / urbanisme opérationnel"
                  ]
                },
                {
                  "code": "A06",
                  "fullCode": "LOG-C2-TEN-A06",
                  "motherAngle": "À partir de quand un projet ne peut-il plus être politiquement, socialement ou symboliquement absorbé sans contreparties qui changent son équilibre ?",
                  "question": "À partir de quand la densification, la hauteur, la mixité ou la pression sur le quartier rendent-elles le projet localement inacceptable sans concessions majeures ?",
                  "primaryProfile": "Concertation / acceptabilité / programmation urbaine",
                  "alternateProfile": "Urbanisme opérationnel / AMO",
                  "profiles": [
                    "Concertation / acceptabilité / programmation urbaine",
                    "Urbanisme opérationnel / AMO"
                  ]
                },
                {
                  "code": "A07",
                  "fullCode": "LOG-C2-TEN-A07",
                  "motherAngle": "À partir de quand le cadre réglementaire, les réseaux ou les infrastructures cessent-ils de rendre l’opération réaliste ?",
                  "question": "À partir de quand règles d’urbanisme, servitudes, stationnement, réseaux ou contraintes de site dense cessent-ils de rendre l’opération réaliste ?",
                  "primaryProfile": "Juridique urbanisme / construction",
                  "alternateProfile": "BET / ingénierie / AMO complexe",
                  "profiles": [
                    "Juridique urbanisme / construction",
                    "BET / ingénierie / AMO complexe"
                  ]
                },
                {
                  "code": "A08",
                  "fullCode": "LOG-C2-TEN-A08",
                  "motherAngle": "À quel moment le décalage entre temporalité du projet et temporalité du territoire fragilise-t-il l’opération ?",
                  "question": "À quel moment les délais d’autorisation, de concertation, de recours ou de libération foncière font-ils manquer la bonne fenêtre de marché ?",
                  "primaryProfile": "AMO / montage d’opération / juridique urbanisme",
                  "alternateProfile": "Financement / asset strategy",
                  "profiles": [
                    "AMO / montage d’opération / juridique urbanisme",
                    "Financement / asset strategy"
                  ]
                }
              ]
            },
            {
              "code": "CRO",
              "label": "Territoires en croissance",
              "description": "Dans les territoires en croissance, le projet doit se caler sur la maturité réelle du marché, des usages et des équipements, sans aller plus vite que le territoire.",
              "angles": [
                {
                  "code": "A05",
                  "fullCode": "LOG-C2-CRO-A05",
                  "motherAngle": "À partir de quand la production projetée dépasse-t-elle ce qu’un territoire peut réellement absorber en rythme, en usages ou en solvabilité ?",
                  "question": "À partir de quand les volumes projetés vont-ils plus vite que la capacité réelle du territoire à suivre en équipements, usages et profondeur de marché ?",
                  "primaryProfile": "Programmation / développement territorial",
                  "alternateProfile": "Économie de projet / ingénierie urbaine",
                  "profiles": [
                    "Programmation / développement territorial",
                    "Économie de projet / ingénierie urbaine"
                  ]
                },
                {
                  "code": "A06",
                  "fullCode": "LOG-C2-CRO-A06",
                  "motherAngle": "À partir de quand un projet ne peut-il plus être politiquement, socialement ou symboliquement absorbé sans contreparties qui changent son équilibre ?",
                  "question": "À partir de quand le projet n’est-il plus perçu comme une réponse au développement, mais comme une accélération mal synchronisée avec le territoire et ses habitants ?",
                  "primaryProfile": "Concertation / programmation / stratégie territoriale",
                  "alternateProfile": "Développement territorial / urbanisme",
                  "profiles": [
                    "Concertation / programmation / stratégie territoriale",
                    "Développement territorial / urbanisme"
                  ]
                },
                {
                  "code": "A07",
                  "fullCode": "LOG-C2-CRO-A07",
                  "motherAngle": "À partir de quand le cadre réglementaire, les réseaux ou les infrastructures cessent-ils de rendre l’opération réaliste ?",
                  "question": "À partir de quand le décalage entre projet et infrastructures disponibles — mobilités, réseaux, équipements — empêche-t-il de produire au rythme envisagé ?",
                  "primaryProfile": "Ingénierie urbaine / programmation",
                  "alternateProfile": "Juridique urbanisme / stratégie territoriale",
                  "profiles": [
                    "Ingénierie urbaine / programmation",
                    "Juridique urbanisme / stratégie territoriale"
                  ]
                },
                {
                  "code": "A08",
                  "fullCode": "LOG-C2-CRO-A08",
                  "motherAngle": "À quel moment le décalage entre temporalité du projet et temporalité du territoire fragilise-t-il l’opération ?",
                  "question": "À quel moment le projet arrive-t-il trop tôt ou trop tard par rapport à la maturité réelle du territoire, à ses équipements et à sa trajectoire d’usages ?",
                  "primaryProfile": "Programmation / développement / phasage",
                  "alternateProfile": "Conseil marché / stratégie territoriale",
                  "profiles": [
                    "Programmation / développement / phasage",
                    "Conseil marché / stratégie territoriale"
                  ]
                }
              ]
            },
            {
              "code": "REC",
              "label": "Territoires en reconversion",
              "description": "Dans les territoires en reconversion, la faisabilité dépend souvent d’un temps long, d’un portage patient et d’une capacité à traiter les passifs techniques, fonciers et symboliques.",
              "angles": [
                {
                  "code": "A05",
                  "fullCode": "LOG-C2-REC-A05",
                  "motherAngle": "À partir de quand la production projetée dépasse-t-elle ce qu’un territoire peut réellement absorber en rythme, en usages ou en solvabilité ?",
                  "question": "À partir de quand la production envisagée dépasse-t-elle ce que le territoire peut absorber sans accompagnement, rééchelonnement ou reconfiguration lourde ?",
                  "primaryProfile": "Stratégie territoriale / AMO de reconversion",
                  "alternateProfile": "Ingénierie financière mixte / redéveloppement",
                  "profiles": [
                    "Stratégie territoriale / AMO de reconversion",
                    "Ingénierie financière mixte / redéveloppement"
                  ]
                },
                {
                  "code": "A06",
                  "fullCode": "LOG-C2-REC-A06",
                  "motherAngle": "À partir de quand un projet ne peut-il plus être politiquement, socialement ou symboliquement absorbé sans contreparties qui changent son équilibre ?",
                  "question": "À partir de quand l’histoire du lieu, la mémoire du site ou les attentes locales rendent-elles impossible une opération sans travail de requalification symbolique et politique ?",
                  "primaryProfile": "Concertation / redéveloppement territorial",
                  "alternateProfile": "AMO / stratégie territoriale",
                  "profiles": [
                    "Concertation / redéveloppement territorial",
                    "AMO / stratégie territoriale"
                  ]
                },
                {
                  "code": "A07",
                  "fullCode": "LOG-C2-REC-A07",
                  "motherAngle": "À partir de quand le cadre réglementaire, les réseaux ou les infrastructures cessent-ils de rendre l’opération réaliste ?",
                  "question": "À partir de quand le cadre réglementaire, environnemental, patrimonial ou de réseaux fait-il d’un site un projet possible sur le papier mais très fragile en exécution ?",
                  "primaryProfile": "Sites complexes / ingénierie réglementaire / juridique",
                  "alternateProfile": "AMO de reconversion / faisabilité technique",
                  "profiles": [
                    "Sites complexes / ingénierie réglementaire / juridique",
                    "AMO de reconversion / faisabilité technique"
                  ]
                },
                {
                  "code": "A08",
                  "fullCode": "LOG-C2-REC-A08",
                  "motherAngle": "À quel moment le décalage entre temporalité du projet et temporalité du territoire fragilise-t-il l’opération ?",
                  "question": "À quel moment le temps nécessaire pour dépolluer, assembler, sécuriser et reprogrammer dépasse-t-il la patience économique et politique disponible ?",
                  "primaryProfile": "Redéveloppement / portage / stratégie territoriale",
                  "alternateProfile": "Sites complexes / ingénierie financière mixte",
                  "profiles": [
                    "Redéveloppement / portage / stratégie territoriale",
                    "Sites complexes / ingénierie financière mixte"
                  ]
                }
              ]
            }
          ]
        },

        {
          "code": "C3",
          "title": "Transformer ou reconstruire ?",
          "tension": "Valeur de transformation affichée vs faisabilité réelle de la mutation",
          "description": "Quatre angles pour arbitrer entre transformation, reconstruction ou renonciation, selon la réalité technique, économique, foncière et assurantielle du site.",
          "contexts": [
            {
              "code": "TEN",
              "label": "Territoires en tension",
              "description": "Dans les territoires en tension, la rareté du foncier et la pression à produire coexistent avec des limites fortes de densité, d’acceptabilité et de soutenabilité.",
              "angles": [
                {
                  "code": "A09",
                  "fullCode": "LOG-C3-TEN-A09",
                  "motherAngle": "À partir de quand la transformation d’un actif ou d’un site n’est-elle plus techniquement ou économiquement crédible ?",
                  "question": "À partir de quand la transformation devient-elle moins crédible qu’elle n’en a l’air dans un site dense, occupé ou fortement normé ?",
                  "primaryProfile": "BET / ingénierie / faisabilité de transformation",
                  "alternateProfile": "Asset strategy / redéveloppement",
                  "profiles": [
                    "BET / ingénierie / faisabilité de transformation",
                    "Asset strategy / redéveloppement"
                  ]
                },
                {
                  "code": "A10",
                  "fullCode": "LOG-C3-TEN-A10",
                  "motherAngle": "Quels surcoûts ou aléas font basculer l’arbitrage vers la reconstruction ou la renonciation ?",
                  "question": "Quels aléas de structure, de voisinage, d’occupation ou de site dense font-ils basculer la transformation hors d’un coût acceptable ?",
                  "primaryProfile": "Économie de projet / cost management",
                  "alternateProfile": "BET / structure / site complexe",
                  "profiles": [
                    "Économie de projet / cost management",
                    "BET / structure / site complexe"
                  ]
                },
                {
                  "code": "A11",
                  "fullCode": "LOG-C3-TEN-A11",
                  "motherAngle": "À quelles conditions l’occupation, la propriété fragmentée ou l’usage existant rendent-ils la transformation beaucoup plus difficile qu’annoncé ?",
                  "question": "À quelles conditions la copropriété, l’occupation, l’exploitation en place ou la fragmentation des droits rendent-elles la transformation presque irréaliste ?",
                  "primaryProfile": "Foncier / copropriété / propriété fragmentée",
                  "alternateProfile": "Juridique immobilier / montage d’opération",
                  "profiles": [
                    "Foncier / copropriété / propriété fragmentée",
                    "Juridique immobilier / montage d’opération"
                  ]
                },
                {
                  "code": "A12",
                  "fullCode": "LOG-C3-TEN-A12",
                  "motherAngle": "À partir de quand la transformation elle-même devient-elle difficile à sécuriser techniquement, juridiquement ou assurantiellement ?",
                  "question": "À partir de quand l’environnement technique, juridique ou assurantiel d’un site dense fait-il de la transformation un exercice presque inassurable ou difficilement sécurisable ?",
                  "primaryProfile": "Assurance / risk management / audit de risque",
                  "alternateProfile": "Juridique immobilier / BET",
                  "profiles": [
                    "Assurance / risk management / audit de risque",
                    "Juridique immobilier / BET"
                  ]
                }
              ]
            },
            {
              "code": "CRO",
              "label": "Territoires en croissance",
              "description": "Dans les territoires en croissance, le projet doit se caler sur la maturité réelle du marché, des usages et des équipements, sans aller plus vite que le territoire.",
              "angles": [
                {
                  "code": "A09",
                  "fullCode": "LOG-C3-CRO-A09",
                  "motherAngle": "À partir de quand la transformation d’un actif ou d’un site n’est-elle plus techniquement ou économiquement crédible ?",
                  "question": "À partir de quand transformer un actif existant devient-il moins pertinent qu’une reconstruction ou qu’un redéploiement plus rapide et mieux calibré ?",
                  "primaryProfile": "Asset strategy / redéveloppement",
                  "alternateProfile": "Programmation / développement",
                  "profiles": [
                    "Asset strategy / redéveloppement",
                    "Programmation / développement"
                  ]
                },
                {
                  "code": "A10",
                  "fullCode": "LOG-C3-CRO-A10",
                  "motherAngle": "Quels surcoûts ou aléas font basculer l’arbitrage vers la reconstruction ou la renonciation ?",
                  "question": "Quels surcoûts de phasage, de maintien d’activité, d’adaptation ou de remise à niveau font-ils perdre à la transformation son avantage apparent ?",
                  "primaryProfile": "Économie de projet / AMO de transformation",
                  "alternateProfile": "Conduite d’opération / OPC",
                  "profiles": [
                    "Économie de projet / AMO de transformation",
                    "Conduite d’opération / OPC"
                  ]
                },
                {
                  "code": "A11",
                  "fullCode": "LOG-C3-CRO-A11",
                  "motherAngle": "À quelles conditions l’occupation, la propriété fragmentée ou l’usage existant rendent-ils la transformation beaucoup plus difficile qu’annoncé ?",
                  "question": "À partir de quand la pluralité d’usages, de propriétaires ou de temporalités d’occupation empêche-t-elle de transformer au rythme voulu ?",
                  "primaryProfile": "Foncier / montages / propriété fragmentée",
                  "alternateProfile": "Programmation / exploitation / asset management",
                  "profiles": [
                    "Foncier / montages / propriété fragmentée",
                    "Programmation / exploitation / asset management"
                  ]
                },
                {
                  "code": "A12",
                  "fullCode": "LOG-C3-CRO-A12",
                  "motherAngle": "À partir de quand la transformation elle-même devient-elle difficile à sécuriser techniquement, juridiquement ou assurantiellement ?",
                  "question": "À partir de quand les interfaces, les responsabilités, le phasage ou le maintien d’usage font-ils de la sécurisation du projet le vrai sujet ?",
                  "primaryProfile": "Conduite d’opération / OPC / chaîne de réalisation",
                  "alternateProfile": "Assurance / risk management / juridique",
                  "profiles": [
                    "Conduite d’opération / OPC / chaîne de réalisation",
                    "Assurance / risk management / juridique"
                  ]
                }
              ]
            },
            {
              "code": "REC",
              "label": "Territoires en reconversion",
              "description": "Dans les territoires en reconversion, la faisabilité dépend souvent d’un temps long, d’un portage patient et d’une capacité à traiter les passifs techniques, fonciers et symboliques.",
              "angles": [
                {
                  "code": "A09",
                  "fullCode": "LOG-C3-REC-A09",
                  "motherAngle": "À partir de quand la transformation d’un actif ou d’un site n’est-elle plus techniquement ou économiquement crédible ?",
                  "question": "À partir de quand l’état du site, son passif technique ou environnemental et son marché cible rendent-ils la transformation très difficile à soutenir ?",
                  "primaryProfile": "Sites complexes / dépollution / réhabilitation lourde",
                  "alternateProfile": "Asset strategy / redéveloppement",
                  "profiles": [
                    "Sites complexes / dépollution / réhabilitation lourde",
                    "Asset strategy / redéveloppement"
                  ]
                },
                {
                  "code": "A10",
                  "fullCode": "LOG-C3-REC-A10",
                  "motherAngle": "Quels surcoûts ou aléas font basculer l’arbitrage vers la reconstruction ou la renonciation ?",
                  "question": "Quels aléas de dépollution, de désamiantage, de réseaux, de démolition partielle ou de traitement patrimonial font-ils basculer la décision ?",
                  "primaryProfile": "Sites complexes / cost management / ingénierie technique",
                  "alternateProfile": "Patrimoine / réhabilitation / AMO",
                  "profiles": [
                    "Sites complexes / cost management / ingénierie technique",
                    "Patrimoine / réhabilitation / AMO"
                  ]
                },
                {
                  "code": "A11",
                  "fullCode": "LOG-C3-REC-A11",
                  "motherAngle": "À quelles conditions l’occupation, la propriété fragmentée ou l’usage existant rendent-ils la transformation beaucoup plus difficile qu’annoncé ?",
                  "question": "À partir de quand l’enchevêtrement de propriétaires, d’occupations résiduelles, de vacance et de statuts publics/privés bloque-t-il la mutation du site ?",
                  "primaryProfile": "Foncier / montages / propriété fragmentée",
                  "alternateProfile": "Redéveloppement / stratégie territoriale",
                  "profiles": [
                    "Foncier / montages / propriété fragmentée",
                    "Redéveloppement / stratégie territoriale"
                  ]
                },
                {
                  "code": "A12",
                  "fullCode": "LOG-C3-REC-A12",
                  "motherAngle": "À partir de quand la transformation elle-même devient-elle difficile à sécuriser techniquement, juridiquement ou assurantiellement ?",
                  "question": "À partir de quand la transformation d’un site complexe n’est-elle plus freinée par l’idée du projet, mais par l’impossibilité de le sécuriser techniquement, juridiquement et assurantiellement ?",
                  "primaryProfile": "Assurance / risk management / audit de risque",
                  "alternateProfile": "Juridique immobilier / sites complexes",
                  "profiles": [
                    "Assurance / risk management / audit de risque",
                    "Juridique immobilier / sites complexes"
                  ]
                }
              ]
            }
          ]
        },
        {
          "code": "C4",
          "title": "Qu’est-ce qui permet encore à une opération de se faire ?",
          "tension": "Intention de projet vs conditions réelles de décision, de portage et d’exécution",
          "description": "Quatre angles pour identifier ce qui permet encore à une opération de devenir opérante, tenable et exécutable malgré la fragmentation des décisions et des risques.",
          "contexts": [
            {
              "code": "TEN",
              "label": "Territoires en tension",
              "description": "Dans les territoires en tension, la rareté du foncier et la pression à produire coexistent avec des limites fortes de densité, d’acceptabilité et de soutenabilité.",
              "angles": [
                {
                  "code": "A13",
                  "fullCode": "LOG-C4-TEN-A13",
                  "motherAngle": "À partir de quand l’empilement des décideurs, valideurs, financeurs et partenaires empêche-t-il qu’une décision devienne réellement opérante ?",
                  "question": "À partir de quand la multiplication des valideurs — collectivité, financeurs, copropriétaires, riverains, opérateurs — empêche-t-elle qu’une décision se traduise en acte ?",
                  "primaryProfile": "AMO / programmation / montage d’opération",
                  "alternateProfile": "Juridique / urbanisme / concertation",
                  "profiles": [
                    "AMO / programmation / montage d’opération",
                    "Juridique / urbanisme / concertation"
                  ]
                },
                {
                  "code": "A14",
                  "fullCode": "LOG-C4-TEN-A14",
                  "motherAngle": "À partir de quand le partage des risques au niveau de l’opération ne produit-il plus de sécurité collective, mais une dilution qui fragilise le portage du projet ?",
                  "question": "À partir de quand la répartition des risques entre opérateur, investisseur, entreprises, assureurs et collectivités ne protège-t-elle plus l’opération, mais la rend-elle plus incertaine ?",
                  "primaryProfile": "Assurance / risk management / montage contractuel",
                  "alternateProfile": "Investissement / opérateur / juridique",
                  "profiles": [
                    "Assurance / risk management / montage contractuel",
                    "Investissement / opérateur / juridique"
                  ]
                },
                {
                  "code": "A15",
                  "fullCode": "LOG-C4-TEN-A15",
                  "motherAngle": "À quelles conditions le portage dans le temps — phasage, attente, immobilisation du capital — reste-t-il encore soutenable ?",
                  "question": "À quelles conditions le portage foncier, les délais de recours, l’attente réglementaire ou l’immobilisation du capital restent-ils encore soutenables ?",
                  "primaryProfile": "Conseil financement / investissement immobilier",
                  "alternateProfile": "Portage foncier / asset strategy",
                  "profiles": [
                    "Conseil financement / investissement immobilier",
                    "Portage foncier / asset strategy"
                  ]
                },
                {
                  "code": "A16",
                  "fullCode": "LOG-C4-TEN-A16",
                  "motherAngle": "À partir de quand la chaîne de réalisation — entreprises, interfaces, disponibilité, assurances, exécution — devient-elle le vrai facteur limitant ?",
                  "question": "À partir de quand la rareté des entreprises, la complexité des interfaces, les contraintes logistiques ou assurantielles deviennent-elles le vrai verrou du projet ?",
                  "primaryProfile": "Conduite d’opération / OPC / chaîne de réalisation",
                  "alternateProfile": "Assurance chantier / entreprises / MOEX",
                  "profiles": [
                    "Conduite d’opération / OPC / chaîne de réalisation",
                    "Assurance chantier / entreprises / MOEX"
                  ]
                }
              ]
            },
            {
              "code": "CRO",
              "label": "Territoires en croissance",
              "description": "Dans les territoires en croissance, le projet doit se caler sur la maturité réelle du marché, des usages et des équipements, sans aller plus vite que le territoire.",
              "angles": [
                {
                  "code": "A13",
                  "fullCode": "LOG-C4-CRO-A13",
                  "motherAngle": "À partir de quand l’empilement des décideurs, valideurs, financeurs et partenaires empêche-t-il qu’une décision devienne réellement opérante ?",
                  "question": "À partir de quand la multiplication des parties prenantes ralentit-elle le projet au point de désynchroniser décision, marché et équipements ?",
                  "primaryProfile": "AMO / programmation / coordination territoriale",
                  "alternateProfile": "Développement / stratégie territoriale",
                  "profiles": [
                    "AMO / programmation / coordination territoriale",
                    "Développement / stratégie territoriale"
                  ]
                },
                {
                  "code": "A14",
                  "fullCode": "LOG-C4-CRO-A14",
                  "motherAngle": "À partir de quand le partage des risques au niveau de l’opération ne produit-il plus de sécurité collective, mais une dilution qui fragilise le portage du projet ?",
                  "question": "À partir de quand le partage du risque sur le phasage, les équipements ou les investissements préparatoires fragilise-t-il l’exécution réelle du projet ?",
                  "primaryProfile": "Ingénierie financière / montage d’opération",
                  "alternateProfile": "AMO / développement / opérateur",
                  "profiles": [
                    "Ingénierie financière / montage d’opération",
                    "AMO / développement / opérateur"
                  ]
                },
                {
                  "code": "A15",
                  "fullCode": "LOG-C4-CRO-A15",
                  "motherAngle": "À quelles conditions le portage dans le temps — phasage, attente, immobilisation du capital — reste-t-il encore soutenable ?",
                  "question": "À quelles conditions un phasage long, l’attente de maturité du marché ou la montée progressive des équipements restent-ils compatibles avec la tenue du projet ?",
                  "primaryProfile": "Portage / programmation / investissement",
                  "alternateProfile": "Conseil marché / développement territorial",
                  "profiles": [
                    "Portage / programmation / investissement",
                    "Conseil marché / développement territorial"
                  ]
                },
                {
                  "code": "A16",
                  "fullCode": "LOG-C4-CRO-A16",
                  "motherAngle": "À partir de quand la chaîne de réalisation — entreprises, interfaces, disponibilité, assurances, exécution — devient-elle le vrai facteur limitant ?",
                  "question": "À partir de quand la capacité des entreprises, la coordination des chantiers et le séquencement avec les équipements du territoire empêchent-ils d’exécuter au rythme prévu ?",
                  "primaryProfile": "Conduite d’opération / OPC / coordination de projet",
                  "alternateProfile": "AMO / ingénierie urbaine / entreprises",
                  "profiles": [
                    "Conduite d’opération / OPC / coordination de projet",
                    "AMO / ingénierie urbaine / entreprises"
                  ]
                }
              ]
            },
            {
              "code": "REC",
              "label": "Territoires en reconversion",
              "description": "Dans les territoires en reconversion, la faisabilité dépend souvent d’un temps long, d’un portage patient et d’une capacité à traiter les passifs techniques, fonciers et symboliques.",
              "angles": [
                {
                  "code": "A13",
                  "fullCode": "LOG-C4-REC-A13",
                  "motherAngle": "À partir de quand l’empilement des décideurs, valideurs, financeurs et partenaires empêche-t-il qu’une décision devienne réellement opérante ?",
                  "question": "À partir de quand un projet exige-t-il un tel alignement public-privé, foncier, financier et politique que l’absence d’un seul maillon bloque tout le reste ?",
                  "primaryProfile": "AMO de reconversion / stratégie territoriale",
                  "alternateProfile": "Portage / ingénierie financière mixte",
                  "profiles": [
                    "AMO de reconversion / stratégie territoriale",
                    "Portage / ingénierie financière mixte"
                  ]
                },
                {
                  "code": "A14",
                  "fullCode": "LOG-C4-REC-A14",
                  "motherAngle": "À partir de quand le partage des risques au niveau de l’opération ne produit-il plus de sécurité collective, mais une dilution qui fragilise le portage du projet ?",
                  "question": "À partir de quand la dispersion des risques entre aides publiques, portage foncier, dépollution, exploitation future et opérateurs rend-elle l’opération presque impossible à verrouiller ?",
                  "primaryProfile": "Ingénierie financière mixte / risk management",
                  "alternateProfile": "Portage / redéveloppement / opérateur",
                  "profiles": [
                    "Ingénierie financière mixte / risk management",
                    "Portage / redéveloppement / opérateur"
                  ]
                },
                {
                  "code": "A15",
                  "fullCode": "LOG-C4-REC-A15",
                  "motherAngle": "À quelles conditions le portage dans le temps — phasage, attente, immobilisation du capital — reste-t-il encore soutenable ?",
                  "question": "À quelles conditions un portage long — foncier, dépollution, requalification, reprogrammation — peut-il encore être tenu sans épuiser le projet ?",
                  "primaryProfile": "Portage / redéveloppement / ingénierie financière mixte",
                  "alternateProfile": "Stratégie territoriale / AMO",
                  "profiles": [
                    "Portage / redéveloppement / ingénierie financière mixte",
                    "Stratégie territoriale / AMO"
                  ]
                },
                {
                  "code": "A16",
                  "fullCode": "LOG-C4-REC-A16",
                  "motherAngle": "À partir de quand la chaîne de réalisation — entreprises, interfaces, disponibilité, assurances, exécution — devient-elle le vrai facteur limitant ?",
                  "question": "À partir de quand la transformation exige-t-elle des compétences d’exécution, de dépollution ou de réhabilitation si spécifiques que la chaîne de réalisation devient elle-même le point de bascule ?",
                  "primaryProfile": "Conduite d’opération / réhabilitation lourde / sites complexes",
                  "alternateProfile": "Entreprises spécialisées / assurance / dépollution",
                  "profiles": [
                    "Conduite d’opération / réhabilitation lourde / sites complexes",
                    "Entreprises spécialisées / assurance / dépollution"
                  ]
                }
              ]
            }
          ]
        }
      ]   
    },
    {
      "code": "IND",
      "label": "Industrie & transformation des territoires",
      "sourceLabel": "Industrie",
      "description": "Ce cycle regroupe des conversations structurantes sur les conditions réelles de soutenabilité, de transformation et de redéploiement de l’activité industrielle.",
      "contexts": [
        {
          "code": "GS",
          "label": "Croissance sous tension",
          "description": "Dans un contexte de croissance sous tension, l’activité progresse mais révèle en même temps des fragilités de cadence, d’organisation, de systèmes, de ressources ou d’ancrage territorial."
        },
        {
          "code": "AC",
          "label": "Adaptation sous contrainte",
          "description": "Dans un contexte d’adaptation sous contrainte, l’enjeu n’est plus d’accélérer mais de tenir, d’ajuster et de préserver les marges de manœuvre sans dégrader irréversiblement l’outil."
        },
        {
          "code": "RC",
          "label": "Réinvention sous crise",
          "description": "Dans un contexte de réinvention sous crise, la continuité de l’activité ne peut plus être pensée comme un simple ajustement : elle suppose une rupture de modèle, de périmètre, de process ou de géographie productive."
        }
      ],
      "conversations": [
        {
          "code": "C1",
          "title": "À quel moment produire ne tient plus ?",
          "tension": "Continuité de production vs dégradation réelle de la soutenabilité économique",
          "description": "Quatre angles pour identifier le moment où la continuité apparente de la production masque une dégradation devenue économiquement, techniquement ou temporellement non tenable.",
          "contexts": [
            {
              "code": "GS",
              "label": "Croissance sous tension",
              "description": "Dans un contexte de croissance sous tension, l’activité progresse mais révèle en même temps des fragilités de cadence, d’organisation, de systèmes, de ressources ou d’ancrage territorial.",
              "angles": [
                {
                  "code": "A01",
                  "fullCode": "IND-C1-GS-A01",
                  "motherAngle": "À partir de quand la production détruit-elle de la marge sans que cela apparaisse immédiatement ?",
                  "question": "À partir de quand la hausse d’activité masque-t-elle une destruction de marge liée aux surcoûts de montée en cadence, aux non-qualités ou aux désorganisations ?",
                  "primaryProfile": "Corporate finance / contrôle de gestion industriel",
                  "alternateProfile": "Opérations / performance industrielle",
                  "profiles": [
                    "Corporate finance / contrôle de gestion industriel",
                    "Opérations / performance industrielle"
                  ]
                },
                {
                  "code": "A02",
                  "fullCode": "IND-C1-GS-A02",
                  "motherAngle": "Quels arbitrages de cadence, de stock, de qualité ou de maintenance permettent encore de tenir — mais abîment la suite ?",
                  "question": "Quels arbitrages de cadence, de stocks tampons, de maintenance différée ou de tolérance qualité permettent d’absorber la demande, mais désorganisent l’outil à moyen terme ?",
                  "primaryProfile": "Opérations / supply chain / excellence opérationnelle",
                  "alternateProfile": "Organisation industrielle / lean / modèle opératoire",
                  "profiles": [
                    "Opérations / supply chain / excellence opérationnelle",
                    "Organisation industrielle / lean / modèle opératoire"
                  ]
                },
                {
                  "code": "A03",
                  "fullCode": "IND-C1-GS-A03",
                  "motherAngle": "À partir de quand la dette technologique ou la vétusté de l’outil rendent-elles la production non tenable ?",
                  "question": "À partir de quand un outil saturé, mal interfacé ou insuffisamment modernisé empêche-t-il de franchir un cap de volume, de qualité ou de fiabilité ?",
                  "primaryProfile": "Technologie industrielle / automatisation / OT-IT",
                  "alternateProfile": "PMO industriel / direction technique",
                  "profiles": [
                    "Technologie industrielle / automatisation / OT-IT",
                    "PMO industriel / direction technique"
                  ]
                },
                {
                  "code": "A04",
                  "fullCode": "IND-C1-GS-A04",
                  "motherAngle": "À partir de quand le temps nécessaire pour réinvestir, adapter ou redéployer l’outil devient-il incompatible avec le temps disponible pour tenir l’activité ?",
                  "question": "À partir de quand le délai nécessaire pour recruter, équiper, industrialiser ou sécuriser la montée en capacité devient-il trop long par rapport au rythme imposé par la demande ?",
                  "primaryProfile": "PMO / exécution de transformation industrielle",
                  "alternateProfile": "Corporate finance / CAPEX / investissement industriel",
                  "profiles": [
                    "PMO / exécution de transformation industrielle",
                    "Corporate finance / CAPEX / investissement industriel"
                  ]
                }
              ]
            },
            {
              "code": "AC",
              "label": "Adaptation sous contrainte",
              "description": "Dans un contexte d’adaptation sous contrainte, l’enjeu n’est plus d’accélérer mais de tenir, d’ajuster et de préserver les marges de manœuvre sans dégrader irréversiblement l’outil.",
              "angles": [
                {
                  "code": "A01",
                  "fullCode": "IND-C1-AC-A01",
                  "motherAngle": "À partir de quand la production détruit-elle de la marge sans que cela apparaisse immédiatement ?",
                  "question": "À partir de quand les ajustements défensifs sur les volumes, les achats, les équipes ou la maintenance maintiennent-ils l’activité au prix d’une érosion invisible de la marge ?",
                  "primaryProfile": "Corporate finance / restructuring / contrôle de gestion",
                  "alternateProfile": "Opérations / performance industrielle",
                  "profiles": [
                    "Corporate finance / restructuring / contrôle de gestion",
                    "Opérations / performance industrielle"
                  ]
                },
                {
                  "code": "A02",
                  "fullCode": "IND-C1-AC-A02",
                  "motherAngle": "Quels arbitrages de cadence, de stock, de qualité ou de maintenance permettent encore de tenir — mais abîment la suite ?",
                  "question": "Quels arbitrages défensifs sur les rythmes, les stocks, la qualité ou la maintenance permettent encore de produire, mais dégradent la robustesse future du site ?",
                  "primaryProfile": "Opérations / supply chain / excellence opérationnelle",
                  "alternateProfile": "Organisation industrielle / lean / modèle opératoire",
                  "profiles": [
                    "Opérations / supply chain / excellence opérationnelle",
                    "Organisation industrielle / lean / modèle opératoire"
                  ]
                },
                {
                  "code": "A03",
                  "fullCode": "IND-C1-AC-A03",
                  "motherAngle": "À partir de quand la dette technologique ou la vétusté de l’outil rendent-elles la production non tenable ?",
                  "question": "À partir de quand le vieillissement de l’outil oblige-t-il à des compromis de plus en plus coûteux pour maintenir la production ?",
                  "primaryProfile": "Technologie industrielle / maintenance / modernisation d’outil",
                  "alternateProfile": "Direction industrielle / performance de site",
                  "profiles": [
                    "Technologie industrielle / maintenance / modernisation d’outil",
                    "Direction industrielle / performance de site"
                  ]
                },
                {
                  "code": "A04",
                  "fullCode": "IND-C1-AC-A04",
                  "motherAngle": "À partir de quand le temps nécessaire pour réinvestir, adapter ou redéployer l’outil devient-il incompatible avec le temps disponible pour tenir l’activité ?",
                  "question": "À partir de quand le temps nécessaire pour adapter l’outil, réorganiser la production ou sécuriser les arbitrages devient-il plus long que la capacité réelle de l’activité à tenir ?",
                  "primaryProfile": "PMO / turnaround / exécution de transformation",
                  "alternateProfile": "Corporate finance / CAPEX / restructuring",
                  "profiles": [
                    "PMO / turnaround / exécution de transformation",
                    "Corporate finance / CAPEX / restructuring"
                  ]
                }
              ]
            },
            {
              "code": "RC",
              "label": "Réinvention sous crise",
              "description": "Dans un contexte de réinvention sous crise, la continuité de l’activité ne peut plus être pensée comme un simple ajustement : elle suppose une rupture de modèle, de périmètre, de process ou de géographie productive.",
              "angles": [
                {
                  "code": "A01",
                  "fullCode": "IND-C1-RC-A01",
                  "motherAngle": "À partir de quand la production détruit-elle de la marge sans que cela apparaisse immédiatement ?",
                  "question": "À partir de quand la production ne détruit-elle plus seulement de la marge, mais révèle-t-elle une activité devenue structurellement non tenable ?",
                  "primaryProfile": "Corporate finance / restructuring / turnaround",
                  "alternateProfile": "Stratégie industrielle / redéploiement",
                  "profiles": [
                    "Corporate finance / restructuring / turnaround",
                    "Stratégie industrielle / redéploiement"
                  ]
                },
                {
                  "code": "A02",
                  "fullCode": "IND-C1-RC-A02",
                  "motherAngle": "Quels arbitrages de cadence, de stock, de qualité ou de maintenance permettent encore de tenir — mais abîment la suite ?",
                  "question": "À partir de quand ces arbitrages ne relèvent-ils plus d’un pilotage serré, mais d’un maintien artificiel qui reporte une décision de rupture ?",
                  "primaryProfile": "Turnaround / direction industrielle / restructuration",
                  "alternateProfile": "Opérations / performance industrielle",
                  "profiles": [
                    "Turnaround / direction industrielle / restructuration",
                    "Opérations / performance industrielle"
                  ]
                },
                {
                  "code": "A03",
                  "fullCode": "IND-C1-RC-A03",
                  "motherAngle": "À partir de quand la dette technologique ou la vétusté de l’outil rendent-elles la production non tenable ?",
                  "question": "À partir de quand la dette technologique ne permet-elle plus une remise à niveau progressive, mais impose-t-elle une fermeture partielle, un saut d’investissement ou un changement de périmètre ?",
                  "primaryProfile": "Technologie industrielle / stratégie d’outil / CAPEX",
                  "alternateProfile": "Corporate finance / restructuring / site industriel",
                  "profiles": [
                    "Technologie industrielle / stratégie d’outil / CAPEX",
                    "Corporate finance / restructuring / site industriel"
                  ]
                },
                {
                  "code": "A04",
                  "fullCode": "IND-C1-RC-A04",
                  "motherAngle": "À partir de quand le temps nécessaire pour réinvestir, adapter ou redéployer l’outil devient-il incompatible avec le temps disponible pour tenir l’activité ?",
                  "question": "À partir de quand le délai requis pour redéployer, reconvertir ou refonder l’outil dépasse-t-il le temps économique, social ou financier encore disponible ?",
                  "primaryProfile": "PMO / redéploiement / transformation industrielle",
                  "alternateProfile": "Corporate finance / turnaround / site selection",
                  "profiles": [
                    "PMO / redéploiement / transformation industrielle",
                    "Corporate finance / turnaround / site selection"
                  ]
                }
              ]
            }
          ]
        },
        {
          "code": "C2",
          "title": "Où se situent les dépendances qui font basculer la production ?",
          "tension": "Autonomie affichée vs vulnérabilités réelles de la chaîne de valeur",
          "description": "Quatre angles pour identifier où se logent les dépendances critiques — fournisseurs, filière, cadre externe ou systèmes — qui rendent la production vulnérable.",
          "contexts": [
            {
              "code": "GS",
              "label": "Croissance sous tension",
              "description": "Dans un contexte de croissance sous tension, l’activité progresse mais révèle en même temps des fragilités de cadence, d’organisation, de systèmes, de ressources ou d’ancrage territorial.",
              "angles": [
                {
                  "code": "A05",
                  "fullCode": "IND-C2-GS-A05",
                  "motherAngle": "À partir de quand une dépendance fournisseur ou logistique cesse-t-elle d’être pilotable ?",
                  "question": "À partir de quand l’augmentation des volumes révèle-t-elle une dépendance fournisseur ou logistique que l’organisation ne maîtrise plus vraiment ?",
                  "primaryProfile": "Opérations / supply chain / achats",
                  "alternateProfile": "Stratégie industrielle / filière",
                  "profiles": [
                    "Opérations / supply chain / achats",
                    "Stratégie industrielle / filière"
                  ]
                },
                {
                  "code": "A06",
                  "fullCode": "IND-C2-GS-A06",
                  "motherAngle": "Quelles dépendances de filière, de segment ou de spécialisation industrielle fragilisent la capacité à produire, même indépendamment de la performance commerciale immédiate ?",
                  "question": "À partir de quand une spécialisation trop étroite ou un positionnement de filière trop dépendant limite-t-il la capacité à capter durablement la croissance ?",
                  "primaryProfile": "Stratégie industrielle / filière / compétitivité",
                  "alternateProfile": "Pricing B2B / portefeuille clients / business model",
                  "profiles": [
                    "Stratégie industrielle / filière / compétitivité",
                    "Pricing B2B / portefeuille clients / business model"
                  ]
                },
                {
                  "code": "A07",
                  "fullCode": "IND-C2-GS-A07",
                  "motherAngle": "Quand le cadre commercial, réglementaire ou géopolitique déstabilise-t-il la continuité industrielle ?",
                  "question": "À partir de quand l’ouverture commerciale, les normes ou les contraintes export cessent-elles d’être un simple paramètre de croissance pour devenir un risque de désorganisation ?",
                  "primaryProfile": "Affaires publiques / commerce international / contrôle export",
                  "alternateProfile": "Juridique / contrats / conformité industrielle",
                  "profiles": [
                    "Affaires publiques / commerce international / contrôle export",
                    "Juridique / contrats / conformité industrielle"
                  ]
                },
                {
                  "code": "A08",
                  "fullCode": "IND-C2-GS-A08",
                  "motherAngle": "À partir de quand la dépendance aux systèmes, logiciels, automatismes ou intégrateurs devient-elle critique ?",
                  "question": "À partir de quand la montée en charge révèle-t-elle que l’architecture des systèmes, automatismes ou intégrations n’est plus à l’échelle de l’activité ?",
                  "primaryProfile": "Technologie industrielle / OT-IT / automatisation",
                  "alternateProfile": "Intégration systèmes / direction industrielle",
                  "profiles": [
                    "Technologie industrielle / OT-IT / automatisation",
                    "Intégration systèmes / direction industrielle"
                  ]
                }
              ]
            },
            {
              "code": "AC",
              "label": "Adaptation sous contrainte",
              "description": "Dans un contexte d’adaptation sous contrainte, l’enjeu n’est plus d’accélérer mais de tenir, d’ajuster et de préserver les marges de manœuvre sans dégrader irréversiblement l’outil.",
              "angles": [
                {
                  "code": "A05",
                  "fullCode": "IND-C2-AC-A05",
                  "motherAngle": "À partir de quand une dépendance fournisseur ou logistique cesse-t-elle d’être pilotable ?",
                  "question": "À partir de quand la réduction des marges de manœuvre rend-elle une dépendance amont ou logistique trop risquée pour rester pilotée à coût acceptable ?",
                  "primaryProfile": "Opérations / supply chain / achats",
                  "alternateProfile": "Turnaround / compétitivité industrielle",
                  "profiles": [
                    "Opérations / supply chain / achats",
                    "Turnaround / compétitivité industrielle"
                  ]
                },
                {
                  "code": "A06",
                  "fullCode": "IND-C2-AC-A06",
                  "motherAngle": "Quelles dépendances de filière, de segment ou de spécialisation industrielle fragilisent la capacité à produire, même indépendamment de la performance commerciale immédiate ?",
                  "question": "Quelles dépendances de filière ou de segment empêchent-elles d’ajuster l’activité sans dégrader la position future de l’entreprise ?",
                  "primaryProfile": "Stratégie industrielle / filière / compétitivité",
                  "alternateProfile": "Corporate finance / repositionnement",
                  "profiles": [
                    "Stratégie industrielle / filière / compétitivité",
                    "Corporate finance / repositionnement"
                  ]
                },
                {
                  "code": "A07",
                  "fullCode": "IND-C2-AC-A07",
                  "motherAngle": "Quand le cadre commercial, réglementaire ou géopolitique déstabilise-t-il la continuité industrielle ?",
                  "question": "Quand les règles commerciales, sociales, douanières ou réglementaires empêchent-elles de continuer à ajuster l’activité sans rupture de continuité ?",
                  "primaryProfile": "Juridique / commerce international / social industriel",
                  "alternateProfile": "Affaires publiques / conformité / export",
                  "profiles": [
                    "Juridique / commerce international / social industriel",
                    "Affaires publiques / conformité / export"
                  ]
                },
                {
                  "code": "A08",
                  "fullCode": "IND-C2-AC-A08",
                  "motherAngle": "À partir de quand la dépendance aux systèmes, logiciels, automatismes ou intégrateurs devient-elle critique ?",
                  "question": "À partir de quand la dépendance à des systèmes vieillissants, propriétaires ou mal intégrés empêche-t-elle d’ajuster rapidement l’outil ?",
                  "primaryProfile": "Technologie industrielle / systèmes / OT-IT",
                  "alternateProfile": "Direction industrielle / intégration / automatisation",
                  "profiles": [
                    "Technologie industrielle / systèmes / OT-IT",
                    "Direction industrielle / intégration / automatisation"
                  ]
                }
              ]
            },
            {
              "code": "RC",
              "label": "Réinvention sous crise",
              "description": "Dans un contexte de réinvention sous crise, la continuité de l’activité ne peut plus être pensée comme un simple ajustement : elle suppose une rupture de modèle, de périmètre, de process ou de géographie productive.",
              "angles": [
                {
                  "code": "A05",
                  "fullCode": "IND-C2-RC-A05",
                  "motherAngle": "À partir de quand une dépendance fournisseur ou logistique cesse-t-elle d’être pilotable ?",
                  "question": "À partir de quand une dépendance critique impose-t-elle non plus une sécurisation, mais une relocalisation, une substitution ou un changement de modèle d’approvisionnement ?",
                  "primaryProfile": "Supply chain stratégique / achats / redéploiement",
                  "alternateProfile": "Stratégie industrielle / site selection",
                  "profiles": [
                    "Supply chain stratégique / achats / redéploiement",
                    "Stratégie industrielle / site selection"
                  ]
                },
                {
                  "code": "A06",
                  "fullCode": "IND-C2-RC-A06",
                  "motherAngle": "Quelles dépendances de filière, de segment ou de spécialisation industrielle fragilisent la capacité à produire, même indépendamment de la performance commerciale immédiate ?",
                  "question": "À partir de quand la dépendance à une filière, à une spécialisation ou à un segment condamne-t-elle toute adaptation partielle et impose-t-elle un repositionnement ?",
                  "primaryProfile": "Stratégie industrielle / filière / repositionnement",
                  "alternateProfile": "Corporate finance / restructuring / business model",
                  "profiles": [
                    "Stratégie industrielle / filière / repositionnement",
                    "Corporate finance / restructuring / business model"
                  ]
                },
                {
                  "code": "A07",
                  "fullCode": "IND-C2-RC-A07",
                  "motherAngle": "Quand le cadre commercial, réglementaire ou géopolitique déstabilise-t-il la continuité industrielle ?",
                  "question": "À partir de quand un changement de cadre géopolitique ou réglementaire rend-il caduque une partie du modèle industriel ou de la géographie productive ?",
                  "primaryProfile": "Affaires publiques / géopolitique / contrôle export",
                  "alternateProfile": "Juridique / stratégie industrielle / commerce international",
                  "profiles": [
                    "Affaires publiques / géopolitique / contrôle export",
                    "Juridique / stratégie industrielle / commerce international"
                  ]
                },
                {
                  "code": "A08",
                  "fullCode": "IND-C2-RC-A08",
                  "motherAngle": "À partir de quand la dépendance aux systèmes, logiciels, automatismes ou intégrateurs devient-elle critique ?",
                  "question": "À partir de quand la dépendance technique à un logiciel, un fournisseur d’automatisme ou un intégrateur bloque-t-elle toute réinvention du site ou du process ?",
                  "primaryProfile": "Technologie industrielle / automatisation / systèmes critiques",
                  "alternateProfile": "PMO / transformation industrielle / intégration",
                  "profiles": [
                    "Technologie industrielle / automatisation / systèmes critiques",
                    "PMO / transformation industrielle / intégration"
                  ]
                }
              ]
            }
          ]
        },

{
          "code": "C3",
          "title": "Qu’est-ce qui transforme réellement un outil productif ?",
          "tension": "Modernisation affichée vs transformation effective de la performance industrielle",
          "description": "Quatre angles pour distinguer ce qui modernise seulement le discours de ce qui transforme réellement la performance, l’architecture opératoire, les capacités humaines et le process industriel.",
          "contexts": [
            {
              "code": "GS",
              "label": "Croissance sous tension",
              "description": "Dans un contexte de croissance sous tension, l’activité progresse mais révèle en même temps des fragilités de cadence, d’organisation, de systèmes, de ressources ou d’ancrage territorial.",
              "angles": [
                {
                  "code": "A09",
                  "fullCode": "IND-C3-GS-A09",
                  "motherAngle": "Qu’est-ce qui transforme réellement un outil : automatisation, digitalisation ou réorganisation du process ?",
                  "question": "Qu’est-ce qui permet réellement de franchir un cap de volume ou de qualité : automatiser, digitaliser davantage, ou redessiner le process ?",
                  "primaryProfile": "Technologie industrielle / automatisation / OT-IT",
                  "alternateProfile": "Organisation industrielle / lean / modèle opératoire",
                  "profiles": [
                    "Technologie industrielle / automatisation / OT-IT",
                    "Organisation industrielle / lean / modèle opératoire"
                  ]
                },
                {
                  "code": "A10",
                  "fullCode": "IND-C3-GS-A10",
                  "motherAngle": "À partir de quand l’architecture opératoire — flux, interfaces, séquencement, pilotage — limite-t-elle davantage la performance que la technologie elle-même ?",
                  "question": "À partir de quand la vraie limite n’est-elle plus technologique, mais opératoire : flux, interfaces, standardisation, séquencement, pilotage ?",
                  "primaryProfile": "Organisation industrielle / lean / modèle opératoire",
                  "alternateProfile": "Opérations / supply chain / excellence opérationnelle",
                  "profiles": [
                    "Organisation industrielle / lean / modèle opératoire",
                    "Opérations / supply chain / excellence opérationnelle"
                  ]
                },
                {
                  "code": "A11",
                  "fullCode": "IND-C3-GS-A11",
                  "motherAngle": "À partir de quand les exigences de qualité, de sécurité et de compétences deviennent-elles le facteur limitant de la montée en capacité ou du maintien de l’outil ?",
                  "question": "À partir de quand la montée en capacité bute-t-elle moins sur la machine que sur la qualité, la sécurité, la formation et la maîtrise des gestes critiques ?",
                  "primaryProfile": "QHSE / certification / conformité industrielle",
                  "alternateProfile": "RH / compétences / transformation du travail",
                  "profiles": [
                    "QHSE / certification / conformité industrielle",
                    "RH / compétences / transformation du travail"
                  ]
                },
                {
                  "code": "A12",
                  "fullCode": "IND-C3-GS-A12",
                  "motherAngle": "À partir de quand la décarbonation cesse-t-elle d’être un chantier de conformité ou de coût pour devenir le moteur d’une réécriture du process, de l’outil ou du mix produit ?",
                  "question": "À partir de quand la croissance impose-t-elle de décarboner autrement, non plus à la marge, mais en repensant le process, les utilités ou le mix produit ?",
                  "primaryProfile": "Énergie / décarbonation / utilités",
                  "alternateProfile": "Technologie industrielle / transformation de process",
                  "profiles": [
                    "Énergie / décarbonation / utilités",
                    "Technologie industrielle / transformation de process"
                  ]
                }
              ]
            },
            {
              "code": "AC",
              "label": "Adaptation sous contrainte",
              "description": "Dans un contexte d’adaptation sous contrainte, l’enjeu n’est plus d’accélérer mais de tenir, d’ajuster et de préserver les marges de manœuvre sans dégrader irréversiblement l’outil.",
              "angles": [
                {
                  "code": "A09",
                  "fullCode": "IND-C3-AC-A09",
                  "motherAngle": "Qu’est-ce qui transforme réellement un outil : automatisation, digitalisation ou réorganisation du process ?",
                  "question": "Dans un contexte de marges serrées, qu’est-ce qui transforme encore réellement l’outil : un investissement technologique ciblé ou une recomposition plus frugale du process ?",
                  "primaryProfile": "Technologie industrielle / investissements ciblés / OT-IT",
                  "alternateProfile": "Organisation industrielle / lean / redéploiement opératoire",
                  "profiles": [
                    "Technologie industrielle / investissements ciblés / OT-IT",
                    "Organisation industrielle / lean / redéploiement opératoire"
                  ]
                },
                {
                  "code": "A10",
                  "fullCode": "IND-C3-AC-A10",
                  "motherAngle": "À partir de quand l’architecture opératoire — flux, interfaces, séquencement, pilotage — limite-t-elle davantage la performance que la technologie elle-même ?",
                  "question": "À partir de quand de nouveaux outils ne compensent-ils plus une architecture opératoire devenue trop rigide, trop fragmentée ou trop lente ?",
                  "primaryProfile": "Organisation industrielle / modèle opératoire",
                  "alternateProfile": "Technologie industrielle / intégration systèmes",
                  "profiles": [
                    "Organisation industrielle / modèle opératoire",
                    "Technologie industrielle / intégration systèmes"
                  ]
                },
                {
                  "code": "A11",
                  "fullCode": "IND-C3-AC-A11",
                  "motherAngle": "À partir de quand les exigences de qualité, de sécurité et de compétences deviennent-elles le facteur limitant de la montée en capacité ou du maintien de l’outil ?",
                  "question": "À partir de quand les exigences de qualité, de sécurité ou de conformité empêchent-elles de continuer à ajuster l’outil sans remettre en cause la tenue de l’activité ?",
                  "primaryProfile": "QHSE / conformité / certification",
                  "alternateProfile": "RH / compétences / maintien de l’outil",
                  "profiles": [
                    "QHSE / conformité / certification",
                    "RH / compétences / maintien de l’outil"
                  ]
                },
                {
                  "code": "A12",
                  "fullCode": "IND-C3-AC-A12",
                  "motherAngle": "À partir de quand la décarbonation cesse-t-elle d’être un chantier de conformité ou de coût pour devenir le moteur d’une réécriture du process, de l’outil ou du mix produit ?",
                  "question": "À partir de quand la décarbonation ne peut-elle plus être traitée comme une contrainte de coût ou de conformité, parce qu’elle rebat les conditions mêmes de compétitivité et d’investissement ?",
                  "primaryProfile": "Énergie / décarbonation / compétitivité industrielle",
                  "alternateProfile": "Corporate finance / CAPEX / transformation de process",
                  "profiles": [
                    "Énergie / décarbonation / compétitivité industrielle",
                    "Corporate finance / CAPEX / transformation de process"
                  ]
                }
              ]
            },
            {
              "code": "RC",
              "label": "Réinvention sous crise",
              "description": "Dans un contexte de réinvention sous crise, la continuité de l’activité ne peut plus être pensée comme un simple ajustement : elle suppose une rupture de modèle, de périmètre, de process ou de géographie productive.",
              "angles": [
                {
                  "code": "A09",
                  "fullCode": "IND-C3-RC-A09",
                  "motherAngle": "Qu’est-ce qui transforme réellement un outil : automatisation, digitalisation ou réorganisation du process ?",
                  "question": "À partir de quand la transformation de l’outil ne passe-t-elle plus par l’amélioration incrémentale, mais par une rupture de process ou de système de production ?",
                  "primaryProfile": "Technologie industrielle / transformation de process / automatisation",
                  "alternateProfile": "Stratégie industrielle / réinvention du modèle opératoire",
                  "profiles": [
                    "Technologie industrielle / transformation de process / automatisation",
                    "Stratégie industrielle / réinvention du modèle opératoire"
                  ]
                },
                {
                  "code": "A10",
                  "fullCode": "IND-C3-RC-A10",
                  "motherAngle": "À partir de quand l’architecture opératoire — flux, interfaces, séquencement, pilotage — limite-t-elle davantage la performance que la technologie elle-même ?",
                  "question": "À partir de quand la crise révèle-t-elle que le vrai sujet n’est plus l’outil, mais l’architecture même de l’organisation productive ?",
                  "primaryProfile": "Organisation industrielle / redesign opératoire",
                  "alternateProfile": "PMO / transformation industrielle / turnaround",
                  "profiles": [
                    "Organisation industrielle / redesign opératoire",
                    "PMO / transformation industrielle / turnaround"
                  ]
                },
                {
                  "code": "A11",
                  "fullCode": "IND-C3-RC-A11",
                  "motherAngle": "À partir de quand les exigences de qualité, de sécurité et de compétences deviennent-elles le facteur limitant de la montée en capacité ou du maintien de l’outil ?",
                  "question": "À partir de quand l’écart entre les compétences disponibles, les exigences de sûreté et les standards de production bloque-t-il toute tentative de redressement ou de transformation ?",
                  "primaryProfile": "RH / compétences critiques / transformation du travail",
                  "alternateProfile": "QHSE / sûreté / standards industriels",
                  "profiles": [
                    "RH / compétences critiques / transformation du travail",
                    "QHSE / sûreté / standards industriels"
                  ]
                },
                {
                  "code": "A12",
                  "fullCode": "IND-C3-RC-A12",
                  "motherAngle": "À partir de quand la décarbonation cesse-t-elle d’être un chantier de conformité ou de coût pour devenir le moteur d’une réécriture du process, de l’outil ou du mix produit ?",
                  "question": "À partir de quand la contrainte carbone impose-t-elle une réécriture du process, de l’outil, de l’offre ou même de la vocation industrielle du site ?",
                  "primaryProfile": "Énergie / décarbonation / stratégie industrielle",
                  "alternateProfile": "Corporate finance / transformation / redéploiement de site",
                  "profiles": [
                    "Énergie / décarbonation / stratégie industrielle",
                    "Corporate finance / transformation / redéploiement de site"
                  ]
                }
              ]
            }
          ]
        },
        {
          "code": "C4",
          "title": "Qu’est-ce qui empêche une trajectoire industrielle de tenir ?",
          "tension": "Performance interne vs conditions réelles de soutenabilité de l’activité",
          "description": "Quatre angles pour lire ce qui empêche une trajectoire industrielle de tenir durablement : capacités humaines, utilités, structure commerciale et conditions territoriales de maintien ou de redéploiement.",
          "contexts": [
            {
              "code": "GS",
              "label": "Croissance sous tension",
              "description": "Dans un contexte de croissance sous tension, l’activité progresse mais révèle en même temps des fragilités de cadence, d’organisation, de systèmes, de ressources ou d’ancrage territorial.",
              "angles": [
                {
                  "code": "A13",
                  "fullCode": "IND-C4-GS-A13",
                  "motherAngle": "À partir de quand les compétences critiques, les conditions de travail et la capacité humaine à tenir l’activité empêchent-elles de transformer — ou même de faire tourner — l’outil ?",
                  "question": "À partir de quand la croissance révèle-t-elle une incapacité à recruter, transmettre, stabiliser ou faire monter en compétence au rythme nécessaire ?",
                  "primaryProfile": "RH / compétences / transformation du travail",
                  "alternateProfile": "Organisation industrielle / management de site",
                  "profiles": [
                    "RH / compétences / transformation du travail",
                    "Organisation industrielle / management de site"
                  ]
                },
                {
                  "code": "A14",
                  "fullCode": "IND-C4-GS-A14",
                  "motherAngle": "Quand l’énergie, l’eau, les utilités ou la décarbonation cessent-elles d’être un poste de coût pour devenir un arbitrage de maintien, d’investissement ou de localisation ?",
                  "question": "À partir de quand l’accès à l’énergie, à l’eau, aux utilités ou aux capacités réseaux devient-il le vrai verrou d’une montée en capacité ?",
                  "primaryProfile": "Énergie / utilités / décarbonation",
                  "alternateProfile": "Implantation / site selection / stratégie territoriale industrielle",
                  "profiles": [
                    "Énergie / utilités / décarbonation",
                    "Implantation / site selection / stratégie territoriale industrielle"
                  ]
                },
                {
                  "code": "A15",
                  "fullCode": "IND-C4-GS-A15",
                  "motherAngle": "À partir de quand la structure de clientèle et le pouvoir de négociation empêchent-ils de répercuter, de préserver la marge ou de financer l’adaptation ?",
                  "question": "À partir de quand la croissance du carnet révèle-t-elle une fragilité commerciale : incapacité à sélectionner, à répercuter ou à défendre ses conditions économiques ?",
                  "primaryProfile": "Pricing B2B / structure commerciale / portefeuille clients",
                  "alternateProfile": "Corporate finance / compétitivité / business model",
                  "profiles": [
                    "Pricing B2B / structure commerciale / portefeuille clients",
                    "Corporate finance / compétitivité / business model"
                  ]
                },
                {
                  "code": "A16",
                  "fullCode": "IND-C4-GS-A16",
                  "motherAngle": "À quelles conditions un territoire permet-il encore de maintenir, d’étendre ou de redéployer une activité industrielle ?",
                  "question": "À quelles conditions un territoire permet-il encore d’accompagner une montée en capacité : foncier, réseaux, logistique, main-d’œuvre, acceptabilité ?",
                  "primaryProfile": "Implantation / site selection / stratégie territoriale industrielle",
                  "alternateProfile": "Affaires publiques / développement territorial industriel",
                  "profiles": [
                    "Implantation / site selection / stratégie territoriale industrielle",
                    "Affaires publiques / développement territorial industriel"
                  ]
                }
              ]
            },
            {
              "code": "AC",
              "label": "Adaptation sous contrainte",
              "description": "Dans un contexte d’adaptation sous contrainte, l’enjeu n’est plus d’accélérer mais de tenir, d’ajuster et de préserver les marges de manœuvre sans dégrader irréversiblement l’outil.",
              "angles": [
                {
                  "code": "A13",
                  "fullCode": "IND-C4-AC-A13",
                  "motherAngle": "À partir de quand les compétences critiques, les conditions de travail et la capacité humaine à tenir l’activité empêchent-elles de transformer — ou même de faire tourner — l’outil ?",
                  "question": "À partir de quand les tensions sur les effectifs, les savoir-faire, les conditions de travail et l’organisation empêchent-elles de continuer à ajuster l’activité sans perte de maîtrise ?",
                  "primaryProfile": "RH / compétences / maintien d’activité",
                  "alternateProfile": "Organisation industrielle / management / transformation du travail",
                  "profiles": [
                    "RH / compétences / maintien d’activité",
                    "Organisation industrielle / management / transformation du travail"
                  ]
                },
                {
                  "code": "A14",
                  "fullCode": "IND-C4-AC-A14",
                  "motherAngle": "Quand l’énergie, l’eau, les utilités ou la décarbonation cessent-elles d’être un poste de coût pour devenir un arbitrage de maintien, d’investissement ou de localisation ?",
                  "question": "À partir de quand les coûts d’énergie, d’eau ou de conformité environnementale empêchent-ils l’entreprise d’ajuster son activité sans dégrader sa compétitivité ?",
                  "primaryProfile": "Énergie / décarbonation / utilités",
                  "alternateProfile": "Corporate finance / compétitivité industrielle",
                  "profiles": [
                    "Énergie / décarbonation / utilités",
                    "Corporate finance / compétitivité industrielle"
                  ]
                },
                {
                  "code": "A15",
                  "fullCode": "IND-C4-AC-A15",
                  "motherAngle": "À partir de quand la structure de clientèle et le pouvoir de négociation empêchent-ils de répercuter, de préserver la marge ou de financer l’adaptation ?",
                  "question": "À partir de quand la pression des clients ou donneurs d’ordre empêche-t-elle de préserver la marge minimale nécessaire pour maintenir ou adapter l’outil ?",
                  "primaryProfile": "Pricing B2B / négociation / structure de clientèle",
                  "alternateProfile": "Corporate finance / turnaround / business model",
                  "profiles": [
                    "Pricing B2B / négociation / structure de clientèle",
                    "Corporate finance / turnaround / business model"
                  ]
                },
                {
                  "code": "A16",
                  "fullCode": "IND-C4-AC-A16",
                  "motherAngle": "À quelles conditions un territoire permet-il encore de maintenir, d’étendre ou de redéployer une activité industrielle ?",
                  "question": "À partir de quand un territoire n’offre-t-il plus les conditions suffisantes pour continuer à ajuster ou maintenir une activité sans surcoûts croissants ?",
                  "primaryProfile": "Implantation / ancrage territorial / compétitivité de site",
                  "alternateProfile": "Affaires publiques / développement économique / stratégie industrielle",
                  "profiles": [
                    "Implantation / ancrage territorial / compétitivité de site",
                    "Affaires publiques / développement économique / stratégie industrielle"
                  ]
                }
              ]
            },
            {
              "code": "RC",
              "label": "Réinvention sous crise",
              "description": "Dans un contexte de réinvention sous crise, la continuité de l’activité ne peut plus être pensée comme un simple ajustement : elle suppose une rupture de modèle, de périmètre, de process ou de géographie productive.",
              "angles": [
                {
                  "code": "A13",
                  "fullCode": "IND-C4-RC-A13",
                  "motherAngle": "À partir de quand les compétences critiques, les conditions de travail et la capacité humaine à tenir l’activité empêchent-elles de transformer — ou même de faire tourner — l’outil ?",
                  "question": "À partir de quand l’absence de compétences critiques ou la rigidité de l’organisation rendent-elles impossible toute trajectoire de redressement ou de transformation ?",
                  "primaryProfile": "RH / compétences critiques / redressement industriel",
                  "alternateProfile": "Organisation industrielle / turnaround / management de transformation",
                  "profiles": [
                    "RH / compétences critiques / redressement industriel",
                    "Organisation industrielle / turnaround / management de transformation"
                  ]
                },
                {
                  "code": "A14",
                  "fullCode": "IND-C4-RC-A14",
                  "motherAngle": "Quand l’énergie, l’eau, les utilités ou la décarbonation cessent-elles d’être un poste de coût pour devenir un arbitrage de maintien, d’investissement ou de localisation ?",
                  "question": "À partir de quand les contraintes énergétiques, hydriques ou climatiques imposent-elles un arbitrage de localisation, de fermeture partielle ou de transformation profonde du site ?",
                  "primaryProfile": "Énergie / utilités / stratégie de site",
                  "alternateProfile": "Implantation / redéploiement industriel / site selection",
                  "profiles": [
                    "Énergie / utilités / stratégie de site",
                    "Implantation / redéploiement industriel / site selection"
                  ]
                },
                {
                  "code": "A15",
                  "fullCode": "IND-C4-RC-A15",
                  "motherAngle": "À partir de quand la structure de clientèle et le pouvoir de négociation empêchent-ils de répercuter, de préserver la marge ou de financer l’adaptation ?",
                  "question": "À partir de quand la structure commerciale condamne-t-elle toute adaptation partielle et impose-t-elle un changement de marché, de portefeuille, de partenariat ou de position dans la chaîne de valeur ?",
                  "primaryProfile": "Pricing B2B / portefeuille clients / repositionnement",
                  "alternateProfile": "Stratégie industrielle / business model / corporate finance",
                  "profiles": [
                    "Pricing B2B / portefeuille clients / repositionnement",
                    "Stratégie industrielle / business model / corporate finance"
                  ]
                },
                {
                  "code": "A16",
                  "fullCode": "IND-C4-RC-A16",
                  "motherAngle": "À quelles conditions un territoire permet-il encore de maintenir, d’étendre ou de redéployer une activité industrielle ?",
                  "question": "À quelles conditions un territoire peut-il encore porter un redéploiement industriel, une reconversion partielle ou une nouvelle trajectoire de site ?",
                  "primaryProfile": "Implantation / redéploiement / stratégie territoriale industrielle",
                  "alternateProfile": "Affaires publiques / développement territorial / reconversion",
                  "profiles": [
                    "Implantation / redéploiement / stratégie territoriale industrielle",
                    "Affaires publiques / développement territorial / reconversion"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};






        
