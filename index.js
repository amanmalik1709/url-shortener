function handledropdownmenu() {
    const hamburgerlogbar = document.getElementById('hamburgerlog-bar');
    const hamburgerlogcross = document.getElementById('hamburgerlog-cross');
    const dropdown = document.getElementById('dropdown');

    hamburgerlogbar.classList.toggle('hidden');
    hamburgerlogcross.classList.toggle('hidden');
    dropdown.classList.toggle('hidden');
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    const dropdown = document.getElementById('dropdown');



    dropdown.classList.add('hidden');
    document.getElementById('hamburgerlog-bar').classList.remove('hidden');
    document.getElementById('hamburgerlog-cross').classList.add('hidden');
});