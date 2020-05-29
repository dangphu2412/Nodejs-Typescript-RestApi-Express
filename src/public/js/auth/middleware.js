function setTokenToLocalStorage(token) {
    window.localStorage.setItem('as', token);
}

function getTokenFromParam(param) {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has(param)) {
        return searchParams.get(param);
    }
    throw new Error("Param not found");
}

try {
    const accessToken = getTokenFromParam('sat');
    setTokenToLocalStorage(accessToken);
    window.location.href = '/admin';
} catch (error) {
    window.location.href = '/admin/signin';
}