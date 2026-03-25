import { NAV_ITEMS } from '../config/navigation';
import type { PageId } from '../types/page';

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="w-full px-4 md:px-8">
        <div className="relative flex items-center h-14 md:h-16">
          <div className="flex items-center cursor-pointer -ml-4" onClick={() => onNavigate('home')}>
            <img src="/img/LgLogo.png" alt="logo" className="h-14 md:h-16 object-contain" />
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-14">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-lg font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } pb-1`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden ml-auto flex space-x-5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-xs font-medium ${currentPage === item.id ? 'text-blue-600' : 'text-gray-700'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

