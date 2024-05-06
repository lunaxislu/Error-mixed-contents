import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';
import HomeCalender from './homeCalender/HomeCalender';
import HomeGallery from './homeGallery/HomeGallery';
import HomeMap from './homeMap/HomeMap';
import Jumbotron from './jumbotron/Jumbotron';

const Home = () => {
  const { isMobileQuery: isMobileMax1024 } = useMobile('(max-width:1024px)');

  return (
    <div className={cn('w-full h-auto')}>
      <Jumbotron />
      {!isMobileMax1024 && (
        <>
          <HomeMap />
          <HomeCalender />
          <HomeGallery />
        </>
      )}
    </div>
  );
};

export default Home;
