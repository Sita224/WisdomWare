import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import MenuList from '../components/MenuList';

const Content = () => {
    return <Grid container>
        <Grid item xs={3} display="flex">
            <Box flex={1}><MenuList /></Box>
        </Grid>
        <Grid item xs={9} display="flex">
            <Box flex={1} bgcolor='#fff'>
                Content
            </Box>
        </Grid>
    </Grid>
}

export default Content;