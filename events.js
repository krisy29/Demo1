airCard.click(function() {
    $('#elementsContainer').addClass('no-display');
    $('#elementInfo').removeClass('no-display');
    renderSingleElementInHTML(air);
    $('input').click(function() {
        if ($(this).parent().find('input').is(':checked')) {
            $('input').removeAttr('checked');
        }
        $(this).attr('checked', 'checked');
        renderCreature(air);
    });
});

fireCard.click(function() {
    $('#elementsContainer').addClass('no-display');
    $('#elementInfo').removeClass('no-display');
    renderSingleElementInHTML(fire);
    $('input').click(function() {
        if ($(this).parent().find('input').is(':checked')) {
            $('input').removeAttr('checked');
        }
        $(this).attr('checked', 'checked');
        renderCreature(fire);
    });
});

waterCard.click(function() {
    $('#elementsContainer').addClass('no-display');
    $('#elementInfo').removeClass('no-display');
    renderSingleElementInHTML(water);
    $('input').click(function() {
        if ($(this).parent().find('input').is(':checked')) {
            $('input').removeAttr('checked');
        }
        $(this).attr('checked', 'checked');
        renderCreature(water);
    });
});

earthCard.click(function() {
    $('#elementsContainer').addClass('no-display');
    $('#elementInfo').removeClass('no-display');
    renderSingleElementInHTML(earth);
    $('input').click(function() {
        if ($(this).parent().find('input').is(':checked')) {
            $('input').removeAttr('checked');
        }
        $(this).attr('checked', 'checked');
        renderCreature(earth);
    });
});

$('#backToElements').click(function() {
    // $('#elementsContainer').removeClass('no-display');
    // $('#elementInfo').addClass('no-display');
    window.location.reload();
});