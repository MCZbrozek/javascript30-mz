const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({video:true, audio: false})
        .then(stream => {
            console.log(stream)
            video.srcObject = stream
            video.play()
        })
        .catch(err => {
            console.error(`Oh No!!`, err)
        })
}

function paintToCanvas() {
    const width = video.videoWidth
    const height = video.videoHeight
    canvas.width = width
    canvas.height = height

    setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height)


    let pixels = ctx.getImageData(0,0, width, height)

    pixels = rgbSplit(pixels)

    ctx.putImage.Data(pixels, 0, 0)
    }, 16)
}


getVideo()