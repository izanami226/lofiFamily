
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// WEATHER
const brDay = $('.background-day--no-rain')
const brNight = $('.background-night--no-rain.none')
const inputEvent = $('#day-check')

const brDayRain = $('.background-day--rain.none')
const brNIghtRain = $('.background-night--rain.none')


// FULLSCREEN
const switchFullscreen = $('.switch-fullscreen')

// NAVIGATION
const navigation = $('.header-nav')

// SIGN/LOGIN
const signupBtn =  $('.signup-btn')
const loginBtn = $('.login-btn')

//TRAFFIC VOLUME
const trafficVolume = $$('#traffic-volume')

//TRAFFIC SONG
const trafficSong = $('#traffic-song')
const btnTraffic = $('.btn-switch--traffic')


//RAIN VOLUME
const rainVolume = $$('#rain-volume')

// RAIN SONG
const rainSong = $('#rain-song')
const btnRain = $('.btn-switch--rain')

// SONG
const prevBtn = $('#prev')
const playBtn = $('.play')
const pauseBtn = $('.pause')
const nextBtn = $('#next')
const audio = $('#audio')
const songVolume = $$('.song-volume')

// MIX MENU
const menus = $$('.menu')
const menuItems = $$('.menu-item')

//MENU MIX VOLUME
const menuMix = $('.menu-mix')

    // Menu Bridge
    const menuBride = $('.mix-bridge')

    // Background Noise Volume
    const mixSongs = $$('.mix-noise audio')
    const mixVolumes = $$('.mix-noise-js input')

    // Menu Catelory
    const chillBtn = $('.chill-btn')
    const rapBtn = $('.rap-btn')
    const rapLofiBtn = $('.rap-lofi-btn')

        // Img
        const menuCateloryImgs = $$('.mix-category-img')
        const menuCateloryTitle = $$('.mix-category-item-title')


