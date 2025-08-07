
function closepopup() {
    const profilepicturepopup = document.querySelector('.profilepicture-upload');
    profilepicturepopup.style.display = 'none';
}

function openpopup() {
    const profilepicturepopup = document.querySelector('.profilepicture-upload');
    profilepicturepopup.style.display = 'flex';    
}
function saveimg() {
    alert('the value :' +document.getElementById('fileinput').value);
}