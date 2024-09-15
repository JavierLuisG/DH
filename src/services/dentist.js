const getAllDentists = (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((response) => response.json())
        .then((info) => {
            dispatch({ type: "GET_DATA_DENTISTS", payload: info });
            dispatch({ type: "LOADING_HOME", payload: false });
        }).catch((error) => console.log(error));
}

const getOneDentist = (id, setDentist) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url).then((response) => response.json())
        .then((info) => setDentist(info))
        .catch((error) => console.log(error));
};

export const dentistsServices = {
    getAllDentists,
    getOneDentist,
}