const app = {
    currentIndex : 0,
    isPlaying: false,
    song: [
        {
            name: '1',
            path: './asscets/data/music/song/1.mp3'
        },
        {
            name: '2',
            path: './asscets/data/music/song/2.mp3'
        },
        {
            name: '3',
            path: './asscets/data/music/song/3.mp3'
        },
        {
            name: '4',
            path: './asscets/data/music/song/4.mp3'
        },
        {
            name: '5',
            path: './asscets/data/music/song/5.mp3'
        },
        {
            name: '6',
            path: './asscets/data/music/song/6.mp3'
        }
    ],
    songBtnImg: [
        {
            name: 'play',
            path: './asscets/data/img/musicPlayer/pause.png'
        },
        {
            name: 'pause',
            path: './asscets/data/img/musicPlayer/play.png'
        },
    ],
    loadBtnSong: function(data) {
       
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong',{
            get: function() {
                return this.song[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _this = this;

        // Handle click PLAY
        pauseBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause()
                playBtn.classList.remove('none')
                pauseBtn.classList.add('none')
            }
        }

        // Handle click PLAY
        playBtn.onclick = function() {
            if (!_this.isPlaying) {
                audio.play()
                playBtn.classList.add('none')
                pauseBtn.classList.remove('none')
            } 
        }
        
        //PLAYING SONG
        audio.onplay = function() {
            _this.isPlaying = true
        }

        //PAUSE SONG
        audio.onpause = function() {
            _this.isPlaying = false
        }

        //NEXT SONG
        nextBtn.onclick = function() {
            _this.nextSong()
            audio.play()
            playBtn.classList.add('none')
            pauseBtn.classList.remove('none')
        }

        //PREV SONG
        prevBtn.onclick = function() {
            _this.prevSong()
            audio.play()
            playBtn.classList.add('none')
            pauseBtn.classList.remove('none')
        }

        //AUDIO ENDED THEN NEXT SONG
        audio.onended = function() {
            nextBtn.click()
        }

        //// MENU CLICK  LOFI
        chillBtn.onclick = function() {
            _this.song.splice(0,_this.song.length)
            _this.song.push(
                {
                    name: '1',
                    path: './asscets/data/music/song/1.mp3'
                },
                {
                    name: '2',
                    path: './asscets/data/music/song/2.mp3'
                },
                {
                    name: '3',
                    path: './asscets/data/music/song/3.mp3'
                },
                {
                    name: '4',
                    path: './asscets/data/music/song/4.mp3'
                },
                {
                    name: '5',
                    path: './asscets/data/music/song/5.mp3'
                },
                {
                    name: '6',
                    path: './asscets/data/music/song/6.mp3'
                }
            )
            _this.loadCurrentSong()

            menuCateloryImgs[0].classList.add('mix-category-item--active')
            menuCateloryTitle[0].classList.add('mix-category-item--active')
            menuCateloryImgs[0].classList.remove('mix-category-item--no-active')
            menuCateloryTitle[0].classList.remove('mix-category-item--no-active')
            menuCateloryImgs[1].classList.add('mix-category-item--no-active')
            menuCateloryTitle[1].classList.add('mix-category-item--no-active')
            menuCateloryImgs[1].classList.remove('mix-category-item--active')
            menuCateloryTitle[1].classList.remove('mix-category-item--active')
            menuCateloryImgs[2].classList.remove('mix-category-item--active')
            menuCateloryTitle[2].classList.remove('mix-category-item--active')
            menuCateloryImgs[2].classList.add('mix-category-item--no-active')
            menuCateloryTitle[2].classList.add('mix-category-item--no-active')

            if (chillBtn.click) {
                _this.nextSong()
            }

            audio.play()
            playBtn.classList.add('none')
            pauseBtn.classList.remove('none')
        }

        // MENU CLICK  US_UK
        rapBtn.onclick = function() {
            _this.song.splice(0,_this.song.length)
            _this.song.push(
                {
                    name: '1',
                    path: './asscets/data/music/song/rap/1.mp3'
                },
                {
                    name: '2',
                    path: './asscets/data/music/song/rap/2.mp3'
                },
                {
                    name: '3',
                    path: './asscets/data/music/song/rap/3.mp3'
                },
                {
                    name: '4',
                    path: './asscets/data/music/song/rap/4.mp3'
                },
                {
                    name: '5',
                    path: './asscets/data/music/song/rap/5.mp3'
                },
                {
                    name: '6',
                    path: './asscets/data/music/song/rap/6.mp3'
                },
                {
                    name: '7',
                    path: './asscets/data/music/song/rap/7.mp3'
                },
                {
                    name: '8',
                    path: './asscets/data/music/song/rap/8.mp3'
                },
                {
                    name: '9',
                    path: './asscets/data/music/song/rap/9.mp3'
                },
                {
                    name: '10',
                    path: './asscets/data/music/song/rap/10.mp3'
                },
                {
                    name: '11',
                    path: './asscets/data/music/song/rap/11.mp3'
                },
                {
                    name: '12',
                    path: './asscets/data/music/song/rap/12.mp3'
                },
                {
                    name: '13',
                    path: './asscets/data/music/song/rap/13.mp3'
                },
                {
                    name: '14',
                    path: './asscets/data/music/song/rap/14.mp3'
                },
                {
                    name: '15',
                    path: './asscets/data/music/song/rap/15.mp3'
                },
                {
                    name: '16',
                    path: './asscets/data/music/song/rap/16.mp3'
                },
                {
                    name: '17',
                    path: './asscets/data/music/song/rap/17.mp3'
                }
            )
            _this.loadCurrentSong()

            menuCateloryImgs[0].classList.remove('mix-category-item--active')
            menuCateloryTitle[0].classList.remove('mix-category-item--active')
            menuCateloryImgs[0].classList.add('mix-category-item--no-active')
            menuCateloryImgs[0].classList.add('mix-category-item--no-active')
            menuCateloryImgs[1].classList.add('mix-category-item--active')
            menuCateloryTitle[1].classList.add('mix-category-item--active')
            menuCateloryImgs[1].classList.remove('mix-category-item--no-active')
            menuCateloryTitle[1].classList.remove('mix-category-item--no-active')
            menuCateloryImgs[2].classList.remove('mix-category-item--active')
            menuCateloryTitle[2].classList.remove('mix-category-item--active')
            menuCateloryImgs[2].classList.add('mix-category-item--no-active')
            menuCateloryTitle[2].classList.add('mix-category-item--no-active')

            if (chillBtn.click) {
                _this.nextSong()
            }

            audio.play()
            playBtn.classList.add('none')
            pauseBtn.classList.remove('none')
        }

        // MENU CLICK  RAP-LOFI
        rapLofiBtn.onclick = function() {
            _this.song.splice(0,_this.song.length)
            _this.song.push(
                {
                    name: '1',
                    path: './asscets/data/music/song/rapLofi/1.mp3'
                },
                {
                    name: '2',
                    path: './asscets/data/music/song/rapLofi/2.mp3'
                },
                {
                    name: '3',
                    path: './asscets/data/music/song/rapLofi/3.mp3'
                },
                {
                    name: '4',
                    path: './asscets/data/music/song/rapLofi/4.mp3'
                },
                {
                    name: '5',
                    path: './asscets/data/music/song/rapLofi/5.mp3'
                },
                {
                    name: '6',
                    path: './asscets/data/music/song/rapLofi/6.mp3'
                },
                {
                    name: '7',
                    path: './asscets/data/music/song/rapLofi/7.mp3'
                },
                {
                    name: '8',
                    path: './asscets/data/music/song/rapLofi/8.mp3'
                },
                {
                    name: '9',
                    path: './asscets/data/music/song/rapLofi/9.mp3'
                },
                {
                    name: '10',
                    path: './asscets/data/music/song/rapLofi/10.mp3'
                },
                {
                    name: '11',
                    path: './asscets/data/music/song/rapLofi/11.mp3'
                },
                {
                    name: '12',
                    path: './asscets/data/music/song/rapLofi/12.mp3'
                },
                {
                    name: '13',
                    path: './asscets/data/music/song/rapLofi/13.mp3'
                },
                {
                    name: '14',
                    path: './asscets/data/music/song/rapLofi/14.mp3'
                },
                {
                    name: '15',
                    path: './asscets/data/music/song/rapLofi/15.mp3'
                },
                {
                    name: '16',
                    path: './asscets/data/music/song/rapLofi/16.mp3'
                },
                {
                    name: '17',
                    path: './asscets/data/music/song/rapLofi/17.mp3'
                },
                {
                    name: '18',
                    path: './asscets/data/music/song/rapLofi/18.mp3'
                },
                {
                    name: '19',
                    path: './asscets/data/music/song/rapLofi/19.mp3'
                },
                {
                    name: '20',
                    path: './asscets/data/music/song/rapLofi/20.mp3'
                },
                {
                    name: '21',
                    path: './asscets/data/music/song/rapLofi/21.mp3'
                },
                {
                    name: '22',
                    path: './asscets/data/music/song/rapLofi/22.mp3'
                },
                {
                    name: '23',
                    path: './asscets/data/music/song/rapLofi/23.mp3'
                },
                {
                    name: '24',
                    path: './asscets/data/music/song/rapLofi/24.mp3'
                },
                {
                    name: '25',
                    path: './asscets/data/music/song/rapLofi/25.mp3'
                },
                {
                    name: '26',
                    path: './asscets/data/music/song/rapLofi/26.mp3'
                },
                {
                    name: '27',
                    path: './asscets/data/music/song/rapLofi/27.mp3'
                },
                {
                    name: '28',
                    path: './asscets/data/music/song/rapLofi/28.mp3'
                },
                {
                    name: '29',
                    path: './asscets/data/music/song/rapLofi/29.mp3'
                },
                {
                    name: '30',
                    path: './asscets/data/music/song/rapLofi/30.mp3'
                }
            )
            _this.loadCurrentSong()

            menuCateloryImgs[0].classList.add('mix-category-item--no-active')
            menuCateloryImgs[0].classList.remove('mix-category-item--active')
            menuCateloryTitle[0].classList.remove('mix-category-item--active')
            menuCateloryImgs[1].classList.add('mix-category-item--no-active')
            menuCateloryTitle[1].classList.add('mix-category-item--no-active')
            menuCateloryImgs[1].classList.remove('mix-category-item--active')
            menuCateloryTitle[1].classList.remove('mix-category-item--active')
            menuCateloryImgs[2].classList.remove('mix-category-item--no-active')
            menuCateloryTitle[2].classList.remove('mix-category-item--no-active')
            menuCateloryImgs[2].classList.add('mix-category-item--active')
            menuCateloryTitle[2].classList.add('mix-category-item--active')

            if (chillBtn.click) {
                _this.nextSong()
            }

            audio.play()
            playBtn.classList.add('none')
            pauseBtn.classList.remove('none')
        }

    },
    getMixVolume: function(data) {
        data.forEach(function(mixVolume, i) {       
            mixVolume.oninput = function(e) {
                mixSongs[i].volume = (e.target.value) / 100
                if (mixSongs[i].volume > 0) {
                    mixSongs[i].play()
                } else {
                    mixSongs[i].pause()
                }
            }       
        })
    },
    loadCurrentSong: function() {
        audio.src = this.currentSong.path
    },
    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.song.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.song.length-1
        }
        this.loadCurrentSong()
    },
    start: function() {
        // Handle Events
        this.handleEvents()

        //  ObjectProerty
        this.defineProperties()

        //Load Current Song
        this.loadCurrentSong()

        //Get Background Noises Song
        this.getMixVolume(mixVolumes)

        //Load Song Button Active
        this.loadBtnSong(this.songBtnImg)
    }
}

