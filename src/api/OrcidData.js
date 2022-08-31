import Axios from 'axios';

export const getOrcid = async () => await Axios.get("https://crudgabrieltest.herokuapp.com/data/orcid");

export const deleteOrcid = async (id) => {
    console.log(id, "deleteOrcid")
    if (window.confirm("Are you sure to delete that data?")) {
        await Axios.delete(`https://crudgabrieltest.herokuapp.com/delete/orcid/${id}`);
    }
    return await Axios.get("https://crudgabrieltest.herokuapp.com/data/orcid");
}

export const editOrcid = async (payload) => {
    // 因為Axios.post功能, 所以payload 可以把database 資料傳送過來
    // axios.post(url[, data[, config]]) data 可以係一個object 
    
    // await Axios.post(`https://crudgabrieltest.herokuapp.com/edit/orcid`,payload);
    await Axios.post(`https://crudgabrieltest.herokuapp.com/edit/orcid`, {...payload, orcidURL: "https://orcid.org/" + payload.orcidURL});
    // console.log(payload, "editOrcid")
    return await Axios.get("https://crudgabrieltest.herokuapp.com/data/orcid");
}


export const addorcid = async (payload) => {
    await Axios.post('https://crudgabrieltest.herokuapp.com/create/orcid', {id: payload.id, orcidURL: "https://orcid.org/" + payload.orcidURL});
    // return await Axios.post('https://crudgabrieltest.herokuapp.com/create/orcid', {orcidURL: "https://orcid.org/" + payload.orcidURL});
    // console.log(payload, "addorcid")
}