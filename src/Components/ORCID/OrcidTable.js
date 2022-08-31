import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
// import Vcard from '../Vcard/Vcard';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { Link } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
import { QRCodeSVG } from 'qrcode.react';
import { useSelector, useDispatch } from 'react-redux';
import {
    inputOrcidData,
    getDataFromApiOrcid,
    deleteOrcidData,
    editOrcidData,
    // addOrcidData,
} from './OrcidSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function OrcidTable() {
    const dispatch = useDispatch();

    // const [orcidURL, setOricdURL] = useState("");
    // const orcidList = useSelector(inputOrcidData);
   
    useEffect(() => {
        dispatch(getDataFromApiOrcid())
    }, [])

    // const [orcidList, setOrcidList] = useState([]);
    // const getoricddata = async () => {
    //     await Axios.get("http://localhost:8080/data/orcid").then((response) => {
    //         console.log(response.data)
    //         setOrcidList(response.data);
    //     });
    // }


    // --------------------------------------------Button in DataGrid--------------------------------------------
    const RenderDate = (props) => {
        // console.log("btn props:", props.row.orcidURL)
        const [orcidURL, setOricdURL] = useState("");

        const [neworcidURL, setNewOrcidURL] = useState("");

        const editOrcidFunction = () => {

            dispatch(editOrcidData({
                id: props.row.id,
                orcidURL: neworcidURL,
            }))
        }

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 5,
            p: 4,
            borderRadius: 5,
            border: 1.5,
            borderColor: "#A02337",
        };

        const styleEdit = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 1050,
            height: 150,
            bgcolor: 'background.paper',
            boxShadow: 5,
            p: 4,
            borderRadius: 5,
            border: 1.5,
            borderColor: "#A02337",
        };

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true)
        };
        const handleClose = () => setOpen(false);

        const [editOpen, setEditOpen] = React.useState(false);
        const handleEditOpen = () => {
            setEditOpen(true)
        };
        const handleEditClose = () => setEditOpen(false);

        const { hasFocus, value } = props;
        const buttonElement = React.useRef(null);
        const rippleRef = React.useRef(null);

        React.useLayoutEffect(() => {
            if (hasFocus) {
                const input = buttonElement.current?.querySelector('input');
                input?.focus();
            } else if (rippleRef.current) {
                // Only available in @mui/material v5.4.1 or later
                rippleRef.current.stop({});
            }
        }, [hasFocus]);

        return (
            <>
                <Button
                    component="button"
                    ref={buttonElement}
                    touchRippleRef={rippleRef}
                    variant="outlined"
                    size="small"
                    style={{ marginLeft: 16 }}
                    // Remove button from tab sequence when cell does not have focus
                    tabIndex={hasFocus ? 0 : -1}
                    onKeyDown={(event) => {
                        if (event.key === ' ') {
                            // Prevent key navigation when focus is on button
                            event.stopPropagation();
                        }
                    }}
                    onClick={() => {
                        setOpen(true);
                        setOricdURL(props?.row?.orcidURL);
                    }}
                >
                    Open Qrcord
                </Button>

                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h4" sx={{ fontWeight: 'bold', p: 0.5 }} component="h2" >
                            Qr Code
                        </Typography>
                        <QRCodeSVG
                            value={orcidURL}
                        />
                        <Button onClick={handleClose}>Close</Button>
                        <Button>
                            save QRcode
                        </Button>
                        {/* <ReactSVG src="svg.svg" /> */}
                    </Box>
                </Modal>

                <Button
                    component="button"
                    variant="outlined"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        setNewOrcidURL(props.row.orcidURL)
                        setEditOpen(true)
                    }}
                    endIcon={<EditSharpIcon />}
                >
                    Edit
                </Button>

                <Modal
                    keepMounted
                    open={editOpen}
                    onClose={handleEditClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={styleEdit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography id="keep-mounted-modal-title" variant="h4" align="center">
                                    Edit Data
                                </Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Typography variant='h5'>
                                    https://orcid.org/
                                </Typography>
                            </Grid>

                            <Grid item xs={10} >
                                <TextField
                                    required
                                    id="ORCID"
                                    label="0000111122223333"
                                    size="small"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewOrcidURL(event.target.value); }}
                                    value={neworcidURL}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <Stack spacing={2} direction="row" justifyContent="flex-end">
                                    <Button variant="outlined" href="#contained-buttons" onClick={handleEditClose} >
                                        Close
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        href="#contained-buttons"
                                        // onClick={() => {
                                        //     dispatch(editOrcidData({
                                        //         id: props.row.id, // props.row 係舊id資料, 先可以對岩想edit 個行資料
                                        //         orcidURL: neworcidURL,  // neworcidURL set 返新input
                                        //     })); handleEditClose(); return alert("Data Updated!!")
                                        // }}
                                        onClick={() => {
                                            editOrcidFunction(); handleEditClose()
                                        }}
                                    >
                                        Save
                                    </Button>
                                </Stack>
                            </Grid>

                        </Grid>
                    </Box>

                </Modal>

                <Button
                    component="button"
                    variant="outlined"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        dispatch(deleteOrcidData({ id: props.row.id }))
                    }}
                    endIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            </>
        );
    };

    // console.log("qrcode orcidURL", orcidURL)


    RenderDate.propTypes = {
        /**
         * If true, the cell is the active element.
         */
        hasFocus: PropTypes.bool.isRequired,
        /**
         * The cell value, but if the column has valueGetter, use getValue.
         */
        value: PropTypes.instanceOf(Date),
    };

    // --------------------------------------------Button in DataGrid--------------------------------------------
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'orcidURL', headerName: 'ORCID', width: 400 },
        { field: 'Action', headerName: 'Action', width: 350, renderCell: RenderDate },
    ];

    const orcidList = useSelector(inputOrcidData);

    return (
        <>
            <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    rows={orcidList}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </>
    )
}

export default OrcidTable;
