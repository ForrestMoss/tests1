function Background() {
    document.lapas.style.backgroundColor = "#f3f3f3";
    document.lapas.style.backgroundImage = "url('retro.png')";
    document.footer.style.backgroundColor = "#f3f3f3";
    document.footer.style.backgroundImage = "url('retro.png')";
}

function myHome() {
    document.getElementById('buttonContainer').innerHTML = "";
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
    document.getElementById('buttonContainer').innerHTML = "";
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
    document.getElementById('buttonContainer').innerHTML = "";
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
    document.getElementById('buttonContainer').innerHTML = "";
    let pasleptsTeksts = document.getElementById('leadp');
    let visasLapas = document.getElementsByClassName('lapas');
    if (pasleptsTeksts.classList.contains('paslepts')) {
        for (let i = 0; i < visasLapas.length; i++) {
            if (visasLapas[i].id !== 'leadp') {
                visasLapas[i].classList.add('paslepts');
            }
        }
    }
    pasleptsTeksts.classList.remove('paslepts');
}
function myRules() {
    document.getElementById('buttonContainer').innerHTML = "";
    let pasleptsTeksts = document.getElementById('rulep');
    let visasLapas = document.getElementsByClassName('lapas');
    if (pasleptsTeksts.classList.contains('paslepts')) {
        for (let i = 0; i < visasLapas.length; i++) {
            if (visasLapas[i].id !== 'rulep') {
                visasLapas[i].classList.add('paslepts');
            }
        }
    }


    pasleptsTeksts.classList.remove('paslepts');
}
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
var vards="";
async function spele() {
    document.getElementById('buttonContainer').innerHTML = "";
    vards = await randomVards();
    var sajaukts = sajauc(vards);
    console.log(sajaukts);
    console.log(vards);
    createButtons(sajaukts);
    sakt();
}


function sakt() {
    countDownDate = new Date().getTime();
    spele = setInterval(skaita, 1000);
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
function createButtons(saj) {
    const buttonContainer = document.getElementById('buttonContainer');
    const pogas = saj;
    for (var i = 0; i < pogas.length; i++) {
        const button = document.createElement('div');
        button.classList.add('button');
        button.setAttribute('draggable', true);
        button.setAttribute('data-index', i);
        button.innerText = pogas[i];
        buttonContainer.appendChild(button);
    }

    // Pievieno notikumus pārvietošanai un pārbaudei
    let draggedButton = null;

    buttonContainer.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('button')) {
            draggedButton = e.target;
            draggedButton.style.opacity = '0.5';
        }
    });

    buttonContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        const target = e.target;
        const isButton = target.classList.contains('button');
        const isContainer = target.classList.contains('container');
        if (isButton || isContainer) {
            const targetRect = target.getBoundingClientRect();
            const offsetX = e.clientX - targetRect.left;
            const offsetY = e.clientY - targetRect.top;

            const halfway = isButton ? (offsetX > targetRect.width / 2) : true;
            const nextButton = isButton ? target : null;

            if (nextButton && nextButton !== draggedButton.nextSibling) {
                buttonContainer.insertBefore(draggedButton, halfway ? nextButton.nextSibling : nextButton);
            } else if (isContainer && !isButton) {
                buttonContainer.appendChild(draggedButton);
            }
        }
    });
 

    buttonContainer.addEventListener('dragend', (e) => {
        if (draggedButton) {
            draggedButton.style.opacity = '1';
            draggedButton = null;
        }

        if (checkOrder()) {
            alert('Pareizā secībā!');
            
        }
    });
}
function checkOrder() {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < vards.length; i++) {
        if (buttons[i].innerText !== vards[i]) {
            return false;
        }
    }
    return true;
    //return punkti1 = vards.length;
    //punkti(punkti1);
}
   //var puntki;
//var punkti1;
/*function punkti(puntki1){
    
     punkti = punkti + punkti1;
    document.getElementById("punktip").innerHTML = punkti ;
    return punkti;
}
 * 
 */

