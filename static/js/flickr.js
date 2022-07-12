'use strict';

const flickrElement = document.querySelector("#flickr");

function updateData(data) {
    console.log("Data: ", data); // log data in the console
    data.forEach(element => {
        const imgElement = document.createElement('img');
        const descriptionElement = document.createElement("p");
            descriptionElement.innerHTML = element.description;
            flickrElement.appendChild(descriptionElement);
        imgElement.src = element.media.m;
        flickrElement.appendChild(imgElement);
        
    });
}

function fetchData() {
    fetch(
        "/flickr.json"
    ).then((response) => {
        return response.json();
    }).then((data) => {
        updateData(data);
    })
}

fetchData();
