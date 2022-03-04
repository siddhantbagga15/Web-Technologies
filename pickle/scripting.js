const backendUrl = "https://siddhantbagga.pythonanywhere.com/";

async function processData() {
    console.log("HI");
    var age = document.getElementById("ageInput").value;
    var weight = document.getElementById("weightInput").value;
    var data = {
        age: age, 
        weight: weight
    }
    
    const response = await fetch(backendUrl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "https://siddhantbagga.pythonanywhere.com/"
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
    console.log("HERE!!!!");
    console.log(response);

}