const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Mozilla_Firefox_logo_2013.svg.png') {
    myImage.setAttribute('src','images/nightly.png');
  } else {
    myImage.setAttribute('src','images/Mozilla_Firefox_logo_2013.svg.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }
  

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
  
myButton.onclick = () => {
  setUserName();
}
    

