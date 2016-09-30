$('li.dropdown').on({
			"shown.bs.dropdown": function() { this.closable = false; $('.container').css('margin-top', '120px'); },
			"click": function() { this.closable = true; $('.container').css('margin-top', '0px');},
			"hide.bs.dropdown": function() { return this.closable; $('.container').css('margin-top', '0px');}
		});