// JavaScript Document
$(document).ready(function(){
  //redirect if cookie is set
  if($.cookie("redirect") == "yes"){
	//redirect
	window.location = Drupal.settings.geoip_redirect.url;
  }
  //they have the cookie set but don't want redirected
  else if($.cookie("redirect") == 'no') {
  }
//the cookie hasn't been set yet so ask them if they want to set it
  else {
	  $('body').append('<div id="redirect_box"><h1>Welcome to {site name}</h1><p>This is our {Server Origin} site.</p><div><a href="#" id="redirect_no">Stay here.</a></div><div><a href="#" id="redirect_yes">Go to the '+ Drupal.settings.geoip_redirect.country_code +' site.</a></div><div><input type="checkbox" id="redirect_remember" checked="checked" /><label>Remember my selection</label></div></div>');
  }
  $('#redirect_yes').click(function(){
  if ($('#redirect_remember:checked').val() == 'on'){
    $.cookie("redirect","yes");
	alert("To access this site in the future, you must clear your cookies!");
  }
  window.location = Drupal.settings.geoip_redirect.url;
});
$('#redirect_no').click(function(){
	if($('#redirect_remember:checked').val() == 'on'){
      $.cookie("redirect","no");
	}
  $('#redirect_box').css('display','none');
});
});