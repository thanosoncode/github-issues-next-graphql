import { SearchParams } from './utils/types';
import Header from './components/header/Header';
import Issues from './components/issues/Issues';
import { Suspense } from 'react';
import Footer from './components/footer/Footer';
import Skeleton from './components/skeleton/Skeleton';

const Home = async ({ searchParams }: SearchParams) => {
  const open = searchParams.open === 'false' ? false : true;

  return (
    <>
      <Header />
      <Suspense key={Math.random()} fallback={<Skeleton />}>
        <Issues searchParams={{ searchParams }} open={open} />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
