import React from 'react';
import CameraCard from './CameraCard';

const lenses = [
  { 
    image: '/images/sigma 85mm.jpeg', 
    name: 'Sigma 85mm f/1.4',
    url: 'https://www.sigma-global.com/en/lenses/a020_85_14/'
  },
  // Add more lenses here with their URLs
];

export default function LensSection() {
  return (
    <div className="p-6 ml-5 mr-5">
        <div>
            <h2 className="text-3xl font-bold mb-3 ml-5">Lenses</h2>
        </div>
      
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {lenses.map((lens, index) => (
          <CameraCard 
            key={index} 
            image={lens.image} 
            name={lens.name} 
            url={lens.url}
          />
        ))}
      </div>
    </div>
   
  );
}