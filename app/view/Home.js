Ext.define('BABYSTYLE.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    id:'homepanel',
    config: {
        title: 'Home',
        iconCls: 'home',
        styleHtmlContent: true,
        scrollable: true,
        style : '',
        layout:{type:"vbox",align:"middle",pack:"stretch"},
        defaults:{width:'100%'},
        items: [
                {
                	docked:'top',	
                	xtype:'titlebar',
                	title:'Baby Style'
                },
	            {
	            	xtype:'panel',
	    	    	html:'<div style="text-align:center;"><h1>Baby</h1></br><h1>Style</h1></div>',
	    	    	style:'background-color:rgba(0, 0, 0, 0.1);',
	    	    	flex:1,
	            },
	            {
	            	xtype:'panel',
	    	    	flex:1,
	    	    	items:[{
	    	    			xtype:'panel',
	    	    			docked:'top',
	    	    			layout:{type:'hbox',pack:"justify"},
			    	    	items:[
			    	    	    {
			    	    	    	xtype:'button',
			    	    	    	action:'photoclick',
			    	    	    	html:"<img src='https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcR43euvI5R5w-r7CDTdlOCUv_okaSf84yQehvNPGUitKybd38H4'>",
			    	    	    	flex:4
			    	    	    },
			    	    	    {
			    	    	    	xtype:'spacer',
			    	    	    	flex:1
			    	    	    },
			    	    	    {
			    	    	    	xtype:'button',
			    	    	    	action:'contestclick',
			    	    	    	html:"<img src='https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcRZ9M8do_ckG3BTsSVPLzH0WLsk46Qw3Nv5q_e-IU-CtDZHr5BfSA'>",
			    	    	    	flex:4
			    	    	    },
			    	    	    {
			    	    	    	xtype:'spacer',
			    	    	    	flex:1
			    	    	    },
			    	    	    {
			    	    	    	xtype:'button',
			    	    	    	action:'shopclick',
			    	    	    	html:"<img src='https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcRccOIkV6aHLzXW8XeJW94rHzy-ah28nLCd4f_RduviSfZ1tOjazg'>",
			    	    	    	flex:4
			    	    	    }
			    	    	]
	    	    		},
	  	    	  
	                ]
	            }
        ],
    }
});