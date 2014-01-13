<cfoutput>
<cfset attributes=caller.attributes>
<cfif isDefined('caller.products')>
	<cfset products=caller.products>
</cfif>
<cf_PriceMenuReset linkText="view all">
	
<cf_PriceMenu productType="Wine" priceQuery="0.01,24.99,< $25,Wines/Under25|25,49.99,$25-49,Wines/25-49|50,99.99,$50-99,Wines/50-99|100,149.99,$100-149,Wines/100-149|150,10000,$150 >,Wines/Over150">
</cfoutput>