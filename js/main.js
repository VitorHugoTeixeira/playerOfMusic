let playSong = true
let changeDisplay = true
const song = document.querySelector('#sound')

//Start application
document.addEventListener('DOMContentLoaded', start, false)

function start(){
    document.querySelector('.stopPlay').addEventListener('click', startSong)
    document.querySelector('.progressMusicClass').addEventListener('input', changeProgressMusic)
    document.querySelector('#sound').addEventListener('timeupdate', currentTimeOfSong)
    document.querySelector('.volMusic').addEventListener('input', changingVolumeOfSong)
    document.querySelector('#buttonChange').addEventListener('click', changeLayout)

}


function changeLayout(e){
    
    e.preventDefault()

    const divButtons = document.querySelector('.groupButtons')
    const iconChange = document.querySelector('#iconChange')
    const buttonChange = document.querySelector('#buttonChange')
    const titleInformation = document.querySelector('.titleInformation')
    const buttonStopPlay = document.querySelector('.stopPlay')
    const iconPlayStop = document.querySelector('#playStop')
    const buttonProgress =  document.querySelector('.progressMusicClass')
    const iconVolume = document.querySelector('.volumeIcon')
    const volButton = document.querySelector('.volMusic')
    const titleHidden = document.querySelector('.titleHidden')
    const timeOfSOng = document.querySelector('.timeOfSong')


    if(changeDisplay){
        // Css prorperties
        divButtons.style.backgroundColor = "blue"
        titleInformation.style.visibility = 'visible'
        buttonStopPlay.style.display = "block"
        iconPlayStop.style.display = "block"
        buttonProgress.style.display = "block"
        iconVolume.style.display = "block"
        volButton.style.display = "block"
        titleHidden.style.display = "none"

        // Add & Remove class
        buttonChange.classList.remove('change')
        buttonChange.classList.add('close')

        iconChange.classList.remove('changeIcon')
        iconChange.classList.remove('bi-play-fill')
        iconChange.classList.add('closeIcon')
        iconChange.classList.add('bi-x')

        changeDisplay = false
    
    }else{
        // Css prorperties
        divButtons.style.backgroundColor = "#fff"
        titleInformation.style.visibility = 'hidden'
        buttonStopPlay.style.display = "none"
        buttonProgress.style.display = "none"
        iconPlayStop.style.display = "none"
        iconVolume.style.display = "none"
        volButton.style.display = "none"
        titleHidden.style.display = "block"


        // Add & Remove class
        buttonChange.classList.remove('close')
        buttonChange.classList.add('change')

        iconChange.classList.remove('closeIcon')
        iconChange.classList.remove('bi-x')
        iconChange.classList.add('changeIcon')
        iconChange.classList.add('bi-play-fill')
        
        song.currentTime = 0
        buttonProgress.value = 0
        timeOfSOng.innerHTML = '0:0'
        

        changeDisplay = true
    }

    //start song
    startSong()
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

function changeProgressMusic(e){
    const inputRangeProgress = document.querySelector('.progressMusicClass')

    if(playSong){
        startSong()
        song.currentTime = inputRangeProgress.value
    }
    else song.currentTime = inputRangeProgress.value
}

function changingVolumeOfSong(e){
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
