// "Same as Billing/Shipping Info" Plugin

// Pass the ID of the checkbox that toggles the copy
// Use: $('id-of-checkbox').shiply('namespace');

// On elements that are to be replaced when checkbox is checked, use class shiply-(id of input)
// <input id="billing_same">
// <input id="shiply-busname">
// $('id-of-checkbox').shiply('shiply');
(function($) {
    $.fn.extend({
        shiply: function(prepend) {
			return this.each(function() {
				var obj = $(this);
				form = obj.parents('form');
				objs = form.find('[id^="'+prepend+'"]');
				
				// Add listener for checkbox: disable all elements and copy data
				obj.bind('change', function() {
					// if obj is selected, replace element values and disable
					if(obj.attr('checked')=='checked') {
						objs.each(function() {
							$this = $(this);
							$this.attr("disabled", "disabled");
							$this.addClass("disabled");
						});
					}
					// Or if obj is not selected
					else {
						objs.each(function() {
							$this = $(this);
							$this.removeAttr("disabled");
							$this.removeClass("disabled");
						});
					}
				});
				
				// Bind submit action
				form.bind('submit',function() {
					if(obj.attr('checked')=='checked') {
						objs.each(function() {
							$this = $(this);
							id = $this.attr('id').substr(prepend.length);
							form.prepend('<input type="hidden" name="'+$this.attr('id')+'" value="'+form.find("#"+id).val()+'">');
						});
						console.log(form);
					}
				});	
				
				// Trigger change for page load
				obj.trigger('change');
			});
        }
    });
})(jQuery);