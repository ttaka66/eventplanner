!function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):e(jQuery,moment)}(function(e,a){function t(e,a,t){var s=e.split("_");return t?a%10===1&&11!==a?s[2]:s[3]:a%10===1&&11!==a?s[0]:s[1]}function s(e,a,s){return e+" "+t(n[s],e,a)}var n={mm:"min\u016bti_min\u016btes_min\u016bte_min\u016btes",hh:"stundu_stundas_stunda_stundas",dd:"dienu_dienas_diena_dienas",MM:"m\u0113nesi_m\u0113ne\u0161us_m\u0113nesis_m\u0113ne\u0161i",yy:"gadu_gadus_gads_gadi"};(a.defineLocale||a.lang).call(a,"lv",{months:"janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),weekdays:"sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, LT",LLLL:"YYYY. [gada] D. MMMM, dddd, LT"},calendar:{sameDay:"[\u0160odien pulksten] LT",nextDay:"[R\u012bt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"%s v\u0113l\u0101k",past:"%s agr\u0101k",s:"da\u017eas sekundes",m:"min\u016bti",mm:s,h:"stundu",hh:s,d:"dienu",dd:s,M:"m\u0113nesi",MM:s,y:"gadu",yy:s},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.fullCalendar.datepickerLang("lv","lv",{closeText:"Aizv\u0113rt",prevText:"Iepr.",nextText:"N\u0101k.",currentText:"\u0160odien",monthNames:["Janv\u0101ris","Febru\u0101ris","Marts","Apr\u012blis","Maijs","J\u016bnijs","J\u016blijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],monthNamesShort:["Jan","Feb","Mar","Apr","Mai","J\u016bn","J\u016bl","Aug","Sep","Okt","Nov","Dec"],dayNames:["sv\u0113tdiena","pirmdiena","otrdiena","tre\u0161diena","ceturtdiena","piektdiena","sestdiena"],dayNamesShort:["svt","prm","otr","tre","ctr","pkt","sst"],dayNamesMin:["Sv","Pr","Ot","Tr","Ct","Pk","Ss"],weekHeader:"Ned.",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),e.fullCalendar.lang("lv",{buttonText:{month:"M\u0113nesis",week:"Ned\u0113\u013ca",day:"Diena",list:"Dienas k\u0101rt\u012bba"},allDayText:"Visu dienu",eventLimitText:function(e){return"+v\u0113l "+e}})});