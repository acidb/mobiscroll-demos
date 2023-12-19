import { Router } from 'html5-history-router';
import './style.css';
import '@mobiscroll/javascript/dist/css/mobiscroll.min.css';

import { enhance } from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

import HomePage from './pages/home/home';
import DatetimeDatePicker from './src/demos/datetime/datetime/date-picker/date-picker';
import DatetimeDisabledInvalidValues from './src/demos/datetime/datetime/disabled-invalid-values/disabled-invalid-values';
import DatetimeTimePicker from './src/demos/datetime/datetime/time-picker/time-picker';
import DatetimeMonthYearPicker from './src/demos/datetime/datetime/month-year-picker/month-year-picker';
import DatetimeDateTimePicker from './src/demos/datetime/datetime/date-time-picker/date-time-picker';
import DatetimeEventHooks from './src/demos/datetime/datetime/event-hooks/event-hooks';
import DatetimeTimeValueSteps from './src/demos/datetime/datetime/time-value-steps/time-value-steps';
import DatetimeFormattingReturnValues from './src/demos/datetime/datetime/formatting-return-values/formatting-return-values';
import DatetimeSettingValuesDefaults from './src/demos/datetime/datetime/setting-values-defaults/setting-values-defaults';
import DatetimeDateObjectISO8601Moment from './src/demos/datetime/datetime/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import DatetimeThemesIosMaterialWindows from './src/demos/datetime/datetime/themes-ios-material-windows/themes-ios-material-windows';
import DatetimeMobileDesktopUsage from './src/demos/datetime/datetime/mobile-desktop-usage/mobile-desktop-usage';
import DatetimeLocalization from './src/demos/datetime/datetime/localization/localization';
import DatetimeGregorianJalaliHijri from './src/demos/datetime/datetime/gregorian-jalali-hijri/gregorian-jalali-hijri';
import DatetimeResponsive from './src/demos/datetime/datetime/responsive/responsive';
import DatetimeMobileDesktopDisplay from './src/demos/datetime/datetime/mobile-desktop-display/mobile-desktop-display';
import DatetimeMinMaxRestrictions from './src/demos/datetime/datetime/min-max-restrictions/min-max-restrictions';
import DatetimeSingleSelect from './src/demos/datetime/datetime/single-select/single-select';
import DatetimeRecurringValues from './src/demos/datetime/datetime/recurring-values/recurring-values';
import DatetimeRangeSelect from './src/demos/datetime/datetime/range-select/range-select';
import DatetimeUsageOnInputOrInline from './src/demos/datetime/datetime/usage-on-input-or-inline/usage-on-input-or-inline';
import DatetimeRtlRightToLeft from './src/demos/datetime/datetime/rtl-right-to-left/rtl-right-to-left';
import DatetimeSettingThePickerTimezone from './src/demos/datetime/datetime/setting-the-picker-timezone/setting-the-picker-timezone';
import CalendarDateTimePicker from './src/demos/calendar/calendar/date-time-picker/date-time-picker';
import CalendarEventHooks from './src/demos/calendar/calendar/event-hooks/event-hooks';
import CalendarWeekView from './src/demos/calendar/calendar/week-view/week-view';
import CalendarDotsColorsLabels from './src/demos/calendar/calendar/dots-colors-labels/dots-colors-labels';
import CalendarFormattingReturnValues from './src/demos/calendar/calendar/formatting-return-values/formatting-return-values';
import CalendarDisabledInvalidValues from './src/demos/calendar/calendar/disabled-invalid-values/disabled-invalid-values';
import CalendarSettingValuesDefaults from './src/demos/calendar/calendar/setting-values-defaults/setting-values-defaults';
import CalendarDateObjectISO8601Moment from './src/demos/calendar/calendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import CalendarThemesIosMaterialWindows from './src/demos/calendar/calendar/themes-ios-material-windows/themes-ios-material-windows';
import CalendarWeekToMonth from './src/demos/calendar/calendar/week-to-month/week-to-month';
import CalendarLocalization from './src/demos/calendar/calendar/localization/localization';
import CalendarMobileDesktopUsage from './src/demos/calendar/calendar/mobile-desktop-usage/mobile-desktop-usage';
import CalendarGregorianJalaliHijri from './src/demos/calendar/calendar/gregorian-jalali-hijri/gregorian-jalali-hijri';
import CalendarResponsive from './src/demos/calendar/calendar/responsive/responsive';
import CalendarMobileDesktopDisplay from './src/demos/calendar/calendar/mobile-desktop-display/mobile-desktop-display';
import CalendarDatePicker from './src/demos/calendar/calendar/date-picker/date-picker';
import CalendarMultipleMonths from './src/demos/calendar/calendar/multiple-months/multiple-months';
import CalendarMonthChangeDirectionWeekNumbersOuterDays from './src/demos/calendar/calendar/month-change-direction-week-numbers-outer-days/month-change-direction-week-numbers-outer-days';
import CalendarMinMaxRestrictions from './src/demos/calendar/calendar/min-max-restrictions/min-max-restrictions';
import CalendarSingleSelect from './src/demos/calendar/calendar/single-select/single-select';
import CalendarMultipleSelect from './src/demos/calendar/calendar/multiple-select/multiple-select';
import CalendarRecurringValues from './src/demos/calendar/calendar/recurring-values/recurring-values';
import CalendarCustomizingHeader from './src/demos/calendar/calendar/customizing-header/customizing-header';
import CalendarRangeSelect from './src/demos/calendar/calendar/range-select/range-select';
import CalendarHalfDayStyling from './src/demos/calendar/calendar/half-day-styling/half-day-styling';
import CalendarCustomizeMarkedDayShapes from './src/demos/calendar/calendar/customize-marked-day-shapes/customize-marked-day-shapes';
import CalendarUsageOnInputOrInline from './src/demos/calendar/calendar/usage-on-input-or-inline/usage-on-input-or-inline';
import CalendarRtlRightToLeft from './src/demos/calendar/calendar/rtl-right-to-left/rtl-right-to-left';
import CalendarAppointmentBooking from './src/demos/calendar/calendar/appointment-booking/appointment-booking';
import CalendarActivityCalendar from './src/demos/calendar/calendar/activity-calendar/activity-calendar';
import CalendarWeekSelect from './src/demos/calendar/calendar/week-select/week-select';
import CalendarQuarterYearView from './src/demos/calendar/calendar/quarter-year-view/quarter-year-view';
import CalendarSettingThePickerTimezone from './src/demos/calendar/calendar/setting-the-picker-timezone/setting-the-picker-timezone';
import SelectMultipleSelect from './src/demos/select/select/multiple-select/multiple-select';
import SelectMultipleLines from './src/demos/select/select/multiple-lines/multiple-lines';
import SelectCountryPicker from './src/demos/select/select/country-picker/country-picker';
import SelectEventHooks from './src/demos/select/select/event-hooks/event-hooks';
import SelectThemesIosMaterialWindows from './src/demos/select/select/themes-ios-material-windows/themes-ios-material-windows';
import SelectSettingValuesDefaults from './src/demos/select/select/setting-values-defaults/setting-values-defaults';
import SelectMobileDesktopUsage from './src/demos/select/select/mobile-desktop-usage/mobile-desktop-usage';
import SelectGroupOptions from './src/demos/select/select/group-options/group-options';
import SelectLocalization from './src/demos/select/select/localization/localization';
import SelectMobileDesktopDisplay from './src/demos/select/select/mobile-desktop-display/mobile-desktop-display';
import SelectSingleSelect from './src/demos/select/select/single-select/single-select';
import SelectResponsive from './src/demos/select/select/responsive/responsive';
import SelectRtlRightToLeft from './src/demos/select/select/rtl-right-to-left/rtl-right-to-left';
import SelectDisabledInvalidValues from './src/demos/select/select/disabled-invalid-values/disabled-invalid-values';
import SelectFilteringValues from './src/demos/select/select/filtering-values/filtering-values';
import SelectDataSources from './src/demos/select/select/data-sources/data-sources';
import SelectLinkedHierarchicalPickers from './src/demos/select/select/linked-hierarchical-pickers/linked-hierarchical-pickers';
import SelectItemTemplating from './src/demos/select/select/item-templating/item-templating';
import SelectImageText from './src/demos/select/select/image-text/image-text';
import RangeDisabledInvalidValues from './src/demos/range/range/disabled-invalid-values/disabled-invalid-values';
import RangeFlightBooking from './src/demos/range/range/flight-booking/flight-booking';
import RangePresets from './src/demos/range/range/presets/presets';
import RangeEventHooks from './src/demos/range/range/event-hooks/event-hooks';
import RangeDotsColorsLabels from './src/demos/range/range/dots-colors-labels/dots-colors-labels';
import RangeDateObjectISO8601Moment from './src/demos/range/range/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import RangeThemesIosMaterialWindows from './src/demos/range/range/themes-ios-material-windows/themes-ios-material-windows';
import RangeGregorianJalaliHijri from './src/demos/range/range/gregorian-jalali-hijri/gregorian-jalali-hijri';
import RangeMobileDesktopUsage from './src/demos/range/range/mobile-desktop-usage/mobile-desktop-usage';
import RangeResponsive from './src/demos/range/range/responsive/responsive';
import RangeMobileDesktopDisplay from './src/demos/range/range/mobile-desktop-display/mobile-desktop-display';
import RangeMinMaxRestrictions from './src/demos/range/range/min-max-restrictions/min-max-restrictions';
import RangeCalendarScrollerDropdown from './src/demos/range/range/calendar-scroller-dropdown/calendar-scroller-dropdown';
import RangeUsageOnInputOrInline from './src/demos/range/range/usage-on-input-or-inline/usage-on-input-or-inline';
import RangeDateRange from './src/demos/range/range/date-range/date-range';
import RangeTimeRange from './src/demos/range/range/time-range/time-range';
import RangeDateTimeRange from './src/demos/range/range/date-time-range/date-time-range';
import RangeWeekMonthViewScrollingDirection from './src/demos/range/range/week-month-view-scrolling-direction/week-month-view-scrolling-direction';
import RangeFormattingReturnValues from './src/demos/range/range/formatting-return-values/formatting-return-values';
import RangeCustomizingLabelsSelection from './src/demos/range/range/customizing-labels-selection/customizing-labels-selection';
import RangeMinMaxLength from './src/demos/range/range/min-max-length/min-max-length';
import RangeRecurringValues from './src/demos/range/range/recurring-values/recurring-values';
import RangeHalfDayStyling from './src/demos/range/range/half-day-styling/half-day-styling';
import RangeCustomizeMarkedDayShapes from './src/demos/range/range/customize-marked-day-shapes/customize-marked-day-shapes';
import RangeLocalization from './src/demos/range/range/localization/localization';
import RangeAddingEventStartEnd from './src/demos/range/range/adding-event-start-end/adding-event-start-end';
import RangeRtlRightToLeft from './src/demos/range/range/rtl-right-to-left/rtl-right-to-left';
import RangeDateFilteringWithPredefinedRanges from './src/demos/range/range/date-filtering-with-predefined-ranges/date-filtering-with-predefined-ranges';
import RangeBookRentalMonthsAhead from './src/demos/range/range/book-rental-months-ahead/book-rental-months-ahead';
import RangeSettingThePickerTimezone from './src/demos/range/range/setting-the-picker-timezone/setting-the-picker-timezone';
import AlertsNotificationsAlert from './src/demos/forms/alerts-notifications/alert/alert';
import AlertsNotificationsNotifications from './src/demos/forms/alerts-notifications/notifications/notifications';
import FormsMobile from './src/demos/forms/forms/mobile/mobile';
import FormsResponsive from './src/demos/forms/forms/responsive/responsive';
import FormsThemesIosMaterialWindows from './src/demos/forms/forms/themes-ios-material-windows/themes-ios-material-windows';
import FormsDesktop from './src/demos/forms/forms/desktop/desktop';
import FormsPopup from './src/demos/forms/forms/popup/popup';
import FormsAlertConfirmPrompt from './src/demos/forms/forms/alert-confirm-prompt/alert-confirm-prompt';
import FormsNotifications from './src/demos/forms/forms/notifications/notifications';
import FormsButtons from './src/demos/forms/forms/buttons/buttons';
import FormsSegmented from './src/demos/forms/forms/segmented/segmented';
import FormsStepper from './src/demos/forms/forms/stepper/stepper';
import FormsButtonSegmentedStepperColors from './src/demos/forms/forms/button-segmented-stepper-colors/button-segmented-stepper-colors';
import FormsInputsTextAreasDateFields from './src/demos/forms/forms/inputs-text-areas-date-fields/inputs-text-areas-date-fields';
import FormsInputLabelTypes from './src/demos/forms/forms/input-label-types/input-label-types';
import FormsCheckbox from './src/demos/forms/forms/checkbox/checkbox';
import FormsSwitch from './src/demos/forms/forms/switch/switch';
import FormsRadioButton from './src/demos/forms/forms/radio-button/radio-button';
import EventcalendarEventHooks from './src/demos/eventcalendar/eventcalendar/event-hooks/event-hooks';
import EventcalendarLoadEventsFromRemoteApi from './src/demos/eventcalendar/eventcalendar/load-events-from-remote-api/load-events-from-remote-api';
import EventcalendarDesktopMonthView from './src/demos/eventcalendar/eventcalendar/desktop-month-view/desktop-month-view';
import EventcalendarLoadEventsOnDemand from './src/demos/eventcalendar/eventcalendar/load-events-on-demand/load-events-on-demand';
import EventcalendarMobileMonthView from './src/demos/eventcalendar/eventcalendar/mobile-month-view/mobile-month-view';
import EventcalendarMonthWeekView from './src/demos/eventcalendar/eventcalendar/month-week-view/month-week-view';
import EventcalendarDateObjectISO8601Moment from './src/demos/eventcalendar/eventcalendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import EventcalendarSwitchingDayWeekMonthView from './src/demos/eventcalendar/eventcalendar/switching-day-week-month-view/switching-day-week-month-view';
import EventcalendarResponsiveMonthView from './src/demos/eventcalendar/eventcalendar/responsive-month-view/responsive-month-view';
import EventcalendarEventPopover from './src/demos/eventcalendar/eventcalendar/event-popover/event-popover';
import EventcalendarLocalization from './src/demos/eventcalendar/eventcalendar/localization/localization';
import EventcalendarEventLabels from './src/demos/eventcalendar/eventcalendar/event-labels/event-labels';
import EventcalendarGregorianJalaliHijri from './src/demos/eventcalendar/eventcalendar/gregorian-jalali-hijri/gregorian-jalali-hijri';
import EventcalendarEventDataStructure from './src/demos/eventcalendar/eventcalendar/event-data-structure/event-data-structure';
import EventcalendarThemesIosMaterialWindows from './src/demos/eventcalendar/eventcalendar/themes-ios-material-windows/themes-ios-material-windows';
import EventcalendarRecurringEvents from './src/demos/eventcalendar/eventcalendar/recurring-events/recurring-events';
import EventcalendarLoadEventsFromGoogleCalendar from './src/demos/eventcalendar/eventcalendar/load-events-from-google-calendar/load-events-from-google-calendar';
import EventcalendarCustomizeEventPopover from './src/demos/eventcalendar/eventcalendar/customize-event-popover/customize-event-popover';
import EventcalendarCustomizeLabelLookAndFeel from './src/demos/eventcalendar/eventcalendar/customize-label-look-and-feel/customize-label-look-and-feel';
import EventcalendarCustomizingHeader from './src/demos/eventcalendar/eventcalendar/customizing-header/customizing-header';
import EventcalendarResourceFilteringInHeader from './src/demos/eventcalendar/eventcalendar/resource-filtering-in-header/resource-filtering-in-header';
import EventcalendarLoadInlineData from './src/demos/eventcalendar/eventcalendar/load-inline-data/load-inline-data';
import EventcalendarMoveResizeDragDropToCreateEvents from './src/demos/eventcalendar/eventcalendar/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import EventcalendarCreateReadUpdateDeleteCRUD from './src/demos/eventcalendar/eventcalendar/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import EventcalendarBlockedDaysRanges from './src/demos/eventcalendar/eventcalendar/blocked-days-ranges/blocked-days-ranges';
import EventcalendarExternalDragDropScheduleUnschedule from './src/demos/eventcalendar/eventcalendar/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import EventcalendarExternalEventPresets from './src/demos/eventcalendar/eventcalendar/external-event-presets/external-event-presets';
import EventcalendarColoredCellBackground from './src/demos/eventcalendar/eventcalendar/colored-cell-background/colored-cell-background';
import EventcalendarCustomEventSort from './src/demos/eventcalendar/eventcalendar/custom-event-sort/custom-event-sort';
import EventcalendarSettingTheTimezone from './src/demos/eventcalendar/eventcalendar/setting-the-timezone/setting-the-timezone';
import EventcalendarMultipleTimezoneSupport from './src/demos/eventcalendar/eventcalendar/multiple-timezone-support/multiple-timezone-support';
import EventcalendarRecurringEventAddEditDialog from './src/demos/eventcalendar/eventcalendar/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import EventcalendarQuarterYearView from './src/demos/eventcalendar/eventcalendar/quarter-year-view/quarter-year-view';
import EventcalendarCustomEventTooltip from './src/demos/eventcalendar/eventcalendar/custom-event-tooltip/custom-event-tooltip';
import EventcalendarPrintingTheView from './src/demos/eventcalendar/eventcalendar/printing-the-view/printing-the-view';
import EventcalendarShowMoreAllLabels from './src/demos/eventcalendar/eventcalendar/show-more-all-labels/show-more-all-labels';
import EventcalendarSyncEventsGoogleCalendar from './src/demos/eventcalendar/eventcalendar/sync-events-google-calendar/sync-events-google-calendar';
import EventcalendarSyncEventsOutlookCalendar from './src/demos/eventcalendar/eventcalendar/sync-events-outlook-calendar/sync-events-outlook-calendar';
import EventcalendarDisallowPastEventCreation from './src/demos/eventcalendar/eventcalendar/disallow-past-event-creation/disallow-past-event-creation';
import EventcalendarEventBulkActionsEditDeleteUpdate from './src/demos/eventcalendar/eventcalendar/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import EventcalendarCutCopyPasteEventsBetweenCalendars from './src/demos/eventcalendar/eventcalendar/cut-copy-paste-events-between-calendars/cut-copy-paste-events-between-calendars';
import EventcalendarSearchingEventsInPopup from './src/demos/eventcalendar/eventcalendar/searching-events-in-popup/searching-events-in-popup';
import EventcalendarSearchingEventsInSidebar from './src/demos/eventcalendar/eventcalendar/searching-events-in-sidebar/searching-events-in-sidebar';
import EventcalendarConditionalMoveResize from './src/demos/eventcalendar/eventcalendar/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import EventcalendarDragDropBetweenCalendarInstances from './src/demos/eventcalendar/eventcalendar/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import EventcalendarPreventDoubleBookingEvents from './src/demos/eventcalendar/eventcalendar/prevent-double-booking-events/prevent-double-booking-events';
import SchedulerMobileDayView from './src/demos/eventcalendar/scheduler/mobile-day-view/mobile-day-view';
import SchedulerDesktopDayView from './src/demos/eventcalendar/scheduler/desktop-day-view/desktop-day-view';
import SchedulerDesktopWeekView from './src/demos/eventcalendar/scheduler/desktop-week-view/desktop-week-view';
import SchedulerMobileWeekView from './src/demos/eventcalendar/scheduler/mobile-week-view/mobile-week-view';
import SchedulerResponsiveDayWeekSchedule from './src/demos/eventcalendar/scheduler/responsive-day-week-schedule/responsive-day-week-schedule';
import SchedulerSwitchingCalendarSchedulerAgenda from './src/demos/eventcalendar/scheduler/switching-calendar-scheduler-agenda/switching-calendar-scheduler-agenda';
import SchedulerEventDataStructure from './src/demos/eventcalendar/scheduler/event-data-structure/event-data-structure';
import SchedulerLoadEventsOnDemand from './src/demos/eventcalendar/scheduler/load-events-on-demand/load-events-on-demand';
import SchedulerLoadEventsFromRemoteApi from './src/demos/eventcalendar/scheduler/load-events-from-remote-api/load-events-from-remote-api';
import SchedulerGregorianJalaliHijri from './src/demos/eventcalendar/scheduler/gregorian-jalali-hijri/gregorian-jalali-hijri';
import SchedulerEventHooks from './src/demos/eventcalendar/scheduler/event-hooks/event-hooks';
import SchedulerLocalization from './src/demos/eventcalendar/scheduler/localization/localization';
import SchedulerThemesIosMaterialWindows from './src/demos/eventcalendar/scheduler/themes-ios-material-windows/themes-ios-material-windows';
import SchedulerRecurringEvents from './src/demos/eventcalendar/scheduler/recurring-events/recurring-events';
import SchedulerLoadEventsFromGoogleCalendar from './src/demos/eventcalendar/scheduler/load-events-from-google-calendar/load-events-from-google-calendar';
import SchedulerDateObjectISO8601Moment from './src/demos/eventcalendar/scheduler/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import SchedulerCustomizingEvents from './src/demos/eventcalendar/scheduler/customizing-events/customizing-events';
import SchedulerResourceFilteringInHeader from './src/demos/eventcalendar/scheduler/resource-filtering-in-header/resource-filtering-in-header';
import SchedulerCustomizingHeader from './src/demos/eventcalendar/scheduler/customizing-header/customizing-header';
import SchedulerLoadInlineData from './src/demos/eventcalendar/scheduler/load-inline-data/load-inline-data';
import SchedulerMoveResizeDragDropToCreateEvents from './src/demos/eventcalendar/scheduler/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import SchedulerCreateReadUpdateDeleteCRUD from './src/demos/eventcalendar/scheduler/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import SchedulerPreventDoubleBookingEvents from './src/demos/eventcalendar/scheduler/prevent-double-booking-events/prevent-double-booking-events';
import SchedulerTimeOffBlockedRanges from './src/demos/eventcalendar/scheduler/time-off-blocked-ranges/time-off-blocked-ranges';
import SchedulerWorkWeekHours from './src/demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import SchedulerShowHideHoursDays from './src/demos/eventcalendar/scheduler/show-hide-hours-days/show-hide-hours-days';
import SchedulerDisableAllDayEvents from './src/demos/eventcalendar/scheduler/disable-all-day-events/disable-all-day-events';
import SchedulerExternalDragDropScheduleUnschedule from './src/demos/eventcalendar/scheduler/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import SchedulerExternalEventPresets from './src/demos/eventcalendar/scheduler/external-event-presets/external-event-presets';
import SchedulerColoredCellBackground from './src/demos/eventcalendar/scheduler/colored-cell-background/colored-cell-background';
import SchedulerResourceView from './src/demos/eventcalendar/scheduler/resource-view/resource-view';
import SchedulerGroupByResourceByDay from './src/demos/eventcalendar/scheduler/group-by-resource-by-day/group-by-resource-by-day';
import SchedulerSharedEventsAcrossResources from './src/demos/eventcalendar/scheduler/shared-events-across-resources/shared-events-across-resources';
import SchedulerDynamicAddRemoveResourcesFilter from './src/demos/eventcalendar/scheduler/dynamic-add-remove-resources-filter/dynamic-add-remove-resources-filter';
import SchedulerCustomResourceHeaderTemplate from './src/demos/eventcalendar/scheduler/custom-resource-header-template/custom-resource-header-template';
import SchedulerSettingTheTimezone from './src/demos/eventcalendar/scheduler/setting-the-timezone/setting-the-timezone';
import SchedulerMultipleTimezoneSupport from './src/demos/eventcalendar/scheduler/multiple-timezone-support/multiple-timezone-support';
import SchedulerDateHeaderTemplate from './src/demos/eventcalendar/scheduler/date-header-template/date-header-template';
import SchedulerCustomEventTooltip from './src/demos/eventcalendar/scheduler/custom-event-tooltip/custom-event-tooltip';
import SchedulerPrintingTheView from './src/demos/eventcalendar/scheduler/printing-the-view/printing-the-view';
import SchedulerDisplayMultipleDaysWeeks from './src/demos/eventcalendar/scheduler/display-multiple-days-weeks/display-multiple-days-weeks';
import SchedulerRecurringEventAddEditDialog from './src/demos/eventcalendar/scheduler/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import SchedulerSyncEventsGoogleCalendar from './src/demos/eventcalendar/scheduler/sync-events-google-calendar/sync-events-google-calendar';
import SchedulerSyncEventsOutlookCalendar from './src/demos/eventcalendar/scheduler/sync-events-outlook-calendar/sync-events-outlook-calendar';
import SchedulerDisallowPastEventCreation from './src/demos/eventcalendar/scheduler/disallow-past-event-creation/disallow-past-event-creation';
import SchedulerCustomRangeView from './src/demos/eventcalendar/scheduler/custom-range-view/custom-range-view';
import SchedulerShowMultipleTimezones from './src/demos/eventcalendar/scheduler/show-multiple-timezones/show-multiple-timezones';
import SchedulerEventBulkActionsEditDeleteUpdate from './src/demos/eventcalendar/scheduler/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import SchedulerSearchingEventsInSidebar from './src/demos/eventcalendar/scheduler/searching-events-in-sidebar/searching-events-in-sidebar';
import SchedulerColorsInvalidsCssClass from './src/demos/eventcalendar/scheduler/colors-invalids-css-class/colors-invalids-css-class';
import SchedulerResourceDataStructure from './src/demos/eventcalendar/scheduler/resource-data-structure/resource-data-structure';
import SchedulerDoctorsAppointment from './src/demos/eventcalendar/scheduler/doctors-appointment/doctors-appointment';
import SchedulerConditionalMoveResize from './src/demos/eventcalendar/scheduler/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import SchedulerDragDropBetweenCalendarInstances from './src/demos/eventcalendar/scheduler/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import SchedulerControlNumberOfConcurrentlyShownEvents from './src/demos/eventcalendar/scheduler/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import AgendaLoadEventsFromRemoteApi from './src/demos/eventcalendar/agenda/load-events-from-remote-api/load-events-from-remote-api';
import AgendaLoadEventsOnDemand from './src/demos/eventcalendar/agenda/load-events-on-demand/load-events-on-demand';
import AgendaLoadEventsFromGoogleCalendar from './src/demos/eventcalendar/agenda/load-events-from-google-calendar/load-events-from-google-calendar';
import AgendaEventDataStructure from './src/demos/eventcalendar/agenda/event-data-structure/event-data-structure';
import AgendaEventHooks from './src/demos/eventcalendar/agenda/event-hooks/event-hooks';
import AgendaDateObjectISO8601Moment from './src/demos/eventcalendar/agenda/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import AgendaRecurringEvents from './src/demos/eventcalendar/agenda/recurring-events/recurring-events';
import AgendaDailyWeeklyMonthlyAnnualAgenda from './src/demos/eventcalendar/agenda/daily-weekly-monthly-annual-agenda/daily-weekly-monthly-annual-agenda';
import AgendaEventContentCustomization from './src/demos/eventcalendar/agenda/event-content-customization/event-content-customization';
import AgendaFullEventCustomization from './src/demos/eventcalendar/agenda/full-event-customization/full-event-customization';
import AgendaResourceFilteringInHeader from './src/demos/eventcalendar/agenda/resource-filtering-in-header/resource-filtering-in-header';
import AgendaCustomizingHeader from './src/demos/eventcalendar/agenda/customizing-header/customizing-header';
import AgendaLoadInlineData from './src/demos/eventcalendar/agenda/load-inline-data/load-inline-data';
import AgendaDailyAgendaWithWeekCalendar from './src/demos/eventcalendar/agenda/daily-agenda-with-week-calendar/daily-agenda-with-week-calendar';
import AgendaSynchronizedViews from './src/demos/eventcalendar/agenda/synchronized-views/synchronized-views';
import AgendaThemesIosMaterialWindows from './src/demos/eventcalendar/agenda/themes-ios-material-windows/themes-ios-material-windows';
import AgendaGregorianJalaliHijri from './src/demos/eventcalendar/agenda/gregorian-jalali-hijri/gregorian-jalali-hijri';
import AgendaBasicUsage from './src/demos/eventcalendar/agenda/basic-usage/basic-usage';
import AgendaCustomEventSort from './src/demos/eventcalendar/agenda/custom-event-sort/custom-event-sort';
import AgendaLocalization from './src/demos/eventcalendar/agenda/localization/localization';
import AgendaSettingTheTimezone from './src/demos/eventcalendar/agenda/setting-the-timezone/setting-the-timezone';
import AgendaCustomEventTooltip from './src/demos/eventcalendar/agenda/custom-event-tooltip/custom-event-tooltip';
import AgendaPrintingTheView from './src/demos/eventcalendar/agenda/printing-the-view/printing-the-view';
import AgendaSyncEventsGoogleCalendar from './src/demos/eventcalendar/agenda/sync-events-google-calendar/sync-events-google-calendar';
import AgendaSyncEventsOutlookCalendar from './src/demos/eventcalendar/agenda/sync-events-outlook-calendar/sync-events-outlook-calendar';
import AgendaEventBulkActionsEditDeleteUpdate from './src/demos/eventcalendar/agenda/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import AgendaSearchingEventsInPopup from './src/demos/eventcalendar/agenda/searching-events-in-popup/searching-events-in-popup';
import AgendaEmptyState from './src/demos/eventcalendar/agenda/empty-state/empty-state';
import TimelineTimelineTimeGrid from './src/demos/eventcalendar/timeline/timeline-time-grid/timeline-time-grid';
import TimelineDailyWeeklyMonthlyYearlyTimeline from './src/demos/eventcalendar/timeline/daily-weekly-monthly-yearly-timeline/daily-weekly-monthly-yearly-timeline';
import TimelineSwitchingDayWeekWorkWeekTimeline from './src/demos/eventcalendar/timeline/switching-day-week-work-week-timeline/switching-day-week-work-week-timeline';
import TimelineTimelineResourceDetailsSidePanelFooter from './src/demos/eventcalendar/timeline/timeline-resource-details-side-panel-footer/timeline-resource-details-side-panel-footer';
import TimelineTimelineResourceHeight from './src/demos/eventcalendar/timeline/timeline-resource-height/timeline-resource-height';
import TimelineTimelineCustomEventRendering from './src/demos/eventcalendar/timeline/timeline-custom-event-rendering/timeline-custom-event-rendering';
import TimelineMonthView from './src/demos/eventcalendar/timeline/month-view/month-view';
import TimelineEventListing from './src/demos/eventcalendar/timeline/event-listing/event-listing';
import TimelineEmployeeShifts from './src/demos/eventcalendar/timeline/employee-shifts/employee-shifts';
import TimelineResourceGroupingHierarchy from './src/demos/eventcalendar/timeline/resource-grouping-hierarchy/resource-grouping-hierarchy';
import TimelineWorkOrderScheduling from './src/demos/eventcalendar/timeline/work-order-scheduling/work-order-scheduling';
import TimelineTimezoneMeetingPlanner from './src/demos/eventcalendar/timeline/timezone-meeting-planner/timezone-meeting-planner';
import TimelineMealPlanner from './src/demos/eventcalendar/timeline/meal-planner/meal-planner';
import TimelineShiftTemplate from './src/demos/eventcalendar/timeline/shift-template/shift-template';
import TimelineRestaurantShiftManagement from './src/demos/eventcalendar/timeline/restaurant-shift-management/restaurant-shift-management';
import TimelineResourceHeaderTemplate from './src/demos/eventcalendar/timeline/resource-header-template/resource-header-template';
import TimelineSettingTheTimezone from './src/demos/eventcalendar/timeline/setting-the-timezone/setting-the-timezone';
import TimelineMultipleTimezoneSupport from './src/demos/eventcalendar/timeline/multiple-timezone-support/multiple-timezone-support';
import TimelineCustomEventTooltip from './src/demos/eventcalendar/timeline/custom-event-tooltip/custom-event-tooltip';
import TimelinePrintingTheView from './src/demos/eventcalendar/timeline/printing-the-view/printing-the-view';
import TimelineMultipleDaysWeeksMonthsQuartersYearsVariableResolution from './src/demos/eventcalendar/timeline/multiple-days-weeks-months-quarters-years-variable-resolution/multiple-days-weeks-months-quarters-years-variable-resolution';
import TimelineMoveResizeDragDropToCreateEvents from './src/demos/eventcalendar/timeline/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import TimelineEventDataStructure from './src/demos/eventcalendar/timeline/event-data-structure/event-data-structure';
import TimelineDateObjectISO8601Moment from './src/demos/eventcalendar/timeline/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import TimelineRecurringEvents from './src/demos/eventcalendar/timeline/recurring-events/recurring-events';
import TimelineLoadEventsFromRemoteApi from './src/demos/eventcalendar/timeline/load-events-from-remote-api/load-events-from-remote-api';
import TimelineLoadEventsOnDemand from './src/demos/eventcalendar/timeline/load-events-on-demand/load-events-on-demand';
import TimelineCreateReadUpdateDeleteCRUD from './src/demos/eventcalendar/timeline/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import TimelineThemesIosMaterialWindows from './src/demos/eventcalendar/timeline/themes-ios-material-windows/themes-ios-material-windows';
import TimelineGregorianJalaliHijri from './src/demos/eventcalendar/timeline/gregorian-jalali-hijri/gregorian-jalali-hijri';
import TimelineEventHooks from './src/demos/eventcalendar/timeline/event-hooks/event-hooks';
import TimelineLocalization from './src/demos/eventcalendar/timeline/localization/localization';
import TimelineRtlRightToLeft from './src/demos/eventcalendar/timeline/rtl-right-to-left/rtl-right-to-left';
import TimelineLoadInlineData from './src/demos/eventcalendar/timeline/load-inline-data/load-inline-data';
import TimelineSyncEventsGoogleCalendar from './src/demos/eventcalendar/timeline/sync-events-google-calendar/sync-events-google-calendar';
import TimelineSyncEventsOutlookCalendar from './src/demos/eventcalendar/timeline/sync-events-outlook-calendar/sync-events-outlook-calendar';
import TimelineDisallowPastEventCreation from './src/demos/eventcalendar/timeline/disallow-past-event-creation/disallow-past-event-creation';
import TimelineLoadEventsFromGoogleCalendar from './src/demos/eventcalendar/timeline/load-events-from-google-calendar/load-events-from-google-calendar';
import TimelineCustomRangeView from './src/demos/eventcalendar/timeline/custom-range-view/custom-range-view';
import TimelineDynamicallyColorAndInvalidate from './src/demos/eventcalendar/timeline/dynamically-color-and-invalidate/dynamically-color-and-invalidate';
import TimelineEventBulkActionsEditDeleteUpdate from './src/demos/eventcalendar/timeline/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import TimelineLoadingBigDataSets from './src/demos/eventcalendar/timeline/loading-big-data-sets/loading-big-data-sets';
import TimelineConnectingLinkingEventsArrows from './src/demos/eventcalendar/timeline/connecting-linking-events-arrows/connecting-linking-events-arrows';
import TimelineSearchingEventsInSidebar from './src/demos/eventcalendar/timeline/searching-events-in-sidebar/searching-events-in-sidebar';
import TimelineColorsInvalidsCssClass from './src/demos/eventcalendar/timeline/colors-invalids-css-class/colors-invalids-css-class';
import TimelineHourDayWeekMonthQuarterYearHeaderFooterTemplate from './src/demos/eventcalendar/timeline/hour-day-week-month-quarter-year-header-footer-template/hour-day-week-month-quarter-year-header-footer-template';
import TimelineSettingRowHeight from './src/demos/eventcalendar/timeline/setting-row-height/setting-row-height';
import TimelineMonthlyTimetableVerticalDaysHorizontalTimes from './src/demos/eventcalendar/timeline/monthly-timetable-vertical-days-horizontal-times/monthly-timetable-vertical-days-horizontal-times';
import TimelineMultiClassroomTimetable from './src/demos/eventcalendar/timeline/multi-classroom-timetable/multi-classroom-timetable';
import TimelineLoadResourcesOnDemand from './src/demos/eventcalendar/timeline/load-resources-on-demand/load-resources-on-demand';
import TimelineResourceDataStructure from './src/demos/eventcalendar/timeline/resource-data-structure/resource-data-structure';
import TimelineConditionalMoveResize from './src/demos/eventcalendar/timeline/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import TimelineDragDropBetweenCalendarInstances from './src/demos/eventcalendar/timeline/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import TimelinePreventDoubleBookingEvents from './src/demos/eventcalendar/timeline/prevent-double-booking-events/prevent-double-booking-events';
import TimelineCompareResourcesFixedAtTop from './src/demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top';
import TimelineAssignUnassignWorkOrdersFixedTopRow from './src/demos/eventcalendar/timeline/assign-unassign-work-orders-fixed-top-row/assign-unassign-work-orders-fixed-top-row';
import TimelineControlNumberOfConcurrentlyShownEvents from './src/demos/eventcalendar/timeline/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import TimelineFlightSchedulingTwoSynchronizedTimelines from './src/demos/eventcalendar/timeline/flight-scheduling-two-synchronized-timelines/flight-scheduling-two-synchronized-timelines';

