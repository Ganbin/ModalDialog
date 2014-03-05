WAF.define('ModalDialog', ['waf-core/widget'], function(widget) {
	
    var ModalDialog = widget.create('ModalDialog', {
        init: function() {
			this._initCloseButton();
			this._initFadeDiv();
//            /* Define a custom event */
//            this.fire('myEvent', {
//                message: 'Hello'
//            });
        },
        
        _initFadeDiv: function(){
        	var fadeDiv = $("<div>"); //HTML tag
			fadeDiv.attr('id','fadeForModalDialog'); // ID that links to the widget constructor ID
			$('body').append(fadeDiv);
        },
        
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
        
        displayDialog:function(){
        	this.show();
			$('#'+this.id).addClass('centerModal');
			$('#fadeForModalDialog').addClass('fadeModal');
        },
        
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