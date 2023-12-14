import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent as DatetimeDatepicker } from '../demos/datetime/datetime/date-picker/date-picker';
import { AppComponent as DatetimeDisabledinvalidvalues } from '../demos/datetime/datetime/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as DatetimeTimepicker } from '../demos/datetime/datetime/time-picker/time-picker';
import { AppComponent as DatetimeMonthyearpicker } from '../demos/datetime/datetime/month-year-picker/month-year-picker';
import { AppComponent as DatetimeDatetimepicker } from '../demos/datetime/datetime/date-time-picker/date-time-picker';
import { AppComponent as DatetimeEventhooks } from '../demos/datetime/datetime/event-hooks/event-hooks';
import { AppComponent as DatetimeTimevaluesteps } from '../demos/datetime/datetime/time-value-steps/time-value-steps';
import { AppComponent as DatetimeFormattingreturnvalues } from '../demos/datetime/datetime/formatting-return-values/formatting-return-values';
import { AppComponent as DatetimeSettingvaluesdefaults } from '../demos/datetime/datetime/setting-values-defaults/setting-values-defaults';
import { AppComponent as DatetimeDateobjectISO8601moment } from '../demos/datetime/datetime/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as DatetimeThemesiosmaterialwindows } from '../demos/datetime/datetime/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as DatetimeMobiledesktopusage } from '../demos/datetime/datetime/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as DatetimeLocalization } from '../demos/datetime/datetime/localization/localization';
import { AppComponent as DatetimeGregorianjalalihijri } from '../demos/datetime/datetime/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as DatetimeResponsive } from '../demos/datetime/datetime/responsive/responsive';
import { AppComponent as DatetimeMobiledesktopdisplay } from '../demos/datetime/datetime/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as DatetimeMinmaxrestrictions } from '../demos/datetime/datetime/min-max-restrictions/min-max-restrictions';
import { AppComponent as DatetimeSingleselect } from '../demos/datetime/datetime/single-select/single-select';
import { AppComponent as DatetimeRecurringvalues } from '../demos/datetime/datetime/recurring-values/recurring-values';
import { AppComponent as DatetimeRangeselect } from '../demos/datetime/datetime/range-select/range-select';
import { AppComponent as DatetimeUsageoninputorinline } from '../demos/datetime/datetime/usage-on-input-or-inline/usage-on-input-or-inline';
import { AppComponent as DatetimeRtlrighttoleft } from '../demos/datetime/datetime/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as DatetimeSettingthepickertimezone } from '../demos/datetime/datetime/setting-the-picker-timezone/setting-the-picker-timezone';
import { AppComponent as CalendarDatetimepicker } from '../demos/calendar/calendar/date-time-picker/date-time-picker';
import { AppComponent as CalendarEventhooks } from '../demos/calendar/calendar/event-hooks/event-hooks';
import { AppComponent as CalendarWeekview } from '../demos/calendar/calendar/week-view/week-view';
import { AppComponent as CalendarDotscolorslabels } from '../demos/calendar/calendar/dots-colors-labels/dots-colors-labels';
import { AppComponent as CalendarFormattingreturnvalues } from '../demos/calendar/calendar/formatting-return-values/formatting-return-values';
import { AppComponent as CalendarDisabledinvalidvalues } from '../demos/calendar/calendar/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as CalendarSettingvaluesdefaults } from '../demos/calendar/calendar/setting-values-defaults/setting-values-defaults';
import { AppComponent as CalendarDateobjectISO8601moment } from '../demos/calendar/calendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as CalendarThemesiosmaterialwindows } from '../demos/calendar/calendar/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as CalendarWeektomonth } from '../demos/calendar/calendar/week-to-month/week-to-month';
import { AppComponent as CalendarLocalization } from '../demos/calendar/calendar/localization/localization';
import { AppComponent as CalendarMobiledesktopusage } from '../demos/calendar/calendar/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as CalendarGregorianjalalihijri } from '../demos/calendar/calendar/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as CalendarResponsive } from '../demos/calendar/calendar/responsive/responsive';
import { AppComponent as CalendarMobiledesktopdisplay } from '../demos/calendar/calendar/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as CalendarDatepicker } from '../demos/calendar/calendar/date-picker/date-picker';
import { AppComponent as CalendarMultiplemonths } from '../demos/calendar/calendar/multiple-months/multiple-months';
import { AppComponent as CalendarMonthchangedirectionweeknumbersouterdays } from '../demos/calendar/calendar/month-change-direction-week-numbers-outer-days/month-change-direction-week-numbers-outer-days';
import { AppComponent as CalendarMinmaxrestrictions } from '../demos/calendar/calendar/min-max-restrictions/min-max-restrictions';
import { AppComponent as CalendarSingleselect } from '../demos/calendar/calendar/single-select/single-select';
import { AppComponent as CalendarMultipleselect } from '../demos/calendar/calendar/multiple-select/multiple-select';
import { AppComponent as CalendarRecurringvalues } from '../demos/calendar/calendar/recurring-values/recurring-values';
import { AppComponent as CalendarCustomizingheader } from '../demos/calendar/calendar/customizing-header/customizing-header';
import { AppComponent as CalendarRangeselect } from '../demos/calendar/calendar/range-select/range-select';
import { AppComponent as CalendarHalfdaystyling } from '../demos/calendar/calendar/half-day-styling/half-day-styling';
import { AppComponent as CalendarCustomizemarkeddayshapes } from '../demos/calendar/calendar/customize-marked-day-shapes/customize-marked-day-shapes';
import { AppComponent as CalendarUsageoninputorinline } from '../demos/calendar/calendar/usage-on-input-or-inline/usage-on-input-or-inline';
import { AppComponent as CalendarRtlrighttoleft } from '../demos/calendar/calendar/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as CalendarAppointmentbooking } from '../demos/calendar/calendar/appointment-booking/appointment-booking';
import { AppComponent as CalendarActivitycalendar } from '../demos/calendar/calendar/activity-calendar/activity-calendar';
import { AppComponent as CalendarWeekselect } from '../demos/calendar/calendar/week-select/week-select';
import { AppComponent as CalendarQuarteryearview } from '../demos/calendar/calendar/quarter-year-view/quarter-year-view';
import { AppComponent as CalendarSettingthepickertimezone } from '../demos/calendar/calendar/setting-the-picker-timezone/setting-the-picker-timezone';
import { AppComponent as SelectMultipleselect } from '../demos/select/select/multiple-select/multiple-select';
import { AppComponent as SelectMultiplelines } from '../demos/select/select/multiple-lines/multiple-lines';
import { AppComponent as SelectCountrypicker } from '../demos/select/select/country-picker/country-picker';
import { AppComponent as SelectEventhooks } from '../demos/select/select/event-hooks/event-hooks';
import { AppComponent as SelectThemesiosmaterialwindows } from '../demos/select/select/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as SelectSettingvaluesdefaults } from '../demos/select/select/setting-values-defaults/setting-values-defaults';
import { AppComponent as SelectMobiledesktopusage } from '../demos/select/select/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as SelectGroupoptions } from '../demos/select/select/group-options/group-options';
import { AppComponent as SelectLocalization } from '../demos/select/select/localization/localization';
import { AppComponent as SelectMobiledesktopdisplay } from '../demos/select/select/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as SelectSingleselect } from '../demos/select/select/single-select/single-select';
import { AppComponent as SelectResponsive } from '../demos/select/select/responsive/responsive';
import { AppComponent as SelectRtlrighttoleft } from '../demos/select/select/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as SelectDisabledinvalidvalues } from '../demos/select/select/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as SelectFilteringvalues } from '../demos/select/select/filtering-values/filtering-values';
import { AppComponent as SelectDatasources } from '../demos/select/select/data-sources/data-sources';
import { AppComponent as SelectLinkedhierarchicalpickers } from '../demos/select/select/linked-hierarchical-pickers/linked-hierarchical-pickers';
import { AppComponent as SelectItemtemplating } from '../demos/select/select/item-templating/item-templating';
import { AppComponent as SelectImagetext } from '../demos/select/select/image-text/image-text';
import { AppComponent as RangeDisabledinvalidvalues } from '../demos/range/range/disabled-invalid-values/disabled-invalid-values';
import { AppComponent as RangeFlightbooking } from '../demos/range/range/flight-booking/flight-booking';
import { AppComponent as RangePresets } from '../demos/range/range/presets/presets';
import { AppComponent as RangeEventhooks } from '../demos/range/range/event-hooks/event-hooks';
import { AppComponent as RangeDotscolorslabels } from '../demos/range/range/dots-colors-labels/dots-colors-labels';
import { AppComponent as RangeDateobjectISO8601moment } from '../demos/range/range/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as RangeThemesiosmaterialwindows } from '../demos/range/range/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as RangeGregorianjalalihijri } from '../demos/range/range/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as RangeMobiledesktopusage } from '../demos/range/range/mobile-desktop-usage/mobile-desktop-usage';
import { AppComponent as RangeResponsive } from '../demos/range/range/responsive/responsive';
import { AppComponent as RangeMobiledesktopdisplay } from '../demos/range/range/mobile-desktop-display/mobile-desktop-display';
import { AppComponent as RangeMinmaxrestrictions } from '../demos/range/range/min-max-restrictions/min-max-restrictions';
import { AppComponent as RangeCalendarscrollerdropdown } from '../demos/range/range/calendar-scroller-dropdown/calendar-scroller-dropdown';
import { AppComponent as RangeUsageoninputorinline } from '../demos/range/range/usage-on-input-or-inline/usage-on-input-or-inline';
import { AppComponent as RangeDaterange } from '../demos/range/range/date-range/date-range';
import { AppComponent as RangeTimerange } from '../demos/range/range/time-range/time-range';
import { AppComponent as RangeDatetimerange } from '../demos/range/range/date-time-range/date-time-range';
import { AppComponent as RangeWeekmonthviewscrollingdirection } from '../demos/range/range/week-month-view-scrolling-direction/week-month-view-scrolling-direction';
import { AppComponent as RangeFormattingreturnvalues } from '../demos/range/range/formatting-return-values/formatting-return-values';
import { AppComponent as RangeCustomizinglabelsselection } from '../demos/range/range/customizing-labels-selection/customizing-labels-selection';
import { AppComponent as RangeMinmaxlength } from '../demos/range/range/min-max-length/min-max-length';
import { AppComponent as RangeRecurringvalues } from '../demos/range/range/recurring-values/recurring-values';
import { AppComponent as RangeHalfdaystyling } from '../demos/range/range/half-day-styling/half-day-styling';
import { AppComponent as RangeCustomizemarkeddayshapes } from '../demos/range/range/customize-marked-day-shapes/customize-marked-day-shapes';
import { AppComponent as RangeLocalization } from '../demos/range/range/localization/localization';
import { AppComponent as RangeAddingeventstartend } from '../demos/range/range/adding-event-start-end/adding-event-start-end';
import { AppComponent as RangeRtlrighttoleft } from '../demos/range/range/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as RangeDatefilteringwithpredefinedranges } from '../demos/range/range/date-filtering-with-predefined-ranges/date-filtering-with-predefined-ranges';
import { AppComponent as RangeBookrentalmonthsahead } from '../demos/range/range/book-rental-months-ahead/book-rental-months-ahead';
import { AppComponent as RangeSettingthepickertimezone } from '../demos/range/range/setting-the-picker-timezone/setting-the-picker-timezone';
import { AppComponent as AlertsNotificationsAlert } from '../demos/forms/alerts-notifications/alert/alert';
import { AppComponent as AlertsNotificationsNotifications } from '../demos/forms/alerts-notifications/notifications/notifications';
import { AppComponent as FormsMobile } from '../demos/forms/forms/mobile/mobile';
import { AppComponent as FormsResponsive } from '../demos/forms/forms/responsive/responsive';
import { AppComponent as FormsThemesiosmaterialwindows } from '../demos/forms/forms/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as FormsDesktop } from '../demos/forms/forms/desktop/desktop';
import { AppComponent as FormsPopup } from '../demos/forms/forms/popup/popup';
import { AppComponent as FormsAlertconfirmprompt } from '../demos/forms/forms/alert-confirm-prompt/alert-confirm-prompt';
import { AppComponent as FormsNotifications } from '../demos/forms/forms/notifications/notifications';
import { AppComponent as FormsButtons } from '../demos/forms/forms/buttons/buttons';
import { AppComponent as FormsSegmented } from '../demos/forms/forms/segmented/segmented';
import { AppComponent as FormsStepper } from '../demos/forms/forms/stepper/stepper';
import { AppComponent as FormsButtonsegmentedsteppercolors } from '../demos/forms/forms/button-segmented-stepper-colors/button-segmented-stepper-colors';
import { AppComponent as FormsInputstextareasdatefields } from '../demos/forms/forms/inputs-text-areas-date-fields/inputs-text-areas-date-fields';
import { AppComponent as FormsInputlabeltypes } from '../demos/forms/forms/input-label-types/input-label-types';
import { AppComponent as FormsCheckbox } from '../demos/forms/forms/checkbox/checkbox';
import { AppComponent as FormsSwitch } from '../demos/forms/forms/switch/switch';
import { AppComponent as FormsRadiobutton } from '../demos/forms/forms/radio-button/radio-button';
import { AppComponent as EventcalendarEventhooks } from '../demos/eventcalendar/eventcalendar/event-hooks/event-hooks';
import { AppComponent as EventcalendarLoadeventsfromremoteapi } from '../demos/eventcalendar/eventcalendar/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as EventcalendarDesktopmonthview } from '../demos/eventcalendar/eventcalendar/desktop-month-view/desktop-month-view';
import { AppComponent as EventcalendarLoadeventsondemand } from '../demos/eventcalendar/eventcalendar/load-events-on-demand/load-events-on-demand';
import { AppComponent as EventcalendarMobilemonthview } from '../demos/eventcalendar/eventcalendar/mobile-month-view/mobile-month-view';
import { AppComponent as EventcalendarMonthweekview } from '../demos/eventcalendar/eventcalendar/month-week-view/month-week-view';
import { AppComponent as EventcalendarDateobjectISO8601moment } from '../demos/eventcalendar/eventcalendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as EventcalendarSwitchingdayweekmonthview } from '../demos/eventcalendar/eventcalendar/switching-day-week-month-view/switching-day-week-month-view';
import { AppComponent as EventcalendarResponsivemonthview } from '../demos/eventcalendar/eventcalendar/responsive-month-view/responsive-month-view';
import { AppComponent as EventcalendarEventpopover } from '../demos/eventcalendar/eventcalendar/event-popover/event-popover';
import { AppComponent as EventcalendarLocalization } from '../demos/eventcalendar/eventcalendar/localization/localization';
import { AppComponent as EventcalendarEventlabels } from '../demos/eventcalendar/eventcalendar/event-labels/event-labels';
import { AppComponent as EventcalendarGregorianjalalihijri } from '../demos/eventcalendar/eventcalendar/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as EventcalendarEventdatastructure } from '../demos/eventcalendar/eventcalendar/event-data-structure/event-data-structure';
import { AppComponent as EventcalendarThemesiosmaterialwindows } from '../demos/eventcalendar/eventcalendar/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as EventcalendarMultiplegooglecalendar } from '../demos/eventcalendar/eventcalendar/multiple-google-calendar/multiple-google-calendar';
import { AppComponent as EventcalendarRecurringevents } from '../demos/eventcalendar/eventcalendar/recurring-events/recurring-events';
import { AppComponent as EventcalendarLoadeventsfromgooglecalendar } from '../demos/eventcalendar/eventcalendar/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as EventcalendarCustomizeeventpopover } from '../demos/eventcalendar/eventcalendar/customize-event-popover/customize-event-popover';
import { AppComponent as EventcalendarCustomizelabellookandfeel } from '../demos/eventcalendar/eventcalendar/customize-label-look-and-feel/customize-label-look-and-feel';
import { AppComponent as EventcalendarCustomizingheader } from '../demos/eventcalendar/eventcalendar/customizing-header/customizing-header';
import { AppComponent as EventcalendarResourcefilteringinheader } from '../demos/eventcalendar/eventcalendar/resource-filtering-in-header/resource-filtering-in-header';
import { AppComponent as EventcalendarLoadinlinedata } from '../demos/eventcalendar/eventcalendar/load-inline-data/load-inline-data';
import { AppComponent as EventcalendarMoveresizedragdroptocreateevents } from '../demos/eventcalendar/eventcalendar/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import { AppComponent as EventcalendarCreatereadupdatedeleteCRUD } from '../demos/eventcalendar/eventcalendar/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import { AppComponent as EventcalendarBlockeddaysranges } from '../demos/eventcalendar/eventcalendar/blocked-days-ranges/blocked-days-ranges';
import { AppComponent as EventcalendarExternaldragdropscheduleunschedule } from '../demos/eventcalendar/eventcalendar/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import { AppComponent as EventcalendarExternaleventpresets } from '../demos/eventcalendar/eventcalendar/external-event-presets/external-event-presets';
import { AppComponent as EventcalendarColoredcellbackground } from '../demos/eventcalendar/eventcalendar/colored-cell-background/colored-cell-background';
import { AppComponent as EventcalendarCustomeventsort } from '../demos/eventcalendar/eventcalendar/custom-event-sort/custom-event-sort';
import { AppComponent as EventcalendarSettingthetimezone } from '../demos/eventcalendar/eventcalendar/setting-the-timezone/setting-the-timezone';
import { AppComponent as EventcalendarMultipletimezonesupport } from '../demos/eventcalendar/eventcalendar/multiple-timezone-support/multiple-timezone-support';
import { AppComponent as EventcalendarRecurringeventaddeditdialog } from '../demos/eventcalendar/eventcalendar/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import { AppComponent as EventcalendarQuarteryearview } from '../demos/eventcalendar/eventcalendar/quarter-year-view/quarter-year-view';
import { AppComponent as EventcalendarCustomeventtooltip } from '../demos/eventcalendar/eventcalendar/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as EventcalendarPrintingtheview } from '../demos/eventcalendar/eventcalendar/printing-the-view/printing-the-view';
import { AppComponent as EventcalendarShowmorealllabels } from '../demos/eventcalendar/eventcalendar/show-more-all-labels/show-more-all-labels';
import { AppComponent as EventcalendarSynceventsgooglecalendar } from '../demos/eventcalendar/eventcalendar/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as EventcalendarSynceventsoutlookcalendar } from '../demos/eventcalendar/eventcalendar/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as EventcalendarDisallowpasteventcreation } from '../demos/eventcalendar/eventcalendar/disallow-past-event-creation/disallow-past-event-creation';
import { AppComponent as EventcalendarEventbulkactionseditdeleteupdate } from '../demos/eventcalendar/eventcalendar/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as EventcalendarCutcopypasteeventsbetweencalendars } from '../demos/eventcalendar/eventcalendar/cut-copy-paste-events-between-calendars/cut-copy-paste-events-between-calendars';
import { AppComponent as EventcalendarSearchingeventsinpopup } from '../demos/eventcalendar/eventcalendar/searching-events-in-popup/searching-events-in-popup';
import { AppComponent as EventcalendarSearchingeventsinsidebar } from '../demos/eventcalendar/eventcalendar/searching-events-in-sidebar/searching-events-in-sidebar';
import { AppComponent as EventcalendarConditionalmoveresize } from '../demos/eventcalendar/eventcalendar/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import { AppComponent as EventcalendarDragdropbetweencalendarinstances } from '../demos/eventcalendar/eventcalendar/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import { AppComponent as EventcalendarPreventdoublebookingevents } from '../demos/eventcalendar/eventcalendar/prevent-double-booking-events/prevent-double-booking-events';
import { AppComponent as SchedulerMobiledayview } from '../demos/eventcalendar/scheduler/mobile-day-view/mobile-day-view';
import { AppComponent as SchedulerDesktopdayview } from '../demos/eventcalendar/scheduler/desktop-day-view/desktop-day-view';
import { AppComponent as SchedulerDesktopweekview } from '../demos/eventcalendar/scheduler/desktop-week-view/desktop-week-view';
import { AppComponent as SchedulerMobileweekview } from '../demos/eventcalendar/scheduler/mobile-week-view/mobile-week-view';
import { AppComponent as SchedulerResponsivedayweekschedule } from '../demos/eventcalendar/scheduler/responsive-day-week-schedule/responsive-day-week-schedule';
import { AppComponent as SchedulerSwitchingcalendarscheduleragenda } from '../demos/eventcalendar/scheduler/switching-calendar-scheduler-agenda/switching-calendar-scheduler-agenda';
import { AppComponent as SchedulerEventdatastructure } from '../demos/eventcalendar/scheduler/event-data-structure/event-data-structure';
import { AppComponent as SchedulerLoadeventsondemand } from '../demos/eventcalendar/scheduler/load-events-on-demand/load-events-on-demand';
import { AppComponent as SchedulerLoadeventsfromremoteapi } from '../demos/eventcalendar/scheduler/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as SchedulerAdddeleteevent } from '../demos/eventcalendar/scheduler/add-delete-event/add-delete-event';
import { AppComponent as SchedulerViewupdateevent } from '../demos/eventcalendar/scheduler/view-update-event/view-update-event';
import { AppComponent as SchedulerGregorianjalalihijri } from '../demos/eventcalendar/scheduler/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as SchedulerEventhooks } from '../demos/eventcalendar/scheduler/event-hooks/event-hooks';
import { AppComponent as SchedulerLocalization } from '../demos/eventcalendar/scheduler/localization/localization';
import { AppComponent as SchedulerThemesiosmaterialwindows } from '../demos/eventcalendar/scheduler/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as SchedulerRecurringevents } from '../demos/eventcalendar/scheduler/recurring-events/recurring-events';
import { AppComponent as SchedulerLoadeventsfromgooglecalendar } from '../demos/eventcalendar/scheduler/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as SchedulerDateobjectISO8601moment } from '../demos/eventcalendar/scheduler/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as SchedulerCustomizingevents } from '../demos/eventcalendar/scheduler/customizing-events/customizing-events';
import { AppComponent as SchedulerResourcefilteringinheader } from '../demos/eventcalendar/scheduler/resource-filtering-in-header/resource-filtering-in-header';
import { AppComponent as SchedulerCustomizingheader } from '../demos/eventcalendar/scheduler/customizing-header/customizing-header';
import { AppComponent as SchedulerLoadinlinedata } from '../demos/eventcalendar/scheduler/load-inline-data/load-inline-data';
import { AppComponent as SchedulerMoveresizedragdroptocreateevents } from '../demos/eventcalendar/scheduler/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import { AppComponent as SchedulerCreatereadupdatedeleteCRUD } from '../demos/eventcalendar/scheduler/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import { AppComponent as SchedulerPreventdoublebookingevents } from '../demos/eventcalendar/scheduler/prevent-double-booking-events/prevent-double-booking-events';
import { AppComponent as SchedulerTimeoffblockedranges } from '../demos/eventcalendar/scheduler/time-off-blocked-ranges/time-off-blocked-ranges';
import { AppComponent as SchedulerWorkweekhours } from '../demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import { AppComponent as SchedulerShowhidehoursdays } from '../demos/eventcalendar/scheduler/show-hide-hours-days/show-hide-hours-days';
import { AppComponent as SchedulerDisablealldayevents } from '../demos/eventcalendar/scheduler/disable-all-day-events/disable-all-day-events';
import { AppComponent as SchedulerExternaldragdropscheduleunschedule } from '../demos/eventcalendar/scheduler/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import { AppComponent as SchedulerExternaleventpresets } from '../demos/eventcalendar/scheduler/external-event-presets/external-event-presets';
import { AppComponent as SchedulerColoredcellbackground } from '../demos/eventcalendar/scheduler/colored-cell-background/colored-cell-background';
import { AppComponent as SchedulerResourceview } from '../demos/eventcalendar/scheduler/resource-view/resource-view';
import { AppComponent as SchedulerGroupbyresourcebyday } from '../demos/eventcalendar/scheduler/group-by-resource-by-day/group-by-resource-by-day';
import { AppComponent as SchedulerSharedeventsacrossresources } from '../demos/eventcalendar/scheduler/shared-events-across-resources/shared-events-across-resources';
import { AppComponent as SchedulerDynamicaddremoveresourcesfilter } from '../demos/eventcalendar/scheduler/dynamic-add-remove-resources-filter/dynamic-add-remove-resources-filter';
import { AppComponent as SchedulerCustomresourceheadertemplate } from '../demos/eventcalendar/scheduler/custom-resource-header-template/custom-resource-header-template';
import { AppComponent as SchedulerSettingthetimezone } from '../demos/eventcalendar/scheduler/setting-the-timezone/setting-the-timezone';
import { AppComponent as SchedulerMultipletimezonesupport } from '../demos/eventcalendar/scheduler/multiple-timezone-support/multiple-timezone-support';
import { AppComponent as SchedulerDateheadertemplate } from '../demos/eventcalendar/scheduler/date-header-template/date-header-template';
import { AppComponent as SchedulerCustomeventtooltip } from '../demos/eventcalendar/scheduler/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as SchedulerPrintingtheview } from '../demos/eventcalendar/scheduler/printing-the-view/printing-the-view';
import { AppComponent as SchedulerDisplaymultipledaysweeks } from '../demos/eventcalendar/scheduler/display-multiple-days-weeks/display-multiple-days-weeks';
import { AppComponent as SchedulerRecurringeventaddeditdialog } from '../demos/eventcalendar/scheduler/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import { AppComponent as SchedulerSynceventsgooglecalendar } from '../demos/eventcalendar/scheduler/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as SchedulerSynceventsoutlookcalendar } from '../demos/eventcalendar/scheduler/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as SchedulerDisallowpasteventcreation } from '../demos/eventcalendar/scheduler/disallow-past-event-creation/disallow-past-event-creation';
import { AppComponent as SchedulerCustomrangeview } from '../demos/eventcalendar/scheduler/custom-range-view/custom-range-view';
import { AppComponent as SchedulerShowmultipletimezones } from '../demos/eventcalendar/scheduler/show-multiple-timezones/show-multiple-timezones';
import { AppComponent as SchedulerEventbulkactionseditdeleteupdate } from '../demos/eventcalendar/scheduler/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as SchedulerSearchingeventsinsidebar } from '../demos/eventcalendar/scheduler/searching-events-in-sidebar/searching-events-in-sidebar';
import { AppComponent as SchedulerColorsinvalidscssclass } from '../demos/eventcalendar/scheduler/colors-invalids-css-class/colors-invalids-css-class';
import { AppComponent as SchedulerResourcedatastructure } from '../demos/eventcalendar/scheduler/resource-data-structure/resource-data-structure';
import { AppComponent as SchedulerDoctorsappointment } from '../demos/eventcalendar/scheduler/doctors-appointment/doctors-appointment';
import { AppComponent as SchedulerConditionalmoveresize } from '../demos/eventcalendar/scheduler/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import { AppComponent as SchedulerDragdropbetweencalendarinstances } from '../demos/eventcalendar/scheduler/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import { AppComponent as SchedulerControlnumberofconcurrentlyshownevents } from '../demos/eventcalendar/scheduler/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import { AppComponent as AgendaLoadeventsfromremoteapi } from '../demos/eventcalendar/agenda/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as AgendaLoadeventsondemand } from '../demos/eventcalendar/agenda/load-events-on-demand/load-events-on-demand';
import { AppComponent as AgendaLoadeventsfromgooglecalendar } from '../demos/eventcalendar/agenda/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as AgendaEventdatastructure } from '../demos/eventcalendar/agenda/event-data-structure/event-data-structure';
import { AppComponent as AgendaEventhooks } from '../demos/eventcalendar/agenda/event-hooks/event-hooks';
import { AppComponent as AgendaDateobjectISO8601moment } from '../demos/eventcalendar/agenda/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as AgendaRecurringevents } from '../demos/eventcalendar/agenda/recurring-events/recurring-events';
import { AppComponent as AgendaDailyweeklymonthlyannualagenda } from '../demos/eventcalendar/agenda/daily-weekly-monthly-annual-agenda/daily-weekly-monthly-annual-agenda';
import { AppComponent as AgendaEventcontentcustomization } from '../demos/eventcalendar/agenda/event-content-customization/event-content-customization';
import { AppComponent as AgendaFulleventcustomization } from '../demos/eventcalendar/agenda/full-event-customization/full-event-customization';
import { AppComponent as AgendaResourcefilteringinheader } from '../demos/eventcalendar/agenda/resource-filtering-in-header/resource-filtering-in-header';
import { AppComponent as AgendaCustomizingheader } from '../demos/eventcalendar/agenda/customizing-header/customizing-header';
import { AppComponent as AgendaLoadinlinedata } from '../demos/eventcalendar/agenda/load-inline-data/load-inline-data';
import { AppComponent as AgendaDailyagendawithweekcalendar } from '../demos/eventcalendar/agenda/daily-agenda-with-week-calendar/daily-agenda-with-week-calendar';
import { AppComponent as AgendaSynchronizedviews } from '../demos/eventcalendar/agenda/synchronized-views/synchronized-views';
import { AppComponent as AgendaThemesiosmaterialwindows } from '../demos/eventcalendar/agenda/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as AgendaGregorianjalalihijri } from '../demos/eventcalendar/agenda/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as AgendaBasicusage } from '../demos/eventcalendar/agenda/basic-usage/basic-usage';
import { AppComponent as AgendaCustomeventsort } from '../demos/eventcalendar/agenda/custom-event-sort/custom-event-sort';
import { AppComponent as AgendaLocalization } from '../demos/eventcalendar/agenda/localization/localization';
import { AppComponent as AgendaSettingthetimezone } from '../demos/eventcalendar/agenda/setting-the-timezone/setting-the-timezone';
import { AppComponent as AgendaCustomeventtooltip } from '../demos/eventcalendar/agenda/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as AgendaPrintingtheview } from '../demos/eventcalendar/agenda/printing-the-view/printing-the-view';
import { AppComponent as AgendaSynceventsgooglecalendar } from '../demos/eventcalendar/agenda/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as AgendaSynceventsoutlookcalendar } from '../demos/eventcalendar/agenda/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as AgendaEventbulkactionseditdeleteupdate } from '../demos/eventcalendar/agenda/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as AgendaSearchingeventsinpopup } from '../demos/eventcalendar/agenda/searching-events-in-popup/searching-events-in-popup';
import { AppComponent as AgendaEmptystate } from '../demos/eventcalendar/agenda/empty-state/empty-state';
import { AppComponent as TimelineTimelinetimegrid } from '../demos/eventcalendar/timeline/timeline-time-grid/timeline-time-grid';
import { AppComponent as TimelineDailyweeklymonthlyyearlytimeline } from '../demos/eventcalendar/timeline/daily-weekly-monthly-yearly-timeline/daily-weekly-monthly-yearly-timeline';
import { AppComponent as TimelineSwitchingdayweekworkweektimeline } from '../demos/eventcalendar/timeline/switching-day-week-work-week-timeline/switching-day-week-work-week-timeline';
import { AppComponent as TimelineTimelineresourcedetailssidepanelfooter } from '../demos/eventcalendar/timeline/timeline-resource-details-side-panel-footer/timeline-resource-details-side-panel-footer';
import { AppComponent as TimelineTimelineresourceheight } from '../demos/eventcalendar/timeline/timeline-resource-height/timeline-resource-height';
import { AppComponent as TimelineTimelinecustomeventrendering } from '../demos/eventcalendar/timeline/timeline-custom-event-rendering/timeline-custom-event-rendering';
import { AppComponent as TimelineMonthview } from '../demos/eventcalendar/timeline/month-view/month-view';
import { AppComponent as TimelineEventlisting } from '../demos/eventcalendar/timeline/event-listing/event-listing';
import { AppComponent as TimelineEmployeeshifts } from '../demos/eventcalendar/timeline/employee-shifts/employee-shifts';
import { AppComponent as TimelineResourcegroupinghierarchy } from '../demos/eventcalendar/timeline/resource-grouping-hierarchy/resource-grouping-hierarchy';
import { AppComponent as TimelineWorkorderscheduling } from '../demos/eventcalendar/timeline/work-order-scheduling/work-order-scheduling';
import { AppComponent as TimelineTimezonemeetingplanner } from '../demos/eventcalendar/timeline/timezone-meeting-planner/timezone-meeting-planner';
import { AppComponent as TimelineMealplanner } from '../demos/eventcalendar/timeline/meal-planner/meal-planner';
import { AppComponent as TimelineShifttemplate } from '../demos/eventcalendar/timeline/shift-template/shift-template';
import { AppComponent as TimelineRestaurantshiftmanagement } from '../demos/eventcalendar/timeline/restaurant-shift-management/restaurant-shift-management';
import { AppComponent as TimelineResourceheadertemplate } from '../demos/eventcalendar/timeline/resource-header-template/resource-header-template';
import { AppComponent as TimelineSettingthetimezone } from '../demos/eventcalendar/timeline/setting-the-timezone/setting-the-timezone';
import { AppComponent as TimelineMultipletimezonesupport } from '../demos/eventcalendar/timeline/multiple-timezone-support/multiple-timezone-support';
import { AppComponent as TimelineCustomeventtooltip } from '../demos/eventcalendar/timeline/custom-event-tooltip/custom-event-tooltip';
import { AppComponent as TimelinePrintingtheview } from '../demos/eventcalendar/timeline/printing-the-view/printing-the-view';
import { AppComponent as TimelineMultipledaysweeksmonthsquartersyearsvariableresolution } from '../demos/eventcalendar/timeline/multiple-days-weeks-months-quarters-years-variable-resolution/multiple-days-weeks-months-quarters-years-variable-resolution';
import { AppComponent as TimelineMoveresizedragdroptocreateevents } from '../demos/eventcalendar/timeline/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import { AppComponent as TimelineEventdatastructure } from '../demos/eventcalendar/timeline/event-data-structure/event-data-structure';
import { AppComponent as TimelineDateobjectISO8601moment } from '../demos/eventcalendar/timeline/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import { AppComponent as TimelineRecurringevents } from '../demos/eventcalendar/timeline/recurring-events/recurring-events';
import { AppComponent as TimelineLoadeventsfromremoteapi } from '../demos/eventcalendar/timeline/load-events-from-remote-api/load-events-from-remote-api';
import { AppComponent as TimelineLoadeventsondemand } from '../demos/eventcalendar/timeline/load-events-on-demand/load-events-on-demand';
import { AppComponent as TimelineCreatereadupdatedeleteCRUD } from '../demos/eventcalendar/timeline/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import { AppComponent as TimelineThemesiosmaterialwindows } from '../demos/eventcalendar/timeline/themes-ios-material-windows/themes-ios-material-windows';
import { AppComponent as TimelineGregorianjalalihijri } from '../demos/eventcalendar/timeline/gregorian-jalali-hijri/gregorian-jalali-hijri';
import { AppComponent as TimelineEventhooks } from '../demos/eventcalendar/timeline/event-hooks/event-hooks';
import { AppComponent as TimelineLocalization } from '../demos/eventcalendar/timeline/localization/localization';
import { AppComponent as TimelineRtlrighttoleft } from '../demos/eventcalendar/timeline/rtl-right-to-left/rtl-right-to-left';
import { AppComponent as TimelineLoadinlinedata } from '../demos/eventcalendar/timeline/load-inline-data/load-inline-data';
import { AppComponent as TimelineSynceventsgooglecalendar } from '../demos/eventcalendar/timeline/sync-events-google-calendar/sync-events-google-calendar';
import { AppComponent as TimelineSynceventsoutlookcalendar } from '../demos/eventcalendar/timeline/sync-events-outlook-calendar/sync-events-outlook-calendar';
import { AppComponent as TimelineDisallowpasteventcreation } from '../demos/eventcalendar/timeline/disallow-past-event-creation/disallow-past-event-creation';
import { AppComponent as TimelineLoadeventsfromgooglecalendar } from '../demos/eventcalendar/timeline/load-events-from-google-calendar/load-events-from-google-calendar';
import { AppComponent as TimelineCustomrangeview } from '../demos/eventcalendar/timeline/custom-range-view/custom-range-view';
import { AppComponent as TimelineDynamicallycolorandinvalidate } from '../demos/eventcalendar/timeline/dynamically-color-and-invalidate/dynamically-color-and-invalidate';
import { AppComponent as TimelineEventbulkactionseditdeleteupdate } from '../demos/eventcalendar/timeline/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import { AppComponent as TimelineLoadingbigdatasets } from '../demos/eventcalendar/timeline/loading-big-data-sets/loading-big-data-sets';
import { AppComponent as TimelineConnectinglinkingeventsarrows } from '../demos/eventcalendar/timeline/connecting-linking-events-arrows/connecting-linking-events-arrows';
import { AppComponent as TimelineSearchingeventsinsidebar } from '../demos/eventcalendar/timeline/searching-events-in-sidebar/searching-events-in-sidebar';
import { AppComponent as TimelineColorsinvalidscssclass } from '../demos/eventcalendar/timeline/colors-invalids-css-class/colors-invalids-css-class';
import { AppComponent as TimelineHourdayweekmonthquarteryearheaderfootertemplate } from '../demos/eventcalendar/timeline/hour-day-week-month-quarter-year-header-footer-template/hour-day-week-month-quarter-year-header-footer-template';
import { AppComponent as TimelineSettingrowheight } from '../demos/eventcalendar/timeline/setting-row-height/setting-row-height';
import { AppComponent as TimelineMonthlytimetableverticaldayshorizontaltimes } from '../demos/eventcalendar/timeline/monthly-timetable-vertical-days-horizontal-times/monthly-timetable-vertical-days-horizontal-times';
import { AppComponent as TimelineMulticlassroomtimetable } from '../demos/eventcalendar/timeline/multi-classroom-timetable/multi-classroom-timetable';
import { AppComponent as TimelineLoadresourcesondemand } from '../demos/eventcalendar/timeline/load-resources-on-demand/load-resources-on-demand';
import { AppComponent as TimelineResourcedatastructure } from '../demos/eventcalendar/timeline/resource-data-structure/resource-data-structure';
import { AppComponent as TimelineConditionalmoveresize } from '../demos/eventcalendar/timeline/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import { AppComponent as TimelineDragdropbetweencalendarinstances } from '../demos/eventcalendar/timeline/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import { AppComponent as TimelinePreventdoublebookingevents } from '../demos/eventcalendar/timeline/prevent-double-booking-events/prevent-double-booking-events';
import { AppComponent as TimelineCompareresourcesfixedattop } from '../demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top';
import { AppComponent as TimelineAssignunassignworkordersfixedtoprow } from '../demos/eventcalendar/timeline/assign-unassign-work-orders-fixed-top-row/assign-unassign-work-orders-fixed-top-row';
import { AppComponent as TimelineControlnumberofconcurrentlyshownevents } from '../demos/eventcalendar/timeline/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import { AppComponent as TimelineFlightschedulingtwosynchronizedtimelines } from '../demos/eventcalendar/timeline/flight-scheduling-two-synchronized-timelines/flight-scheduling-two-synchronized-timelines';

