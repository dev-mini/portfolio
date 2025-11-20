import { useAppContext } from '@/context/AppContext';
import { AnimatedThemeToggler } from './AnimatedThemeToggler';

export const Header = () => {
  const { english, toggleLanguage } = useAppContext();

  return (
    <header>
      <nav className="flex justify-center md:justify-end items-center z-10">
        <ul className="flex gap-x-6 items-center">
          <li>
            <button type="button" onClick={toggleLanguage}>
              {english ? 'ES' : 'EN'}
            </button>
          </li>
          <li>
            <AnimatedThemeToggler />
          </li>
        </ul>
      </nav>
    </header>
  );
};
