import Image from 'next/image';

/**
 * Header Component
 * 
 * This component represents the top section of the game studio landing page.
 * It consists of a full-width background image and a centered logo.
 * 
 * Props:
 * - backgroundImage: URL for the background banner image
 * - logoImage: URL for the studio logo
 */
interface HeaderProps {
  backgroundImage: string;
  logoImage: string;
}

export default function Header({ backgroundImage, logoImage }: HeaderProps) {
  return (
    <header className="relative w-full" style={{ height: '300px' }}>
      {/* Background banner image - covers full width while maintaining aspect ratio */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      
      {/* Centered logo container */}
      <div className="relative flex justify-center items-center h-full">
        {/* Logo image - will maintain its aspect ratio */}
        <div className="relative w-48 h-48">
          <Image
            src={logoImage}
            alt="Game Studio Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </header>
  );
}
