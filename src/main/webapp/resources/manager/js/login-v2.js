/*
Version: 
Author: 
Website: 
 */
var handleLoginPageChangeBackground = function() {
	$('[data-click="change-bg"]').live("click", function() {
		var e = '[data-id="login-cover-image"]';
		var t = $(this).find("img").attr("src");
		var n = '<img src="' + t + '" data-id="login-cover-image" />';
		$(".login-cover-image").prepend(n);
		$(e).not('[src="' + t + '"]').fadeOut("slow", function() {
			$(this).remove()
		});
		$('[data-click="change-bg"]').closest("li").removeClass("active");
		$(this).closest("li").addClass("active")
	})
};
var visibleButtonLogin = function(){
	$('#btn_submit').show();
}
var LoginV2 = function() {
	"use strict";
	return {
		init : function() {
			handleLoginPageChangeBackground();
			visibleButtonLogin();
		}
	}
}()