import React from 'react';
import Card from './components/Card';
import { AcademicCapIcon, UsersIcon, LightBulbIcon, GlobeAltIcon, BriefcaseIcon, StarIcon } from '@heroicons/react/24/outline';

const AboutUs = () => {
  return (
    <div id='about' className="pt-20 bg-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12 font-calsans">
          About Us
        </h2>

        {/* About Us Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission */}
          <Card
            title="Our Mission"
            description="Our mission is to unite and guide the youth towards a balanced life, combining modern success with Islamic principles and the teachings of Prophet Muhammad (SAW)."
          >
            <AcademicCapIcon className="w-16 h-16 mx-auto text-white mb-4" />
          </Card>

          {/* Values */}
          <Card
            title="Our Values"
            description="We believe in fostering brotherhood, mutual respect, and continuous learning. Our community thrives on shared knowledge and support."
          >
            <UsersIcon className="w-16 h-16 mx-auto text-white mb-4" />
          </Card>

          {/* Vision */}
          <Card
            title="Our Vision"
            description="We aim to create a supportive space where teenagers can grow together, sharing experiences and learning from each other's journeys."
          >
            <LightBulbIcon className="w-16 h-16 mx-auto text-white mb-4" />
          </Card>

          {/* Community */}
          <Card
            title="Our Community"
            description="We meet weekly to discuss, learn, and grow together. Join our vibrant community of young minds seeking both worldly success and spiritual growth."
          >
            <GlobeAltIcon className="w-16 h-16 mx-auto text-white mb-4" />
          </Card>

          {/* Activities */}
          <Card
            title="Our Activities"
            description="Weekly meetings, knowledge sharing sessions, and practical workshops focused on personal development and Islamic principles."
          >
            <BriefcaseIcon className="w-16 h-16 mx-auto text-white mb-4" />
          </Card>

          {/* Join Us */}
          <Card
            title="Join Us"
            description="Be part of our growing community. Together, we can support each other in achieving success while staying true to our values."
          >
            <StarIcon className="w-16 h-16 mx-auto text-white mb-4" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
