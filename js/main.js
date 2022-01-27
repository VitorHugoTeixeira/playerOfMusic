let playSong = true
const song = document.querySelector('#sound')

//Start application
document.addEventListener('DOMContentLoaded', start, false)

function start(){
    document.querySelector('.stopPlay').addEventListener('click', startSong)
    document.querySelector('.progressMusicClass').addEventListener('input', changeProgressMusic)
    document.querySelector('#sound').addEventListener('timeupdate', currentTimeOfSong)
    document.querySelector('.volMusic').addEventListener('input', changingVolumeOfSong)

}

function startSong(e){

    
    const buttonPlayStop = document.querySelector('stopPlay')
    const i = document.querySelector('#playStop')
    
    if(playSong){
        
        i.classList.remove('bi-play-fill')
        i.classList.add('bi-pause-fill')
        
        song.play()

        playSong = false
    }else{
        i.classList.remove('bi-pause-fill') 
        i.classList.add('bi-play-fill')

        song.pause()
        playSong = true
        
    }
}

function currentTimeOfSong(e){
    const rangeTimeElement = document.querySelector('.progressMusicClass')
    const timeOfSongWithNumbers = document.querySelector('.timeOfSong')
    const currentTime = e.target.currentTime

    rangeTimeElement.value = e.target.currentTime

    let min = parseInt((currentTime / 60) % 60)
    let seg = parseInt((currentTime) % 60)

    timeOfSongWithNumbers.innerHTML = `${min}:${seg}/ 4:53` 
}

function changeProgressMusic(){
    const inputRangeProgress = document.querySelector('.progressMusicClass')

    if(playSong){
        startSong()
        song.currentTime = inputRangeProgress.value
    }
    else song.currentTime = inputRangeProgress.value
}

function changingVolumeOfSong(){
    const i = document.querySelector('.volumeIcon')
    const rangeVolume = document.querySelector('.volMusic')
    
    if((rangeVolume.value / 100) === 0){
        i.classList.remove('bi-volume-down-fill') 
        i.classList.add('bi-volume-mute-fill')
    }else{
        i.classList.remove('bi-volume-mute-fill') 
        i.classList.add('bi-volume-down-fill')
    }
    
    song.volume = rangeVolume.value / 100
}
