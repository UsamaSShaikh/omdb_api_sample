import axios from "axios";

export const loginUser = user_id => {
    return axios
        .get(
            "http://www.omdbapi.com/?s=Batman&page=2&apikey=" + user_id,
            {
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            }
        )
        .then(res => {
            // console.log("Correct");
            localStorage.setItem("usertoken", res.data);
            return res;
        })
        .catch(err => {
            // console.log("Erroring");
            // console.log(err.response);
            return err.response;
        });
};
