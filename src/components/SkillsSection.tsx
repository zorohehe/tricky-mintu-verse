
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import GlitchText from './GlitchText';

interface Skill {
  name: string;
  level: number;
  color: 'purple' | 'blue' | 'green' | 'pink' | 'orange';
  description: string;
  tools: string[];
}

const SkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills: Skill[] = [
    {
      name: 'UI/UX Design',
      level: 90,
      color: 'blue',
      description: 'Creating intuitive, beautiful interfaces with a focus on user experience',
      tools: ['Adobe XD', 'Figma', 'Sketch', 'Photoshop']
    },
    {
      name: 'Ethical Hacking',
      level: 85,
      color: 'green',
      description: 'Finding vulnerabilities and securing systems against potential threats',
      tools: ['Kali Linux', 'Metasploit', 'Wireshark', 'Burp Suite']
    },
    {
      name: 'Networking',
      level: 80,
      color: 'purple',
      description: 'Setting up and managing network infrastructures with security in mind',
      tools: ['Cisco', 'pfSense', 'OpenVPN', 'Wireshark']
    },
    {
      name: 'Graphic Design',
      level: 75,
      color: 'pink',
      description: 'Creating visual content that communicates messages effectively',
      tools: ['Photoshop', 'Illustrator', 'After Effects', 'Blender 3D']
    },
    {
      name: 'CCTV Setup',
      level: 70,
      color: 'orange',
      description: 'Installing and configuring surveillance systems for optimal security',
      tools: ['IP Cameras', 'NVRs', 'CCTV Software', 'Motion Detection']
    },
    {
      name: 'Hardware & Repair',
      level: 95,
      color: 'green',
      description: 'Diagnosing and fixing hardware issues in computers and mobile devices',
      tools: ['PC Components', 'Soldering Tools', 'Multimeters', 'Mobile Parts']
    }
  ];

  const getSkillColor = (color: string) => {
    switch(color) {
      case 'purple': return 'from-cyber-purple to-cyber-purple/20';
      case 'blue': return 'from-cyber-blue to-cyber-blue/20';
      case 'green': return 'from-cyber-green to-cyber-green/20';
      case 'pink': return 'from-cyber-pink to-cyber-pink/20';
      case 'orange': return 'from-cyber-orange to-cyber-orange/20';
      default: return 'from-cyber-purple to-cyber-purple/20';
    }
  };

  const getTextColor = (color: string) => {
    switch(color) {
      case 'purple': return 'text-cyber-purple';
      case 'blue': return 'text-cyber-blue';
      case 'green': return 'text-cyber-green';
      case 'pink': return 'text-cyber-pink';
      case 'orange': return 'text-cyber-orange';
      default: return 'text-cyber-purple';
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-cyber-green neon-green">&lt;</span>
            <span className="text-white">SKILLS</span>
            <span className="text-cyber-green neon-green">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={cn(
                "group relative bg-gray-900/40 rounded-lg border overflow-hidden transition-all duration-300 hover:scale-105",
                activeSkill === index ? 'border-opacity-100' : 'border-opacity-20',
                `border-cyber-${skill.color}`
              )}
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div 
                className={cn(
                  "absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-500 ease-out",
                  getSkillColor(skill.color),
                  activeSkill === index ? 'w-full' : 'w-0'
                )}
              ></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={cn("text-xl font-orbitron font-bold", getTextColor(skill.color))}>
                    <GlitchText text={skill.name} hoverEffect={true} intensity="low" />
                  </h3>
                  <span className={cn("text-sm font-mono", getTextColor(skill.color))}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className="h-2 w-full bg-gray-800 rounded-full mb-6">
                  <div
                    className={cn(
                      "h-2 rounded-full bg-gradient-to-r",
                      `from-cyber-${skill.color} to-cyber-${skill.color}/50`
                    )}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <p className="text-gray-400 font-rajdhani mb-4">{skill.description}</p>
                
                <div className="mt-4">
                  <div className="text-sm text-gray-500 mb-2 font-mono">PREFERRED TOOLS:</div>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className={cn(
                          "px-2 py-1 text-xs rounded-md font-mono bg-cyber-dark",
                          `border-cyber-${skill.color}/30 text-cyber-${skill.color}`,
                          "border"
                        )}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
