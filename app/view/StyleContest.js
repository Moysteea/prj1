Ext.define('BABYSTYLE.view.StyleContest', {
    extend: 'Ext.navigation.View',
    xtype: 'stylecontest',
    
    requires: [
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.data.Store'
    ],
    
    config: {
        title: 'Contest',
        iconCls: 'star',
        
        items: [
                {
               	  xtype: 'button',
              	  itemId : 'backhomebutton',
              	  action: 'backhomeclick',
                    ui: 'back',
                    text: 'Back',
                },
	            {
	       
	                    
	                xtype: 'list',
	                itemTpl: '{title}',
	                title: 'Style Contest',
	                
	                store: 'articles'
	           }
        ]
    }
});