
/*
document.getElementById('getTheData').addEventListener('click', getData);
lyricReturn = 'https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime'

function getData(){
  fetch(lyricReturn)
    .then(function(response){
      return(response.json());
    })
    .then(function(data){
      console.log(data.lyrics);
      let song = data.lyrics ;


    document.getElementById('demo').innerHTML = song
    }
  )
} */

lyricReturn = 'https://api.lyrics.ovh'

function getData(){
	artist = document.getElementById("getTheArtist").value
    title = document.getElementById("getTheSong").value
    url = lyricReturn + "/v1/" + artist + "/" + title

    console.log(url)
  fetch(url)
    .then(function(response){
      return(response.json());
    })
    .then(function(data){
      console.log(data.lyrics);
      let song = data.lyrics ;


    document.getElementById('demo').innerHTML = song
    document.getElementById('artistName').innerHTML = artist
    document.getElementById('songTitle').innerHTML = title
    }
  )
}

/* return results on enter */

document.getElementById("getTheSong")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("searchButton").click();
    }
});
