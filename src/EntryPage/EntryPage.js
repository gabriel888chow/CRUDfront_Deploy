import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginURLAsync } from '../login/loginSlice';
import CircularProgress from '@mui/material/CircularProgress';

function EntryPage(props) {
    const { classes } = props;
    const loginURL = useSelector(selectLogin)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLoginURLAsync())
    }, [])

    useEffect(() => {
        if (loginURL !== "") {
            window.location.href = loginURL
        }
    }, [loginURL])

    return (
        <Paper className={window.innerWidth >= 1024 ? classes.paper_BackgroundForModalForms_Laptop : window.innerWidth >= 768 ? classes.paper_BackgroundForModalForms_Pad : classes.paper_BackgroundForModalForms_Mobile}>
            <Typography variant="h3">
                Loading...
            </Typography>
            <CircularProgress />
        </Paper>
    )
}

export default EntryPage