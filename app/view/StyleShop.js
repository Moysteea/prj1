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
		                items: [
		                    {
		                        xtype: 'container',
		                        title: '전체'
		                    },
		                    {
		                        xtype: 'container',
		                        title: '의류'
		                    },
		                    {
		                        xtype: 'container',
		                        title: '장난감'
		                    },
		                    {
		                        xtype: 'container',
		                        title: '꾸미기'
		                    }
		                ]

		            
		            }
		    ]
    }
	
   
});