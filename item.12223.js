//legendary seal-clubbing club, diablo stylized

// load a CSS file instead of writing a CSS file in JS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'legendary.css'; // path to file (in relay/ )
document.getElementsByTagName('HEAD')[0].appendChild(link);

//page specfic fixes
document.querySelector("#description > blockquote:nth-child(3) > b:nth-child(3)").innerHTML = "weapon (1-handed legendary wand)";

const blueFonts = document.querySelectorAll("font[color='blue']");
    blueFonts.forEach(font => {
        font.removeAttribute("color"); // Strip the old blue attribute
        font.style.setProperty("color", "rgb(144, 52, 255)"); // Apply "Diablo purple"
    });