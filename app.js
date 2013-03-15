Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    views: [
	'myPanel'
    ],

    autoCreateViewport: true,
    name: 'MyApp',
    
    controllers: [
	'myController'
    ]
});
