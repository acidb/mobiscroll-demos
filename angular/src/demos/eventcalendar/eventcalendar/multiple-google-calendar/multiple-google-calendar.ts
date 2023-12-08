import { Component } from '@angular/core';
import { ViewChild, OnInit } from '@angular/core';
import { MbscEventcalendarOptions, setOptions, Notifications/* localeImport */ } from '@mobiscroll/angular';

setOptions({
    // locale,
    // theme
});

let clientId = '<YOUR_CLIENT_ID>';
const eventColors = {},
    calColors = {},in
    calIds = {};

//<hidden>
clientId = '249451342989-4npidi86thdlqv1ecmp4euncemcg3ocf.apps.googleusercontent.com';
//</hidden>

@Component({
    selector: 'multiple-google-calendar',
  templateUrl: './multiple-google-calendar.html',
    providers: [Notifications]
})
export class AppComponent implements OnInit {
    constructor(private notify: Notifications) {}
    
    calApiLoaded: boolean;
    firstDay: Date;
    lastDay: Date;
    cals = [];
    events = [];

    calSettings: MbscEventcalendarOptions = {
        view: {
            calendar: {
                labels: true
            }
        },
        onPageLoading: (event) => {
            const year = event.firstDay.getFullYear(),
                month = event.firstDay.getMonth();

            this.firstDay = new Date(year, month - 1, -7);
            this.lastDay = new Date(year, month + 2, 14);

            if (this.calApiLoaded) {
                const batch = gapi.client.newBatch();
                for (const id of Object.keys(calIds)) {
                    batch.add(gapi.client.calendar.events.list({
                        'calendarId': id,
                        'timeMin': this.firstDay.toISOString(),
                        'timeMax': this.lastDay.toISOString()
                    }), { id: id });
                }
                if (Object.getOwnPropertyNames(calIds).length !== 0) {
                    batch.then((resp) => {
                        const eventList = [],
                            res = resp.result;
                        for (const r of Object.keys(res)) {
                            const events = res[r].result.items;
                            for (let i = 0; i < events.length; ++i) {
                                eventList.push(this.getEventProps(events[i], r));
                            }
                        }
                        this.events = eventList;
                    });
                }
            }
        }
    };

    ngOnInit() {
        this.loadGoogleSDK();
    }

    // Load the SDK asynchronously
    loadGoogleSDK() {
        (function (d, s, id) {
            let js: any;
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//apis.google.com/js/client.js?onload=onGoogleLoad';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }

    onGoogleLoad() {
        gapi.auth.init(function () {});
    }

    getEventProps(event, calId) {
        return {
            start: event.start.date || event.start.dateTime,
            end: ((event.end.date - event.start.date) / 86400000 === 1 ? '' : event.end.date) || event.end.dateTime,
            text: event.summary || 'No Title',
            calendarId: calId,
            color: eventColors[event.colorId] || calColors[calId]
        };
    }

    // Google auth
    auth(ev) {
        if (!this.calApiLoaded) {
            gapi.auth.authorize({
                client_id: clientId,
                scope: 'https://www.googleapis.com/auth/calendar',
                immediate: false
            }).then((authResult) => {
                // Load the calendar API
                if (authResult) {
                    return gapi.client.load('calendar', 'v3');
                }
            }).then(() => {
                this.calApiLoaded = true;
                // Load calendar colors
                return gapi.client.calendar.colors.get({
                    'fields': 'event'
                });
            }).then((resp) => {
                const evt = resp.result.event;
                for (let i = 0; i < evt.length; ++i) {
                    eventColors[i] = evt[i].color.background;
                }

                // Load calendar list
                return gapi.client.calendar.calendarList.list({
                    'fields': 'items(backgroundColor,colorId,description,id,summary)'
                });
            }).then((resp) => {
                // Populate the calendar list
                const cals = resp.result.items;

                for (let i = 0; i < cals.length; ++i) {
                    const cal = cals[i];
                    calColors[cal.id] = cal.backgroundColor;
                    this.cals.push({
                        checked: false,
                        id: cal.id,
                        summary: cal.summary,
                        description: cal.description || 'No description'
                    });
                }

            }).catch((err) => {
                // TODO test for more errors
                this.notify.toast({ //<hidden>
                    // theme,//</hidden>
                    // context,
                    message: err.error
                });
            });
        }
    }

    onChange(ev, calId) {
        if (ev.target.checked) {
            // Add events from this calendar
            calIds[calId] = true;
            gapi.client.calendar.events.list({
                'calendarId': calId,
                'timeMin': this.firstDay.toISOString(),
                'timeMax': this.lastDay.toISOString()
            }).then((resp) => {
                const events = resp.result.items;
                for (let i = 0; i < events.length; ++i) {
                    this.events.push(this.getEventProps(events[i], calId));
                }
            });
        } else {
            // Remove events from this calendar
            let event;
            for (let i = 0; i < this.events.length; i++) {
                event = this.events[i];
                if (event.calendarId === calId) {
                    this.events.splice(i, 1);
                    --i;
                }
            }
            delete calIds[calId];
        }
    }
}