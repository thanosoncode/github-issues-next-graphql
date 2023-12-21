import BulletIcon from '../svg/BulletIcon';
import GithubIcon from '../svg/GithubIcon';

const Header = () => {
  return (
    <header className='text-sm pt-4 px-4 bg-background-accent-color border border-bottom border-border-color mb-6'>
      <div className='flex gap-4 items-center mb-2'>
        <GithubIcon />
        <nav>
          <ul className='flex gap-2'>
            <li>reactjs</li>
            <span>/</span>
            <li className='font-semibold'>react.dev</li>
          </ul>
        </nav>
      </div>
      <nav>
        <ul>
          <li className='font-semibold w-min gap2 h-12 px-3 flex gap-3 items-center justify-center border-b-2 border-red-color'>
            <BulletIcon variant='black' />
            Issues
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
