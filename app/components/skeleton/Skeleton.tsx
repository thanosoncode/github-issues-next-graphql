const Skeleton = () => {
  const rows = [
    { width: 'w-[60%]' },
    { width: 'w-[40%]' },
    { width: 'w-[60%]' },
    { width: 'w-[30%]' },
    { width: 'w-[60%]' },
    { width: 'w-[40%]' },
    { width: 'w-[30%]' },
    { width: 'w-[50%]' },
  ];

  return (
    <>
      <div className='mx-auto w-full max-w-[1200px] px-8 text-sm'>
        <div className='rounded-md border border-border-color w-full mb-6'>
          <div className='bg-background-accent-color flex gap-4 h-[53px] items-center border-b border-border-color'>
            <div className='h-5 bg-gray-300 rounded ml-4 w-44'></div>
          </div>
          {rows.map((row, index) => {
            const isLast = index === rows.length - 1;
            return (
              <div
                key={index}
                className={`flex items-center h-[61px] hover:bg-background-accent-color ${
                  isLast ? '' : 'border-b border-border-color'
                }`}
              >
                <div
                  className={`h-4 bg-gray-300 rounded ml-4 ${row.width}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex gap-6 justify-center'>
        <div className='w-[90px] h-[24px] bg-gray-300 rounded'></div>
        <div className='w-[90px] h-[24px] bg-gray-300 rounded'></div>
      </div>
    </>
  );
};

export default Skeleton;
