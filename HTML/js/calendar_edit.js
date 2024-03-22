document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    function mobileCheck() {
        if (window.innerWidth >= 768) {
            return false;
        } else {
            return true;
        }
    };

    var calendar = new FullCalendar.Calendar(calendarEl, {
        //Language:
        locale: 'en',
		
        //Google API key:
        googleCalendarApiKey: 'YourAPIkeyHere',

        // Calendar ID:
        events: 'yourID@group.calendar.google.com',

        displayEventTime: 'true',
		 eventTimeFormat:{			
			  hour: 'numeric',
			  minute: '2-digit',
			  meridiem: 'short'
		},
        views: {
            newView: {
                type: 'listMonth',
            }
        },

        headerToolbar: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
		   contentHeight: "auto",
        /* Choose view when initialize */
        initialView: mobileCheck() ? "newView" : "dayGridMonth",
        /* Check if window resize and add the new view */
        windowResize: function(view) {
            if (window.innerWidth >= 768) {
                calendar.changeView('dayGridMonth');
                /* More code */
            } else {
                calendar.changeView('listMonth');
                /* More code */
            }
        },
        editable: true,

        eventClick: function(arg) {

            // opens events in a popup window
            window.open(arg.event.url, '_blank', 'width=700,height=600');

            // prevents current tab from navigating
            arg.jsEvent.preventDefault();
        }

    });

    calendar.render();
});