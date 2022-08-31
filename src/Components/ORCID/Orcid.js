import React, { useEffect, useState, useCallback, useRef } from 'react';
import { connect, useSelector } from 'react-redux';
// import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Axios from 'axios';
import { Link } from 'react-router-dom';
import { addOrcidData } from './OrcidSlice';
import { useDispatch } from 'react-redux';
import { QRCodeSVG } from 'qrcode.react';
import {
    addOrcidDataSvg,
    orcidSvg
} from './OrcidSvgSlice';
import { createCanvas } from 'canvas';
import QRCode from "qrcode";
// import QRCode from "qrcode-svg";
import { ReactSVG } from 'react-svg';
// import {svg} from './svg';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


function Orcid() {

    const dispatch = useDispatch();

    const [orcidURL, setOrcidURL] = useState("");
    const orcidSvgData = useSelector(orcidSvg);
    // console.log(orcidSvgData, "oooo")

    const addorcid = (e) => {
        if (orcidURL === "") {
            alert("Not yet have input!");
        } else if (orcidURL.length <= 15) {
            alert("Your input is less then 16 number! Please try angin!");
        } else if (orcidURL.length >= 17) {
            alert("Your input is more then 16 number! Please try angin!");
        } else {
            e.preventDefault();
            dispatch(addOrcidData({
                orcidURL,
            })).then(
                alert("Data Updated Successfully!!")
            );
        };
    };

    const generateOrcid = (e) => {
        e.preventDefault();
        // dispatch 入面要data同 OrcidData 的 Data 要一樣, 如果id 係database 自動入可以唔洗加係dispatch
        dispatch(
            addOrcidDataSvg({
                orcidURL,
            })
        )
    }

    // function downloadSVGAsText() {
    //     const svg = document.querySelector('svg');
    //     const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
    //     const a = document.createElement('a');
    //     const e = new MouseEvent('click');
    //     a.download = 'download.svg';
    //     a.href = 'data:image/svg+xml;base64,' + base64doc;
    //     a.dispatchEvent(e);
    // }


    // function downloadBlob(blob, filename) {

    //     const canvas = createCanvas(700, 700, "svg")
    //     QRCode.toCanvas(canvas, orcidSvgData, { width: 500, errorCorrectionLevel: 'H', type: "svg" })
    //     const objectUrl = canvas.toDataURL(blob);

    //     const link = document.createElement("a");
    //     link.href = objectUrl;
    //     link.download = filename;
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);

    //     // setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
    // }


    // const svgRef = useRef();

    // const downloadSVG = useCallback(() => {
    //     const svg = svgRef.current.innerHTML;
    //     const blob = new Blob([svg], { type: "image/svg+xml" });
    //     downloadBlob(blob, `myimage.svg`);
    // }, []);



    const canvas = createCanvas(700, 700, "svg")
    QRCode.toCanvas(canvas, orcidSvgData, { width: 500, errorCorrectionLevel: 'H', type: "svg" })
    const svvg = QRCode.toString(orcidSvgData, { type: "utf8" })
    console.log(svvg, "svg")

    function save(filename, data) {
        const blob = new Blob([data], { type: "png" });
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        } else {
            const elem = window.document.createElement('a');
            elem.href = canvas.toDataURL();
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
            // console.log(canvas.toDataURL())
        }
    }

    // const canvas = createCanvas(700, 700, "svg")
    // QRCode.toCanvas(canvas, orcidSvgData, { width: 500, errorCorrectionLevel: 'H', type: "svg" })
    // const svvg = QRCode.toString(orcidSvgData, { type: "utf8" })
    // console.log(svvg, "svg")

    // function save(filename, data) {
    //     // const blob = new Blob([data], { type: "image/svg+xml" });
    //     const blob = new Blob([data], { type: "image/svg+xml" }).stream().getReader();
    //     if (window.navigator.msSaveOrOpenBlob) {
    //         window.navigator.msSaveBlob(blob, filename);
    //     } else {
    //         const elem = window.document.createElement('a');
    //         elem.href = 'data:image/svg+xml;utf8,' + canvas.toDataURL() 
    //         // .replace("data:image/png;base64,",'data:image/svg+xml;utf8,');
    //         elem.download = filename;
    //         document.body.appendChild(elem);
    //         elem.click();
    //         document.body.removeChild(elem);
    //         // console.log(canvas.toDataURL().replace("data:image/png;base64,",'data:image/svg+xml;utf8,'))
    //     }
    // }

    // function download() {
    //     // const can = document.querySelector('.HpQrcode > canvas');
    //     const canvas = createCanvas(700, 700, "svg")
    //     QRCode.toCanvas(canvas, orcidSvgData, { width: 500, errorCorrectionLevel: 'H', type: "svg" })
    //     const link = document.createElement("a");
    //     link.href = 'data:image/svg+xml;utf8,' + canvas.toDataURL();
    //     link.download = "imgName" + "-QR.png";
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };



    // const addorcid = () => {
    //     if (orcidURL === "") {
    //         alert("Not yet have input!"); 
    //     } else {
    //         Axios.post('http://localhost:8080/create/orcid', {
    //             orcidURL: "https://orcid.org/" + orcidURL
    //         }).then(() => {
    //             console.log("success addorcid", orcidURL);
    //             if (orcidURL.length <= 15) {
    //                 alert("Your input is less then 16 number! Please try angin!");
    //             } else if (orcidURL.length >= 17) {
    //                 alert("Your input is more then 16 number! Please try angin!");
    //             } else {
    //                 alert("Your data was save! You can click 'BACK' Button to check on Home Page!");
    //             }

    //         });
    //     }
    // };

    // function saveSvg(svgEl, name) {
    //     svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    //     const canvas = createCanvas(700, 700, "svg")
    //     QRCode.toCanvas(canvas, orcidSvgData, { width: 500, errorCorrectionLevel: 'H', type: "svg" })
    //     const svgData = svgEl.outerHTML
    //     const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    //     const svgBlob = new Blob([preface, svgData], { type: "image/svg+xml;charset=utf-8" });
    //     const svgUrl = canvas.toDataURL(svgBlob);
    //     const downloadLink = document.createElement("a");
    //     downloadLink.href = svgUrl;
    //     downloadLink.download = name;
    //     document.body.appendChild(downloadLink);
    //     downloadLink.click();
    //     document.body.removeChild(downloadLink);
    // }




    return (
        // <Container maxWidth="lx" >
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    sx={{
                        m: 1,
                        p: 2,
                        border: "1px solid grey",
                        height: 300,

                    }}
                >
                    <Grid container spacing={2} alignItems="center">

                        <Grid item xs={12} >
                            <Typography variant='h4' align="center" justify="center" >
                                ORCID ID QR Code Generator
                            </Typography>
                        </Grid>

                        <Grid item xs={3} container>
                            <Typography variant='h6'>
                                https://orcid.org/
                            </Typography>
                        </Grid>

                        <Grid item xs={9} >
                            <TextField
                                required
                                id="ORCID"
                                label="0000-0000-0000-0000"
                                size="small"
                                multiline
                                maxRows={2}
                                onChange={(event) => { setOrcidURL(event.target.value); }}
                                fullWidth
                            />
                        </Grid>

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
                                    <Button variant="outlined" onClick={addorcid} >
                                        Save
                                    </Button>
                                    <Button variant="outlined" onClick={generateOrcid}>
                                        Generate ORCID qrcode
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </Grid>
                        {/* <QRCodeCanvas value={myVCard.toString()} size={60.472441} /> */}
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
                        height: 300
                    }}
                >
                    <Typography variant='h4' align="center">
                        ORCID QR Code
                    </Typography>

                    <Typography align="center" justify="center" sx={{ p: 5 }}>
                        {/* 這個是JSX其中一個寫法, 可以睇--> https://zh-hant.reactjs.org/docs/jsx-in-depth.html */}
                        {
                            // orcidSvgData && <--意思如果orcidSvgData係true時 render <QRCodeSVG /> 
                            orcidSvgData &&
                            <QRCodeSVG value={orcidSvgData} />

                        }

                    </Typography>

                    <Typography align="center">
                        {/* <Button variant="outlined" > */}
                        <Button variant="outlined" onClick={() => { save("qrcode.png",) }}>

                            Download ORCID qrcode
                        </Button>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
        // </Container>

    )

}


export default connect()(Orcid)




