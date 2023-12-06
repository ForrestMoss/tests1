function myFunktion() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("lern");
    var btn = document.getElementById("more");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        more.innerHTML = "Learn more";
        lern.style.display = "none";
    } else {
        dots.style.display = "none";
        more.innerHTML = "Learn less";
        lern.style.display = "inline";
    }
}
function Background() {
 document.lapas.style.backgroundColor = "#f3f3f3";
  document.lapas.style.backgroundImage = "url('retro.png')";
  document.footer.style.backgroundColor = "#f3f3f3";
  document.footer.style.backgroundImage = "url('retro.png')";
}
function myHome() {
    let pasleptsTeksts = document.getElementById('homep');
    let visasLapas = document.getElementsByClassName('lapas');
    if (pasleptsTeksts.classList.contains('paslepts')) {
        for (let i = 0; i < visasLapas.length; i++) {
            if (visasLapas[i].id !== 'homep') {
                visasLapas[i].classList.add('paslepts');
            }
        }
        pasleptsTeksts.classList.remove('paslepts');
    }

   // event.preventDefault();
}
function myCasual() {
    let pasleptsTeksts = document.getElementById('casualp');
    let visasLapas = document.getElementsByClassName('lapas');
    if (pasleptsTeksts.classList.contains('paslepts')) {
        for (let i = 0; i < visasLapas.length; i++) {
            if (visasLapas[i].id !== 'casualp') {
                visasLapas[i].classList.add('paslepts');
            }
        }
        pasleptsTeksts.classList.remove('paslepts');
    }

    event.preventDefault();
}
function myCompetitive() {
    let pasleptsTeksts = document.getElementById('compp');
    let visasLapas = document.getElementsByClassName('lapas');
    if (pasleptsTeksts.classList.contains('paslepts')) {
        for (let i = 0; i < visasLapas.length; i++) {
            if (visasLapas[i].id !== 'compp') {
                visasLapas[i].classList.add('paslepts');
            }
        }
        pasleptsTeksts.classList.remove('paslepts');
    }

    event.preventDefault();
}
function myLeader() {
    let pasleptsTeksts = document.getElementById('leadp');
    let visasLapas = document.getElementsByClassName('lapas');
    if (pasleptsTeksts.classList.contains('paslepts')) {
        for (let i = 0; i < visasLapas.length; i++) {
            if (visasLapas[i].id !== 'leadp') {
                visasLapas[i].classList.add('paslepts');
            }
        }
        }
        tabcontent[i].style.display = "none";
    
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById("div1").style.display = "block";
    elmnt.style.backgroundColor = color;
    
    }
async function spele() {
    document.getElementById('button-container').innerHTML="";
    var vards = await randomVards();
    var sajaukts = sajauc(vards);
    console.log(sajaukts);
    console.log(vards);
    makeButtons(vards, sajaukts);
    sakt();
    
}

    function skaita() {
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = now - countDownDate;

    // Time calculations for days, hours, minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = 60 - Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance > 60000) {
        clearInterval(spele);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}
async function randomVards() {
    try {
        const response = await fetch('https://random-word-form.repl.co/random/noun');
        const dati = await response.json();
        const datim = [];
        for (var i = 0; i < dati[0].length; i++) {
            datim[i] = dati[0][i];
        }
        return datim;
    } catch (error) {
        console.error('Kļūda vārda saņemšanas procesā:', error);
    }
}

function sajauc(a) {
    let randomPairs = [];

    for (let i = 0; i < a.length; i++) {
        let nr = Math.floor(Math.random() * 100);
        randomPairs[i] = {"index": i, "random": nr};
    }

    randomPairs.sort(function (a, b) {
        return a.random - b.random;
    });

    let sajaukts = [];
    for (let i = 0; i < a.length; i++) {
        sajaukts.push(a[randomPairs[i]["index"]]);
    }

    return sajaukts;
}
function makeButtons(a, b) {
    var contain = document.getElementById('button-container');
    b.forEach(function (char) {
        var button = document.createElement('button');
        button.className="burtupogas";
        button.textContent = char;
        button.setAttribute("draggable", "true");
        button.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData("text", event.target.textContent);
            //console.log('Dragstart', button.textContent);
            
        });
        contain.appendChild(button);
    });
    //buttons.forEach(function (button) {
        
    //});
    //makeButtonsDraggable(buttons);
    /*contain.addEventListener('dragover', function (event) {
    event.preventDefault();
    console.log('Dragover');
});*/

