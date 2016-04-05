var calendar = {
	header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>",
	displayCalendar: function() {
		var ele = document.getElementById("calendar");
		var calendarText = "<table class= 'table table-condensed'>";
		calendarText += this.header;
		for (var i = 1; i <= 31; i++) {		
			calendarText+="<td>" + i + "</td>"
			if(i%7==0){
				calendarText+="</tr>";
			}

	}
	calendarText += "</table>"
	ele.innerHTML = calendarText;

	}
}
calendar.displayCalendar();