require("dotenv").config();
const { sequelize, Artisan } = require("./models");

async function seed() {
  try {
    await sequelize.sync({ force: true });

    await Artisan.bulkCreate([
      {
        nom: "Boucherie Dumont",
        specialite: "Boucher",
        note: 4.5,
        ville: "Lyon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "boucherie.dumond@gmail.com",
        site: "",
        categorie: "Alimentation",
        top: false
      },
      {
        nom: "Au pain chaud",
        specialite: "Boulanger",
        note: 4.8,
        ville: "Montélimar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "aupainchaud@hotmail.com",
        site: "",
        categorie: "Alimentation",
        top: true
      },
      {
        nom: "Chocolaterie Labbé",
        specialite: "Chocolatier",
        note: 4.9,
        ville: "Lyon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "chocolaterie-labbe@gmail.com",
        site: "https://chocolaterie-labbe.fr",
        categorie: "Alimentation",
        top: true
      },
      {
        nom: "Traiteur Truchon",
        specialite: "Traiteur",
        note: 4.1,
        ville: "Lyon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "contact@truchon-traiteur.fr",
        site: "https://truchon-traiteur.fr",
        categorie: "Alimentation",
        top: false
      },
      {
        nom: "Orville Salmons",
        specialite: "Chauffagiste",
        note: 5.0,
        ville: "Evian",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "o-salmons@live.com",
        site: "",
        categorie: "Bâtiment",
        top: true
      },
      {
        nom: "Mont Blanc Électricité",
        specialite: "Électricien",
        note: 4.5,
        ville: "Chamonix",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "contact@mont-blanc-electricite.com",
        site: "https://mont-blanc-electricite.com",
        categorie: "Bâtiment",
        top: false
      },
      {
        nom: "Boutot & fils",
        specialite: "Menuisier",
        note: 4.7,
        ville: "Bourg-en-bresse",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "boutot-menuiserie@gmail.com",
        site: "https://boutot-menuiserie.com",
        categorie: "Bâtiment",
        top: false
      },
      {
        nom: "Vallis Bellemare",
        specialite: "Plombier",
        note: 4.0,
        ville: "Vienne",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "v.bellemare@gmail.com",
        site: "https://plomberie-bellemare.com",
        categorie: "Bâtiment",
        top: false
      },
      {
        nom: "Claude Quinn",
        specialite: "Bijoutier",
        note: 4.2,
        ville: "Aix-les-bains",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "claude.quinn@gmail.com",
        site: "",
        categorie: "Fabrication",
        top: false
      },
      {
        nom: "Amitee Lécuyer",
        specialite: "Couturier",
        note: 4.5,
        ville: "Annecy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "a.amitee@gmail.com",
        site: "https://lecuyer-couture.com",
        categorie: "Fabrication",
        top: false
      },
      {
        nom: "Ernest Carignan",
        specialite: "Ferronier",
        note: 5.0,
        ville: "Le Puy-en-Velay",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "e-carignan@hotmail.com",
        site: "",
        categorie: "Fabrication",
        top: false
      },
      {
        nom: "Royden Charbonneau",
        specialite: "Coiffeur",
        note: 3.8,
        ville: "Saint-Priest",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "r.charbonneau@gmail.com",
        site: "",
        categorie: "Services",
        top: false
      },
      {
        nom: "Leala Dennis",
        specialite: "Coiffeur",
        note: 3.8,
        ville: "Chambéry",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "l.dennos@hotmail.fr",
        site: "",
        categorie: "Services",
        top: false
      },
      {
        nom: "C'est Sup'hair",
        specialite: "Coiffeur",
        note: 4.1,
        ville: "Romans-sur-Isère",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "sup-hair@gmail.com",
        site: "https://sup-hair.fr",
        categorie: "Services",
        top: false
      },
      {
        nom: "Le monde des fleurs",
        specialite: "Fleuriste",
        note: 4.6,
        ville: "Annonay",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "contact@le-monde-des-fleurs.com",
        site: "https://le-monde-des-fleurs-annonay.fr",
        categorie: "Services",
        top: false
      },
      {
        nom: "Valérie Laderoute",
        specialite: "Toiletteur",
        note: 4.2,
        ville: "Valence",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "v-laderoute@gmail.com",
        site: "",
        categorie: "Services",
        top: false
      },
      {
        nom: "CM Graphisme",
        specialite: "Webdesign",
        note: 4.4,
        ville: "Valence",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend.",
        email: "contact@cm-graphisme.com",
        site: "https://cm-graphisme.com",
        categorie: "Services",
        top: false
      }
    ]);

    console.log("✔ Base remplie avec les 17 artisans");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();