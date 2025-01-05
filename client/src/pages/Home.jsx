import { Card, Tab, Tabs, Typography } from '@material-tailwind/react';
import img from '../assets/3d-speech-bubbles-2B7B9HW.jpg'; // Correct import of image
import Containter from '../components/auth/Containter';
 // Import SignIn component

const Home = () => {
  
  return (
    <>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full min-h-screen bg-gray-900 bg-opacity-50 fle items-cente justify-center"
      >
        <div className="text-center mt-">
          <Typography variant="h4" color="blue-gray" className="text-white">
            Welcome to Our Platform
          </Typography>
        </div>

    <Containter/>
      </div>

    </>
  );
};

export default Home;
