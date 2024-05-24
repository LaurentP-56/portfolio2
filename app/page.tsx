"use client" ;
import { Link as ScrollLink } from 'react-scroll';
import BgHeroHome from './components/props/bg-hero-home';
import { Vortex } from './components/ui/vortex';
import ContactPage from './contact/page';
import Portfolio from './portfolio/page';

export default function HomePage() {
  return (
<>

    <div className="flex flex-col bg-fond items-center justify-between p-8">
   <Vortex
        backgroundColor="black"
        rangeY={800}
        rangeRadius	={2}
        particleCount={500}
        baseHue={525}
        className="flex items-center flex-col justify-center px-1 md:px-10  py-4 w-full h-full"
      >
    <section className="h-screen  flex items-center justify-center mx-auto px-4">
      <div className="w-full md:w-1/2">
        <h1 className="text-6xl font-bold text-teal-200 ml-5">Breizh-web Agency</h1>
        <p className="text-xl text-teal-100 ml-8 mt-2">Votre partenaire pour une présence en ligne réussie</p>
        <p className="text-emerald-200 z-10 mt-5 px-10">
          Vous cherchez à développer votre entreprise en ligne ? Nous sommes là pour vous aider à réussir. Spécialisés dans la création et la refonte de sites web, le référencement naturel et le webmarketing pour les PME, notre équipe d&apos;experts mettra sa créativité, son organisation et son adaptabilité à votre service pour concrétiser vos objectifs sur Internet.
          <br />
          <br />
          Notre objectif ? Votre satisfaction. Nous sommes disponibles et réactifs, avec un chef de projet dédié pour vous accompagner à chaque étape du processus.
          <br />
          <br />
          Prêt à donner à votre entreprise la présence en ligne qu&apos;elle mérite ? Contactez-nous dès maintenant pour en savoir plus sur nos services.
        </p> 
      
        <div className="flex justify-end ">
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <button className="bg-teal-400 text-white font-bold bc py-2 px-4 rounded mt-5 hover:bg-teal-700 transition duration-200">
                    Contactez-nous
                  </button>
                </ScrollLink>
              </div>
      </div>
       <div className="w-1/2 relative h-full left-[-8rem]">
       <BgHeroHome />
        <div className="h-full w-full bg-blue-500/30 -skew-x-12 opacity-50 absolute inset-0"></div>
      </div>
        
  </section>
  </Vortex>
  </div>
  <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
  </>
  );
};
