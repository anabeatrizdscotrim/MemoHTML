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


function updateDate() {
    const dateElement = document.querySelector('.date-display');
    const now = new Date();
    
    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const day = daysOfWeek[now.getDay()];
    
    const dayOfMonth = now.getDate().toString().padStart(2, '0');
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const month = months[now.getMonth()];
    
    dateElement.textContent = `${day}, ${dayOfMonth} ${month}`;
}
updateDate();
