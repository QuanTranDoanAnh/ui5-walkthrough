sap.ui.define([
    "sap/ui/core/ComponentContainer"

], function(ComponentContainer) {
    "use strict";
    
    new ComponentContainer({
		name: "quantda.fiori.ui5demo.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});