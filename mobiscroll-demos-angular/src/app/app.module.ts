/* eslint-disable import/order */
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MbscModule } from '@mobiscroll/angular';
import { HomeComponent } from './components/home/home.component';

import { AppComponent as Demo439 } from '../demos/datepicker/calendar/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as Demo571 } from '../demos/datepicker/calendar/usage-on-input-or-inline/usage-on-input-or-inline';
import { AppComponent as Demo529 } from '../demos/datepicker/calendar/responsive/responsive';
import { AppComponent as Demo530 } from '../demos/datepicker/calendar/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as Demo579 } from '../demos/datepicker/calendar/appointment-booking/appointment-booking';
import { AppComponent as Demo623 } from '../demos/datepicker/calendar/activity-calendar/activity-calendar';
import { AppComponent as Demo531 } from '../demos/datepicker/calendar/date-picker/date-picker';
import { AppComponent as Demo92 } from '../demos/datepicker/calendar/date-time-picker/date-time-picker';
import { AppComponent as Demo312 } from '../demos/datepicker/calendar/week-view/week-view';
import { AppComponent as Demo533 } from '../demos/datepicker/calendar/multiple-months/multiple-months';
import { AppComponent as Demo631 } from '../demos/datepicker/calendar/quarter-year-view/quarter-year-view';
import { AppComponent as Demo431 } from '../demos/datepicker/calendar/week-to-month/week-to-month';
import { AppComponent as Demo326 } from '../demos/datepicker/calendar/dots-colors-labels/dots-colors-labels';
import { AppComponent as Demo534 } from '../demos/datepicker/calendar/month-change-direction-week-numbers-outer-days/month-change-direction-week-numbers-outer-days';
import { AppComponent as Demo538 } from '../demos/datepicker/calendar/single-select/single-select';
import { AppComponent as Demo539 } from '../demos/datepicker/calendar/multiple-select/multiple-select';
import { AppComponent as Demo629 } from '../demos/datepicker/calendar/week-select/week-select';
import { AppComponent as Demo543 } from '../demos/datepicker/calendar/range-select/range-select';
import { AppComponent as Demo363 } from '../demos/datepicker/calendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as Demo332 } from '../demos/datepicker/calendar/formatting-return-values/formatting-return-values';
import { AppComponent as Demo341 } from '../demos/datepicker/calendar/setting-values-defaults/setting-values-defaults';
import { AppComponent as Demo686 } from '../demos/datepicker/calendar/setting-the-picker-timezone/setting-the-picker-timezone';
import { AppComponent as Demo535 } from '../demos/datepicker/calendar/min-max-restrictions/min-max-restrictions';
import { AppComponent as Demo337 } from '../demos/datepicker/calendar/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as Demo541 } from '../demos/datepicker/calendar/recurring-values/recurring-values';
import { AppComponent as Demo376 } from '../demos/datepicker/calendar/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as Demo542 } from '../demos/datepicker/calendar/customizing-header/customizing-header';
import { AppComponent as Demo567 } from '../demos/datepicker/calendar/customize-marked-day-shapes/customize-marked-day-shapes';
import { AppComponent as Demo562 } from '../demos/datepicker/calendar/half-day-styling/half-day-styling';
import { AppComponent as Demo251 } from '../demos/datepicker/calendar/event-hooks/event-hooks';
import { AppComponent as Demo445 } from '../demos/datepicker/calendar/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as Demo438 } from '../demos/datepicker/calendar/localization/localization';
import { AppComponent as Demo577 } from '../demos/datepicker/calendar/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as Demo435 } from '../demos/datepicker/datetime/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as Demo572 } from '../demos/datepicker/datetime/usage-on-input-or-inline/usage-on-input-or-inline';
import { AppComponent as Demo524 } from '../demos/datepicker/datetime/responsive/responsive';
import { AppComponent as Demo528 } from '../demos/datepicker/datetime/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as Demo53 } from '../demos/datepicker/datetime/date-picker/date-picker';
import { AppComponent as Demo55 } from '../demos/datepicker/datetime/time-picker/time-picker';
import { AppComponent as Demo245 } from '../demos/datepicker/datetime/date-time-picker/date-time-picker';
import { AppComponent as Demo315 } from '../demos/datepicker/datetime/time-value-steps/time-value-steps';
import { AppComponent as Demo537 } from '../demos/datepicker/datetime/single-select/single-select';
import { AppComponent as Demo558 } from '../demos/datepicker/datetime/range-select/range-select';
import { AppComponent as Demo362 } from '../demos/datepicker/datetime/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as Demo331 } from '../demos/datepicker/datetime/formatting-return-values/formatting-return-values';
import { AppComponent as Demo56 } from '../demos/datepicker/datetime/month-year-picker/month-year-picker';
import { AppComponent as Demo335 } from '../demos/datepicker/datetime/setting-values-defaults/setting-values-defaults';
import { AppComponent as Demo690 } from '../demos/datepicker/datetime/setting-the-picker-timezone/setting-the-picker-timezone';
import { AppComponent as Demo536 } from '../demos/datepicker/datetime/min-max-restrictions/min-max-restrictions';
import { AppComponent as Demo54 } from '../demos/datepicker/datetime/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as Demo540 } from '../demos/datepicker/datetime/recurring-values/recurring-values';
import { AppComponent as Demo375 } from '../demos/datepicker/datetime/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as Demo248 } from '../demos/datepicker/datetime/event-hooks/event-hooks';
import { AppComponent as Demo446 } from '../demos/datepicker/datetime/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as Demo437 } from '../demos/datepicker/datetime/localization/localization';
import { AppComponent as Demo578 } from '../demos/datepicker/datetime/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as Demo544 } from '../demos/datepicker/range/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as Demo550 } from '../demos/datepicker/range/usage-on-input-or-inline/usage-on-input-or-inline';
import { AppComponent as Demo545 } from '../demos/datepicker/range/responsive/responsive';
import { AppComponent as Demo549 } from '../demos/datepicker/range/calendar-scroller-dropdown/calendar-scroller-dropdown';
import { AppComponent as Demo546 } from '../demos/datepicker/range/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as Demo618 } from '../demos/datepicker/range/date-filtering-with-predefined-ranges/date-filtering-with-predefined-ranges';
import { AppComponent as Demo215 } from '../demos/datepicker/range/flight-booking/flight-booking';
import { AppComponent as Demo632 } from '../demos/datepicker/range/book-rental-months-ahead/book-rental-months-ahead';
import { AppComponent as Demo575 } from '../demos/datepicker/range/adding-event-start-end/adding-event-start-end';
import { AppComponent as Demo551 } from '../demos/datepicker/range/date-range/date-range';
import { AppComponent as Demo552 } from '../demos/datepicker/range/time-range/time-range';
import { AppComponent as Demo553 } from '../demos/datepicker/range/date-time-range/date-time-range';
import { AppComponent as Demo554 } from '../demos/datepicker/range/week-month-view-scrolling-direction/week-month-view-scrolling-direction';
import { AppComponent as Demo556 } from '../demos/datepicker/range/customizing-labels-selection/customizing-labels-selection';
import { AppComponent as Demo327 } from '../demos/datepicker/range/dots-colors-labels/dots-colors-labels';
import { AppComponent as Demo223 } from '../demos/datepicker/range/presets/presets';
import { AppComponent as Demo364 } from '../demos/datepicker/range/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as Demo555 } from '../demos/datepicker/range/formatting-return-values/formatting-return-values';
import { AppComponent as Demo691 } from '../demos/datepicker/range/setting-the-picker-timezone/setting-the-picker-timezone';
import { AppComponent as Demo557 } from '../demos/datepicker/range/min-max-length/min-max-length';
import { AppComponent as Demo548 } from '../demos/datepicker/range/min-max-restrictions/min-max-restrictions';
import { AppComponent as Demo164 } from '../demos/datepicker/range/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as Demo559 } from '../demos/datepicker/range/recurring-values/recurring-values';
import { AppComponent as Demo381 } from '../demos/datepicker/range/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as Demo566 } from '../demos/datepicker/range/customize-marked-day-shapes/customize-marked-day-shapes';
import { AppComponent as Demo563 } from '../demos/datepicker/range/half-day-styling/half-day-styling';
import { AppComponent as Demo291 } from '../demos/datepicker/range/event-hooks/event-hooks';
import { AppComponent as Demo449 } from '../demos/datepicker/range/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as Demo574 } from '../demos/datepicker/range/localization/localization';
import { AppComponent as Demo576 } from '../demos/datepicker/range/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as Demo518 } from '../demos/eventcalendar/agenda/daily-agenda-with-week-calendar/daily-agenda-with-week-calendar';
import { AppComponent as Demo573 } from '../demos/eventcalendar/agenda/basic-usage/basic-usage';
import { AppComponent as Demo501 } from '../demos/eventcalendar/agenda/daily-weekly-monthly-annual-agenda/daily-weekly-monthly-annual-agenda';
import { AppComponent as Demo749 } from '../demos/eventcalendar/agenda/show-empty-days/show-empty-days';
import { AppComponent as Demo662 } from '../demos/eventcalendar/agenda/printing-the-view/printing-the-view';
import { AppComponent as Demo596 } from '../demos/eventcalendar/agenda/custom-event-sort/custom-event-sort';
import { AppComponent as Demo611 } from '../demos/eventcalendar/agenda/setting-the-timezone/setting-the-timezone';
import { AppComponent as Demo711 } from '../demos/eventcalendar/agenda/searching-events-in-popup/searching-events-in-popup';
import { AppComponent as Demo742 } from '../demos/eventcalendar/agenda/navigate-from-external-calendar/navigate-from-external-calendar';
import { AppComponent as Demo506 } from '../demos/eventcalendar/agenda/event-content-customization/event-content-customization';
import { AppComponent as Demo508 } from '../demos/eventcalendar/agenda/full-event-customization/full-event-customization';
import { AppComponent as Demo748 } from '../demos/eventcalendar/agenda/customizing-day-header/customizing-day-header';
import { AppComponent as Demo514 } from '../demos/eventcalendar/agenda/customizing-calendar-header/customizing-calendar-header';
import { AppComponent as Demo657 } from '../demos/eventcalendar/agenda/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as Demo730 } from '../demos/eventcalendar/agenda/empty-state/empty-state';
import { AppComponent as Demo512 } from '../demos/eventcalendar/agenda/resource-filtering-in-header/resource-filtering-in-header';
import { AppComponent as Demo496 } from '../demos/eventcalendar/agenda/event-data-structure/event-data-structure';
import { AppComponent as Demo498 } from '../demos/eventcalendar/agenda/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as Demo499 } from '../demos/eventcalendar/agenda/recurring-events/recurring-events';
import { AppComponent as Demo515 } from '../demos/eventcalendar/agenda/load-inline-data/load-inline-data';
import { AppComponent as Demo493 } from '../demos/eventcalendar/agenda/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as Demo494 } from '../demos/eventcalendar/agenda/load-events-on-demand/load-events-on-demand';
import { AppComponent as Demo685 } from '../demos/eventcalendar/agenda/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as Demo689 } from '../demos/eventcalendar/agenda/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as Demo495 } from '../demos/eventcalendar/agenda/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as Demo703 } from '../demos/eventcalendar/agenda/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as Demo521 } from '../demos/eventcalendar/agenda/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as Demo497 } from '../demos/eventcalendar/agenda/event-hooks/event-hooks';
import { AppComponent as Demo522 } from '../demos/eventcalendar/agenda/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as Demo602 } from '../demos/eventcalendar/agenda/localization/localization';
import { AppComponent as Demo349 } from '../demos/eventcalendar/calendar-view/mobile-month-view/mobile-month-view';
import { AppComponent as Demo346 } from '../demos/eventcalendar/calendar-view/desktop-month-view/desktop-month-view';
import { AppComponent as Demo442 } from '../demos/eventcalendar/calendar-view/responsive-month-view/responsive-month-view';
import { AppComponent as Demo661 } from '../demos/eventcalendar/calendar-view/printing-the-view/printing-the-view';
import { AppComponent as Demo447 } from '../demos/eventcalendar/calendar-view/event-labels/event-labels';
import { AppComponent as Demo443 } from '../demos/eventcalendar/calendar-view/event-popover/event-popover';
import { AppComponent as Demo595 } from '../demos/eventcalendar/calendar-view/custom-event-sort/custom-event-sort';
import { AppComponent as Demo612 } from '../demos/eventcalendar/calendar-view/setting-the-timezone/setting-the-timezone';
import { AppComponent as Demo614 } from '../demos/eventcalendar/calendar-view/multiple-timezone-support/multiple-timezone-support';
import { AppComponent as Demo707 } from '../demos/eventcalendar/calendar-view/searching-events-in-popup/searching-events-in-popup';
import { AppComponent as Demo708 } from '../demos/eventcalendar/calendar-view/searching-events-in-sidebar/searching-events-in-sidebar';
import { AppComponent as Demo352 } from '../demos/eventcalendar/calendar-view/month-week-view/month-week-view';
import { AppComponent as Demo630 } from '../demos/eventcalendar/calendar-view/quarter-year-view/quarter-year-view';
import { AppComponent as Demo679 } from '../demos/eventcalendar/calendar-view/show-more-all-labels/show-more-all-labels';
import { AppComponent as Demo588 } from '../demos/eventcalendar/calendar-view/colored-cell-background/colored-cell-background';
import { AppComponent as Demo432 } from '../demos/eventcalendar/calendar-view/switching-day-week-month-view/switching-day-week-month-view';
import { AppComponent as Demo740 } from '../demos/eventcalendar/calendar-view/navigate-from-external-date-picker/navigate-from-external-date-picker';
import { AppComponent as Demo505 } from '../demos/eventcalendar/calendar-view/customize-label-look-and-feel/customize-label-look-and-feel';
import { AppComponent as Demo504 } from '../demos/eventcalendar/calendar-view/customize-event-popover/customize-event-popover';
import { AppComponent as Demo509 } from '../demos/eventcalendar/calendar-view/customizing-header/customizing-header';
import { AppComponent as Demo658 } from '../demos/eventcalendar/calendar-view/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as Demo561 } from '../demos/eventcalendar/calendar-view/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import { AppComponent as Demo724 } from '../demos/eventcalendar/calendar-view/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import { AppComponent as Demo727 } from '../demos/eventcalendar/calendar-view/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import { AppComponent as Demo729 } from '../demos/eventcalendar/calendar-view/prevent-double-booking-events/prevent-double-booking-events';
import { AppComponent as Demo569 } from '../demos/eventcalendar/calendar-view/blocked-days-ranges/blocked-days-ranges';
import { AppComponent as Demo586 } from '../demos/eventcalendar/calendar-view/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import { AppComponent as Demo587 } from '../demos/eventcalendar/calendar-view/external-event-presets/external-event-presets';
import { AppComponent as Demo510 } from '../demos/eventcalendar/calendar-view/resource-filtering-in-header/resource-filtering-in-header';
import { AppComponent as Demo450 } from '../demos/eventcalendar/calendar-view/event-data-structure/event-data-structure';
import { AppComponent as Demo373 } from '../demos/eventcalendar/calendar-view/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as Demo491 } from '../demos/eventcalendar/calendar-view/recurring-events/recurring-events';
import { AppComponent as Demo516 } from '../demos/eventcalendar/calendar-view/load-inline-data/load-inline-data';
import { AppComponent as Demo345 } from '../demos/eventcalendar/calendar-view/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as Demo347 } from '../demos/eventcalendar/calendar-view/load-events-on-demand/load-events-on-demand';
import { AppComponent as Demo681 } from '../demos/eventcalendar/calendar-view/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as Demo683 } from '../demos/eventcalendar/calendar-view/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as Demo492 } from '../demos/eventcalendar/calendar-view/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as Demo565 } from '../demos/eventcalendar/calendar-view/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import { AppComponent as Demo615 } from '../demos/eventcalendar/calendar-view/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import { AppComponent as Demo692 } from '../demos/eventcalendar/calendar-view/disallow-past-event-creation/disallow-past-event-creation';
import { AppComponent as Demo700 } from '../demos/eventcalendar/calendar-view/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as Demo705 } from '../demos/eventcalendar/calendar-view/cut-copy-paste-events-between-calendars/cut-copy-paste-events-between-calendars';
import { AppComponent as Demo455 } from '../demos/eventcalendar/calendar-view/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as Demo444 } from '../demos/eventcalendar/calendar-view/localization/localization';
import { AppComponent as Demo448 } from '../demos/eventcalendar/calendar-view/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as Demo283 } from '../demos/eventcalendar/calendar-view/event-hooks/event-hooks';
import { AppComponent as Demo475 } from '../demos/eventcalendar/scheduler/mobile-day-view/mobile-day-view';
import { AppComponent as Demo476 } from '../demos/eventcalendar/scheduler/desktop-day-view/desktop-day-view';
import { AppComponent as Demo478 } from '../demos/eventcalendar/scheduler/mobile-week-view/mobile-week-view';
import { AppComponent as Demo477 } from '../demos/eventcalendar/scheduler/desktop-week-view/desktop-week-view';
import { AppComponent as Demo479 } from '../demos/eventcalendar/scheduler/responsive-day-week-schedule/responsive-day-week-schedule';
import { AppComponent as Demo659 } from '../demos/eventcalendar/scheduler/printing-the-view/printing-the-view';
import { AppComponent as Demo581 } from '../demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import { AppComponent as Demo721 } from '../demos/eventcalendar/scheduler/doctors-appointment/doctors-appointment';
import { AppComponent as Demo696 } from '../demos/eventcalendar/scheduler/custom-range-view/custom-range-view';
import { AppComponent as Demo733 } from '../demos/eventcalendar/scheduler/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import { AppComponent as Demo664 } from '../demos/eventcalendar/scheduler/display-multiple-days-weeks/display-multiple-days-weeks';
import { AppComponent as Demo583 } from '../demos/eventcalendar/scheduler/disable-all-day-events/disable-all-day-events';
import { AppComponent as Demo589 } from '../demos/eventcalendar/scheduler/colored-cell-background/colored-cell-background';
import { AppComponent as Demo480 } from '../demos/eventcalendar/scheduler/switching-calendar-scheduler-agenda/switching-calendar-scheduler-agenda';
import { AppComponent as Demo582 } from '../demos/eventcalendar/scheduler/show-hide-hours-days/show-hide-hours-days';
import { AppComponent as Demo610 } from '../demos/eventcalendar/scheduler/setting-the-timezone/setting-the-timezone';
import { AppComponent as Demo738 } from '../demos/eventcalendar/scheduler/event-buffer/event-buffer';
import { AppComponent as Demo748 } from '../demos/eventcalendar/scheduler/custom-event-sort/custom-event-sort';
import { AppComponent as Demo613 } from '../demos/eventcalendar/scheduler/multiple-timezone-support/multiple-timezone-support';
import { AppComponent as Demo699 } from '../demos/eventcalendar/scheduler/show-multiple-timezones/show-multiple-timezones';
import { AppComponent as Demo709 } from '../demos/eventcalendar/scheduler/searching-events-in-sidebar/searching-events-in-sidebar';
import { AppComponent as Demo741 } from '../demos/eventcalendar/scheduler/navigate-view-from-external-calendar/navigate-view-from-external-calendar';
import { AppComponent as Demo655 } from '../demos/eventcalendar/scheduler/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as Demo507 } from '../demos/eventcalendar/scheduler/customizing-events/customizing-events';
import { AppComponent as Demo619 } from '../demos/eventcalendar/scheduler/date-header-template/date-header-template';
import { AppComponent as Demo600 } from '../demos/eventcalendar/scheduler/custom-resource-header-template/custom-resource-header-template';
import { AppComponent as Demo513 } from '../demos/eventcalendar/scheduler/customizing-header/customizing-header';
import { AppComponent as Demo560 } from '../demos/eventcalendar/scheduler/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import { AppComponent as Demo722 } from '../demos/eventcalendar/scheduler/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import { AppComponent as Demo725 } from '../demos/eventcalendar/scheduler/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import { AppComponent as Demo570 } from '../demos/eventcalendar/scheduler/time-off-blocked-ranges/time-off-blocked-ranges';
import { AppComponent as Demo568 } from '../demos/eventcalendar/scheduler/prevent-double-booking-events/prevent-double-booking-events';
import { AppComponent as Demo584 } from '../demos/eventcalendar/scheduler/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import { AppComponent as Demo585 } from '../demos/eventcalendar/scheduler/external-event-presets/external-event-presets';
import { AppComponent as Demo591 } from '../demos/eventcalendar/scheduler/resource-view/resource-view';
import { AppComponent as Demo592 } from '../demos/eventcalendar/scheduler/group-by-resource-by-day/group-by-resource-by-day';
import { AppComponent as Demo593 } from '../demos/eventcalendar/scheduler/shared-events-across-resources/shared-events-across-resources';
import { AppComponent as Demo594 } from '../demos/eventcalendar/scheduler/dynamic-add-remove-resources-filter/dynamic-add-remove-resources-filter';
import { AppComponent as Demo719 } from '../demos/eventcalendar/scheduler/resource-data-structure/resource-data-structure';
import { AppComponent as Demo481 } from '../demos/eventcalendar/scheduler/event-data-structure/event-data-structure';
import { AppComponent as Demo503 } from '../demos/eventcalendar/scheduler/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as Demo490 } from '../demos/eventcalendar/scheduler/recurring-events/recurring-events';
import { AppComponent as Demo517 } from '../demos/eventcalendar/scheduler/load-inline-data/load-inline-data';
import { AppComponent as Demo483 } from '../demos/eventcalendar/scheduler/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as Demo482 } from '../demos/eventcalendar/scheduler/load-events-on-demand/load-events-on-demand';
import { AppComponent as Demo682 } from '../demos/eventcalendar/scheduler/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as Demo687 } from '../demos/eventcalendar/scheduler/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as Demo500 } from '../demos/eventcalendar/scheduler/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as Demo564 } from '../demos/eventcalendar/scheduler/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import { AppComponent as Demo701 } from '../demos/eventcalendar/scheduler/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as Demo678 } from '../demos/eventcalendar/scheduler/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import { AppComponent as Demo693 } from '../demos/eventcalendar/scheduler/disallow-past-event-creation/disallow-past-event-creation';
import { AppComponent as Demo712 } from '../demos/eventcalendar/scheduler/colors-invalids-css-class/colors-invalids-css-class';
import { AppComponent as Demo511 } from '../demos/eventcalendar/scheduler/resource-filtering-in-header/resource-filtering-in-header';
import { AppComponent as Demo489 } from '../demos/eventcalendar/scheduler/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as Demo736 } from '../demos/eventcalendar/scheduler/resource-background/resource-background';
import { AppComponent as Demo486 } from '../demos/eventcalendar/scheduler/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as Demo487 } from '../demos/eventcalendar/scheduler/event-hooks/event-hooks';
import { AppComponent as Demo488 } from '../demos/eventcalendar/scheduler/localization/localization';
import { AppComponent as Demo617 } from '../demos/eventcalendar/timeline/month-view/month-view';
import { AppComponent as Demo604 } from '../demos/eventcalendar/timeline/timeline-time-grid/timeline-time-grid';
import { AppComponent as Demo660 } from '../demos/eventcalendar/timeline/printing-the-view/printing-the-view';
import { AppComponent as Demo621 } from '../demos/eventcalendar/timeline/employee-shifts/employee-shifts';
import { AppComponent as Demo626 } from '../demos/eventcalendar/timeline/work-order-scheduling/work-order-scheduling';
import { AppComponent as Demo627 } from '../demos/eventcalendar/timeline/timezone-meeting-planner/timezone-meeting-planner';
import { AppComponent as Demo634 } from '../demos/eventcalendar/timeline/restaurant-shift-management/restaurant-shift-management';
import { AppComponent as Demo628 } from '../demos/eventcalendar/timeline/meal-planner/meal-planner';
import { AppComponent as Demo698 } from '../demos/eventcalendar/timeline/dynamically-color-and-invalidate/dynamically-color-and-invalidate';
import { AppComponent as Demo717 } from '../demos/eventcalendar/timeline/multi-classroom-timetable/multi-classroom-timetable';
import { AppComponent as Demo716 } from '../demos/eventcalendar/timeline/monthly-timetable-vertical-days-horizontal-times/monthly-timetable-vertical-days-horizontal-times';
import { AppComponent as Demo731 } from '../demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top';
import { AppComponent as Demo732 } from '../demos/eventcalendar/timeline/assign-unassign-work-orders-fixed-top-row/assign-unassign-work-orders-fixed-top-row';
import { AppComponent as Demo745 } from '../demos/eventcalendar/timeline/check-list-tasks-within-events/check-list-tasks-within-events';
import { AppComponent as Demo735 } from '../demos/eventcalendar/timeline/flight-scheduling-two-synchronized-timelines/flight-scheduling-two-synchronized-timelines';
import { AppComponent as Demo746 } from '../demos/eventcalendar/timeline/show-task-progress-on-event/show-task-progress-on-event';
import { AppComponent as Demo750 } from '../demos/eventcalendar/timeline/tasks-subtasks-under-shifts/tasks-subtasks-under-shifts';
import { AppComponent as Demo751 } from '../demos/eventcalendar/timeline/resource-filtering-search/resource-filtering-search';
import { AppComponent as Demo605 } from '../demos/eventcalendar/timeline/daily-weekly-monthly-yearly-timeline/daily-weekly-monthly-yearly-timeline';
import { AppComponent as Demo663 } from '../demos/eventcalendar/timeline/multiple-days-weeks-months-quarters-years-variable-resolution/multiple-days-weeks-months-quarters-years-variable-resolution';
import { AppComponent as Demo734 } from '../demos/eventcalendar/timeline/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import { AppComponent as Demo739 } from '../demos/eventcalendar/timeline/event-buffer/event-buffer';
import { AppComponent as Demo697 } from '../demos/eventcalendar/timeline/custom-range-view/custom-range-view';
import { AppComponent as Demo749 } from '../demos/eventcalendar/timeline/custom-event-sort/custom-event-sort';
import { AppComponent as Demo608 } from '../demos/eventcalendar/timeline/timeline-resource-height/timeline-resource-height';
import { AppComponent as Demo744 } from '../demos/eventcalendar/timeline/variable-event-height/variable-event-height';
import { AppComponent as Demo620 } from '../demos/eventcalendar/timeline/event-listing/event-listing';
import { AppComponent as Demo606 } from '../demos/eventcalendar/timeline/switching-day-week-work-week-timeline/switching-day-week-work-week-timeline';
import { AppComponent as Demo653 } from '../demos/eventcalendar/timeline/setting-the-timezone/setting-the-timezone';
import { AppComponent as Demo654 } from '../demos/eventcalendar/timeline/multiple-timezone-support/multiple-timezone-support';
import { AppComponent as Demo710 } from '../demos/eventcalendar/timeline/searching-events-in-sidebar/searching-events-in-sidebar';
import { AppComponent as Demo743 } from '../demos/eventcalendar/timeline/navigate-view-from-external-calendar/navigate-view-from-external-calendar';
import { AppComponent as Demo609 } from '../demos/eventcalendar/timeline/timeline-custom-event-rendering/timeline-custom-event-rendering';
import { AppComponent as Demo714 } from '../demos/eventcalendar/timeline/hour-day-week-month-quarter-year-header-footer-template/hour-day-week-month-quarter-year-header-footer-template';
import { AppComponent as Demo633 } from '../demos/eventcalendar/timeline/shift-template/shift-template';
import { AppComponent as Demo639 } from '../demos/eventcalendar/timeline/resource-header-template/resource-header-template';
import { AppComponent as Demo656 } from '../demos/eventcalendar/timeline/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as Demo715 } from '../demos/eventcalendar/timeline/setting-row-height/setting-row-height';
import { AppComponent as Demo665 } from '../demos/eventcalendar/timeline/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import { AppComponent as Demo723 } from '../demos/eventcalendar/timeline/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import { AppComponent as Demo726 } from '../demos/eventcalendar/timeline/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import { AppComponent as Demo728 } from '../demos/eventcalendar/timeline/prevent-double-booking-events/prevent-double-booking-events';
import { AppComponent as Demo607 } from '../demos/eventcalendar/timeline/timeline-resource-details-side-panel-footer/timeline-resource-details-side-panel-footer';
import { AppComponent as Demo625 } from '../demos/eventcalendar/timeline/resource-grouping-hierarchy/resource-grouping-hierarchy';
import { AppComponent as Demo747 } from '../demos/eventcalendar/timeline/show-summaries-aggregates-for-resource-groups/show-summaries-aggregates-for-resource-groups';
import { AppComponent as Demo720 } from '../demos/eventcalendar/timeline/resource-data-structure/resource-data-structure';
import { AppComponent as Demo666 } from '../demos/eventcalendar/timeline/event-data-structure/event-data-structure';
import { AppComponent as Demo706 } from '../demos/eventcalendar/timeline/connecting-linking-events-arrows/connecting-linking-events-arrows';
import { AppComponent as Demo667 } from '../demos/eventcalendar/timeline/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as Demo668 } from '../demos/eventcalendar/timeline/recurring-events/recurring-events';
import { AppComponent as Demo677 } from '../demos/eventcalendar/timeline/load-inline-data/load-inline-data';
import { AppComponent as Demo669 } from '../demos/eventcalendar/timeline/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as Demo670 } from '../demos/eventcalendar/timeline/load-events-on-demand/load-events-on-demand';
import { AppComponent as Demo718 } from '../demos/eventcalendar/timeline/load-resources-on-demand/load-resources-on-demand';
import { AppComponent as Demo704 } from '../demos/eventcalendar/timeline/loading-big-data-sets/loading-big-data-sets';
import { AppComponent as Demo684 } from '../demos/eventcalendar/timeline/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as Demo688 } from '../demos/eventcalendar/timeline/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as Demo695 } from '../demos/eventcalendar/timeline/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as Demo671 } from '../demos/eventcalendar/timeline/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import { AppComponent as Demo694 } from '../demos/eventcalendar/timeline/disallow-past-event-creation/disallow-past-event-creation';
import { AppComponent as Demo702 } from '../demos/eventcalendar/timeline/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as Demo713 } from '../demos/eventcalendar/timeline/colors-invalids-css-class/colors-invalids-css-class';
import { AppComponent as Demo672 } from '../demos/eventcalendar/timeline/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as Demo737 } from '../demos/eventcalendar/timeline/resource-background/resource-background';
import { AppComponent as Demo673 } from '../demos/eventcalendar/timeline/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as Demo674 } from '../demos/eventcalendar/timeline/event-hooks/event-hooks';
import { AppComponent as Demo675 } from '../demos/eventcalendar/timeline/localization/localization';
import { AppComponent as Demo676 } from '../demos/eventcalendar/timeline/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as Demo459 } from '../demos/form-components/forms/mobile/mobile';
import { AppComponent as Demo640 } from '../demos/form-components/forms/desktop/desktop';
import { AppComponent as Demo461 } from '../demos/form-components/forms/responsive/responsive';
import { AppComponent as Demo641 } from '../demos/form-components/forms/popup/popup';
import { AppComponent as Demo642 } from '../demos/form-components/forms/alert-confirm-prompt/alert-confirm-prompt';
import { AppComponent as Demo643 } from '../demos/form-components/forms/notifications/notifications';
import { AppComponent as Demo644 } from '../demos/form-components/forms/buttons/buttons';
import { AppComponent as Demo645 } from '../demos/form-components/forms/segmented/segmented';
import { AppComponent as Demo646 } from '../demos/form-components/forms/stepper/stepper';
import { AppComponent as Demo647 } from '../demos/form-components/forms/button-segmented-stepper-colors/button-segmented-stepper-colors';
import { AppComponent as Demo648 } from '../demos/form-components/forms/inputs-text-areas-date-fields/inputs-text-areas-date-fields';
import { AppComponent as Demo649 } from '../demos/form-components/forms/input-label-types/input-label-types';
import { AppComponent as Demo650 } from '../demos/form-components/forms/checkbox/checkbox';
import { AppComponent as Demo651 } from '../demos/form-components/forms/switch/switch';
import { AppComponent as Demo652 } from '../demos/form-components/forms/radio-button/radio-button';
import { AppComponent as Demo466 } from '../demos/form-components/forms/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as Demo468 } from '../demos/pickers/select/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as Demo599 } from '../demos/pickers/select/responsive/responsive';
import { AppComponent as Demo597 } from '../demos/pickers/select/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as Demo635 } from '../demos/pickers/select/data-sources/data-sources';
import { AppComponent as Demo637 } from '../demos/pickers/select/item-templating/item-templating';
import { AppComponent as Demo155 } from '../demos/pickers/select/country-picker/country-picker';
import { AppComponent as Demo638 } from '../demos/pickers/select/image-text/image-text';
import { AppComponent as Demo132 } from '../demos/pickers/select/multiple-lines/multiple-lines';
import { AppComponent as Demo598 } from '../demos/pickers/select/single-select/single-select';
import { AppComponent as Demo103 } from '../demos/pickers/select/multiple-select/multiple-select';
import { AppComponent as Demo469 } from '../demos/pickers/select/group-options/group-options';
import { AppComponent as Demo622 } from '../demos/pickers/select/filtering-values/filtering-values';
import { AppComponent as Demo636 } from '../demos/pickers/select/linked-hierarchical-pickers/linked-hierarchical-pickers';
import { AppComponent as Demo389 } from '../demos/pickers/select/setting-values-defaults/setting-values-defaults';
import { AppComponent as Demo603 } from '../demos/pickers/select/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as Demo387 } from '../demos/pickers/select/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as Demo276 } from '../demos/pickers/select/event-hooks/event-hooks';
import { AppComponent as Demo471 } from '../demos/pickers/select/localization/localization';
import { AppComponent as Demo601 } from '../demos/pickers/select/rtl-right-to-left/rtl-right-to-left';
//id has to be reassigned (prod database)
import { AppComponent as Demo777 } from '../demos/eventcalendar/calendar-view/property-booking-calendar/property-booking-calendar';

