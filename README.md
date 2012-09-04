Shiply
====================

"Same as Billing/Shipping Info" jQuery plugin
--------------------

### What is this?

A simple jQuery plugin that allows you to automatically copy the data of repeated form elements at the user's choice. The most frequent use case is on a checkout form, where you need to collect both billing and shipping info. Most of the time your user will probably use the same data for both shipping and billing info, so shiply will automatically copy the form data across both sets. If the user decides they want to enter in different shipping and billing info, they can toggle a checkbox to turn off the functionality.

### How to use:

HTML:
	<input type="text" id="address">
	<input type="checkbox" id="toggleShiply">
	<input type="text" id="billing-address">

JS:
	// On the checkbox $() element, call the shiply function with the namespace prefix you'd like to use:
	$('#toggleShiply').shiply("billing-");

That's it!

### Disclaimer:

This tiny plugin was developed for a specific use case. If you like it, please fork it and add any features that you need, and I'll gladly accept any benefitial pull requests. 

### License:

100% license free. Do with it what you will.