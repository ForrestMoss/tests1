function myFunktion(){
            var dots=document.getElementById("dots");
            var moreText=document.getElementById("lern");
            var btn=document.getElementById("more");
            if(dots.style.display ==="none"){
                dots.style.display="inline";
                more.innerHTML="Learn more";
                lern.style.display="none";
            }else{
                dots.style.display="none";
                more.innerHTML="Learn less";
                lern.style.display="inline";
            }
            }
        function paraditTekstu() {
            var pasleptsTeksts = document.getElementById('paslepts');
            if (pasleptsTeksts.style.display === 'none') {
                pasleptsTeksts.style.display = 'block';
            } else {
                pasleptsTeksts.style.display = 'none';
            }
        }
        function myFunction(){
        let dots = document.getElementById("dots");
        let moreText = document.getElementById("more");
        let pogaText = document.getElementById("poga");
        if (dots.style.display === "none"){
            dots.style.display = "inline";
            pogaText.innerHTML = "What element ?";
            moreText.style.display ="none";
        } else{
            dots.style.display = "none";
            pogaText.innerHTML="bro";
            moreText.style.display = "inline";
            
        }
        }  
        function paraditTekstu() {
            var pasleptsTeksts = document.getElementById('paslepts');
            if (pasleptsTeksts.classList.contains('paslepts')) {
                pasleptsTeksts.classList.remove('paslepts');
            } else {
                pasleptsTeksts.classList.add('paslepts');
            }
        }
        function myHome(){
        let dots = document.getElementById("dots2");
        let moreText = document.getElementById("homep");
        
        if (dots.style.display === "none"){
            dots.style.display = "inline";
            
            moreText.style.display ="none";
        } else{
            dots.style.display = "none";
            
            moreText.style.display = "inline";
            
        }
        } 
        function myCasual(){
        let dots = document.getElementById("dots3");
        let moreText = document.getElementById("casualp");
        let pogaText = document.getElementById("casual");
        if (dots.style.display === "none"){
            dots.style.display = "inline";
            
            moreText.style.display ="none";
        } else{
            dots.style.display = "none";
            
            moreText.style.display = "inline";
            
        }
        } 
        function myCompetitive(){
        let dots = document.getElementById("dots4");
        let moreText = document.getElementById("compp");
        
        if (dots.style.display === "none"){
            dots.style.display = "inline";
            
            moreText.style.display ="none";
        } else{
            dots.style.display = "none";
            
            moreText.style.display = "inline";
            
        }
        } 
        function myLeader(){
        let dots = document.getElementById("dots5");
        let moreText = document.getElementById("leadp");
        
        if (dots.style.display === "none"){
            dots.style.display = "inline";
            
            moreText.style.display ="none";
        } else{
            dots.style.display = "none";
          
            moreText.style.display = "inline";
            
        }
        }
        function myRules(){
        let dots = document.getElementById("dots6");
        let moreText = document.getElementById("rulep");
        
        if (dots.style.display === "none"){
            dots.style.display = "inline";
           
            moreText.style.display ="none";
        } else{
            dots.style.display = "none";
            
            moreText.style.display = "inline";
            
        }
        } 
                function openPage(pageName,elmnt,color) {
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

        function randomVards() {
            fetch('https://random-word-api.herokuapp.com/word')
                .then(response => response.json())
                .then(dati => {
                    let sajauktsVards = sajauc(dati[0]);
                    console.log(sajauktsVards);
                    console.log(dati[0]);
                });
        }

        function sajauc(vards) {
            let randomPairs = [];

            for (let i = 0; i < vards.length; i++) {
                let nr = Math.floor(Math.random() * 100);
                randomPairs[i] = {"index": i, "random": nr};
            }

            randomPairs.sort(function (a, b) {
                return a.random - b.random;
            });

            let sajaukts = "";
            for (let i = 0; i < vards.length; i++) {
                sajaukts += vards.charAt(randomPairs[i]["index"]);
            }

            return sajaukts;
        }

        console.log(randomVards());
         // no https://www.w3schools.com/howto/howto_js_countdown.asp 
            var countDownDate, spele;
            function sakt() {
                countDownDate = new Date().getTime();
                spele = setInterval(skaita, 1000);
            }
        // Update the count down every 1 second
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

