
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import GlitchText from './GlitchText';

interface Project {
  title: string;
  description: string;
  type: 'website' | 'brochure' | 'tool' | 'design';
  image: string;
  color: 'purple' | 'blue' | 'green' | 'pink' | 'orange';
  tools: string[];
  link?: string;
}

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'website', label: 'Websites' },
    { id: 'brochure', label: 'Brochures' },
    { id: 'tool', label: 'Tools' },
    { id: 'design', label: 'Designs' }
  ];

  const projects: Project[] = [
    {
      title: 'Technowings Portal',
      description: 'Company website with admin dashboard and service management',
      type: 'website',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      color: 'blue',
      tools: ['HTML/CSS', 'JavaScript', 'PHP']
    },
    {
      title: 'Sunveo E-commerce',
      description: 'Online store with product management and payment integration',
      type: 'website',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      color: 'purple',
      tools: ['ReactJS', 'Node.js', 'MongoDB']
    },
    {
      title: 'Techcoronation Blog',
      description: 'Technology blog with content management system',
      type: 'website',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      color: 'green',
      tools: ['WordPress', 'CSS', 'MySQL']
    },
    {
      title: 'Digital Marketing Brochure',
      description: 'Promotional material for a digital marketing agency',
      type: 'brochure',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      color: 'pink',
      tools: ['Photoshop', 'InDesign', 'Illustrator']
    },
    {
      title: 'Wi-Fi Security Tool',
      description: 'Tool for testing wireless network security (educational purposes only)',
      type: 'tool',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      color: 'orange',
      tools: ['Kali Linux', 'Python', 'Shell Script']
    },
    {
      title: 'Personal Portfolio',
      description: 'Dark-themed personal portfolio website with cyberpunk aesthetics',
      type: 'website',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      color: 'purple',
      tools: ['React', 'Tailwind CSS', 'TypeScript']
    },
    {
      title: 'Tech Conference Brochure',
      description: 'Event brochure for a cybersecurity conference',
      type: 'brochure',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      color: 'green',
      tools: ['Photoshop', 'Illustrator']
    },
    {
      title: 'Network Monitoring Dashboard',
      description: 'Visual interface for monitoring network performance',
      type: 'tool',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      color: 'blue',
      tools: ['Python', 'JavaScript', 'D3.js']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const getProjectColor = (color: string) => {
    switch(color) {
      case 'purple': return 'bg-cyber-purple/20 border-cyber-purple/30';
      case 'blue': return 'bg-cyber-blue/20 border-cyber-blue/30';
      case 'green': return 'bg-cyber-green/20 border-cyber-green/30';
      case 'pink': return 'bg-cyber-pink/20 border-cyber-pink/30';
      case 'orange': return 'bg-cyber-orange/20 border-cyber-orange/30';
      default: return 'bg-cyber-purple/20 border-cyber-purple/30';
    }
  };

  const getProjectTextColor = (color: string) => {
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
    <section id="projects" className="py-24 bg-cyber-dark/60 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-cyber-pink neon-pink">&lt;</span>
            <span className="text-white">PROJECTS</span>
            <span className="text-cyber-pink neon-pink">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-pink to-cyber-purple mx-auto"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={cn(
                "px-6 py-2 rounded-md font-mono text-sm transition-colors duration-300",
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-cyber-purple to-cyber-blue text-white"
                  : "bg-gray-800/60 text-gray-400 hover:bg-gray-800/80 hover:text-gray-300"
              )}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div 
                className="w-full h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60"></div>
              </div>
              
              {/* Glitch overlay effect */}
              <div 
                className={cn(
                  "absolute inset-0 bg-cover bg-center z-10 opacity-0 transition-opacity duration-300 mix-blend-hard-light",
                  hoveredProject === index && "opacity-30 animate-glitch"
                )}
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              
              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cyber-dark to-transparent">
                <div className="flex flex-col transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-orbitron font-bold text-white">
                      <GlitchText text={project.title} intensity="low" hoverEffect={true} />
                    </h3>
                    <span 
                      className={cn(
                        "text-xs uppercase font-mono px-2 py-0.5 rounded",
                        getProjectColor(project.color)
                      )}
                    >
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 font-rajdhani mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex} 
                        className={cn(
                          "px-2 py-0.5 text-xs rounded bg-cyber-dark border",
                          `border-cyber-${project.color}/30`,
                          getProjectTextColor(project.color)
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
        
        {/* Display message if no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
