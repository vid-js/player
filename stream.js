/*
	===========================
	Copyright: LidPlay
	E-mail: contact@lidplay.net
	===========================


	ИНСТРУКЦИЯ ПО НАСТРОЙКЕ СКРИПТА

	Чтобы изменять параметры скрипта не скачивая его себе на сайт, просто добавляйте переменные в URI.

	Например:
	если хотите изменить параметр default_resolution, то просто измените ссылку на скрипт таким образом:
	http://lidplay.net/loader.js?default_resolution=480

	А если хотите изменить два параметра и больше:
	http://lidplay.net/loader.js?default_resolution=480&refreshPlayers=false&refreshPlayersTime=3000...

	Скрипт обновлен: April 01 2018 14:21.

*/


/*
	Выбор расширения плеера по умолчанию.
	Допустимые значения: 144,240,360,480,720,1080
*/

var default_resolution = "720";

/*
	Обновлять ли плееры каждую секунду?
	Полезно для сайтов, с динамическим изменением контента (например переключение серий с помощью js).
	Допустимые значения: true, false
*/

var refreshPlayers = true;

/*
	Время, через которое скрипт снова ищет плееры, которые можно заменить.
	Если предыдущее значение (refreshPlayers) false, то это изменять не обязательно.
	Допустимые значения: 0-∞ (милисекунды)
*/

var refreshPlayersTime = 500;

/*
	Позволить скрипту создавать коллекцию видео по вашему сайту ?
	В случае отсутствия  видео Вконтакте скрипт загрузит видео из коллекции вашего сайта.
	Включение данной опции позволяет существенно уменьшить уровень отказов.
	Допустимые значения: true, false
*/

var collection = true;

/*
	Использовать свой домен для плеера ?
	Теперь Вы можете использовать свой домен для плеера.
	Это позволит избежать передачи веса сайта на домены LidPlay.
	Вы должны настроить редирект (301, 302) на наш домен: lidplay.net
	https://site.net/video/* -> https://lidplay.net/video/*
	https://site.net/video_ext.php* -> https://lidplay.net/video_ext.php*
	Допустимые значения: доменное имя (без https:// и "/" в конце)
*/


var domain = "lidplay.net";

/*
	Провайдеры. Ненужные закомментировать.
*/

var providers = [
	'vk.com/video_ext.php', 'vk.me/video_ext.php', 'new.vk.com/video_ext.php', 'vkontakte.ru/video_ext.php',
	'my.mail.ru', 'videoapi.my.mail.ru', 'video.mail.ru',
	'drive.google.com', 'docs.google.com',
	'facebook.com/plugins/video.php',
	'vimeo.com', 'player.vimeo.com',
	'embed.redtube.com',
	'ok.ru/videoembed',
	'www.mp4upload.com',
	'embed.publicvideohost.org',
	'www.dailymotion.com',
	'www.stormo.tv',
	'xhamster.com',
	'flashservice.xvideos.com',
	'www.pornhub.com',
	'www.dropbox.com'
];

!function(){function t(t){var e=[];for(var r in t)e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}function e(t,e){return t.indexOf(e)>-1}function r(t,r){if("[object String]"==Object.prototype.toString.call(r))return e(t,r);for(var l=0;l<r.length;l++)if(e(t,r[l]))return!0;return!1}function l(){for(var l=document.getElementsByTagName("iframe"),i=0;i<l.length;i++)if(!e(l[i].src,domain)&&r(l[i].src,providers)&&(s=l[i],void 0,void 0,void 0,n=s.getBoundingClientRect(),a=n.top,b=n.bottom,a<window.innerHeight&&b>=0)&&(u=l[i],"none"!==window.getComputedStyle(u).display)){var o={url:l[i].src,collection:collection,default_resolution:default_resolution,referrer:window.location.href};l[i].getAttribute("subtitles")?o.subtitles=l[i].getAttribute("subtitles"):delete o.subtitles,l[i].getAttribute("subtitles_src")?o.subtitles_src=l[i].getAttribute("subtitles_src"):delete o.subtitles_src,l[i].getAttribute("subtitles_label")?o.subtitles_label=l[i].getAttribute("subtitles_label"):delete o.subtitles_label,l[i].getAttribute("default_resolution")?o.default_resolution=l[i].getAttribute("default_resolution"):delete o.default_resolution,l[i].getAttribute("start")?o.start=l[i].getAttribute("start"):delete o.start,l[i].getAttribute("autoplay")?o.autoplay=l[i].getAttribute("autoplay"):delete o.autoplay,l[i].src="//"+domain+"/video/?"+t(o),l[i].setAttribute("allowfullscreen",""),l[i].setAttribute("mozallowfullscreen",""),l[i].setAttribute("webkitallowfullscreen",""),l[i].removeAttribute("sandbox")}var u,s,n,a,b}l(),refreshPlayers&&setInterval(l,refreshPlayersTime)}();
