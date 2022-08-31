import Axios from 'axios';

export const addorcid = async (payload) => {
    return await Axios.post('https://crudgabrieltest.herokuapp.com/create/orcid', {id: payload.id, orcidURL: "https://orcid.org/" + payload.orcidURL});
    // console.log(payload, "addorcid")
}