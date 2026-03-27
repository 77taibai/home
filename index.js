window.onload = function() {
    setInterval(function() {
        document.getElementById('header_home_info_time').innerHTML = new Date().toLocaleTimeString();
    }, 1000);

    const now = new Date();
    document.getElementById('header_home_info_time').innerHTML = now.toLocaleTimeString();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = weekdays[now.getDay()];

    document.getElementById('header_home_info_date').innerHTML = `${year}年${month}月${date}日 ${weekday}`;

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const totalSecondsInDay = 24 * 60 * 60;
    const currentSeconds = hours * 3600 + minutes * 60 + seconds;
    const percentage = (currentSeconds / totalSecondsInDay) * 100;

    const progressBar = document.getElementById('header_today_finish');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }

    const live = new Date('2006-01-01');
    const diff = now - live;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    document.getElementById('main_live_text').innerHTML = `${years}年`;

    fetch('https://v1.hitokoto.cn/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('main_sentence_text').innerHTML = data.hitokoto;
    })
    .catch(error => console.error('Error:', error));
};

