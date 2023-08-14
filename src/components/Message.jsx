import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Message = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
      <a
        href="https://wa.me/221783055115"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center px-4 py-2 rounded-full shadow"
      >
        <FaWhatsapp className="mr-2" />
      </a>
      <a
        href="https://www.instagram.com/deguene_nl/?next=%2F"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center px-4 py-2 rounded-full shadow"
      >
        <FaInstagram className="mr-2" />
      </a>
      <a
        href="lien_de_facebook"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center px-4 py-2 rounded-full shadow"
      >
        <FaFacebook className="mr-2" />
      </a>
    </div>
  );
};

export default Message;
