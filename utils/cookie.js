import cookie from 'js-cookie';

export const setCookie = (key, value) => {
    // Verificar se está no Browser para setar o cookie, não setar no servidor
    //expires 1 dia
    if(process.browser) cookie.set(key, value, { expires: 1, path: "/"});
}

export const removeCookie = (key) => {
    if(process.browser) cookie.remove(key, { expires: 1 });
}

export const getCookie = (key, req) => {
    return process.browser ? 
            getCookieFromBrowser(key) :
            getCookieFromServer(key, req)
}

const getCookieFromBrowser = key => cookie.get(key);

const getCookieFromServer = (key, req) => {
    if(!req.headers.cookie) return undefined;
    const _cookie = req.headers.cookie.split(";").find(cookie => cookie.trim().startsWith(`${key}=`));
    return _cookie ? _cookie.split("=")[1] : undefined;
}

