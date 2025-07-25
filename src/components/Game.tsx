import Image from 'next/image';
import Link from 'next/link';

/**
 * Game Component Props
 * 
 * @interface GameProps
 * @property {string} title - The title of the game
 * @property {string} imageUrl - URL to the game's screenshot/image (16:9 ratio)
 * @property {string} windowsDownloadUrl - URL to download the Windows version
 * @property {string} macDownloadUrl - URL to download the Mac version
 * @property {string} feedbackUrl - URL to the feedback form
 */
interface GameProps {
  title: string;
  imageUrl: string;
  windowsDownloadUrl: string;
  macDownloadUrl: string;
  feedbackUrl: string;
}

/**
 * Game Component
 * 
 * Displays a game prototype with:
 * - 16:9 ratio game image
 * - Game title
 * - Download links for Windows and Mac
 * - Link to instructions and feedback form
 */
const Game: React.FC<GameProps> = ({
  title,
  imageUrl,
  windowsDownloadUrl,
  macDownloadUrl,
  feedbackUrl
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Game Image (16:9 ratio) */}
      <div className="relative aspect-video">
        <Image 
          src={imageUrl} 
          alt={`${title} screenshot`} 
          fill
          className="object-cover"
        />
      </div>
      
      {/* Game Info */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        
        {/* Download Links */}
        <div className="mb-3">
          <p className="font-medium mb-2">Download Test Build:</p>
          <div className="flex space-x-3">
            <Link 
              href={windowsDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1 bg-gray-100 text-black rounded hover:bg-gray-200 transition"
            >
              <span className="mr-1">Windows</span>
              <div className="relative w-4 h-4">
                <Image 
                  src="/images/games_build_icon_windows.png" 
                  alt="Windows icon" 
                  width={16} 
                  height={16} 
                />
              </div>
            </Link>
            <Link 
              href={macDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1 bg-gray-100 text-black rounded hover:bg-gray-200 transition"
            >
              <span className="mr-1">Mac</span>
              <div className="relative w-4 h-4">
                <Image 
                  src="/images/games_build_icon_mac.png" 
                  alt="Mac icon" 
                  width={16} 
                  height={16} 
                />
              </div>
            </Link>
          </div>
        </div>
        
        {/* Feedback Link */}
        <div>
          <Link 
            href={feedbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:text-blue-800 hover:underline transition"
          >
            Feedback Form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
