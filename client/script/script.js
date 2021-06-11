const start = new Date(2021, 6, 23, 20, 0, 0);

const interval = setInterval(() => {
    const now = new Date();
    const seconds = (start.getTime() - now.getTime()) / 1000;

    const days = Math.floor(seconds / 24 / 60 / 60);
    const hoursLeft = Math.floor(seconds - days * 86400);
    const hours = Math.floor(hoursLeft / 3600);
    const minutesLeft = Math.floor(hoursLeft - hours * 3600);
    const minutes = Math.floor(minutesLeft / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const element = document.getElementById('time-until-opening-seremony');

    element.innerHTML = `${days} dager, ${hours} timer, ${minutes} minutter og ${remainingSeconds} sekunder`;
    element.setAttribute('datetime', `P0Y1M${days}DT${hours}H${minutes}M${reminaingSeconds}S`);
}, 1000);
