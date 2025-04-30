
import React from 'react';
import { cn } from '@/lib/utils';
import GlitchText from './GlitchText';

interface SocialLink {
  name: string;
  icon: JSX.Element;
  url: string;
  color: 'purple' | 'blue' | 'green' | 'pink' | 'orange';
}

const SocialSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 14.13c-.15.38-.39.72-.7.99-.31.27-.67.47-1.07.58-.4.11-.82.17-1.28.17-.46 0-.87-.06-1.25-.17a2.886 2.886 0 01-1.04-.5 2.439 2.439 0 01-.71-.83c-.17-.32-.3-.68-.37-1.09l1.33-.11c.05.29.12.53.21.74.09.21.21.38.36.52.14.14.31.24.5.31.19.07.39.1.61.1.38 0 .7-.09.96-.26.26-.17.39-.44.39-.81 0-.22-.07-.4-.2-.56a1.5 1.5 0 00-.51-.37c-.21-.1-.45-.19-.72-.28-.27-.09-.53-.18-.8-.28-.27-.1-.53-.22-.8-.38-.26-.16-.49-.37-.68-.64-.19-.27-.29-.61-.29-1.01 0-.33.08-.63.25-.89.16-.26.38-.48.67-.66.28-.18.61-.32.99-.41.38-.1.79-.15 1.22-.15.43 0 .83.05 1.18.16.36.11.67.26.93.45.25.19.46.42.61.68.15.26.27.54.34.85l-1.34.11c-.08-.45-.27-.77-.58-.96-.31-.18-.7-.28-1.17-.28-.16 0-.32.02-.48.06a1.204 1.204 0 00-.43.17c-.13.08-.23.17-.3.3-.08.13-.12.28-.12.45 0 .22.06.4.19.55.13.15.29.28.48.38.19.1.42.19.69.27.27.08.54.17.82.26.28.09.55.2.82.34.27.13.51.3.71.52.2.22.36.48.48.79.12.31.18.67.18 1.08 0 .35-.07.67-.21.95zm-5.01-10.13c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
        </svg>
      ),
      url: '#',
      color: 'pink'
    },
    {
      name: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.86c-2.99.66-3.61-1.44-3.61-1.44-.49-1.25-1.2-1.58-1.2-1.58-.96-.66.07-.65.07-.65 1.07.08 1.63 1.1 1.63 1.1.95 1.63 2.49 1.16 3.1.89.1-.69.37-1.16.67-1.43-2.34-.26-4.8-1.17-4.8-5.21 0-1.16.41-2.1 1.08-2.84-.1-.27-.47-1.34.1-2.8 0 0 .88-.28 2.9 1.08a9.68 9.68 0 015.04 0c2.02-1.36 2.9-1.08 2.9-1.08.57 1.46.2 2.54.1 2.8.67.74 1.08 1.68 1.08 2.84 0 4.05-2.47 4.95-4.82 5.21.38.32.72.96.72 1.94v2.88c0 .28.18.62.74.52A11 11 0 0012 1.27"/>
        </svg>
      ),
      url: '#',
      color: 'purple'
    },
    {
      name: 'YouTube',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.612 15.443V8.557l5.234 3.443-5.234 3.443z"/>
        </svg>
      ),
      url: '#',
      color: 'red'
    },
    {
      name: 'Twitter',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.46 6c-.74.33-1.53.55-2.34.65.84-.5 1.48-1.29 1.79-2.24-.79.47-1.66.8-2.6.98A4.13 4.13 0 0016.31 4c-2.3 0-4.16 1.88-4.16 4.2 0 .33.04.65.11.96-3.45-.17-6.5-1.85-8.55-4.4-.36.63-.56 1.36-.56 2.14 0 1.46.73 2.76 1.85 3.52-.68-.02-1.33-.21-1.89-.53v.05c0 2.05 1.44 3.75 3.34 4.14-.35.09-.72.14-1.1.14-.27 0-.53-.03-.79-.08.53 1.68 2.08 2.9 3.9 2.94-1.43 1.14-3.22 1.82-5.17 1.82-.34 0-.67-.02-1-.06 1.84 1.2 4.02 1.9 6.38 1.9 7.65 0 11.83-6.41 11.83-11.96 0-.18 0-.36-.01-.54.81-.59 1.51-1.33 2.07-2.16z"/>
        </svg>
      ),
      url: '#',
      color: 'blue'
    }
  ];

  const getSocialColor = (color: string) => {
    switch(color) {
      case 'purple': return 'from-cyber-purple to-cyber-purple/10';
      case 'blue': return 'from-cyber-blue to-cyber-blue/10';
      case 'green': return 'from-cyber-green to-cyber-green/10';
      case 'pink': return 'from-cyber-pink to-cyber-pink/10';
      case 'orange': return 'from-cyber-orange to-cyber-orange/10';
      case 'red': return 'from-red-600 to-red-600/10';
      default: return 'from-cyber-purple to-cyber-purple/10';
    }
  };

  return (
    <section id="social" className="py-24 bg-cyber-dark/60 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-cyber-blue neon-blue">&lt;</span>
            <span className="text-white">CONNECT</span>
            <span className="text-cyber-blue neon-blue">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
          <p className="mt-6 text-gray-400 font-rajdhani text-xl max-w-2xl mx-auto">
            Follow me on social media to see my latest work, projects, and tech adventures. Always happy to connect with fellow tech enthusiasts!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="group flex flex-col items-center justify-center p-6 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div 
                  className={cn(
                    "w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-b",
                    getSocialColor(social.color),
                    "transition-all duration-300 group-hover:shadow-lg",
                    `group-hover:shadow-${social.color === 'red' ? 'red-600/40' : `cyber-${social.color}/40`}`
                  )}
                >
                  <div className={cn(
                    "text-white group-hover:animate-flicker",
                    social.color === 'red' ? 'text-red-600' : `text-cyber-${social.color}`
                  )}>
                    {social.icon}
                  </div>
                </div>
                <GlitchText 
                  text={social.name} 
                  className={cn(
                    "font-orbitron font-bold",
                    social.color === 'red' ? 'text-red-500' : `text-cyber-${social.color}`
                  )}
                  hoverEffect={true}
                  intensity="low"
                />
              </a>
            ))}
          </div>

          <div className="mt-16 bg-gray-900/40 p-6 rounded-lg border border-gray-800">
            <div className="font-mono text-sm text-cyber-green mb-4">&gt; Social_Feed.sh --latest-activity</div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-900/60 rounded border border-gray-800">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyber-blue mr-2"></div>
                  <span className="text-cyber-blue font-mono text-sm">GitHub</span>
                  <span className="ml-auto text-gray-500 font-mono text-xs">3 days ago</span>
                </div>
                <p className="text-gray-300 font-rajdhani">
                  Pushed 5 commits to <span className="text-cyber-green">feature/security-module</span>
                </p>
              </div>
              
              <div className="p-4 bg-gray-900/60 rounded border border-gray-800">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyber-pink mr-2"></div>
                  <span className="text-cyber-pink font-mono text-sm">Instagram</span>
                  <span className="ml-auto text-gray-500 font-mono text-xs">1 week ago</span>
                </div>
                <p className="text-gray-300 font-rajdhani">
                  Posted new UI design concept - <span className="text-cyber-blue">Cyberpunk Dashboard</span>
                </p>
              </div>
              
              <div className="p-4 bg-gray-900/60 rounded border border-gray-800">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-red-500 font-mono text-sm">YouTube</span>
                  <span className="ml-auto text-gray-500 font-mono text-xs">2 weeks ago</span>
                </div>
                <p className="text-gray-300 font-rajdhani">
                  New tutorial: <span className="text-cyber-green">Basic Network Penetration Testing</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
