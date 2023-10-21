const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0];
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    clock.innerHTML = `${hour}<br>${minute}`; // Usando <br> para quebra de linha
};

setInterval(() => {
    getHours();
}, 1000);
