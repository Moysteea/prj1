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

	                defaults: {
	                    styleHtmlContent: true
	                },
	                layout:{	
	                	type:'card',
	                	animation:{
	                		type:'fade'
	                	}
	                	
	                },
	                items: [
	                    {
	                        xtype: 'container',
	                        title: '인기',
	                        html: 'Home Screen'
	                    },
	                    {
	                        xtype: 'container',
	                        title: '최신',
	                        html: 'Contact Screen'
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