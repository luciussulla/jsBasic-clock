// let displayTime = () => {
//     time = new Date()
//     seconds  = time.getSeconds()
//     minutes  = time.getMinutes()
//     hours    = time.getHours()
//     // Process data 
//     seconds = seconds<10 ? '0'+seconds : seconds
//     minutes = minutes<10 ? '0'+minutes : minutes 
//     hours =   hours  <10 ? '0'+hours   : hours
//     document.body.innerText = hours + ':' + minutes + ':' + seconds
// }
// setInterval(displayTime, 1000) 

const endTime = new Date('2019-01-25 22:34:00').getTime()

setInterval(()=>{
    const nowTime = new Date().getTime()
    const seconds = Math.floor((endTime - nowTime)/1000)
    console.log(seconds)
}, 1000)