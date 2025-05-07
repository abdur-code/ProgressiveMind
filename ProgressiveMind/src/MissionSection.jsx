import React from 'react';
import GradientHeading from './components/GradientHeading';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
  } from 'recharts';
  
  const studentEarningData = [
    { year: '2015', India: 4, UK: 45, USA: 40, Indonesia: 50 },
    { year: '2017', India: 5, UK: 48, USA: 42, Indonesia: 52 },
    { year: '2019', India: 6, UK: 50, USA: 44, Indonesia: 55 },
    { year: '2021', India: 7, UK: 53, USA: 46, Indonesia: 58 },
    { year: '2023', India: 10, UK: 56, USA: 47, Indonesia: 60 },
  ];

const MissionSection = () => {
  return (
    <section id='mission' className="bg-black py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Text Content */}
        <div>
          <GradientHeading
            text="Our Mission"
            fromColor="var(--tw-green-400, #4ade80)"
            toColor="var(--tw-blue-400, #60a5fa)"
            size="text-4xl md:text-5xl"
          />
          <p className="mt-6 text-lg text-gray-300 font-calsans leading-relaxed">
            In India, an overwhelming number of students — especially from average colleges —
            complete their education without ever learning how to earn a dignified income. This not only limits their
            potential, but also their ability to support their families and communities.
          </p>
          <p className="mt-4 text-md text-gray-400 font-calsans">
            <strong>Progressive Mind</strong> is here to change that — through practical, skill-based programs rooted in ethical earning,
            and aligned with the values of the <strong>Qur’an and Sunnah</strong>.
          </p>
        </div>

        {/* Right: Graph Placeholder */}
        <div className="pt-20 bg-black p-6 rounded-lg">
        <h3 className="pl-10 text-white text-2xl font-bold mb-4 font-calsans">Student Earning Rates Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={studentEarningData}>
            <CartesianGrid stroke="#333" />
            <XAxis dataKey="year" stroke="#ccc" />
            <YAxis stroke="#ccc" domain={[0, 70]} />
            <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#4ade80' }} />
            <Legend />
            <Line type="monotone" dataKey="India" stroke="#4ade80" strokeWidth={3} />
            <Line type="monotone" dataKey="UK" stroke="#60a5fa" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="USA" stroke="#a78bfa" />
            <Line type="monotone" dataKey="Indonesia" stroke="#facc15" />
            </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
