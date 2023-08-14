import React from 'react';
import im1 from '../images/infra.png'
import im2 from '../images/finf.png'
import im3 from '../images/open-source.png'
import im4 from '../images/devopss.png'
import im5 from '../images/RI.jpg'

const Expertises = () => {
  return (
    <div id="Expertises" className="section">
    <section className="container my-24 mx-auto md:px-6 mb-32 text-[#000336]">
      <div>
        <h2 className="mb-16 text-center text-2xl font-bold text-[#21268d]">Nos expertises</h2>
        <p className='mb-16 text-center text-2xl'>RTN a su diversifier ses domaines de compétences afin de proposer aux entreprises et administrations des offres de services dans plusieurs secteurs informatiques.</p>
        <div className="mb-16 flex flex-wrap">
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
            <div
              className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src={im1} class="w-full" alt="rtn" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>

          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
            <h3 className="mb-4 text-2xl font-bold text-[#21268d]">Une expertise unique en développement d'application : Web, téléphonie, SVI …</h3>
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p>Programmation Python ;</p>
                  <p>Programmation graphique Python ;</p>
                  <p>Développement des API REST ;</p>
                  <p>Téléphonie sur IP avec CISCO ;</p>
                  <p>Intégration Téléphonie sur IP Libre/CISCO ;</p>
                  <p>Programmation React native ;</p>
                  <p>React native ;</p>
                  <p>Intégration de solution de centre d’appel ;</p>
                </div>
                <div>
                  <p>Conception et déploiement de réseau IMS ;</p>
                  <p>Intégration de système de téléphonie privée dans le réseau d’un opérateur (Réseau IMS) ;</p>
                  <p>Solution de VPN pour les entreprises ;</p>
                  <p>Base de données niveau 1</p>
                  <p>Base de données avancée</p>
                  <p>Administration et sécurité de base de données.</p>
                </div>
                <div>
                  <p>Programmation HTML 5 et programmation en CSS</p>
                  <p>Développement et programmation Web en Java : Spring, Java EE, Servlets, JSTL, Taglib, JSF, Struts, Wicket, GWT, Tomcat…</p>
                  <p>Programmation JavaScript</p>
                  <p>Développement et programmation en PHP</p>
                  <p>Programmation en XML</p>
                  <p>Développement Web</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
            <div
              className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src={im2} class="w-full" alt="rnt" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>

          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
            <h3 className="mb-4 text-2xl font-bold text-[#21268d]">Une expertise unique en formation et certification</h3>
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p>Module 1: Administration système Linux;</p>
                  <p>Module 2: Services réseau de base en environnement Linux;</p>
                  <p>Module 3: Services réseau de base en environnement Windows;</p>
                  <p>Module 4: Administration des réseaux locaux et équipements actifs;</p>
                  <p>Module 5: Protocoles sécurisés;</p>
                  <p>Module 6: Services d’annuaire et d’authentification;</p>


                </div>
                <div>
                  <p>Module 7: Applications client/serveur;</p>
                  <p>Module 8: Administration des équipements réseaux;</p>
                  <p>Module 9: Services réseaux avancés;</p>
                  <p>Module 10: Administration de services réseaux Windows;</p>
                  <p>Module 11: Programmation Python;</p>
                  <p>Module 12: Programmation graphique Python;</p>
                </div>
                <div>

                  <p>Module 13: Téléphonie sur IP avec CISCO;</p>
                  <p>Module 14: Téléphonie sur IP Asterisk;</p>
                  <p>Module 15: Téléphonie sur IP libre avec CISCO;</p>
                  <p>Module 16: Développement des API REST;</p>
                  <p>Module 17: Système de conteneurisation avec Docker;</p>
                  <p>Module 18: Certification linux (LPI1 – LPI2 – LPI3)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
            <div
              className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src={im3} class="w-full" alt="rtn" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
            <h3 className="mb-4 text-2xl font-bold text-[#21268d]">Une expertise unique en développement d'application : Web, téléphonie, SVI …</h3>

            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p>Programmation Python ;</p>
                  <p>Programmation graphique Python ;</p>
                  <p>Développement des API REST ;</p>
                  <p>Téléphonie sur IP avec CISCO ;</p>
                  <p>Intégration Téléphonie sur IP Libre/CISCO ;</p>
                  <p>Programmation React native ;</p>
                  <p>React native ;</p>
                  <p>Intégration de solution de centre d’appel ;</p>
                </div>
                <div>
                  <p>Conception et déploiement de réseau IMS ;</p>
                  <p>Intégration de système de téléphonie privée dans le réseau d’un opérateur (Réseau IMS) ;</p>
                  <p>Solution de VPN pour les entreprises ;</p>
                  <p>Base de données niveau 1</p>
                  <p>Base de données avancée</p>
                  <p>Administration et sécurité de base de données.</p>
                </div>
                <div>
                  <p>Programmation HTML 5 et programmation en CSS</p>
                  <p>Développement et programmation Web en Java : Spring, Java EE, Servlets, JSTL, Taglib, JSF, Struts, Wicket, GWT, Tomcat…</p>
                  <p>Programmation JavaScript</p>
                  <p>Développement et programmation en PHP</p>
                  <p>Programmation en XML</p>
                  <p>Développement Web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-24 mx-auto md:px-6">

        <div class="mb-32">

          <div class="grid gap-6 lg:grid-cols-2">
            <div class="mb-6 lg:mb-0">
              <div
                class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="p-6">
                  <div class="flex flex-wrap items-center">
                    <div class="flex-basis w-full shrink-0 grow-0 px-3 lg:w-5/12">
                      <img src={im4} alt="rtn" class="mb-6 dark:brightness-150 lg:mb-0" />
                    </div>
                    <div class="flex-basis w-full shrink-0 grow-0 px-3 lg:w-7/12">
                      <h5 class="mb-4 font-bold text-[#21268d]">Une expertise unique en DevOps</h5>
                      <p>Virtualisation & cloud computing</p>
                      <p>Data Science & intelligence artificielle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="mb-6 lg:mb-0">
              <div
                class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="p-6">
                  <div class="flex flex-wrap items-center">
                    <div class="flex-basis w-full shrink-0 grow-0 px-3 lg:w-5/12">
                      <img src={im5} alt="rtn" class="mb-6 dark:brightness-150 lg:mb-0" />
                    </div>
                    <div class="flex-basis w-full shrink-0 grow-0 px-3 lg:w-7/12">
                      <h5 class="mb-4 font-bold text-[#21268d]">Une expertise en ingénierie des réseaux</h5>
                      <p>Réseaux : TCP/IP, Sockets, Proxy…;</p>
                      <p>Annuaires LDAP concepts et déploiement;</p>
                      <p>Etude et utilisation des technologies des Peer to Peer;</p>
                      <p>Les Protocoles IRC, HTTP, TCP/IP </p>
                      <p>Développement réseau avec les sockets en C;</p>
                      <p>Utilisation des APIs réseau de la bibliothèque Java standard;</p>
                      <p>Programmation réseau en Java avec les sockets;</p>
                      <p>Initiation à la programmation réseau.</p>
                    </div>
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

export default Expertises;
