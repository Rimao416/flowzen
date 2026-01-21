"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  // Configuration dynamique du carousel
  const teamPhotos = [
    { id: 1, url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop" },
    { id: 2, url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=700&fit=crop" },
    { id: 3, url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=700&fit=crop" },
    { id: 4, url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=700&fit=crop" },
    { id: 5, url: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=700&fit=crop" },
    { id: 6, url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=700&fit=crop" },
    { id: 7, url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=700&fit=crop" },
    { id: 8, url: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=700&fit=crop" },
    { id: 9, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=700&fit=crop" },
    { id: 10, url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=700&fit=crop" },
  ];

  const [offset, setOffset] = useState(0);

  // Rotation automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => (prev + 1) % teamPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [teamPhotos.length]);

  // Calcul pour centrer parfaitement
  const totalImages = teamPhotos.length;
  const isOdd = totalImages % 2 === 1;
  const centerIndex = Math.floor(totalImages / 2);

  // Fonction pour calculer les propriétés de chaque carte
  const getCardStyle = (index) => {
    let distanceFromCenter;
    
    if (isOdd) {
      distanceFromCenter = index - centerIndex;
    } else {
      distanceFromCenter = index < centerIndex ? index - centerIndex + 0.5 : index - centerIndex + 0.5;
    }
    
    const absDistance = Math.abs(distanceFromCenter);
    
    const configs = [
      { rotation: 5, depth: 12, opacity: 1, width: 'w-24', height: 'h-40', spacing: -2 },
      { rotation: 18, depth: 35, opacity: 0.8, width: 'w-28', height: 'h-44', spacing: 0 },
      { rotation: 35, depth: 70, opacity: 0.6, width: 'w-32', height: 'h-48', spacing: 10 },
      { rotation: 55, depth: 110, opacity: 0.4, width: 'w-36', height: 'h-56', spacing: 48 },
      { rotation: 75, depth: 150, opacity: 0.2, width: 'w-40', height: 'h-76', spacing: 90 },
      { rotation: 90, depth: 180, opacity: 0.15, width: 'w-44', height: 'h-72', spacing: 96 },
    ];
    
    const configIndex = Math.min(Math.floor(absDistance), configs.length - 1);
    const config = configs[configIndex];
    
    const rotation = distanceFromCenter > 0 ? -config.rotation : config.rotation;
    const marginLeft = distanceFromCenter > 0 ? `${config.spacing}px` : '0';
    const marginRight = distanceFromCenter < 0 ? `${config.spacing}px` : '0';
    
    return {
      transform: `rotateY(${rotation}deg) translateZ(${config.depth}px)`,
      opacity: config.opacity,
      width: config.width,
      height: config.height,
      marginLeft,
      marginRight,
    };
  };

  // Fonction pour obtenir l'image correspondant à chaque position
  const getImageForPosition = (position) => {
    const imageIndex = (position + offset) % teamPhotos.length;
    return teamPhotos[imageIndex];
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="px-8 py-5 flex items-center justify-between max-w-[1400px] mx-auto">
        <div className="flex items-center gap-10 text-sm">
          <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Services</a>
          <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Features</a>
          <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Blog</a>
        </div>
       
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl font-bold tracking-tight">Flowblox</h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-10 text-sm">
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">About</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Pricing</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Contact</a>
          </div>
          <button className="bg-neutral-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm">
            Get started
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-8 pt-20 pb-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-7xl font-light mb-1 tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Streamline Your Team,
          </h2>
          <h3 className="text-7xl font-bold mb-6 tracking-tight leading-tight">
            Supercharge Your Workflow
          </h3>
          <p className="text-neutral-600 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            All-in-one platform to plan, collaborate, and deliver — faster and smarter.
          </p>
          <button className="bg-neutral-900 text-white px-7 py-3 rounded-full text-base font-semibold hover:bg-neutral-800 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
            Get started for Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
     
      {/* Team Photos Carousel - Cards fixes, images qui changent */}
      <div className="w-full overflow-hidden mb-20" style={{ perspective: '700px' }}>
        <div className="flex items-center justify-center py-14 px-8 gap-6" style={{ transformStyle: 'preserve-3d' }}>
          {Array.from({ length: totalImages }).map((_, index) => {
            const style = getCardStyle(index);
            const currentImage = getImageForPosition(index);
            
            return (
              <div
                key={index}
                className={`flex-shrink-0 ${style.width} ${style.height} rounded-xl overflow-hidden shadow-xl`}
                style={{
                  transform: style.transform,
                  opacity: style.opacity,
                  marginLeft: style.marginLeft,
                  marginRight: style.marginRight,
                }}
              >
                <img
                  src={currentImage.url}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                  key={currentImage.id}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Features */}
      <div className="px-8 pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-16 px-4">
          <div className="text-center">
            <h4 className="text-base font-bold mb-3 text-neutral-900">Real-Time Collaboration</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Communicate seamlessly and keep everyone in sync with built-in messaging, file sharing, and live updates.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-base font-bold mb-3 text-neutral-900">Task & Project Tracking</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Assign tasks, set deadlines, and visualize progress with boards, lists, and timelines tailored to your team's style.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-base font-bold mb-3 text-neutral-900">Performance Insights</h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Make smarter decisions with analytics that show productivity trends, bottlenecks, and team workload balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}