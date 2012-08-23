Ext.define("BabyStyle.view.Main",{
	extend: 'Ext.Panel',
	launch:function(){
		var cameraPanel = Ext.create("Ext.Panel",{
			docked:"top",
			style:"background-color:#a2b113",
			html:"camera"
		});

		var contestPanel = Ext.create("Ext.Panel",{
			docked:"top",
			style:"background-color:#4c4c4c",
			html:"contest"
		});
		
		var shopPanel = Ext.create("Ext.Panel",{
			docked:"top",
			style:"background-color:#b1b1b1",
			html:"shop"
		});
		
		var rootPanel = Ext.create("Ext.Panel",{
			items : [cameraPanel, contestPanel, shopPanel]
		});
		Ext.Viewport.add(rootPanel);
	}
//,
//	config : {
//		title:"Main",
//		style:"background-color: blue;",
//		html:"mainView"
//			       
//	}
	
});