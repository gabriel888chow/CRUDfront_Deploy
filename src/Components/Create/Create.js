import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Axios from 'axios';
import Orcid from '../ORCID/Orcid';
import CreateChinese from './CreateChinese';
// import { QRCodeCanvas } from 'qrcode.react';
import Vcard from '../Vcard/Vcard'; // https://github.com/joaocarmo/vcard-creator
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { createVcardQrCode } from '../../Store/Slices/vCardSlice';
// import Divider from '@mui/material/Divider';
// import { saveAs } from 'file-saver';
// import { vCardQrcodeList } from '../../Store/Slices/vCardSlice';
import { createCanvas } from 'canvas';
import QRCode from "qrcode";
import { addVcardData } from '../Home/HomeSlice';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {
    addVcardSvg,
    vCardSvg
} from './CreateSvgSlice';

function Create() {
    const dispatch = useDispatch();

    // Card Front (In Eng)
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [department, setDepartment] = useState("");
    const [jobtitle, setJobTitle] = useState("");
    const [email, setEmail] = useState("");
    const [officephonenumber, setOfficePhoneNumber] = useState("");
    const [mobilephonenumber, setMobilePhoneNumber] = useState("");
    const [organization, setOrganization] = useState("Hong Kong Information Technology");
    const [urladdress, setURLaddress] = useState("www.hkit.com.hk");
    const [address, setAddress] = useState("");

    // const selectvCardQrcodeList = useSelector(vCardQrcodeList);
    const selectvCardQrcodeList = useSelector(vCardSvg);
    // console.log(selectvCardQrcodeList)

    // addVcardSvgChinese 這個係個action
    const createVcardQrCodeHandler = (e) => {
        if (firstname === "" || lastname === "" || department === "" || jobtitle === "" || email === "" || officephonenumber === "" || mobilephonenumber === "" || organization === "" || urladdress === "" || address === "") {
            alert("Not yet have input!");
        } else {
            e.preventDefault();
            dispatch(
                addVcardSvg({
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
                    language: "English",
                    // id: Math.random(),
                })
            );
        }
        // console.log(createVcardQrCode)
    };
    // const createVcardQrCodeHandler = (e) => {
    //     if (firstname === "" || lastname === "" || department === "" || jobtitle === "" || email === "" || officephonenumber === "" || mobilephonenumber === "" || organization === "" || urladdress === "" || address === "") {
    //         alert("Not yet have input!");
    //     } else {
    //         e.preventDefault();
    //         dispatch(
    //             createVcardQrCode({
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
    //     }
    //     // console.log(createVcardQrCode)
    // };

    // const vCardQrcodeList = useSelector((state) => state.vCardQrcodes.vCardQrcodes);

    // console.log(vCardQrcodeList.slice(), "slice111111");

    // const arr = vCardQrcodeList.slice(vCardQrcodeList.length-1);
    // console.log(arr, "1212121")

    // const vCardQrcodesTable = vCardQrcodeList.map((vCardQrcode) => (

    // const vCardQrcodesTable = selectvCardQrcodeList.map((vCardQrcode) => (
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

    // console.log("vCardQrcodesTable", vCardQrcodesTable)
    // console.log("selectvCardQrcodeList", ...selectvCardQrcodeList)

    // console.log(vCardQrcodesTable.slice(), "slice22222222");
    // console.log(vCardQrcodesTable.slice(vCardQrcodesTable.length - 1), "slice33333333");

    // const aaabbb = Object.fromEntries(vCardQrcodesTable);
    // console.log(aaabbb, "what is this");


    // function getObject() {
    //     const vCardObject = vCardQrcodesTable.slice(vCardQrcodesTable.length - 1);
    //     if (vCardQrcodesTable.length > 0) {
    //         return vCardObject;
    //     }
    // }
    // console.log(getObject(), "getObject")

    // const vCardSvg = vCardQrcodesTable.slice(vCardQrcodesTable.length - 1)
    // const canvas = createCanvas(700, 700, "svg")
    // QRCode.toCanvas(canvas, vCardSvg, { width: 500, errorCorrectionLevel: 'H', type: "svg" })
    // // console.log(vCardSvg, "vCardSvg.toString()")
    // // console.log(canvas.toDataURL(), "URL")

    // function save(filename, data) {
    //     const blob = new Blob([data], { type: 'image/svg+xml' });
    //     if (window.navigator.msSaveOrOpenBlob) {
    //         window.navigator.msSaveBlob(blob, filename);
    //     }
    //     else {
    //         const elem = window.document.createElement('a');
    //         elem.href = canvas.toDataURL();
    //         elem.download = filename;
    //         document.body.appendChild(elem);
    //         elem.click();
    //         document.body.removeChild(elem);
    //     }
    // }


    // const onDownload = () => {
    //     const vCardObject = vCardQrcodesTable.slice(vCardQrcodesTable.length - 1);
    //     console.log(vCardObject, "vCardObject22222222222222222222222222222222222222")
    //     const canvas = createCanvas(700, 700, "svg")

    //     const can = QRCode.toCanvas(canvas, vCardObject.toString(), { width: 500, errorCorrectionLevel: 'H', type: "svg" }, function (error) {
    //         if (error) console.error(error)
    //         console.log('success!');
    //       })
    //     console.log("can", can)


    //     const link = document.createElement("a");
    //     link.download = `download.svg`;
    //     link.href = can;
    //     link.click();
    // };


    // const addnamecard = () => {
    //     if (firstname === "") {
    //         alert("Not yet have input!");
    //     } else {
    //         // console.log(name);
    //     } Axios.post('http://localhost:8080/create', {
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
    //         language: "English"
    //     }).then(() => {
    //         // console.log("success addnamecard", firstname);
    //         alert("Data Updated Successfully!!");
    //     });
    // };

    const addnamecard = (e) => {
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
        }
        // else if (email.includes("@") !== "@" ) {
        //     alert("Your email format is wrong! Please try angin!");
        // }
        else {
            e.preventDefault();
            dispatch(addVcardData({
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
                language: "English"
            })).then(
                alert("Data Updated Successfully!!")
            );
        };
    };

    return (
        <Container maxWidth="lx" spacing={2}>
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

                            {/* -------------------------------------------------------------------In Eng------------------------------------------------------------------ */}
                            <Grid item xs={12}>
                                <Typography variant='h4' align="left" >
                                    vCard (In English)
                                </Typography>
                            </Grid>
                            {/* -------------------------------------------------------------------In Eng------------------------------------------------------------------ */}

                            {/* -------------------------------------------------------------------1st row------------------------------------------------------------------ */}
                            <Grid item xs={12} sm={6} md={6} xl={6}>
                                <TextField
                                    required
                                    id="FirstName"
                                    label="First Name"
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
                                    label="Last Name"
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
                                    label="Department"
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
                                    label="Job Title"
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
                                    label="Email"
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
                                    label="Office Phone Number"
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
                                    label="Mobile Phone Number"
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
                                    label="Organization"
                                    size="small"
                                    defaultValue="Hong Kong Information Technology"
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
                                    label="URL Address"
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
                                    label="Address"
                                    size="small"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setAddress(event.target.value); }}
                                    value={address}
                                    fullWidth
                                />
                            </Grid>

                            {/* -------------------------------------------------------------------4th row------------------------------------------------------------------ */}


                            {/* -------------------------------------------------------------------5th row------------------------------------------------------------------ */}
                            <Grid item xs={4} >
                                <Button variant="outlined" href="#contained-buttons">
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
                                        <Button variant="outlined" onClick={addnamecard}>
                                            Save
                                        </Button>

                                        <Button variant="outlined" onClick={createVcardQrCodeHandler}>
                                            {/* <Button variant="contained" href="#contained-buttons" onClick={addEmployee}> */}
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
                        <Typography variant='h4' align="center" >
                            vCard QR Code In English
                            {/* {getVcardDataInEnglish.map((val, key) => {

                                return (
                                    <div>

                                        {firstname}
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
                                        />

                                    </div>
                                )

                            })} */}
                        </Typography>

                        <Typography align="center" justify="center" sx={{ p: 5 }}>
                            {/* {getObject()} */}
                            {
                                selectvCardQrcodeList &&
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
                                />
                            }
                        </Typography>

                        <Typography align="center">
                            {/* <Button variant="contained" onClick={() => { console.log(savesvg, "Hisvg"); window.location.href = savesvg }}> */}
                            {/* <Button variant="outlined" onClick={save}> */}
                            {/* <Button variant="outlined" >
                                Download vCode QrCode
                            </Button> */}
                        </Typography>
                    </Paper>
                </Grid>

            </Grid>




            {/* ------------------------------------------------------------------------CreateChinese--------------------------------------------------------------- */}
            <CreateChinese />
            {/* ------------------------------------------------------------------------CreateChinese--------------------------------------------------------------- */}

            {/* ---------------------------------------------------------------------------ORCID-------------------------------------------------------------------- */}
            <Orcid />
            {/* ---------------------------------------------------------------------------ORCID-------------------------------------------------------------------- */}


        </Container>
    )
}





export default connect()(Create)