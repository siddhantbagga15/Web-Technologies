function getJSON(file, callbackFunction) {
    var f = new XMLHttpRequest();
    f.overrideMimeType("application/json");
    f.open("GET", file, true);
    f.onreadystatechange = function () {
        if (f.readyState === 4 && f.status == "200") {
            callbackFunction(f.responseText);
        }
    }
    f.send(null);
}

getJSON("https://siddhantbagga15.github.io/hw1_data/data.json", function (json) {

    var data = JSON.parse(json);
    var section2 = data.section2;
    var section3 = data.section3;
    var section3Texts = section3.text;
    var section4Components = data.section4;
    var imagePathPrefix = "https://siddhantbagga15.github.io/hw1_data/images/"

    var cardRowWrapper = document.querySelector('.row_wrapper');

    section2.forEach(i => {
        var imgPath = i.image;
        var text = i.text;
        var img = document.createElement('img');
        var heading = i.heading;
        img.classList.add("card_image");
        img.src = imagePathPrefix + imgPath;
        var paragraph = document.createElement('p');
        paragraph.classList.add("card_paragraph")
        paragraph.textContent = text;
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        div3.classList.add("card");
        div2.classList.add('column_wrapper');
        var head1 = document.createElement('h3');
        head1.classList.add('card_heading');
        head1.textContent = heading;
        div3.appendChild(img);
        div3.appendChild(head1);
        div3.appendChild(paragraph);
        div2.appendChild(div3);
        cardRowWrapper.appendChild(div2);
    });

    const section3Paragraph = document.querySelector('#section3_paragraph_wrapper');
    section3Texts.forEach(j => {
        var sectionPara = document.createElement('p');
        sectionPara.textContent = j;
        sectionPara.classList.add("section3_paragraph");
        section3Paragraph.appendChild(sectionPara);
    })

    var section4 = document.querySelector('#section4_wrapper');
    section4Components.forEach((k, idx) => {
        var div1 = document.createElement('div');
        div1.classList.add("section4_component_wrapper");
        var div2 = document.createElement('div');
        div3 = document.createElement('div');
        var image = document.createElement('img');
        image.src = imagePathPrefix + k.image;
        var title = document.createElement('h1');
        title.textContent = k.heading;
        var text = document.createElement('p');
        text.textContent = k.text;
        if (idx % 2 == 0) {
            div2.classList.add('section4_left_image_wrapper');
            div3.classList.add('section4_right_paragraph_wrapper');
            image.classList.add("section4_image");
            title.classList.add("section4_heading_left");
            text.classList.add("section4_text");
        }
        else {
            div2.classList.add('section4_right_image_wrapper');
            div3.classList.add('section4_left_paragraph_wrapper');
            image.classList.add("section4_image");
            title.classList.add("section4_heading_right");
            text.classList.add("section4_text");
        }
        div2.appendChild(image);
        div3.appendChild(title);
        div3.appendChild(text);
        div1.appendChild(div2);
        div1.appendChild(div3);
        section4.appendChild(div1);
    });
});

