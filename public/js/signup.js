const signup = async (obj) => {
    const api = API_LIST["SIGNUP"];

    try {
        let result = await ajax(REQUEST_TYPE["POST"], api, obj);


        if (result && result.status == "success") {
            window.localStorage.setItem("TOKEN", result.token);
            window.location.href = "/products";
        }
        else {
            console.log(result.status, result.error);
        }

    }
    catch (err) {
        console.log(err);

    }
}

const signupObject = () => {
    const username = $("#usernameId").val();
    const password = $("#passwordId").val();


    const obj = {
        "username": username,
        "password": password
    }

    signup(obj);
}


const loadSignUpClicks = () => {
    $("#submitButton").unbind();
    $("#submitButton").click(() => {
        signupObject();

    })
}



$(document).ready(() => {
    loadSignUpClicks();
})