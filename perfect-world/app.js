// fetch from data.json
let DATA = 'data.json';
async function fetchData () {
    const response = await fetch(DATA);
    let gold = await response.json();
    return gold;
}

fetchData().then (
    function (add) {
        var s2 = add["section2"];
        var sec2 = document.querySelector('.sec2');
        // test console.log
        // console.log(s2);

        for (var i = 0; i < s2.length; i++) {
            
            var box = document.createElement('div');
            box.setAttribute('class', 'box');
            // read and put pics on html
            var img = document.createElement('img');
            img.setAttribute('style', 'width: 450px; height: 322px; padding: 20px 20px 20px;');
            img.src = s2[i].image;
            box.appendChild(img);
            sec2.appendChild(box);

            // create and read heading from json
            var h2 = document.createElement('h2');
            h2.innerHTML = s2[i].heading;
            box.appendChild(h2);
            sec2.appendChild(box);

            //  read and create paragraph
            var p = document.createElement("p");
            p.setAttribute('class', 'sec2Text');
            p.innerHTML = s2[i].text;
            box.appendChild(p);
            sec2.appendChild(box);

        }
       
    } 
);

// fetch section 3 text from data.json
fetchData().then (
    function(add1) {
        var s3 = add1["section3"];
        var s3t = s3.text;
        var sec3Div = document.querySelector('.sec3Div');
        

        for (var i=0; i< s3t.length; i++) {
           var p = document.createElement('p');
           p.innerHTML = s3t[i];
           p.setAttribute('class', 'sec3Text');
           sec3Div.appendChild(p);
           if (i<1) {
               var br = document.createElement('div');
               br.innerHTML="</br>";
               sec3Div.appendChild(br);
           }

        }

    }

) 

// section 4 fetch from data.json
fetchData().then (
    function(add2) {
        var s4 = add2["section4"];
        var sec4 = document.querySelector('.sec4');

        for(var i=0; i<s4.length; i++) {

            if (i<1) {
                var sec4Div = document.querySelector('.sec4Div');
                var boxL = document.createElement('div');
                boxL.setAttribute('class', 'L1');
                var img = document.createElement('img');
                img.src = s4[i].image;
                img.setAttribute('style', 'width: 502px; height: 345px;');
                boxL.appendChild(img);
                sec4Div.appendChild(boxL);

                var boxR = document.createElement('div');
                boxR.setAttribute('class', 'R1');
                var h3 = document.createElement('h3');
                h3.innerHTML = s4[i].heading;
                boxR.appendChild(h3);
                sec4Div.appendChild(boxR);

               var br = document.createElement('div');
               br.innerHTML="</br>";
               boxR.appendChild(br);

                //  read and create paragraph
                var p = document.createElement("p");
                // p.setAttribute('class', 'sec2Text');
                p.innerHTML = s4[i].text;
                boxR.appendChild(p);
                sec4Div.appendChild(boxR);

            }
            else {
                var down = document.querySelector('.down');
                var boxLD = document.createElement('div');
                boxLD.setAttribute('class', 'L2');
                var h3D = document.createElement('h3');
                h3D.innerHTML = s4[i].heading;
                boxLD.appendChild(h3D);
                down.appendChild(boxLD);

                var brD = document.createElement('div');
                brD.innerHTML="</br>";
                boxLD.appendChild(brD);


                var pD = document.createElement('p');
                pD.innerHTML = s4[i].text;
                boxLD.appendChild(pD);
                down.appendChild(boxLD);

                var boxRD = document.createElement('div');
                boxRD.setAttribute('class', 'R2');
                var imgD = document.createElement('img');
                imgD.src = s4[i].image;
                imgD.setAttribute('style', 'width: 502px; height: 345px;');
                boxRD.appendChild(imgD);
                down.appendChild(boxRD);

                
            }

        }


    }
)
