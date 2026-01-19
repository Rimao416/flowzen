export default function Home() {
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

        {/* Team Photos Carousel - Full Screen Width */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-x-hidden mb-20" style={{ perspective: '2000px' }}>
          <div className="flex items-center justify-center gap-6 py-16" style={{ transformStyle: 'preserve-3d' }}>
            {/* Extrémités - LES PLUS GRANDES (paire 1) */}
            <div className="flex-shrink-0 w-64 h-96 rounded-2xl overflow-hidden shadow-2xl opacity-30" style={{ transform: 'rotateY(65deg) translateZ(280px)' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Paire 2 */}
            <div className="flex-shrink-0 w-52 h-80 rounded-2xl overflow-hidden shadow-2xl opacity-45" style={{ transform: 'rotateY(50deg) translateZ(220px)' }}>
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=700&fit=crop"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Paire 3 */}
            <div className="flex-shrink-0 w-44 h-68 rounded-2xl overflow-hidden shadow-2xl opacity-60" style={{ transform: 'rotateY(30deg) translateZ(150px)' }}>
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=700&fit=crop"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Centre - LES PLUS PETITES (paire 4) */}
            <div className="flex-shrink-0 w-32 h-48 rounded-2xl overflow-hidden shadow-2xl" style={{ transform: 'rotateY(8deg) translateZ(40px)' }}>
              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=700&fit=crop"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-32 h-48 rounded-2xl overflow-hidden shadow-2xl" style={{ transform: 'rotateY(-8deg) translateZ(40px)' }}>
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=700&fit=crop"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Paire 3 miroir */}
            <div className="flex-shrink-0 w-44 h-68 rounded-2xl overflow-hidden shadow-2xl opacity-60" style={{ transform: 'rotateY(-30deg) translateZ(150px)' }}>
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=700&fit=crop"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Paire 2 miroir */}
            <div className="flex-shrink-0 w-52 h-80 rounded-2xl overflow-hidden shadow-2xl opacity-45" style={{ transform: 'rotateY(-50deg) translateZ(220px)' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Extrémité droite - LA PLUS GRANDE (paire 1 miroir) */}
            <div className="flex-shrink-0 w-64 h-96 rounded-2xl overflow-hidden shadow-2xl opacity-30" style={{ transform: 'rotateY(-65deg) translateZ(280px)' }}>
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=700&fit=crop"
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features */}
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
      </main>
    </div>
  );
}