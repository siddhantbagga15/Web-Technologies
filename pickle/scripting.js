const backendUrl = "https://siddhantbagga.pythonanywhere.com/";

async function processData() {
    console.log("HI");
    var age = document.getElementById("ageInput").value;
    var weight = document.getElementById("weightInput").value;
    var data = {
        age: age, 
        weight: weight
    }

    var dj = (JSON.stringify(data));
    const response = await fetch(backendUrl, {
        method: 'POST',
        // headers: headers,
        // mode: 'cors',
        body: dj // body data type must match "Content-Type" header
      });
    // fetch(backendUrl)
    // .then(res => console.log(res))
    var res = await response.text();
    console.log("HERE!!!!", res);
    //console.log(response);

    var c = document.getElementById('finalResult')
    c.textContent = res;
    // c.appendChild(d);


}