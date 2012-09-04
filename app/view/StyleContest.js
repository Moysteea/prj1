Ext.define('BABYSTYLE.view.StyleContest', {
    extend: 'Ext.Panel',
    xtype: 'stylecontest',
    
    requires: [
    'Ext.tab.Panel',
    'Ext.DataView',
    'Ext.dataview.List',
    'Ext.data.proxy.JsonP',
    'Ext.data.Store',
    'Ext.TitleBar'
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
	                height:'400px',
	                items: [
	                    {
	                        xtype: 'dataview',
	                        store: 'Contests',
	                        title: '인기',
	                      //  html: 'Home Screen',
	                    //    itemTpl:"<div sytle='width:100%;'>test1,{ContentID},{Title},{AddedBy}</div>"
	                        itemTpl:'{Title}'
	                    	    
	                    },
	                    {
	                        xtype: 'container',
	                        title: '최신',
	                        html: 'Contact Screen'
	                    },
	                    {
	                        xtype: 'container',
	                        title: '명예의 전당',
	                        html: ' 명예의 전당'
	                    },
	                    {
	                        xtype: 'container',
	                        title: 'MY',
	                        html: '내사진'
	                    }
	                ]

	            
	            }
	            
	            
	    ]
    }
});