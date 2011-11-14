(function( $ ) {
	$.fn.staticTabs = function(options) {
		var settings = $.extend( {
			'selectedTab': '__none__'
		}, options);

		this.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
		this.find("ul").addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
		this.find("li").addClass("ui-state-default ui-corner-top ").bind('mouseenter mouseleave', function() {
			$(this).toggleClass('ui-state-hover');
		});
		this.find("#" + settings.selectedTab).addClass("ui-state-active ui-tabs-selected");
	};
})( jQuery );


