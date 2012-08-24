Ext.define('BABYSTYLE.view.Photo', {
    extend: 'Ext.Panel',
    xtype: 'photopanel',
    
    config: {
        "title": 'Photo',
        "iconCls": 'team',

        items:{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Style Photo',
                items:{
                	  xtype: 'button',
                	  id : 'backhomebutton',
                	  action: 'backhomeclick',
                      ui: 'back',
                      text: 'Back'
                }
            },
        html: [
               "<h1><center>PHOTO</center></h1>"
            
        ].join("")
    }
});