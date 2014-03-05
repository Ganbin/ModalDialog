WAF.define('ModalDialog', ['waf-core/widget'], function(widget) {
	
    var ModalDialog = widget.create('ModalDialog', {
        init: function() {
			this._initCloseButton();
			this._initFadeDiv();
			this.hide(); // Hide widget on load
			
//            /* Define a custom event */
//            this.fire('myEvent', {
//                message: 'Hello'
//            });

        },
        
        
        //Function who create the fade div to have a black window behind the modal dialog widget
        // Initialy this div don't do nothing until we open the modal dialog widget
        _initFadeDiv: function(){
        	var fadeDiv = $("<div>"); //HTML tag
			fadeDiv.attr('id','fadeForModalDialog'); // ID that links to the widget constructor ID
			$('body').append(fadeDiv);
        },
        
        
        //Function who create the close button
        _initCloseButton: function(){
        	var buttonElement = $("<button>"); //HTML tag
			buttonElement.attr('id',this.id+'-closeDialogButton'); // ID that links to the widget constructor ID
			//buttonElement.attr('style','width:24px;height:24px;right:-24px;top:-24px;position:absolute');
			buttonElement.attr('class','waf-widget waf-button default inherited modalDialogButton');
			$('#'+this.id).append(buttonElement);
			
			var closeDialogButton = new WAF.widget.Button({
			    'id': this.id+'-closeDialogButton', // ID        
			    'data-text': 'X' // title for the button                         
			 });
			 
			closeDialogButton.addListener("click", function(event) {
				$$(this.parentElement.attributes.id.value).closeDialog()
			});
        },
        
        
        // openDialog method : Open the modal dialog widget in the front and in the middle of the application
        openDialog:function(){
        	this.show();
			$('#'+this.id).addClass('centerModal');
			$('#fadeForModalDialog').addClass('fadeModal');
        },
        
        // closeDialog : close the modal dialog widget
        closeDialog:function(){
        	this.hide();
			$('#'+this.id).removeClass('centerModal');
			$('#fadeForModalDialog').removeClass('fadeModal');
        },
        
//        /* Create a property */
//        test: widget.property({
//            onChange: function(newValue) {
//                this.node.innerHTML = this.test(); /* this contains the widget and newValue contains its current value */
//            }
//        })
    });

//    /* Map the custom event above to the DOM click event */
//    ModalDialog.mapDomEvents({
//        'click': 'action'
//    });


    return ModalDialog;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */