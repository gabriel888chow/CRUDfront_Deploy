import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Vcard from '../Vcard/Vcard';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { Link } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import OrcidTable from '../ORCID/OrcidTable';
import { useDispatch, useSelector } from 'react-redux';
import {
    inputDataInChineseList,
    getDataFromApiInChinese,
    deleteVcardDataInChinese,
    editVcardDataInChinese,
} from './HomeSlice';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function HomeChinese() {
    const dispatch = useDispatch();
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [department, setdepartment] = useState("");
    const [jobtitle, setjobtitle] = useState("");
    const [email, setemail] = useState("");
    const [officephonenumber, setofficephonenumber] = useState("");
    const [mobilephonenumber, setmobilephonenumber] = useState("");
    const [organization, setorganization] = useState("");
    const [urladdress, seturladdress] = useState("");
    const [address, setaddress] = useState("");

    useEffect(() => {
        dispatch(getDataFromApiInChinese())
    }, [])

    const vcardListChinese = useSelector(inputDataInChineseList);

    const getOrganization = (language) => {
        if (language === "Chinese") {
            return "香港資訊科技";
        } else if (language === "English") {
            return "Hong Kong Information Technology";
        } else {
            return ""
        }
    }


    const renderOrganization = (props) => {
        const isOrgenizationInChinese = props.row.language;
        return (
            getOrganization(isOrgenizationInChinese)
        )
    }

    const RenderDate = (props) => {
        const [newfirstname, setNewFirstName] = useState("");
        const [newlastname, setNewLastName] = useState("");
        const [newdepartment, setNewDepartment] = useState("");
        const [newjobtitle, setNewJobTitle] = useState("");
        const [newemail, setNewEmail] = useState("");
        const [newofficephonenumber, setNewOfficePhoneNumber] = useState("");
        const [newmobilephonenumber, setNewMobilePhoneNumber] = useState("");
        const [neworganization, setNewOrganization] = useState("香港資訊科技");
        const [newurladdress, setNewURLaddress] = useState("www.hkit.com.hk");
        const [newaddress, setNewAddress] = useState("");


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
            width: 1000,
            height: 320,
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
                {/* {value?.getFullYear() ?? ''} */}
                <Button
                    component="button"
                    ref={buttonElement}
                    touchRippleRef={rippleRef}
                    variant="contained"
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
                        setfirstname(props?.row?.firstname);
                        setlastname(props?.row?.lastname);
                        setdepartment(props?.row?.department);
                        setjobtitle(props?.row?.jobtitle);
                        setemail(props?.row?.email);
                        setofficephonenumber(props?.row?.officephonenumber);
                        setmobilephonenumber(props?.row?.mobilephonenumber);
                        setorganization(props?.row?.organization);
                        seturladdress(props?.row?.urladdress);
                        setaddress(props?.row?.address);
                    }}
                >
                    打開二維碼
                </Button>

                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h4" sx={{ fontWeight: 'bold' }}>
                            二維碼
                        </Typography>
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
                        <Button onClick={handleClose}>關閉</Button>
                        <Button >
                            儲存二維碼
                        </Button>
                        {/* <ReactSVG src="svg.svg" /> */}
                    </Box>
                </Modal>

                <Button
                    component="button"
                    variant="contained"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        setNewFirstName(props.row.firstname)
                        setNewLastName(props.row.lastname)
                        setNewDepartment(props.row.department)
                        setNewJobTitle(props.row.jobtitle)
                        setNewEmail(props.row.email)
                        setNewOfficePhoneNumber(props.row.officephonenumber)
                        setNewMobilePhoneNumber(props.row.mobilephonenumber)
                        setNewOrganization(props.row.organization)
                        setNewURLaddress(props.row.urladdress)
                        setNewAddress(props.row.address)
                        setEditOpen(true)
                    }}
                    endIcon={<EditSharpIcon />}
                >
                    編輯
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
                                    編輯數據
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} xl={6}>
                                <TextField
                                    required
                                    id="FirstName"
                                    label="名稱"
                                    size="small"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewFirstName(event.target.value); }}
                                    // value={props.row.firstname} // 拎返第一次 Create.js 入邊 input 資料 
                                    value={newfirstname} // 拎返第一次 Create.js 入邊 input 資料 
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
                                    onChange={(event) => { setNewLastName(event.target.value); }}
                                    // value={props.row.lastname} // 拎返第一次 Create.js 入邊 input 資料 
                                    value={newlastname} // 拎返第一次 Create.js 入邊 input 資料 
                                    fullWidth
                                />
                            </Grid>


                            <Grid item xs={12} sm={6} md={6} xl={6}>
                                <TextField
                                    required
                                    id="Department"
                                    label="部門"
                                    size="small"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewDepartment(event.target.value); }}
                                    // value={props.row.department} // 拎返第一次 Create.js 入邊 input 資料 
                                    value={newdepartment} // 拎返第一次 Create.js 入邊 input 資料 
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
                                    onChange={(event) => { setNewJobTitle(event.target.value); }}
                                    // value={props.row.jobtitle} // 拎返第一次 Create.js 入邊 input 資料 
                                    value={newjobtitle} // 拎返第一次 Create.js 入邊 input 資料 
                                    fullWidth
                                />
                            </Grid>


                            <Grid item xs={12} sm={4} md={4} xl={4}>
                                <TextField
                                    required
                                    id="Email"
                                    label="電郵"
                                    size="small"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewEmail(event.target.value); }}
                                    // value={props.row.email} // 拎返第一次 Create.js 入邊 input 資料 
                                    value={newemail} // 拎返第一次 Create.js 入邊 input 資料 
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
                                    onChange={(event) => { setNewOfficePhoneNumber(event.target.value); }}
                                    // value={props.row.officephonenumber} // 拎返第一次 Create.js 入邊 input 資料 
                                    value={newofficephonenumber} // 拎返第一次 Create.js 入邊 input 資料 
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
                                    onChange={(event) => { setNewMobilePhoneNumber(event.target.value); }}
                                    // value={props.row.mobilephonenumber} // 拎返第一次 Create.js 入邊 input 資料 
                                    value={newmobilephonenumber} // 拎返第一次 Create.js 入邊 input 資料 
                                    fullWidth
                                />
                            </Grid>


                            <Grid item xs={12} sm={4} md={4} xl={4}>
                                <TextField
                                    required
                                    id="Organization"
                                    label="組織"
                                    size="small"
                                    // TextField 包含帶有 value 和 defaultValue 屬性的 text 類型的輸入。輸入元素必須是受控或不受控的（指定 value 屬性或 defaultValue 屬性，但不能同時指定兩者）。決定使用受控或不受控的輸入元素並刪除這些道具之一。更多信息：https ://fb.me/react-controlled-components
                                    // 如果要defaultValue 可以加係useState
                                    // defaultValue="香港資訊科技"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewOrganization(event.target.value); }}
                                    // value={props.row.organization} // 拎返第一次 Create.js 入邊 input 資料 
                                    value={neworganization} // 拎返第一次 Create.js 入邊 input 資料 
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12} sm={4} md={4} xl={4}>
                                <TextField
                                    required
                                    id="URLaddress"
                                    label="網址地址"
                                    size="small"
                                    // TextField 包含帶有 value 和 defaultValue 屬性的 text 類型的輸入。輸入元素必須是受控或不受控的（指定 value 屬性或 defaultValue 屬性，但不能同時指定兩者）。決定使用受控或不受控的輸入元素並刪除這些道具之一。更多信息：https ://fb.me/react-controlled-components
                                    // 如果要defaultValue 可以加係useState
                                    // defaultValue="www.polyu.edu.hk"
                                    multiline
                                    maxRows={2}
                                    onChange={(event) => { setNewURLaddress(event.target.value); }}
                                    // value={props.row.urladdress} // 拎返第一次 Create.js 入邊 input 資料 
                                    value={newurladdress} // 拎返第一次 Create.js 入邊 input 資料 
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
                                    onChange={(event) => { setNewAddress(event.target.value); }}
                                    // value={props.row.address} // 拎返第一次 Create.js 入邊 input 資料 
                                    value={newaddress}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <Stack spacing={2} direction="row" justifyContent="flex-end">
                                    <Button variant="outlined" href="#contained-buttons" onClick={handleEditClose} >
                                        關閉
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        href="#contained-buttons"
                                        onClick={() => {
                                            dispatch(editVcardDataInChinese({
                                                id: props.row.id, // props.row 係舊id資料, 先可以對岩想edit 個行資料
                                                firstname: newfirstname,  // newfirstnaem set 返新input
                                                lastname: newlastname,
                                                department: newdepartment,
                                                jobtitle: newjobtitle,
                                                email: newemail,
                                                officephonenumber: newofficephonenumber,
                                                mobilephonenumber: newmobilephonenumber,
                                                address: newaddress,
                                            })); handleEditClose(); return alert("Data Updated!!")
                                        }}
                                    // disabled={newlastname ? false : true}
                                    >
                                        {/* {newlastname ? "Save" : "Need newlastname"} */}
                                        儲存
                                    </Button>
                                </Stack>
                            </Grid>

                        </Grid>
                    </Box>
                </Modal>

                <Button
                    component="button"
                    variant="contained"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => {
                        dispatch(deleteVcardDataInChinese({ id: props.row.id }))
                    }}
                    endIcon={<DeleteIcon />}
                >
                    刪除
                </Button>
            </>
        );
    };

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




    const columns = [
        { field: 'id', headerName: '號碼', width: 70 },
        { field: 'firstname', headerName: '名稱', width: 130 },
        { field: 'lastname', headerName: '姓氏', width: 130 },
        { field: 'department', headerName: '部門', width: 250 },
        { field: 'jobtitle', headerName: '職稱', width: 200 },
        { field: 'email', headerName: '電郵', width: 200 },
        { field: 'officephonenumber', headerName: '辦公電話號碼', width: 200 },
        { field: 'mobilephonenumber', headerName: '手機號碼', width: 200 },
        { field: 'organization', headerName: '組織', width: 300, renderCell: renderOrganization },
        { field: 'urladdress', headerName: '網址地址', width: 200 },
        { field: 'address', headerName: '地址', width: 300 },
        { field: 'actions', headerName: '動作', width: 350, renderCell: RenderDate },
    ];

    return (
        <>
            <Grid item xs={12}>
                <Typography variant='h4' align="center">
                    Chinese vCard Record
                </Typography>
            </Grid>

            <br />
            <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    rows={vcardListChinese}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>


        </>
    );
}

export default HomeChinese;
