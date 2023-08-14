import React from 'react';
import { AiFillBulb, AiOutlineAim } from 'react-icons/ai';
import images from '../images/int.png';

const About = () => {
  return (
    <div id="About" className="section">
      <section className="container mb-32 my-24 mx-auto md:px-6 ">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="flex flex-wrap items-center">
            <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <img src={images} alt="RTN"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-4 text-2xl font-bold text-[#21268d]">
                  QUI SOMMES-NOUS ?
                </h2>
                <p className="mb-6 flex items-center font-bold uppercase text-danger text-blue-500 dark:text-danger-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-2 h-5 w-5 text-blue-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                  RTN - Votre Partenaire de Confiance !
                </p>
                <p className="mb-6 text-[#000336] dark:text-neutral-300">
                  Chez RTN, nous sommes bien plus qu'une société de Réseaux et Techniques Numériques. Nous sommes des experts passionnés, composés d'ingénieurs qualifiés et de spécialistes certifiés en administration réseaux et Linux.
                </p>
                <div className="grid max-w-xl grid-cols-1 md:grid-cols-2" >
                  <div className="flex pl-4 md:pl-16 mr-2">
                    <AiFillBulb className="flex transfor-translate-y-1/2 text-primary text-5xl md:text-4xl" />
                    <p className="pl-10 md:pl-0 text-base md:text-lg text-[#000336]">
                      Notre mission est de propulser votre entreprise vers le succès numérique en vous offrant des formations personnalisées et en valorisant vos actifs informatiques.
                    </p>
                  </div>
                  <div className="flex pl-4 md:pl-16 mr-2">
                    <AiOutlineAim className="flex transfor-translate-y-1/2 text-primary text-2xl md:text-4xl" />
                    <p className="pl-10 md:pl-0 text-base md:text-lg text-[#000336]">
                      Notre objectif ultime est de vous fournir des solutions sur mesure, parfaitement adaptées à vos besoins spécifiques.
                    </p>
                  </div>
                </div>
                <p className="text-[#000336] dark:text-neutral-300 ">
                  Faites équipe avec RTN dès maintenant pour démarrer votre voyage vers l'excellence numérique !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
