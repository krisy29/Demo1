$(document).ready(function() {
    renderAllElementsInHTML(elts);
});

let airCard = $('<div>');
let fireCard = $('<div>');
let waterCard = $('<div>');
let earthCard = $('<div>');
airCard.attr('id', 'air').addClass('first clickable');
fireCard.attr('id', 'fire').addClass('second clickable');
waterCard.attr('id', 'water').addClass('third clickable');
earthCard.attr('id', 'earth').addClass('fourth clickable');
let img = $('<img>');
let pFragment = document.createDocumentFragment();
let p1 = $('<p>');
let p2 = $('<p>');
let p3 = $('<p>');
let p4 = $('<p>');

let elts = [airCard, fireCard, waterCard, earthCard];

let air = ['Air',
    {
        name: 'Archangel',
        power: '2000',
        ultimate: 'Wind Justice',
        region: 'Heaven’s Kingdom'
    },
    {
        name: 'Elemental',
        power: '3000',
        ultimate: 'Wind Justice',
        region: 'Heaven’s Kingdom'
    }
];

let fire = ['Fire',
    {
        name: 'Fire dragon',
        power: '2500',
        ultimate: 'Fire Justice',
        region: 'Fire Kingdom'
    },
    {
        name: 'Fire guardian',
        power: '3500',
        ultimate: 'Fire Justice',
        region: 'Fire Kingdom'
    },
    {
        name: 'Diablo',
        power: '4500',
        ultimate: 'Fire Justice',
        region: 'Fire Kingdom'
    }
];

let water = ['Water',
    {
        name: 'Mermaid',
        power: '2200',
        ultimate: 'Water Justice',
        region: 'Water Kingdom'
    },
    {
        name: 'Ocean beast',
        power: '3200',
        ultimate: 'Water Justice',
        region: 'Water Kingdom'
    },
    {
        name: 'Leviathan',
        power: '3100',
        ultimate: 'Water Justice',
        region: 'Water Kingdom'
    }
];

let earth = ['Earth',
    {
        name: 'Forest god',
        power: '5000',
        ultimate: 'Earth Justice',
        region: 'Earth Kingdom'
    },
    {
        name: 'Hippogryph',
        power: '3000',
        ultimate: 'Earth Justice',
        region: 'Earth Kingdom'
    },
    {
        name: 'Earth elemental',
        power: '2000',
        ultimate: 'Earth Justice',
        region: 'Earth Kingdom'
    },
    {
        name: 'Werewolf',
        power: '3500',
        ultimate: 'Earth Justice',
        region: 'Earth Kingdom'
    }
];

function renderAllElementsInHTML(elements) {
    let containers1 = $('.containers:first-child');
    let containers2 = $('.containers:nth-child(2)');

    containers1.append(elements[0]);
    containers1.append(elements[1]);
    containers2.append(elements[2]);
    containers2.append(elements[3]);
}

function renderSingleElementInHTML(element) {
    $('#elementInfoTitle').text(element[0]);

    for (let i = 1; i < element.length; i++) {
        let li = $('<li>');
        let input = $('<input>');
        input.addClass('radio-button')
            .attr('name', 'selector')
            .attr('type', 'radio')
            .attr('id', `radio${i}`)
            .val(element[i].name);
        let label = $('<label>');
        label.text(element[i].name)
            .attr('for', `radio${i}`);
        li.append(input);
        li.append(label);
        $('.creatures').append(li);
    }

    $('input#radio1').attr('checked', 'checked');
    $('label').hover(function() {
        $(this).css('cursor', 'pointer');
    });
    renderCreature(element);
}

function renderCreature(element) {
    for (let j = 1; j < element.length; j++) {
        if ($(`input#radio${j}`).is(':checked')) {
            img.attr('id', 'creature-image').attr('src', `images/${element[j].name}.jpg`).attr('alt', `${element[j].name}`);
            img.appendTo($('.center-after-click'));
            p1.attr('id', 'creature-name').text(`${element[j].name}`);
            p2.attr('id', 'creature-power').text(`Power: ${element[j].power}`);
            p3.attr('id', 'creature-ultimate').text(`Ultimate: ${element[j].ultimate}`);
            p4.attr('id', 'creature-region').text(`Region: ${element[j].region}`);
            p1.appendTo(pFragment);
            p2.appendTo(pFragment);
            p3.appendTo(pFragment);
            p4.appendTo(pFragment);
            $('#right-after-click').append(pFragment);
        }
    }
}
// renderCreature(element);