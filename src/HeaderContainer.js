import { useEffect } from 'react';
// import {useState} from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from './components/Header';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const HeaderContainer = () => {
    // const [count, setCount] = useState(0)
    // const handler = () => {
    //   setCount(count + 1)
    // }
    useEffect(() => {
        // console.log('header')
    }, [])
    return (

        <Grid container>
            <Grid item xs={12}>
                <Item>
                    <Header />
                </Item>
            </Grid>
        </Grid>
    )
}

export default HeaderContainer;