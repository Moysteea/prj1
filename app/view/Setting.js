Ext.define('BABYSTYLE.view.Setting', {
	extend: 'Ext.navigation.View',
	xtype: 'setting',
	
	requires: [
		'Ext.dataview.List',

	],
	
	config: {
		title: 'Setting',
		iconCls: 'settings',
//	url: '/BABYSTYLE/data/contact.jsp',   //나중에 수정할것 
		
		   
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
	                title: 'Setting',
	                /*
	                onItemDisclosure:function(record, btn, index){
	    				// disclouse 버턴이 눌러졌을 때, 동작 메소드 정의
	    			},*/
	                
	                data: [
	                       { title: '공지사항'},
	                       { title: '도움말' },
	                       { title: '페이스북' },
	                       { title: '트위터' }
	                   ]
	           }
        ]
	}
});