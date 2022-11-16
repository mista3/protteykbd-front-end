import { SearchRounded } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';

import './Search.scss';

export const Search = observer(() => {
  return (
    <div className='search'>
      <TextField />
      <IconButton>
        <SearchRounded />
      </IconButton>
    </div>
  );
});
