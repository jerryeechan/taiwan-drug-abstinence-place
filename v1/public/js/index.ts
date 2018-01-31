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
        $(agency_card).attr('log',data.log);
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
        if(data["非鴉片類補助"]=="FALSE")
            $(agency_card).find('.allowance').css("display","none");
        
        var religion = data["宗教"];
        if(religion!="NULL"&&religion!="")
        {
             $(agency_card).find('.religion').text(religion);
        }

        var teens = data["青少年"];
        if(teens=="TRUE")
        {
             $(agency_card).find('.teens').text("青少年");
        }
        
        $(agency_card).find('.area').text(data["分區"]);
        if(data["地址"]!="NULL")
        $(agency_card).find('.address').text(data["地址"]);
        if(data["聯絡電話"]!="NULL")
        $(agency_card).find('.phone').text(data["聯絡電話"]);
        $(agency_card).find('.service').text(data["處置方式"]);
        
        if(data.score>0)
        {
            $(agency_card).find('.success_rate').text('推薦：');
            for(var i=0;i<data.score;i++)
                $(agency_card).find('.success_rate').append('<i class="icon empty star"></i>');
        }
        
        
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
            if(value[attr]=="NULL"||target=="NULL")
            {
                //value.log+="("+attr+":"+target+")";
                return true;
            }
            else
            {
                return (value[attr]==target);
            }
                
        });
        return array;
    }
    function giveScore(dataList,attr,target)
    {
        dataList.forEach(value => {
            
            if(value[attr]=="NULL"||target=="NULL")
                return            
            else if(value[attr]==target)
            {
                    value.log+="(加分："+attr+":"+target+")";
                    value.score++;
            }
            else if(value[attr]!=target)
            {
                value.log+="(扣分："+attr+":"+target+")";
                value.score--;
            }
        });
    }
    function clear()
    {
        
        dataLoader.data = holdData
        holdData.forEach(element => {
            element.score = 0;
            element.log = 0;
        });
    }
    function findAgency()
    {
        clear();
        $(agency_grid).find('.group-area').children('.column').remove();
        console.log($(agency_grid).find('.group-area'));
        //var isStrictMatch = $('#strict-match').hasClass('checked')
        //console.log(isStrictMatch);
        var filterAttr = ['分區','性別']
        var filteredList = dataLoader.data;
        for(var i=0;i<filterAttr.length;i++)
        {
            var attr = filterAttr[i];
            var target = $('#form-'+attr).val();
            
            if(target!='')
            {
                filteredList = filterData(filteredList,attr,target);
            }
        }

        var age = $('#form-age').val();
        console.log(age);
        console.log(parseInt(age));
        if(parseInt(age)>18)
        {
            filteredList = filterData(filteredList,"青少年","FALSE")
        }
        else
        {
            giveScore(filteredList,"青少年","TRUE")
        }
        
        

        var scoreAttr = ['宗教','性別']
        for(var i=0;i<scoreAttr.length;i++)
        {
            var attr = scoreAttr[i];
            var target = $('#form-'+attr).val();
            if(target!='')
            {
                giveScore(filteredList,attr,target)
            }
        }

        
        
        filteredList.forEach(data => {
            if(data["非鴉片類補助"]!="FALSE")
            {
                console.log("match補助");
                data.score++;
            }
                
        });

        //sort???

        var groupArray = []
        
        for(var i=0;i<groupFilter.length;i++)
        {
            var g = createAgencyGroup(groupFilter[i],group_description[i]);
            var final:Array<any> = filterData(filteredList,'機構屬性',groupFilter[i]);
            final.sort(function(a, b) {
            return b.score-a.score;
            });
            var cards = [];
            final.slice(0,6).forEach(element => {
                cards.push(createAgencyCard(element));
            });
            $(g).append(cards)
        }
    }
    var group_description = ["中途之家透過環境的隔離，接受人道關懷、諮商/治療活動、道德/精神教育、工作/技巧訓練、資訊提供、轉介服務、後續照顧等服務，使成癮者得以遠離原有的環境，重新建立新的生活模式。\n＊中途之家以心理戒癮為主要功能，求助者若為生理成癮者，應先轉介醫療戒癮。＊","停藥後的戒斷症狀是戒毒遇到的第一道難關，在醫療院所中，醫師會根據診斷提供適當的藥物以及配套服務幫助病人控制戒斷症狀，亦可以透過心理治療做妥善處理病人會想要吸毒的危險情境並建立新生活習慣。"]
    var groupFilter = ['中途之家','醫療']
})
