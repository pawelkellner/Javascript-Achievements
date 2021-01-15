    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["MONKE", "BANANA", "PICTURE"];
    const werkwoord = ["EATS", "EATS", "MONKE"];
    const restwoord = ["BANANA", "MONKE??", "EAT"];
        
    let plaatjes = ["https://ewscripps.brightspotcdn.com/dims4/default/cfa59e0/2147483647/strip/true/crop/587x330+0+43/resize/1280x720!/quality/90/?url=http%3A%2F%2Fmediaassets.fox13now.com%2Ftribune-network%2Ftribkstu-files-wordpress%2F2016%2F01%2Fcatbanana.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgelt6-ryJdD58Zrj90tvzZIpMg_dSo9otA&usqp=CAU", "https://i1.sndcdn.com/artworks-vFJKwR4zy1lAfuya-yL1UHw-t500x500.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bafa57a9-f430-40a4-aec1-d178fc83546d/ddfi06p-9dc1184d-242d-432f-88f7-1f83f397c8aa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYmFmYTU3YTktZjQzMC00MGE0LWFlYzEtZDE3OGZjODM1NDZkXC9kZGZpMDZwLTlkYzExODRkLTI0MmQtNDMyZi04OGY3LTFmODNmMzk3YzhhYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LA_t1pcA4eZZshUnS3nRsXflo6PLJnJQinMWlUo0HrA"]
    let arrayLength = onderwerp.length;
