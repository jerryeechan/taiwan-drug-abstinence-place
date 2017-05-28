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
        findAgency();
    });

    var agency_template = $('#agency-card-template')[0];
    $('#agency-group-template').children('.column').remove();
    var agancy_group = $('#agency-group-template')[0];
    
    
    var agency_grid = $('#agency')[0];
    
    function createAgencyCard(data)
    {

        var agency_card = $(agency_template).clone();
        
        if(data["網站"]!=""&&data["網站"]!="NULL")
        {
            console.log($(agency_card));
            $(agency_card).find('.card').attr('href',data["網站"]);
            $(agency_card).find('.card').addClass('blue raised link');
        }
        else
        {
            var card = $(agency_card).find('.card');
            $(card).replaceWith('<div class="ui fluid card">' + $(card).html() +'</div>')
        }
        
        $(agency_card).find('.title').text(data["機構名稱"]);
        console.log(data["非鴉片類補助"]);
        if(data["非鴉片類補助"]=="FALSE")
            $(agency_card).find('.allowance').css("display","none");
        
        $(agency_card).find('.area').text(data["分區"]);
        $(agency_card).find('.phone').text(data["聯絡電話"]);
        $(agency_card).find('.service').text("提供服務："+data["處置方式"]);
        $(agency_card).find('.success_rate').text('戒斷成功率：20%');
        
        return agency_card;
    }
    function createAgencyGroup(type,description)
    {
        var group = $(agancy_group).clone()[0];
        $(group).css('display','block');
        $(group).children('#type').children('#title').text(type);
        $(group).children('#type').children('#description').text(description);
        $(agency_grid).find('.group-area').append(group);
        return group;
    }
    //array, fileter attribute, equals to ...
    function filterData(dataList,attr,target)
    {
        var array = dataList.filter(function (value) {
            return (value[attr]==target);
        });
        return array;
    }
    function clear()
    {
        console.log(dataLoader.data)
        dataLoader.data = holdData
        console.log(holdData);
        holdData.forEach(element => {
            element.score = 0;
        });
    }
    function findAgency()
    {
        clear();
        $(agency_grid).find('.group-area').children('.column').remove();
        console.log($(agency_grid).find('.group-area'));
        var isStrictMatch = $('#strict-match').hasClass('checked')
        console.log(isStrictMatch);
        var filterAttr = ['分區','宗教']
        var filteredList;
        for(var i=0;i<1;i++)
        {
            var attr = filterAttr[i];
            var target = $('#form-'+attr).val();
            //console.log(target);
            if(target!='')
            {
                console.log(dataLoader.data);
                var array = filterData(dataLoader.data,attr,target);
                array.forEach(element => {
                    element.score++;
                });
            }
        }

        dataLoader.data.forEach(element => {
            console.log(element.score);
        });

        //sort???

        var groupArray = []
        
        for(var i=0;i<groupFilter.length;i++)
        {
            var g = createAgencyGroup(groupFilter[i],group_description[i]);
            var final:Array<any> = filterData(array,'機構屬性',groupFilter[i]);
            var cards = [];
            final.slice(0,6).forEach(element => {
                cards.push(createAgencyCard(element));
            });
            $(g).append(cards)
        }
    }
    var group_description = ["中...","醫療.."]
    var groupFilter = ['中途之家','醫療']
})
