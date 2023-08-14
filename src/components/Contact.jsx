import React from 'react';
import { BsFillTelephoneFill, BsFillGeoAltFill, BsFillAlarmFill, BsEnvelopeAtFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="Contact" className="section">
    <section class="container my-24 mx-auto md:px-6 mb-32">
      <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class="flex flex-wrap items-center">
          <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <div class="h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.001609720394!2d-17.459073924357693!3d14.71250097432611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173df5afe4427%3A0x3d09d70cac715d94!2sEC2LT%20Annexe%20Libert%C3%A9%202!5e0!3m2!1sfr!2ssn!4v1690660219430!5m2!1sfr!2ssn"
                title="Adresse RTN"
                className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <h2 className="mb-8 text-center text-5xl font-bold text-[#21268d]">Contactez Nous !</h2>
            <div class="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div class="flex items-center">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <BsFillTelephoneFill className="text-4xl text-[#121449]"/>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white text-[#121449]">
                      +221 77 514 10 31
                    </p>

                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <BsEnvelopeAtFill className="text-4xl text-[#121449]"/>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white text-text-[#121449]">
                      contact@rtn.sn
                    </p>

                  </div>
                </div>
              </div>
              <div className="mb-12 w-full px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                <div className="flex items-center">
                  <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <BsFillGeoAltFill className="text-4xl text-[#121449]" />
                  </div>
                  <div className="ml-6">
                    <p className="mb-2 font-bold dark:text-white text-[#121449]">Liberté 2, derrière immeuble BICIS, Jet d’eau – Dakar</p>
                  </div>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-center">
                  <div className="inline-block rounded-md bg-primary-100 p-2 text-primary">
                    <BsFillAlarmFill className="text-4xl text-[#121449]"/>
                  </div>
                  <div className="ml-6">
                    <p className="mb-2 font-bold dark:text-white text-[#121449]">heure d'ouverture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
