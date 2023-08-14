import React from 'react';
import { BsMortarboardFill, BsGlobe2, BsFileLock2, BsFillShareFill } from 'react-icons/bs';
import { FaLinux } from 'react-icons/fa';
import { LiaConnectdevelop } from 'react-icons/lia';
import { DiOpensource } from 'react-icons/di';
import { AiFillSetting } from 'react-icons/ai';

const Domaines = () => {
  return (
    <div id="Domaines" className="section">
      <section className="container my-24 mx-auto md:px-6 mb-32 text-center text-[#000336]">
        <h2 className="mb-12 pb-4 text-3xl font-bold text-[#21268d]">Nos domaines d'intervention</h2>
        <p className="mb-12 pb-4">RTN propose ses compétences pour accompagner toutes les sociétés et administration publiques souhaitant former leur collaborateurs administratifs et/ou informatiques dans le domaine des systèmes libres, du Management et de la gestion des projets d’entreprise.</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="shadow-lg rounded-lg p-6 bg-white">
            <BsMortarboardFill className="text-blue-500 text-3xl mb-4 mx-auto" />
            <p className="text-center">Formation et encadrement du personnel des entreprises aux technologies Informatiques</p>
          </div>

          <div className="shadow-lg rounded-lg p-6 bg-white">
            <BsGlobe2 className="text-blue-500 text-3xl mb-4 mx-auto" />
            <p className="text-center">Installation et Administration de serveurs Web</p>
          </div>

          <div className="shadow-lg rounded-lg p-6 bg-white">
            <BsFileLock2 className="text-blue-500 text-3xl mb-4 mx-auto" />
            <p className="text-center">Administration des Serveurs et Sécurité</p>
          </div>

          <div className="shadow-lg rounded-lg p-6 bg-white">
            <BsFillShareFill className="text-blue-500 text-3xl mb-4 mx-auto" />
            <p className="text-center">Conception et mise en œuvre des Réseaux Informatiques</p>
          </div>

          <div className="shadow-lg rounded-lg p-6 bg-white">
            <FaLinux className="text-blue-500 text-3xl mb-4 mx-auto" />
            <p className="text-center">Administration système Linux</p>
          </div>

          <div className="shadow-lg rounded-lg p-6 bg-white">
            <LiaConnectdevelop className="text-blue-500 text-3xl mb-4 mx-auto" />
            <p className="text-center">Interconnexion des Réseaux Linux & Windows</p>
          </div>

          <div className="shadow-lg rounded-lg p-6 bg-white">
            <DiOpensource className="text-blue-500 text-3xl mb-4 mx-auto" />
            <p className="text-center">Open Source</p>
          </div>

          <div className="shadow-lg rounded-lg p-6 bg-white">
          <AiFillSetting className="text-blue-500 text-3xl mb-4 mx-auto" />
            <p className="text-center">Administration Réseaux</p>
          </div>
        </div>
      </section>
      </div>
  );
};

export default Domaines;
