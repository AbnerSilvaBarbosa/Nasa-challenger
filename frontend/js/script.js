
const getData = () => {
    if (document.getElementById("data")) {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const date = today.toLocaleDateString();
        document.getElementById("data").innerHTML = date
    }

}

const getHours = () => {
    if (document.getElementById("hora")) {
        const date = new Date()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const hour = hours > 10 ? `0${hours}` : hours
        const minute = minutes > 10 ? `0${minutes}` : minutes
        const second = seconds > 10 ? `0${seconds}` : seconds
        document.getElementById("hora").innerHTML = hours
        document.getElementById("minutos").innerHTML = minutes
        document.getElementById("segundos").innerHTML = seconds
    }
}
getData()
setInterval(() => {
    getHours()
}, 1000)