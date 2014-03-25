(function(ModalDialog) {

    /* Default width and height of your widget */
    ModalDialog.setWidth('400');
    ModalDialog.setHeight('250');

    /* Set the Design and Styles panels 
     * Only drop shadow is activate
     * I wait for the Wakanda V9 where we can have 
	 * more complex structure for our custom widget
    */
    ModalDialog.setPanelStyle({
        'fClass': false,
        'text': false,
        'background': false,
        'border': false,
        'sizePosition': false,
        'label': false,
        'textShadow': false,
        'dropShadow': true,
        'innerShadow': false,
    });
    
    /* Add the title for the 2 property */

	
	ModalDialog.customizeProperty('validButtonText', {
	    title: 'Validation Button Text'
	});
	
	/* Add the onClick event for the validation button in the GUI event panel*/
	ModalDialog.addEvent({
	    'name':'onValidClick',
	    'description':'On Click',
	    'category':'Validation Button'
	});
	
	/* remove the change event added by default when we add a property */
	ModalDialog.removeEvent('change');

    /* Override widget's initialization
     * Create the html tag to have the same look in the GUI Designer.
     *
     */
	ModalDialog.doAfter('init', function() {
		this.show();
    });
    
//    data-hideonload="true"

});
