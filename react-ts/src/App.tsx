import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DatetimeDateObjectISO8601Moment from './demos/datetime/datetime/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import DatetimeThemesIosMaterialWindows from './demos/datetime/datetime/themes-ios-material-windows/themes-ios-material-windows';
import DatetimeMobileDesktopUsage from './demos/datetime/datetime/mobile-desktop-usage/mobile-desktop-usage';
import DatetimeLocalization from './demos/datetime/datetime/localization/localization';
import DatetimeGregorianJalaliHijri from './demos/datetime/datetime/gregorian-jalali-hijri/gregorian-jalali-hijri';
import DatetimeResponsive from './demos/datetime/datetime/responsive/responsive';
import DatetimeMobileDesktopDisplay from './demos/datetime/datetime/mobile-desktop-display/mobile-desktop-display';
import DatetimeMinMaxRestrictions from './demos/datetime/datetime/min-max-restrictions/min-max-restrictions';
import DatetimeSingleSelect from './demos/datetime/datetime/single-select/single-select';
import DatetimeRecurringValues from './demos/datetime/datetime/recurring-values/recurring-values';
import DatetimeRangeSelect from './demos/datetime/datetime/range-select/range-select';
import DatetimeUsageOnInputOrInline from './demos/datetime/datetime/usage-on-input-or-inline/usage-on-input-or-inline';
import DatetimeRtlRightToLeft from './demos/datetime/datetime/rtl-right-to-left/rtl-right-to-left';
import DatetimeSettingThePickerTimezone from './demos/datetime/datetime/setting-the-picker-timezone/setting-the-picker-timezone';
import CalendarDateTimePicker from './demos/calendar/calendar/date-time-picker/date-time-picker';
import CalendarEventHooks from './demos/calendar/calendar/event-hooks/event-hooks';
import CalendarWeekView from './demos/calendar/calendar/week-view/week-view';
import CalendarDotsColorsLabels from './demos/calendar/calendar/dots-colors-labels/dots-colors-labels';
import CalendarFormattingReturnValues from './demos/calendar/calendar/formatting-return-values/formatting-return-values';
import CalendarDisabledInvalidValues from './demos/calendar/calendar/disabled-invalid-values/disabled-invalid-values';
import CalendarSettingValuesDefaults from './demos/calendar/calendar/setting-values-defaults/setting-values-defaults';
import CalendarDateObjectISO8601Moment from './demos/calendar/calendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import CalendarThemesIosMaterialWindows from './demos/calendar/calendar/themes-ios-material-windows/themes-ios-material-windows';
import CalendarWeekToMonth from './demos/calendar/calendar/week-to-month/week-to-month';
import CalendarLocalization from './demos/calendar/calendar/localization/localization';
import CalendarMobileDesktopUsage from './demos/calendar/calendar/mobile-desktop-usage/mobile-desktop-usage';
import CalendarGregorianJalaliHijri from './demos/calendar/calendar/gregorian-jalali-hijri/gregorian-jalali-hijri';
import CalendarResponsive from './demos/calendar/calendar/responsive/responsive';
import CalendarMobileDesktopDisplay from './demos/calendar/calendar/mobile-desktop-display/mobile-desktop-display';
import CalendarDatePicker from './demos/calendar/calendar/date-picker/date-picker';
import CalendarMultipleMonths from './demos/calendar/calendar/multiple-months/multiple-months';
import CalendarMonthChangeDirectionWeekNumbersOuterDays from './demos/calendar/calendar/month-change-direction-week-numbers-outer-days/month-change-direction-week-numbers-outer-days';
import CalendarMinMaxRestrictions from './demos/calendar/calendar/min-max-restrictions/min-max-restrictions';
import CalendarSingleSelect from './demos/calendar/calendar/single-select/single-select';
import CalendarMultipleSelect from './demos/calendar/calendar/multiple-select/multiple-select';
import CalendarRecurringValues from './demos/calendar/calendar/recurring-values/recurring-values';
import CalendarCustomizingHeader from './demos/calendar/calendar/customizing-header/customizing-header';
import CalendarRangeSelect from './demos/calendar/calendar/range-select/range-select';
import CalendarHalfDayStyling from './demos/calendar/calendar/half-day-styling/half-day-styling';
import CalendarCustomizeMarkedDayShapes from './demos/calendar/calendar/customize-marked-day-shapes/customize-marked-day-shapes';
import CalendarUsageOnInputOrInline from './demos/calendar/calendar/usage-on-input-or-inline/usage-on-input-or-inline';
import CalendarRtlRightToLeft from './demos/calendar/calendar/rtl-right-to-left/rtl-right-to-left';
import CalendarAppointmentBooking from './demos/calendar/calendar/appointment-booking/appointment-booking';
import CalendarActivityCalendar from './demos/calendar/calendar/activity-calendar/activity-calendar';
import CalendarWeekSelect from './demos/calendar/calendar/week-select/week-select';
import CalendarQuarterYearView from './demos/calendar/calendar/quarter-year-view/quarter-year-view';
import CalendarSettingThePickerTimezone from './demos/calendar/calendar/setting-the-picker-timezone/setting-the-picker-timezone';
import DatetimeDatePicker from './demos/datetime/datetime/date-picker/date-picker';
import DatetimeDateTimePicker from './demos/datetime/datetime/date-time-picker/date-time-picker';
import DatetimeDisabledInvalidValues from './demos/datetime/datetime/disabled-invalid-values/disabled-invalid-values';
import DatetimeEventHooks from './demos/datetime/datetime/event-hooks/event-hooks';
import DatetimeFormattingReturnValues from './demos/datetime/datetime/formatting-return-values/formatting-return-values';
import DatetimeMonthYearPicker from './demos/datetime/datetime/month-year-picker/month-year-picker';
import DatetimeSettingValuesDefaults from './demos/datetime/datetime/setting-values-defaults/setting-values-defaults';
import DatetimeTimePicker from './demos/datetime/datetime/time-picker/time-picker';
import DatetimeTimeValueSteps from './demos/datetime/datetime/time-value-steps/time-value-steps';
import SelectMobileDesktopDisplay from './demos/select/select/mobile-desktop-display/mobile-desktop-display';
import SelectSingleSelect from './demos/select/select/single-select/single-select';
import SelectResponsive from './demos/select/select/responsive/responsive';
import SelectRtlRightToLeft from './demos/select/select/rtl-right-to-left/rtl-right-to-left';
import SelectDisabledInvalidValues from './demos/select/select/disabled-invalid-values/disabled-invalid-values';
import SelectFilteringValues from './demos/select/select/filtering-values/filtering-values';
import SelectDataSources from './demos/select/select/data-sources/data-sources';
import SelectLinkedHierarchicalPickers from './demos/select/select/linked-hierarchical-pickers/linked-hierarchical-pickers';
import SelectItemTemplating from './demos/select/select/item-templating/item-templating';
import SelectImageText from './demos/select/select/image-text/image-text';
import RangeDisabledInvalidValues from './demos/range/range/disabled-invalid-values/disabled-invalid-values';
import RangeFlightBooking from './demos/range/range/flight-booking/flight-booking';
import RangePresets from './demos/range/range/presets/presets';
import RangeEventHooks from './demos/range/range/event-hooks/event-hooks';
import RangeDotsColorsLabels from './demos/range/range/dots-colors-labels/dots-colors-labels';
import RangeDateObjectISO8601Moment from './demos/range/range/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import RangeThemesIosMaterialWindows from './demos/range/range/themes-ios-material-windows/themes-ios-material-windows';
import RangeGregorianJalaliHijri from './demos/range/range/gregorian-jalali-hijri/gregorian-jalali-hijri';
import RangeMobileDesktopUsage from './demos/range/range/mobile-desktop-usage/mobile-desktop-usage';
import RangeResponsive from './demos/range/range/responsive/responsive';
import RangeMobileDesktopDisplay from './demos/range/range/mobile-desktop-display/mobile-desktop-display';
import RangeMinMaxRestrictions from './demos/range/range/min-max-restrictions/min-max-restrictions';
import RangeCalendarScrollerDropdown from './demos/range/range/calendar-scroller-dropdown/calendar-scroller-dropdown';
import RangeUsageOnInputOrInline from './demos/range/range/usage-on-input-or-inline/usage-on-input-or-inline';
import RangeDateRange from './demos/range/range/date-range/date-range';
import RangeTimeRange from './demos/range/range/time-range/time-range';
import RangeDateTimeRange from './demos/range/range/date-time-range/date-time-range';
import RangeWeekMonthViewScrollingDirection from './demos/range/range/week-month-view-scrolling-direction/week-month-view-scrolling-direction';
import RangeFormattingReturnValues from './demos/range/range/formatting-return-values/formatting-return-values';
import RangeCustomizingLabelsSelection from './demos/range/range/customizing-labels-selection/customizing-labels-selection';
import RangeMinMaxLength from './demos/range/range/min-max-length/min-max-length';
import RangeRecurringValues from './demos/range/range/recurring-values/recurring-values';
import RangeHalfDayStyling from './demos/range/range/half-day-styling/half-day-styling';
import RangeCustomizeMarkedDayShapes from './demos/range/range/customize-marked-day-shapes/customize-marked-day-shapes';
import RangeLocalization from './demos/range/range/localization/localization';
import RangeAddingEventStartEnd from './demos/range/range/adding-event-start-end/adding-event-start-end';
import RangeRtlRightToLeft from './demos/range/range/rtl-right-to-left/rtl-right-to-left';
//////
import RangeDateFilteringWithPredefinedRanges from './demos/range/range/date-filtering-with-predefined-ranges/date-filtering-with-predefined-ranges';
import RangeBookRentalMonthsAhead from './demos/range/range/book-rental-months-ahead/book-rental-months-ahead';
import RangeSettingThePickerTimezone from './demos/range/range/setting-the-picker-timezone/setting-the-picker-timezone';
import AlertsNotificationsAlert from './demos/forms/alerts-notifications/alert/alert';
import AlertsNotificationsNotifications from './demos/forms/alerts-notifications/notifications/notifications';
import FormsMobile from './demos/forms/forms/mobile/mobile';
import FormsResponsive from './demos/forms/forms/responsive/responsive';
import FormsThemesIosMaterialWindows from './demos/forms/forms/themes-ios-material-windows/themes-ios-material-windows';
import FormsDesktop from './demos/forms/forms/desktop/desktop';
import FormsPopup from './demos/forms/forms/popup/popup';
import FormsAlertConfirmPrompt from './demos/forms/forms/alert-confirm-prompt/alert-confirm-prompt';
import FormsNotifications from './demos/forms/forms/notifications/notifications';
import FormsButtons from './demos/forms/forms/buttons/buttons';
import FormsSegmented from './demos/forms/forms/segmented/segmented';
import FormsStepper from './demos/forms/forms/stepper/stepper';
import FormsButtonSegmentedStepperColors from './demos/forms/forms/button-segmented-stepper-colors/button-segmented-stepper-colors';
import FormsInputsTextAreasDateFields from './demos/forms/forms/inputs-text-areas-date-fields/inputs-text-areas-date-fields';
import FormsInputLabelTypes from './demos/forms/forms/input-label-types/input-label-types';
import FormsCheckbox from './demos/forms/forms/checkbox/checkbox';
import FormsSwitch from './demos/forms/forms/switch/switch';
import FormsRadioButton from './demos/forms/forms/radio-button/radio-button';
import EventcalendarEventHooks from './demos/eventcalendar/eventcalendar/event-hooks/event-hooks';
import EventcalendarLoadEventsFromRemoteApi from './demos/eventcalendar/eventcalendar/load-events-from-remote-api/load-events-from-remote-api';
import EventcalendarDesktopMonthView from './demos/eventcalendar/eventcalendar/desktop-month-view/desktop-month-view';
import EventcalendarLoadEventsOnDemand from './demos/eventcalendar/eventcalendar/load-events-on-demand/load-events-on-demand';
import EventcalendarMobileMonthView from './demos/eventcalendar/eventcalendar/mobile-month-view/mobile-month-view';
import EventcalendarMonthWeekView from './demos/eventcalendar/eventcalendar/month-week-view/month-week-view';
import EventcalendarDateObjectISO8601Moment from './demos/eventcalendar/eventcalendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import EventcalendarSwitchingDayWeekMonthView from './demos/eventcalendar/eventcalendar/switching-day-week-month-view/switching-day-week-month-view';
import EventcalendarResponsiveMonthView from './demos/eventcalendar/eventcalendar/responsive-month-view/responsive-month-view';
import EventcalendarEventPopover from './demos/eventcalendar/eventcalendar/event-popover/event-popover';
import EventcalendarLocalization from './demos/eventcalendar/eventcalendar/localization/localization';
import EventcalendarEventLabels from './demos/eventcalendar/eventcalendar/event-labels/event-labels';
import EventcalendarGregorianJalaliHijri from './demos/eventcalendar/eventcalendar/gregorian-jalali-hijri/gregorian-jalali-hijri';
import EventcalendarEventDataStructure from './demos/eventcalendar/eventcalendar/event-data-structure/event-data-structure';
import EventcalendarThemesIosMaterialWindows from './demos/eventcalendar/eventcalendar/themes-ios-material-windows/themes-ios-material-windows';
import EventcalendarRecurringEvents from './demos/eventcalendar/eventcalendar/recurring-events/recurring-events';
import EventcalendarLoadEventsFromGoogleCalendar from './demos/eventcalendar/eventcalendar/load-events-from-google-calendar/load-events-from-google-calendar';
import EventcalendarCustomizeEventPopover from './demos/eventcalendar/eventcalendar/customize-event-popover/customize-event-popover';
import EventcalendarCustomizeLabelLookAndFeel from './demos/eventcalendar/eventcalendar/customize-label-look-and-feel/customize-label-look-and-feel';
import EventcalendarCustomizingHeader from './demos/eventcalendar/eventcalendar/customizing-header/customizing-header';
import EventcalendarResourceFilteringInHeader from './demos/eventcalendar/eventcalendar/resource-filtering-in-header/resource-filtering-in-header';
import EventcalendarLoadInlineData from './demos/eventcalendar/eventcalendar/load-inline-data/load-inline-data';
import EventcalendarMoveResizeDragDropToCreateEvents from './demos/eventcalendar/eventcalendar/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import EventcalendarCreateReadUpdateDeleteCRUD from './demos/eventcalendar/eventcalendar/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import EventcalendarBlockedDaysRanges from './demos/eventcalendar/eventcalendar/blocked-days-ranges/blocked-days-ranges';
import EventcalendarExternalDragDropScheduleUnschedule from './demos/eventcalendar/eventcalendar/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import EventcalendarExternalEventPresets from './demos/eventcalendar/eventcalendar/external-event-presets/external-event-presets';
import EventcalendarColoredCellBackground from './demos/eventcalendar/eventcalendar/colored-cell-background/colored-cell-background';
import EventcalendarCustomEventSort from './demos/eventcalendar/eventcalendar/custom-event-sort/custom-event-sort';
import EventcalendarSettingTheTimezone from './demos/eventcalendar/eventcalendar/setting-the-timezone/setting-the-timezone';
import EventcalendarMultipleTimezoneSupport from './demos/eventcalendar/eventcalendar/multiple-timezone-support/multiple-timezone-support';
import EventcalendarRecurringEventAddEditDialog from './demos/eventcalendar/eventcalendar/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import EventcalendarQuarterYearView from './demos/eventcalendar/eventcalendar/quarter-year-view/quarter-year-view';
import EventcalendarCustomEventTooltip from './demos/eventcalendar/eventcalendar/custom-event-tooltip/custom-event-tooltip';
import EventcalendarPrintingTheView from './demos/eventcalendar/eventcalendar/printing-the-view/printing-the-view';
import EventcalendarShowMoreAllLabels from './demos/eventcalendar/eventcalendar/show-more-all-labels/show-more-all-labels';
import EventcalendarSyncEventsGoogleCalendar from './demos/eventcalendar/eventcalendar/sync-events-google-calendar/sync-events-google-calendar';
import EventcalendarSyncEventsOutlookCalendar from './demos/eventcalendar/eventcalendar/sync-events-outlook-calendar/sync-events-outlook-calendar';
import EventcalendarDisallowPastEventCreation from './demos/eventcalendar/eventcalendar/disallow-past-event-creation/disallow-past-event-creation';
import EventcalendarEventBulkActionsEditDeleteUpdate from './demos/eventcalendar/eventcalendar/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import EventcalendarCutCopyPasteEventsBetweenCalendars from './demos/eventcalendar/eventcalendar/cut-copy-paste-events-between-calendars/cut-copy-paste-events-between-calendars';
import EventcalendarSearchingEventsInPopup from './demos/eventcalendar/eventcalendar/searching-events-in-popup/searching-events-in-popup';
import EventcalendarSearchingEventsInSidebar from './demos/eventcalendar/eventcalendar/searching-events-in-sidebar/searching-events-in-sidebar';
import EventcalendarConditionalMoveResize from './demos/eventcalendar/eventcalendar/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import EventcalendarDragDropBetweenCalendarInstances from './demos/eventcalendar/eventcalendar/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import EventcalendarPreventDoubleBookingEvents from './demos/eventcalendar/eventcalendar/prevent-double-booking-events/prevent-double-booking-events';
import SchedulerMobileDayView from './demos/eventcalendar/scheduler/mobile-day-view/mobile-day-view';
import SchedulerDesktopDayView from './demos/eventcalendar/scheduler/desktop-day-view/desktop-day-view';
import SchedulerDesktopWeekView from './demos/eventcalendar/scheduler/desktop-week-view/desktop-week-view';
import SchedulerMobileWeekView from './demos/eventcalendar/scheduler/mobile-week-view/mobile-week-view';
import SchedulerResponsiveDayWeekSchedule from './demos/eventcalendar/scheduler/responsive-day-week-schedule/responsive-day-week-schedule';
import SchedulerSwitchingCalendarSchedulerAgenda from './demos/eventcalendar/scheduler/switching-calendar-scheduler-agenda/switching-calendar-scheduler-agenda';
import SchedulerEventDataStructure from './demos/eventcalendar/scheduler/event-data-structure/event-data-structure';
import SchedulerLoadEventsOnDemand from './demos/eventcalendar/scheduler/load-events-on-demand/load-events-on-demand';
import SchedulerLoadEventsFromRemoteApi from './demos/eventcalendar/scheduler/load-events-from-remote-api/load-events-from-remote-api';
import SchedulerGregorianJalaliHijri from './demos/eventcalendar/scheduler/gregorian-jalali-hijri/gregorian-jalali-hijri';
import SchedulerEventHooks from './demos/eventcalendar/scheduler/event-hooks/event-hooks';
import SchedulerLocalization from './demos/eventcalendar/scheduler/localization/localization';
import SchedulerThemesIosMaterialWindows from './demos/eventcalendar/scheduler/themes-ios-material-windows/themes-ios-material-windows';
import SchedulerRecurringEvents from './demos/eventcalendar/scheduler/recurring-events/recurring-events';
import SchedulerLoadEventsFromGoogleCalendar from './demos/eventcalendar/scheduler/load-events-from-google-calendar/load-events-from-google-calendar';
import SchedulerDateObjectISO8601Moment from './demos/eventcalendar/scheduler/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import SchedulerCustomizingEvents from './demos/eventcalendar/scheduler/customizing-events/customizing-events';
import SchedulerResourceFilteringInHeader from './demos/eventcalendar/scheduler/resource-filtering-in-header/resource-filtering-in-header';
import SchedulerCustomizingHeader from './demos/eventcalendar/scheduler/customizing-header/customizing-header';
import SchedulerLoadInlineData from './demos/eventcalendar/scheduler/load-inline-data/load-inline-data';
import SchedulerMoveResizeDragDropToCreateEvents from './demos/eventcalendar/scheduler/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import SchedulerCreateReadUpdateDeleteCRUD from './demos/eventcalendar/scheduler/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import SchedulerPreventDoubleBookingEvents from './demos/eventcalendar/scheduler/prevent-double-booking-events/prevent-double-booking-events';
import SchedulerTimeOffBlockedRanges from './demos/eventcalendar/scheduler/time-off-blocked-ranges/time-off-blocked-ranges';
import SchedulerWorkWeekHours from './demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import SchedulerShowHideHoursDays from './demos/eventcalendar/scheduler/show-hide-hours-days/show-hide-hours-days';
import SchedulerDisableAllDayEvents from './demos/eventcalendar/scheduler/disable-all-day-events/disable-all-day-events';
import SchedulerExternalDragDropScheduleUnschedule from './demos/eventcalendar/scheduler/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import SchedulerExternalEventPresets from './demos/eventcalendar/scheduler/external-event-presets/external-event-presets';
import SchedulerColoredCellBackground from './demos/eventcalendar/scheduler/colored-cell-background/colored-cell-background';
import SchedulerResourceView from './demos/eventcalendar/scheduler/resource-view/resource-view';
import SchedulerGroupByResourceByDay from './demos/eventcalendar/scheduler/group-by-resource-by-day/group-by-resource-by-day';
import SchedulerSharedEventsAcrossResources from './demos/eventcalendar/scheduler/shared-events-across-resources/shared-events-across-resources';
import SchedulerDynamicAddRemoveResourcesFilter from './demos/eventcalendar/scheduler/dynamic-add-remove-resources-filter/dynamic-add-remove-resources-filter';
import SchedulerCustomResourceHeaderTemplate from './demos/eventcalendar/scheduler/custom-resource-header-template/custom-resource-header-template';
import SchedulerSettingTheTimezone from './demos/eventcalendar/scheduler/setting-the-timezone/setting-the-timezone';
import SchedulerMultipleTimezoneSupport from './demos/eventcalendar/scheduler/multiple-timezone-support/multiple-timezone-support';
import SchedulerDateHeaderTemplate from './demos/eventcalendar/scheduler/date-header-template/date-header-template';
import SchedulerCustomEventTooltip from './demos/eventcalendar/scheduler/custom-event-tooltip/custom-event-tooltip';
import SchedulerPrintingTheView from './demos/eventcalendar/scheduler/printing-the-view/printing-the-view';
import SchedulerDisplayMultipleDaysWeeks from './demos/eventcalendar/scheduler/display-multiple-days-weeks/display-multiple-days-weeks';
import SchedulerRecurringEventAddEditDialog from './demos/eventcalendar/scheduler/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import SchedulerSyncEventsGoogleCalendar from './demos/eventcalendar/scheduler/sync-events-google-calendar/sync-events-google-calendar';
import SchedulerSyncEventsOutlookCalendar from './demos/eventcalendar/scheduler/sync-events-outlook-calendar/sync-events-outlook-calendar';
import SchedulerDisallowPastEventCreation from './demos/eventcalendar/scheduler/disallow-past-event-creation/disallow-past-event-creation';
import SchedulerCustomRangeView from './demos/eventcalendar/scheduler/custom-range-view/custom-range-view';
import SchedulerShowMultipleTimezones from './demos/eventcalendar/scheduler/show-multiple-timezones/show-multiple-timezones';
import SchedulerEventBulkActionsEditDeleteUpdate from './demos/eventcalendar/scheduler/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import SchedulerSearchingEventsInSidebar from './demos/eventcalendar/scheduler/searching-events-in-sidebar/searching-events-in-sidebar';
import SchedulerColorsInvalidsCssClass from './demos/eventcalendar/scheduler/colors-invalids-css-class/colors-invalids-css-class';
import SchedulerResourceDataStructure from './demos/eventcalendar/scheduler/resource-data-structure/resource-data-structure';
import SchedulerDoctorsAppointment from './demos/eventcalendar/scheduler/doctors-appointment/doctors-appointment';
import SchedulerConditionalMoveResize from './demos/eventcalendar/scheduler/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import SchedulerDragDropBetweenCalendarInstances from './demos/eventcalendar/scheduler/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import SchedulerControlNumberOfConcurrentlyShownEvents from './demos/eventcalendar/scheduler/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import AgendaLoadEventsFromRemoteApi from './demos/eventcalendar/agenda/load-events-from-remote-api/load-events-from-remote-api';
import AgendaLoadEventsOnDemand from './demos/eventcalendar/agenda/load-events-on-demand/load-events-on-demand';
import AgendaLoadEventsFromGoogleCalendar from './demos/eventcalendar/agenda/load-events-from-google-calendar/load-events-from-google-calendar';
import AgendaEventDataStructure from './demos/eventcalendar/agenda/event-data-structure/event-data-structure';
import AgendaEventHooks from './demos/eventcalendar/agenda/event-hooks/event-hooks';
import AgendaDateObjectISO8601Moment from './demos/eventcalendar/agenda/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import AgendaRecurringEvents from './demos/eventcalendar/agenda/recurring-events/recurring-events';
import AgendaDailyWeeklyMonthlyAnnualAgenda from './demos/eventcalendar/agenda/daily-weekly-monthly-annual-agenda/daily-weekly-monthly-annual-agenda';
import AgendaEventContentCustomization from './demos/eventcalendar/agenda/event-content-customization/event-content-customization';
import AgendaFullEventCustomization from './demos/eventcalendar/agenda/full-event-customization/full-event-customization';
import AgendaResourceFilteringInHeader from './demos/eventcalendar/agenda/resource-filtering-in-header/resource-filtering-in-header';
import AgendaCustomizingHeader from './demos/eventcalendar/agenda/customizing-header/customizing-header';
import AgendaLoadInlineData from './demos/eventcalendar/agenda/load-inline-data/load-inline-data';
import AgendaDailyAgendaWithWeekCalendar from './demos/eventcalendar/agenda/daily-agenda-with-week-calendar/daily-agenda-with-week-calendar';
import AgendaSynchronizedViews from './demos/eventcalendar/agenda/synchronized-views/synchronized-views';
import AgendaThemesIosMaterialWindows from './demos/eventcalendar/agenda/themes-ios-material-windows/themes-ios-material-windows';
import AgendaGregorianJalaliHijri from './demos/eventcalendar/agenda/gregorian-jalali-hijri/gregorian-jalali-hijri';
import AgendaBasicUsage from './demos/eventcalendar/agenda/basic-usage/basic-usage';
import AgendaCustomEventSort from './demos/eventcalendar/agenda/custom-event-sort/custom-event-sort';
import AgendaLocalization from './demos/eventcalendar/agenda/localization/localization';
import AgendaSettingTheTimezone from './demos/eventcalendar/agenda/setting-the-timezone/setting-the-timezone';
import AgendaCustomEventTooltip from './demos/eventcalendar/agenda/custom-event-tooltip/custom-event-tooltip';
import AgendaPrintingTheView from './demos/eventcalendar/agenda/printing-the-view/printing-the-view';
import AgendaSyncEventsGoogleCalendar from './demos/eventcalendar/agenda/sync-events-google-calendar/sync-events-google-calendar';
import AgendaSyncEventsOutlookCalendar from './demos/eventcalendar/agenda/sync-events-outlook-calendar/sync-events-outlook-calendar';
import AgendaEventBulkActionsEditDeleteUpdate from './demos/eventcalendar/agenda/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import AgendaSearchingEventsInPopup from './demos/eventcalendar/agenda/searching-events-in-popup/searching-events-in-popup';
import AgendaEmptyState from './demos/eventcalendar/agenda/empty-state/empty-state';
import TimelineTimelineTimeGrid from './demos/eventcalendar/timeline/timeline-time-grid/timeline-time-grid';
import TimelineDailyWeeklyMonthlyYearlyTimeline from './demos/eventcalendar/timeline/daily-weekly-monthly-yearly-timeline/daily-weekly-monthly-yearly-timeline';
import TimelineSwitchingDayWeekWorkWeekTimeline from './demos/eventcalendar/timeline/switching-day-week-work-week-timeline/switching-day-week-work-week-timeline';
import TimelineTimelineResourceDetailsSidePanelFooter from './demos/eventcalendar/timeline/timeline-resource-details-side-panel-footer/timeline-resource-details-side-panel-footer';
import TimelineTimelineResourceHeight from './demos/eventcalendar/timeline/timeline-resource-height/timeline-resource-height';
import TimelineTimelineCustomEventRendering from './demos/eventcalendar/timeline/timeline-custom-event-rendering/timeline-custom-event-rendering';
import TimelineMonthView from './demos/eventcalendar/timeline/month-view/month-view';
import TimelineEventListing from './demos/eventcalendar/timeline/event-listing/event-listing';
import TimelineEmployeeShifts from './demos/eventcalendar/timeline/employee-shifts/employee-shifts';
import TimelineResourceGroupingHierarchy from './demos/eventcalendar/timeline/resource-grouping-hierarchy/resource-grouping-hierarchy';
import TimelineWorkOrderScheduling from './demos/eventcalendar/timeline/work-order-scheduling/work-order-scheduling';
import TimelineTimezoneMeetingPlanner from './demos/eventcalendar/timeline/timezone-meeting-planner/timezone-meeting-planner';
import TimelineMealPlanner from './demos/eventcalendar/timeline/meal-planner/meal-planner';
import TimelineShiftTemplate from './demos/eventcalendar/timeline/shift-template/shift-template';
import TimelineRestaurantShiftManagement from './demos/eventcalendar/timeline/restaurant-shift-management/restaurant-shift-management';
import TimelineResourceHeaderTemplate from './demos/eventcalendar/timeline/resource-header-template/resource-header-template';
import TimelineSettingTheTimezone from './demos/eventcalendar/timeline/setting-the-timezone/setting-the-timezone';
import TimelineMultipleTimezoneSupport from './demos/eventcalendar/timeline/multiple-timezone-support/multiple-timezone-support';
import TimelineCustomEventTooltip from './demos/eventcalendar/timeline/custom-event-tooltip/custom-event-tooltip';
import TimelinePrintingTheView from './demos/eventcalendar/timeline/printing-the-view/printing-the-view';
import TimelineMultipleDaysWeeksMonthsQuartersYearsVariableResolution from './demos/eventcalendar/timeline/multiple-days-weeks-months-quarters-years-variable-resolution/multiple-days-weeks-months-quarters-years-variable-resolution';
import TimelineMoveResizeDragDropToCreateEvents from './demos/eventcalendar/timeline/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import TimelineEventDataStructure from './demos/eventcalendar/timeline/event-data-structure/event-data-structure';
import TimelineDateObjectISO8601Moment from './demos/eventcalendar/timeline/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import TimelineRecurringEvents from './demos/eventcalendar/timeline/recurring-events/recurring-events';
import TimelineLoadEventsFromRemoteApi from './demos/eventcalendar/timeline/load-events-from-remote-api/load-events-from-remote-api';
import TimelineLoadEventsOnDemand from './demos/eventcalendar/timeline/load-events-on-demand/load-events-on-demand';
import TimelineCreateReadUpdateDeleteCRUD from './demos/eventcalendar/timeline/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import TimelineThemesIosMaterialWindows from './demos/eventcalendar/timeline/themes-ios-material-windows/themes-ios-material-windows';
import TimelineGregorianJalaliHijri from './demos/eventcalendar/timeline/gregorian-jalali-hijri/gregorian-jalali-hijri';
import TimelineEventHooks from './demos/eventcalendar/timeline/event-hooks/event-hooks';
import TimelineLocalization from './demos/eventcalendar/timeline/localization/localization';
import TimelineRtlRightToLeft from './demos/eventcalendar/timeline/rtl-right-to-left/rtl-right-to-left';
import TimelineLoadInlineData from './demos/eventcalendar/timeline/load-inline-data/load-inline-data';
import TimelineSyncEventsGoogleCalendar from './demos/eventcalendar/timeline/sync-events-google-calendar/sync-events-google-calendar';
import TimelineSyncEventsOutlookCalendar from './demos/eventcalendar/timeline/sync-events-outlook-calendar/sync-events-outlook-calendar';
import TimelineDisallowPastEventCreation from './demos/eventcalendar/timeline/disallow-past-event-creation/disallow-past-event-creation';
import TimelineLoadEventsFromGoogleCalendar from './demos/eventcalendar/timeline/load-events-from-google-calendar/load-events-from-google-calendar';
import TimelineCustomRangeView from './demos/eventcalendar/timeline/custom-range-view/custom-range-view';
import TimelineDynamicallyColorAndInvalidate from './demos/eventcalendar/timeline/dynamically-color-and-invalidate/dynamically-color-and-invalidate';
import TimelineEventBulkActionsEditDeleteUpdate from './demos/eventcalendar/timeline/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import TimelineLoadingBigDataSets from './demos/eventcalendar/timeline/loading-big-data-sets/loading-big-data-sets';
import TimelineConnectingLinkingEventsArrows from './demos/eventcalendar/timeline/connecting-linking-events-arrows/connecting-linking-events-arrows';
import TimelineSearchingEventsInSidebar from './demos/eventcalendar/timeline/searching-events-in-sidebar/searching-events-in-sidebar';
import TimelineColorsInvalidsCssClass from './demos/eventcalendar/timeline/colors-invalids-css-class/colors-invalids-css-class';
import TimelineHourDayWeekMonthQuarterYearHeaderFooterTemplate from './demos/eventcalendar/timeline/hour-day-week-month-quarter-year-header-footer-template/hour-day-week-month-quarter-year-header-footer-template';
import TimelineSettingRowHeight from './demos/eventcalendar/timeline/setting-row-height/setting-row-height';
import TimelineMonthlyTimetableVerticalDaysHorizontalTimes from './demos/eventcalendar/timeline/monthly-timetable-vertical-days-horizontal-times/monthly-timetable-vertical-days-horizontal-times';
import TimelineMultiClassroomTimetable from './demos/eventcalendar/timeline/multi-classroom-timetable/multi-classroom-timetable';
import TimelineLoadResourcesOnDemand from './demos/eventcalendar/timeline/load-resources-on-demand/load-resources-on-demand';
import TimelineResourceDataStructure from './demos/eventcalendar/timeline/resource-data-structure/resource-data-structure';
import TimelineConditionalMoveResize from './demos/eventcalendar/timeline/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import TimelineDragDropBetweenCalendarInstances from './demos/eventcalendar/timeline/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import TimelinePreventDoubleBookingEvents from './demos/eventcalendar/timeline/prevent-double-booking-events/prevent-double-booking-events';
import TimelineCompareResourcesFixedAtTop from './demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top';
import TimelineAssignUnassignWorkOrdersFixedTopRow from './demos/eventcalendar/timeline/assign-unassign-work-orders-fixed-top-row/assign-unassign-work-orders-fixed-top-row';
import TimelineControlNumberOfConcurrentlyShownEvents from './demos/eventcalendar/timeline/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import TimelineFlightSchedulingTwoSynchronizedTimelines from './demos/eventcalendar/timeline/flight-scheduling-two-synchronized-timelines/flight-scheduling-two-synchronized-timelines';
import SelectCountryPicker from './demos/select/select/country-picker/country-picker';
import SelectEventHooks from './demos/select/select/event-hooks/event-hooks';
import SelectGroupOptions from './demos/select/select/group-options/group-options';
import SelectLocalization from './demos/select/select/localization/localization';
import SelectMobileDesktopUsage from './demos/select/select/mobile-desktop-usage/mobile-desktop-usage';
import SelectMultipleLines from './demos/select/select/multiple-lines/multiple-lines';
import SelectMultipleSelect from './demos/select/select/multiple-select/multiple-select';
import SelectSettingValuesDefaults from './demos/select/select/setting-values-defaults/setting-values-defaults';
import SelectThemesIosMaterialWindows from './demos/select/select/themes-ios-material-windows/themes-ios-material-windows';
import Root from './routes/root';

