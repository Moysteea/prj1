Ext.define('BABYSTYLE.view.StyleShop', {
	  extend: 'Ext.Panel',
	  xtype:'styleshop',
	  requires: [
		'Ext.tab.Panel'
		],

    config: {
        items: [
       
		            {
		                xtype: 'toolbar',
		                title:'Style Shop',
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
		                height:'400px',
		                items: [
		                    {
		                        xtype: 'container',
		                        title: '전체',
		                        html:'전체'
		                    },
		                    {
		                        xtype: 'container',
		                        title: '의류',
		                        html:'의류'
		                    },
		                    {
		                        xtype: 'container',
		                        title: '장난감',
		                        html:'장난감'
		                    },
		                    {
		                        xtype: 'container',
		                        title: '꾸미기',
		                        html:'꾸미기'
		                    }
		                ]

		            
		            }
		    ]
    }
	
   
});