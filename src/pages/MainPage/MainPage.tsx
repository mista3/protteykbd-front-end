import { observer } from 'mobx-react-lite';
import { Items } from '@/components';

import './MainPage.scss';

export const MainPage = observer(() => {
  return (
    <div className='page main-page'>
      <Items />
    </div>
  );
});
