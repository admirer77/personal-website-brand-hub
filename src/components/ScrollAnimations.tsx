import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isInView] as const;
};

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'zoom-in' | 'bounce-in' | 'rubber-band' | 'tada' | 'jello';
  delay?: number;
  className?: string;
}

export const ScrollAnimation = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? `animate-${animation}` : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const TypewriterEffect = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className="relative">
      {displayText}
      {showCursor && <span className="animate-blink">|</span>}
    </span>
  );
};

export const MorphingShape = ({ size = 100, className = '' }: { size?: number; className?: string }) => {
  return (
    <div
      className={`animate-morphing bg-gradient-to-br from-primary to-accent opacity-20 ${className}`}
      style={{
        width: size,
        height: size,
        animationDuration: '8s'
      }}
    />
  );
};

export const FloatingElement = ({ 
  children, 
  duration = 3,
  delay = 0 
}: { 
  children: React.ReactNode; 
  duration?: number;
  delay?: number;
}) => {
  return (
    <div
      className="animate-float"
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};