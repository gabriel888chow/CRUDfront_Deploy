import React, { useState } from 'react';
import { connect } from 'react-redux';
// import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { vCardQrcodeListInChinese } from '../../Store/Slices/vCardSlice';
// import { createVcardQrCodeInChinese } from '../../Store/Slices/vCardSlice';
import Vcard from '../Vcard/Vcard'; // https://github.com/joaocarmo/vcard-creator
import { addVcardDataInChinese } from '../Home/HomeSlice';
import {
    addVcardSvgChinese,
    vCardSvgChinese
} from './CreateSvgSlice';
import { createCanvas } from 'canvas';
import QRCode from "qrcode";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function CreateChinese() {
    const dispatch = useDispatch();

    // Card Front (In Chinese)
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [department, setDepartment] = useState("");
    const [jobtitle, setJobTitle] = useState("");
    const [email, setEmail] = useState("");
    const [officephonenumber, setOfficePhoneNumber] = useState("");
    const [mobilephonenumber, setMobilePhoneNumber] = useState("");
    const [organization, setOrganization] = useState("香港資訊科技");
    const [urladdress, setURLaddress] = useState("www.hkit.com.hk");
    const [address, setAddress] = useState("");

    // const selectvCardQrcodeListInChinese = useSelector(vCardQrcodeListInChinese);
    const selectvCardQrcodeListInChinese = useSelector(vCardSvgChinese);
    console.log(selectvCardQrcodeListInChinese, "useSelector")

    // const dispatchInChinese = useDispatch();

    const createVcardQrCodeHandlerInChinese = (e) => {
        if (firstname === "" || lastname === "" || department === "" || jobtitle === "" || email === "" || officephonenumber === "" || mobilephonenumber === "" || organization === "" || urladdress === "" || address === "") {
            alert("Not yet have input!");
        } else {
            e.preventDefault();
            dispatch(
                addVcardSvgChinese({
                    firstname,
                    lastname,
                    department,
                    jobtitle,
                    email,
                    officephonenumber,
                    mobilephonenumber,
                    organization,
                    urladdress,
                    address,
                    language: "Chinese",
                    // id: Math.random(),
                })
            );
            // console.log(createVcardQrCodeInChinese, "8888888")
        }
    };
    
    // const createVcardQrCodeHandlerInChinese = (e) => {
    //     if (firstname === "" || lastname === "" || department === "" || jobtitle === "" || email === "" || officephonenumber === "" || mobilephonenumber === "" || organization === "" || urladdress === "" || address === "") {
    //         alert("Not yet have input!");
    //     } else {
    //         e.preventDefault();
    //         dispatch(
    //             createVcardQrCodeInChinese({
    //                 firstname,
    //                 lastname,
    //                 department,
    //                 jobtitle,
    //                 email,
    //                 officephonenumber,
    //                 mobilephonenumber,
    //                 organization,
    //                 urladdress,
    //                 address,
    //                 // id: Math.random(),
    //             })
    //         );
    //         // console.log(createVcardQrCodeInChinese, "8888888")
    //     }
    // };

    // const vCardQrcodeListInChinese = useSelector((state) => state.vCardQrcodes.vCardQrcodes);

    // const vCardQrcodesTableInChinese = selectvCardQrcodeListInChinese((vCardQrcode) => (
    //     // <tr> 
    //     //     <td>{vCardQrcode.firstname}</td>
    //     //     <td>{vCardQrcode.lastname}</td>
    //     // </tr>
    //     <div>
    //         <Vcard
    //             firstname={vCardQrcode.firstname}
    //             lastname={vCardQrcode.lastname}
    //             department={vCardQrcode.department}
    //             jobtitle={vCardQrcode.jobtitle}
    //             email={vCardQrcode.email}
    //             officephonenumber={vCardQrcode.officephonenumber}
    //             mobilephonenumber={vCardQrcode.mobilephonenumber}
    //             organization={vCardQrcode.organization}
    //             urladdress={vCardQrcode.urladdress}
    //             address={vCardQrcode.address}
    //         />
    //     </div>
    // )
    // );

    // function getObjectInChinese() {
    //     const vCardObjectInChinese = vCardQrcodesTableInChinese.slice(vCardQrcodesTableInChinese.length - 1);
    //     if (vCardQrcodesTableInChinese.length > 0) {
    //         return vCardObjectInChinese;
    //     }
    // }


    // const addvcardChinese = () => {
    //     Axios.post('http://localhost:8080/create', {
    //         firstname: firstname,
    //         lastname: lastname,
    //         department: department,
    //         jobtitle: jobtitle,
    //         email: email,
    //         officephonenumber: officephonenumber,
    //         mobilephonenumber: mobilephonenumber,
    //         organization: organization,
    //         urladdress: urladdress,
    //         address: address,
    //         language: "Chinese"
    //     }).then(() => {
    //         console.log("success addvcardChinese", firstname);
    //         alert("Data Updated Successfully!!");
    //     });
    // };

    const addvcardChinese = (e) => {
        if (firstname === "" || lastname === "" || department === "" || jobtitle === "" || email === "" || officephonenumber === "" || mobilephonenumber === "" || organization === "" || urladdress === "" || address === "") {
            alert("Not yet have input!");
        } else if (officephonenumber.length >= 9) {
            alert("Your office phone number input is more then 8 number! Please try angin!");
        } else if (officephonenumber.length <= 7) {
            alert("Your office phone number input is less then 8 number! Please try angin!");
        } else if (mobilephonenumber.length >= 9) {
            alert("Your mobile phone number input is more then 8 number! Please try angin!");
        } else if (mobilephonenumber.length <= 7) {
            alert("Your mobile phone number input is less then 8 number! Please try angin!");
        } else {
            e.preventDefault();
            dispatch(addVcardDataInChinese({
                firstname: firstname,
                lastname: lastname,
                department: department,
                jobtitle: jobtitle,
                email: email,
                officephonenumber: officephonenumber,
                mobilephonenumber: mobilephonenumber,
                organization: organization,
                urladdress: urladdress,
                address: address,
                language: "Chinese"
            })).then(
                alert("Data Updated Successfully!!")
            );
        };
    };

    // const canvas = createCanvas(700, 700, "png")
    // const can = QRCode.toCanvas(canvas, selectvCardQrcodeListInChinese)
    // console.log(can, "can")

    // function save(filename, data) {
    //     const blob = new Blob([data], { type: "image/png" });
    //     if (window.navigator.msSaveOrOpenBlob) {
    //         window.navigator.msSaveBlob(blob, filename);
    //     } else {
    //         const elem = window.document.createElement('a');
    //         elem.href = canvas.toDataURL();
    //         elem.download = filename;
    //         document.body.appendChild(elem);
    //         elem.click();
    //         document.body.removeChild(elem);
    //         // console.log(canvas.toDataURL())
    //     }
    // }

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    sx={{
                        m: 1,
                        p: 2,
                        border: "1px solid grey",
                    }}
                >


                    <Grid container spacing={2}>
                        {/* -------------------------------------------------------------------Title------------------------------------------------------------------ */}
                        <Grid item xs={12}>
                            <Typography variant='h4' align="center">
                                vCard QR Code Generator
                            </Typography>
                        </Grid>
                        {/* -------------------------------------------------------------------Title------------------------------------------------------------------ */}

                        {/* -------------------------------------------------------------------In Chinese------------------------------------------------------------------ */}
                        <Grid item xs={12}>
                            <Typography variant='h4' align="left" >
                                vCard (In Chinese)
                            </Typography>
                        </Grid>
                        {/* -------------------------------------------------------------------In Chinese------------------------------------------------------------------ */}

                        {/* -------------------------------------------------------------------1st row------------------------------------------------------------------ */}
                        <Grid item xs={12} sm={6} md={6} xl={6}>
                            <TextField
                                required
                                id="FirstName"
                                label="名稱"
                                size="small"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setFirstName(event.target.value); }}
                                value={firstname}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} xl={6}>
                            <TextField
                                required
                                id="LastName"
                                label="姓氏"
                                size="small"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setLastName(event.target.value); }}
                                value={lastname}
                                fullWidth
                            />
                        </Grid>


                        {/* -------------------------------------------------------------------1st row------------------------------------------------------------------ */}

                        {/* -------------------------------------------------------------------2nd row------------------------------------------------------------------ */}
                        <Grid item xs={12} sm={6} md={6} xl={6}>
                            <TextField
                                required
                                id="Department"
                                label="部門"
                                size="small"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setDepartment(event.target.value); }}
                                value={department}
                                fullWidth
                            />
                        </Grid>



                        <Grid item xs={12} sm={6} md={6} xl={6}>
                            <TextField
                                required
                                id="JobTitle"
                                label="職稱"
                                size="small"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setJobTitle(event.target.value); }}
                                value={jobtitle}
                                fullWidth
                            />
                        </Grid>
                        {/* -------------------------------------------------------------------2nd row------------------------------------------------------------------ */}


                        {/* -------------------------------------------------------------------3rd row------------------------------------------------------------------ */}
                        <Grid item xs={12} sm={4} md={4} xl={4}>
                            <TextField
                                required
                                id="Email"
                                label="電郵"
                                size="small"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setEmail(event.target.value); }}
                                value={email}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} xl={4}>
                            <TextField
                                required
                                id="OfficePhoneNumber"
                                label="辦公電話號碼"
                                size="small"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setOfficePhoneNumber(event.target.value); }}
                                value={officephonenumber}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} xl={4}>
                            <TextField
                                required
                                id="MobilePhoneNumber"
                                label="手機號碼"
                                size="small"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setMobilePhoneNumber(event.target.value); }}
                                value={mobilephonenumber}
                                fullWidth
                            />
                        </Grid>
                        {/* -------------------------------------------------------------------3rd row------------------------------------------------------------------ */}

                        {/* -------------------------------------------------------------------4th row------------------------------------------------------------------ */}
                        <Grid item xs={12} sm={4} md={4} xl={4}>
                            <TextField
                                required
                                id="Organization"
                                label="組織"
                                size="small"
                                defaultValue="香港資訊科技"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setOrganization(event.target.value); }}
                                value={organization}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} xl={4}>
                            <TextField
                                required
                                id="URLaddress"
                                label="網址地址"
                                size="small"
                                defaultValue="www.hkit.com.hk"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setURLaddress(event.target.value); }}
                                value={urladdress}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} xl={4}>
                            <TextField
                                required
                                id="Address"
                                label="地址"
                                size="small"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setAddress(event.target.value); }}
                                value={address}
                                fullWidth
                            />
                        </Grid>

                        {/* -------------------------------------------------------------------5th row------------------------------------------------------------------ */}

                        {/* <Grid item xs={6} >
                    <Stack spacing={2} direction="row" align="center">
                        <Button variant="contained" >
                        <Button variant="contained" href="#contained-buttons" onClick={addvcardChinese}>
                            Save
                        </Button>

                        <Button variant="contained" >
                            <Button variant="contained" href="#contained-buttons" onClick={addEmployee}>
                            Create QR Code
                        </Button>
                    </Stack>
                </Grid> */}

                        <Grid item xs={4} >
                            <Button variant="outlined" href="#contained-buttons" >
                                <Link to="/" activeclassname="active" style={{ textDecoration: "none", color: "#5A8F7B", fontWeight: "bold" }}>
                                    Back
                                </Link>
                            </Button>
                        </Grid>


                        <Grid item xs={8} >
                            <Box textAlign='end'>
                                <ButtonGroup
                                    disableElevation
                                    variant="outlined"
                                    aria-label="Disabled elevation buttons"
                                >
                                    <Button onClick={addvcardChinese}  >
                                        Save
                                    </Button>

                                    <Button onClick={createVcardQrCodeHandlerInChinese}>
                                        Generate vCard QrCode
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </Grid>
                        {/* -------------------------------------------------------------------5th row------------------------------------------------------------------ */}

                    </Grid>
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    sx={{
                        m: 1,
                        p: 2,
                        border: "1px solid grey",
                        height: 376.469
                    }}
                >
                    <Typography variant='h4' align="center">
                        vCard QR Code In Chinese
                        {/* <Vcard /> */}
                    </Typography>

                    <Typography align="center" justify="center" sx={{ p: 5 }}>
                        {
                            selectvCardQrcodeListInChinese &&
                            <Vcard
                                firstname={firstname}
                                lastname={lastname}
                                department={department}
                                jobtitle={jobtitle}
                                email={email}
                                officephonenumber={officephonenumber}
                                mobilephonenumber={mobilephonenumber}
                                organization={organization}
                                urladdress={urladdress}
                                address={address}
                            // value={selectvCardQrcodeListInChinese}
                            />
                        }
                    </Typography>

                    <Typography align="center">
                        {/* <Button variant="outlined" onClick={() => { save("qrcode.png",) }}> */}
                        {/* <Button variant="outlined">
                            Download vCode QrCode
                        </Button> */}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default connect()(CreateChinese)