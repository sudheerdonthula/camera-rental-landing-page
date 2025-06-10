import React from 'react';
import CameraCard from './CameraCard';

const drones = [
  { 
    image: '/images/mavic 2 pro.jpeg', 
    name: 'DJI Mavic 2 Pro',
    url: 'https://www.dji.com/mavic-2/info'
  },
  // Add more drones here with their URLs
];

export default function DroneSection() {
  return (
    <div className="p-6 ml-5 mr-5">
        <div>
            <h2 className="text-3xl font-bold mb-3 ml-5">Drones</h2>
        </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {drones.map((drone, index) => (
          <CameraCard 
            key={index} 
            image={drone.image} 
            name={drone.name} 
            url={drone.url}
          />
        ))}
      </div>
    </div>  
    
    
  );
}