Ext.define('BABYSTYLE.view.Blog', {
    extend: 'Ext.navigation.View',
    xtype: 'blog',
    
    requires: [
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.data.Store'
    ],
    
    config: {
        title: 'Blog',
        iconCls: 'star',
        
        items: [
            {
                xtype: 'list',
                itemTpl: '{title}',
                title: 'Sencha Blog',
                
                store: 'articles'
            }
        ]
    }
});

