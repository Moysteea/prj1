Ext.define('BABYSTYLE.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            blog: 'blog',
            main: 'main',
            photo:'photo',
     
            photobtn:'homepanel button[action=photoclick]',
            contestbtn:'homepanel button[action=contestclick]',
            shopbtn:'homepanel button[action=shopclick]',
            
            backbtn:'#backhomebutton'
        },
        control: {
            'blog list' : {
            	itemtap: 'showPost'
            },
            'homepanel button[action=photoclick]':{
        		tap: 'Photoclick'
        	},
        	'homepanel button[action=contestclick]':{
        		tap: 'Contestclick'
        	},
        	'homepanel button[action=shopclick]':{
        		tap: 'Shopclick'
        	},
        	'#backhomebutton':{
        		tap: 'Backhomeclick'
        	}
        }
    },
    
    
    showPost: function(list, index, target, record, e, eOpts) {
    	this.getBlog().push({
    		xtype: 'panel',
    		title: record.get('title'),
    		html: record.get('content'),
    		scrollable: true,
    		styleHtmlContent: true
    	});
    },
    
    Photoclick: function(btn,event){
    	this.getMain().setActiveItem(1);
    },
    
    Contestclick: function(btn,event){
    	this.getMain().setActiveItem(2);
    },
    
    Shopclick: function(btn,event){
    	this.getMain().setActiveItem(3);
    },
    Backhomeclick: function(btn,event){
    	this.getMain().setActiveItem(0);
    }
    
});
