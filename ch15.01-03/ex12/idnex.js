// https://qiita.com/shotets/items/817e2c525615334a38fb

// 選択した文字列を日本語に翻訳
javascript:(function(){var%20t=''+(window.getSelection%20?%20window.getSelection():%20document.getSelection%20?%20document.getSelection():%20document.selection.createRange().text);if(!t){L=document.location.href;if(L.match(/(yahoo%5C.).+?.*p=([^&]+)/)||L.match(/(amazon%5C.).+?.*field-keywords=([^&]+)/)||L.match(/(%5C.wikipedia%5C.).+%5C/wiki%5C/([^%5C/]+)/)||L.match(/(youtube%5C.).+search_query=([^&]+)/)||L.match(/(%5C?.*%5Cb)q=([^&]+)/)||L.match(/(%5C#search%5C/)([^%5C/]+)/))t=decodeURIComponent(RegExp.$2);}if(!t)t=prompt("%E6%A4%9C%E7%B4%A2%E3%83%95%E3%83%AC%E3%83%BC%E3%82%BA%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84:","");if(t)open('http://translate.google.com/translate_t?hl=ja&sl=en&tl=ja&q='+encodeURIComponent(t)+'','_blank');})()


// ページを日本語に翻訳
javascript:(function(){open('http://translate.google.com/translate?hl=ja&u='+escape(document.location.href),'_blank')})();

