Ext.define('BABYSTYLE.view.StyleContest', {
    extend: 'Ext.Panel',
    xtype: 'stylecontest',
    
    requires: [
    'Ext.tab.Panel'
    ],
    
    config: {
        items: [
                
	            {
	                xtype: 'toolbar',
	                title:'Style Contest',
	                docked: 'top',
	                items:{
                	   xtype: 'button',
	             	   itemId : 'backhomebutton',
	            	   action: 'backhomeclick',
	                   ui: 'back',
	                   text: 'Back'
		            }
           
	            },
	            {
	                xtype: 'tabpanel',	
	                items: [
	                    {
	                        xtype: 'container',
	                        title: '인기'
	                    },
	                    {
	                        xtype: 'container',
	                        title: '최신'
	                    },
	                    {
	                        xtype: 'container',
	                        title: '명예의 전당'
	                    },
	                    {
	                        xtype: 'container',
	                        title: 'MY'
	                    }
	                ]

	            
	            }
	            
	            
	    ]
    }
});