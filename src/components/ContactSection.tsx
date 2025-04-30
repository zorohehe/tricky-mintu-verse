
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import TerminalText from './TerminalText';
import GlitchText from './GlitchText';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    reason: '',
    message: '',
  });
  
  const [terminalMessages, setTerminalMessages] = useState<string[]>([
    'Initializing secure communication protocol...',
    'Establishing encrypted channel...',
    'Enter your details to connect with Tricky Mintu'
  ]);
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add terminal-style feedback
    setTerminalMessages(prev => [
      ...prev,
      `> User identified: ${formState.name}`,
      `> Reason: ${formState.reason}`,
      `> Processing message...`,
      `> Encrypting data...`,
      `> Message delivered successfully.`,
      `> Tricky Mintu will respond via social media channels.`
    ]);
    
    setSubmitted(true);
  };

  const contactReasons = [
    'Select a reason',
    'Collaboration opportunity',
    'Job inquiry',
    'Website/design project',
    'Security consultation',
    'Just saying hi'
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-cyber-green neon-green">&lt;</span>
            <span className="text-white">CONTACT</span>
            <span className="text-cyber-green neon-green">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Terminal-style info section */}
          <div className="w-full md:w-1/2">
            <div className="bg-cyber-dark h-full rounded-lg border border-cyber-green/20 overflow-hidden">
              {/* Terminal header */}
              <div className="bg-gray-900 p-3 border-b border-cyber-green/20 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto font-mono text-sm text-gray-400">tricky-mintu@cyberdeck:~/contact</div>
              </div>
              
              {/* Terminal content */}
              <div className="p-4 font-mono text-sm h-[400px] overflow-y-auto">
                {terminalMessages.map((msg, index) => (
                  <div key={index} className="mb-3">
                    {index === 0 ? (
                      <TerminalText
                        text={msg}
                        typingSpeed={20}
                        className="text-cyber-green"
                      />
                    ) : (
                      <div className={cn(
                        "text-gray-300",
                        msg.startsWith('>') ? "text-cyber-purple" : "text-cyber-green"
                      )}>
                        {msg.startsWith('>') ? <span className="text-cyber-green mr-2">$</span> : null}
                        {msg}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Blinking cursor */}
                {!submitted && (
                  <div className="h-4 w-2 bg-cyber-green animate-pulse inline-block"></div>
                )}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-900/40 rounded-lg border border-cyber-blue/20 p-6">
              <h3 className="text-2xl font-orbitron text-cyber-blue mb-6">
                <GlitchText text="DM ME DIRECTLY" hoverEffect={true} />
              </h3>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block font-mono text-sm text-gray-400 mb-2"
                    >
                      _your_identity
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark/70 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/50 font-mono"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="reason" 
                      className="block font-mono text-sm text-gray-400 mb-2"
                    >
                      _why_vibin_with_me
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={formState.reason}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark/70 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/50 font-mono appearance-none"
                    >
                      {contactReasons.map((reason, index) => (
                        <option key={index} value={reason} disabled={index === 0}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block font-mono text-sm text-gray-400 mb-2"
                    >
                      _your_message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-cyber-dark/70 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue/50 font-mono resize-none"
                      placeholder="I'll respond on socials..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-md transition-all duration-300 ease-out bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-mono font-bold"
                  >
                    <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-cyber-dark to-cyber-dark/70 group-hover:opacity-0 transition-opacity duration-300"></span>
                    <span className="relative group-hover:animate-text-glitch">TRANSMIT MESSAGE</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto bg-cyber-green/20 rounded-full flex items-center justify-center mb-4 border border-cyber-green">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-orbitron text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-400 font-rajdhani">I'll get back to you soon via social media.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-24 bg-cyber-dark/80 py-6 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-cyber-green text-xl font-orbitron font-bold mb-2">
                <span className="text-cyber-purple">&lt;</span>
                TRICKY
                <span className="text-cyber-blue">MINTU</span>
                <span className="text-cyber-purple">/&gt;</span>
              </div>
              <p className="text-gray-500 font-rajdhani">
                Designing, hacking, and building for fun since 2019
              </p>
            </div>
            
            <div className="text-gray-500 font-mono text-sm">
              <p>&copy; {new Date().getFullYear()} Mahesh Trikey. All rights reserved.</p>
              <p className="mt-1">
                <span className="text-cyber-green">$</span> Created with code, coffee, and cyberpunk vibes
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
