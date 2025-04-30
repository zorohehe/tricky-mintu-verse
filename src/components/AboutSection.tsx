
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import GlitchText from './GlitchText';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  color: 'purple' | 'blue' | 'green' | 'pink' | 'orange';
}

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'education'>('bio');

  const timeline: TimelineItem[] = [
    {
      year: '2020',
      title: 'Hardware & Mobile Repair',
      description: 'Earned diploma in hardware repair and mobile device troubleshooting',
      color: 'green'
    },
    {
      year: '2021',
      title: 'Digital Marketing',
      description: 'Completed certification in digital marketing strategies',
      color: 'blue'
    },
    {
      year: '2022',
      title: 'Graphics & DTP',
      description: 'Advanced training in graphic design and desktop publishing',
      color: 'purple'
    },
    {
      year: '2023',
      title: 'Cyber Security',
      description: 'Specialized training in ethical hacking and system security',
      color: 'pink'
    }
  ];

  return (
    <section id="about" className="py-24 bg-cyber-dark/60 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-cyber-blue neon-blue">&lt;</span>
            <span className="text-white">ABOUT</span>
            <span className="text-cyber-blue neon-blue">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left column - Bio */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-900/40 p-6 rounded-lg border border-cyber-purple/20 h-full">
              <h3 className="text-2xl font-orbitron text-cyber-purple mb-6 flex items-center">
                <span className="text-sm text-cyber-green font-mono mr-2">&gt;</span>
                <GlitchText text="WHO IS TRICKY MINTU" hoverEffect={true} />
              </h3>
              <p className="text-gray-300 font-rajdhani text-lg mb-6 leading-relaxed">
                I'm Mahesh Trikey, aka Tricky Mintu, a 19-year-old tech enthusiast with a passion for breaking things down and putting them back together. What drives me isn't profit—it's the joy of creation and the thrill of solving complex problems.
              </p>
              <p className="text-gray-300 font-rajdhani text-lg mb-6 leading-relaxed">
                I've worked with several IT companies like Technowings, Sunveo, and Techcoronation, building websites and tech solutions. But what really gets me excited is exploring the intersection of design, security, and hardware.
              </p>
              <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
                My tech passions include <span className="text-cyber-green">Kali Linux</span>, <span className="text-cyber-blue">Blender 3D</span>, <span className="text-cyber-purple">Ubuntu</span>, and more. I believe in learning by doing, and I'm constantly experimenting with new technologies and tools.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-cyber-dark border border-cyber-purple/30 rounded-md text-sm text-gray-300 font-mono">
                  #CyberSecurity
                </span>
                <span className="px-3 py-1 bg-cyber-dark border border-cyber-blue/30 rounded-md text-sm text-gray-300 font-mono">
                  #UIUXDesign
                </span>
                <span className="px-3 py-1 bg-cyber-dark border border-cyber-green/30 rounded-md text-sm text-gray-300 font-mono">
                  #EthicalHacking
                </span>
                <span className="px-3 py-1 bg-cyber-dark border border-cyber-pink/30 rounded-md text-sm text-gray-300 font-mono">
                  #Hardware
                </span>
              </div>
            </div>
          </div>

          {/* Right column - Timeline */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-900/40 p-6 rounded-lg border border-cyber-blue/20 h-full">
              <h3 className="text-2xl font-orbitron text-cyber-blue mb-6 flex items-center">
                <span className="text-sm text-cyber-green font-mono mr-2">&gt;</span>
                <GlitchText text="EDUCATION TIMELINE" hoverEffect={true} />
              </h3>
              
              <div className="relative ml-4">
                {/* Timeline line */}
                <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyber-purple via-cyber-blue to-cyber-green"></div>
                
                {/* Timeline items */}
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-8">
                      {/* Timeline dot */}
                      <div 
                        className={`absolute left-0 top-0 w-4 h-4 rounded-full transform -translate-x-1.5 border-2 bg-cyber-dark ${
                          item.color === 'purple' ? 'border-cyber-purple' 
                          : item.color === 'blue' ? 'border-cyber-blue' 
                          : item.color === 'green' ? 'border-cyber-green' 
                          : item.color === 'pink' ? 'border-cyber-pink'
                          : 'border-cyber-orange'
                        }`}
                      ></div>
                      
                      {/* Content */}
                      <div className="mb-1 font-mono text-sm">
                        <span className={`
                          ${item.color === 'purple' ? 'text-cyber-purple' 
                          : item.color === 'blue' ? 'text-cyber-blue' 
                          : item.color === 'green' ? 'text-cyber-green' 
                          : item.color === 'pink' ? 'text-cyber-pink'
                          : 'text-cyber-orange'}
                        `}>
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-rajdhani font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 font-rajdhani">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
