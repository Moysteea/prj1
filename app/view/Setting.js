Ext.define('BABYSTYLE.view.Setting', {
	extend: 'Ext.Panel',
	xtype: 'setting',
	
	config: {
	//	title: 'Setting',
	//	 iconCls: 'settings',
	//	url: '/BABYSTYLE/data/contact.jsp',   //나중에 수정할것 
		layout: 'card',
		items: [ 
		       
		         {
	                xtype: 'toolbar',
	                title:'Settings',
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
		            xtype: 'list',
		            //fullscreen: true,
		            title: 'Settings',
		            store:{
		            	autoLoad: true,
		            	fields:['title'],
		                data: [
		                      { title: '공지사항'},
		                      { title: '도움말' },
		                      { title: '페이스북' },
		                      { title: '트위터' }
		                  ]
		            },
		            itemTpl: '{title}'
		        }
		         
		    ]
	}
});