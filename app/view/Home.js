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
        style 	: "background-image:url('./resources/images/main_bg.png');" +
        			'background-repeat:no-repeat;',
        items: [

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
			      				// cls: 'btn',
			      	
			  	    	    	
			  	    	    	action:'photoclick',
			  	    	    	html:"photo"
			  	    	    		
			  	    	    	
			  	    	    		
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
				   	    	    	html:"<img src='./resources/images/main_btn1.png' " +
				   	    	    			"style='height:130px; width:240px;'>",
				   	    	    	style: 'border:0;',
				  	   			 margin : '0 0 0 0',
				   	    	    	flex:4
				    	    	},
			    	    	    {
			    	    	    	xtype:'button',
			    	    	    //	ui: 'round',
			    	    	    	action:'shopclick',
			    	    	    	html:"<img src='./resources/images/main_btn2.png' " + 
			    	    	    			"style='height:130px; width:240px;'>",
			    	    	    			style: 'border:0;',
				  	   			 margin : '0 0 0 0',
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