function girarRuleta(){

  const ruleta = document.getElementById('ruleta');
  const resultado = document.getElementById('resultado');

  const giro = 3600 + Math.floor(Math.random() * 720);

  ruleta.style.transform = `rotate(${giro}deg)`;

  resultado.innerHTML = 'Girando...';

  setTimeout(() => {

    const random = Math.random() * 100;

    let premio;

    if(random < 90){
      premio = 1;
    }
    else if(random < 95){
      premio = 2;
    }
    else if(random < 98){
      premio = 3;
    }
    else if(random < 99.5){
      premio = 4;
    }
    else{
      premio = 5;
    }

    resultado.innerHTML = `🎉 Ganaste ${premio} dulce(s)`;

  }, 4000);
}
