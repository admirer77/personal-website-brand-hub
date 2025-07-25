import { FloatingElement } from "./ScrollAnimations";
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Lightbulb, 
  Users,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Download,
  ExternalLink
} from "lucide-react";

interface FloatingLogosProps {
  section: 'hero' | 'about' | 'experience' | 'skills' | 'projects' | 'education' | 'contact';
}

const FloatingLogos = ({ section }: FloatingLogosProps) => {
  const getLogosForSection = () => {
    switch (section) {
      case 'hero':
        return [
          { Icon: Code, delay: 0, duration: 4, position: 'top-10 left-10' },
          { Icon: Database, delay: 1, duration: 5, position: 'top-20 right-20' },
          { Icon: Cloud, delay: 2, duration: 6, position: 'bottom-32 left-1/4' },
          { Icon: Lightbulb, delay: 3, duration: 4.5, position: 'top-1/3 right-1/4' }
        ];
      case 'skills':
        return [
          { Icon: Code, delay: 0, duration: 5, position: 'top-20 left-16' },
          { Icon: Database, delay: 1.5, duration: 4.5, position: 'bottom-24 right-20' },
          { Icon: Cloud, delay: 3, duration: 6, position: 'top-1/3 left-1/4' },
          { Icon: Cpu, delay: 2, duration: 5.5, position: 'bottom-32 left-32' },
          { Icon: Lightbulb, delay: 0.5, duration: 4.8, position: 'top-16 right-1/3' }
        ];
      case 'about':
        return [
          { Icon: Users, delay: 0, duration: 5, position: 'top-16 right-16' },
          { Icon: Briefcase, delay: 1.5, duration: 4, position: 'bottom-20 left-20' },
          { Icon: GraduationCap, delay: 3, duration: 6, position: 'top-1/2 left-12' },
          { Icon: Code, delay: 2, duration: 4.5, position: 'bottom-32 right-32' }
        ];
      case 'experience':
        return [
          { Icon: Briefcase, delay: 0, duration: 5.5, position: 'top-12 left-16' },
          { Icon: Code, delay: 2, duration: 4, position: 'bottom-16 right-20' },
          { Icon: Cloud, delay: 1, duration: 6, position: 'top-1/3 right-12' },
          { Icon: Database, delay: 3.5, duration: 5, position: 'bottom-32 left-32' }
        ];
      case 'projects':
        return [
          { Icon: Github, delay: 0, duration: 4.5, position: 'top-20 left-12' },
          { Icon: ExternalLink, delay: 1.5, duration: 5, position: 'bottom-24 right-16' },
          { Icon: Cpu, delay: 3, duration: 6, position: 'top-1/2 left-1/4' },
          { Icon: Database, delay: 2.5, duration: 4.8, position: 'top-16 right-1/3' }
        ];
      case 'education':
        return [
          { Icon: GraduationCap, delay: 0, duration: 5, position: 'top-16 right-20' },
          { Icon: Lightbulb, delay: 2, duration: 4.5, position: 'bottom-20 left-16' },
          { Icon: Code, delay: 1, duration: 5.5, position: 'top-1/3 left-1/3' }
        ];
      case 'contact':
        return [
          { Icon: Mail, delay: 0, duration: 5, position: 'top-12 left-20' },
          { Icon: Phone, delay: 1, duration: 4.5, position: 'top-20 right-16' },
          { Icon: Linkedin, delay: 2.5, duration: 6, position: 'bottom-16 left-1/3' },
          { Icon: Github, delay: 1.8, duration: 5.2, position: 'bottom-32 right-24' }
        ];
      default:
        return [];
    }
  };

  const logos = getLogosForSection();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 z-10">
      {logos.map(({ Icon, delay, duration, position }, index) => (
        <FloatingElement key={index} delay={delay} duration={duration}>
          <div className={`absolute ${position} w-10 h-10 text-orange-500/60 dark:text-orange-400/60`}>
            <Icon className="w-full h-full animate-spin-slow drop-shadow-lg" />
          </div>
        </FloatingElement>
      ))}
    </div>
  );
};

export default FloatingLogos;