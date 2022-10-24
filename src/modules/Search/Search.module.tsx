import { useDispatch, useSelector } from 'react-redux';
import { Button, LinearProgress, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { RootState } from '@/store';
import { searchStoreActions } from '@/modules';
import { CharacterCard } from '@/components';
import { FETCH_STATUS } from '@/globals';
import { genderOptions, statusOptions } from './Search.consts';
import { inputSx } from './Search.styles';
import { IconSettings } from '@/icons';

export const Search = () => {
  const { characters, name, status, species, type, gender, fetchStatus } = useSelector(
    (state: RootState) => state.search
  );
  const dispatch = useDispatch<any>();
  const { searchCharacters, setName, setStatus, setSpecies, setType, setGender } = searchStoreActions;

  return (
    <Stack spacing={2}>
      <IconSettings />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(searchCharacters({ name, status, species, type, gender }));
        }}
      >
        <Stack direction='row' spacing={1}>
          <TextField
            value={name}
            onChange={({ target: { value } }) => dispatch(setName(value))}
            label='name'
            sx={inputSx}
          />
          <TextField
            select
            value={status}
            onChange={({ target: { value } }) => dispatch(setStatus(value))}
            label='status'
            sx={inputSx}
          >
            <MenuItem value=''>Clear</MenuItem>
            {statusOptions.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
          <TextField
            value={species}
            onChange={({ target: { value } }) => dispatch(setSpecies(value))}
            label='species'
            sx={inputSx}
          />
          <TextField
            value={type}
            onChange={({ target: { value } }) => dispatch(setType(value))}
            label='type'
            sx={inputSx}
          />
          <TextField
            select
            value={gender}
            onChange={({ target: { value } }) => dispatch(setGender(value))}
            label='gender'
            sx={inputSx}
          >
            <MenuItem value=''>Clear</MenuItem>
            {genderOptions.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
          <Button type='submit' variant='contained'>
            search
          </Button>
        </Stack>
      </form>
      {
        {
          [FETCH_STATUS.IDLE]: <></>,
          [FETCH_STATUS.PENDING]: <LinearProgress />,
          [FETCH_STATUS.FULFILLED]: (
            <Stack direction='row' flexWrap='wrap' gap={2}>
              {characters.length ? characters.map((character) => <CharacterCard {...character} />) : 'нету'}
            </Stack>
          ),
          [FETCH_STATUS.REJECTED]: <Typography>No results found</Typography>,
        }[fetchStatus]
      }
    </Stack>
  );
};
