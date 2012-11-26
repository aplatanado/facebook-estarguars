// TODO: Add header an license

// Initialize Facebook SDK to work together to JQuery
// See: http://pivotallabs.com/users/jdean/blog/articles/1400-working-with-asynchronously-loaded-javascript
$(document).ready(function() {
  function facebookReady(){
    FB.init({
      appId  : '387488741326772',
      status : true,
      xfbml  : true
    });
    $(document).trigger("facebook:ready");
  }

  if (window.FB)
    facebookReady();
  else
    window.fbAsyncInit = facebookReady;
});

$(document).bind("facebook:ready", function() {
  $("#content").html("Welcome!")
});

// Load the Facebook SDK's source asynchronously
(function(d, debug){
  var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
  ref.parentNode.insertBefore(js, ref);
}(document, /*debug*/ false));
