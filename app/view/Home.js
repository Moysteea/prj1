Ext.define('BABYSTYLE.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    id:'homepanel',
    config: {
        title: 'Home',
        iconCls: 'home',
        styleHtmlContent: true,
        scrollable: true,
        layout:{type:'vbox',align:'center',pack:'stretch'},
        defaults:{width:'100%'},
        items: [
                {
                	docked:'top',	
                	xtype:'titlebar',
                	title:'Baby Style'
                },
	            { 
                  xtype:'panel',
                  flex:'8',
                  layout:{type:'hbox',align: 'center'},
                  items:[
	                         {
	                        	 xtype:'spacer'
	                        	 
	                         },
	                         {
	                		//카메라 버튼 부분.
			          			xtype:'button',
			      				width:'30%',
			      				height:'50%',
			      		//		top:'50%',
			      				//right:'50%',
			  	    	    	ui: 'round',
			  	    	    	action:'photoclick',
			  	    	    	html:"photho"
		  	    	         },
		  	    	         {
		                    	 xtype:'spacer'
		                     }
                  ]
                },
	            {   // 하단 버튼 
	            	xtype:'panel',
	    	    	flex:'2',
	    	    	items:[{
	    	    			xtype:'panel',
	    	    			docked:'top',
	    	    			layout:{type:'hbox',pack:"justify"},
			    	    	items:[{
			    	    			xtype:'button',
				   	    	    	//ui: 'round', 
				   	    	    	action:'contestclick',
				   	    	    	html:"<img src='https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcRZ9M8do_ckG3BTsSVPLzH0WLsk46Qw3Nv5q_e-IU-CtDZHr5BfSA' " +
				   	    	    			"style='height:200px;width:150px'>",
				   	    	    	flex:4
				    	    	},
			    	    	    {
			    	    	    	xtype:'button',
			    	    	    //	ui: 'round',
			    	    	    	action:'shopclick',
			    	    	    	html:"<img src='https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcRccOIkV6aHLzXW8XeJW94rHzy-ah28nLCd4f_RduviSfZ1tOjazg'" +
			    	    	    			"style='height:200px;width:150px'>",
			    	    	    	flex:4
			    	    	    }
				    	    	
			    	    	]
	    	    		}/* setting 일단 제거해둠. 추후 기능추가할때 추,
	    	            {
	    	            	xtype:'panel',
	    	    	    	style:'background-color:rgba(0, 0, 0, 0.1);',
	    	    	    	docked:'bottom',
	    	    	    	items:{
	    	    	    		xtype:'button',
	    	    	    		action:'settingsclick',
	    	    	    		iconCls: 'settings',
	    	    	    		iconMask: true,
	    	    	    		width	:'60px',
	    	    	    		height  :'40px',
	    	    	    	    right :'2%',
	    	    	         	docked:'bottom'
	    	    	         	
	    	    	    
	    	    	    	}
	    	            }*/
	                ],
	               
	            }
        ],
    }
});