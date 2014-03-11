(function(ModalDialog) {

//    /* Default width and height of your widget */
    ModalDialog.setWidth('300');
    ModalDialog.setHeight('300');

//    /* Define custom event for your widget */
//    ModalDialog.addEvent('myEvent');

    /* Customize existing properties */
//    ModalDialog.customizeProperty('textInput-data-hideonload', {
//    	display:true
//    });

//    /* Add a Label property */
//    ModalDialog.addLabel({
//        'defaultValue': '',
//        'position': 'top'
//    });

    /* Set the Design and Styles panels */
    ModalDialog.setPanelStyle({
        'fClass': true,
        'text': false,
        'background': true,
        'border': true,
        'sizePosition': true,
        'label': false,
        'textShadow': false,
        'dropShadow': true,
        'innerShadow': true,
    });

    /* Override widget's initialization */
    ModalDialog.prototype.init = function() {
    }

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html