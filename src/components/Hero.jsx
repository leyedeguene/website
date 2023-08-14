import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import pilogo from '../images/people-input.jpg';
import lpilogo from '../images/LPI.jpg';
import hayologo from '../images/HAYO.jpg';
import ccnalogo from '../images/CCNA.jpg';
import photo1 from '../images/img1.jpeg';

const Hero = () => {
  return (
    <div id="Hero" className="section">
      <div className="relative overflow-hidden bg-cover bg-no-repeat bg-center h-screen" style={{
        backgroundImage: `url(${photo1})`,
      }}>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(246,47%,18%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="text-4xl md:text-4xl font-bold mb-6">Découvrez le partenaire idéal pour le développement de vos équipes.</h1>
              <p className="text-lg md:text-xl">Et boostez votre productivité et votre succès avec RTN dès maintenant !</p>
              <button type="button"
                className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init data-te-ripple-color="light">
                Commencer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-32 text-center">
        <h2 className="mb-16 mt-6 text-3xl font-bold text-[#000336]">
          Ils nous font confiance
        </h2>
        <div className="grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="mb-12 lg:mb-0 shadow-lg rounded-lg p-4">
            <img src={pilogo}
              className="px-6 dark:brightness-150 md:px-12" alt="people input - logo" />
          </div>
          <div className="mb-12 lg:mb-0 shadow-lg rounded-lg p-4">
            <img src={lpilogo}
              className="px-6 dark:brightness-150 md:px-12" alt="lpi - logo" />
          </div>
          <div className="mb-12 lg:mb-0 shadow-lg rounded-lg p-4">
            <img src={hayologo}
              className="px-6 dark:brightness-150 md:px-12" alt="Hayo - logo" />
          </div>
          <div className="mb-12 lg:mb-0 shadow-lg rounded-lg p-4">
            <img src={ccnalogo}
              className="px-6 dark:brightness-150 md:px-12" alt="CCNA - logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
