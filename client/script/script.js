import intervalToDuration from 'date-fns/intervalToDuration';
import formatDuration from 'date-fns/formatDuration';
import formatISODuration from 'date-fns/formatISODuration';
import { nb } from 'date-fns/locale';

const getTemplateParameters = () => {
    const startTokyoTime = '2021-07-23T20:00:00.000+09:00';
    const startTimeMs = Date.parse(startTokyoTime);
    const todayMs = Date.parse(new Date().toUTCString());

    const duration = intervalToDuration({
        start: todayMs,
        end: startTimeMs,
    });

    const formattedDuration = formatDuration(duration, {
        locale: nb,
        delimiter: ', ',
    });

    const formattedDurationISO = formatISODuration(duration);

    return {
        duration: formattedDuration,
        durationISO: formattedDurationISO,
    };
};

const interval = setInterval(() => {
    const { duration, durationISO } = getTemplateParameters();

    const element = document.getElementById('time-until-opening-seremony');

    element.innerHTML = duration;
    element.setAttribute('datetime', durationISO);
}, 1000);
