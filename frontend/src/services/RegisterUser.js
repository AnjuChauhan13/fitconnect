import api from "../api/api";

const registerUser = async (userData) => {
    const response = await api.post(
        "/api/accounts/register/",
        userData
    );

    return response.data;
};

export default registerUser;