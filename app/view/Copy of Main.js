Ext.define("BABYSTYLE.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	xtype: 'homepanel'
            },
            {
            	xtype: 'photopanel'
            },
            {
            	xtype: 'stylecontest'
            },
            {
            	xtype: 'styleshop'
            },
            {
            	xtype: 'setting'
            },
            {
            	xtype: 'contactform'
            }
        ]
    }
});
