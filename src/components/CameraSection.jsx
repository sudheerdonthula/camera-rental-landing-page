import React from 'react';
import CameraCard from './CameraCard';

// Sample camera data with URLs
const cameras = [
  {
    name: 'Sony FX3',
    image: '/images/sony fx3.jpeg',
    url: 'https://www.sony.co.in/electronics/interchangeable-lens-cameras/ilme-fx3a'
  },
  {
    name: 'Nikon Z6',
    image: '/images/nikon z6.jpeg',
    url: 'https://www.nikon.co.in/mirrorless-z-6'
  },
  {
    name: 'Canon R5',
    image: '/images/canon r5.jpeg',
    url: 'https://in.canon/en/consumer/eos-r5-mark-ii-rf24-105mm-f-4l-is-usm/product'
  },
  {
    name: 'Sony FX30',
    image: '/images/sony fx30.jpeg',
    url: 'https://www.sony.co.in/interchangeable-lens-cameras/products/ilme-fx30'
  },
  {
    name: 'Sony NX200',
    image: '/images/sony nx200.jpeg',
    url: 'https://pro.sony/en_MV/products/handheld-camcorders/hxr-nx200'
  },
  {
    name: 'Canon Eos R',
    image: '/images/canon eos r.jpeg',
    url: 'https://www.canon-europe.com/cameras/eos-r/'
  },
  {
    name: 'Canon 5d mark IV',
    image: '/images/canon 5d mark 4.jpg',
    url: 'https://shop.in.canon/eos-5d-mark-iv-kit-ef-24-105-is-ii-usm.html'
  },
  {
    name: 'Canon 6d mark II',
    image: '/images/canon 6d mark 2.jpeg',
    url: 'https://asia.canon/en/consumer/eos-6d-mark-ii-ef24-105mm/product'
  },
  {
    name: 'Canon EosR(STM)',
    image: '/images/canon eos r stm.jpeg',
    url: 'https://in.canon/en/consumer/eos-r100-rf-s18-45mm-f-4-5-6-3-is-stm/product'
  },
  {
    name: 'Canon 200d mark II',
    image: '/images/canon 200d mark 2.jpeg',
    url: 'https://in.canon/en/consumer/eos-200d-ii-ef-s-18-55mm-f-4-5-6-is-stm/product'
  },
  {
    name: 'Canon 1500d',
    image: '/images/canon 1500d.jpeg',
    url: 'https://in.canon/en/consumer/eos-1500d-kit-ef-s18-55-is-ii/product'
  },
];

export default function CameraSection() {
  return (
    <div>
      <div className="py-8 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Our Products
          </h2>
        </div>
      </div>
      
      <div className="p-6 ml-5 mr-5">
        <div>
          <h2 className="text-3xl font-bold mb-3 ml-5">Cameras</h2>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cameras.map((camera, index) => (
            <CameraCard
              key={index}
              image={camera.image}
              name={camera.name}
              url={camera.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
