function setColor(color){
    var alist = document.querySelectorAll('a')
    var i = 0;
    while (i < alist.length){
        alist[i].style.color = color;
        i += 1;
    }
}

var Design = {
    setColor: function(id_tag,color){
        document.querySelector(id_tag).style.color = color;
    },
    setBackgroundColor: function(id_tag,color){
        document.querySelector(id_tag).style.backgroundColor = color;
    }
}

function design_button(color1,color2){
    Design.setColor('#night_day',color1);
    Design.setBackgroundColor('#night_day',color2);
}

function NightDayHandler(self){                                               //toggle(토글)  &&  if (id='night_day') : [자기자신] === self === this === document.querySelector('#night_day')
    var target = document.querySelector('body');                              // refactoring(리팩토링)  ->  중복되는 코드를 제거(간결하게)
    if (self.value === 'night'){
        self.value = 'day';
        Design.setColor('body','white');
        Design.setBackgroundColor('body','black');
        setColor('lightgray');
        design_button('white','black');
    }
    else {
        self.value = 'night';
        Design.setColor('body','black');
        Design.setBackgroundColor('body','white');
        setColor('dimgray');
        design_button('black','white');
    }
}