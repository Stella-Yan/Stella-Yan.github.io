const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
    {
        name: "亲爱的旅人啊",
        artist: '周深',
        url: 'http://music.163.com/song/media/outer/url?id=1371939273.mp3',
        cover: 'http://p1.music.126.net/1YrCPOBV314i-mTtlDg8mQ==/109951164148664637.jpg?param=130y130',
    },
    {
        name: "Monsters (Live)",
        artist: '周深',
        url: 'http://music.163.com/song/media/outer/url?id=1428598981.mp3',
        cover: 'http://p1.music.126.net/8CBeG0BF2C0dPiA1FDflGQ==/109951164773621591.jpg?param=130y130',
    }
    ]
});