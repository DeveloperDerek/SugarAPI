import axios from "axios";

const login = async (response) => {
    axios({
        method: "POST",
        url: "http://localhost:9000/api/google/login",
        withCredentials : true,
        data: {tokenId: response}
    })
    .then((res) => {
        window.location.reload(false);
        console.log(res)
    });
};

export { login };