const ruleta = document.getElementById("ruleta");
const resultado = document.getElementById("resultado");

function comprarDulce(nombreDulce){

  resultado.innerHTML = `Compraste: ${nombreDulce} 🍭<br>Girando ruleta...`;

  // Giro visual aleatorio
  const giro = 3600 + Math.floor(Math.random() * 720);
  ruleta.style.transform = `rotate(${giro}deg)`;

  // Espera mientras gira
  setTimeout(() => {

    const premio = obtenerPremio();

    resultado.innerHTML = `🎉 ¡Ganaste ${premio} dulce(s)! 🍬`;

  }, 4000);
}

function obtenerPremio(){

  const random = Math.random() * 100;

  // 90%
  if(random < 90){
    return 1;
  }

  // 5%
  else if(random < 95){
    return 2;
  }

  // 3%
  else if(random < 98){
    return 3;
  }

  // 1.5%
  else if(random < 99.5){
    return 4;
  }

  // 0.5%
  else{
    return 5;
  }
}