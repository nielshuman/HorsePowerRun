// countdown
const count_down_to = Math.floor(new Date("Sep 15, 2019 10:00:00").getTime() / 1000) // javascript not epoch but epoch + milisec

//apr 19 2020

new FlipDown(count_down_to, 'countdown').start();


// const updateHTML =  (d, u, m , s) => {
// 	document.getElementById("countdown").innerHTML = `Nog ${d} dagen, ${u} uren, ${m} minuten en ${s} seconden!`; //zet in ondertitel
// }

// const update = () => {
//   let verschil = count_down_to - Date.now();

//   let dag = Math.floor(verschil / (1000 * 60 * 60 * 24));
//   let uur = Math.floor((verschil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let min = Math.floor((verschil % (1000 * 60 * 60)) / (1000 * 60));
//   let sec = Math.floor((verschil % (1000 * 60)) / 1000);

//   if (verschil < 0) { //als datum voorbij, zegg dat
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "Begonnen!";
//   } 
//   else {
//   	updateHTML(dag, uur, min, sec);
//   }
// }

// update();
// let x = setInterval(update, 1000)