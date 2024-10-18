const setCookie = (tokens) => {
    // Set access token with SameSite=None and Secure
    document.cookie = `accessToken=${tokens.accessToken}; max-age=${1 * 24 * 60 * 60}; path=/; SameSite=None; Secure`;

    // Set refresh token with SameSite=None and Secure
    document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=None; Secure`;
};

const getCookie = (cookieName)=>{
    return document.cookie
       .split(";")
       .find((token)=> token.trim().split("=")[0] === cookieName)
       ?.split("=")[1]
}

export { setCookie, getCookie };
