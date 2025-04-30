
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import GlitchText from './GlitchText';
import TerminalText from './TerminalText';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const [loaded, setLoaded] = useState(false);
  const [visibleText, setVisibleText] = useState(false);
  const [visibleButtons, setVisibleButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      const textTimer = setTimeout(() => {
        setVisibleText(true);
      }, 1000);

      const buttonTimer = setTimeout(() => {
        setVisibleButtons(true);
      }, 2500);

      return () => {
        clearTimeout(textTimer);
        clearTimeout(buttonTimer);
      };
    }
  }, [loaded]);

  return (
    <section 
      id="home"
      className={cn(
        'min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-16',
        className
      )}
    >
      {/* Cyberpunk background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-luminosity"
          style={{ backgroundImage: 'url(https://i.postimg.cc/QNb0Br6b/download-3.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/70 to-cyber-dark"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,#0F0F17_100%)]"></div>
      </div>

      {/* Matrix-style background effect (retained as additional layer) */}
      <div className="matrix-bg z-0"></div>

      <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text content */}
        <div 
          className={cn(
            'w-full md:w-1/2 space-y-6 transform transition-all duration-700',
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          )}
        >
          <div className="mb-6">
            <div className="text-sm font-mono mb-3 text-cyber-green opacity-80">
              <TerminalText 
                text="Initializing cyberpunk interface..." 
                typingSpeed={30} 
                onComplete={() => setVisibleText(true)}
              />
            </div>
            {visibleText && (
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4">
                  <GlitchText text="Hey, I'm" className="block text-white mb-2" />
                  <span className="text-cyber-purple neon-purple">Tricky Mintu</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-rajdhani text-gray-300 mb-6">
                  I design, <span className="text-cyber-blue">hack</span>, and <span className="text-cyber-green">build</span> for fun.
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-lg font-rajdhani">
                  19-year-old tech enthusiast with skills in UI/UX design, ethical hacking,
                  networking, and hardware repair. Turning ideas into digital reality.
                </p>
              </>
            )}
          </div>
          
          {visibleButtons && (
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="group relative inline-flex items-center justify-center px-8 py-3 font-mono overflow-hidden rounded-md transition-all duration-300 ease-out bg-gradient-to-r from-cyber-purple to-cyber-blue border border-cyber-purple/30"
              >
                <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-cyber-dark to-cyber-dark/70 group-hover:opacity-0 transition-opacity duration-300"></span>
                <span className="relative text-white font-semibold group-hover:text-white">
                  View Projects
                </span>
              </a>
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-8 py-3 font-mono overflow-hidden rounded-md transition-all duration-300 ease-out bg-transparent border border-cyber-green/50"
              >
                <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-cyber-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative text-cyber-green font-semibold">
                  Connect
                </span>
              </a>
            </div>
          )}
        </div>

        {/* Hero image with cyberpunk theme */}
        <div 
          className={cn(
            'w-full md:w-1/2 mt-12 md:mt-0 flex justify-center items-center transform transition-all duration-700',
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          )}
        >
          <div className="relative">
            {/* Decorative grid element */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 z-10">
              {Array.from({ length: 64 }).map((_, i) => (
                <div 
                  key={i}
                  className="w-full h-full border border-cyber-purple/10"
                  style={{ 
                    opacity: Math.random() * 0.3,
                    backgroundColor: Math.random() > 0.9 ? 'rgba(139, 92, 246, 0.1)' : 'transparent'
                  }}
                ></div>
              ))}
            </div>
            
            {/* Neo-tokyo inspired circular frame */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyber-purple/30 via-cyber-blue/20 to-cyber-green/30 blur-md animate-pulse"></div>
            
            {/* Main image placeholder with cyberpunk effect */}
            <div className="cyber-border w-64 h-64 md:w-80 md:h-80 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-cyber-dark z-10">
                <div className="text-center p-4">
                  <div className="font-vt323 text-cyber-green text-2xl mb-2">$USER_PROFILE</div>
                  <div className="font-orbitron text-cyber-purple text-3xl mb-2">TRICKY MINTU</div>
                  <div className="font-mono text-sm text-gray-400">SECURITY_LEVEL: ELITE</div>
                  <div className="mt-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyber-purple to-cyber-blue flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">TM</span>
                    </div>
                  </div>
                </div>
                
                {/* Scan effect */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-cyber-green opacity-30 animate-matrix"></div>
              </div>
            </div>
            
            {/* Decorative cyber elements */}
            <div className="absolute -bottom-5 -right-5 w-40 h-40 border-r-2 border-b-2 border-cyber-blue/30"></div>
            <div className="absolute -top-5 -left-5 w-20 h-20 border-l-2 border-t-2 border-cyber-green/30"></div>
            
            {/* Tech data points */}
            <div className="absolute top-0 -right-4 bg-cyber-dark/80 px-3 py-1 border border-cyber-purple/30 text-xs font-mono text-cyber-purple">
              <div>SYS.STATUS: ONLINE</div>
            </div>
            <div className="absolute bottom-0 -left-4 bg-cyber-dark/80 px-3 py-1 border border-cyber-green/30 text-xs font-mono text-cyber-green">
              <div>SEC.LEVEL: MAX</div>
            </div>
            
            {/* Digital noise overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-blue/5 mix-blend-overlay pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with enhanced cyberpunk styling */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
        <span className="text-gray-500 text-sm font-mono mb-2">SCROLL_DOWN.exe</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-cyber-purple via-cyber-blue to-cyber-green animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
