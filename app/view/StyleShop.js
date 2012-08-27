Ext.define('BABYSTYLE.view.StyleShop', {
    extend: 'Ext.tab.Panel',
    xtype: 'styleshop',
    
    requires: [
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.data.Store'
    ],
    
    config: {
        title: 'Shop',
        iconCls: 'action',
        
        
        items:[{
        	  xtype: 'button',
        	  itemId : 'backhomebutton',
        	  action: 'backhomeclick',
              ui: 'back',
              text: 'Back'
       	  },
       	  {
       		  
       		   
       	  }, 
       	  {
              xtype: 'list',
              itemTpl: '{title}',
              title: 'Style Shop',
              store: 'articles'
          }
          ]
        
    }
});