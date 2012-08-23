Ext.define('BABYSTYLE.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    
    config: {
        title: 'Home',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,
        layout:{type:"vbox",align:"middle",pack:"justify"},
        defaults:{flex:1,width:'100%'},
        items: [
            {
            	xtype:'panel',
    	    	html:'test',
    	    	style:'background-color:#ff0000',
            },
            {
            	xtype:'panel',
            	layout:{type:'hbox'},
    	    	html:'test1',
    	    	style:'background-color:#0000ff',
    	    	items:[
    	    	    {
    	    	    	xtype:'button',
    	    	    	flex:1
    	    	    },
    	    	    {
    	    	    	xtype:'button',
    	    	    	flex:1
    	    	    },
    	    	    {
    	    	    	xtype:'button',
    	    	    	flex:1
    	    	    }
    	    	]
            }
        ],
    }
});