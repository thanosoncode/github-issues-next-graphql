import OpenIssueIcon from '../svg/OpenIssueIcon';
import GithubIcon from '../svg/GithubIcon';

const Header = () => {
  return (
    <header
      className='text-sm pt-4 px-4 bg-background-accent-color border border-bottom border-border-color mb-12'
      data-testid='header'
    >
      <div className='flex gap-4 items-center mb-2'>
        <GithubIcon variant='black' />
        <nav>
          <ul className='flex gap-2'>
            <li data-testid='repo-owner'>reactjs</li>
            <span>/</span>
            <li className='font-semibold' data-testid='repo-name'>
              react.dev
            </li>
          </ul>
        </nav>
      </div>
      <nav>
        <ul>
          <li
            className='font-semibold w-min gap2 h-12 px-3 flex gap-3 items-center justify-center border-b-2 border-red-color'
            data-testid='current-tab'
          >
            <OpenIssueIcon variant='black' />
            Issues
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
