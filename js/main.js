let playSong = true

//Start application
document.addEventListener('DOMContentLoaded', start, false)

function start(){
    document.querySelector('.stopPlay').addEventListener('click', startSong)
}

function startSong(e){
    e.preventDefault()

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
