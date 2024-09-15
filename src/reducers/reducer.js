export const reducer = (state, action) => {
    switch (action.type) {
        case "dark":
            return { ...state, theme: "dark" };
        case "light":
            return { ...state, theme: "" };
        case "GET_DATA_DENTISTS":
            return { ...state, data: action.payload };
        case "SET_FAVS":
            return { ...state, favs: [...state.favs, action.payload] };
        case "REMOVE_FAVS":
            return { ...state, favs: action.payload };
        case "STATE_CARD":
            return { ...state, stateCard: action.payload };
        case "LOADING_HOME":
            return { ...state, loadingHome: action.payload };
        default:
            throw new Error("Error in style dark or light");
    }
};