// Start
app.start()

// FullScreen
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {  
            document.documentElement.requestFullScreen();  
        } else if (document.documentElement.mozRequestFullScreen) {  
            document.documentElement.mozRequestFullScreen();  
        } else if (document.documentElement.webkitRequestFullScreen) {  
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        }  
    } else {  
        if (document.cancelFullScreen) {  
            document.cancelFullScreen();  
        } else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        } else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
        }  
    }  
}

// RAIN SWITCH
function weatherSwitch() {

    
    // day / no rain
    if (inputEvent.checked == true && btnRain.checked == false) {
        brDay.classList.remove('none')
        brDayRain.classList.add('none')
        brNight.classList.add('none')
        brNIghtRain.classList.add('none')
        rainSong.pause()

        //day / rain
    } else if (inputEvent.checked == true && btnRain.checked == true) {
        brDay.classList.add('none')
        brDayRain.classList.remove('none')
        brNight.classList.add('none')
        brNIghtRain.classList.add('none')
        rainSong.play()
        
        //night / rain
    } else if (inputEvent.checked == false && btnRain.checked == true) {
        brDay.classList.add('none')
        brDayRain.classList.add('none')
        brNight.classList.add('none')
        brNIghtRain.classList.remove('none')
        rainSong.play()

        // night / no rain
    } else if (inputEvent.checked == false && btnRain.checked == false) {
        brDay.classList.add('none')
        brDayRain.classList.add('none')
        brNight.classList.remove('none')
        brNIghtRain.classList.add('none')
        rainSong.pause()
    }
}