/*contain.addEventListener('drop', function (event) {
    event.preventDefault();
    console.log('Drop');
    var draggedText = event.dataTransfer.getData('text/plain');
    var draggedButton = buttons.find(function (button) {
        return button.textContent === draggedText;
    });

    if (draggedButton) {
        console.log('Before move: ', buttons.map(button => button.textContent));
        var index = buttons.indexOf(draggedButton);
        contain.insertBefore(draggedButton, buttons[index]);
        console.log('After move: ', buttons.map(button => button.textContent));
        checkButtonOrder(a, buttons);
    }
});*/

 //   contain.addEventListener('mouseup', function() {
  //      checkButtonOrder(a, buttons);
 //   });
}
// Функция, делающая кнопки перетаскиваемыми
/*function makeButtonsDraggable(buttons) {
    buttons.forEach(function (button) {
        button.setAttribute('draggable', true);
        button.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData("text", event.target.textContent);
            console.log('Dragstart', button.textContent);
            event.dataTransfer.setData('text/plain', button.textContent);
        });
    });
}*/

// Функция для проверки порядка кнопок и сравнения с изначальным текстом
function checkButtonOrder(correct, buttons) {
    var currentOrder = buttons.map(function (button) {
        return button.textContent;
    });

    if (masivSalidz(currentOrder, correct)) {
        
        alert("Tu uzvarēji");
        alert(punkti);
    }
}
    

function masivSalidz(mas1, mas2,puntki1){
    if (mas1.length !== mas2.length) {
        return false;
    }else{
        for (var i = 0; i < mas1.length; i++) {
            if (mas1[i]!==mas2[i]){
                return false;
            }
                
        }
        return true;
        return punkti1 = (mas1.length * 5)*mas1.length;
    }
}

function punkti(puntki1,){
    var punkti = punkti + punkti1;
    document.getElementById("demo").innerHTML = punkti ;
    return punkti;
}
       


// no https://www.w3schools.com/howto/howto_js_countdown.asp 
var countDownDate, spele;

function sakt() {
    countDownDate = new Date().getTime();
    spele = setInterval(skaita, 1000);
}

// Update the count down every 1 second







document.addEventListener('DOMContentLoaded', (event) => {
 
function handleDragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
 
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}
 
function handleDragEnd(e) {
  this.style.opacity = '1';
 
  items.forEach(function (item) {
    item.classList.remove('over');
  });
}
 
function handleDragOver(e) {
  e.preventDefault();
  return false;
}
 
function handleDragEnter(e) {
  this.classList.add('over');
}
 
function handleDragLeave(e) {
  this.classList.remove('over');
}
 
function handleDrop(e) {
    e.stopPropagation();
 
if (dragSrcEl !== this) {
  dragSrcEl.innerHTML = this.innerHTML;
  this.innerHTML = e.dataTransfer.getData('text/html');
}
 
return false;
}
 
let items = document.querySelectorAll('.burtupogas');
items.forEach(function(item) {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragover', handleDragOver);
  item.addEventListener('dragenter', handleDragEnter);
  item.addEventListener('dragleave', handleDragLeave);
  item.addEventListener('dragend', handleDragEnd);
  item.addEventListener('drop', handleDrop);
});
});

      //  pasleptsTeksts.classList.remove('paslepts');
    

   // event.preventDefault();

function myRules() {
    let pasleptsTeksts = document.getElementById('rulep');
    let visasLapas = document.getElementsByClassName('lapas');
    if (pasleptsTeksts.classList.contains('paslepts')) {
        for (let i = 0; i < visasLapas.length; i++) {
            if (visasLapas[i].id !== 'rulep') {
                visasLapas[i].classList.add('paslepts');
            }
        }
    }
    }