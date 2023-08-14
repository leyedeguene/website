import React, { useState } from 'react';
import nf from '../images/nouvelle-formation.jpg';

const AdModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-4 left-4 bg-white p-4 rounded-md shadow-md z-50 w-64">
          <img src={nf} alt="RTN" className="w-full" />
          <h2 className="text-lg font-semibold mb-2">Nouvelle offre spéciale !</h2>
          <p className="text-sm mb-2">Découvrez nos produits incroyables à des prix imbattables.</p>
          <button
            className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-600"
            onClick={closeModal}
          >
            Fermer
          </button>
        </div>
      )}
    </>
  );
};

export default AdModal;