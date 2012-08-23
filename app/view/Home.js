Ext.define('BABYSTYLE.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    
    config: {
        title: 'Home',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Baby Style'
        },

        html: [
               "<h1><center>BABY</center></h1><br/>" +
               "<h1><center>STYLE</center></h1>"
            
        ].join("")
    }
});