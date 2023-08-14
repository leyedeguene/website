import React from 'react'

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-[#000336] text-[#f8f8fa] py-y px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-8'>
        <div>
          <h6 className='font-bold uppercase pt-4'>Solutions</h6>
          <ul>
            <li className='py-1'>Administration système </li>
            <li className='py-1'>Administration Réseaux</li>
            <li className='py-1'>Interconnexion des Réseaux </li>
            <li className='py-1'>Formation et encadrement</li>
            <li className='py-1'>Sécurité</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-4'>Nos expertises</h6>
          <ul>
            <li className='py-1'>développement d’application </li>
            <li className='py-1'>formation et certification</li>
            <li className='py-1'>logiciels libres</li>
            <li className='py-1'>ingénierie des réseaux</li>
          </ul>
        </div>

        <div className='col-span-2 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>Abonnez-vous à notre newsletter</p>
          <p className='py-4'>Les dernières nouvelles, articles et ressources, envoyés chaque semaine dans votre boîte de réception.</p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..' />
            <button className='p-2 mb-4'>S'abonner</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 deguene.l Memoire MIC EC2LT. Tous les droits sont réservés</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook /> 
          <FaInstagram />
          <FaTwitter />
          <FaTiktok />
          <FaGithub />
        </div>
      </div>
    </div>
  )
}

export default Footer; 