const router = new Router();

const app = document.getElementById('app');

function loadPage(page) {
  app.innerHTML = "<div id='javascript-demo-placeholder'>" + page.markup + '</div>';

  if (page.css && !page.loaded) {
    page.loaded = true;
    var style = document.createElement('style');
    style.innerHTML = page.css;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  if (page.init) {
    page.init();
  }

  enhance(app);
}

router
  .on('/', () => {
    loadPage(HomePage);
  })
  .on('/datetime/date-picker', () => {
    loadPage(DatetimeDatePicker);
  })
  .on('/datetime/disabled-invalid-values', () => {
    loadPage(DatetimeDisabledInvalidValues);
  })
  .on('/datetime/time-picker', () => {
    loadPage(DatetimeTimePicker);
  })
  .on('/datetime/month-year-picker', () => {
    loadPage(DatetimeMonthYearPicker);
  })
  .on('/datetime/date-time-picker', () => {
    loadPage(DatetimeDateTimePicker);
  })
  .on('/datetime/event-hooks', () => {
    loadPage(DatetimeEventHooks);
  })
  .on('/datetime/time-value-steps', () => {
    loadPage(DatetimeTimeValueSteps);
  })
  .on('/datetime/formatting-return-values', () => {
    loadPage(DatetimeFormattingReturnValues);
  })
  .on('/datetime/setting-values-defaults', () => {
    loadPage(DatetimeSettingValuesDefaults);
  })
  .on('/datetime/date-object-ISO-8601-moment', () => {
    loadPage(DatetimeDateObjectISO8601Moment);
  })
  .on('/datetime/themes-ios-material-windows', () => {
    loadPage(DatetimeThemesIosMaterialWindows);
  })
  .on('/datetime/mobile-desktop-usage', () => {
    loadPage(DatetimeMobileDesktopUsage);
  })
  .on('/datetime/localization', () => {
    loadPage(DatetimeLocalization);
  })
  .on('/datetime/gregorian-jalali-hijri', () => {
    loadPage(DatetimeGregorianJalaliHijri);
  })
  .on('/datetime/responsive', () => {
    loadPage(DatetimeResponsive);
  })
  .on('/datetime/mobile-desktop-display', () => {
    loadPage(DatetimeMobileDesktopDisplay);
  })
  .on('/datetime/min-max-restrictions', () => {
    loadPage(DatetimeMinMaxRestrictions);
  })
  .on('/datetime/single-select', () => {
    loadPage(DatetimeSingleSelect);
  })
  .on('/datetime/recurring-values', () => {
    loadPage(DatetimeRecurringValues);
  })
  .on('/datetime/range-select', () => {
    loadPage(DatetimeRangeSelect);
  })
  .on('/datetime/usage-on-input-or-inline', () => {
    loadPage(DatetimeUsageOnInputOrInline);
  })
  .on('/datetime/rtl-right-to-left', () => {
    loadPage(DatetimeRtlRightToLeft);
  })
  .on('/datetime/setting-the-picker-timezone', () => {
    loadPage(DatetimeSettingThePickerTimezone);
  })
  .on('/calendar/date-time-picker', () => {
    loadPage(CalendarDateTimePicker);
  })
  .on('/calendar/event-hooks', () => {
    loadPage(CalendarEventHooks);
  })
  .on('/calendar/week-view', () => {
    loadPage(CalendarWeekView);
  })
  .on('/calendar/dots-colors-labels', () => {
    loadPage(CalendarDotsColorsLabels);
  })
  .on('/calendar/formatting-return-values', () => {
    loadPage(CalendarFormattingReturnValues);
  })
  .on('/calendar/disabled-invalid-values', () => {
    loadPage(CalendarDisabledInvalidValues);
  })
  .on('/calendar/setting-values-defaults', () => {
    loadPage(CalendarSettingValuesDefaults);
  })
  .on('/calendar/date-object-ISO-8601-moment', () => {
    loadPage(CalendarDateObjectISO8601Moment);
  })
  .on('/calendar/themes-ios-material-windows', () => {
    loadPage(CalendarThemesIosMaterialWindows);
  })
  .on('/calendar/week-to-month', () => {
    loadPage(CalendarWeekToMonth);
  })
  .on('/calendar/localization', () => {
    loadPage(CalendarLocalization);
  })
  .on('/calendar/mobile-desktop-usage', () => {
    loadPage(CalendarMobileDesktopUsage);
  })
  .on('/calendar/gregorian-jalali-hijri', () => {
    loadPage(CalendarGregorianJalaliHijri);
  })
  .on('/calendar/responsive', () => {
    loadPage(CalendarResponsive);
  })
  .on('/calendar/mobile-desktop-display', () => {
    loadPage(CalendarMobileDesktopDisplay);
  })
  .on('/calendar/date-picker', () => {
    loadPage(CalendarDatePicker);
  })
  .on('/calendar/multiple-months', () => {
    loadPage(CalendarMultipleMonths);
  })
  .on('/calendar/month-change-direction-week-numbers-outer-days', () => {
    loadPage(CalendarMonthChangeDirectionWeekNumbersOuterDays);
  })
  .on('/calendar/min-max-restrictions', () => {
    loadPage(CalendarMinMaxRestrictions);
  })
  .on('/calendar/single-select', () => {
    loadPage(CalendarSingleSelect);
  })
  .on('/calendar/multiple-select', () => {
    loadPage(CalendarMultipleSelect);
  })
  .on('/calendar/recurring-values', () => {
    loadPage(CalendarRecurringValues);
  })
  .on('/calendar/customizing-header', () => {
    loadPage(CalendarCustomizingHeader);
  })
  .on('/calendar/range-select', () => {
    loadPage(CalendarRangeSelect);
  })
  .on('/calendar/half-day-styling', () => {
    loadPage(CalendarHalfDayStyling);
  })
  .on('/calendar/customize-marked-day-shapes', () => {
    loadPage(CalendarCustomizeMarkedDayShapes);
  })
  .on('/calendar/usage-on-input-or-inline', () => {
    loadPage(CalendarUsageOnInputOrInline);
  })
  .on('/calendar/rtl-right-to-left', () => {
    loadPage(CalendarRtlRightToLeft);
  })
  .on('/calendar/appointment-booking', () => {
    loadPage(CalendarAppointmentBooking);
  })
  .on('/calendar/activity-calendar', () => {
    loadPage(CalendarActivityCalendar);
  })
  .on('/calendar/week-select', () => {
    loadPage(CalendarWeekSelect);
  })
  .on('/calendar/quarter-year-view', () => {
    loadPage(CalendarQuarterYearView);
  })
  .on('/calendar/setting-the-picker-timezone', () => {
    loadPage(CalendarSettingThePickerTimezone);
  })
  .on('/select/multiple-select', () => {
    loadPage(SelectMultipleSelect);
  })
  .on('/select/multiple-lines', () => {
    loadPage(SelectMultipleLines);
  })
  .on('/select/country-picker', () => {
    loadPage(SelectCountryPicker);
  })
  .on('/select/event-hooks', () => {
    loadPage(SelectEventHooks);
  })
  .on('/select/themes-ios-material-windows', () => {
    loadPage(SelectThemesIosMaterialWindows);
  })
  .on('/select/setting-values-defaults', () => {
    loadPage(SelectSettingValuesDefaults);
  })
  .on('/select/mobile-desktop-usage', () => {
    loadPage(SelectMobileDesktopUsage);
  })
  .on('/select/group-options', () => {
    loadPage(SelectGroupOptions);
  })
  .on('/select/localization', () => {
    loadPage(SelectLocalization);
  })
  .on('/select/mobile-desktop-display', () => {
    loadPage(SelectMobileDesktopDisplay);
  })
  .on('/select/single-select', () => {
    loadPage(SelectSingleSelect);
  })
  .on('/select/responsive', () => {
    loadPage(SelectResponsive);
  })
  .on('/select/rtl-right-to-left', () => {
    loadPage(SelectRtlRightToLeft);
  })
  .on('/select/disabled-invalid-values', () => {
    loadPage(SelectDisabledInvalidValues);
  })
  .on('/select/filtering-values', () => {
    loadPage(SelectFilteringValues);
  })
  .on('/select/data-sources', () => {
    loadPage(SelectDataSources);
  })
  .on('/select/linked-hierarchical-pickers', () => {
    loadPage(SelectLinkedHierarchicalPickers);
  })
  .on('/select/item-templating', () => {
    loadPage(SelectItemTemplating);
  })
  .on('/select/image-text', () => {
    loadPage(SelectImageText);
  })
  .on('/range/disabled-invalid-values', () => {
    loadPage(RangeDisabledInvalidValues);
  })
  .on('/range/flight-booking', () => {
    loadPage(RangeFlightBooking);
  })
  .on('/range/presets', () => {
    loadPage(RangePresets);
  })
  .on('/range/event-hooks', () => {
    loadPage(RangeEventHooks);
  })
  .on('/range/dots-colors-labels', () => {
    loadPage(RangeDotsColorsLabels);
  })
  .on('/range/date-object-ISO-8601-moment', () => {
    loadPage(RangeDateObjectISO8601Moment);
  })
  .on('/range/themes-ios-material-windows', () => {
    loadPage(RangeThemesIosMaterialWindows);
  })
  .on('/range/gregorian-jalali-hijri', () => {
    loadPage(RangeGregorianJalaliHijri);
  })
  .on('/range/mobile-desktop-usage', () => {
    loadPage(RangeMobileDesktopUsage);
  })
  .on('/range/responsive', () => {
    loadPage(RangeResponsive);
  })
  .on('/range/mobile-desktop-display', () => {
    loadPage(RangeMobileDesktopDisplay);
  })
  .on('/range/min-max-restrictions', () => {
    loadPage(RangeMinMaxRestrictions);
  })
  .on('/range/calendar-scroller-dropdown', () => {
    loadPage(RangeCalendarScrollerDropdown);
  })
  .on('/range/usage-on-input-or-inline', () => {
    loadPage(RangeUsageOnInputOrInline);
  })
  .on('/range/date-range', () => {
    loadPage(RangeDateRange);
  })
  .on('/range/time-range', () => {
    loadPage(RangeTimeRange);
  })
  .on('/range/date-time-range', () => {
    loadPage(RangeDateTimeRange);
  })
  .on('/range/week-month-view-scrolling-direction', () => {
    loadPage(RangeWeekMonthViewScrollingDirection);
  })
  .on('/range/formatting-return-values', () => {
    loadPage(RangeFormattingReturnValues);
  })
  .on('/range/customizing-labels-selection', () => {
    loadPage(RangeCustomizingLabelsSelection);
  })
  .on('/range/min-max-length', () => {
    loadPage(RangeMinMaxLength);
  })
  .on('/range/recurring-values', () => {
    loadPage(RangeRecurringValues);
  })
  .on('/range/half-day-styling', () => {
    loadPage(RangeHalfDayStyling);
  })
  .on('/range/customize-marked-day-shapes', () => {
    loadPage(RangeCustomizeMarkedDayShapes);
  })
  .on('/range/localization', () => {
    loadPage(RangeLocalization);
  })
  .on('/range/adding-event-start-end', () => {
    loadPage(RangeAddingEventStartEnd);
  })
  .on('/range/rtl-right-to-left', () => {
    loadPage(RangeRtlRightToLeft);
  })
  .on('/range/date-filtering-with-predefined-ranges', () => {
    loadPage(RangeDateFilteringWithPredefinedRanges);
  })
  .on('/range/book-rental-months-ahead', () => {
    loadPage(RangeBookRentalMonthsAhead);
  })
  .on('/range/setting-the-picker-timezone', () => {
    loadPage(RangeSettingThePickerTimezone);
  })
  .on('/alerts-notifications/alert', () => {
    loadPage(Alerts - notificationsAlert);
  })
  .on('/alerts-notifications/notifications', () => {
    loadPage(Alerts - notificationsNotifications);
  })
  .on('/forms/mobile', () => {
    loadPage(FormsMobile);
  })
  .on('/forms/responsive', () => {
    loadPage(FormsResponsive);
  })
  .on('/forms/themes-ios-material-windows', () => {
    loadPage(FormsThemesIosMaterialWindows);
  })
  .on('/forms/desktop', () => {
    loadPage(FormsDesktop);
  })
  .on('/forms/popup', () => {
    loadPage(FormsPopup);
  })
  .on('/forms/alert-confirm-prompt', () => {
    loadPage(FormsAlertConfirmPrompt);
  })
  .on('/forms/notifications', () => {
    loadPage(FormsNotifications);
  })
  .on('/forms/buttons', () => {
    loadPage(FormsButtons);
  })
  .on('/forms/segmented', () => {
    loadPage(FormsSegmented);
  })
  .on('/forms/stepper', () => {
    loadPage(FormsStepper);
  })
  .on('/forms/button-segmented-stepper-colors', () => {
    loadPage(FormsButtonSegmentedStepperColors);
  })
  .on('/forms/inputs-text-areas-date-fields', () => {
    loadPage(FormsInputsTextAreasDateFields);
  })
  .on('/forms/input-label-types', () => {
    loadPage(FormsInputLabelTypes);
  })
  .on('/forms/checkbox', () => {
    loadPage(FormsCheckbox);
  })
  .on('/forms/switch', () => {
    loadPage(FormsSwitch);
  })
  .on('/forms/radio-button', () => {
    loadPage(FormsRadioButton);
  })
  .on('/eventcalendar/event-hooks', () => {
    loadPage(EventcalendarEventHooks);
  })
  .on('/eventcalendar/load-events-from-remote-api', () => {
    loadPage(EventcalendarLoadEventsFromRemoteApi);
  })
  .on('/eventcalendar/desktop-month-view', () => {
    loadPage(EventcalendarDesktopMonthView);
  })
  .on('/eventcalendar/load-events-on-demand', () => {
    loadPage(EventcalendarLoadEventsOnDemand);
  })
  .on('/eventcalendar/mobile-month-view', () => {
    loadPage(EventcalendarMobileMonthView);
  })
  .on('/eventcalendar/month-week-view', () => {
    loadPage(EventcalendarMonthWeekView);
  })
  .on('/eventcalendar/date-object-ISO-8601-moment', () => {
    loadPage(EventcalendarDateObjectISO8601Moment);
  })
  .on('/eventcalendar/switching-day-week-month-view', () => {
    loadPage(EventcalendarSwitchingDayWeekMonthView);
  })
  .on('/eventcalendar/responsive-month-view', () => {
    loadPage(EventcalendarResponsiveMonthView);
  })
  .on('/eventcalendar/event-popover', () => {
    loadPage(EventcalendarEventPopover);
  })
  .on('/eventcalendar/localization', () => {
    loadPage(EventcalendarLocalization);
  })
  .on('/eventcalendar/event-labels', () => {
    loadPage(EventcalendarEventLabels);
  })
  .on('/eventcalendar/gregorian-jalali-hijri', () => {
    loadPage(EventcalendarGregorianJalaliHijri);
  })
  .on('/eventcalendar/event-data-structure', () => {
    loadPage(EventcalendarEventDataStructure);
  })
  .on('/eventcalendar/themes-ios-material-windows', () => {
    loadPage(EventcalendarThemesIosMaterialWindows);
  })
  .on('/eventcalendar/recurring-events', () => {
    loadPage(EventcalendarRecurringEvents);
  })
  .on('/eventcalendar/load-events-from-google-calendar', () => {
    loadPage(EventcalendarLoadEventsFromGoogleCalendar);
  })
  .on('/eventcalendar/customize-event-popover', () => {
    loadPage(EventcalendarCustomizeEventPopover);
  })
  .on('/eventcalendar/customize-label-look-and-feel', () => {
    loadPage(EventcalendarCustomizeLabelLookAndFeel);
  })
  .on('/eventcalendar/customizing-header', () => {
    loadPage(EventcalendarCustomizingHeader);
  })
  .on('/eventcalendar/resource-filtering-in-header', () => {
    loadPage(EventcalendarResourceFilteringInHeader);
  })
  .on('/eventcalendar/load-inline-data', () => {
    loadPage(EventcalendarLoadInlineData);
  })
  .on('/eventcalendar/move-resize-drag-drop-to-create-events', () => {
    loadPage(EventcalendarMoveResizeDragDropToCreateEvents);
  })
  .on('/eventcalendar/create-read-update-delete-CRUD', () => {
    loadPage(EventcalendarCreateReadUpdateDeleteCRUD);
  })
  .on('/eventcalendar/blocked-days-ranges', () => {
    loadPage(EventcalendarBlockedDaysRanges);
  })
  .on('/eventcalendar/external-drag-drop-schedule-unschedule', () => {
    loadPage(EventcalendarExternalDragDropScheduleUnschedule);
  })
  .on('/eventcalendar/external-event-presets', () => {
    loadPage(EventcalendarExternalEventPresets);
  })
  .on('/eventcalendar/colored-cell-background', () => {
    loadPage(EventcalendarColoredCellBackground);
  })
  .on('/eventcalendar/custom-event-sort', () => {
    loadPage(EventcalendarCustomEventSort);
  })
  .on('/eventcalendar/setting-the-timezone', () => {
    loadPage(EventcalendarSettingTheTimezone);
  })
  .on('/eventcalendar/multiple-timezone-support', () => {
    loadPage(EventcalendarMultipleTimezoneSupport);
  })
  .on('/eventcalendar/recurring-event-add-edit-dialog', () => {
    loadPage(EventcalendarRecurringEventAddEditDialog);
  })
  .on('/eventcalendar/quarter-year-view', () => {
    loadPage(EventcalendarQuarterYearView);
  })
  .on('/eventcalendar/custom-event-tooltip', () => {
    loadPage(EventcalendarCustomEventTooltip);
  })
  .on('/eventcalendar/printing-the-view', () => {
    loadPage(EventcalendarPrintingTheView);
  })
  .on('/eventcalendar/show-more-all-labels', () => {
    loadPage(EventcalendarShowMoreAllLabels);
  })
  .on('/eventcalendar/sync-events-google-calendar', () => {
    loadPage(EventcalendarSyncEventsGoogleCalendar);
  })
  .on('/eventcalendar/sync-events-outlook-calendar', () => {
    loadPage(EventcalendarSyncEventsOutlookCalendar);
  })
  .on('/eventcalendar/disallow-past-event-creation', () => {
    loadPage(EventcalendarDisallowPastEventCreation);
  })
  .on('/eventcalendar/event-bulk-actions-edit-delete-update', () => {
    loadPage(EventcalendarEventBulkActionsEditDeleteUpdate);
  })
  .on('/eventcalendar/cut-copy-paste-events-between-calendars', () => {
    loadPage(EventcalendarCutCopyPasteEventsBetweenCalendars);
  })
  .on('/eventcalendar/searching-events-in-popup', () => {
    loadPage(EventcalendarSearchingEventsInPopup);
  })
  .on('/eventcalendar/searching-events-in-sidebar', () => {
    loadPage(EventcalendarSearchingEventsInSidebar);
  })
  .on('/eventcalendar/conditional-move-resize', () => {
    loadPage(EventcalendarConditionalMoveResize);
  })
  .on('/eventcalendar/drag-drop-between-calendar-instances', () => {
    loadPage(EventcalendarDragDropBetweenCalendarInstances);
  })
  .on('/eventcalendar/prevent-double-booking-events', () => {
    loadPage(EventcalendarPreventDoubleBookingEvents);
  })
  .on('/scheduler/mobile-day-view', () => {
    loadPage(SchedulerMobileDayView);
  })
  .on('/scheduler/desktop-day-view', () => {
    loadPage(SchedulerDesktopDayView);
  })
  .on('/scheduler/desktop-week-view', () => {
    loadPage(SchedulerDesktopWeekView);
  })
  .on('/scheduler/mobile-week-view', () => {
    loadPage(SchedulerMobileWeekView);
  })
  .on('/scheduler/responsive-day-week-schedule', () => {
    loadPage(SchedulerResponsiveDayWeekSchedule);
  })
  .on('/scheduler/switching-calendar-scheduler-agenda', () => {
    loadPage(SchedulerSwitchingCalendarSchedulerAgenda);
  })
  .on('/scheduler/event-data-structure', () => {
    loadPage(SchedulerEventDataStructure);
  })
  .on('/scheduler/load-events-on-demand', () => {
    loadPage(SchedulerLoadEventsOnDemand);
  })
  .on('/scheduler/load-events-from-remote-api', () => {
    loadPage(SchedulerLoadEventsFromRemoteApi);
  })
  .on('/scheduler/gregorian-jalali-hijri', () => {
    loadPage(SchedulerGregorianJalaliHijri);
  })
  .on('/scheduler/event-hooks', () => {
    loadPage(SchedulerEventHooks);
  })
  .on('/scheduler/localization', () => {
    loadPage(SchedulerLocalization);
  })
  .on('/scheduler/themes-ios-material-windows', () => {
    loadPage(SchedulerThemesIosMaterialWindows);
  })
  .on('/scheduler/recurring-events', () => {
    loadPage(SchedulerRecurringEvents);
  })
  .on('/scheduler/load-events-from-google-calendar', () => {
    loadPage(SchedulerLoadEventsFromGoogleCalendar);
  })
  .on('/scheduler/date-object-ISO-8601-moment', () => {
    loadPage(SchedulerDateObjectISO8601Moment);
  })
  .on('/scheduler/customizing-events', () => {
    loadPage(SchedulerCustomizingEvents);
  })
  .on('/scheduler/resource-filtering-in-header', () => {
    loadPage(SchedulerResourceFilteringInHeader);
  })
  .on('/scheduler/customizing-header', () => {
    loadPage(SchedulerCustomizingHeader);
  })
  .on('/scheduler/load-inline-data', () => {
    loadPage(SchedulerLoadInlineData);
  })
  .on('/scheduler/move-resize-drag-drop-to-create-events', () => {
    loadPage(SchedulerMoveResizeDragDropToCreateEvents);
  })
  .on('/scheduler/create-read-update-delete-CRUD', () => {
    loadPage(SchedulerCreateReadUpdateDeleteCRUD);
  })
  .on('/scheduler/prevent-double-booking-events', () => {
    loadPage(SchedulerPreventDoubleBookingEvents);
  })
  .on('/scheduler/time-off-blocked-ranges', () => {
    loadPage(SchedulerTimeOffBlockedRanges);
  })
  .on('/scheduler/work-week-hours', () => {
    loadPage(SchedulerWorkWeekHours);
  })
  .on('/scheduler/show-hide-hours-days', () => {
    loadPage(SchedulerShowHideHoursDays);
  })
  .on('/scheduler/disable-all-day-events', () => {
    loadPage(SchedulerDisableAllDayEvents);
  })
  .on('/scheduler/external-drag-drop-schedule-unschedule', () => {
    loadPage(SchedulerExternalDragDropScheduleUnschedule);
  })
  .on('/scheduler/external-event-presets', () => {
    loadPage(SchedulerExternalEventPresets);
  })
  .on('/scheduler/colored-cell-background', () => {
    loadPage(SchedulerColoredCellBackground);
  })
  .on('/scheduler/resource-view', () => {
    loadPage(SchedulerResourceView);
  })
  .on('/scheduler/group-by-resource-by-day', () => {
    loadPage(SchedulerGroupByResourceByDay);
  })
  .on('/scheduler/shared-events-across-resources', () => {
    loadPage(SchedulerSharedEventsAcrossResources);
  })
  .on('/scheduler/dynamic-add-remove-resources-filter', () => {
    loadPage(SchedulerDynamicAddRemoveResourcesFilter);
  })
  .on('/scheduler/custom-resource-header-template', () => {
    loadPage(SchedulerCustomResourceHeaderTemplate);
  })
  .on('/scheduler/setting-the-timezone', () => {
    loadPage(SchedulerSettingTheTimezone);
  })
  .on('/scheduler/multiple-timezone-support', () => {
    loadPage(SchedulerMultipleTimezoneSupport);
  })
  .on('/scheduler/date-header-template', () => {
    loadPage(SchedulerDateHeaderTemplate);
  })
  .on('/scheduler/custom-event-tooltip', () => {
    loadPage(SchedulerCustomEventTooltip);
  })
  .on('/scheduler/printing-the-view', () => {
    loadPage(SchedulerPrintingTheView);
  })
  .on('/scheduler/display-multiple-days-weeks', () => {
    loadPage(SchedulerDisplayMultipleDaysWeeks);
  })
  .on('/scheduler/recurring-event-add-edit-dialog', () => {
    loadPage(SchedulerRecurringEventAddEditDialog);
  })
  .on('/scheduler/sync-events-google-calendar', () => {
    loadPage(SchedulerSyncEventsGoogleCalendar);
  })
  .on('/scheduler/sync-events-outlook-calendar', () => {
    loadPage(SchedulerSyncEventsOutlookCalendar);
  })
  .on('/scheduler/disallow-past-event-creation', () => {
    loadPage(SchedulerDisallowPastEventCreation);
  })
  .on('/scheduler/custom-range-view', () => {
    loadPage(SchedulerCustomRangeView);
  })
  .on('/scheduler/show-multiple-timezones', () => {
    loadPage(SchedulerShowMultipleTimezones);
  })
  .on('/scheduler/event-bulk-actions-edit-delete-update', () => {
    loadPage(SchedulerEventBulkActionsEditDeleteUpdate);
  })
  .on('/scheduler/searching-events-in-sidebar', () => {
    loadPage(SchedulerSearchingEventsInSidebar);
  })
  .on('/scheduler/colors-invalids-css-class', () => {
    loadPage(SchedulerColorsInvalidsCssClass);
  })
  .on('/scheduler/resource-data-structure', () => {
    loadPage(SchedulerResourceDataStructure);
  })
  .on('/scheduler/doctors-appointment', () => {
    loadPage(SchedulerDoctorsAppointment);
  })
  .on('/scheduler/conditional-move-resize', () => {
    loadPage(SchedulerConditionalMoveResize);
  })
  .on('/scheduler/drag-drop-between-calendar-instances', () => {
    loadPage(SchedulerDragDropBetweenCalendarInstances);
  })
  .on('/scheduler/control-number-of-concurrently-shown-events', () => {
    loadPage(SchedulerControlNumberOfConcurrentlyShownEvents);
  })
  .on('/agenda/load-events-from-remote-api', () => {
    loadPage(AgendaLoadEventsFromRemoteApi);
  })
  .on('/agenda/load-events-on-demand', () => {
    loadPage(AgendaLoadEventsOnDemand);
  })
  .on('/agenda/load-events-from-google-calendar', () => {
    loadPage(AgendaLoadEventsFromGoogleCalendar);
  })
  .on('/agenda/event-data-structure', () => {
    loadPage(AgendaEventDataStructure);
  })
  .on('/agenda/event-hooks', () => {
    loadPage(AgendaEventHooks);
  })
  .on('/agenda/date-object-ISO-8601-moment', () => {
    loadPage(AgendaDateObjectISO8601Moment);
  })
  .on('/agenda/recurring-events', () => {
    loadPage(AgendaRecurringEvents);
  })
  .on('/agenda/daily-weekly-monthly-annual-agenda', () => {
    loadPage(AgendaDailyWeeklyMonthlyAnnualAgenda);
  })
  .on('/agenda/event-content-customization', () => {
    loadPage(AgendaEventContentCustomization);
  })
  .on('/agenda/full-event-customization', () => {
    loadPage(AgendaFullEventCustomization);
  })
  .on('/agenda/resource-filtering-in-header', () => {
    loadPage(AgendaResourceFilteringInHeader);
  })
  .on('/agenda/customizing-header', () => {
    loadPage(AgendaCustomizingHeader);
  })
  .on('/agenda/load-inline-data', () => {
    loadPage(AgendaLoadInlineData);
  })
  .on('/agenda/daily-agenda-with-week-calendar', () => {
    loadPage(AgendaDailyAgendaWithWeekCalendar);
  })
  .on('/agenda/synchronized-views', () => {
    loadPage(AgendaSynchronizedViews);
  })
  .on('/agenda/themes-ios-material-windows', () => {
    loadPage(AgendaThemesIosMaterialWindows);
  })
  .on('/agenda/gregorian-jalali-hijri', () => {
    loadPage(AgendaGregorianJalaliHijri);
  })
  .on('/agenda/basic-usage', () => {
    loadPage(AgendaBasicUsage);
  })
  .on('/agenda/custom-event-sort', () => {
    loadPage(AgendaCustomEventSort);
  })
  .on('/agenda/localization', () => {
    loadPage(AgendaLocalization);
  })
  .on('/agenda/setting-the-timezone', () => {
    loadPage(AgendaSettingTheTimezone);
  })
  .on('/agenda/custom-event-tooltip', () => {
    loadPage(AgendaCustomEventTooltip);
  })
  .on('/agenda/printing-the-view', () => {
    loadPage(AgendaPrintingTheView);
  })
  .on('/agenda/sync-events-google-calendar', () => {
    loadPage(AgendaSyncEventsGoogleCalendar);
  })
  .on('/agenda/sync-events-outlook-calendar', () => {
    loadPage(AgendaSyncEventsOutlookCalendar);
  })
  .on('/agenda/event-bulk-actions-edit-delete-update', () => {
    loadPage(AgendaEventBulkActionsEditDeleteUpdate);
  })
  .on('/agenda/searching-events-in-popup', () => {
    loadPage(AgendaSearchingEventsInPopup);
  })
  .on('/agenda/empty-state', () => {
    loadPage(AgendaEmptyState);
  })
  .on('/timeline/timeline-time-grid', () => {
    loadPage(TimelineTimelineTimeGrid);
  })
  .on('/timeline/daily-weekly-monthly-yearly-timeline', () => {
    loadPage(TimelineDailyWeeklyMonthlyYearlyTimeline);
  })
  .on('/timeline/switching-day-week-work-week-timeline', () => {
    loadPage(TimelineSwitchingDayWeekWorkWeekTimeline);
  })
  .on('/timeline/timeline-resource-details-side-panel-footer', () => {
    loadPage(TimelineTimelineResourceDetailsSidePanelFooter);
  })
  .on('/timeline/timeline-resource-height', () => {
    loadPage(TimelineTimelineResourceHeight);
  })
  .on('/timeline/timeline-custom-event-rendering', () => {
    loadPage(TimelineTimelineCustomEventRendering);
  })
  .on('/timeline/month-view', () => {
    loadPage(TimelineMonthView);
  })
  .on('/timeline/event-listing', () => {
    loadPage(TimelineEventListing);
  })
  .on('/timeline/employee-shifts', () => {
    loadPage(TimelineEmployeeShifts);
  })
  .on('/timeline/resource-grouping-hierarchy', () => {
    loadPage(TimelineResourceGroupingHierarchy);
  })
  .on('/timeline/work-order-scheduling', () => {
    loadPage(TimelineWorkOrderScheduling);
  })
  .on('/timeline/timezone-meeting-planner', () => {
    loadPage(TimelineTimezoneMeetingPlanner);
  })
  .on('/timeline/meal-planner', () => {
    loadPage(TimelineMealPlanner);
  })
  .on('/timeline/shift-template', () => {
    loadPage(TimelineShiftTemplate);
  })
  .on('/timeline/restaurant-shift-management', () => {
    loadPage(TimelineRestaurantShiftManagement);
  })
  .on('/timeline/resource-header-template', () => {
    loadPage(TimelineResourceHeaderTemplate);
  })
  .on('/timeline/setting-the-timezone', () => {
    loadPage(TimelineSettingTheTimezone);
  })
  .on('/timeline/multiple-timezone-support', () => {
    loadPage(TimelineMultipleTimezoneSupport);
  })
  .on('/timeline/custom-event-tooltip', () => {
    loadPage(TimelineCustomEventTooltip);
  })
  .on('/timeline/printing-the-view', () => {
    loadPage(TimelinePrintingTheView);
  })
  .on('/timeline/multiple-days-weeks-months-quarters-years-variable-resolution', () => {
    loadPage(TimelineMultipleDaysWeeksMonthsQuartersYearsVariableResolution);
  })
  .on('/timeline/move-resize-drag-drop-to-create-events', () => {
    loadPage(TimelineMoveResizeDragDropToCreateEvents);
  })
  .on('/timeline/event-data-structure', () => {
    loadPage(TimelineEventDataStructure);
  })
  .on('/timeline/date-object-ISO-8601-moment', () => {
    loadPage(TimelineDateObjectISO8601Moment);
  })
  .on('/timeline/recurring-events', () => {
    loadPage(TimelineRecurringEvents);
  })
  .on('/timeline/load-events-from-remote-api', () => {
    loadPage(TimelineLoadEventsFromRemoteApi);
  })
  .on('/timeline/load-events-on-demand', () => {
    loadPage(TimelineLoadEventsOnDemand);
  })
  .on('/timeline/create-read-update-delete-CRUD', () => {
    loadPage(TimelineCreateReadUpdateDeleteCRUD);
  })
  .on('/timeline/themes-ios-material-windows', () => {
    loadPage(TimelineThemesIosMaterialWindows);
  })
  .on('/timeline/gregorian-jalali-hijri', () => {
    loadPage(TimelineGregorianJalaliHijri);
  })
  .on('/timeline/event-hooks', () => {
    loadPage(TimelineEventHooks);
  })
  .on('/timeline/localization', () => {
    loadPage(TimelineLocalization);
  })
  .on('/timeline/rtl-right-to-left', () => {
    loadPage(TimelineRtlRightToLeft);
  })
  .on('/timeline/load-inline-data', () => {
    loadPage(TimelineLoadInlineData);
  })
  .on('/timeline/sync-events-google-calendar', () => {
    loadPage(TimelineSyncEventsGoogleCalendar);
  })
  .on('/timeline/sync-events-outlook-calendar', () => {
    loadPage(TimelineSyncEventsOutlookCalendar);
  })
  .on('/timeline/disallow-past-event-creation', () => {
    loadPage(TimelineDisallowPastEventCreation);
  })
  .on('/timeline/load-events-from-google-calendar', () => {
    loadPage(TimelineLoadEventsFromGoogleCalendar);
  })
  .on('/timeline/custom-range-view', () => {
    loadPage(TimelineCustomRangeView);
  })
  .on('/timeline/dynamically-color-and-invalidate', () => {
    loadPage(TimelineDynamicallyColorAndInvalidate);
  })
  .on('/timeline/event-bulk-actions-edit-delete-update', () => {
    loadPage(TimelineEventBulkActionsEditDeleteUpdate);
  })
  .on('/timeline/loading-big-data-sets', () => {
    loadPage(TimelineLoadingBigDataSets);
  })
  .on('/timeline/connecting-linking-events-arrows', () => {
    loadPage(TimelineConnectingLinkingEventsArrows);
  })
  .on('/timeline/searching-events-in-sidebar', () => {
    loadPage(TimelineSearchingEventsInSidebar);
  })
  .on('/timeline/colors-invalids-css-class', () => {
    loadPage(TimelineColorsInvalidsCssClass);
  })
  .on('/timeline/hour-day-week-month-quarter-year-header-footer-template', () => {
    loadPage(TimelineHourDayWeekMonthQuarterYearHeaderFooterTemplate);
  })
  .on('/timeline/setting-row-height', () => {
    loadPage(TimelineSettingRowHeight);
  })
  .on('/timeline/monthly-timetable-vertical-days-horizontal-times', () => {
    loadPage(TimelineMonthlyTimetableVerticalDaysHorizontalTimes);
  })
  .on('/timeline/multi-classroom-timetable', () => {
    loadPage(TimelineMultiClassroomTimetable);
  })
  .on('/timeline/load-resources-on-demand', () => {
    loadPage(TimelineLoadResourcesOnDemand);
  })
  .on('/timeline/resource-data-structure', () => {
    loadPage(TimelineResourceDataStructure);
  })
  .on('/timeline/conditional-move-resize', () => {
    loadPage(TimelineConditionalMoveResize);
  })
  .on('/timeline/drag-drop-between-calendar-instances', () => {
    loadPage(TimelineDragDropBetweenCalendarInstances);
  })
  .on('/timeline/prevent-double-booking-events', () => {
    loadPage(TimelinePreventDoubleBookingEvents);
  })
  .on('/timeline/compare-resources-fixed-at-top', () => {
    loadPage(TimelineCompareResourcesFixedAtTop);
  })
  .on('/timeline/assign-unassign-work-orders-fixed-top-row', () => {
    loadPage(TimelineAssignUnassignWorkOrdersFixedTopRow);
  })
  .on('/timeline/control-number-of-concurrently-shown-events', () => {
    loadPage(TimelineControlNumberOfConcurrentlyShownEvents);
  })
  .on('/timeline/flight-scheduling-two-synchronized-timelines', () => {
    loadPage(TimelineFlightSchedulingTwoSynchronizedTimelines);
  });

document.addEventListener('click', (ev) => {
  const link = ev.target.closest('.app-link');
  if (link) {
    ev.preventDefault();
    router.pushState(link.getAttribute('href'));
  }
});
