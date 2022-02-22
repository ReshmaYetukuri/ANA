import 'App.scss';
import { ShortKeysRestrictService } from 'modules/service/shortkeys.restrict.service';
import { useEffect } from 'react';

export const App = () => {
  // common function to restict broswer actions etc. do NOT remove
  useEffect(() => {
    ShortKeysRestrictService.restrictBrowserActions();
  }, []);

  return <></>
};

export default App;