const routes: Routes = [
  { path: 'datetime/date-picker', component: DatetimeDatepicker },
  { path: 'datetime/disabled-invalid-values', component: DatetimeDisabledinvalidvalues },
  { path: 'datetime/time-picker', component: DatetimeTimepicker },
  { path: 'datetime/month-year-picker', component: DatetimeMonthyearpicker },
  { path: 'datetime/date-time-picker', component: DatetimeDatetimepicker },
  { path: 'datetime/event-hooks', component: DatetimeEventhooks },
  { path: 'datetime/time-value-steps', component: DatetimeTimevaluesteps },
  { path: 'datetime/formatting-return-values', component: DatetimeFormattingreturnvalues },
  { path: 'datetime/setting-values-defaults', component: DatetimeSettingvaluesdefaults },
  { path: 'datetime/date-object-ISO-8601-moment', component: DatetimeDateobjectISO8601moment },
  { path: 'datetime/themes-ios-material-windows', component: DatetimeThemesiosmaterialwindows },
  { path: 'datetime/mobile-desktop-usage', component: DatetimeMobiledesktopusage },
  { path: 'datetime/localization', component: DatetimeLocalization },
  { path: 'datetime/gregorian-jalali-hijri', component: DatetimeGregorianjalalihijri },
  { path: 'datetime/responsive', component: DatetimeResponsive },
  { path: 'datetime/mobile-desktop-display', component: DatetimeMobiledesktopdisplay },
  { path: 'datetime/min-max-restrictions', component: DatetimeMinmaxrestrictions },
  { path: 'datetime/single-select', component: DatetimeSingleselect },
  { path: 'datetime/recurring-values', component: DatetimeRecurringvalues },
  { path: 'datetime/range-select', component: DatetimeRangeselect },
  { path: 'datetime/usage-on-input-or-inline', component: DatetimeUsageoninputorinline },
  { path: 'datetime/rtl-right-to-left', component: DatetimeRtlrighttoleft },
  { path: 'datetime/setting-the-picker-timezone', component: DatetimeSettingthepickertimezone },
  { path: 'calendar/date-time-picker', component: CalendarDatetimepicker },
  { path: 'calendar/event-hooks', component: CalendarEventhooks },
  { path: 'calendar/week-view', component: CalendarWeekview },
  { path: 'calendar/dots-colors-labels', component: CalendarDotscolorslabels },
  { path: 'calendar/formatting-return-values', component: CalendarFormattingreturnvalues },
  { path: 'calendar/disabled-invalid-values', component: CalendarDisabledinvalidvalues },
  { path: 'calendar/setting-values-defaults', component: CalendarSettingvaluesdefaults },
  { path: 'calendar/date-object-ISO-8601-moment', component: CalendarDateobjectISO8601moment },
  { path: 'calendar/themes-ios-material-windows', component: CalendarThemesiosmaterialwindows },
  { path: 'calendar/week-to-month', component: CalendarWeektomonth },
  { path: 'calendar/localization', component: CalendarLocalization },
  { path: 'calendar/mobile-desktop-usage', component: CalendarMobiledesktopusage },
  { path: 'calendar/gregorian-jalali-hijri', component: CalendarGregorianjalalihijri },
  { path: 'calendar/responsive', component: CalendarResponsive },
  { path: 'calendar/mobile-desktop-display', component: CalendarMobiledesktopdisplay },
  { path: 'calendar/date-picker', component: CalendarDatepicker },
  { path: 'calendar/multiple-months', component: CalendarMultiplemonths },
  { path: 'calendar/month-change-direction-week-numbers-outer-days', component: CalendarMonthchangedirectionweeknumbersouterdays },
  { path: 'calendar/min-max-restrictions', component: CalendarMinmaxrestrictions },
  { path: 'calendar/single-select', component: CalendarSingleselect },
  { path: 'calendar/multiple-select', component: CalendarMultipleselect },
  { path: 'calendar/recurring-values', component: CalendarRecurringvalues },
  { path: 'calendar/customizing-header', component: CalendarCustomizingheader },
  { path: 'calendar/range-select', component: CalendarRangeselect },
  { path: 'calendar/half-day-styling', component: CalendarHalfdaystyling },
  { path: 'calendar/customize-marked-day-shapes', component: CalendarCustomizemarkeddayshapes },
  { path: 'calendar/usage-on-input-or-inline', component: CalendarUsageoninputorinline },
  { path: 'calendar/rtl-right-to-left', component: CalendarRtlrighttoleft },
  { path: 'calendar/appointment-booking', component: CalendarAppointmentbooking },
  { path: 'calendar/activity-calendar', component: CalendarActivitycalendar },
  { path: 'calendar/week-select', component: CalendarWeekselect },
  { path: 'calendar/quarter-year-view', component: CalendarQuarteryearview },
  { path: 'calendar/setting-the-picker-timezone', component: CalendarSettingthepickertimezone },
  { path: 'select/multiple-select', component: SelectMultipleselect },
  { path: 'select/multiple-lines', component: SelectMultiplelines },
  { path: 'select/country-picker', component: SelectCountrypicker },
  { path: 'select/event-hooks', component: SelectEventhooks },
  { path: 'select/themes-ios-material-windows', component: SelectThemesiosmaterialwindows },
  { path: 'select/setting-values-defaults', component: SelectSettingvaluesdefaults },
  { path: 'select/mobile-desktop-usage', component: SelectMobiledesktopusage },
  { path: 'select/group-options', component: SelectGroupoptions },
  { path: 'select/localization', component: SelectLocalization },
  { path: 'select/mobile-desktop-display', component: SelectMobiledesktopdisplay },
  { path: 'select/single-select', component: SelectSingleselect },
  { path: 'select/responsive', component: SelectResponsive },
  { path: 'select/rtl-right-to-left', component: SelectRtlrighttoleft },
  { path: 'select/disabled-invalid-values', component: SelectDisabledinvalidvalues },
  { path: 'select/filtering-values', component: SelectFilteringvalues },
  { path: 'select/data-sources', component: SelectDatasources },
  { path: 'select/linked-hierarchical-pickers', component: SelectLinkedhierarchicalpickers },
  { path: 'select/item-templating', component: SelectItemtemplating },
  { path: 'select/image-text', component: SelectImagetext },
  { path: 'range/disabled-invalid-values', component: RangeDisabledinvalidvalues },
  { path: 'range/flight-booking', component: RangeFlightbooking },
  { path: 'range/presets', component: RangePresets },
  { path: 'range/event-hooks', component: RangeEventhooks },
  { path: 'range/dots-colors-labels', component: RangeDotscolorslabels },
  { path: 'range/date-object-ISO-8601-moment', component: RangeDateobjectISO8601moment },
  { path: 'range/themes-ios-material-windows', component: RangeThemesiosmaterialwindows },
  { path: 'range/gregorian-jalali-hijri', component: RangeGregorianjalalihijri },
  { path: 'range/mobile-desktop-usage', component: RangeMobiledesktopusage },
  { path: 'range/responsive', component: RangeResponsive },
  { path: 'range/mobile-desktop-display', component: RangeMobiledesktopdisplay },
  { path: 'range/min-max-restrictions', component: RangeMinmaxrestrictions },
  { path: 'range/calendar-scroller-dropdown', component: RangeCalendarscrollerdropdown },
  { path: 'range/usage-on-input-or-inline', component: RangeUsageoninputorinline },
  { path: 'range/date-range', component: RangeDaterange },
  { path: 'range/time-range', component: RangeTimerange },
  { path: 'range/date-time-range', component: RangeDatetimerange },
  { path: 'range/week-month-view-scrolling-direction', component: RangeWeekmonthviewscrollingdirection },
  { path: 'range/formatting-return-values', component: RangeFormattingreturnvalues },
  { path: 'range/customizing-labels-selection', component: RangeCustomizinglabelsselection },
  { path: 'range/min-max-length', component: RangeMinmaxlength },
  { path: 'range/recurring-values', component: RangeRecurringvalues },
  { path: 'range/half-day-styling', component: RangeHalfdaystyling },
  { path: 'range/customize-marked-day-shapes', component: RangeCustomizemarkeddayshapes },
  { path: 'range/localization', component: RangeLocalization },
  { path: 'range/adding-event-start-end', component: RangeAddingeventstartend },
  { path: 'range/rtl-right-to-left', component: RangeRtlrighttoleft },
  { path: 'range/date-filtering-with-predefined-ranges', component: RangeDatefilteringwithpredefinedranges },
  { path: 'range/book-rental-months-ahead', component: RangeBookrentalmonthsahead },
  { path: 'range/setting-the-picker-timezone', component: RangeSettingthepickertimezone },
  { path: 'alerts-notifications/alert', component: AlertsNotificationsAlert },
  { path: 'alerts-notifications/notifications', component: AlertsNotificationsNotifications },
  { path: 'forms/mobile', component: FormsMobile },
  { path: 'forms/responsive', component: FormsResponsive },
  { path: 'forms/themes-ios-material-windows', component: FormsThemesiosmaterialwindows },
  { path: 'forms/desktop', component: FormsDesktop },
  { path: 'forms/popup', component: FormsPopup },
  { path: 'forms/alert-confirm-prompt', component: FormsAlertconfirmprompt },
  { path: 'forms/notifications', component: FormsNotifications },
  { path: 'forms/buttons', component: FormsButtons },
  { path: 'forms/segmented', component: FormsSegmented },
  { path: 'forms/stepper', component: FormsStepper },
  { path: 'forms/button-segmented-stepper-colors', component: FormsButtonsegmentedsteppercolors },
  { path: 'forms/inputs-text-areas-date-fields', component: FormsInputstextareasdatefields },
  { path: 'forms/input-label-types', component: FormsInputlabeltypes },
  { path: 'forms/checkbox', component: FormsCheckbox },
  { path: 'forms/switch', component: FormsSwitch },
  { path: 'forms/radio-button', component: FormsRadiobutton },
  { path: 'eventcalendar/event-hooks', component: EventcalendarEventhooks },
  { path: 'eventcalendar/load-events-from-remote-api', component: EventcalendarLoadeventsfromremoteapi },
  { path: 'eventcalendar/desktop-month-view', component: EventcalendarDesktopmonthview },
  { path: 'eventcalendar/load-events-on-demand', component: EventcalendarLoadeventsondemand },
  { path: 'eventcalendar/mobile-month-view', component: EventcalendarMobilemonthview },
  { path: 'eventcalendar/month-week-view', component: EventcalendarMonthweekview },
  { path: 'eventcalendar/date-object-ISO-8601-moment', component: EventcalendarDateobjectISO8601moment },
  { path: 'eventcalendar/switching-day-week-month-view', component: EventcalendarSwitchingdayweekmonthview },
  { path: 'eventcalendar/responsive-month-view', component: EventcalendarResponsivemonthview },
  { path: 'eventcalendar/event-popover', component: EventcalendarEventpopover },
  { path: 'eventcalendar/localization', component: EventcalendarLocalization },
  { path: 'eventcalendar/event-labels', component: EventcalendarEventlabels },
  { path: 'eventcalendar/gregorian-jalali-hijri', component: EventcalendarGregorianjalalihijri },
  { path: 'eventcalendar/event-data-structure', component: EventcalendarEventdatastructure },
  { path: 'eventcalendar/themes-ios-material-windows', component: EventcalendarThemesiosmaterialwindows },
  { path: 'eventcalendar/multiple-google-calendar', component: EventcalendarMultiplegooglecalendar },
  { path: 'eventcalendar/recurring-events', component: EventcalendarRecurringevents },
  { path: 'eventcalendar/load-events-from-google-calendar', component: EventcalendarLoadeventsfromgooglecalendar },
  { path: 'eventcalendar/customize-event-popover', component: EventcalendarCustomizeeventpopover },
  { path: 'eventcalendar/customize-label-look-and-feel', component: EventcalendarCustomizelabellookandfeel },
  { path: 'eventcalendar/customizing-header', component: EventcalendarCustomizingheader },
  { path: 'eventcalendar/resource-filtering-in-header', component: EventcalendarResourcefilteringinheader },
  { path: 'eventcalendar/load-inline-data', component: EventcalendarLoadinlinedata },
  { path: 'eventcalendar/move-resize-drag-drop-to-create-events', component: EventcalendarMoveresizedragdroptocreateevents },
  { path: 'eventcalendar/create-read-update-delete-CRUD', component: EventcalendarCreatereadupdatedeleteCRUD },
  { path: 'eventcalendar/blocked-days-ranges', component: EventcalendarBlockeddaysranges },
  { path: 'eventcalendar/external-drag-drop-schedule-unschedule', component: EventcalendarExternaldragdropscheduleunschedule },
  { path: 'eventcalendar/external-event-presets', component: EventcalendarExternaleventpresets },
  { path: 'eventcalendar/colored-cell-background', component: EventcalendarColoredcellbackground },
  { path: 'eventcalendar/custom-event-sort', component: EventcalendarCustomeventsort },
  { path: 'eventcalendar/setting-the-timezone', component: EventcalendarSettingthetimezone },
  { path: 'eventcalendar/multiple-timezone-support', component: EventcalendarMultipletimezonesupport },
  { path: 'eventcalendar/recurring-event-add-edit-dialog', component: EventcalendarRecurringeventaddeditdialog },
  { path: 'eventcalendar/quarter-year-view', component: EventcalendarQuarteryearview },
  { path: 'eventcalendar/custom-event-tooltip', component: EventcalendarCustomeventtooltip },
  { path: 'eventcalendar/printing-the-view', component: EventcalendarPrintingtheview },
  { path: 'eventcalendar/show-more-all-labels', component: EventcalendarShowmorealllabels },
  { path: 'eventcalendar/sync-events-google-calendar', component: EventcalendarSynceventsgooglecalendar },
  { path: 'eventcalendar/sync-events-outlook-calendar', component: EventcalendarSynceventsoutlookcalendar },
  { path: 'eventcalendar/disallow-past-event-creation', component: EventcalendarDisallowpasteventcreation },
  { path: 'eventcalendar/event-bulk-actions-edit-delete-update', component: EventcalendarEventbulkactionseditdeleteupdate },
  { path: 'eventcalendar/cut-copy-paste-events-between-calendars', component: EventcalendarCutcopypasteeventsbetweencalendars },
  { path: 'eventcalendar/searching-events-in-popup', component: EventcalendarSearchingeventsinpopup },
  { path: 'eventcalendar/searching-events-in-sidebar', component: EventcalendarSearchingeventsinsidebar },
  { path: 'eventcalendar/conditional-move-resize', component: EventcalendarConditionalmoveresize },
  { path: 'eventcalendar/drag-drop-between-calendar-instances', component: EventcalendarDragdropbetweencalendarinstances },
  { path: 'eventcalendar/prevent-double-booking-events', component: EventcalendarPreventdoublebookingevents },
  { path: 'scheduler/mobile-day-view', component: SchedulerMobiledayview },
  { path: 'scheduler/desktop-day-view', component: SchedulerDesktopdayview },
  { path: 'scheduler/desktop-week-view', component: SchedulerDesktopweekview },
  { path: 'scheduler/mobile-week-view', component: SchedulerMobileweekview },
  { path: 'scheduler/responsive-day-week-schedule', component: SchedulerResponsivedayweekschedule },
  { path: 'scheduler/switching-calendar-scheduler-agenda', component: SchedulerSwitchingcalendarscheduleragenda },
  { path: 'scheduler/event-data-structure', component: SchedulerEventdatastructure },
  { path: 'scheduler/load-events-on-demand', component: SchedulerLoadeventsondemand },
  { path: 'scheduler/load-events-from-remote-api', component: SchedulerLoadeventsfromremoteapi },
  { path: 'scheduler/add-delete-event', component: SchedulerAdddeleteevent },
  { path: 'scheduler/view-update-event', component: SchedulerViewupdateevent },
  { path: 'scheduler/gregorian-jalali-hijri', component: SchedulerGregorianjalalihijri },
  { path: 'scheduler/event-hooks', component: SchedulerEventhooks },
  { path: 'scheduler/localization', component: SchedulerLocalization },
  { path: 'scheduler/themes-ios-material-windows', component: SchedulerThemesiosmaterialwindows },
  { path: 'scheduler/recurring-events', component: SchedulerRecurringevents },
  { path: 'scheduler/load-events-from-google-calendar', component: SchedulerLoadeventsfromgooglecalendar },
  { path: 'scheduler/date-object-ISO-8601-moment', component: SchedulerDateobjectISO8601moment },
  { path: 'scheduler/customizing-events', component: SchedulerCustomizingevents },
  { path: 'scheduler/resource-filtering-in-header', component: SchedulerResourcefilteringinheader },
  { path: 'scheduler/customizing-header', component: SchedulerCustomizingheader },
  { path: 'scheduler/load-inline-data', component: SchedulerLoadinlinedata },
  { path: 'scheduler/move-resize-drag-drop-to-create-events', component: SchedulerMoveresizedragdroptocreateevents },
  { path: 'scheduler/create-read-update-delete-CRUD', component: SchedulerCreatereadupdatedeleteCRUD },
  { path: 'scheduler/prevent-double-booking-events', component: SchedulerPreventdoublebookingevents },
  { path: 'scheduler/time-off-blocked-ranges', component: SchedulerTimeoffblockedranges },
  { path: 'scheduler/work-week-hours', component: SchedulerWorkweekhours },
  { path: 'scheduler/show-hide-hours-days', component: SchedulerShowhidehoursdays },
  { path: 'scheduler/disable-all-day-events', component: SchedulerDisablealldayevents },
  { path: 'scheduler/external-drag-drop-schedule-unschedule', component: SchedulerExternaldragdropscheduleunschedule },
  { path: 'scheduler/external-event-presets', component: SchedulerExternaleventpresets },
  { path: 'scheduler/colored-cell-background', component: SchedulerColoredcellbackground },
  { path: 'scheduler/resource-view', component: SchedulerResourceview },
  { path: 'scheduler/group-by-resource-by-day', component: SchedulerGroupbyresourcebyday },
  { path: 'scheduler/shared-events-across-resources', component: SchedulerSharedeventsacrossresources },
  { path: 'scheduler/dynamic-add-remove-resources-filter', component: SchedulerDynamicaddremoveresourcesfilter },
  { path: 'scheduler/custom-resource-header-template', component: SchedulerCustomresourceheadertemplate },
  { path: 'scheduler/setting-the-timezone', component: SchedulerSettingthetimezone },
  { path: 'scheduler/multiple-timezone-support', component: SchedulerMultipletimezonesupport },
  { path: 'scheduler/date-header-template', component: SchedulerDateheadertemplate },
  { path: 'scheduler/custom-event-tooltip', component: SchedulerCustomeventtooltip },
  { path: 'scheduler/printing-the-view', component: SchedulerPrintingtheview },
  { path: 'scheduler/display-multiple-days-weeks', component: SchedulerDisplaymultipledaysweeks },
  { path: 'scheduler/recurring-event-add-edit-dialog', component: SchedulerRecurringeventaddeditdialog },
  { path: 'scheduler/sync-events-google-calendar', component: SchedulerSynceventsgooglecalendar },
  { path: 'scheduler/sync-events-outlook-calendar', component: SchedulerSynceventsoutlookcalendar },
  { path: 'scheduler/disallow-past-event-creation', component: SchedulerDisallowpasteventcreation },
  { path: 'scheduler/custom-range-view', component: SchedulerCustomrangeview },
  { path: 'scheduler/show-multiple-timezones', component: SchedulerShowmultipletimezones },
  { path: 'scheduler/event-bulk-actions-edit-delete-update', component: SchedulerEventbulkactionseditdeleteupdate },
  { path: 'scheduler/searching-events-in-sidebar', component: SchedulerSearchingeventsinsidebar },
  { path: 'scheduler/colors-invalids-css-class', component: SchedulerColorsinvalidscssclass },
  { path: 'scheduler/resource-data-structure', component: SchedulerResourcedatastructure },
  { path: 'scheduler/doctors-appointment', component: SchedulerDoctorsappointment },
  { path: 'scheduler/conditional-move-resize', component: SchedulerConditionalmoveresize },
  { path: 'scheduler/drag-drop-between-calendar-instances', component: SchedulerDragdropbetweencalendarinstances },
  { path: 'scheduler/control-number-of-concurrently-shown-events', component: SchedulerControlnumberofconcurrentlyshownevents },
  { path: 'agenda/load-events-from-remote-api', component: AgendaLoadeventsfromremoteapi },
  { path: 'agenda/load-events-on-demand', component: AgendaLoadeventsondemand },
  { path: 'agenda/load-events-from-google-calendar', component: AgendaLoadeventsfromgooglecalendar },
  { path: 'agenda/event-data-structure', component: AgendaEventdatastructure },
  { path: 'agenda/event-hooks', component: AgendaEventhooks },
  { path: 'agenda/date-object-ISO-8601-moment', component: AgendaDateobjectISO8601moment },
  { path: 'agenda/recurring-events', component: AgendaRecurringevents },
  { path: 'agenda/daily-weekly-monthly-annual-agenda', component: AgendaDailyweeklymonthlyannualagenda },
  { path: 'agenda/event-content-customization', component: AgendaEventcontentcustomization },
  { path: 'agenda/full-event-customization', component: AgendaFulleventcustomization },
  { path: 'agenda/resource-filtering-in-header', component: AgendaResourcefilteringinheader },
  { path: 'agenda/customizing-header', component: AgendaCustomizingheader },
  { path: 'agenda/load-inline-data', component: AgendaLoadinlinedata },
  { path: 'agenda/daily-agenda-with-week-calendar', component: AgendaDailyagendawithweekcalendar },
  { path: 'agenda/synchronized-views', component: AgendaSynchronizedviews },
  { path: 'agenda/themes-ios-material-windows', component: AgendaThemesiosmaterialwindows },
  { path: 'agenda/gregorian-jalali-hijri', component: AgendaGregorianjalalihijri },
  { path: 'agenda/basic-usage', component: AgendaBasicusage },
  { path: 'agenda/custom-event-sort', component: AgendaCustomeventsort },
  { path: 'agenda/localization', component: AgendaLocalization },
  { path: 'agenda/setting-the-timezone', component: AgendaSettingthetimezone },
  { path: 'agenda/custom-event-tooltip', component: AgendaCustomeventtooltip },
  { path: 'agenda/printing-the-view', component: AgendaPrintingtheview },
  { path: 'agenda/sync-events-google-calendar', component: AgendaSynceventsgooglecalendar },
  { path: 'agenda/sync-events-outlook-calendar', component: AgendaSynceventsoutlookcalendar },
  { path: 'agenda/event-bulk-actions-edit-delete-update', component: AgendaEventbulkactionseditdeleteupdate },
  { path: 'agenda/searching-events-in-popup', component: AgendaSearchingeventsinpopup },
  { path: 'agenda/empty-state', component: AgendaEmptystate },
  { path: 'timeline/timeline-time-grid', component: TimelineTimelinetimegrid },
  { path: 'timeline/daily-weekly-monthly-yearly-timeline', component: TimelineDailyweeklymonthlyyearlytimeline },
  { path: 'timeline/switching-day-week-work-week-timeline', component: TimelineSwitchingdayweekworkweektimeline },
  { path: 'timeline/timeline-resource-details-side-panel-footer', component: TimelineTimelineresourcedetailssidepanelfooter },
  { path: 'timeline/timeline-resource-height', component: TimelineTimelineresourceheight },
  { path: 'timeline/timeline-custom-event-rendering', component: TimelineTimelinecustomeventrendering },
  { path: 'timeline/month-view', component: TimelineMonthview },
  { path: 'timeline/event-listing', component: TimelineEventlisting },
  { path: 'timeline/employee-shifts', component: TimelineEmployeeshifts },
  { path: 'timeline/resource-grouping-hierarchy', component: TimelineResourcegroupinghierarchy },
  { path: 'timeline/work-order-scheduling', component: TimelineWorkorderscheduling },
  { path: 'timeline/timezone-meeting-planner', component: TimelineTimezonemeetingplanner },
  { path: 'timeline/meal-planner', component: TimelineMealplanner },
  { path: 'timeline/shift-template', component: TimelineShifttemplate },
  { path: 'timeline/restaurant-shift-management', component: TimelineRestaurantshiftmanagement },
  { path: 'timeline/resource-header-template', component: TimelineResourceheadertemplate },
  { path: 'timeline/setting-the-timezone', component: TimelineSettingthetimezone },
  { path: 'timeline/multiple-timezone-support', component: TimelineMultipletimezonesupport },
  { path: 'timeline/custom-event-tooltip', component: TimelineCustomeventtooltip },
  { path: 'timeline/printing-the-view', component: TimelinePrintingtheview },
  {
    path: 'timeline/multiple-days-weeks-months-quarters-years-variable-resolution',
    component: TimelineMultipledaysweeksmonthsquartersyearsvariableresolution,
  },
  { path: 'timeline/move-resize-drag-drop-to-create-events', component: TimelineMoveresizedragdroptocreateevents },
  { path: 'timeline/event-data-structure', component: TimelineEventdatastructure },
  { path: 'timeline/date-object-ISO-8601-moment', component: TimelineDateobjectISO8601moment },
  { path: 'timeline/recurring-events', component: TimelineRecurringevents },
  { path: 'timeline/load-events-from-remote-api', component: TimelineLoadeventsfromremoteapi },
  { path: 'timeline/load-events-on-demand', component: TimelineLoadeventsondemand },
  { path: 'timeline/create-read-update-delete-CRUD', component: TimelineCreatereadupdatedeleteCRUD },
  { path: 'timeline/themes-ios-material-windows', component: TimelineThemesiosmaterialwindows },
  { path: 'timeline/gregorian-jalali-hijri', component: TimelineGregorianjalalihijri },
  { path: 'timeline/event-hooks', component: TimelineEventhooks },
  { path: 'timeline/localization', component: TimelineLocalization },
  { path: 'timeline/rtl-right-to-left', component: TimelineRtlrighttoleft },
  { path: 'timeline/load-inline-data', component: TimelineLoadinlinedata },
  { path: 'timeline/sync-events-google-calendar', component: TimelineSynceventsgooglecalendar },
  { path: 'timeline/sync-events-outlook-calendar', component: TimelineSynceventsoutlookcalendar },
  { path: 'timeline/disallow-past-event-creation', component: TimelineDisallowpasteventcreation },
  { path: 'timeline/load-events-from-google-calendar', component: TimelineLoadeventsfromgooglecalendar },
  { path: 'timeline/custom-range-view', component: TimelineCustomrangeview },
  { path: 'timeline/dynamically-color-and-invalidate', component: TimelineDynamicallycolorandinvalidate },
  { path: 'timeline/event-bulk-actions-edit-delete-update', component: TimelineEventbulkactionseditdeleteupdate },
  { path: 'timeline/loading-big-data-sets', component: TimelineLoadingbigdatasets },
  { path: 'timeline/connecting-linking-events-arrows', component: TimelineConnectinglinkingeventsarrows },
  { path: 'timeline/searching-events-in-sidebar', component: TimelineSearchingeventsinsidebar },
  { path: 'timeline/colors-invalids-css-class', component: TimelineColorsinvalidscssclass },
  {
    path: 'timeline/hour-day-week-month-quarter-year-header-footer-template',
    component: TimelineHourdayweekmonthquarteryearheaderfootertemplate,
  },
  { path: 'timeline/setting-row-height', component: TimelineSettingrowheight },
  { path: 'timeline/monthly-timetable-vertical-days-horizontal-times', component: TimelineMonthlytimetableverticaldayshorizontaltimes },
  { path: 'timeline/multi-classroom-timetable', component: TimelineMulticlassroomtimetable },
  { path: 'timeline/load-resources-on-demand', component: TimelineLoadresourcesondemand },
  { path: 'timeline/resource-data-structure', component: TimelineResourcedatastructure },
  { path: 'timeline/conditional-move-resize', component: TimelineConditionalmoveresize },
  { path: 'timeline/drag-drop-between-calendar-instances', component: TimelineDragdropbetweencalendarinstances },
  { path: 'timeline/prevent-double-booking-events', component: TimelinePreventdoublebookingevents },
  { path: 'timeline/compare-resources-fixed-at-top', component: TimelineCompareresourcesfixedattop },
  { path: 'timeline/assign-unassign-work-orders-fixed-top-row', component: TimelineAssignunassignworkordersfixedtoprow },
  { path: 'timeline/control-number-of-concurrently-shown-events', component: TimelineControlnumberofconcurrentlyshownevents },
  { path: 'timeline/flight-scheduling-two-synchronized-timelines', component: TimelineFlightschedulingtwosynchronizedtimelines },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
