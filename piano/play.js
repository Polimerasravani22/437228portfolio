
document.querySelectorAll('.piano-keys').forEach(key => {
  key.addEventListener('click', () => {
    let note = key.dataset.note;
    let audio = new Audio(`mp3_audio/${note}.mp3`);
    audio.play();
  });
});



