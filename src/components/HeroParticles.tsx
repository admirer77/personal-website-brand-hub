import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const HeroParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.08,
          speedY: (Math.random() - 0.5) * 0.08,
          opacity: Math.random() * 0.3 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;
        
        // Smooth continuous movement with gentle wrapping
        if (newX > window.innerWidth + 20) newX = -20;
        if (newX < -20) newX = window.innerWidth + 20;
        if (newY > window.innerHeight + 20) newY = -20;
        if (newY < -20) newY = window.innerHeight + 20;
        
        return {
          ...particle,
          x: newX,
          y: newY
        };
      }));
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(animateParticles, 16); // 60fps

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Calculate color based on scroll position and theme
  const getParticleColor = () => {
    const scrollProgress = Math.min(scrollY / 800, 1);
    
    if (scrollProgress < 0.2) {
      // Orange hero section - much darker particles for better visibility
      return `hsl(30, 80%, 20%)`;
    } else {
      // Other sections - bright orange particles for better visibility on white/dark backgrounds
      return `hsl(24, 100%, 45%)`;
    }
  };

  const particleColor = getParticleColor();

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particleColor,
            opacity: particle.opacity,
            borderRadius: '50%',
            boxShadow: `0 0 ${particle.size * 8}px ${particleColor}, 0 0 ${particle.size * 16}px ${particleColor}60, 0 0 ${particle.size * 24}px ${particleColor}30`,
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default HeroParticles;