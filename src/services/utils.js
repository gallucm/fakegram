export const saveLoginData = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
};

export const clearLoginData = () => {
    localStorage.removeItem('user');
};

export const getLoginData = () => {
    return JSON.parse(localStorage.getItem('user'));
};