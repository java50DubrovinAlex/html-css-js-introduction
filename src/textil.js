const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class");
const buttonHidden = document.querySelector("button");
const HIDDEN = "hidden";
function showDetails(){
    mainElement.classList.remove(HIDDEN);
}
function hiddeDetails(){
    mainElement.classList.add(HIDDEN);
}
function setDetails(anchor){
    detailsImage.src = anchor.getAttribute("data-details-image");
    detailsTitle.innerHTML =  anchor.getAttribute("data-details-title");
    showDetails();
}
for(let i = 0; i < anchorElements.length; i++){
    anchorElements[i].addEventListener("click", function(){
        setDetails(anchorElements[i]);
    });
}
buttonHidden.addEventListener("click", function(){
    hiddeDetails(buttonHidden);
});
