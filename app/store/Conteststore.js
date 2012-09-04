Ext.define('BABYSTYLE.store.Conteststore', {
	extend: 'Ext.data.Store',
	
	requires: [
	           'BABYSTYLE.model.Contest',
	           'Ext.data.proxy.JsonP'
	           ],
	
	config: {
        autoLoad: true,
        model: 'BABYSTYLE.model.Contest',
        storeId: 'Contests',
        proxy: {
            type: 'jsonp',
            url: 'http://14.63.212.57/ztest/Mobileweb/API_test.aspx',
            
            reader: {
                type: 'json',
                rootProperty:'data'
                //rootProperty: 'responseData.feed.entries'
            }
        }
    }
});

