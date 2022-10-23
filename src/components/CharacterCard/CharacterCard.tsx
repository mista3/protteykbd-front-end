import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CharacterEntity } from '@/domain';

export const CharacterCard = ({ name, image, status, gender, species, type }: CharacterEntity) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component='img' height='150' image={image} alt={name} />
      <CardContent>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='caption' component='div'>
          gender: {gender}
        </Typography>
        <Typography variant='caption' component='div'>
          status: {status}
        </Typography>
        <Typography variant='caption' component='div'>
          species: {species}
        </Typography>
        {type && (
          <Typography variant='caption' component='div'>
            type: {type}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
