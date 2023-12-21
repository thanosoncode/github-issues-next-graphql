import GithubIcon from '../svg/GithubIcon';

const Footer = () => {
  const links = [
    'Terms',
    'Privacy',
    'Security',
    'Status',
    'Docs',
    'Manage cookies',
    'Do not share my personal information',
  ];

  return (
    <footer>
      <nav className='flex gap-2 items-center justify-center py-12 text-secondary-color text-xs'>
        <div className='flex gap-2 items-center'>
          <GithubIcon variant='gray' />
          &copy;2003 Github, Inc.
        </div>
        <ul className='flex gap-2'>
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
