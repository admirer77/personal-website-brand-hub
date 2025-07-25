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
      
      for (let i = 0; i < 25; i++) {
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

  // Calculate color based on scroll position
  const getParticleColor = () => {
    const scrollProgress = Math.min(scrollY / 500, 1); // 500px scroll to fully transition
    
    if (scrollProgress < 0.5) {
      // Orange to Yellow transition
      const progress = scrollProgress * 2;
      const hue = 24 + (36 * progress); // 24 (orange) to 60 (yellow)
      return `hsl(${hue}, 100%, ${50 + (progress * 10)}%)`;
    } else {
      // Yellow to Blue transition
      const progress = (scrollProgress - 0.5) * 2;
      const hue = 60 + (160 * progress); // 60 (yellow) to 220 (blue)
      return `hsl(${hue}, ${100 - (progress * 30)}%, ${60 - (progress * 10)}%)`;
    }
  };

  const particleColor = getParticleColor();

  return (
    <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
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
            boxShadow: `0 0 ${particle.size * 3}px ${particleColor}`,
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default HeroParticles;