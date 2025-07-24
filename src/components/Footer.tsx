import Link from 'next/link';
import Image from 'next/image';

/**
 * Footer Component
 * 
 * Displays the footer section with social media links:
 * - Twitter/X link with icon
 * - Discord link with icon
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-center">© {new Date().getFullYear()} Thinker Tortoise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
