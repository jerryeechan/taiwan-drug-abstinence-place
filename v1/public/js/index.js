$(document).ready(function(){
    
    $('.ui.checkbox').checkbox();
    $('select.dropdown').dropdown();
    console.log('start');

    $("#start-btn").click(function() {
        console.log('btn click');
        $('html,body').animate({
            scrollTop: $("#form").offset().top},
            'slow');
    });
    $("#refill-btn").click(function() {
        console.log('btn click');
        $('html,body').animate({
            scrollTop: $("#form").offset().top},
            'slow');
    });

    $("#agancy-btn").click(function() {
        console.log('btn click');
        $('html,body').animate({
            scrollTop: $("#agency").offset().top},
            'slow');
        
    });

    var agency_template = $('#agency-card-template')[0];
    $('#agency-group-template').children('.column').remove();
    var agancy_group = $('#agency-group-template')[0];
    
    
    var agency_grid = $('#agency')[0];
    
    function createAgencyCard(group)
    {
        var agency_card = $(agency_template).clone();
        $(agency_card).children('#title').text("test")
        return agency_card;
    }
    function createAgencyGroup(type,description)
    {
        var group = $(agancy_group).clone()[0];
        console.log($(group,'#type'));
        $(group).css('display','block');
        $(group).children('#type').children('#title').text(type);
        $(group).children('#type').children('#description').text(description);
        $(agency_grid).append(group);
        var cards = [];
        cards.push(createAgencyCard());

        $(group).append(cards)
    }
    createAgencyGroup("測試","描述");//title,description
    var group_description = {"替代治療":"哈哈哈"}
})
