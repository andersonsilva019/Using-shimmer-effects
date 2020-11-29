import React, {useState, useEffect} from 'react';

import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import AdBanner from '../AdBanner';


import { Container } from './styles';

const Layout: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container>
      <MobileHeader/>
      <DesktopHeader/>
      <span>
        {!isLoading && <AdBanner/>}
      </span>
      <main>
        <LeftColumn isLoading={isLoading}/>
        <MiddleColumn isLoading={isLoading}/>
        <RightColumn isLoading={isLoading}/>
      </main>
    </Container>
  );
}

export default Layout;