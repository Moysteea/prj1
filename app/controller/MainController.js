Ext.define('BABYSTYLE.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
<<<<<<< HEAD
            blog: 'blog', 
            contestView: '#contestView'	
=======
            blog: 'blog',
            main: 'main',
            photo:'photo',
     
            photobtn:'homepanel button[action=photoclick]',
            contestbtn:'homepanel button[action=contestclick]',
            shopbtn:'homepanel button[action=shopclick]',
            
            backbtn:'#backhomebutton'
>>>>>>> 메인수정
        },
        control: {
        	"[action=contestAction]": {
                tap: 'onContestButtonTap'
            },
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
<<<<<<< HEAD
    onContestButtonTap: function() {
    	
    	console.log('dddd');
//    	this.getContestView().animateActiveItem(0, { type: "slide",  direction: "right" });
//
//    	var mainView = this.getContestView();
//    	Ext.Viewport.add(mainView);    	
    	this.getContestView().setActiveItem(1);
    },

=======
    
    
>>>>>>> 메인수정
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
