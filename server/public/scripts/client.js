console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded')

    $.ajax({ //this contains an object
        type: 'GET',
        //where request is going
        url: '/monsters'
    })
        .then(function (response) {
            $('#monstersList').append(`
            <li>${response[0]}</li>
            <li>${response[1]}</li>
            <li>${response[2]}</li>
            <li>${response[3]}</li>
            `)
        });
    }