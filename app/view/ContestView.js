Ext.define('BABYSTYLE.view.ContestView', {
    extend: 'Ext.Panel',

    config: {
        items: [
            {
                xtype: 'navigationview',
                docked: 'top',
                height: 44,
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        width: 50,
                        text: 'MyButton'
                    },
                    {
                        xtype: 'button',
                        width: 50,
                        text: 'MyButton1'
                    },
                    {
                        xtype: 'button',
                        width: 50,
                        text: 'MyButton2'
                    },
                    {
                        xtype: 'button',
                        width: 50,
                        text: 'MyButton3'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 200,
                style: 'background-color:#5ac851',
                items: [
                    {
                        xtype: 'panel',
                        contentEl: 'photo',
                        height: 200,
                        padding: 10,
                        style: 'background-color:#aa2ac7;',
                        width: 200
                    },
                    {
                        xtype: 'panel',
                        contentEl: 'name',
                        height: 100,
                        style: 'background-color:#bac321;',
                        width: 100
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 400,
                style: 'background-color:#3ab367;'
            }
        ]
    }

});