// TRAFFIC SWITCH
function trafficSwitch() {
    
    btnTraffic.oninput = function() {
        if (btnTraffic.checked) {
            trafficSong.play()
        } else {
            trafficSong.pause()
        }
    }
}

    // Handel Traffic Volume
function trafficVolumeHandle(data) {
    const trafficMainVolume = $('.traffic-box-volume')
    const mixTrafficVolume = $('.mix-noise:first-child')
    data.forEach(function(trafficVolume, Index) {
        trafficVolume.oninput = function(e) {
            trafficSong.volume = (e.target.value) / 100
            if (Index == 1) {
                trafficMainVolume.classList.add('disabled')
                mixTrafficVolume.classList.remove('disabled')
                trafficSong.play()
                btnRain.checked = true
            } else {
                mixTrafficVolume.classList.add('disabled')
                trafficMainVolume.classList.remove('disabled')
                trafficSong.play()
                btnRain.checked = true
            }
        }
    })
}

trafficVolumeHandle(trafficVolume)


// Handle Rain Volume      
function rainVolumeHandle(data) {
    data.forEach(function(rainVolume, Index) {
        rainVolume.oninput = function(e) {
            rainSong.volume = (e.target.value) / 100

                // day / no rain
            if (inputEvent.checked == true && rainSong.volume == 0 && e.target.value == 0) {
                brDay.classList.remove('none')
                brDayRain.classList.add('none')
                brNight.classList.add('none')
                brNIghtRain.classList.add('none')
                rainSong.pause()
                btnRain.checked = false

                //day / rain
            } else if (inputEvent.checked == true && rainSong.volume > 0 && e.target.value > 0) {
                brDay.classList.add('none')
                brDayRain.classList.remove('none')
                brNight.classList.add('none')
                brNIghtRain.classList.add('none')
                rainSong.play()
                btnRain.checked = true

                //night / rain
            } else if (inputEvent.checked == false && rainSong.volume > 0 && e.target.value > 0) {
                brDay.classList.add('none')
                brDayRain.classList.add('none')
                brNight.classList.add('none')
                brNIghtRain.classList.remove('none')
                rainSong.play()
                btnRain.checked = true

                // night / no rain
            } else if (inputEvent.checked == false && rainSong.volume == 0 && e.target.value == 0) {
                brDay.classList.add('none')
                brDayRain.classList.add('none')
                brNight.classList.remove('none')
                brNIghtRain.classList.add('none')
                rainSong.pause()
                btnRain.checked = true
            }
        }
    })
}
rainVolumeHandle(rainVolume)

    // Handle Rain Volume

