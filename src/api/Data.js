import Axios from 'axios';

export const getData = async () => await Axios.get("http://crudgabrieltest.herokuapp.com/data");

export const deleteVcard = async (id) => {
    if (window.confirm("Are you sure to delete that data?")) {
        await Axios.delete(`http://crudgabrieltest.herokuapp.com/delete/${id}`);
    }
    return await Axios.get("http://crudgabrieltest.herokuapp.com/data")
}

export const editVcard = async (payload) => {
    // 因為Axios.post功能, 所以payload 可以把database 資料傳送過來
    // axios.post(url[, data[, config]]) data 可以係一個object 
        await Axios.post(`http://crudgabrieltest.herokuapp.com/edit`, payload);
        return await Axios.get("http://crudgabrieltest.herokuapp.com/data");
}

export const addVcard = async (payload) => await Axios.post('http://crudgabrieltest.herokuapp.com/create', payload);

