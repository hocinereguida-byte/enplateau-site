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







        
