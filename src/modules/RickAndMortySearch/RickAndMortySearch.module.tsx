import { Button, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { rickAndMortySearchStoreActions } from './RickAndMortySearch.store';

export const RickAndMortySearch = () => {
  const searchText = useSelector((state: RootState) => state.rickAndMortySearch.searchText);
  const dispatch = useDispatch();
  const { setSearchText } = rickAndMortySearchStoreActions;

  return (
    <Grid>
      <TextField value={searchText} onChange={({ target: { value } }) => dispatch(setSearchText(value))} />
      <Button>search</Button>
    </Grid>
  );
};
