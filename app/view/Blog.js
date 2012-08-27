Ext.define('BABYSTYLE.view.Blog', {
    extend: 'Ext.navigation.View',
    xtype: 'blog',
    
    requires: [
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.data.Store'
    ],
    
    config: {
        items: [
            {
                xtype: 'list',
                itemTpl: '{title}',
                
                store: 'articles'
            }
        ]
    }
});

