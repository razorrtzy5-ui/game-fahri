const musik = new Audio("musik.mp3");

musik.loop = true;
musik.volume = 0.7;

function putarMusik() {
    musik.play().catch(() => {});
}

function hentikanMusik() {
    musik.pause();
    musik.currentTime = 0;
}
