jQuery( document ).ready(function(){
	// Add Modal HTML to body
	jQuery('body').append( "<div id=\"myModal\" class=\"modal\"><span class=\"close\">&times;</span><img class=\"modal-content\" id=\"img01\"><div id=\"caption\"></div></div>");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	jQuery(".img-frm img").on("click", function(){
		var image = jQuery(this).attr("src");
		var captext = jQuery(this).attr("alt");
		jQuery(".modal").css("display","block");
		jQuery("#img01").attr("src", image);
		jQuery("#caption").html( captext );
		
		// When the user clicks on <span> (x), close the modal
		jQuery("#myModal .close").on("click", function(){
			jQuery(".modal").css("display","none");
		});
	});
});