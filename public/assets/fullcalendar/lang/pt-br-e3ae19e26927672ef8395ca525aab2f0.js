!function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):e(jQuery,moment)}(function(e,a){(a.defineLocale||a.lang).call(a,"pt-br",{months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),weekdaysMin:"dom_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_s\xe1b".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] LT",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] LT"},calendar:{sameDay:"[Hoje \xe0s] LT",nextDay:"[Amanh\xe3 \xe0s] LT",nextWeek:"dddd [\xe0s] LT",lastDay:"[Ontem \xe0s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[\xdaltimo] dddd [\xe0s] LT":"[\xdaltima] dddd [\xe0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atr\xe1s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}\xba/,ordinal:"%d\xba"}),e.fullCalendar.datepickerLang("pt-br","pt-BR",{closeText:"Fechar",prevText:"&#x3C;Anterior",nextText:"Pr\xf3ximo&#x3E;",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter\xe7a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S\xe1bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),e.fullCalendar.lang("pt-br",{buttonText:{month:"M\xeas",week:"Semana",day:"Dia",list:"Compromissos"},allDayText:"dia inteiro",eventLimitText:function(e){return"mais +"+e}})});