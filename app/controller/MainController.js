Ext.define('BABYSTYLE.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            blog: 'blog', 
            contestView: '#contestView'	
        },
        control: {
        	"[action=contestAction]": {
                tap: 'onContestButtonTap'
            },
            'blog list' : {
            	itemtap: 'showPost'
            }
        }
    },
    onContestButtonTap: function() {
    	
    	console.log('dddd');
//    	this.getContestView().animateActiveItem(0, { type: "slide",  direction: "right" });
//
//    	var mainView = this.getContestView();
//    	Ext.Viewport.add(mainView);    	
    	this.getContestView().setActiveItem(1);
    },

    showPost: function(list, index, target, record, e, eOpts) {
    	this.getBlog().push({
    		xtype: 'panel',
    		title: record.get('title'),
    		html: record.get('content'),
    		scrollable: true,
    		styleHtmlContent: true
    	});
    }
    
});
