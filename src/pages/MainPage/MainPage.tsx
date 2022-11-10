import { KeyboardCard } from '@/components';
import { observer } from 'mobx-react-lite';
import './MainPage.scss';

export const MainPage = observer(() => {
  return (
    <div className='page main-page'>
      <div className='keyboards'>
        {new Array(10).fill(null).map((_, i) => (
          <KeyboardCard key={i} imageLeft={!!(i % 2)} />
        ))}
      </div>
    </div>
  );
});
