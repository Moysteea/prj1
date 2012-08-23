Ext.define('BABYSTYLE.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    
    config: {
        title: 'Home',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,
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
    	    	html:'test',
    	    	style:'background-color:#ff0000',
    	    	flex:2,
            },
            {
            	xtype:'panel',
            	layout:{type:'hbox',pack:"justify"},
    	    	//html:'test1',
    	    	//style:'background-color:#0000ff',
    	    	flex:1,
    	    	items:[
    	    	    {
    	    	    	xtype:'button',
    	    	    	html:"<img src='https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcR43euvI5R5w-r7CDTdlOCUv_okaSf84yQehvNPGUitKybd38H4'>",
    	    	    	flex:1
    	    	    },
    	    	    {
    	    	    	xtype:'button',
    	    	    	html:"<img src='https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcRZ9M8do_ckG3BTsSVPLzH0WLsk46Qw3Nv5q_e-IU-CtDZHr5BfSA'>",
    	    	    	flex:1
    	    	    },
    	    	    {
    	    	    	xtype:'button',
    	    	    	html:"<img src='https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcRccOIkV6aHLzXW8XeJW94rHzy-ah28nLCd4f_RduviSfZ1tOjazg'>",
    	    	    	flex:1
    	    	    }
    	    	]
            },
            {
            	xtype:'panel',
    	    	html:'test2',
    	    	style:'background-color:#ff0000',
    	    	flex:1,
            	
            }
        ],
    }
});