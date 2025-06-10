import React from 'react';
import CameraCard from './CameraCard';

const gimbals = [
  { 
    image: '/images/dji rsc 2 gimbal.jpeg', 
    name: 'DJI RSC 2',
    url: 'https://store.dji.com/product/rsc-2'
  },
  // Add more gimbals here with their URLs
];

export default function GimbalSection() {
  return (
    <div className="p-6 ml-5 mr-5">
        <div>
            <h2 className="text-3xl font-bold mb-3 ml-5">Gimbals</h2>
        </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gimbals.map((gimbal, index) => (
          <CameraCard 
            key={index} 
            image={gimbal.image} 
            name={gimbal.name} 
            url={gimbal.url}
          />
        ))}
      </div>
    </div>
  );
}