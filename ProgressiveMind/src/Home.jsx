import React from 'react';
import GradientHeading from './components/GradientHeading';
import AboutUs from './AboutUs';
import Contact from './Contact';
import MissionSection from './MissionSection';
import SectionWrapper from './components/SectionWrapper';

const Home = () => {
  return (
    <>
      <SectionWrapper className="min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <GradientHeading
              text="Empowering the Youth of India"
              
              size="text-4xl md:text-5xl lg:text-6xl"
            />
            <p className="text-gray-300 text-lg md:text-xl font-calsans">
            Progressive Mind is a movement to unite and empower the Youth of India,
            guiding them toward a life of purpose and balance that aligns with the 
            timeless wisdom of the Quran and the Sunnah of Prophet(SAW). 
            We blend practical life skills with spiritual guidance, helping teenagers 
            navigate modern challenges while staying true to their values.
            </p>
          </div>

          {/* Optional Image or Illustration */}
          <div className="flex justify-center md:justify-end">
          <svg
            className="w-full max-w-md h-auto"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sample Abstract SVG - Replace with your actual illustration */}
            <circle cx="250" cy="250" r="200" fill="#4ade80" />
            <circle cx="250" cy="250" r="150" fill="#34d399" />
            <circle cx="250" cy="250" r="100" fill="#60a5fa" />
            <text
              x="50%"
              y="47%"
              textAnchor="middle"
              fill="white"
              fontSize="24"
              dy=".3em"
              fontFamily="Cal Sans, sans-serif"
            >
              1% Better
            </text>
            <text
              x="50%"
              y="53%"
              textAnchor="middle"
              fill="white"
              fontSize="24"
              dy=".3em"
              fontFamily="Cal Sans, sans-serif"
            >
              Every Day
            </text>           
            </svg>
          </div>

        </div>
        
      </SectionWrapper>

      {/* Mission Section */}
      <MissionSection />

      {/* About Us Section */}
      <AboutUs />

      {/* Call to Action Section */}
      <Contact />

    <div></div>
    </>
  );
};

export default Home;
