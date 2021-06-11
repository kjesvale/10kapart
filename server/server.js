const express = require('express');
const mustacheExpress = require('mustache-express');

const intervalToDuration = require('date-fns/intervalToDuration');
const formatDuration = require('date-fns/formatDuration');
const formatISODuration = require('date-fns/formatISODuration');
const { nb } = require('date-fns/locale');

const server = express();
const port = 3000;

server.engine('mustache', mustacheExpress());
server.set('view engine', 'mustache');
server.set('views', __dirname + '/views');

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

server.get('/', (_, res) => {
    res.render('index.mustache', getTemplateParameters());
});

server.use('/public', express.static('./public'));

server.listen(port, () => {
    console.log(`Server kjører på http://localhost:${port}`);
});
