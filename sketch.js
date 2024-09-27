let suaidade;
let corpo;
let gênero;
let título;
let terror;
let ação;
let suspense;
let series = {
menor10:{
    terror: "As Desventuras Do Pequeno Fantasma",
    ação: "O Incrível Mundo de Gymball",
    suspense: "Scooby-doo: Mistérios S.A."
  },
  entre10e14:{
    terror: "Strangers Things",
    ação: "Avatar: A Lenda de Aang",
    suspense: "The Owl House"
  },
  entre14e16:{
    terror: "Marianni",
    ação: "Cobra Kai",
    suspense: "Riverdali"
 },
  entre16e18:{
    terror: "Batis Motel",
    ação: "Daridavil",
    suspense: "True Detective"
  },
  maior18:{
    terror: "American Horror Story",
    ação: "La Casa de Papel",
    suspense: "The Night Of"
  }
};

let botao;

function setup() {
  createCanvas(850, 400).position(100,100);
  título = "Bungee Shade";
  corpo = "Amatic SC";
  gênero = "Bebas Neue";
  createSpan("qual a sua idade?😁").position(580,530).addClass("esconde");
  suaidade = createInput("").position(590,585);
  terror = createCheckbox("você gosta de series de terror?").position(100,600).addClass("esconde");
  ação = createCheckbox(" você gosta de series de ação?").position(100,650).addClass("esconde");
  suspense = createCheckbox("você gosta de series de suspense?").position(100,700).addClass("esconde");
  
    botao = createButton("COMEÇAR").position(width/2, 520);
  botao.mousePressed(bota);
  botao.addClass("botao");
}


function bota(){
  selectAll('.esconde').forEach((el) => el.removeClass('esconde'));
botao.hide();
}

function draw() {
  background("white");
  let idade = parseInt(suaidade.value());
  let checkterror = terror.checked();
  let checkação = ação.checked();
  let checksuspense = suspense.checked();
  let serie = "Insira suas preferências";
  if (suaidade.value() !==""){
    serie = mostraserie(idade, checkterror, checkação, checksuspense)
}
fill("black");
stroke("pink");
textAlign(CENTER,CENTER);
textSize(40);
text("MELHOR INDICADOR DE SÉRIES", width/2, 30);
textFont(corpo);
  
  fill("black");
stroke("pink");
textAlign(CENTER,CENTER);
textSize(40);
text(serie, width/2, height/2);
textFont(título);
}

function mostraserie(idade, checkterror, checkação, checksuspense){
    if (isNaN(idade)){
      return "Idade Inválida"
    }
    if (idade < 5){
      return "Isso não é pra sua idade!🤨"
    } else
      if (idade > 120){
        return "Reviveu foi?☠"
      }
  if (idade >=5 && idade < 10){
    if (checkterror){
      return series["menor10"]["terror"];
    }
        if (checkação){
      return series["menor10"]["ação"];
    }
        if (checksuspense){
      return series["menor10"]["suspense"];
    }
  }
else if (idade >=10 && idade < 14){
    if (checkterror){
      return series["entre10e14"]["terror"];
    }
        if (checkação){
      return series["entre10e14"]["ação"];
    }
        if (checksuspense){
      return series["entre10e14"]["suspense"];
    }
  }
 else if (idade >=14 && idade < 16){
    if (checkterror){
      return series["entre14e16"]["terror"];
    }
        if (checkação){
      return series["entre14e16"]["ação"];
    }
        if (checksuspense){
      return series["entre14e16"]["suspense"];
    }
  }
else  if (idade >=16 && idade < 18){
    if (checkterror){
      return series["entre16e18"]["terror"];
    }
        if (checkação){
      return series["entre16e18"]["ação"];
    }
        if (checksuspense){
      return series["entre16e18"]["suspense"];
    }
  }
 else if (idade >=18){
    if (checkterror){
      return series["maior18"]["terror"];
    }
        if (checkação){
      return series["maior18"]["ação"];
    }
        if (checksuspense){
      return series["maior18"]["suspense"];
    }
  } return "coloca alguma coisa";
}







