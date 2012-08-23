Ext.define('BABYSTYLE.store.Articles', {
	extend: 'Ext.data.Store',
	
	requires: ['BABYSTYLE.model.Article'],
	
	config: {
        autoLoad: true,
        model: 'BABYSTYLE.model.Article',
        storeId: 'articles',
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
            
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }
});