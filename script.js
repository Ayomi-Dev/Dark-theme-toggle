let darkmode = localStorage.getItem('darkmode'); //retrieves the value of 'darkmode' in the local storage
const toggleBtn = document.querySelector('.toggle-btn')

const enableDarkmode = () => {
   document.body.classList.add('darkmode');  //adds the class 'darkmode' to the body
   localStorage.setItem('darkmode', 'active'); //updates darkmode to 'active' in local storage so that user's preference can be remembered
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode'); //removes the class 'darkmode' from the body
    localStorage.setItem('darkmode', null) //sets the value of 'darkmode' to null in local storage
}

if(darkmode === 'active') enableDarkmode(); //checks if darkmode is active, if so, it means user has previously enabled it, so the page automatically turns on darkmode when it loads

toggleBtn.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode'); //
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode(); // if darkmode is not active, enable it, otherwise disable it
})