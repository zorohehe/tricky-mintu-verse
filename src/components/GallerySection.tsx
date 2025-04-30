
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface GalleryItem {
  id: number;
  type: 'ui' | 'design' | 'render' | 'video';
  title: string;
  image: string;
  description: string;
}

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ui', label: 'UI/UX' },
    { id: 'design', label: 'Designs' },
    { id: 'render', label: '3D Renders' },
    { id: 'video', label: 'Video Edits' }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'ui',
      title: 'E-commerce Dashboard',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      description: 'Admin dashboard for an e-commerce platform'
    },
    {
      id: 2,
      type: 'ui',
      title: 'Crypto Wallet UI',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      description: 'Mobile interface for a cryptocurrency wallet'
    },
    {
      id: 3,
      type: 'design',
      title: 'Tech Event Poster',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      description: 'Promotional poster for a tech conference'
    },
    {
      id: 4,
      type: 'render',
      title: 'Futuristic Room',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      description: '3D render of a cyberpunk-themed room'
    },
    {
      id: 5,
      type: 'design',
      title: 'Logo Collection',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      description: 'Various logo designs for tech companies'
    },
    {
      id: 6,
      type: 'video',
      title: 'Motion Graphics Intro',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      description: 'Intro animation for a YouTube channel'
    },
    {
      id: 7,
      type: 'render',
      title: 'Cyber Character',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      description: '3D character design with cyberpunk aesthetics'
    },
    {
      id: 8,
      type: 'ui',
      title: 'News App Interface',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      description: 'UI design for a tech news application'
    },
    {
      id: 9,
      type: 'video',
      title: 'Tech Product Showcase',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      description: 'Video edit showcasing a new tech product'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeFilter);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-cyber-orange neon-blue">&lt;</span>
            <span className="text-white">GALLERY</span>
            <span className="text-cyber-orange neon-blue">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-orange to-cyber-pink mx-auto"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={cn(
                "px-6 py-2 rounded-md font-mono text-sm transition-colors duration-300",
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-cyber-orange to-cyber-pink text-white"
                  : "bg-gray-800/60 text-gray-400 hover:bg-gray-800/80 hover:text-gray-300"
              )}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div 
          ref={galleryRef} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] aspect-square"
              onClick={() => openModal(item)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-70"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                <div className="bg-cyber-dark/80 p-3 rounded-md backdrop-blur-sm border border-gray-700/50">
                  <h3 className="text-lg font-orbitron text-white mb-1">{item.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={cn(
                      "text-xs uppercase font-mono px-2 py-0.5 rounded",
                      item.type === 'ui' ? "bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30" :
                      item.type === 'design' ? "bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30" :
                      item.type === 'render' ? "bg-cyber-green/20 text-cyber-green border border-cyber-green/30" :
                      "bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/30"
                    )}>
                      {item.type}
                    </span>
                    <span className="text-gray-400 text-sm">Click to view</span>
                  </div>
                </div>
              </div>

              {/* Type indicator in corner */}
              <div className="absolute top-3 right-3">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  item.type === 'ui' ? "bg-cyber-blue" :
                  item.type === 'design' ? "bg-cyber-purple" :
                  item.type === 'render' ? "bg-cyber-green" :
                  "bg-cyber-pink"
                )}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Display message if no items match filter */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No gallery items found for this filter.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full bg-gray-900/90 rounded-lg overflow-hidden border border-gray-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-700/50">
              <h3 className="text-xl font-orbitron text-white">{selectedItem.title}</h3>
              <button 
                className="text-gray-400 hover:text-white focus:outline-none"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative aspect-video">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-300">{selectedItem.description}</p>
              <div className="mt-4 flex items-center space-x-2">
                <span className={cn(
                  "text-xs uppercase font-mono px-2 py-0.5 rounded",
                  selectedItem.type === 'ui' ? "bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30" :
                  selectedItem.type === 'design' ? "bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30" :
                  selectedItem.type === 'render' ? "bg-cyber-green/20 text-cyber-green border border-cyber-green/30" :
                  "bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/30"
                )}>
                  {selectedItem.type}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
