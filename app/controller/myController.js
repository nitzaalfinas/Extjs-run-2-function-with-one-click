Ext.define('MyApp.controller.myController', {
    extend: 'Ext.app.Controller',
    
    
    firstFunction: function(button, e, options) {
	console.log('first function is running');
    },
    
    secondFunction: function(button, e, options) {
	console.log('second function is running');
    },

    init: function(application) {
        this.control({
            "#myButton": {	
		//click: this.firstFunction             //this is working...
		
		//Code above is working, but I want to run firstFirst Function and secondFunction with button click. Would you please help me?
	    } 
        });
    }
});
