Ext.define('MyApp.view.myPanel', {
    extend: 'Ext.panel.Panel',
    
    frame: true,
    title: 'My Panel',
    height: 100,
    width: 100,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
		    text: 'My Button',
		    id: 'myButton'
                }
            ]
        });
        me.callParent(arguments);
    }

});