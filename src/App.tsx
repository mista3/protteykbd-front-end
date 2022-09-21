import {Button, Typography} from '@mui/material';
import React, {useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';

export default function App() {
	const [ count, setCount ] = useState(0);

	const gridItemSx = {display: 'flex', justifyContent: 'center'};

	return (
		<Grid
			container sx={ {margin: 'auto'} }>
			<Grid xs={ 12 } sx={ gridItemSx }>
				<Typography>count: { count }</Typography>
			</Grid>
			<Grid	xs={ 12 } sx={ gridItemSx }>
				<Button
					variant='contained'	onClick={ () => {
						setCount(count + 1);
					} }
				>
					increase
				</Button>
			</Grid>
		</Grid>
	);
}