// Handle Song Volume
function songVolumeHandle(data) {
    const mainVolume = $('.volume-mix')
    const mixVolume = $('.mix-volume')
    data.forEach(function(songVolume, Index) {
        songVolume.oninput = function(e) {
            audio.volume = (e.target.value) / 100
            if (Index == 0) {
                mainVolume.classList.add('disabled')
                mixVolume.classList.remove('disabled')
            } else {
                mixVolume.classList.add('disabled')
                mainVolume.classList.remove('disabled')
            }
        }
    })
}
songVolumeHandle(songVolume)

//Load Menu
const menuItemsOnclick = $$('.menu-item--onclick')
const menuIcons = $$('.menu-icon')
function loadMenuItem(data) {
    data.forEach(function(menuItem, i) {
        const menuIcon = menuIcons[i]
        const menu = menus[i]
        menuItem.onclick = function() {    
            menu.classList.toggle('none')
            menuIcon.classList.toggle('menu-active')
        }
    })
}
loadMenuItem(menuItemsOnclick)


//Preloader
// const preloader = $('.preloader')

// var promise = Promise.resolve()

// promise 
//     .then(function() {
//         return new Promise((resolve) => {
//             setTimeout(function() {
//                 preloader.classList.add('preloader-animation')
//                 resolve(1)
//             }, 2000)
//         })
//     })
//     .then(function(data) {
//         if(data == 1) {
//             setTimeout(function() {
//                 preloader.classList.add('none')
//             }, 2000)
//         }
//     })