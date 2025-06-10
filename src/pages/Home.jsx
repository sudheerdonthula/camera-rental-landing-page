// components/HomePage.jsx
import Banner from '../components/Banner';
import CameraSection from '../components/CameraSection';
import DroneSection from '../components/DroneSection';
import LensSection from '../components/LensSection';
import GimbalSection from '../components/GimbalSection';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className=''> 
        <CameraSection />
        <DroneSection />
        <LensSection />
        <GimbalSection />
      </div>
    </div>
  );
}
