Ext.define('BABYSTYLE.view.StyleShop', {
    extend: 'Ext.navigation.View',
    xtype: 'styleshop',
    
    requires: [
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.data.Store'
    ],
    
    config: {
        title: 'Shop',
        iconCls: 'action',
        
        items: [
            {
                xtype: 'list',
                itemTpl: '{title}',
                title: 'Style Shop',
                store: 'articles'
            }
        ]
    }
});