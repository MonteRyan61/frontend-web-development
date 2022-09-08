//Changing a DOM property that is not a CSS property
const headingChange = document.getElementById("second-item");
headingChange.innerText = "Hover over me if you hate Apple Music";

//Changing a DOM property that is not a CSS property
const headingChange2 = document.getElementById("third-item");
headingChange2.innerText = "Click anywhere see change the page color";

//Changing a DOM property that is a CSS property
const flexItems = document.querySelectorAll(".flex-item");
function changeFlexItemClassColor(color) {
    for (const flexItem of flexItems) {
        flexItem.style.backgroundColor = color;
    }
}
  
changeFlexItemClassColor("palegoldenrod");

const pageChange = document.querySelector("html");
const pageChange2 = document.querySelector("body");
pageChange.addEventListener('click', () => {
    pageChange2.style.backgroundColor = "palegoldenrod";
    headingChange2.innerText = "The page color scheme has been changed";
    changeFlexItemClassColor("ivory");
});

headingChange.addEventListener('mouseenter', () => {
    headingChange.innerText = "Ahhh Spotify much better";
});
  
headingChange.addEventListener('mouseleave', function() {
    headingChange.innerText = "Hover over me if you hate Apple Music";
});

const imageChange = document.getElementById("image");
imageChange.addEventListener('mouseenter', () => {
    imageChange.src="spotify.png";
});
  
imageChange.addEventListener('mouseleave', function() {
    imageChange.src="appleMusic.png";
});

