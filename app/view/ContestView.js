Ext.define('BABYSTYLE.view.ContestView', {
    extend: 'Ext.Panel',

    xtype: 'contestView',
	id: 'contestView',
    config: {
    	

        styleHtmlContent: true,
        scrollable: true,
        layout:{type:"vbox",align:"middle",pack:"justify"},
        defaults:{flex:1,width:'100%'},
        items: [
            {
            	xtype:'panel',
    	    	html:'contest1111121212',
    	    	style:'background-color:#ff0000',
    	    	items:[
    	    	       {
    	    	    	   xtype:'button',
    	       	    		text:'camera',
    	       	    	
    	    	       }
    	    	   ]
            },
            {
            	xtype:'panel',
    	    	html:'contest',
    	    	style:'background-color:#6aca89',
    	    	items:[
    	    	       {
    	    	    	   xtype:'button',
    	       	    		text:'contest',
    	       	    		id:'contestButton',
    	       	    		action:'contestAction'
    	       	    			
    	       	    	
    	    	       }
    	    	   ]
            },
            {
            	xtype:'panel',
    	    	html:'shop',
    	    	style:'background-color:#628d9c',
            },
            {
            	xtype:'panel',
            	layout:{type:'hbox'},
    	    	style:'background-color:#0000ff',
    	    	items:[
    	    	    {
    	    	    	xtype:'panel',
    	    	    	style: 'background-color:#ac21b5;',
    	    	    	html:'blink',
    	    	    	flex:5
    	    	    },
    	    	    {
    	    	    	xtype:'panel',
    	    	    	style: 'background-color:#2ac18f;',
    	    	    	html:'settingbutton',
    	    	    	flex:1
    	    	    },
    	    	    {
    	    	    	xtype:'panel',
    	    	    	style: 'background-color:#8989a7;',
    	    	    	html:'login button',
    	    	    	flex:1
    	    	    }
    	    	]
            }
        ],
    }
});