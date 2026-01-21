export default function Home() {
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

  const totalImages = teamPhotos.length;
  const isOdd = totalImages % 2 === 1;
  const centerIndex = Math.floor(totalImages / 2);

  const getCardStyle = (index) => {
    let distanceFromCenter;
    
    if (isOdd) {
      distanceFromCenter = index - centerIndex;
    } else {
      distanceFromCenter = index < centerIndex ? index - centerIndex + 0.5 : index - centerIndex + 0.5;
    }
    
    const absDistance = Math.abs(distanceFromCenter);
    
    const configs = [
      { rotation: 5, depth: 12, opacity: 1, width: 'w-32', height: 'h-48', spacing: -2 },
      { rotation: 18, depth: 50, opacity: 0.9, width: 'w-36', height: 'h-56', spacing: 0 },
      { rotation: 35, depth: 70, opacity: 0.75, width: 'w-40', height: 'h-64', spacing: 10 },
      { rotation: 55, depth: 110, opacity: 0.6, width: 'w-44', height: 'h-72', spacing: 48 },
      { rotation: 75, depth: 150, opacity: 0.45, width: 'w-48', height: 'h-80', spacing: 90 },
      { rotation: 90, depth: 180, opacity: 0.35, width: 'w-52', height: 'h-96', spacing: 96 },
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

  return (
    <div className="min-h-screen bg-neutral-50 relative">
      {/* Subtle Grid Pattern - Full Page */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }}></div>
      
      {/* Large Gradient Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-40 blur-[120px] pointer-events-none" 
           style={{ background: `radial-gradient(circle, #8B7355, transparent 70%)` }}>
      </div>
      
      {/* Navigation */}
      <nav className="px-4 md:px-8 py-3 md:py-4 flex items-center justify-between max-w-[1400px] mx-auto relative z-10">
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm">
          <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Services</a>
          <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Features</a>
          <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Blog</a>
        </div>
       
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-lg md:text-xl font-bold tracking-tight">Flowblox</h1>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm">
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">About</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Pricing</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Contact</a>
          </div>
          <button className="bg-neutral-900 text-white px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm">
            Get started
            <svg className="w-3 md:w-3.5 h-3 md:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-4 md:px-8 pt-4 md:pt-6 pb-0 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-0 tracking-tight leading-[1.1]">
            Streamline Your Team,
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight leading-[1.1]">
            Supercharge Your Workflow
          </h3>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6 md:mb-7 px-4" style={{ color: '#8B7355' }}>
            All-in-one platform to plan, collaborate, and deliver — faster and smarter.
          </p>
          <button className="bg-neutral-900 text-white px-6 md:px-7 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-neutral-800 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
            Get started for Free
            <svg className="w-3.5 md:w-4 h-3.5 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
        
      {/* Team Photos Carousel - Pleine largeur */}
      <div className="w-full overflow-hidden -mt-4 md:-mt-6" style={{ perspective: '1000px' }}>
        <div className="flex items-center justify-center gap-3 md:gap-6 px-4" style={{ transformStyle: 'preserve-3d' }}>
          {teamPhotos.map((photo, index) => {
            const style = getCardStyle(index);
            return (
              <div
                key={photo.id}
                className={`flex-shrink-0 ${style.width} ${style.height} rounded-lg md:rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105`}
                style={{
                  transform: style.transform,
                  opacity: style.opacity,
                  marginLeft: style.marginLeft,
                  marginRight: style.marginRight,
                }}
              >
                <img
                  src={photo.url}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Features */}
      <div className="px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - Large Feature */}
            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 h-full" style={{ backgroundColor: 'rgba(139, 115, 85, 0.12)' }}>
                <div className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #8B7355, transparent)' }}></div>
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6" style={{ backgroundColor: '#8B7355', color: 'white' }}>
                    CORE FEATURE
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
                    Real-Time<br />Collaboration
                  </h3>
                  <p className="text-base mb-8 leading-relaxed" style={{ color: '#8B7355' }}>
                    Communicate seamlessly and keep everyone in sync with built-in messaging, file sharing, and live updates. Your team stays connected, no matter where they are.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
                      <span className="text-sm text-neutral-700">Instant messaging & notifications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
                      <span className="text-sm text-neutral-700">Real-time document editing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
                      <span className="text-sm text-neutral-700">Video calls & screen sharing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Stacked Features */}
            <div className="space-y-6">
              <div className="border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 bg-white" style={{ borderColor: '#8B7355' }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(139, 115, 85, 0.15)' }}>
                    <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#8B7355' }}></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-neutral-900">Task & Project Tracking</h4>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#8B7355' }}>
                      Assign tasks, set deadlines, and visualize progress with boards, lists, and timelines tailored to your team's style.
                    </p>
                    <a href="#" className="text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all" style={{ color: '#8B7355' }}>
                      Explore workflows
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 bg-white" style={{ borderColor: '#8B7355' }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(139, 115, 85, 0.15)' }}>
                    <div className="w-4 h-4 rotate-45" style={{ backgroundColor: '#8B7355' }}></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-neutral-900">Performance Insights</h4>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#8B7355' }}>
                      Make smarter decisions with analytics that show productivity trends, bottlenecks, and team workload balance.
                    </p>
                    <a href="#" className="text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all" style={{ color: '#BCAC93' }}>
                      View analytics
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="rounded-2xl p-8 relative overflow-hidden" style={{ backgroundColor: '#8B7355' }}>
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20" style={{ background: 'radial-gradient(circle, white, transparent)' }}></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-3 gap-6 text-center text-white">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold mb-1">99.9%</div>
                      <div className="text-xs opacity-90">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold mb-1">10k+</div>
                      <div className="text-xs opacity-90">Teams</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold mb-1">50k+</div>
                      <div className="text-xs opacity-90">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}