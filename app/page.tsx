import { SearchParams } from './utils/types';
import Header from './components/header/Header';
import Issues from './components/issues/Issues';
import { Suspense } from 'react';

const Home = async ({ searchParams }: SearchParams) => {
  const open = searchParams.open === 'false' ? false : true;

  return (
    <>
      <Header />
      <Suspense fallback={<div className='ml-8 mt-6'>Getting issues...</div>}>
        <Issues searchParams={{ searchParams }} open={open} />
      </Suspense>
    </>
  );
};

export default Home;
