import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioPage = () => {
  const data = [
    {
      image: "/images/site/ecorent.png",
      comment: `Site de location de véhicules sous Woo-commerce`,
    },
    {
      image: "/images/site/evalue.png",
      comment: `Réseau social complexe privé d'une association adossé à un site vitrine sous Wordpress. Inscriptions multiples, différentes d'administrateur, chat, groupes, etc ..`,
    },
    {
      image: "/images/site/adiucat.png",
      comment: `WebApp apprentissage du Catalan sous forme de jeu de l'oie. Projet sur design graphiste totalement personnalisé.`,
    },
    {
      image: "/images/site/borne.png",
      comment: `WP site vitrine. Formulaire de contact personnalisé`,
    },
    {
      image: "/images/site/depannage-cagnes.png",
      comment: `WP site vitrine. Design personnalisé. Formulaire de contact`,
    },
    {
      image: "/images/site/eleydis.png",
      comment: `Site agence web en Noir et Blanc sous WP. Formulaire de contact`,
    },
    {
      image: "/images/site/eleydis2.png",
      comment: `Site vitrine électricien. Formulaire de contact. Tél accès direct via mobile.`,
    },
    {
      image: "/images/site/faceaujeux.png",
      comment: `Référencement site sur tous moteurs de recherche et réseaux sociaux, ainsi que sur Amazon. Migration de serveur et adaptation au logiciel KerAwen.`,
    },
    {
      image: "/images/site/giro-agencement.png",
      comment: `Site Vitrine WP avec vidéo de présentation en page Home. Multilangues. Formulaire de contact.`,
    },
    {
      image: "/images/site/happyskin.png",
      comment: `Site E-commerce relié aux réseaux sociaux, possibilité de vendre sur Amazon, E-Bay, Google shopping`,
    },
    {
      image: "/images/site/lexidoo.png",
      comment: `Webapp d'apprentissage de vocabulaire Anglais sous Laravel`,
    },
    {
      image: "/images/site/lexidoo_app.png",
      comment: `Application Native Android lexidoo Appli d'apprentissage de vocabulaire anglais.`,
    },
    {
      image: "/images/site/myeasyformation.png",
      comment: `Site Premium E-learning sous WP.`,
    },
    {
      image: "/images/site/photovoltaique.png",
      comment: `Landing page Panneaux solaires`,
    },
    {
      image: "/images/site/site-Nadege.png",
      comment: `Site vitrine + stages équestres et pré-inscriptions, bruitage, formulaire de contact et menu 4 onglets`,
    },
    {
      image: "/images/site/site-principal.png",
      comment: `Site agence web en Noir et Blanc sous WP. Formulaire de contact`,
    },
  ];

  return (
    <>
      <div className="bg-fond/30">
        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-4xl">Portfolio</h1>
          </div>
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.map((x, index) => (
              <article
                key={index}
                className="p-6 mb-6 bg-fond/60 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
              >
                <div className="relative mb-4 rounded-2xl">
                  <Image
                    width={400}
                    height={400}
                    className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src={x.image}
                    alt={x.comment}
                  />
                </div>
                <h3 className="font-medium text-xl leading-8">
                  <Link
                    href=""
                    className="block relative group-hover:text-teal-200 transition-colors duration-200"
                  >
                    <span dangerouslySetInnerHTML={{ __html: x.comment }} />
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
