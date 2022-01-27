let playSong = true

//Start application
document.addEventListener('DOMContentLoaded', start, false)

function start(){
    document.querySelector('.stopPlay').addEventListener('click', startSong)
    document.querySelector('#sound').addEventListener('timeupdate', currentTimeOfSong)

}

function startSong(){

    const song = document.querySelector('#sound')
    const buttonPlayStop = document.querySelector('stopPlay')
    const i = document.querySelector('#playStop')
    
    if(playSong){
        
        i.classList.remove('bi')
        i.classList.remove('bi-play-fill')
        i.classList.add('bi')
        i.classList.add('bi-pause-fill')
        
        song.play()

        playSong = false
    }else{
        i.classList.remove('bi')
        i.classList.remove('bi-pause-fill') 
        i.classList.add('bi')
        i.classList.add('bi-play-fill')

        song.pause()
        playSong = true
        
    }
}

function currentTimeOfSong(e){
    const rangeTimeElement = document.querySelector('.progressMusicClass')
    const timeOfSongWithNumbers = document.querySelector('.timeOfSong')
    
    rangeTimeElement.value = e.target.currentTime
    timeOfSongWithNumbers.innerHTML = `${((e.target.currentTime / 60) % 60).toFixed(2) } / 4:53` 
}