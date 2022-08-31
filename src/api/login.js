import axiosWrapper from "./wrapper";

export function fetchLoginURL() {
    const response = axiosWrapper(
        "post",
        '/api/loginurl',
        {}
    )
    return response;
}