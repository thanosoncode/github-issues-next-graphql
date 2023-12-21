const OpenIssueIcon = ({ variant }: { variant: 'black' | 'green' }) => {
  const fill = variant === 'black' ? '#1f2328' : '#1B7F36';

  return (
    <svg
      viewBox='0 0 16 16'
      version='1.1'
      width='16'
      height='16'
      aria-hidden='true'
      fill={fill}
      data-testid='open-issue-icon'
    >
      <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'></path>
      <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z'></path>
    </svg>
  );
};

export default OpenIssueIcon;
