import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { RootState } from '@/store';
import { searchStoreActions } from '@/modules';

export const Search = () => {
  const { characters, name, status, species, type, gender } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const { searchCharacters, setName, setStatus, setSpecies, setType, setGender } = searchStoreActions;

  return (
    <Grid container>
      <Grid item xs={2.4}>
        <TextField value={name} onChange={({ target: { value } }) => dispatch(setName(value))} label='name' />
      </Grid>
      <Grid item xs={2.4}>
        <TextField value={status} onChange={({ target: { value } }) => dispatch(setStatus(value))} label='status' />
      </Grid>
      <Grid item xs={2.4}>
        <TextField value={species} onChange={({ target: { value } }) => dispatch(setSpecies(value))} label='species' />
      </Grid>
      <Grid item xs={2.4}>
        <TextField value={type} onChange={({ target: { value } }) => dispatch(setType(value))} label='type' />
      </Grid>
      <Grid item xs={2.4}>
        <TextField value={gender} onChange={({ target: { value } }) => dispatch(setGender(value))} label='gender' />
      </Grid>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {characters.map(({ name }) => (
          <Typography>{name}</Typography>
        ))}
      </div>
      <Button onClick={() => dispatch(searchCharacters({ name, status, species, type, gender }))}>press</Button>
    </Grid>
  );
};
