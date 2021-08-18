//import 'babel-polyfill';
import 'core-js/stable';
import uploader from './uploader';
import * as faceapi from 'face-api.js'

const main = async() => {

    uploader('.input-submit', '.images-list');
    const videoContainer = document.querySelector('.js-video');
    const canvas = document.querySelector('.js-canvas');
    const context = canvas.getContext('2d');
    const video = await navigator.mediaDevices.getUserMedia({ video: true });

    videoContainer.srcObject = video;

    const reDraw = async() => {

        context.drawImage(videoContainer, 0, 0, 640, 480);

        requestAnimationFrame(reDraw);

    }

    requestAnimationFrame(reDraw);


}
main();