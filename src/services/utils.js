export const saveLoginData = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
};

export const clearLoginData = () => {
    localStorage.removeItem('user');
};

export const getLoginData = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export const getDate = () => {
    const date = new Date();

    date.setHours(date.getHours() - 3);

    const dateFormat = new Date(date);

    return dateFormat;
}