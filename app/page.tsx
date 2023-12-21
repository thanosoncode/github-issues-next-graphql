import { SearchParams } from './utils/types';
import Header from './components/header/Header';
import Issues from './components/issues/Issues';
import { Suspense } from 'react';
import Footer from './components/footer/Footer';

const Home = async ({ searchParams }: SearchParams) => {
  const open = searchParams.open === 'false' ? false : true;

  return (
    <>
      <Header />
      <Suspense fallback={<div className='ml-8 mt-12'>Getting issues...</div>}>
        <Issues searchParams={{ searchParams }} open={open} />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
