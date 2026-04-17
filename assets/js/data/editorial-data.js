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







        
