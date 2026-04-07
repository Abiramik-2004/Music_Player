const songs = [
  {
    title: "Aadi Masam Kathadika",
    artist: "Illayaraja",
    src: "songs/Aadi-Maasa-Kaathadikka-MassTamilan.fm.mp3"
  },
  {
    title: "Aasaiye Kaathule",
    artist: "Illayaraja",
    src: "songs/Aasaiye-Kaathule-MassTamilan.com.mp3"
  },
  {
    title: "Song 3",
    artist: "Illayaraja",
    src: "songs/song3.mp3"
  }
];

let currentIndex = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const playlist = document.getElementById("playlist");

// Load Playlist UI
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.innerText = song.title;
  li.onclick = () => playSong(index);
  playlist.appendChild(li);
});

// Play Song
function playSong(index) {
  currentIndex = index;
  audio.src = songs[index].src;
  title.innerText = songs[index].title;
  artist.innerText = songs[index].artist;
  audio.play();
}

// Play/Pause
function togglePlay() {
  if (audio.paused) audio.play();
  else audio.pause();
}

// Next
function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(currentIndex);
}

// Previous
function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(currentIndex);
}

// Progress Bar
audio.ontimeupdate = () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
};