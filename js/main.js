let playSong = true

//Start application
document.addEventListener('DOMContentLoaded', start, false)

function start(){
    document.querySelector('.stopPlay').addEventListener('click', startSong)
    document.querySelector('.progressMusicClass').addEventListener('input', changeProgressMusic)
    document.querySelector('#sound').addEventListener('timeupdate', currentTimeOfSong)

}

function startSong(e){

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
    const currentTime = e.target.currentTime

    rangeTimeElement.value = e.target.currentTime

    let min = parseInt((currentTime / 60) % 60)
    let seg = parseInt((currentTime) % 60)

    timeOfSongWithNumbers.innerHTML = `${min}:${seg}/ 4:53` 
}

function changeProgressMusic(){
    const song = document.querySelector('#sound')  
    const inputRangeProgress = document.querySelector('.progressMusicClass')

    if(playSong){
        startSong()
        song.currentTime = inputRangeProgress.value
    }
    else song.currentTime = inputRangeProgress.value
}
