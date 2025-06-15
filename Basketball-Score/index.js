let countHome = document.getElementById("count-home")
let countGst = document.getElementById("count-gst")
let count_h = 0
let count_g = 0
// function for Home
function addhm1() {
    count_h += 1
    countHome.textContent = count_h
}
function addhm2() {
    count_h += 2
    countHome.textContent = count_h
}
function addhm3() {
    count_h += 3
    countHome.textContent = count_h
}
// function for Guest
function addgst1() {
    count_g += 1
    countGst.textContent = count_g
}
function addgst2() {
    count_g += 2
    countGst.textContent = count_g
}
function addgst3() {
    count_g += 3
    countGst.textContent = count_g
}
// Reset number
function reset() {
    document.getElementById("count-home").textContent = 0;
    count_h = 0
    document.getElementById("count-gst").textContent = 0;
    count_g = 0

}

