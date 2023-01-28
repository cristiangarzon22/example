import player from "@vimeo/player";
const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new player(iframe);

let time = window.localStorage.getItem('videoplayer-current-time');

if(time > 0){
    player.setCurrentTime(time).then(function (seconds) {

    }).catch(function(Error) {
        switch (Error.name){
            case 'RangeError':
                break;
        default:
            
        break;

        }
    });
}


player.on(
    
    'timeupdate',
    _.throttle(data => {
        window.localStorage.setItem('videoplayer-current-time' , data.seconds);
    }, 1000)
);