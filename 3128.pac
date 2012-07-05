var GFW = {

urls:{
'http://www.google.cn/glm/mmap':false,
},

hosts:{
'aboluowang.com':true,
'www.bbc.co.uk':true,
'blogspot.com':true,
'bloomberg.com':true,
'chinadigitaltimes.net':true,
'cydia.pwndevteam.com':true,
'cydia.zodttd.com':true,
'dropbox.com':true,
'epochtimes.com':true,
'facebook.com':true,
'fbcdn.net':true,
'feedburner.com':true,
'fmnnow.com':true,
'goo.gl':true,
'google.com':true,
'www.google.cn':true,
'google.com.hk':true,
'googleusercontent.com':true,
'heqinglian.net':true,
'img.ly':true,
'ip6.me':true,
'letscorp.net':true,
'peacehall.com':true,
'posterous.com':true,
'rfi.fr':true,
'rfa.org':true,
't.co':true,
'twitlonger.com':true,
'twimg.com':true,
'twitpic.com':true,
'twitter.com':true,
'voanews.com':true,
'wikipedia.org':true,
'worldjournal.com':true,
'youporn.com':true,
'youtube.com':true,
'ytimg.com':true,
}
};

function FindProxyForURL(url, host) {
	var i = url.indexOf('?');
	if (i != -1) url = url.substring(0, i);
	if (typeof GFW.urls[url] != 'undefined') {
		if (GFW.urls[url]) 'PROXY 127.0.0.1:3128';
		return 'DIRECT';
	}
	if (GFW.hosts[host] || GFW.hosts[(parts = host.split('.')).slice(-2).join('.')] || (parts.length > 3 && GFW.hosts[parts.slice(-3).join('.')])) return 'PROXY 127.0.0.1:3128';
	return 'DIRECT';
}