import './App.css';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
    { path: '/datetime/date-picker', element: <DatetimeDatePicker /> },
    {
      path: '/datetime/disabled-invalid-values',
      element: <DatetimeDisabledInvalidValues />,
    },
    { path: '/datetime/time-picker', element: <DatetimeTimePicker /> },
    { path: '/datetime/month-year-picker', element: <DatetimeMonthYearPicker /> },
    { path: '/datetime/date-time-picker', element: <DatetimeDateTimePicker /> },
    { path: '/datetime/event-hooks', element: <DatetimeEventHooks /> },
    { path: '/datetime/time-value-steps', element: <DatetimeTimeValueSteps /> },
    {
      path: '/datetime/formatting-return-values',
      element: <DatetimeFormattingReturnValues />,
    },
    {
      path: '/datetime/setting-values-defaults',
      element: <DatetimeSettingValuesDefaults />,
    },
    {
      path: '/datetime/date-object-ISO-8601-moment',
      element: <DatetimeDateObjectISO8601Moment />,
    },
    {
      path: '/datetime/themes-ios-material-windows',
      element: <DatetimeThemesIosMaterialWindows />,
    },
    {
      path: '/datetime/mobile-desktop-usage',
      element: <DatetimeMobileDesktopUsage />,
    },
    { path: '/datetime/localization', element: <DatetimeLocalization /> },
    {
      path: '/datetime/gregorian-jalali-hijri',
      element: <DatetimeGregorianJalaliHijri />,
    },
    { path: '/datetime/responsive', element: <DatetimeResponsive /> },
    {
      path: '/datetime/mobile-desktop-display',
      element: <DatetimeMobileDesktopDisplay />,
    },
    {
      path: '/datetime/min-max-restrictions',
      element: <DatetimeMinMaxRestrictions />,
    },
    { path: '/datetime/single-select', element: <DatetimeSingleSelect /> },
    { path: '/datetime/recurring-values', element: <DatetimeRecurringValues /> },
    { path: '/datetime/range-select', element: <DatetimeRangeSelect /> },
    {
      path: '/datetime/usage-on-input-or-inline',
      element: <DatetimeUsageOnInputOrInline />,
    },
    { path: '/datetime/rtl-right-to-left', element: <DatetimeRtlRightToLeft /> },
    {
      path: '/datetime/setting-the-picker-timezone',
      element: <DatetimeSettingThePickerTimezone />,
    },
    { path: '/calendar/date-time-picker', element: <CalendarDateTimePicker /> },
    { path: '/calendar/event-hooks', element: <CalendarEventHooks /> },
    { path: '/calendar/week-view', element: <CalendarWeekView /> },
    { path: '/calendar/dots-colors-labels', element: <CalendarDotsColorsLabels /> },
    {
      path: '/calendar/formatting-return-values',
      element: <CalendarFormattingReturnValues />,
    },
    {
      path: '/calendar/disabled-invalid-values',
      element: <CalendarDisabledInvalidValues />,
    },
    {
      path: '/calendar/setting-values-defaults',
      element: <CalendarSettingValuesDefaults />,
    },
    {
      path: '/calendar/date-object-ISO-8601-moment',
      element: <CalendarDateObjectISO8601Moment />,
    },
    {
      path: '/calendar/themes-ios-material-windows',
      element: <CalendarThemesIosMaterialWindows />,
    },
    { path: '/calendar/week-to-month', element: <CalendarWeekToMonth /> },
    { path: '/calendar/localization', element: <CalendarLocalization /> },
    {
      path: '/calendar/mobile-desktop-usage',
      element: <CalendarMobileDesktopUsage />,
    },
    {
      path: '/calendar/gregorian-jalali-hijri',
      element: <CalendarGregorianJalaliHijri />,
    },
    { path: '/calendar/responsive', element: <CalendarResponsive /> },
    {
      path: '/calendar/mobile-desktop-display',
      element: <CalendarMobileDesktopDisplay />,
    },
    { path: '/calendar/date-picker', element: <CalendarDatePicker /> },
    { path: '/calendar/multiple-months', element: <CalendarMultipleMonths /> },
    {
      path: '/calendar/month-change-direction-week-numbers-outer-days',
      element: <CalendarMonthChangeDirectionWeekNumbersOuterDays />,
    },
    {
      path: '/calendar/min-max-restrictions',
      element: <CalendarMinMaxRestrictions />,
    },
    { path: '/calendar/single-select', element: <CalendarSingleSelect /> },
    { path: '/calendar/multiple-select', element: <CalendarMultipleSelect /> },
    { path: '/calendar/recurring-values', element: <CalendarRecurringValues /> },
    { path: '/calendar/customizing-header', element: <CalendarCustomizingHeader /> },
    { path: '/calendar/range-select', element: <CalendarRangeSelect /> },
    { path: '/calendar/half-day-styling', element: <CalendarHalfDayStyling /> },
    {
      path: '/calendar/customize-marked-day-shapes',
      element: <CalendarCustomizeMarkedDayShapes />,
    },
    {
      path: '/calendar/usage-on-input-or-inline',
      element: <CalendarUsageOnInputOrInline />,
    },
    { path: '/calendar/rtl-right-to-left', element: <CalendarRtlRightToLeft /> },
    {
      path: '/calendar/appointment-booking',
      element: <CalendarAppointmentBooking />,
    },
    { path: '/calendar/activity-calendar', element: <CalendarActivityCalendar /> },
    { path: '/calendar/week-select', element: <CalendarWeekSelect /> },
    { path: '/calendar/quarter-year-view', element: <CalendarQuarterYearView /> },
    {
      path: '/calendar/setting-the-picker-timezone',
      element: <CalendarSettingThePickerTimezone />,
    },
    { path: '/select/multiple-select', element: <SelectMultipleSelect /> },
    { path: '/select/multiple-lines', element: <SelectMultipleLines /> },
    { path: '/select/country-picker', element: <SelectCountryPicker /> },
    { path: '/select/event-hooks', element: <SelectEventHooks /> },
    {
      path: '/select/themes-ios-material-windows',
      element: <SelectThemesIosMaterialWindows />,
    },
    {
      path: '/select/setting-values-defaults',
      element: <SelectSettingValuesDefaults />,
    },
    { path: '/select/mobile-desktop-usage', element: <SelectMobileDesktopUsage /> },
    { path: '/select/group-options', element: <SelectGroupOptions /> },
    { path: '/select/localization', element: <SelectLocalization /> },
    {
      path: '/select/mobile-desktop-display',
      element: <SelectMobileDesktopDisplay />,
    },
    { path: '/select/single-select', element: <SelectSingleSelect /> },
    { path: '/select/responsive', element: <SelectResponsive /> },
    { path: '/select/rtl-right-to-left', element: <SelectRtlRightToLeft /> },
    {
      path: '/select/disabled-invalid-values',
      element: <SelectDisabledInvalidValues />,
    },
    { path: '/select/filtering-values', element: <SelectFilteringValues /> },
    { path: '/select/data-sources', element: <SelectDataSources /> },
    {
      path: '/select/linked-hierarchical-pickers',
      element: <SelectLinkedHierarchicalPickers />,
    },
    { path: '/select/item-templating', element: <SelectItemTemplating /> },
    { path: '/select/image-text', element: <SelectImageText /> },
    {
      path: '/range/disabled-invalid-values',
      element: <RangeDisabledInvalidValues />,
    },
    { path: '/range/flight-booking', element: <RangeFlightBooking /> },
    { path: '/range/presets', element: <RangePresets /> },
    { path: '/range/event-hooks', element: <RangeEventHooks /> },
    { path: '/range/dots-colors-labels', element: <RangeDotsColorsLabels /> },
    {
      path: '/range/date-object-ISO-8601-moment',
      element: <RangeDateObjectISO8601Moment />,
    },
    {
      path: '/range/themes-ios-material-windows',
      element: <RangeThemesIosMaterialWindows />,
    },
    {
      path: '/range/gregorian-jalali-hijri',
      element: <RangeGregorianJalaliHijri />,
    },
    { path: '/range/mobile-desktop-usage', element: <RangeMobileDesktopUsage /> },
    { path: '/range/responsive', element: <RangeResponsive /> },
    {
      path: '/range/mobile-desktop-display',
      element: <RangeMobileDesktopDisplay />,
    },
    { path: '/range/min-max-restrictions', element: <RangeMinMaxRestrictions /> },
    {
      path: '/range/calendar-scroller-dropdown',
      element: <RangeCalendarScrollerDropdown />,
    },
    {
      path: '/range/usage-on-input-or-inline',
      element: <RangeUsageOnInputOrInline />,
    },
    { path: '/range/date-range', element: <RangeDateRange /> },
    { path: '/range/time-range', element: <RangeTimeRange /> },
    { path: '/range/date-time-range', element: <RangeDateTimeRange /> },
    {
      path: '/range/week-month-view-scrolling-direction',
      element: <RangeWeekMonthViewScrollingDirection />,
    },
    {
      path: '/range/formatting-return-values',
      element: <RangeFormattingReturnValues />,
    },
    {
      path: '/range/customizing-labels-selection',
      element: <RangeCustomizingLabelsSelection />,
    },
    { path: '/range/min-max-length', element: <RangeMinMaxLength /> },
    { path: '/range/recurring-values', element: <RangeRecurringValues /> },
    { path: '/range/half-day-styling', element: <RangeHalfDayStyling /> },
    {
      path: '/range/customize-marked-day-shapes',
      element: <RangeCustomizeMarkedDayShapes />,
    },
    { path: '/range/localization', element: <RangeLocalization /> },
    { path: '/range/adding-event-start-end', element: <RangeAddingEventStartEnd /> },
    { path: '/range/rtl-right-to-left', element: <RangeRtlRightToLeft /> },
    //////
    {
      path: '/range/date-filtering-with-predefined-ranges',
      element: <RangeDateFilteringWithPredefinedRanges />,
    },
    {
      path: '/range/book-rental-months-ahead',
      element: <RangeBookRentalMonthsAhead />,
    },
    {
      path: '/range/setting-the-picker-timezone',
      element: <RangeSettingThePickerTimezone />,
    },
    { path: '/alerts-notifications/alert', element: <AlertsNotificationsAlert /> },
    {
      path: '/alerts-notifications/notifications',
      element: <AlertsNotificationsNotifications />,
    },
    { path: '/forms/mobile', element: <FormsMobile /> },
    { path: '/forms/responsive', element: <FormsResponsive /> },
    {
      path: '/forms/themes-ios-material-windows',
      element: <FormsThemesIosMaterialWindows />,
    },
    { path: '/forms/desktop', element: <FormsDesktop /> },
    { path: '/forms/popup', element: <FormsPopup /> },
    { path: '/forms/alert-confirm-prompt', element: <FormsAlertConfirmPrompt /> },
    { path: '/forms/notifications', element: <FormsNotifications /> },
    { path: '/forms/buttons', element: <FormsButtons /> },
    { path: '/forms/segmented', element: <FormsSegmented /> },
    { path: '/forms/stepper', element: <FormsStepper /> },
    {
      path: '/forms/button-segmented-stepper-colors',
      element: <FormsButtonSegmentedStepperColors />,
    },
    {
      path: '/forms/inputs-text-areas-date-fields',
      element: <FormsInputsTextAreasDateFields />,
    },
    { path: '/forms/input-label-types', element: <FormsInputLabelTypes /> },
    { path: '/forms/checkbox', element: <FormsCheckbox /> },
    { path: '/forms/switch', element: <FormsSwitch /> },
    { path: '/forms/radio-button', element: <FormsRadioButton /> },
    { path: '/eventcalendar/event-hooks', element: <EventcalendarEventHooks /> },
    {
      path: '/eventcalendar/load-events-from-remote-api',
      element: <EventcalendarLoadEventsFromRemoteApi />,
    },
    {
      path: '/eventcalendar/desktop-month-view',
      element: <EventcalendarDesktopMonthView />,
    },
    {
      path: '/eventcalendar/load-events-on-demand',
      element: <EventcalendarLoadEventsOnDemand />,
    },
    {
      path: '/eventcalendar/mobile-month-view',
      element: <EventcalendarMobileMonthView />,
    },
    {
      path: '/eventcalendar/month-week-view',
      element: <EventcalendarMonthWeekView />,
    },
    {
      path: '/eventcalendar/date-object-ISO-8601-moment',
      element: <EventcalendarDateObjectISO8601Moment />,
    },
    {
      path: '/eventcalendar/switching-day-week-month-view',
      element: <EventcalendarSwitchingDayWeekMonthView />,
    },
    {
      path: '/eventcalendar/responsive-month-view',
      element: <EventcalendarResponsiveMonthView />,
    },
    { path: '/eventcalendar/event-popover', element: <EventcalendarEventPopover /> },
    { path: '/eventcalendar/localization', element: <EventcalendarLocalization /> },
    { path: '/eventcalendar/event-labels', element: <EventcalendarEventLabels /> },
    {
      path: '/eventcalendar/gregorian-jalali-hijri',
      element: <EventcalendarGregorianJalaliHijri />,
    },
    {
      path: '/eventcalendar/event-data-structure',
      element: <EventcalendarEventDataStructure />,
    },
    {
      path: '/eventcalendar/themes-ios-material-windows',
      element: <EventcalendarThemesIosMaterialWindows />,
    },
    {
      path: '/eventcalendar/recurring-events',
      element: <EventcalendarRecurringEvents />,
    },
    {
      path: '/eventcalendar/load-events-from-google-calendar',
      element: <EventcalendarLoadEventsFromGoogleCalendar />,
    },
    {
      path: '/eventcalendar/customize-event-popover',
      element: <EventcalendarCustomizeEventPopover />,
    },
    {
      path: '/eventcalendar/customize-label-look-and-feel',
      element: <EventcalendarCustomizeLabelLookAndFeel />,
    },
    {
      path: '/eventcalendar/customizing-header',
      element: <EventcalendarCustomizingHeader />,
    },
    {
      path: '/eventcalendar/resource-filtering-in-header',
      element: <EventcalendarResourceFilteringInHeader />,
    },
    {
      path: '/eventcalendar/load-inline-data',
      element: <EventcalendarLoadInlineData />,
    },
    {
      path: '/eventcalendar/move-resize-drag-drop-to-create-events',
      element: <EventcalendarMoveResizeDragDropToCreateEvents />,
    },
    {
      path: '/eventcalendar/create-read-update-delete-CRUD',
      element: <EventcalendarCreateReadUpdateDeleteCRUD />,
    },
    {
      path: '/eventcalendar/blocked-days-ranges',
      element: <EventcalendarBlockedDaysRanges />,
    },
    {
      path: '/eventcalendar/external-drag-drop-schedule-unschedule',
      element: <EventcalendarExternalDragDropScheduleUnschedule />,
    },
    {
      path: '/eventcalendar/external-event-presets',
      element: <EventcalendarExternalEventPresets />,
    },
    {
      path: '/eventcalendar/colored-cell-background',
      element: <EventcalendarColoredCellBackground />,
    },
    {
      path: '/eventcalendar/custom-event-sort',
      element: <EventcalendarCustomEventSort />,
    },
    {
      path: '/eventcalendar/setting-the-timezone',
      element: <EventcalendarSettingTheTimezone />,
    },
    {
      path: '/eventcalendar/multiple-timezone-support',
      element: <EventcalendarMultipleTimezoneSupport />,
    },
    {
      path: '/eventcalendar/recurring-event-add-edit-dialog',
      element: <EventcalendarRecurringEventAddEditDialog />,
    },
    {
      path: '/eventcalendar/quarter-year-view',
      element: <EventcalendarQuarterYearView />,
    },
    {
      path: '/eventcalendar/custom-event-tooltip',
      element: <EventcalendarCustomEventTooltip />,
    },
    {
      path: '/eventcalendar/printing-the-view',
      element: <EventcalendarPrintingTheView />,
    },
    {
      path: '/eventcalendar/show-more-all-labels',
      element: <EventcalendarShowMoreAllLabels />,
    },
    {
      path: '/eventcalendar/sync-events-google-calendar',
      element: <EventcalendarSyncEventsGoogleCalendar />,
    },
    {
      path: '/eventcalendar/sync-events-outlook-calendar',
      element: <EventcalendarSyncEventsOutlookCalendar />,
    },
    {
      path: '/eventcalendar/disallow-past-event-creation',
      element: <EventcalendarDisallowPastEventCreation />,
    },
    {
      path: '/eventcalendar/event-bulk-actions-edit-delete-update',
      element: <EventcalendarEventBulkActionsEditDeleteUpdate />,
    },
    {
      path: '/eventcalendar/cut-copy-paste-events-between-calendars',
      element: <EventcalendarCutCopyPasteEventsBetweenCalendars />,
    },
    {
      path: '/eventcalendar/searching-events-in-popup',
      element: <EventcalendarSearchingEventsInPopup />,
    },
    {
      path: '/eventcalendar/searching-events-in-sidebar',
      element: <EventcalendarSearchingEventsInSidebar />,
    },
    {
      path: '/eventcalendar/conditional-move-resize',
      element: <EventcalendarConditionalMoveResize />,
    },
    {
      path: '/eventcalendar/drag-drop-between-calendar-instances',
      element: <EventcalendarDragDropBetweenCalendarInstances />,
    },
    {
      path: '/eventcalendar/prevent-double-booking-events',
      element: <EventcalendarPreventDoubleBookingEvents />,
    },
    { path: '/scheduler/mobile-day-view', element: <SchedulerMobileDayView /> },
    { path: '/scheduler/desktop-day-view', element: <SchedulerDesktopDayView /> },
    { path: '/scheduler/desktop-week-view', element: <SchedulerDesktopWeekView /> },
    { path: '/scheduler/mobile-week-view', element: <SchedulerMobileWeekView /> },
    {
      path: '/scheduler/responsive-day-week-schedule',
      element: <SchedulerResponsiveDayWeekSchedule />,
    },
    {
      path: '/scheduler/switching-calendar-scheduler-agenda',
      element: <SchedulerSwitchingCalendarSchedulerAgenda />,
    },
    {
      path: '/scheduler/event-data-structure',
      element: <SchedulerEventDataStructure />,
    },
    {
      path: '/scheduler/load-events-on-demand',
      element: <SchedulerLoadEventsOnDemand />,
    },
    {
      path: '/scheduler/load-events-from-remote-api',
      element: <SchedulerLoadEventsFromRemoteApi />,
    },
    {
      path: '/scheduler/gregorian-jalali-hijri',
      element: <SchedulerGregorianJalaliHijri />,
    },
    { path: '/scheduler/event-hooks', element: <SchedulerEventHooks /> },
    { path: '/scheduler/localization', element: <SchedulerLocalization /> },
    {
      path: '/scheduler/themes-ios-material-windows',
      element: <SchedulerThemesIosMaterialWindows />,
    },
    { path: '/scheduler/recurring-events', element: <SchedulerRecurringEvents /> },
    {
      path: '/scheduler/load-events-from-google-calendar',
      element: <SchedulerLoadEventsFromGoogleCalendar />,
    },
    {
      path: '/scheduler/date-object-ISO-8601-moment',
      element: <SchedulerDateObjectISO8601Moment />,
    },
    {
      path: '/scheduler/customizing-events',
      element: <SchedulerCustomizingEvents />,
    },
    {
      path: '/scheduler/resource-filtering-in-header',
      element: <SchedulerResourceFilteringInHeader />,
    },
    {
      path: '/scheduler/customizing-header',
      element: <SchedulerCustomizingHeader />,
    },
    { path: '/scheduler/load-inline-data', element: <SchedulerLoadInlineData /> },
    {
      path: '/scheduler/move-resize-drag-drop-to-create-events',
      element: <SchedulerMoveResizeDragDropToCreateEvents />,
    },
    {
      path: '/scheduler/create-read-update-delete-CRUD',
      element: <SchedulerCreateReadUpdateDeleteCRUD />,
    },
    {
      path: '/scheduler/prevent-double-booking-events',
      element: <SchedulerPreventDoubleBookingEvents />,
    },
    {
      path: '/scheduler/time-off-blocked-ranges',
      element: <SchedulerTimeOffBlockedRanges />,
    },
    { path: '/scheduler/work-week-hours', element: <SchedulerWorkWeekHours /> },
    {
      path: '/scheduler/show-hide-hours-days',
      element: <SchedulerShowHideHoursDays />,
    },
    {
      path: '/scheduler/disable-all-day-events',
      element: <SchedulerDisableAllDayEvents />,
    },
    {
      path: '/scheduler/external-drag-drop-schedule-unschedule',
      element: <SchedulerExternalDragDropScheduleUnschedule />,
    },
    {
      path: '/scheduler/external-event-presets',
      element: <SchedulerExternalEventPresets />,
    },
    {
      path: '/scheduler/colored-cell-background',
      element: <SchedulerColoredCellBackground />,
    },
    { path: '/scheduler/resource-view', element: <SchedulerResourceView /> },
    {
      path: '/scheduler/group-by-resource-by-day',
      element: <SchedulerGroupByResourceByDay />,
    },
    {
      path: '/scheduler/shared-events-across-resources',
      element: <SchedulerSharedEventsAcrossResources />,
    },
    {
      path: '/scheduler/dynamic-add-remove-resources-filter',
      element: <SchedulerDynamicAddRemoveResourcesFilter />,
    },
    {
      path: '/scheduler/custom-resource-header-template',
      element: <SchedulerCustomResourceHeaderTemplate />,
    },
    {
      path: '/scheduler/setting-the-timezone',
      element: <SchedulerSettingTheTimezone />,
    },
    {
      path: '/scheduler/multiple-timezone-support',
      element: <SchedulerMultipleTimezoneSupport />,
    },
    {
      path: '/scheduler/date-header-template',
      element: <SchedulerDateHeaderTemplate />,
    },
    {
      path: '/scheduler/custom-event-tooltip',
      element: <SchedulerCustomEventTooltip />,
    },
    { path: '/scheduler/printing-the-view', element: <SchedulerPrintingTheView /> },
    {
      path: '/scheduler/display-multiple-days-weeks',
      element: <SchedulerDisplayMultipleDaysWeeks />,
    },
    {
      path: '/scheduler/recurring-event-add-edit-dialog',
      element: <SchedulerRecurringEventAddEditDialog />,
    },
    {
      path: '/scheduler/sync-events-google-calendar',
      element: <SchedulerSyncEventsGoogleCalendar />,
    },
    {
      path: '/scheduler/sync-events-outlook-calendar',
      element: <SchedulerSyncEventsOutlookCalendar />,
    },
    {
      path: '/scheduler/disallow-past-event-creation',
      element: <SchedulerDisallowPastEventCreation />,
    },
    { path: '/scheduler/custom-range-view', element: <SchedulerCustomRangeView /> },
    {
      path: '/scheduler/show-multiple-timezones',
      element: <SchedulerShowMultipleTimezones />,
    },
    {
      path: '/scheduler/event-bulk-actions-edit-delete-update',
      element: <SchedulerEventBulkActionsEditDeleteUpdate />,
    },
    {
      path: '/scheduler/searching-events-in-sidebar',
      element: <SchedulerSearchingEventsInSidebar />,
    },
    {
      path: '/scheduler/colors-invalids-css-class',
      element: <SchedulerColorsInvalidsCssClass />,
    },
    {
      path: '/scheduler/resource-data-structure',
      element: <SchedulerResourceDataStructure />,
    },
    {
      path: '/scheduler/doctors-appointment',
      element: <SchedulerDoctorsAppointment />,
    },
    {
      path: '/scheduler/conditional-move-resize',
      element: <SchedulerConditionalMoveResize />,
    },
    {
      path: '/scheduler/drag-drop-between-calendar-instances',
      element: <SchedulerDragDropBetweenCalendarInstances />,
    },
    {
      path: '/scheduler/control-number-of-concurrently-shown-events',
      element: <SchedulerControlNumberOfConcurrentlyShownEvents />,
    },
    {
      path: '/agenda/load-events-from-remote-api',
      element: <AgendaLoadEventsFromRemoteApi />,
    },
    { path: '/agenda/load-events-on-demand', element: <AgendaLoadEventsOnDemand /> },
    {
      path: '/agenda/load-events-from-google-calendar',
      element: <AgendaLoadEventsFromGoogleCalendar />,
    },
    { path: '/agenda/event-data-structure', element: <AgendaEventDataStructure /> },
    { path: '/agenda/event-hooks', element: <AgendaEventHooks /> },
    {
      path: '/agenda/date-object-ISO-8601-moment',
      element: <AgendaDateObjectISO8601Moment />,
    },
    { path: '/agenda/recurring-events', element: <AgendaRecurringEvents /> },
    {
      path: '/agenda/daily-weekly-monthly-annual-agenda',
      element: <AgendaDailyWeeklyMonthlyAnnualAgenda />,
    },
    {
      path: '/agenda/event-content-customization',
      element: <AgendaEventContentCustomization />,
    },
    {
      path: '/agenda/full-event-customization',
      element: <AgendaFullEventCustomization />,
    },
    {
      path: '/agenda/resource-filtering-in-header',
      element: <AgendaResourceFilteringInHeader />,
    },
    { path: '/agenda/customizing-header', element: <AgendaCustomizingHeader /> },
    { path: '/agenda/load-inline-data', element: <AgendaLoadInlineData /> },
    {
      path: '/agenda/daily-agenda-with-week-calendar',
      element: <AgendaDailyAgendaWithWeekCalendar />,
    },
    { path: '/agenda/synchronized-views', element: <AgendaSynchronizedViews /> },
    {
      path: '/agenda/themes-ios-material-windows',
      element: <AgendaThemesIosMaterialWindows />,
    },
    {
      path: '/agenda/gregorian-jalali-hijri',
      element: <AgendaGregorianJalaliHijri />,
    },
    { path: '/agenda/basic-usage', element: <AgendaBasicUsage /> },
    { path: '/agenda/custom-event-sort', element: <AgendaCustomEventSort /> },
    { path: '/agenda/localization', element: <AgendaLocalization /> },
    { path: '/agenda/setting-the-timezone', element: <AgendaSettingTheTimezone /> },
    { path: '/agenda/custom-event-tooltip', element: <AgendaCustomEventTooltip /> },
    { path: '/agenda/printing-the-view', element: <AgendaPrintingTheView /> },
    {
      path: '/agenda/sync-events-google-calendar',
      element: <AgendaSyncEventsGoogleCalendar />,
    },
    {
      path: '/agenda/sync-events-outlook-calendar',
      element: <AgendaSyncEventsOutlookCalendar />,
    },
    {
      path: '/agenda/event-bulk-actions-edit-delete-update',
      element: <AgendaEventBulkActionsEditDeleteUpdate />,
    },
    {
      path: '/agenda/searching-events-in-popup',
      element: <AgendaSearchingEventsInPopup />,
    },
    { path: '/agenda/empty-state', element: <AgendaEmptyState /> },
    { path: '/timeline/timeline-time-grid', element: <TimelineTimelineTimeGrid /> },
    {
      path: '/timeline/daily-weekly-monthly-yearly-timeline',
      element: <TimelineDailyWeeklyMonthlyYearlyTimeline />,
    },
    {
      path: '/timeline/switching-day-week-work-week-timeline',
      element: <TimelineSwitchingDayWeekWorkWeekTimeline />,
    },
    {
      path: '/timeline/timeline-resource-details-side-panel-footer',
      element: <TimelineTimelineResourceDetailsSidePanelFooter />,
    },
    {
      path: '/timeline/timeline-resource-height',
      element: <TimelineTimelineResourceHeight />,
    },
    {
      path: '/timeline/timeline-custom-event-rendering',
      element: <TimelineTimelineCustomEventRendering />,
    },
    { path: '/timeline/month-view', element: <TimelineMonthView /> },
    { path: '/timeline/event-listing', element: <TimelineEventListing /> },
    { path: '/timeline/employee-shifts', element: <TimelineEmployeeShifts /> },
    {
      path: '/timeline/resource-grouping-hierarchy',
      element: <TimelineResourceGroupingHierarchy />,
    },
    {
      path: '/timeline/work-order-scheduling',
      element: <TimelineWorkOrderScheduling />,
    },
    {
      path: '/timeline/timezone-meeting-planner',
      element: <TimelineTimezoneMeetingPlanner />,
    },
    { path: '/timeline/meal-planner', element: <TimelineMealPlanner /> },
    { path: '/timeline/shift-template', element: <TimelineShiftTemplate /> },
    {
      path: '/timeline/restaurant-shift-management',
      element: <TimelineRestaurantShiftManagement />,
    },
    {
      path: '/timeline/resource-header-template',
      element: <TimelineResourceHeaderTemplate />,
    },
    {
      path: '/timeline/setting-the-timezone',
      element: <TimelineSettingTheTimezone />,
    },
    {
      path: '/timeline/multiple-timezone-support',
      element: <TimelineMultipleTimezoneSupport />,
    },
    {
      path: '/timeline/custom-event-tooltip',
      element: <TimelineCustomEventTooltip />,
    },
    { path: '/timeline/printing-the-view', element: <TimelinePrintingTheView /> },
    {
      path: '/timeline/multiple-days-weeks-months-quarters-years-variable-resolution',
      element: <TimelineMultipleDaysWeeksMonthsQuartersYearsVariableResolution />,
    },
    {
      path: '/timeline/move-resize-drag-drop-to-create-events',
      element: <TimelineMoveResizeDragDropToCreateEvents />,
    },
    {
      path: '/timeline/event-data-structure',
      element: <TimelineEventDataStructure />,
    },
    {
      path: '/timeline/date-object-ISO-8601-moment',
      element: <TimelineDateObjectISO8601Moment />,
    },
    { path: '/timeline/recurring-events', element: <TimelineRecurringEvents /> },
    {
      path: '/timeline/load-events-from-remote-api',
      element: <TimelineLoadEventsFromRemoteApi />,
    },
    {
      path: '/timeline/load-events-on-demand',
      element: <TimelineLoadEventsOnDemand />,
    },
    {
      path: '/timeline/create-read-update-delete-CRUD',
      element: <TimelineCreateReadUpdateDeleteCRUD />,
    },
    {
      path: '/timeline/themes-ios-material-windows',
      element: <TimelineThemesIosMaterialWindows />,
    },
    {
      path: '/timeline/gregorian-jalali-hijri',
      element: <TimelineGregorianJalaliHijri />,
    },
    { path: '/timeline/event-hooks', element: <TimelineEventHooks /> },
    { path: '/timeline/localization', element: <TimelineLocalization /> },
    { path: '/timeline/rtl-right-to-left', element: <TimelineRtlRightToLeft /> },
    { path: '/timeline/load-inline-data', element: <TimelineLoadInlineData /> },
    {
      path: '/timeline/sync-events-google-calendar',
      element: <TimelineSyncEventsGoogleCalendar />,
    },
    {
      path: '/timeline/sync-events-outlook-calendar',
      element: <TimelineSyncEventsOutlookCalendar />,
    },
    {
      path: '/timeline/disallow-past-event-creation',
      element: <TimelineDisallowPastEventCreation />,
    },
    {
      path: '/timeline/load-events-from-google-calendar',
      element: <TimelineLoadEventsFromGoogleCalendar />,
    },
    { path: '/timeline/custom-range-view', element: <TimelineCustomRangeView /> },
    {
      path: '/timeline/dynamically-color-and-invalidate',
      element: <TimelineDynamicallyColorAndInvalidate />,
    },
    {
      path: '/timeline/event-bulk-actions-edit-delete-update',
      element: <TimelineEventBulkActionsEditDeleteUpdate />,
    },
    {
      path: '/timeline/loading-big-data-sets',
      element: <TimelineLoadingBigDataSets />,
    },
    {
      path: '/timeline/connecting-linking-events-arrows',
      element: <TimelineConnectingLinkingEventsArrows />,
    },
    {
      path: '/timeline/searching-events-in-sidebar',
      element: <TimelineSearchingEventsInSidebar />,
    },
    {
      path: '/timeline/colors-invalids-css-class',
      element: <TimelineColorsInvalidsCssClass />,
    },
    {
      path: '/timeline/hour-day-week-month-quarter-year-header-footer-template',
      element: <TimelineHourDayWeekMonthQuarterYearHeaderFooterTemplate />,
    },
    { path: '/timeline/setting-row-height', element: <TimelineSettingRowHeight /> },
    {
      path: '/timeline/monthly-timetable-vertical-days-horizontal-times',
      element: <TimelineMonthlyTimetableVerticalDaysHorizontalTimes />,
    },
    {
      path: '/timeline/multi-classroom-timetable',
      element: <TimelineMultiClassroomTimetable />,
    },
    {
      path: '/timeline/load-resources-on-demand',
      element: <TimelineLoadResourcesOnDemand />,
    },
    {
      path: '/timeline/resource-data-structure',
      element: <TimelineResourceDataStructure />,
    },
    {
      path: '/timeline/conditional-move-resize',
      element: <TimelineConditionalMoveResize />,
    },
    {
      path: '/timeline/drag-drop-between-calendar-instances',
      element: <TimelineDragDropBetweenCalendarInstances />,
    },
    {
      path: '/timeline/prevent-double-booking-events',
      element: <TimelinePreventDoubleBookingEvents />,
    },
    {
      path: '/timeline/compare-resources-fixed-at-top',
      element: <TimelineCompareResourcesFixedAtTop />,
    },
    {
      path: '/timeline/assign-unassign-work-orders-fixed-top-row',
      element: <TimelineAssignUnassignWorkOrdersFixedTopRow />,
    },
    {
      path: '/timeline/control-number-of-concurrently-shown-events',
      element: <TimelineControlNumberOfConcurrentlyShownEvents />,
    },
    {
      path: '/timeline/flight-scheduling-two-synchronized-timelines',
      element: <TimelineFlightSchedulingTwoSynchronizedTimelines />,
    },
  ]);
  return (
    <>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </>
  );
}

export default App;
