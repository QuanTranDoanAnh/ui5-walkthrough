sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("quantda.fiori.ui5demo.walkthrough.controller.App", {
        onShowHello: function() {
            // show a native JavaScript alert
            alert("Hello World");
        }
    });
    
});