export const demos: any[] = [
  {
    name: 'Date & time pickers',
    unique: 'datepicker',
    items: [
      {
        name: 'Calendar',
        unique: 'calendar',
        items: [
          {
            name: 'Using the picker',
            unique: 7,
            items: [
              { name: 'Mobile & Desktop usage', unique: 'mobile-desktop-usage', component: Demo439 },
              { name: 'Initializing the picker', unique: 'usage-on-input-or-inline', component: Demo571 },
              { name: 'Responsive behavior', unique: 'responsive', component: Demo529 },
              { name: 'Understanding display modes', unique: 'mobile-desktop-display', component: Demo530 },
            ],
          },
          {
            name: 'Common use cases',
            unique: 20,
            items: [
              { name: 'Appointment booking', unique: 'appointment-booking', component: Demo579 },
              { name: 'Activity calendar', unique: 'activity-calendar', component: Demo623 },
            ],
          },
          {
            name: 'Configuring the calendar',
            unique: 9,
            items: [
              { name: 'Date selection', unique: 'date-picker', component: Demo531 },
              { name: 'Date & Time picker', unique: 'date-time-picker', component: Demo92 },
              { name: 'Variable week view', unique: 'week-view', component: Demo312 },
              { name: 'Multi month view', unique: 'multiple-months', component: Demo533 },
              { name: 'Quarter or year view', unique: 'quarter-year-view', component: Demo631 },
              { name: 'Switching views', unique: 'week-to-month', component: Demo431 },
              { name: 'Marked, colored & labels', unique: 'dots-colors-labels', component: Demo326 },
              { name: 'Customizing the view', unique: 'month-change-direction-week-numbers-outer-days', component: Demo534 },
            ],
          },
          {
            name: 'Configuring value selection',
            unique: 10,
            items: [
              { name: 'Single value selection', unique: 'single-select', component: Demo538 },
              { name: 'Multiple date selection', unique: 'multiple-select', component: Demo539 },
              { name: 'Week selection', unique: 'week-select', component: Demo629 },
              { name: 'Start-end selection', unique: 'range-select', component: Demo543 },
              { name: 'Date types', unique: 'date-object-ISO-8601-moment', component: Demo363 },
              { name: 'Formatting values', unique: 'formatting-return-values', component: Demo332 },
              { name: 'Setting values', unique: 'setting-values-defaults', component: Demo341 },
              { name: 'Timezones', unique: 'setting-the-picker-timezone', component: Demo686 },
            ],
          },
          {
            name: 'Validation & restricting selection',
            unique: 11,
            items: [
              { name: 'Min & max values', unique: 'min-max-restrictions', component: Demo535 },
              { name: 'Disabled values', unique: 'disabled-invalid-values', component: Demo337 },
              { name: 'Recurring values', unique: 'recurring-values', component: Demo541 },
            ],
          },
          {
            name: 'Customizing the look & feel',
            unique: 5,
            items: [
              { name: 'Theming capabilities', unique: 'themes-ios-material-windows', component: Demo376 },
              { name: 'Customizing the header', unique: 'customizing-header', component: Demo542 },
              { name: 'Marked day classes', unique: 'customize-marked-day-shapes', component: Demo567 },
              { name: 'Half days', unique: 'half-day-styling', component: Demo562 },
            ],
          },
          {
            name: 'Localization & tapping into the lifecycle',
            unique: 6,
            items: [
              { name: 'Lifecycle events', unique: 'event-hooks', component: Demo251 },
              { name: 'Calendar systems ', unique: 'gregorian-jalali-hijri', component: Demo445 },
              { name: 'Localization', unique: 'localization', component: Demo438 },
              { name: 'RTL mode', unique: 'rtl-right-to-left', component: Demo577 },
            ],
          },
        ],
      },
      {
        name: 'Date & Time',
        unique: 'datetime',
        items: [
          {
            name: 'Using the picker',
            unique: 7,
            items: [
              { name: 'Mobile & Desktop usage', unique: 'mobile-desktop-usage', component: Demo435 },
              { name: 'Initializing the picker', unique: 'usage-on-input-or-inline', component: Demo572 },
              { name: 'Responsive behavior', unique: 'responsive', component: Demo524 },
              { name: 'Understanding display modes', unique: 'mobile-desktop-display', component: Demo528 },
            ],
          },
          {
            name: 'Configuring the wheels',
            unique: 8,
            items: [
              { name: 'Date selection', unique: 'date-picker', component: Demo53 },
              { name: 'Time selection', unique: 'time-picker', component: Demo55 },
              { name: 'Date & time selection', unique: 'date-time-picker', component: Demo245 },
              { name: 'Setting time select steps', unique: 'time-value-steps', component: Demo315 },
            ],
          },
          {
            name: 'Configuring value selection',
            unique: 10,
            items: [
              { name: 'Single value selection', unique: 'single-select', component: Demo537 },
              { name: 'Start-end selection', unique: 'range-select', component: Demo558 },
              { name: 'Date types', unique: 'date-object-ISO-8601-moment', component: Demo362 },
              { name: 'Formatting values', unique: 'formatting-return-values', component: Demo331 },
              { name: 'Credit card expiration', unique: 'month-year-picker', component: Demo56 },
              { name: 'Setting values', unique: 'setting-values-defaults', component: Demo335 },
              { name: 'Timezones', unique: 'setting-the-picker-timezone', component: Demo690 },
            ],
          },
          {
            name: 'Validation & restricting selection',
            unique: 11,
            items: [
              { name: 'Min & max values', unique: 'min-max-restrictions', component: Demo536 },
              { name: 'Disabled values', unique: 'disabled-invalid-values', component: Demo54 },
              { name: 'Recurring values', unique: 'recurring-values', component: Demo540 },
            ],
          },
          {
            name: 'Customizing the look & feel',
            unique: 5,
            items: [{ name: 'Theming capabilities', unique: 'themes-ios-material-windows', component: Demo375 }],
          },
          {
            name: 'Localization & tapping into the lifecycle',
            unique: 6,
            items: [
              { name: 'Lifecycle events', unique: 'event-hooks', component: Demo248 },
              { name: 'Calendar systems ', unique: 'gregorian-jalali-hijri', component: Demo446 },
              { name: 'Localization', unique: 'localization', component: Demo437 },
              { name: 'RTL mode', unique: 'rtl-right-to-left', component: Demo578 },
            ],
          },
        ],
      },
      {
        name: 'Range',
        unique: 'range',
        items: [
          {
            name: 'Using the picker',
            unique: 7,
            items: [
              { name: 'Mobile & Desktop usage', unique: 'mobile-desktop-usage', component: Demo544 },
              { name: 'Initializing the picker', unique: 'usage-on-input-or-inline', component: Demo550 },
              { name: 'Responsive behavior', unique: 'responsive', component: Demo545 },
              { name: 'Understanding the controls', unique: 'calendar-scroller-dropdown', component: Demo549 },
              { name: 'Understanding display modes', unique: 'mobile-desktop-display', component: Demo546 },
            ],
          },
          {
            name: 'Common use cases',
            unique: 20,
            items: [
              { name: 'Date filtering with presets', unique: 'date-filtering-with-predefined-ranges', component: Demo618 },
              { name: 'Flight booking', unique: 'flight-booking', component: Demo215 },
              { name: 'Vacation property availability', unique: 'book-rental-months-ahead', component: Demo632 },
              { name: 'New event creation', unique: 'adding-event-start-end', component: Demo575 },
            ],
          },
          {
            name: 'Configuring the view',
            unique: 13,
            items: [
              { name: 'Date range', unique: 'date-range', component: Demo551 },
              { name: 'Time range', unique: 'time-range', component: Demo552 },
              { name: 'Date & time range', unique: 'date-time-range', component: Demo553 },
              { name: 'Customizing the calendar', unique: 'week-month-view-scrolling-direction', component: Demo554 },
              { name: 'Customizing the range', unique: 'customizing-labels-selection', component: Demo556 },
              { name: 'Marked, colored & labels', unique: 'dots-colors-labels', component: Demo327 },
            ],
          },
          {
            name: 'Configuring value selection',
            unique: 10,
            items: [
              { name: 'Presets', unique: 'presets', component: Demo223 },
              { name: 'Date types', unique: 'date-object-ISO-8601-moment', component: Demo364 },
              { name: 'Formatting values', unique: 'formatting-return-values', component: Demo555 },
              { name: 'Timezones', unique: 'setting-the-picker-timezone', component: Demo691 },
            ],
          },
          {
            name: 'Validation & restricting selection',
            unique: 11,
            items: [
              { name: 'Setting the allowed range length', unique: 'min-max-length', component: Demo557 },
              { name: 'Min & max values', unique: 'min-max-restrictions', component: Demo548 },
              { name: 'Disabled values', unique: 'disabled-invalid-values', component: Demo164 },
              { name: 'Recurring values', unique: 'recurring-values', component: Demo559 },
            ],
          },
          {
            name: 'Customizing the look & feel',
            unique: 5,
            items: [
              { name: 'Theming capabilities', unique: 'themes-ios-material-windows', component: Demo381 },
              { name: 'Marked day classes', unique: 'customize-marked-day-shapes', component: Demo566 },
              { name: 'Half days', unique: 'half-day-styling', component: Demo563 },
            ],
          },
          {
            name: 'Localization & tapping into the lifecycle',
            unique: 6,
            items: [
              { name: 'Lifecycle events', unique: 'event-hooks', component: Demo291 },
              { name: 'Calendar systems ', unique: 'gregorian-jalali-hijri', component: Demo449 },
              { name: 'Localization', unique: 'localization', component: Demo574 },
              { name: 'RTL mode', unique: 'rtl-right-to-left', component: Demo576 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Event calendar',
    unique: 'eventcalendar',
    items: [
      {
        name: 'Agenda',
        unique: 'agenda',
        items: [
          {
            name: 'Setting up the agenda',
            unique: 15,
            items: [
              { name: 'Compact daily schedule', unique: 'daily-agenda-with-week-calendar', component: Demo518 },
              { name: 'How to initialize', unique: 'basic-usage', component: Demo573 },
              { name: 'Customize the range', unique: 'daily-weekly-monthly-annual-agenda', component: Demo501 },
              { name: 'Show empty days', unique: 'show-empty-days', component: Demo749 },
              { name: 'Print mode', unique: 'printing-the-view', component: Demo662 },
            ],
          },
          {
            name: 'Displaying events',
            unique: 1,
            items: [
              { name: 'Custom event order', unique: 'custom-event-sort', component: Demo596 },
              { name: 'Timezones', unique: 'setting-the-timezone', component: Demo611 },
              { name: 'Event search with popup', unique: 'searching-events-in-popup', component: Demo711 },
              { name: 'External navigation', unique: 'navigate-from-external-calendar', component: Demo742 },
            ],
          },
          {
            name: 'Templating',
            unique: 19,
            items: [
              { name: 'Content customization', unique: 'event-content-customization', component: Demo506 },
              { name: 'Full event customization', unique: 'full-event-customization', component: Demo508 },
              { name: 'Customizing the day header', unique: 'customizing-day-header', component: Demo748 },
              { name: 'Customizing the calendar header', unique: 'customizing-calendar-header', component: Demo514 },
              { name: 'Custom event tooltip', unique: 'custom-event-tooltip', component: Demo657 },
              { name: 'Empty state', unique: 'empty-state', component: Demo730 },
            ],
          },
          {
            name: 'Resources',
            unique: 17,
            items: [{ name: 'In-header filtering', unique: 'resource-filtering-in-header', component: Demo512 }],
          },
          {
            name: 'Event data structure',
            unique: 2,
            items: [
              { name: 'Event properties', unique: 'event-data-structure', component: Demo496 },
              { name: 'Supported date formats', unique: 'date-object-ISO-8601-moment', component: Demo498 },
              { name: 'Recurrence rules', unique: 'recurring-events', component: Demo499 },
            ],
          },
          {
            name: 'Loading events & data sources',
            unique: 3,
            items: [
              { name: 'Loading inline data', unique: 'load-inline-data', component: Demo515 },
              { name: 'Events from a remote API', unique: 'load-events-from-remote-api', component: Demo493 },
              { name: 'Loading events on demand', unique: 'load-events-on-demand', component: Demo494 },
            ],
          },
          {
            name: 'Third party calendar integrations',
            unique: 27,
            items: [
              { name: 'Sync events to google calendar', unique: 'sync-events-google-calendar', component: Demo685 },
              { name: 'Sync events to outlook calendar', unique: 'sync-events-outlook-calendar', component: Demo689 },
              { name: 'Load events from public google calendar', unique: 'load-events-from-google-calendar', component: Demo495 },
            ],
          },
          {
            name: 'CRUD operations',
            unique: 4,
            items: [{ name: 'Multiple select & bulk operations', unique: 'event-bulk-actions-edit-delete-update', component: Demo703 }],
          },
          {
            name: 'Customizing the look & feel',
            unique: 5,
            items: [{ name: 'Theming capabilities', unique: 'themes-ios-material-windows', component: Demo521 }],
          },
          {
            name: 'Localization & tapping into the lifecycle',
            unique: 6,
            items: [
              { name: 'Lifecycle events', unique: 'event-hooks', component: Demo497 },
              { name: 'Calendar systems ', unique: 'gregorian-jalali-hijri', component: Demo522 },
              { name: 'Localization', unique: 'localization', component: Demo602 },
            ],
          },
        ],
      },
      {
        name: 'Calendar',
        unique: 'calendar-view',
        items: [
          {
            name: 'Setting up the calendar',
            unique: 14,
            items: [
              { name: 'Mobile month view', unique: 'mobile-month-view', component: Demo349 },
              { name: 'Desktop month view', unique: 'desktop-month-view', component: Demo346 },
              { name: 'Responsive', unique: 'responsive-month-view', component: Demo442 },
              { name: 'Print mode', unique: 'printing-the-view', component: Demo661 },
            ],
          },
          {
            name: 'Common use cases',
            unique: 20,
            items: [{ name: 'Reservation calendar', unique: 'property-booking-calendar', component: Demo777 }],
          },
          {
            name: 'Displaying events',
            unique: 1,
            items: [
              { name: 'Events as labels', unique: 'event-labels', component: Demo447 },
              { name: 'Events in popover', unique: 'event-popover', component: Demo443 },
              { name: 'Custom event order', unique: 'custom-event-sort', component: Demo595 },
              { name: 'Timezones', unique: 'setting-the-timezone', component: Demo612 },
              { name: 'Switching timezones', unique: 'multiple-timezone-support', component: Demo614 },
              { name: 'Event search with popup', unique: 'searching-events-in-popup', component: Demo707 },
              { name: 'Event search with sidebar', unique: 'searching-events-in-sidebar', component: Demo708 },
            ],
          },
          {
            name: 'Configuring the view',
            unique: 13,
            items: [
              { name: 'Month or week view', unique: 'month-week-view', component: Demo352 },
              { name: 'Multi-month or year view', unique: 'quarter-year-view', component: Demo630 },
              { name: 'Displaying labels', unique: 'show-more-all-labels', component: Demo679 },
              { name: 'Colored backgrounds', unique: 'colored-cell-background', component: Demo588 },
              { name: 'Switching views', unique: 'switching-day-week-month-view', component: Demo432 },
              { name: 'External navigation', unique: 'navigate-from-external-date-picker', component: Demo740 },
            ],
          },
          {
            name: 'Templating',
            unique: 19,
            items: [
              { name: 'Custom event labels', unique: 'customize-label-look-and-feel', component: Demo505 },
              { name: 'Custom events in popover', unique: 'customize-event-popover', component: Demo504 },
              { name: 'Customizing the header', unique: 'customizing-header', component: Demo509 },
              { name: 'Custom event tooltip', unique: 'custom-event-tooltip', component: Demo658 },
            ],
          },
          {
            name: 'Drag & drop',
            unique: 12,
            items: [
              { name: 'Move, resize & create', unique: 'move-resize-drag-drop-to-create-events', component: Demo561 },
              { name: 'Conditional move & resize per event or globally', unique: 'conditional-move-resize', component: Demo724 },
              { name: 'Drag & drop between calendars', unique: 'drag-drop-between-calendar-instances', component: Demo727 },
              { name: 'Prevent event overlap', unique: 'prevent-double-booking-events', component: Demo729 },
              { name: 'Manage blocked out dates', unique: 'blocked-days-ranges', component: Demo569 },
              { name: 'External drag and drop', unique: 'external-drag-drop-schedule-unschedule', component: Demo586 },
              { name: 'External d&d presets', unique: 'external-event-presets', component: Demo587 },
            ],
          },
          {
            name: 'Resources',
            unique: 17,
            items: [{ name: 'In-header filtering', unique: 'resource-filtering-in-header', component: Demo510 }],
          },
          {
            name: 'Event data structure',
            unique: 2,
            items: [
              { name: 'Event properties', unique: 'event-data-structure', component: Demo450 },
              { name: 'Supported date formats', unique: 'date-object-ISO-8601-moment', component: Demo373 },
              { name: 'Recurrence rules', unique: 'recurring-events', component: Demo491 },
            ],
          },
          {
            name: 'Loading events & data sources',
            unique: 3,
            items: [
              { name: 'Loading inline data', unique: 'load-inline-data', component: Demo516 },
              { name: 'Events from remote API ', unique: 'load-events-from-remote-api', component: Demo345 },
              { name: 'Loading events on demand', unique: 'load-events-on-demand', component: Demo347 },
            ],
          },
          {
            name: 'Third party calendar integrations',
            unique: 27,
            items: [
              { name: 'Sync events to google calendar', unique: 'sync-events-google-calendar', component: Demo681 },
              { name: 'Sync events to outlook calendar', unique: 'sync-events-outlook-calendar', component: Demo683 },
              { name: 'Load events from public google calendar', unique: 'load-events-from-google-calendar', component: Demo492 },
            ],
          },
          {
            name: 'CRUD operations',
            unique: 4,
            items: [
              { name: 'Add/edit/delete events', unique: 'create-read-update-delete-CRUD', component: Demo565 },
              { name: 'Recurring event editor', unique: 'recurring-event-add-edit-dialog', component: Demo615 },
              { name: 'Disable past event creation', unique: 'disallow-past-event-creation', component: Demo692 },
              { name: 'Multiple select & bulk operations', unique: 'event-bulk-actions-edit-delete-update', component: Demo700 },
              { name: 'Move events between calendars', unique: 'cut-copy-paste-events-between-calendars', component: Demo705 },
            ],
          },
          {
            name: 'Customizing the look & feel',
            unique: 5,
            items: [{ name: 'Theming capabilities', unique: 'themes-ios-material-windows', component: Demo455 }],
          },
          {
            name: 'Localization & tapping into the lifecycle',
            unique: 6,
            items: [
              { name: 'Localization', unique: 'localization', component: Demo444 },
              { name: 'Calendar systems ', unique: 'gregorian-jalali-hijri', component: Demo448 },
              { name: 'Lifecycle events', unique: 'event-hooks', component: Demo283 },
            ],
          },
        ],
      },
      {
        name: 'Scheduler',
        unique: 'scheduler',
        items: [
          {
            name: 'Setting up the scheduler',
            unique: 16,
            items: [
              { name: 'Mobile daily schedule', unique: 'mobile-day-view', component: Demo475 },
              { name: 'Desktop daily schedule', unique: 'desktop-day-view', component: Demo476 },
              { name: 'Mobile weekly schedule', unique: 'mobile-week-view', component: Demo478 },
              { name: 'Desktop weekly schedule', unique: 'desktop-week-view', component: Demo477 },
              { name: 'Responsive behavior', unique: 'responsive-day-week-schedule', component: Demo479 },
              { name: 'Print mode', unique: 'printing-the-view', component: Demo659 },
            ],
          },
          {
            name: 'Common use cases',
            unique: 20,
            items: [
              { name: 'Work calendar', unique: 'work-week-hours', component: Demo581 },
              { name: 'Doctor’s appointment', unique: 'doctors-appointment', component: Demo721 },
            ],
          },
          {
            name: 'Configuring the view',
            unique: 13,
            items: [
              { name: 'Custom range view', unique: 'custom-range-view', component: Demo696 },
              { name: 'Set event stack size', unique: 'control-number-of-concurrently-shown-events', component: Demo733 },
              { name: 'Customize view range', unique: 'display-multiple-days-weeks', component: Demo664 },
              { name: 'Show/hide all-day events', unique: 'disable-all-day-events', component: Demo583 },
              { name: 'Colored backgrounds', unique: 'colored-cell-background', component: Demo589 },
              { name: 'Switching views', unique: 'switching-calendar-scheduler-agenda', component: Demo480 },
              { name: 'Visible hours and days', unique: 'show-hide-hours-days', component: Demo582 },
              { name: 'Timezones', unique: 'setting-the-timezone', component: Demo610 },
              { name: 'Event buffer', unique: 'event-buffer', component: Demo738 },
              { name: 'Custom event order', unique: 'custom-event-sort', component: Demo748 },
              { name: 'Switching timezones', unique: 'multiple-timezone-support', component: Demo613 },
              { name: 'Display time for multiple timezones', unique: 'show-multiple-timezones', component: Demo699 },
              { name: 'Event search with sidebar', unique: 'searching-events-in-sidebar', component: Demo709 },
              { name: 'External navigation', unique: 'navigate-view-from-external-calendar', component: Demo741 },
            ],
          },
          {
            name: 'Templating',
            unique: 19,
            items: [
              { name: 'Custom event tooltip', unique: 'custom-event-tooltip', component: Demo655 },
              { name: 'Event customization', unique: 'customizing-events', component: Demo507 },
              { name: 'Date header template', unique: 'date-header-template', component: Demo619 },
              { name: 'Resource template', unique: 'custom-resource-header-template', component: Demo600 },
              { name: 'Customizing the header', unique: 'customizing-header', component: Demo513 },
            ],
          },
          {
            name: 'Drag & drop',
            unique: 12,
            items: [
              { name: 'Move, resize & create', unique: 'move-resize-drag-drop-to-create-events', component: Demo560 },
              { name: 'Conditional move & resize per event, resource or globally', unique: 'conditional-move-resize', component: Demo722 },
              { name: 'Drag & drop between schedulers', unique: 'drag-drop-between-calendar-instances', component: Demo725 },
              { name: 'Blocked out times', unique: 'time-off-blocked-ranges', component: Demo570 },
              { name: 'Prevent event overlap', unique: 'prevent-double-booking-events', component: Demo568 },
              { name: 'External drag and drop', unique: 'external-drag-drop-schedule-unschedule', component: Demo584 },
              { name: 'External d&d presets', unique: 'external-event-presets', component: Demo585 },
            ],
          },
          {
            name: 'Resources',
            unique: 17,
            items: [
              { name: 'Multiple resources', unique: 'resource-view', component: Demo591 },
              { name: 'Resource grouping', unique: 'group-by-resource-by-day', component: Demo592 },
              { name: 'Shared events', unique: 'shared-events-across-resources', component: Demo593 },
              { name: 'Show/hide resources', unique: 'dynamic-add-remove-resources-filter', component: Demo594 },
              { name: 'Resource properties', unique: 'resource-data-structure', component: Demo719 },
            ],
          },
          {
            name: 'Event data structure',
            unique: 2,
            items: [
              { name: 'Event properties', unique: 'event-data-structure', component: Demo481 },
              { name: 'Supported date formats', unique: 'date-object-ISO-8601-moment', component: Demo503 },
              { name: 'Recurrence rules', unique: 'recurring-events', component: Demo490 },
            ],
          },
          {
            name: 'Loading events & data sources',
            unique: 3,
            items: [
              { name: 'Loading inline data', unique: 'load-inline-data', component: Demo517 },
              { name: 'Events from remote API ', unique: 'load-events-from-remote-api', component: Demo483 },
              { name: 'Loading events on demand', unique: 'load-events-on-demand', component: Demo482 },
            ],
          },
          {
            name: 'Third party calendar integrations',
            unique: 27,
            items: [
              { name: 'Sync events to google calendar', unique: 'sync-events-google-calendar', component: Demo682 },
              { name: 'Sync events to outlook calendar', unique: 'sync-events-outlook-calendar', component: Demo687 },
              { name: 'Load events from public google calendar', unique: 'load-events-from-google-calendar', component: Demo500 },
            ],
          },
          {
            name: 'CRUD operations',
            unique: 4,
            items: [
              { name: 'Add/edit/delete events', unique: 'create-read-update-delete-CRUD', component: Demo564 },
              { name: 'Multiple select & bulk operations', unique: 'event-bulk-actions-edit-delete-update', component: Demo701 },
              { name: 'Recurring event editor', unique: 'recurring-event-add-edit-dialog', component: Demo678 },
              { name: 'Disable past event creation', unique: 'disallow-past-event-creation', component: Demo693 },
            ],
          },
          {
            name: 'Customizing the look & feel',
            unique: 5,
            items: [
              { name: 'CSS class for colors and invalids', unique: 'colors-invalids-css-class', component: Demo712 },
              { name: 'Custom component in header', unique: 'resource-filtering-in-header', component: Demo511 },
              { name: 'Theming capabilities', unique: 'themes-ios-material-windows', component: Demo489 },
              { name: 'Resource background and styling', unique: 'resource-background', component: Demo736 },
            ],
          },
          {
            name: 'Localization & tapping into the lifecycle',
            unique: 6,
            items: [
              { name: 'Calendar systems ', unique: 'gregorian-jalali-hijri', component: Demo486 },
              { name: 'Lifecycle events', unique: 'event-hooks', component: Demo487 },
              { name: 'Localization', unique: 'localization', component: Demo488 },
            ],
          },
        ],
      },
      {
        name: 'Timeline',
        unique: 'timeline',
        items: [
          {
            name: 'Setting up the timeline',
            unique: 21,
            items: [
              { name: 'Monthly timeline', unique: 'month-view', component: Demo617 },
              { name: 'Timeline vs time grid', unique: 'timeline-time-grid', component: Demo604 },
              { name: 'Print mode', unique: 'printing-the-view', component: Demo660 },
            ],
          },
          {
            name: 'Common use cases',
            unique: 20,
            items: [
              { name: 'Employee shift/rota planning', unique: 'employee-shifts', component: Demo621 },
              { name: 'Work order scheduling', unique: 'work-order-scheduling', component: Demo626 },
              { name: 'Meeting planner across timezones', unique: 'timezone-meeting-planner', component: Demo627 },
              { name: 'Restaurant shift management', unique: 'restaurant-shift-management', component: Demo634 },
              { name: 'Weekly meal planner', unique: 'meal-planner', component: Demo628 },
              { name: 'Dynamically color & invalidate', unique: 'dynamically-color-and-invalidate', component: Demo698 },
              { name: 'Multiple classroom scheduling', unique: 'multi-classroom-timetable', component: Demo717 },
              { name: 'Single resource timetable', unique: 'monthly-timetable-vertical-days-horizontal-times', component: Demo716 },
              { name: 'Compare resources', unique: 'compare-resources-fixed-at-top', component: Demo731 },
              { name: 'Assign/unassign work orders', unique: 'assign-unassign-work-orders-fixed-top-row', component: Demo732 },
              { name: 'Sub-tasks and lists', unique: 'check-list-tasks-within-events', component: Demo745 },
              { name: 'Flight scheduling with two timelines', unique: 'flight-scheduling-two-synchronized-timelines', component: Demo735 },
              { name: 'Display task progress', unique: 'show-task-progress-on-event', component: Demo746 },
              { name: 'Managing tasks within shifts', unique: 'tasks-subtasks-under-shifts', component: Demo750 },
              { name: 'Resource filtering', unique: 'resource-filtering-search', component: Demo751 },
            ],
          },
          {
            name: 'Configuring the view',
            unique: 13,
            items: [
              { name: 'Configure the timeline', unique: 'daily-weekly-monthly-yearly-timeline', component: Demo605 },
              {
                name: 'Configure the page, size, resolution',
                unique: 'multiple-days-weeks-months-quarters-years-variable-resolution',
                component: Demo663,
              },
              { name: 'Set event stack size', unique: 'control-number-of-concurrently-shown-events', component: Demo734 },
              { name: 'Event buffer', unique: 'event-buffer', component: Demo739 },
              { name: 'View with custom range picker', unique: 'custom-range-view', component: Demo697 },
              { name: 'Custom event order', unique: 'custom-event-sort', component: Demo749 },
              { name: 'Equal row height', unique: 'timeline-resource-height', component: Demo608 },
              { name: 'Variable event height', unique: 'variable-event-height', component: Demo744 },
              { name: 'Daily event summary', unique: 'event-listing', component: Demo620 },
              { name: 'Day, week, work week', unique: 'switching-day-week-work-week-timeline', component: Demo606 },
              { name: 'Timezones', unique: 'setting-the-timezone', component: Demo653 },
              { name: 'Switching timezones', unique: 'multiple-timezone-support', component: Demo654 },
              { name: 'Event search with sidebar', unique: 'searching-events-in-sidebar', component: Demo710 },
              { name: 'External navigation', unique: 'navigate-view-from-external-calendar', component: Demo743 },
            ],
          },
          {
            name: 'Templating',
            unique: 19,
            items: [
              { name: 'Timeline event template', unique: 'timeline-custom-event-rendering', component: Demo609 },
              {
                name: 'Hour, day, week, month, year header and footer template',
                unique: 'hour-day-week-month-quarter-year-header-footer-template',
                component: Demo714,
              },
              { name: 'Time slot template', unique: 'shift-template', component: Demo633 },
              { name: 'Resource header template', unique: 'resource-header-template', component: Demo639 },
              { name: 'Custom event tooltip', unique: 'custom-event-tooltip', component: Demo656 },
              { name: 'Controlling the row height', unique: 'setting-row-height', component: Demo715 },
            ],
          },
          {
            name: 'Drag & drop',
            unique: 12,
            items: [
              { name: 'Move, resize & create', unique: 'move-resize-drag-drop-to-create-events', component: Demo665 },
              { name: 'Conditional move & resize per event, resource or globally', unique: 'conditional-move-resize', component: Demo723 },
              { name: 'Drag & drop between timelines', unique: 'drag-drop-between-calendar-instances', component: Demo726 },
              { name: 'Prevent event overlap', unique: 'prevent-double-booking-events', component: Demo728 },
            ],
          },
          {
            name: 'Resources',
            unique: 17,
            items: [
              { name: 'Resource grid', unique: 'timeline-resource-details-side-panel-footer', component: Demo607 },
              { name: 'Resource grouping & hierarchy', unique: 'resource-grouping-hierarchy', component: Demo625 },
              { name: 'Resource group summaries', unique: 'show-summaries-aggregates-for-resource-groups', component: Demo747 },
              { name: 'Resource properties', unique: 'resource-data-structure', component: Demo720 },
            ],
          },
          {
            name: 'Event data structure',
            unique: 2,
            items: [
              { name: 'Event properties', unique: 'event-data-structure', component: Demo666 },
              { name: 'Event connections', unique: 'connecting-linking-events-arrows', component: Demo706 },
              { name: 'Supported date formats', unique: 'date-object-ISO-8601-moment', component: Demo667 },
              { name: 'Recurrence rules', unique: 'recurring-events', component: Demo668 },
            ],
          },
          {
            name: 'Loading events & data sources',
            unique: 3,
            items: [
              { name: 'Loading inline data', unique: 'load-inline-data', component: Demo677 },
              { name: 'Events from remote API ', unique: 'load-events-from-remote-api', component: Demo669 },
              { name: 'Loading events on demand', unique: 'load-events-on-demand', component: Demo670 },
              { name: 'Loading resources on demand', unique: 'load-resources-on-demand', component: Demo718 },
              { name: 'Working with large data sets', unique: 'loading-big-data-sets', component: Demo704 },
            ],
          },
          {
            name: 'Third party calendar integrations',
            unique: 27,
            items: [
              { name: 'Sync events to google calendar', unique: 'sync-events-google-calendar', component: Demo684 },
              { name: 'Sync events to outlook calendar', unique: 'sync-events-outlook-calendar', component: Demo688 },
              { name: 'Load events from public google calendar', unique: 'load-events-from-google-calendar', component: Demo695 },
            ],
          },
          {
            name: 'CRUD operations',
            unique: 4,
            items: [
              { name: 'Add/edit/delete events', unique: 'create-read-update-delete-CRUD', component: Demo671 },
              { name: 'Disable past event creation', unique: 'disallow-past-event-creation', component: Demo694 },
              { name: 'Multiple select & bulk operations', unique: 'event-bulk-actions-edit-delete-update', component: Demo702 },
            ],
          },
          {
            name: 'Customizing the look & feel',
            unique: 5,
            items: [
              { name: 'CSS class for colors and invalids', unique: 'colors-invalids-css-class', component: Demo713 },
              { name: 'Theming capabilities', unique: 'themes-ios-material-windows', component: Demo672 },
              { name: 'Resource background and styling', unique: 'resource-background', component: Demo737 },
            ],
          },
          {
            name: 'Localization & tapping into the lifecycle',
            unique: 6,
            items: [
              { name: 'Calendar systems ', unique: 'gregorian-jalali-hijri', component: Demo673 },
              { name: 'Lifecycle events', unique: 'event-hooks', component: Demo674 },
              { name: 'Localization', unique: 'localization', component: Demo675 },
              { name: 'RTL mode', unique: 'rtl-right-to-left', component: Demo676 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Form components',
    unique: 'form-components',
    items: [
      {
        name: 'Forms',
        unique: 'forms',
        items: [
          {
            name: 'Building forms',
            unique: 26,
            items: [
              { name: 'Mobile form', unique: 'mobile', component: Demo459 },
              { name: 'Inline desktop form', unique: 'desktop', component: Demo640 },
              { name: 'Responsive form', unique: 'responsive', component: Demo461 },
              { name: 'Inside a modal', unique: 'popup', component: Demo641 },
            ],
          },
          {
            name: 'Alerts & notifications',
            unique: 22,
            items: [
              { name: 'Alert, confirm & prompt', unique: 'alert-confirm-prompt', component: Demo642 },
              { name: 'Toast & snackbar', unique: 'notifications', component: Demo643 },
            ],
          },
          {
            name: 'Buttons',
            unique: 25,
            items: [
              { name: 'Buttons', unique: 'buttons', component: Demo644 },
              { name: 'Segmented', unique: 'segmented', component: Demo645 },
              { name: 'Stepper', unique: 'stepper', component: Demo646 },
              { name: 'Colors', unique: 'button-segmented-stepper-colors', component: Demo647 },
            ],
          },
          {
            name: 'Inputs & fields',
            unique: 23,
            items: [
              { name: 'Field types', unique: 'inputs-text-areas-date-fields', component: Demo648 },
              { name: 'Customize the input', unique: 'input-label-types', component: Demo649 },
            ],
          },
          {
            name: 'Toggle & radio',
            unique: 24,
            items: [
              { name: 'Checkbox', unique: 'checkbox', component: Demo650 },
              { name: 'Switch', unique: 'switch', component: Demo651 },
              { name: 'Radio buttons', unique: 'radio-button', component: Demo652 },
            ],
          },
          {
            name: 'Customizing the look & feel',
            unique: 5,
            items: [{ name: 'Theming capabilities', unique: 'themes-ios-material-windows', component: Demo466 }],
          },
        ],
      },
    ],
  },
  {
    name: 'Pickers & dropdowns',
    unique: 'pickers',
    items: [
      {
        name: 'Select',
        unique: 'select',
        items: [
          {
            name: 'Using the picker',
            unique: 7,
            items: [
              { name: 'Mobile & Desktop usage', unique: 'mobile-desktop-usage', component: Demo468 },
              { name: 'Responsive behavior', unique: 'responsive', component: Demo599 },
              { name: 'Understanding display modes', unique: 'mobile-desktop-display', component: Demo597 },
              { name: 'Populating the picker', unique: 'data-sources', component: Demo635 },
            ],
          },
          {
            name: 'Templating',
            unique: 19,
            items: [
              { name: 'Templating', unique: 'item-templating', component: Demo637 },
              { name: 'Country Dropdown', unique: 'country-picker', component: Demo155 },
              { name: 'Image & text', unique: 'image-text', component: Demo638 },
              { name: 'Multiline select', unique: 'multiple-lines', component: Demo132 },
            ],
          },
          {
            name: 'Configuring value selection',
            unique: 10,
            items: [
              { name: 'Single select', unique: 'single-select', component: Demo598 },
              { name: 'Multiple select', unique: 'multiple-select', component: Demo103 },
              { name: 'Group options', unique: 'group-options', component: Demo469 },
              { name: 'Filtering', unique: 'filtering-values', component: Demo622 },
              { name: 'Multi level hierarchy', unique: 'linked-hierarchical-pickers', component: Demo636 },
              { name: 'Setting values', unique: 'setting-values-defaults', component: Demo389 },
            ],
          },
          {
            name: 'Validation & restricting selection',
            unique: 11,
            items: [{ name: 'Disabled values', unique: 'disabled-invalid-values', component: Demo603 }],
          },
          {
            name: 'Customizing the look & feel',
            unique: 5,
            items: [{ name: 'Theming capabilities', unique: 'themes-ios-material-windows', component: Demo387 }],
          },
          {
            name: 'Localization & tapping into the lifecycle',
            unique: 6,
            items: [
              { name: 'Event hooks', unique: 'event-hooks', component: Demo276 },
              { name: 'Localization ', unique: 'localization', component: Demo471 },
              { name: 'RTL support', unique: 'rtl-right-to-left', component: Demo601 },
            ],
          },
        ],
      },
    ],
  },
];

export const demoTitleMap: { [key: string]: string } = {};

@NgModule({
  declarations: [
    Demo439,
    Demo571,
    Demo529,
    Demo530,
    Demo579,
    Demo623,
    Demo531,
    Demo92,
    Demo312,
    Demo533,
    Demo631,
    Demo431,
    Demo326,
    Demo534,
    Demo538,
    Demo539,
    Demo629,
    Demo543,
    Demo363,
    Demo332,
    Demo341,
    Demo686,
    Demo535,
    Demo337,
    Demo541,
    Demo376,
    Demo542,
    Demo567,
    Demo562,
    Demo251,
    Demo445,
    Demo438,
    Demo577,
    Demo435,
    Demo572,
    Demo524,
    Demo528,
    Demo53,
    Demo55,
    Demo245,
    Demo315,
    Demo537,
    Demo558,
    Demo362,
    Demo331,
    Demo56,
    Demo335,
    Demo690,
    Demo536,
    Demo54,
    Demo540,
    Demo375,
    Demo248,
    Demo446,
    Demo437,
    Demo578,
    Demo544,
    Demo550,
    Demo545,
    Demo549,
    Demo546,
    Demo618,
    Demo215,
    Demo632,
    Demo575,
    Demo551,
    Demo552,
    Demo553,
    Demo554,
    Demo556,
    Demo327,
    Demo223,
    Demo364,
    Demo555,
    Demo691,
    Demo557,
    Demo548,
    Demo164,
    Demo559,
    Demo381,
    Demo566,
    Demo563,
    Demo291,
    Demo449,
    Demo574,
    Demo576,
    Demo518,
    Demo573,
    Demo501,
    Demo749,
    Demo662,
    Demo596,
    Demo611,
    Demo711,
    Demo742,
    Demo506,
    Demo508,
    Demo748,
    Demo514,
    Demo657,
    Demo730,
    Demo512,
    Demo496,
    Demo498,
    Demo499,
    Demo515,
    Demo493,
    Demo494,
    Demo685,
    Demo689,
    Demo495,
    Demo703,
    Demo521,
    Demo497,
    Demo522,
    Demo602,
    Demo349,
    Demo346,
    Demo442,
    Demo661,
    Demo447,
    Demo443,
    Demo595,
    Demo612,
    Demo614,
    Demo707,
    Demo708,
    Demo352,
    Demo630,
    Demo679,
    Demo588,
    Demo432,
    Demo740,
    Demo505,
    Demo504,
    Demo509,
    Demo658,
    Demo561,
    Demo724,
    Demo727,
    Demo729,
    Demo569,
    Demo586,
    Demo587,
    Demo510,
    Demo450,
    Demo373,
    Demo491,
    Demo516,
    Demo345,
    Demo347,
    Demo681,
    Demo683,
    Demo492,
    Demo565,
    Demo615,
    Demo692,
    Demo700,
    Demo705,
    Demo455,
    Demo444,
    Demo448,
    Demo283,
    Demo475,
    Demo476,
    Demo478,
    Demo477,
    Demo479,
    Demo659,
    Demo581,
    Demo721,
    Demo696,
    Demo733,
    Demo664,
    Demo583,
    Demo589,
    Demo480,
    Demo582,
    Demo610,
    Demo738,
    Demo748,
    Demo613,
    Demo699,
    Demo709,
    Demo741,
    Demo655,
    Demo507,
    Demo619,
    Demo600,
    Demo513,
    Demo560,
    Demo722,
    Demo725,
    Demo570,
    Demo568,
    Demo584,
    Demo585,
    Demo591,
    Demo592,
    Demo593,
    Demo594,
    Demo719,
    Demo481,
    Demo503,
    Demo490,
    Demo517,
    Demo483,
    Demo482,
    Demo682,
    Demo687,
    Demo500,
    Demo564,
    Demo701,
    Demo678,
    Demo693,
    Demo712,
    Demo511,
    Demo489,
    Demo736,
    Demo486,
    Demo487,
    Demo488,
    Demo617,
    Demo604,
    Demo660,
    Demo621,
    Demo626,
    Demo627,
    Demo634,
    Demo628,
    Demo698,
    Demo717,
    Demo716,
    Demo731,
    Demo732,
    Demo745,
    Demo735,
    Demo746,
    Demo750,
    Demo751,
    Demo605,
    Demo663,
    Demo734,
    Demo739,
    Demo697,
    Demo749,
    Demo608,
    Demo744,
    Demo620,
    Demo606,
    Demo653,
    Demo654,
    Demo710,
    Demo743,
    Demo609,
    Demo714,
    Demo633,
    Demo639,
    Demo656,
    Demo715,
    Demo665,
    Demo723,
    Demo726,
    Demo728,
    Demo607,
    Demo625,
    Demo747,
    Demo720,
    Demo666,
    Demo706,
    Demo667,
    Demo668,
    Demo677,
    Demo669,
    Demo670,
    Demo718,
    Demo704,
    Demo684,
    Demo688,
    Demo695,
    Demo671,
    Demo694,
    Demo702,
    Demo713,
    Demo672,
    Demo737,
    Demo673,
    Demo674,
    Demo675,
    Demo676,
    Demo459,
    Demo640,
    Demo461,
    Demo641,
    Demo642,
    Demo643,
    Demo644,
    Demo645,
    Demo646,
    Demo647,
    Demo648,
    Demo649,
    Demo650,
    Demo651,
    Demo652,
    Demo466,
    Demo468,
    Demo599,
    Demo597,
    Demo635,
    Demo637,
    Demo155,
    Demo638,
    Demo132,
    Demo598,
    Demo103,
    Demo469,
    Demo622,
    Demo636,
    Demo389,
    Demo603,
    Demo387,
    Demo276,
    Demo471,
    Demo601,
    Demo777,
    HomeComponent,
  ],
  imports: [CommonModule, FormsModule, MbscModule, HttpClientJsonpModule, HttpClientModule, RouterLink],
  providers: [],
})
export class AppModule {}
