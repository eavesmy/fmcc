var cookiesMgr = module.exports = {};

cookiesMgr.init = () => {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");

        let o = {
            key: cookie[0],
            value: cookie[1]
        };

        if (cookiesMgr.alreadyLogin(o)) cookiesMgr.online();

    }
};

cookiesMgr.alreadyLogin = (cookie) => {
    return (cookie.key === cosDefine.LOGIN_STATE && cookie.value === "online")
};

cookiesMgr.online = () =>{
	document.querySelector(cosDefine.userName).innerHTML = "EAVES";
}
