import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DatetimeMobileDesktopUsage from '../demos/datetime/datetime/mobile-desktop-usage/mobile-desktop-usage.vue'
import DatetimeUsageOnInputOrInline from '../demos/datetime/datetime/usage-on-input-or-inline/usage-on-input-or-inline.vue'
import DatetimeResponsive from '../demos/datetime/datetime/responsive/responsive.vue'
import DatetimeMobileDesktopDisplay from '../demos/datetime/datetime/mobile-desktop-display/mobile-desktop-display.vue'
import DatetimeDatePicker from '../demos/datetime/datetime/date-picker/date-picker.vue'
import DatetimeTimePicker from '../demos/datetime/datetime/time-picker/time-picker.vue'
import DatetimeDateTimePicker from '../demos/datetime/datetime/date-time-picker/date-time-picker.vue'
import DatetimeTimeValueSteps from '../demos/datetime/datetime/time-value-steps/time-value-steps.vue'
import DatetimeSingleSelect from '../demos/datetime/datetime/single-select/single-select.vue'
import DatetimeRangeSelect from '../demos/datetime/datetime/range-select/range-select.vue'
import DatetimeDateObjectISO8601Moment from '../demos/datetime/datetime/date-object-ISO-8601-moment/date-object-ISO-8601-moment.vue'
import DatetimeFormattingReturnValues from '../demos/datetime/datetime/formatting-return-values/formatting-return-values.vue'
import DatetimeMonthYearPicker from '../demos/datetime/datetime/month-year-picker/month-year-picker.vue'
import DatetimeSettingValuesDefaults from '../demos/datetime/datetime/setting-values-defaults/setting-values-defaults.vue'
import DatetimeSettingThePickerTimezone from '../demos/datetime/datetime/setting-the-picker-timezone/setting-the-picker-timezone.vue'
import DatetimeMinMaxRestrictions from '../demos/datetime/datetime/min-max-restrictions/min-max-restrictions.vue'
import DatetimeDisabledInvalidValues from '../demos/datetime/datetime/disabled-invalid-values/disabled-invalid-values.vue'
import DatetimeRecurringValues from '../demos/datetime/datetime/recurring-values/recurring-values.vue'
import DatetimeThemesIosMaterialWindows from '../demos/datetime/datetime/themes-ios-material-windows/themes-ios-material-windows.vue'
import DatetimeEventHooks from '../demos/datetime/datetime/event-hooks/event-hooks.vue'
import DatetimeGregorianJalaliHijri from '../demos/datetime/datetime/gregorian-jalali-hijri/gregorian-jalali-hijri.vue'
import DatetimeLocalization from '../demos/datetime/datetime/localization/localization.vue'
import DatetimeRtlRightToLeft from '../demos/datetime/datetime/rtl-right-to-left/rtl-right-to-left.vue'
import CalendarMobileDesktopUsage from '../demos/calendar/calendar/mobile-desktop-usage/mobile-desktop-usage.vue'
import CalendarUsageOnInputOrInline from '../demos/calendar/calendar/usage-on-input-or-inline/usage-on-input-or-inline.vue'
import CalendarResponsive from '../demos/calendar/calendar/responsive/responsive.vue'
import CalendarMobileDesktopDisplay from '../demos/calendar/calendar/mobile-desktop-display/mobile-desktop-display.vue'
import CalendarAppointmentBooking from '../demos/calendar/calendar/appointment-booking/appointment-booking.vue'
import CalendarActivityCalendar from '../demos/calendar/calendar/activity-calendar/activity-calendar.vue'
import CalendarDatePicker from '../demos/calendar/calendar/date-picker/date-picker.vue'
import CalendarDateTimePicker from '../demos/calendar/calendar/date-time-picker/date-time-picker.vue'
import CalendarWeekView from '../demos/calendar/calendar/week-view/week-view.vue'
import CalendarMultipleMonths from '../demos/calendar/calendar/multiple-months/multiple-months.vue'
import CalendarQuarterYearView from '../demos/calendar/calendar/quarter-year-view/quarter-year-view.vue'
import CalendarWeekToMonth from '../demos/calendar/calendar/week-to-month/week-to-month.vue'
import CalendarDotsColorsLabels from '../demos/calendar/calendar/dots-colors-labels/dots-colors-labels.vue'
import CalendarMonthChangeDirectionWeekNumbersOuterDays from '../demos/calendar/calendar/month-change-direction-week-numbers-outer-days/month-change-direction-week-numbers-outer-days.vue'
import CalendarSingleSelect from '../demos/calendar/calendar/single-select/single-select.vue'
import CalendarMultipleSelect from '../demos/calendar/calendar/multiple-select/multiple-select.vue'
import CalendarWeekSelect from '../demos/calendar/calendar/week-select/week-select.vue'
import CalendarRangeSelect from '../demos/calendar/calendar/range-select/range-select.vue'
import CalendarDateObjectISO8601Moment from '../demos/calendar/calendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment.vue'
import CalendarFormattingReturnValues from '../demos/calendar/calendar/formatting-return-values/formatting-return-values.vue'
import CalendarSettingValuesDefaults from '../demos/calendar/calendar/setting-values-defaults/setting-values-defaults.vue'
import CalendarSettingThePickerTimezone from '../demos/calendar/calendar/setting-the-picker-timezone/setting-the-picker-timezone.vue'
import CalendarMinMaxRestrictions from '../demos/calendar/calendar/min-max-restrictions/min-max-restrictions.vue'
import CalendarDisabledInvalidValues from '../demos/calendar/calendar/disabled-invalid-values/disabled-invalid-values.vue'
import CalendarRecurringValues from '../demos/calendar/calendar/recurring-values/recurring-values.vue'
import CalendarThemesIosMaterialWindows from '../demos/calendar/calendar/themes-ios-material-windows/themes-ios-material-windows.vue'
import CalendarCustomizingHeader from '../demos/calendar/calendar/customizing-header/customizing-header.vue'
import CalendarCustomizeMarkedDayShapes from '../demos/calendar/calendar/customize-marked-day-shapes/customize-marked-day-shapes.vue'
import CalendarHalfDayStyling from '../demos/calendar/calendar/half-day-styling/half-day-styling.vue'
import CalendarEventHooks from '../demos/calendar/calendar/event-hooks/event-hooks.vue'
import CalendarGregorianJalaliHijri from '../demos/calendar/calendar/gregorian-jalali-hijri/gregorian-jalali-hijri.vue'
import CalendarLocalization from '../demos/calendar/calendar/localization/localization.vue'
import CalendarRtlRightToLeft from '../demos/calendar/calendar/rtl-right-to-left/rtl-right-to-left.vue'
import SelectMobileDesktopUsage from '../demos/select/select/mobile-desktop-usage/mobile-desktop-usage.vue'
import SelectResponsive from '../demos/select/select/responsive/responsive.vue'
import SelectMobileDesktopDisplay from '../demos/select/select/mobile-desktop-display/mobile-desktop-display.vue'
import SelectDataSources from '../demos/select/select/data-sources/data-sources.vue'
import SelectItemTemplating from '../demos/select/select/item-templating/item-templating.vue'
import SelectCountryPicker from '../demos/select/select/country-picker/country-picker.vue'
import SelectImageText from '../demos/select/select/image-text/image-text.vue'
import SelectMultipleLines from '../demos/select/select/multiple-lines/multiple-lines.vue'
import SelectSingleSelect from '../demos/select/select/single-select/single-select.vue'
import SelectMultipleSelect from '../demos/select/select/multiple-select/multiple-select.vue'
import SelectGroupOptions from '../demos/select/select/group-options/group-options.vue'
import SelectFilteringValues from '../demos/select/select/filtering-values/filtering-values.vue'
import SelectLinkedHierarchicalPickers from '../demos/select/select/linked-hierarchical-pickers/linked-hierarchical-pickers.vue'
import SelectSettingValuesDefaults from '../demos/select/select/setting-values-defaults/setting-values-defaults.vue'
import SelectDisabledInvalidValues from '../demos/select/select/disabled-invalid-values/disabled-invalid-values.vue'
import SelectThemesIosMaterialWindows from '../demos/select/select/themes-ios-material-windows/themes-ios-material-windows.vue'
import SelectEventHooks from '../demos/select/select/event-hooks/event-hooks.vue'
import SelectLocalization from '../demos/select/select/localization/localization.vue'
import SelectRtlRightToLeft from '../demos/select/select/rtl-right-to-left/rtl-right-to-left.vue'
import RangeMobileDesktopUsage from '../demos/range/range/mobile-desktop-usage/mobile-desktop-usage.vue'
import RangeUsageOnInputOrInline from '../demos/range/range/usage-on-input-or-inline/usage-on-input-or-inline.vue'
import RangeResponsive from '../demos/range/range/responsive/responsive.vue'
import RangeCalendarScrollerDropdown from '../demos/range/range/calendar-scroller-dropdown/calendar-scroller-dropdown.vue'
import RangeMobileDesktopDisplay from '../demos/range/range/mobile-desktop-display/mobile-desktop-display.vue'
import RangeDateFilteringWithPredefinedRanges from '../demos/range/range/date-filtering-with-predefined-ranges/date-filtering-with-predefined-ranges.vue'
import RangeFlightBooking from '../demos/range/range/flight-booking/flight-booking.vue'
import RangeBookRentalMonthsAhead from '../demos/range/range/book-rental-months-ahead/book-rental-months-ahead.vue'
import RangeAddingEventStartEnd from '../demos/range/range/adding-event-start-end/adding-event-start-end.vue'
import RangeDateRange from '../demos/range/range/date-range/date-range.vue'
import RangeTimeRange from '../demos/range/range/time-range/time-range.vue'
import RangeDateTimeRange from '../demos/range/range/date-time-range/date-time-range.vue'
import RangeWeekMonthViewScrollingDirection from '../demos/range/range/week-month-view-scrolling-direction/week-month-view-scrolling-direction.vue'
import RangeCustomizingLabelsSelection from '../demos/range/range/customizing-labels-selection/customizing-labels-selection.vue'
import RangeDotsColorsLabels from '../demos/range/range/dots-colors-labels/dots-colors-labels.vue'
import RangePresets from '../demos/range/range/presets/presets.vue'
import RangeDateObjectISO8601Moment from '../demos/range/range/date-object-ISO-8601-moment/date-object-ISO-8601-moment.vue'
import RangeFormattingReturnValues from '../demos/range/range/formatting-return-values/formatting-return-values.vue'
import RangeSettingThePickerTimezone from '../demos/range/range/setting-the-picker-timezone/setting-the-picker-timezone.vue'
import RangeMinMaxLength from '../demos/range/range/min-max-length/min-max-length.vue'
import RangeMinMaxRestrictions from '../demos/range/range/min-max-restrictions/min-max-restrictions.vue'
import RangeDisabledInvalidValues from '../demos/range/range/disabled-invalid-values/disabled-invalid-values.vue'
import RangeRecurringValues from '../demos/range/range/recurring-values/recurring-values.vue'
import RangeThemesIosMaterialWindows from '../demos/range/range/themes-ios-material-windows/themes-ios-material-windows.vue'
import RangeCustomizeMarkedDayShapes from '../demos/range/range/customize-marked-day-shapes/customize-marked-day-shapes.vue'
import RangeHalfDayStyling from '../demos/range/range/half-day-styling/half-day-styling.vue'
import RangeEventHooks from '../demos/range/range/event-hooks/event-hooks.vue'
import RangeGregorianJalaliHijri from '../demos/range/range/gregorian-jalali-hijri/gregorian-jalali-hijri.vue'
import RangeLocalization from '../demos/range/range/localization/localization.vue'
import RangeRtlRightToLeft from '../demos/range/range/rtl-right-to-left/rtl-right-to-left.vue'
import AlertsNotificationsAlert from '../demos/forms/alerts-notifications/alert/alert.vue'
import AlertsNotificationsNotifications from '../demos/forms/alerts-notifications/notifications/notifications.vue'
import FormsMobile from '../demos/forms/forms/mobile/mobile.vue'
import FormsDesktop from '../demos/forms/forms/desktop/desktop.vue'
import FormsResponsive from '../demos/forms/forms/responsive/responsive.vue'
import FormsPopup from '../demos/forms/forms/popup/popup.vue'
import FormsAlertConfirmPrompt from '../demos/forms/forms/alert-confirm-prompt/alert-confirm-prompt.vue'
import FormsNotifications from '../demos/forms/forms/notifications/notifications.vue'
import FormsButtons from '../demos/forms/forms/buttons/buttons.vue'
import FormsSegmented from '../demos/forms/forms/segmented/segmented.vue'
import FormsStepper from '../demos/forms/forms/stepper/stepper.vue'
import FormsButtonSegmentedStepperColors from '../demos/forms/forms/button-segmented-stepper-colors/button-segmented-stepper-colors.vue'
import FormsInputsTextAreasDateFields from '../demos/forms/forms/inputs-text-areas-date-fields/inputs-text-areas-date-fields.vue'
import FormsInputLabelTypes from '../demos/forms/forms/input-label-types/input-label-types.vue'
import FormsCheckbox from '../demos/forms/forms/checkbox/checkbox.vue'
import FormsSwitch from '../demos/forms/forms/switch/switch.vue'
import FormsRadioButton from '../demos/forms/forms/radio-button/radio-button.vue'
import FormsThemesIosMaterialWindows from '../demos/forms/forms/themes-ios-material-windows/themes-ios-material-windows.vue'
import EventcalendarMobileMonthView from '../demos/eventcalendar/eventcalendar/mobile-month-view/mobile-month-view.vue'
import EventcalendarDesktopMonthView from '../demos/eventcalendar/eventcalendar/desktop-month-view/desktop-month-view.vue'
import EventcalendarResponsiveMonthView from '../demos/eventcalendar/eventcalendar/responsive-month-view/responsive-month-view.vue'
import EventcalendarPrintingTheView from '../demos/eventcalendar/eventcalendar/printing-the-view/printing-the-view.vue'
import EventcalendarEventLabels from '../demos/eventcalendar/eventcalendar/event-labels/event-labels.vue'
import EventcalendarEventPopover from '../demos/eventcalendar/eventcalendar/event-popover/event-popover.vue'
import EventcalendarCustomEventSort from '../demos/eventcalendar/eventcalendar/custom-event-sort/custom-event-sort.vue'
import EventcalendarSettingTheTimezone from '../demos/eventcalendar/eventcalendar/setting-the-timezone/setting-the-timezone.vue'
import EventcalendarMultipleTimezoneSupport from '../demos/eventcalendar/eventcalendar/multiple-timezone-support/multiple-timezone-support.vue'
import EventcalendarSearchingEventsInPopup from '../demos/eventcalendar/eventcalendar/searching-events-in-popup/searching-events-in-popup.vue'
import EventcalendarSearchingEventsInSidebar from '../demos/eventcalendar/eventcalendar/searching-events-in-sidebar/searching-events-in-sidebar.vue'
import EventcalendarMonthWeekView from '../demos/eventcalendar/eventcalendar/month-week-view/month-week-view.vue'
import EventcalendarQuarterYearView from '../demos/eventcalendar/eventcalendar/quarter-year-view/quarter-year-view.vue'
import EventcalendarShowMoreAllLabels from '../demos/eventcalendar/eventcalendar/show-more-all-labels/show-more-all-labels.vue'
import EventcalendarColoredCellBackground from '../demos/eventcalendar/eventcalendar/colored-cell-background/colored-cell-background.vue'
import EventcalendarSwitchingDayWeekMonthView from '../demos/eventcalendar/eventcalendar/switching-day-week-month-view/switching-day-week-month-view.vue'
import EventcalendarCustomizeLabelLookAndFeel from '../demos/eventcalendar/eventcalendar/customize-label-look-and-feel/customize-label-look-and-feel.vue'
import EventcalendarCustomizeEventPopover from '../demos/eventcalendar/eventcalendar/customize-event-popover/customize-event-popover.vue'
import EventcalendarCustomizingHeader from '../demos/eventcalendar/eventcalendar/customizing-header/customizing-header.vue'
import EventcalendarCustomEventTooltip from '../demos/eventcalendar/eventcalendar/custom-event-tooltip/custom-event-tooltip.vue'
import EventcalendarMoveResizeDragDropToCreateEvents from '../demos/eventcalendar/eventcalendar/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events.vue'
import EventcalendarConditionalMoveResize from '../demos/eventcalendar/eventcalendar/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource.vue'
import EventcalendarDragDropBetweenCalendarInstances from '../demos/eventcalendar/eventcalendar/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances.vue'
import EventcalendarBlockedDaysRanges from '../demos/eventcalendar/eventcalendar/blocked-days-ranges/blocked-days-ranges.vue'
import EventcalendarPreventDoubleBookingEvents from '../demos/eventcalendar/eventcalendar/prevent-double-booking-events/prevent-double-booking-events.vue'
import EventcalendarExternalDragDropScheduleUnschedule from '../demos/eventcalendar/eventcalendar/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule.vue'
import EventcalendarExternalEventPresets from '../demos/eventcalendar/eventcalendar/external-event-presets/external-event-presets.vue'
import EventcalendarResourceFilteringInHeader from '../demos/eventcalendar/eventcalendar/resource-filtering-in-header/resource-filtering-in-header.vue'
import EventcalendarEventDataStructure from '../demos/eventcalendar/eventcalendar/event-data-structure/event-data-structure.vue'
import EventcalendarDateObjectISO8601Moment from '../demos/eventcalendar/eventcalendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment.vue'
import EventcalendarRecurringEvents from '../demos/eventcalendar/eventcalendar/recurring-events/recurring-events.vue'
import EventcalendarLoadInlineData from '../demos/eventcalendar/eventcalendar/load-inline-data/load-inline-data.vue'
import EventcalendarLoadEventsFromRemoteApi from '../demos/eventcalendar/eventcalendar/load-events-from-remote-api/load-events-from-remote-api.vue'
import EventcalendarLoadEventsOnDemand from '../demos/eventcalendar/eventcalendar/load-events-on-demand/load-events-on-demand.vue'
import EventcalendarSyncEventsGoogleCalendar from '../demos/eventcalendar/eventcalendar/sync-events-google-calendar/sync-events-google-calendar.vue'
import EventcalendarSyncEventsOutlookCalendar from '../demos/eventcalendar/eventcalendar/sync-events-outlook-calendar/sync-events-outlook-calendar.vue'
import EventcalendarLoadEventsFromGoogleCalendar from '../demos/eventcalendar/eventcalendar/load-events-from-google-calendar/load-events-from-google-calendar.vue'
import EventcalendarCreateReadUpdateDeleteCRUD from '../demos/eventcalendar/eventcalendar/create-read-update-delete-CRUD/create-read-update-delete-CRUD.vue'
import EventcalendarRecurringEventAddEditDialog from '../demos/eventcalendar/eventcalendar/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog.vue'
import EventcalendarDisallowPastEventCreation from '../demos/eventcalendar/eventcalendar/disallow-past-event-creation/disallow-past-event-creation.vue'
import EventcalendarEventBulkActionsEditDeleteUpdate from '../demos/eventcalendar/eventcalendar/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update.vue'
import EventcalendarCutCopyPasteEventsBetweenCalendars from '../demos/eventcalendar/eventcalendar/cut-copy-paste-events-between-calendars/cut-copy-paste-events-between-calendars.vue'
import EventcalendarThemesIosMaterialWindows from '../demos/eventcalendar/eventcalendar/themes-ios-material-windows/themes-ios-material-windows.vue'
import EventcalendarLocalization from '../demos/eventcalendar/eventcalendar/localization/localization.vue'
import EventcalendarGregorianJalaliHijri from '../demos/eventcalendar/eventcalendar/gregorian-jalali-hijri/gregorian-jalali-hijri.vue'
import EventcalendarEventHooks from '../demos/eventcalendar/eventcalendar/event-hooks/event-hooks.vue'
import SchedulerMobileDayView from '../demos/eventcalendar/scheduler/mobile-day-view/mobile-day-view.vue'
import SchedulerDesktopDayView from '../demos/eventcalendar/scheduler/desktop-day-view/desktop-day-view.vue'
import SchedulerMobileWeekView from '../demos/eventcalendar/scheduler/mobile-week-view/mobile-week-view.vue'
import SchedulerDesktopWeekView from '../demos/eventcalendar/scheduler/desktop-week-view/desktop-week-view.vue'
import SchedulerResponsiveDayWeekSchedule from '../demos/eventcalendar/scheduler/responsive-day-week-schedule/responsive-day-week-schedule.vue'
import SchedulerPrintingTheView from '../demos/eventcalendar/scheduler/printing-the-view/printing-the-view.vue'
import SchedulerWorkWeekHours from '../demos/eventcalendar/scheduler/work-week-hours/work-week-hours.vue'
import SchedulerDoctorsAppointment from '../demos/eventcalendar/scheduler/doctors-appointment/doctors-appointment.vue'
import SchedulerCustomRangeView from '../demos/eventcalendar/scheduler/custom-range-view/custom-range-view.vue'
import SchedulerControlNumberOfConcurrentlyShownEvents from '../demos/eventcalendar/scheduler/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events.vue'
import SchedulerDisplayMultipleDaysWeeks from '../demos/eventcalendar/scheduler/display-multiple-days-weeks/display-multiple-days-weeks.vue'
import SchedulerDisableAllDayEvents from '../demos/eventcalendar/scheduler/disable-all-day-events/disable-all-day-events.vue'
import SchedulerColoredCellBackground from '../demos/eventcalendar/scheduler/colored-cell-background/colored-cell-background.vue'
import SchedulerColorsInvalidsCssClass from '../demos/eventcalendar/scheduler/colors-invalids-css-class/colors-invalids-css-class.vue'
import SchedulerSwitchingCalendarSchedulerAgenda from '../demos/eventcalendar/scheduler/switching-calendar-scheduler-agenda/switching-calendar-scheduler-agenda.vue'
import SchedulerShowHideHoursDays from '../demos/eventcalendar/scheduler/show-hide-hours-days/show-hide-hours-days.vue'
import SchedulerSettingTheTimezone from '../demos/eventcalendar/scheduler/setting-the-timezone/setting-the-timezone.vue'
import SchedulerMultipleTimezoneSupport from '../demos/eventcalendar/scheduler/multiple-timezone-support/multiple-timezone-support.vue'
import SchedulerShowMultipleTimezones from '../demos/eventcalendar/scheduler/show-multiple-timezones/show-multiple-timezones.vue'
import SchedulerSearchingEventsInSidebar from '../demos/eventcalendar/scheduler/searching-events-in-sidebar/searching-events-in-sidebar.vue'
import SchedulerCustomEventTooltip from '../demos/eventcalendar/scheduler/custom-event-tooltip/custom-event-tooltip.vue'
import SchedulerCustomizingEvents from '../demos/eventcalendar/scheduler/customizing-events/customizing-events.vue'
import SchedulerDateHeaderTemplate from '../demos/eventcalendar/scheduler/date-header-template/date-header-template.vue'
import SchedulerCustomResourceHeaderTemplate from '../demos/eventcalendar/scheduler/custom-resource-header-template/custom-resource-header-template.vue'
import SchedulerCustomizingHeader from '../demos/eventcalendar/scheduler/customizing-header/customizing-header.vue'
import SchedulerMoveResizeDragDropToCreateEvents from '../demos/eventcalendar/scheduler/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events.vue'
import SchedulerConditionalMoveResize from '../demos/eventcalendar/scheduler/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource.vue'
import SchedulerDragDropBetweenCalendarInstances from '../demos/eventcalendar/scheduler/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances.vue'
import SchedulerTimeOffBlockedRanges from '../demos/eventcalendar/scheduler/time-off-blocked-ranges/time-off-blocked-ranges.vue'
import SchedulerPreventDoubleBookingEvents from '../demos/eventcalendar/scheduler/prevent-double-booking-events/prevent-double-booking-events.vue'
import SchedulerExternalDragDropScheduleUnschedule from '../demos/eventcalendar/scheduler/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule.vue'
import SchedulerExternalEventPresets from '../demos/eventcalendar/scheduler/external-event-presets/external-event-presets.vue'
import SchedulerResourceView from '../demos/eventcalendar/scheduler/resource-view/resource-view.vue'
import SchedulerGroupByResourceByDay from '../demos/eventcalendar/scheduler/group-by-resource-by-day/group-by-resource-by-day.vue'
import SchedulerSharedEventsAcrossResources from '../demos/eventcalendar/scheduler/shared-events-across-resources/shared-events-across-resources.vue'
import SchedulerDynamicAddRemoveResourcesFilter from '../demos/eventcalendar/scheduler/dynamic-add-remove-resources-filter/dynamic-add-remove-resources-filter.vue'
import SchedulerResourceDataStructure from '../demos/eventcalendar/scheduler/resource-data-structure/resource-data-structure.vue'
import SchedulerEventDataStructure from '../demos/eventcalendar/scheduler/event-data-structure/event-data-structure.vue'
import SchedulerDateObjectISO8601Moment from '../demos/eventcalendar/scheduler/date-object-ISO-8601-moment/date-object-ISO-8601-moment.vue'
import SchedulerRecurringEvents from '../demos/eventcalendar/scheduler/recurring-events/recurring-events.vue'
import SchedulerLoadInlineData from '../demos/eventcalendar/scheduler/load-inline-data/load-inline-data.vue'
import SchedulerLoadEventsFromRemoteApi from '../demos/eventcalendar/scheduler/load-events-from-remote-api/load-events-from-remote-api.vue'
import SchedulerLoadEventsOnDemand from '../demos/eventcalendar/scheduler/load-events-on-demand/load-events-on-demand.vue'
import SchedulerSyncEventsGoogleCalendar from '../demos/eventcalendar/scheduler/sync-events-google-calendar/sync-events-google-calendar.vue'
import SchedulerSyncEventsOutlookCalendar from '../demos/eventcalendar/scheduler/sync-events-outlook-calendar/sync-events-outlook-calendar.vue'
import SchedulerLoadEventsFromGoogleCalendar from '../demos/eventcalendar/scheduler/load-events-from-google-calendar/load-events-from-google-calendar.vue'
import SchedulerCreateReadUpdateDeleteCRUD from '../demos/eventcalendar/scheduler/create-read-update-delete-CRUD/create-read-update-delete-CRUD.vue'
import SchedulerEventBulkActionsEditDeleteUpdate from '../demos/eventcalendar/scheduler/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update.vue'
import SchedulerRecurringEventAddEditDialog from '../demos/eventcalendar/scheduler/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog.vue'
import SchedulerDisallowPastEventCreation from '../demos/eventcalendar/scheduler/disallow-past-event-creation/disallow-past-event-creation.vue'
import SchedulerResourceFilteringInHeader from '../demos/eventcalendar/scheduler/resource-filtering-in-header/resource-filtering-in-header.vue'
import SchedulerThemesIosMaterialWindows from '../demos/eventcalendar/scheduler/themes-ios-material-windows/themes-ios-material-windows.vue'
import SchedulerGregorianJalaliHijri from '../demos/eventcalendar/scheduler/gregorian-jalali-hijri/gregorian-jalali-hijri.vue'
import SchedulerEventHooks from '../demos/eventcalendar/scheduler/event-hooks/event-hooks.vue'
import SchedulerLocalization from '../demos/eventcalendar/scheduler/localization/localization.vue'
import AgendaDailyAgendaWithWeekCalendar from '../demos/eventcalendar/agenda/daily-agenda-with-week-calendar/daily-agenda-with-week-calendar.vue'
import AgendaBasicUsage from '../demos/eventcalendar/agenda/basic-usage/basic-usage.vue'
import AgendaDailyWeeklyMonthlyAnnualAgenda from '../demos/eventcalendar/agenda/daily-weekly-monthly-annual-agenda/daily-weekly-monthly-annual-agenda.vue'
import AgendaPrintingTheView from '../demos/eventcalendar/agenda/printing-the-view/printing-the-view.vue'
import AgendaSynchronizedViews from '../demos/eventcalendar/agenda/synchronized-views/synchronized-views.vue'
import AgendaCustomEventSort from '../demos/eventcalendar/agenda/custom-event-sort/custom-event-sort.vue'
import AgendaSettingTheTimezone from '../demos/eventcalendar/agenda/setting-the-timezone/setting-the-timezone.vue'
import AgendaSearchingEventsInPopup from '../demos/eventcalendar/agenda/searching-events-in-popup/searching-events-in-popup.vue'
import AgendaEventContentCustomization from '../demos/eventcalendar/agenda/event-content-customization/event-content-customization.vue'
import AgendaFullEventCustomization from '../demos/eventcalendar/agenda/full-event-customization/full-event-customization.vue'
import AgendaCustomizingHeader from '../demos/eventcalendar/agenda/customizing-header/customizing-header.vue'
import AgendaCustomEventTooltip from '../demos/eventcalendar/agenda/custom-event-tooltip/custom-event-tooltip.vue'
import AgendaResourceFilteringInHeader from '../demos/eventcalendar/agenda/resource-filtering-in-header/resource-filtering-in-header.vue'
import AgendaEmptyState from '../demos/eventcalendar/agenda/empty-state/empty-state.vue'
import AgendaEventDataStructure from '../demos/eventcalendar/agenda/event-data-structure/event-data-structure.vue'
import AgendaDateObjectISO8601Moment from '../demos/eventcalendar/agenda/date-object-ISO-8601-moment/date-object-ISO-8601-moment.vue'
import AgendaRecurringEvents from '../demos/eventcalendar/agenda/recurring-events/recurring-events.vue'
import AgendaLoadInlineData from '../demos/eventcalendar/agenda/load-inline-data/load-inline-data.vue'
import AgendaLoadEventsFromRemoteApi from '../demos/eventcalendar/agenda/load-events-from-remote-api/load-events-from-remote-api.vue'
import AgendaLoadEventsOnDemand from '../demos/eventcalendar/agenda/load-events-on-demand/load-events-on-demand.vue'
import AgendaSyncEventsGoogleCalendar from '../demos/eventcalendar/agenda/sync-events-google-calendar/sync-events-google-calendar.vue'
import AgendaSyncEventsOutlookCalendar from '../demos/eventcalendar/agenda/sync-events-outlook-calendar/sync-events-outlook-calendar.vue'
import AgendaLoadEventsFromGoogleCalendar from '../demos/eventcalendar/agenda/load-events-from-google-calendar/load-events-from-google-calendar.vue'
import AgendaEventBulkActionsEditDeleteUpdate from '../demos/eventcalendar/agenda/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update.vue'
import AgendaThemesIosMaterialWindows from '../demos/eventcalendar/agenda/themes-ios-material-windows/themes-ios-material-windows.vue'
import AgendaEventHooks from '../demos/eventcalendar/agenda/event-hooks/event-hooks.vue'
import AgendaGregorianJalaliHijri from '../demos/eventcalendar/agenda/gregorian-jalali-hijri/gregorian-jalali-hijri.vue'
import AgendaLocalization from '../demos/eventcalendar/agenda/localization/localization.vue'
import TimelineMonthView from '../demos/eventcalendar/timeline/month-view/month-view.vue'
import TimelineTimelineTimeGrid from '../demos/eventcalendar/timeline/timeline-time-grid/timeline-time-grid.vue'
import TimelinePrintingTheView from '../demos/eventcalendar/timeline/printing-the-view/printing-the-view.vue'
import TimelineEmployeeShifts from '../demos/eventcalendar/timeline/employee-shifts/employee-shifts.vue'
import TimelineWorkOrderScheduling from '../demos/eventcalendar/timeline/work-order-scheduling/work-order-scheduling.vue'
import TimelineTimezoneMeetingPlanner from '../demos/eventcalendar/timeline/timezone-meeting-planner/timezone-meeting-planner.vue'
import TimelineRestaurantShiftManagement from '../demos/eventcalendar/timeline/restaurant-shift-management/restaurant-shift-management.vue'
import TimelineMealPlanner from '../demos/eventcalendar/timeline/meal-planner/meal-planner.vue'
import TimelineDynamicallyColorAndInvalidate from '../demos/eventcalendar/timeline/dynamically-color-and-invalidate/dynamically-color-and-invalidate.vue'
import TimelineMultiClassroomTimetable from '../demos/eventcalendar/timeline/multi-classroom-timetable/multi-classroom-timetable.vue'
import TimelineMonthlyTimetableVerticalDaysHorizontalTimes from '../demos/eventcalendar/timeline/monthly-timetable-vertical-days-horizontal-times/monthly-timetable-vertical-days-horizontal-times.vue'
import TimelineCompareResourcesFixedAtTop from '../demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top.vue'
import TimelineAssignUnassignWorkOrdersFixedTopRow from '../demos/eventcalendar/timeline/assign-unassign-work-orders-fixed-top-row/assign-unassign-work-orders-fixed-top-row.vue'
import TimelineFlightSchedulingTwoSynchronizedTimelines from '../demos/eventcalendar/timeline/flight-scheduling-two-synchronized-timelines/flight-scheduling-two-synchronized-timelines.vue'
import TimelineDailyWeeklyMonthlyYearlyTimeline from '../demos/eventcalendar/timeline/daily-weekly-monthly-yearly-timeline/daily-weekly-monthly-yearly-timeline.vue'
import TimelineMultipleDaysWeeksMonthsQuartersYearsVariableResolution from '../demos/eventcalendar/timeline/multiple-days-weeks-months-quarters-years-variable-resolution/multiple-days-weeks-months-quarters-years-variable-resolution.vue'
import TimelineControlNumberOfConcurrentlyShownEvents from '../demos/eventcalendar/timeline/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events.vue'
import TimelineCustomRangeView from '../demos/eventcalendar/timeline/custom-range-view/custom-range-view.vue'
import TimelineColorsInvalidsCssClass from '../demos/eventcalendar/timeline/colors-invalids-css-class/colors-invalids-css-class.vue'
import TimelineTimelineResourceHeight from '../demos/eventcalendar/timeline/timeline-resource-height/timeline-resource-height.vue'
import TimelineEventListing from '../demos/eventcalendar/timeline/event-listing/event-listing.vue'
import TimelineSwitchingDayWeekWorkWeekTimeline from '../demos/eventcalendar/timeline/switching-day-week-work-week-timeline/switching-day-week-work-week-timeline.vue'
import TimelineSettingTheTimezone from '../demos/eventcalendar/timeline/setting-the-timezone/setting-the-timezone.vue'
import TimelineMultipleTimezoneSupport from '../demos/eventcalendar/timeline/multiple-timezone-support/multiple-timezone-support.vue'
import TimelineSearchingEventsInSidebar from '../demos/eventcalendar/timeline/searching-events-in-sidebar/searching-events-in-sidebar.vue'
import TimelineTimelineCustomEventRendering from '../demos/eventcalendar/timeline/timeline-custom-event-rendering/timeline-custom-event-rendering.vue'
import TimelineHourDayWeekMonthQuarterYearHeaderFooterTemplate from '../demos/eventcalendar/timeline/hour-day-week-month-quarter-year-header-footer-template/hour-day-week-month-quarter-year-header-footer-template.vue'
import TimelineShiftTemplate from '../demos/eventcalendar/timeline/shift-template/shift-template.vue'
import TimelineResourceHeaderTemplate from '../demos/eventcalendar/timeline/resource-header-template/resource-header-template.vue'
import TimelineCustomEventTooltip from '../demos/eventcalendar/timeline/custom-event-tooltip/custom-event-tooltip.vue'
import TimelineSettingRowHeight from '../demos/eventcalendar/timeline/setting-row-height/setting-row-height.vue'
import TimelineMoveResizeDragDropToCreateEvents from '../demos/eventcalendar/timeline/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events.vue'
import TimelineConditionalMoveResize from '../demos/eventcalendar/timeline/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource.vue'
import TimelineDragDropBetweenCalendarInstances from '../demos/eventcalendar/timeline/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances.vue'
import TimelinePreventDoubleBookingEvents from '../demos/eventcalendar/timeline/prevent-double-booking-events/prevent-double-booking-events.vue'
import TimelineTimelineResourceDetailsSidePanelFooter from '../demos/eventcalendar/timeline/timeline-resource-details-side-panel-footer/timeline-resource-details-side-panel-footer.vue'
import TimelineResourceGroupingHierarchy from '../demos/eventcalendar/timeline/resource-grouping-hierarchy/resource-grouping-hierarchy.vue'
import TimelineResourceDataStructure from '../demos/eventcalendar/timeline/resource-data-structure/resource-data-structure.vue'
import TimelineEventDataStructure from '../demos/eventcalendar/timeline/event-data-structure/event-data-structure.vue'
import TimelineConnectingLinkingEventsArrows from '../demos/eventcalendar/timeline/connecting-linking-events-arrows/connecting-linking-events-arrows.vue'
import TimelineDateObjectISO8601Moment from '../demos/eventcalendar/timeline/date-object-ISO-8601-moment/date-object-ISO-8601-moment.vue'
import TimelineRecurringEvents from '../demos/eventcalendar/timeline/recurring-events/recurring-events.vue'
import TimelineLoadInlineData from '../demos/eventcalendar/timeline/load-inline-data/load-inline-data.vue'
import TimelineLoadEventsFromRemoteApi from '../demos/eventcalendar/timeline/load-events-from-remote-api/load-events-from-remote-api.vue'
import TimelineLoadEventsOnDemand from '../demos/eventcalendar/timeline/load-events-on-demand/load-events-on-demand.vue'
import TimelineLoadResourcesOnDemand from '../demos/eventcalendar/timeline/load-resources-on-demand/load-resources-on-demand.vue'
import TimelineLoadingBigDataSets from '../demos/eventcalendar/timeline/loading-big-data-sets/loading-big-data-sets.vue'
import TimelineSyncEventsGoogleCalendar from '../demos/eventcalendar/timeline/sync-events-google-calendar/sync-events-google-calendar.vue'
import TimelineSyncEventsOutlookCalendar from '../demos/eventcalendar/timeline/sync-events-outlook-calendar/sync-events-outlook-calendar.vue'
import TimelineLoadEventsFromGoogleCalendar from '../demos/eventcalendar/timeline/load-events-from-google-calendar/load-events-from-google-calendar.vue'
import TimelineCreateReadUpdateDeleteCRUD from '../demos/eventcalendar/timeline/create-read-update-delete-CRUD/create-read-update-delete-CRUD.vue'
import TimelineDisallowPastEventCreation from '../demos/eventcalendar/timeline/disallow-past-event-creation/disallow-past-event-creation.vue'
import TimelineEventBulkActionsEditDeleteUpdate from '../demos/eventcalendar/timeline/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update.vue'
import TimelineThemesIosMaterialWindows from '../demos/eventcalendar/timeline/themes-ios-material-windows/themes-ios-material-windows.vue'
import TimelineGregorianJalaliHijri from '../demos/eventcalendar/timeline/gregorian-jalali-hijri/gregorian-jalali-hijri.vue'
import TimelineEventHooks from '../demos/eventcalendar/timeline/event-hooks/event-hooks.vue'
import TimelineLocalization from '../demos/eventcalendar/timeline/localization/localization.vue'
import TimelineRtlRightToLeft from '../demos/eventcalendar/timeline/rtl-right-to-left/rtl-right-to-left.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/datetime/mobile-desktop-usage',
      name: 'datetime/mobile-desktop-usage',
      component: DatetimeMobileDesktopUsage
    },
    {
      path: '/datetime/usage-on-input-or-inline',
      name: 'datetime/usage-on-input-or-inline',
      component: DatetimeUsageOnInputOrInline
    },
    {
      path: '/datetime/responsive',
      name: 'datetime/responsive',
      component: DatetimeResponsive
    },
    {
      path: '/datetime/mobile-desktop-display',
      name: 'datetime/mobile-desktop-display',
      component: DatetimeMobileDesktopDisplay
    },
    {
      path: '/datetime/date-picker',
      name: 'datetime/date-picker',
      component: DatetimeDatePicker
    },
    {
      path: '/datetime/time-picker',
      name: 'datetime/time-picker',
      component: DatetimeTimePicker
    },
    {
      path: '/datetime/date-time-picker',
      name: 'datetime/date-time-picker',
      component: DatetimeDateTimePicker
    },
    {
      path: '/datetime/time-value-steps',
      name: 'datetime/time-value-steps',
      component: DatetimeTimeValueSteps
    },
    {
      path: '/datetime/single-select',
      name: 'datetime/single-select',
      component: DatetimeSingleSelect
    },
    {
      path: '/datetime/range-select',
      name: 'datetime/range-select',
      component: DatetimeRangeSelect
    },
    {
      path: '/datetime/date-object-ISO-8601-moment',
      name: 'datetime/date-object-ISO-8601-moment',
      component: DatetimeDateObjectISO8601Moment
    },
    {
      path: '/datetime/formatting-return-values',
      name: 'datetime/formatting-return-values',
      component: DatetimeFormattingReturnValues
    },
    {
      path: '/datetime/month-year-picker',
      name: 'datetime/month-year-picker',
      component: DatetimeMonthYearPicker
    },
    {
      path: '/datetime/setting-values-defaults',
      name: 'datetime/setting-values-defaults',
      component: DatetimeSettingValuesDefaults
    },
    {
      path: '/datetime/setting-the-picker-timezone',
      name: 'datetime/setting-the-picker-timezone',
      component: DatetimeSettingThePickerTimezone
    },
    {
      path: '/datetime/min-max-restrictions',
      name: 'datetime/min-max-restrictions',
      component: DatetimeMinMaxRestrictions
    },
    {
      path: '/datetime/disabled-invalid-values',
      name: 'datetime/disabled-invalid-values',
      component: DatetimeDisabledInvalidValues
    },
    {
      path: '/datetime/recurring-values',
      name: 'datetime/recurring-values',
      component: DatetimeRecurringValues
    },
    {
      path: '/datetime/themes-ios-material-windows',
      name: 'datetime/themes-ios-material-windows',
      component: DatetimeThemesIosMaterialWindows
    },
    {
      path: '/datetime/event-hooks',
      name: 'datetime/event-hooks',
      component: DatetimeEventHooks
    },
    {
      path: '/datetime/gregorian-jalali-hijri',
      name: 'datetime/gregorian-jalali-hijri',
      component: DatetimeGregorianJalaliHijri
    },
    {
      path: '/datetime/localization',
      name: 'datetime/localization',
      component: DatetimeLocalization
    },
    {
      path: '/datetime/rtl-right-to-left',
      name: 'datetime/rtl-right-to-left',
      component: DatetimeRtlRightToLeft
    },
    {
      path: '/calendar/mobile-desktop-usage',
      name: 'calendar/mobile-desktop-usage',
      component: CalendarMobileDesktopUsage
    },
    {
      path: '/calendar/usage-on-input-or-inline',
      name: 'calendar/usage-on-input-or-inline',
      component: CalendarUsageOnInputOrInline
    },
    {
      path: '/calendar/responsive',
      name: 'calendar/responsive',
      component: CalendarResponsive
    },
    {
      path: '/calendar/mobile-desktop-display',
      name: 'calendar/mobile-desktop-display',
      component: CalendarMobileDesktopDisplay
    },
    {
      path: '/calendar/appointment-booking',
      name: 'calendar/appointment-booking',
      component: CalendarAppointmentBooking
    },
    {
      path: '/calendar/activity-calendar',
      name: 'calendar/activity-calendar',
      component: CalendarActivityCalendar
    },
    {
      path: '/calendar/date-picker',
      name: 'calendar/date-picker',
      component: CalendarDatePicker
    },
    {
      path: '/calendar/date-time-picker',
      name: 'calendar/date-time-picker',
      component: CalendarDateTimePicker
    },
    {
      path: '/calendar/week-view',
      name: 'calendar/week-view',
      component: CalendarWeekView
    },
    {
      path: '/calendar/multiple-months',
      name: 'calendar/multiple-months',
      component: CalendarMultipleMonths
    },
    {
      path: '/calendar/quarter-year-view',
      name: 'calendar/quarter-year-view',
      component: CalendarQuarterYearView
    },
    {
      path: '/calendar/week-to-month',
      name: 'calendar/week-to-month',
      component: CalendarWeekToMonth
    },
    {
      path: '/calendar/dots-colors-labels',
      name: 'calendar/dots-colors-labels',
      component: CalendarDotsColorsLabels
    },
    {
      path: '/calendar/month-change-direction-week-numbers-outer-days',
      name: 'calendar/month-change-direction-week-numbers-outer-days',
      component: CalendarMonthChangeDirectionWeekNumbersOuterDays
    },
    {
      path: '/calendar/single-select',
      name: 'calendar/single-select',
      component: CalendarSingleSelect
    },
    {
      path: '/calendar/multiple-select',
      name: 'calendar/multiple-select',
      component: CalendarMultipleSelect
    },
    {
      path: '/calendar/week-select',
      name: 'calendar/week-select',
      component: CalendarWeekSelect
    },
    {
      path: '/calendar/range-select',
      name: 'calendar/range-select',
      component: CalendarRangeSelect
    },
    {
      path: '/calendar/date-object-ISO-8601-moment',
      name: 'calendar/date-object-ISO-8601-moment',
      component: CalendarDateObjectISO8601Moment
    },
    {
      path: '/calendar/formatting-return-values',
      name: 'calendar/formatting-return-values',
      component: CalendarFormattingReturnValues
    },
    {
      path: '/calendar/setting-values-defaults',
      name: 'calendar/setting-values-defaults',
      component: CalendarSettingValuesDefaults
    },
    {
      path: '/calendar/setting-the-picker-timezone',
      name: 'calendar/setting-the-picker-timezone',
      component: CalendarSettingThePickerTimezone
    },
    {
      path: '/calendar/min-max-restrictions',
      name: 'calendar/min-max-restrictions',
      component: CalendarMinMaxRestrictions
    },
    {
      path: '/calendar/disabled-invalid-values',
      name: 'calendar/disabled-invalid-values',
      component: CalendarDisabledInvalidValues
    },
    {
      path: '/calendar/recurring-values',
      name: 'calendar/recurring-values',
      component: CalendarRecurringValues
    },
    {
      path: '/calendar/themes-ios-material-windows',
      name: 'calendar/themes-ios-material-windows',
      component: CalendarThemesIosMaterialWindows
    },
    {
      path: '/calendar/customizing-header',
      name: 'calendar/customizing-header',
      component: CalendarCustomizingHeader
    },
    {
      path: '/calendar/customize-marked-day-shapes',
      name: 'calendar/customize-marked-day-shapes',
      component: CalendarCustomizeMarkedDayShapes
    },
    {
      path: '/calendar/half-day-styling',
      name: 'calendar/half-day-styling',
      component: CalendarHalfDayStyling
    },
    {
      path: '/calendar/event-hooks',
      name: 'calendar/event-hooks',
      component: CalendarEventHooks
    },
    {
      path: '/calendar/gregorian-jalali-hijri',
      name: 'calendar/gregorian-jalali-hijri',
      component: CalendarGregorianJalaliHijri
    },
    {
      path: '/calendar/localization',
      name: 'calendar/localization',
      component: CalendarLocalization
    },
    {
      path: '/calendar/rtl-right-to-left',
      name: 'calendar/rtl-right-to-left',
      component: CalendarRtlRightToLeft
    },
    {
      path: '/select/mobile-desktop-usage',
      name: 'select/mobile-desktop-usage',
      component: SelectMobileDesktopUsage
    },
    {
      path: '/select/responsive',
      name: 'select/responsive',
      component: SelectResponsive
    },
    {
      path: '/select/mobile-desktop-display',
      name: 'select/mobile-desktop-display',
      component: SelectMobileDesktopDisplay
    },
    {
      path: '/select/data-sources',
      name: 'select/data-sources',
      component: SelectDataSources
    },
    {
      path: '/select/item-templating',
      name: 'select/item-templating',
      component: SelectItemTemplating
    },
    {
      path: '/select/country-picker',
      name: 'select/country-picker',
      component: SelectCountryPicker
    },
    {
      path: '/select/image-text',
      name: 'select/image-text',
      component: SelectImageText
    },
    {
      path: '/select/multiple-lines',
      name: 'select/multiple-lines',
      component: SelectMultipleLines
    },
    {
      path: '/select/single-select',
      name: 'select/single-select',
      component: SelectSingleSelect
    },
    {
      path: '/select/multiple-select',
      name: 'select/multiple-select',
      component: SelectMultipleSelect
    },
    {
      path: '/select/group-options',
      name: 'select/group-options',
      component: SelectGroupOptions
    },
    {
      path: '/select/filtering-values',
      name: 'select/filtering-values',
      component: SelectFilteringValues
    },
    {
      path: '/select/linked-hierarchical-pickers',
      name: 'select/linked-hierarchical-pickers',
      component: SelectLinkedHierarchicalPickers
    },
    {
      path: '/select/setting-values-defaults',
      name: 'select/setting-values-defaults',
      component: SelectSettingValuesDefaults
    },
    {
      path: '/select/disabled-invalid-values',
      name: 'select/disabled-invalid-values',
      component: SelectDisabledInvalidValues
    },
    {
      path: '/select/themes-ios-material-windows',
      name: 'select/themes-ios-material-windows',
      component: SelectThemesIosMaterialWindows
    },
    {
      path: '/select/event-hooks',
      name: 'select/event-hooks',
      component: SelectEventHooks
    },
    {
      path: '/select/localization',
      name: 'select/localization',
      component: SelectLocalization
    },
    {
      path: '/select/rtl-right-to-left',
      name: 'select/rtl-right-to-left',
      component: SelectRtlRightToLeft
    },
    {
      path: '/range/mobile-desktop-usage',
      name: 'range/mobile-desktop-usage',
      component: RangeMobileDesktopUsage
    },
    {
      path: '/range/usage-on-input-or-inline',
      name: 'range/usage-on-input-or-inline',
      component: RangeUsageOnInputOrInline
    },
    {
      path: '/range/responsive',
      name: 'range/responsive',
      component: RangeResponsive
    },
    {
      path: '/range/calendar-scroller-dropdown',
      name: 'range/calendar-scroller-dropdown',
      component: RangeCalendarScrollerDropdown
    },
    {
      path: '/range/mobile-desktop-display',
      name: 'range/mobile-desktop-display',
      component: RangeMobileDesktopDisplay
    },
    {
      path: '/range/date-filtering-with-predefined-ranges',
      name: 'range/date-filtering-with-predefined-ranges',
      component: RangeDateFilteringWithPredefinedRanges
    },
    {
      path: '/range/flight-booking',
      name: 'range/flight-booking',
      component: RangeFlightBooking
    },
    {
      path: '/range/book-rental-months-ahead',
      name: 'range/book-rental-months-ahead',
      component: RangeBookRentalMonthsAhead
    },
    {
      path: '/range/adding-event-start-end',
      name: 'range/adding-event-start-end',
      component: RangeAddingEventStartEnd
    },
    {
      path: '/range/date-range',
      name: 'range/date-range',
      component: RangeDateRange
    },
    {
      path: '/range/time-range',
      name: 'range/time-range',
      component: RangeTimeRange
    },
    {
      path: '/range/date-time-range',
      name: 'range/date-time-range',
      component: RangeDateTimeRange
    },
    {
      path: '/range/week-month-view-scrolling-direction',
      name: 'range/week-month-view-scrolling-direction',
      component: RangeWeekMonthViewScrollingDirection
    },
    {
      path: '/range/customizing-labels-selection',
      name: 'range/customizing-labels-selection',
      component: RangeCustomizingLabelsSelection
    },
    {
      path: '/range/dots-colors-labels',
      name: 'range/dots-colors-labels',
      component: RangeDotsColorsLabels
    },
    {
      path: '/range/presets',
      name: 'range/presets',
      component: RangePresets
    },
    {
      path: '/range/date-object-ISO-8601-moment',
      name: 'range/date-object-ISO-8601-moment',
      component: RangeDateObjectISO8601Moment
    },
    {
      path: '/range/formatting-return-values',
      name: 'range/formatting-return-values',
      component: RangeFormattingReturnValues
    },
    {
      path: '/range/setting-the-picker-timezone',
      name: 'range/setting-the-picker-timezone',
      component: RangeSettingThePickerTimezone
    },
    {
      path: '/range/min-max-length',
      name: 'range/min-max-length',
      component: RangeMinMaxLength
    },
    {
      path: '/range/min-max-restrictions',
      name: 'range/min-max-restrictions',
      component: RangeMinMaxRestrictions
    },
    {
      path: '/range/disabled-invalid-values',
      name: 'range/disabled-invalid-values',
      component: RangeDisabledInvalidValues
    },
    {
      path: '/range/recurring-values',
      name: 'range/recurring-values',
      component: RangeRecurringValues
    },
    {
      path: '/range/themes-ios-material-windows',
      name: 'range/themes-ios-material-windows',
      component: RangeThemesIosMaterialWindows
    },
    {
      path: '/range/customize-marked-day-shapes',
      name: 'range/customize-marked-day-shapes',
      component: RangeCustomizeMarkedDayShapes
    },
    {
      path: '/range/half-day-styling',
      name: 'range/half-day-styling',
      component: RangeHalfDayStyling
    },
    {
      path: '/range/event-hooks',
      name: 'range/event-hooks',
      component: RangeEventHooks
    },
    {
      path: '/range/gregorian-jalali-hijri',
      name: 'range/gregorian-jalali-hijri',
      component: RangeGregorianJalaliHijri
    },
    {
      path: '/range/localization',
      name: 'range/localization',
      component: RangeLocalization
    },
    {
      path: '/range/rtl-right-to-left',
      name: 'range/rtl-right-to-left',
      component: RangeRtlRightToLeft
    },
    {
      path: '/alerts-notifications/alert',
      name: 'alerts-notifications/alert',
      component: AlertsNotificationsAlert
    },
    {
      path: '/alerts-notifications/notifications',
      name: 'alerts-notifications/notifications',
      component: AlertsNotificationsNotifications
    },
    {
      path: '/forms/mobile',
      name: 'forms/mobile',
      component: FormsMobile
    },
    {
      path: '/forms/desktop',
      name: 'forms/desktop',
      component: FormsDesktop
    },
    {
      path: '/forms/responsive',
      name: 'forms/responsive',
      component: FormsResponsive
    },
    {
      path: '/forms/popup',
      name: 'forms/popup',
      component: FormsPopup
    },
    {
      path: '/forms/alert-confirm-prompt',
      name: 'forms/alert-confirm-prompt',
      component: FormsAlertConfirmPrompt
    },
    {
      path: '/forms/notifications',
      name: 'forms/notifications',
      component: FormsNotifications
    },
    {
      path: '/forms/buttons',
      name: 'forms/buttons',
      component: FormsButtons
    },
    {
      path: '/forms/segmented',
      name: 'forms/segmented',
      component: FormsSegmented
    },
    {
      path: '/forms/stepper',
      name: 'forms/stepper',
      component: FormsStepper
    },
    {
      path: '/forms/button-segmented-stepper-colors',
      name: 'forms/button-segmented-stepper-colors',
      component: FormsButtonSegmentedStepperColors
    },
    {
      path: '/forms/inputs-text-areas-date-fields',
      name: 'forms/inputs-text-areas-date-fields',
      component: FormsInputsTextAreasDateFields
    },
    {
      path: '/forms/input-label-types',
      name: 'forms/input-label-types',
      component: FormsInputLabelTypes
    },
    {
      path: '/forms/checkbox',
      name: 'forms/checkbox',
      component: FormsCheckbox
    },
    {
      path: '/forms/switch',
      name: 'forms/switch',
      component: FormsSwitch
    },
    {
      path: '/forms/radio-button',
      name: 'forms/radio-button',
      component: FormsRadioButton
    },
    {
      path: '/forms/themes-ios-material-windows',
      name: 'forms/themes-ios-material-windows',
      component: FormsThemesIosMaterialWindows
    },
    {
      path: '/eventcalendar/mobile-month-view',
      name: 'eventcalendar/mobile-month-view',
      component: EventcalendarMobileMonthView
    },
    {
      path: '/eventcalendar/desktop-month-view',
      name: 'eventcalendar/desktop-month-view',
      component: EventcalendarDesktopMonthView
    },
    {
      path: '/eventcalendar/responsive-month-view',
      name: 'eventcalendar/responsive-month-view',
      component: EventcalendarResponsiveMonthView
    },
    {
      path: '/eventcalendar/printing-the-view',
      name: 'eventcalendar/printing-the-view',
      component: EventcalendarPrintingTheView
    },
    {
      path: '/eventcalendar/event-labels',
      name: 'eventcalendar/event-labels',
      component: EventcalendarEventLabels
    },
    {
      path: '/eventcalendar/event-popover',
      name: 'eventcalendar/event-popover',
      component: EventcalendarEventPopover
    },
    {
      path: '/eventcalendar/custom-event-sort',
      name: 'eventcalendar/custom-event-sort',
      component: EventcalendarCustomEventSort
    },
    {
      path: '/eventcalendar/setting-the-timezone',
      name: 'eventcalendar/setting-the-timezone',
      component: EventcalendarSettingTheTimezone
    },
    {
      path: '/eventcalendar/multiple-timezone-support',
      name: 'eventcalendar/multiple-timezone-support',
      component: EventcalendarMultipleTimezoneSupport
    },
    {
      path: '/eventcalendar/searching-events-in-popup',
      name: 'eventcalendar/searching-events-in-popup',
      component: EventcalendarSearchingEventsInPopup
    },
    {
      path: '/eventcalendar/searching-events-in-sidebar',
      name: 'eventcalendar/searching-events-in-sidebar',
      component: EventcalendarSearchingEventsInSidebar
    },
    {
      path: '/eventcalendar/month-week-view',
      name: 'eventcalendar/month-week-view',
      component: EventcalendarMonthWeekView
    },
    {
      path: '/eventcalendar/quarter-year-view',
      name: 'eventcalendar/quarter-year-view',
      component: EventcalendarQuarterYearView
    },
    {
      path: '/eventcalendar/show-more-all-labels',
      name: 'eventcalendar/show-more-all-labels',
      component: EventcalendarShowMoreAllLabels
    },
    {
      path: '/eventcalendar/colored-cell-background',
      name: 'eventcalendar/colored-cell-background',
      component: EventcalendarColoredCellBackground
    },
    {
      path: '/eventcalendar/switching-day-week-month-view',
      name: 'eventcalendar/switching-day-week-month-view',
      component: EventcalendarSwitchingDayWeekMonthView
    },
    {
      path: '/eventcalendar/customize-label-look-and-feel',
      name: 'eventcalendar/customize-label-look-and-feel',
      component: EventcalendarCustomizeLabelLookAndFeel
    },
    {
      path: '/eventcalendar/customize-event-popover',
      name: 'eventcalendar/customize-event-popover',
      component: EventcalendarCustomizeEventPopover
    },
    {
      path: '/eventcalendar/customizing-header',
      name: 'eventcalendar/customizing-header',
      component: EventcalendarCustomizingHeader
    },
    {
      path: '/eventcalendar/custom-event-tooltip',
      name: 'eventcalendar/custom-event-tooltip',
      component: EventcalendarCustomEventTooltip
    },
    {
      path: '/eventcalendar/move-resize-drag-drop-to-create-events',
      name: 'eventcalendar/move-resize-drag-drop-to-create-events',
      component: EventcalendarMoveResizeDragDropToCreateEvents
    },
    {
      path: '/eventcalendar/conditional-move-resize',
      name: 'eventcalendar/conditional-move-resize',
      component: EventcalendarConditionalMoveResize
    },
    {
      path: '/eventcalendar/drag-drop-between-calendar-instances',
      name: 'eventcalendar/drag-drop-between-calendar-instances',
      component: EventcalendarDragDropBetweenCalendarInstances
    },
    {
      path: '/eventcalendar/blocked-days-ranges',
      name: 'eventcalendar/blocked-days-ranges',
      component: EventcalendarBlockedDaysRanges
    },
    {
      path: '/eventcalendar/prevent-double-booking-events',
      name: 'eventcalendar/prevent-double-booking-events',
      component: EventcalendarPreventDoubleBookingEvents
    },
    {
      path: '/eventcalendar/external-drag-drop-schedule-unschedule',
      name: 'eventcalendar/external-drag-drop-schedule-unschedule',
      component: EventcalendarExternalDragDropScheduleUnschedule
    },
    {
      path: '/eventcalendar/external-event-presets',
      name: 'eventcalendar/external-event-presets',
      component: EventcalendarExternalEventPresets
    },
    {
      path: '/eventcalendar/resource-filtering-in-header',
      name: 'eventcalendar/resource-filtering-in-header',
      component: EventcalendarResourceFilteringInHeader
    },
    {
      path: '/eventcalendar/event-data-structure',
      name: 'eventcalendar/event-data-structure',
      component: EventcalendarEventDataStructure
    },
    {
      path: '/eventcalendar/date-object-ISO-8601-moment',
      name: 'eventcalendar/date-object-ISO-8601-moment',
      component: EventcalendarDateObjectISO8601Moment
    },
    {
      path: '/eventcalendar/recurring-events',
      name: 'eventcalendar/recurring-events',
      component: EventcalendarRecurringEvents
    },
    {
      path: '/eventcalendar/load-inline-data',
      name: 'eventcalendar/load-inline-data',
      component: EventcalendarLoadInlineData
    },
    {
      path: '/eventcalendar/load-events-from-remote-api',
      name: 'eventcalendar/load-events-from-remote-api',
      component: EventcalendarLoadEventsFromRemoteApi
    },
    {
      path: '/eventcalendar/load-events-on-demand',
      name: 'eventcalendar/load-events-on-demand',
      component: EventcalendarLoadEventsOnDemand
    },
    {
      path: '/eventcalendar/sync-events-google-calendar',
      name: 'eventcalendar/sync-events-google-calendar',
      component: EventcalendarSyncEventsGoogleCalendar
    },
    {
      path: '/eventcalendar/sync-events-outlook-calendar',
      name: 'eventcalendar/sync-events-outlook-calendar',
      component: EventcalendarSyncEventsOutlookCalendar
    },
    {
      path: '/eventcalendar/load-events-from-google-calendar',
      name: 'eventcalendar/load-events-from-google-calendar',
      component: EventcalendarLoadEventsFromGoogleCalendar
    },
    {
      path: '/eventcalendar/create-read-update-delete-CRUD',
      name: 'eventcalendar/create-read-update-delete-CRUD',
      component: EventcalendarCreateReadUpdateDeleteCRUD
    },
    {
      path: '/eventcalendar/recurring-event-add-edit-dialog',
      name: 'eventcalendar/recurring-event-add-edit-dialog',
      component: EventcalendarRecurringEventAddEditDialog
    },
    {
      path: '/eventcalendar/disallow-past-event-creation',
      name: 'eventcalendar/disallow-past-event-creation',
      component: EventcalendarDisallowPastEventCreation
    },
    {
      path: '/eventcalendar/event-bulk-actions-edit-delete-update',
      name: 'eventcalendar/event-bulk-actions-edit-delete-update',
      component: EventcalendarEventBulkActionsEditDeleteUpdate
    },
    {
      path: '/eventcalendar/cut-copy-paste-events-between-calendars',
      name: 'eventcalendar/cut-copy-paste-events-between-calendars',
      component: EventcalendarCutCopyPasteEventsBetweenCalendars
    },
    {
      path: '/eventcalendar/themes-ios-material-windows',
      name: 'eventcalendar/themes-ios-material-windows',
      component: EventcalendarThemesIosMaterialWindows
    },
    {
      path: '/eventcalendar/localization',
      name: 'eventcalendar/localization',
      component: EventcalendarLocalization
    },
    {
      path: '/eventcalendar/gregorian-jalali-hijri',
      name: 'eventcalendar/gregorian-jalali-hijri',
      component: EventcalendarGregorianJalaliHijri
    },
    {
      path: '/eventcalendar/event-hooks',
      name: 'eventcalendar/event-hooks',
      component: EventcalendarEventHooks
    },
    {
      path: '/scheduler/mobile-day-view',
      name: 'scheduler/mobile-day-view',
      component: SchedulerMobileDayView
    },
    {
      path: '/scheduler/desktop-day-view',
      name: 'scheduler/desktop-day-view',
      component: SchedulerDesktopDayView
    },
    {
      path: '/scheduler/mobile-week-view',
      name: 'scheduler/mobile-week-view',
      component: SchedulerMobileWeekView
    },
    {
      path: '/scheduler/desktop-week-view',
      name: 'scheduler/desktop-week-view',
      component: SchedulerDesktopWeekView
    },
    {
      path: '/scheduler/responsive-day-week-schedule',
      name: 'scheduler/responsive-day-week-schedule',
      component: SchedulerResponsiveDayWeekSchedule
    },
    {
      path: '/scheduler/printing-the-view',
      name: 'scheduler/printing-the-view',
      component: SchedulerPrintingTheView
    },
    {
      path: '/scheduler/work-week-hours',
      name: 'scheduler/work-week-hours',
      component: SchedulerWorkWeekHours
    },
    {
      path: '/scheduler/doctors-appointment',
      name: 'scheduler/doctors-appointment',
      component: SchedulerDoctorsAppointment
    },
    {
      path: '/scheduler/custom-range-view',
      name: 'scheduler/custom-range-view',
      component: SchedulerCustomRangeView
    },
    {
      path: '/scheduler/control-number-of-concurrently-shown-events',
      name: 'scheduler/control-number-of-concurrently-shown-events',
      component: SchedulerControlNumberOfConcurrentlyShownEvents
    },
    {
      path: '/scheduler/display-multiple-days-weeks',
      name: 'scheduler/display-multiple-days-weeks',
      component: SchedulerDisplayMultipleDaysWeeks
    },
    {
      path: '/scheduler/disable-all-day-events',
      name: 'scheduler/disable-all-day-events',
      component: SchedulerDisableAllDayEvents
    },
    {
      path: '/scheduler/colored-cell-background',
      name: 'scheduler/colored-cell-background',
      component: SchedulerColoredCellBackground
    },
    {
      path: '/scheduler/colors-invalids-css-class',
      name: 'scheduler/colors-invalids-css-class',
      component: SchedulerColorsInvalidsCssClass
    },
    {
      path: '/scheduler/switching-calendar-scheduler-agenda',
      name: 'scheduler/switching-calendar-scheduler-agenda',
      component: SchedulerSwitchingCalendarSchedulerAgenda
    },
    {
      path: '/scheduler/show-hide-hours-days',
      name: 'scheduler/show-hide-hours-days',
      component: SchedulerShowHideHoursDays
    },
    {
      path: '/scheduler/setting-the-timezone',
      name: 'scheduler/setting-the-timezone',
      component: SchedulerSettingTheTimezone
    },
    {
      path: '/scheduler/multiple-timezone-support',
      name: 'scheduler/multiple-timezone-support',
      component: SchedulerMultipleTimezoneSupport
    },
    {
      path: '/scheduler/show-multiple-timezones',
      name: 'scheduler/show-multiple-timezones',
      component: SchedulerShowMultipleTimezones
    },
    {
      path: '/scheduler/searching-events-in-sidebar',
      name: 'scheduler/searching-events-in-sidebar',
      component: SchedulerSearchingEventsInSidebar
    },
    {
      path: '/scheduler/custom-event-tooltip',
      name: 'scheduler/custom-event-tooltip',
      component: SchedulerCustomEventTooltip
    },
    {
      path: '/scheduler/customizing-events',
      name: 'scheduler/customizing-events',
      component: SchedulerCustomizingEvents
    },
    {
      path: '/scheduler/date-header-template',
      name: 'scheduler/date-header-template',
      component: SchedulerDateHeaderTemplate
    },
    {
      path: '/scheduler/custom-resource-header-template',
      name: 'scheduler/custom-resource-header-template',
      component: SchedulerCustomResourceHeaderTemplate
    },
    {
      path: '/scheduler/customizing-header',
      name: 'scheduler/customizing-header',
      component: SchedulerCustomizingHeader
    },
    {
      path: '/scheduler/move-resize-drag-drop-to-create-events',
      name: 'scheduler/move-resize-drag-drop-to-create-events',
      component: SchedulerMoveResizeDragDropToCreateEvents
    },
    {
      path: '/scheduler/conditional-move-resize',
      name: 'scheduler/conditional-move-resize',
      component: SchedulerConditionalMoveResize
    },
    {
      path: '/scheduler/drag-drop-between-calendar-instances',
      name: 'scheduler/drag-drop-between-calendar-instances',
      component: SchedulerDragDropBetweenCalendarInstances
    },
    {
      path: '/scheduler/time-off-blocked-ranges',
      name: 'scheduler/time-off-blocked-ranges',
      component: SchedulerTimeOffBlockedRanges
    },
    {
      path: '/scheduler/prevent-double-booking-events',
      name: 'scheduler/prevent-double-booking-events',
      component: SchedulerPreventDoubleBookingEvents
    },
    {
      path: '/scheduler/external-drag-drop-schedule-unschedule',
      name: 'scheduler/external-drag-drop-schedule-unschedule',
      component: SchedulerExternalDragDropScheduleUnschedule
    },
    {
      path: '/scheduler/external-event-presets',
      name: 'scheduler/external-event-presets',
      component: SchedulerExternalEventPresets
    },
    {
      path: '/scheduler/resource-view',
      name: 'scheduler/resource-view',
      component: SchedulerResourceView
    },
    {
      path: '/scheduler/group-by-resource-by-day',
      name: 'scheduler/group-by-resource-by-day',
      component: SchedulerGroupByResourceByDay
    },
    {
      path: '/scheduler/shared-events-across-resources',
      name: 'scheduler/shared-events-across-resources',
      component: SchedulerSharedEventsAcrossResources
    },
    {
      path: '/scheduler/dynamic-add-remove-resources-filter',
      name: 'scheduler/dynamic-add-remove-resources-filter',
      component: SchedulerDynamicAddRemoveResourcesFilter
    },
    {
      path: '/scheduler/resource-data-structure',
      name: 'scheduler/resource-data-structure',
      component: SchedulerResourceDataStructure
    },
    {
      path: '/scheduler/event-data-structure',
      name: 'scheduler/event-data-structure',
      component: SchedulerEventDataStructure
    },
    {
      path: '/scheduler/date-object-ISO-8601-moment',
      name: 'scheduler/date-object-ISO-8601-moment',
      component: SchedulerDateObjectISO8601Moment
    },
    {
      path: '/scheduler/recurring-events',
      name: 'scheduler/recurring-events',
      component: SchedulerRecurringEvents
    },
    {
      path: '/scheduler/load-inline-data',
      name: 'scheduler/load-inline-data',
      component: SchedulerLoadInlineData
    },
    {
      path: '/scheduler/load-events-from-remote-api',
      name: 'scheduler/load-events-from-remote-api',
      component: SchedulerLoadEventsFromRemoteApi
    },
    {
      path: '/scheduler/load-events-on-demand',
      name: 'scheduler/load-events-on-demand',
      component: SchedulerLoadEventsOnDemand
    },
    {
      path: '/scheduler/sync-events-google-calendar',
      name: 'scheduler/sync-events-google-calendar',
      component: SchedulerSyncEventsGoogleCalendar
    },
    {
      path: '/scheduler/sync-events-outlook-calendar',
      name: 'scheduler/sync-events-outlook-calendar',
      component: SchedulerSyncEventsOutlookCalendar
    },
    {
      path: '/scheduler/load-events-from-google-calendar',
      name: 'scheduler/load-events-from-google-calendar',
      component: SchedulerLoadEventsFromGoogleCalendar
    },
    {
      path: '/scheduler/create-read-update-delete-CRUD',
      name: 'scheduler/create-read-update-delete-CRUD',
      component: SchedulerCreateReadUpdateDeleteCRUD
    },
    {
      path: '/scheduler/event-bulk-actions-edit-delete-update',
      name: 'scheduler/event-bulk-actions-edit-delete-update',
      component: SchedulerEventBulkActionsEditDeleteUpdate
    },
    {
      path: '/scheduler/recurring-event-add-edit-dialog',
      name: 'scheduler/recurring-event-add-edit-dialog',
      component: SchedulerRecurringEventAddEditDialog
    },
    {
      path: '/scheduler/disallow-past-event-creation',
      name: 'scheduler/disallow-past-event-creation',
      component: SchedulerDisallowPastEventCreation
    },
    {
      path: '/scheduler/resource-filtering-in-header',
      name: 'scheduler/resource-filtering-in-header',
      component: SchedulerResourceFilteringInHeader
    },
    {
      path: '/scheduler/themes-ios-material-windows',
      name: 'scheduler/themes-ios-material-windows',
      component: SchedulerThemesIosMaterialWindows
    },
    {
      path: '/scheduler/gregorian-jalali-hijri',
      name: 'scheduler/gregorian-jalali-hijri',
      component: SchedulerGregorianJalaliHijri
    },
    {
      path: '/scheduler/event-hooks',
      name: 'scheduler/event-hooks',
      component: SchedulerEventHooks
    },
    {
      path: '/scheduler/localization',
      name: 'scheduler/localization',
      component: SchedulerLocalization
    },
    {
      path: '/agenda/daily-agenda-with-week-calendar',
      name: 'agenda/daily-agenda-with-week-calendar',
      component: AgendaDailyAgendaWithWeekCalendar
    },
    {
      path: '/agenda/basic-usage',
      name: 'agenda/basic-usage',
      component: AgendaBasicUsage
    },
    {
      path: '/agenda/daily-weekly-monthly-annual-agenda',
      name: 'agenda/daily-weekly-monthly-annual-agenda',
      component: AgendaDailyWeeklyMonthlyAnnualAgenda
    },
    {
      path: '/agenda/printing-the-view',
      name: 'agenda/printing-the-view',
      component: AgendaPrintingTheView
    },
    {
      path: '/agenda/synchronized-views',
      name: 'agenda/synchronized-views',
      component: AgendaSynchronizedViews
    },
    {
      path: '/agenda/custom-event-sort',
      name: 'agenda/custom-event-sort',
      component: AgendaCustomEventSort
    },
    {
      path: '/agenda/setting-the-timezone',
      name: 'agenda/setting-the-timezone',
      component: AgendaSettingTheTimezone
    },
    {
      path: '/agenda/searching-events-in-popup',
      name: 'agenda/searching-events-in-popup',
      component: AgendaSearchingEventsInPopup
    },
    {
      path: '/agenda/event-content-customization',
      name: 'agenda/event-content-customization',
      component: AgendaEventContentCustomization
    },
    {
      path: '/agenda/full-event-customization',
      name: 'agenda/full-event-customization',
      component: AgendaFullEventCustomization
    },
    {
      path: '/agenda/customizing-header',
      name: 'agenda/customizing-header',
      component: AgendaCustomizingHeader
    },
    {
      path: '/agenda/custom-event-tooltip',
      name: 'agenda/custom-event-tooltip',
      component: AgendaCustomEventTooltip
    },
    {
      path: '/agenda/resource-filtering-in-header',
      name: 'agenda/resource-filtering-in-header',
      component: AgendaResourceFilteringInHeader
    },
    {
      path: '/agenda/empty-state',
      name: 'agenda/empty-state',
      component: AgendaEmptyState
    },
    {
      path: '/agenda/event-data-structure',
      name: 'agenda/event-data-structure',
      component: AgendaEventDataStructure
    },
    {
      path: '/agenda/date-object-ISO-8601-moment',
      name: 'agenda/date-object-ISO-8601-moment',
      component: AgendaDateObjectISO8601Moment
    },
    {
      path: '/agenda/recurring-events',
      name: 'agenda/recurring-events',
      component: AgendaRecurringEvents
    },
    {
      path: '/agenda/load-inline-data',
      name: 'agenda/load-inline-data',
      component: AgendaLoadInlineData
    },
    {
      path: '/agenda/load-events-from-remote-api',
      name: 'agenda/load-events-from-remote-api',
      component: AgendaLoadEventsFromRemoteApi
    },
    {
      path: '/agenda/load-events-on-demand',
      name: 'agenda/load-events-on-demand',
      component: AgendaLoadEventsOnDemand
    },
    {
      path: '/agenda/sync-events-google-calendar',
      name: 'agenda/sync-events-google-calendar',
      component: AgendaSyncEventsGoogleCalendar
    },
    {
      path: '/agenda/sync-events-outlook-calendar',
      name: 'agenda/sync-events-outlook-calendar',
      component: AgendaSyncEventsOutlookCalendar
    },
    {
      path: '/agenda/load-events-from-google-calendar',
      name: 'agenda/load-events-from-google-calendar',
      component: AgendaLoadEventsFromGoogleCalendar
    },
    {
      path: '/agenda/event-bulk-actions-edit-delete-update',
      name: 'agenda/event-bulk-actions-edit-delete-update',
      component: AgendaEventBulkActionsEditDeleteUpdate
    },
    {
      path: '/agenda/themes-ios-material-windows',
      name: 'agenda/themes-ios-material-windows',
      component: AgendaThemesIosMaterialWindows
    },
    {
      path: '/agenda/event-hooks',
      name: 'agenda/event-hooks',
      component: AgendaEventHooks
    },
    {
      path: '/agenda/gregorian-jalali-hijri',
      name: 'agenda/gregorian-jalali-hijri',
      component: AgendaGregorianJalaliHijri
    },
    {
      path: '/agenda/localization',
      name: 'agenda/localization',
      component: AgendaLocalization
    },
    {
      path: '/timeline/month-view',
      name: 'timeline/month-view',
      component: TimelineMonthView
    },
    {
      path: '/timeline/timeline-time-grid',
      name: 'timeline/timeline-time-grid',
      component: TimelineTimelineTimeGrid
    },
    {
      path: '/timeline/printing-the-view',
      name: 'timeline/printing-the-view',
      component: TimelinePrintingTheView
    },
    {
      path: '/timeline/employee-shifts',
      name: 'timeline/employee-shifts',
      component: TimelineEmployeeShifts
    },
    {
      path: '/timeline/work-order-scheduling',
      name: 'timeline/work-order-scheduling',
      component: TimelineWorkOrderScheduling
    },
    {
      path: '/timeline/timezone-meeting-planner',
      name: 'timeline/timezone-meeting-planner',
      component: TimelineTimezoneMeetingPlanner
    },
    {
      path: '/timeline/restaurant-shift-management',
      name: 'timeline/restaurant-shift-management',
      component: TimelineRestaurantShiftManagement
    },
    {
      path: '/timeline/meal-planner',
      name: 'timeline/meal-planner',
      component: TimelineMealPlanner
    },
    {
      path: '/timeline/dynamically-color-and-invalidate',
      name: 'timeline/dynamically-color-and-invalidate',
      component: TimelineDynamicallyColorAndInvalidate
    },
    {
      path: '/timeline/multi-classroom-timetable',
      name: 'timeline/multi-classroom-timetable',
      component: TimelineMultiClassroomTimetable
    },
    {
      path: '/timeline/monthly-timetable-vertical-days-horizontal-times',
      name: 'timeline/monthly-timetable-vertical-days-horizontal-times',
      component: TimelineMonthlyTimetableVerticalDaysHorizontalTimes
    },
    {
      path: '/timeline/compare-resources-fixed-at-top',
      name: 'timeline/compare-resources-fixed-at-top',
      component: TimelineCompareResourcesFixedAtTop
    },
    {
      path: '/timeline/assign-unassign-work-orders-fixed-top-row',
      name: 'timeline/assign-unassign-work-orders-fixed-top-row',
      component: TimelineAssignUnassignWorkOrdersFixedTopRow
    },
    {
      path: '/timeline/flight-scheduling-two-synchronized-timelines',
      name: 'timeline/flight-scheduling-two-synchronized-timelines',
      component: TimelineFlightSchedulingTwoSynchronizedTimelines
    },
    {
      path: '/timeline/daily-weekly-monthly-yearly-timeline',
      name: 'timeline/daily-weekly-monthly-yearly-timeline',
      component: TimelineDailyWeeklyMonthlyYearlyTimeline
    },
    {
      path: '/timeline/multiple-days-weeks-months-quarters-years-variable-resolution',
      name: 'timeline/multiple-days-weeks-months-quarters-years-variable-resolution',
      component: TimelineMultipleDaysWeeksMonthsQuartersYearsVariableResolution
    },
    {
      path: '/timeline/control-number-of-concurrently-shown-events',
      name: 'timeline/control-number-of-concurrently-shown-events',
      component: TimelineControlNumberOfConcurrentlyShownEvents
    },
    {
      path: '/timeline/custom-range-view',
      name: 'timeline/custom-range-view',
      component: TimelineCustomRangeView
    },
    {
      path: '/timeline/colors-invalids-css-class',
      name: 'timeline/colors-invalids-css-class',
      component: TimelineColorsInvalidsCssClass
    },
    {
      path: '/timeline/timeline-resource-height',
      name: 'timeline/timeline-resource-height',
      component: TimelineTimelineResourceHeight
    },
    {
      path: '/timeline/event-listing',
      name: 'timeline/event-listing',
      component: TimelineEventListing
    },
    {
      path: '/timeline/switching-day-week-work-week-timeline',
      name: 'timeline/switching-day-week-work-week-timeline',
      component: TimelineSwitchingDayWeekWorkWeekTimeline
    },
    {
      path: '/timeline/setting-the-timezone',
      name: 'timeline/setting-the-timezone',
      component: TimelineSettingTheTimezone
    },
    {
      path: '/timeline/multiple-timezone-support',
      name: 'timeline/multiple-timezone-support',
      component: TimelineMultipleTimezoneSupport
    },
    {
      path: '/timeline/searching-events-in-sidebar',
      name: 'timeline/searching-events-in-sidebar',
      component: TimelineSearchingEventsInSidebar
    },
    {
      path: '/timeline/timeline-custom-event-rendering',
      name: 'timeline/timeline-custom-event-rendering',
      component: TimelineTimelineCustomEventRendering
    },
    {
      path: '/timeline/hour-day-week-month-quarter-year-header-footer-template',
      name: 'timeline/hour-day-week-month-quarter-year-header-footer-template',
      component: TimelineHourDayWeekMonthQuarterYearHeaderFooterTemplate
    },
    {
      path: '/timeline/shift-template',
      name: 'timeline/shift-template',
      component: TimelineShiftTemplate
    },
    {
      path: '/timeline/resource-header-template',
      name: 'timeline/resource-header-template',
      component: TimelineResourceHeaderTemplate
    },
    {
      path: '/timeline/custom-event-tooltip',
      name: 'timeline/custom-event-tooltip',
      component: TimelineCustomEventTooltip
    },
    {
      path: '/timeline/setting-row-height',
      name: 'timeline/setting-row-height',
      component: TimelineSettingRowHeight
    },
    {
      path: '/timeline/move-resize-drag-drop-to-create-events',
      name: 'timeline/move-resize-drag-drop-to-create-events',
      component: TimelineMoveResizeDragDropToCreateEvents
    },
    {
      path: '/timeline/conditional-move-resize',
      name: 'timeline/conditional-move-resize',
      component: TimelineConditionalMoveResize
    },
    {
      path: '/timeline/drag-drop-between-calendar-instances',
      name: 'timeline/drag-drop-between-calendar-instances',
      component: TimelineDragDropBetweenCalendarInstances
    },
    {
      path: '/timeline/prevent-double-booking-events',
      name: 'timeline/prevent-double-booking-events',
      component: TimelinePreventDoubleBookingEvents
    },
    {
      path: '/timeline/timeline-resource-details-side-panel-footer',
      name: 'timeline/timeline-resource-details-side-panel-footer',
      component: TimelineTimelineResourceDetailsSidePanelFooter
    },
    {
      path: '/timeline/resource-grouping-hierarchy',
      name: 'timeline/resource-grouping-hierarchy',
      component: TimelineResourceGroupingHierarchy
    },
    {
      path: '/timeline/resource-data-structure',
      name: 'timeline/resource-data-structure',
      component: TimelineResourceDataStructure
    },
    {
      path: '/timeline/event-data-structure',
      name: 'timeline/event-data-structure',
      component: TimelineEventDataStructure
    },
    {
      path: '/timeline/connecting-linking-events-arrows',
      name: 'timeline/connecting-linking-events-arrows',
      component: TimelineConnectingLinkingEventsArrows
    },
    {
      path: '/timeline/date-object-ISO-8601-moment',
      name: 'timeline/date-object-ISO-8601-moment',
      component: TimelineDateObjectISO8601Moment
    },
    {
      path: '/timeline/recurring-events',
      name: 'timeline/recurring-events',
      component: TimelineRecurringEvents
    },
    {
      path: '/timeline/load-inline-data',
      name: 'timeline/load-inline-data',
      component: TimelineLoadInlineData
    },
    {
      path: '/timeline/load-events-from-remote-api',
      name: 'timeline/load-events-from-remote-api',
      component: TimelineLoadEventsFromRemoteApi
    },
    {
      path: '/timeline/load-events-on-demand',
      name: 'timeline/load-events-on-demand',
      component: TimelineLoadEventsOnDemand
    },
    {
      path: '/timeline/load-resources-on-demand',
      name: 'timeline/load-resources-on-demand',
      component: TimelineLoadResourcesOnDemand
    },
    {
      path: '/timeline/loading-big-data-sets',
      name: 'timeline/loading-big-data-sets',
      component: TimelineLoadingBigDataSets
    },
    {
      path: '/timeline/sync-events-google-calendar',
      name: 'timeline/sync-events-google-calendar',
      component: TimelineSyncEventsGoogleCalendar
    },
    {
      path: '/timeline/sync-events-outlook-calendar',
      name: 'timeline/sync-events-outlook-calendar',
      component: TimelineSyncEventsOutlookCalendar
    },
    {
      path: '/timeline/load-events-from-google-calendar',
      name: 'timeline/load-events-from-google-calendar',
      component: TimelineLoadEventsFromGoogleCalendar
    },
    {
      path: '/timeline/create-read-update-delete-CRUD',
      name: 'timeline/create-read-update-delete-CRUD',
      component: TimelineCreateReadUpdateDeleteCRUD
    },
    {
      path: '/timeline/disallow-past-event-creation',
      name: 'timeline/disallow-past-event-creation',
      component: TimelineDisallowPastEventCreation
    },
    {
      path: '/timeline/event-bulk-actions-edit-delete-update',
      name: 'timeline/event-bulk-actions-edit-delete-update',
      component: TimelineEventBulkActionsEditDeleteUpdate
    },
    {
      path: '/timeline/themes-ios-material-windows',
      name: 'timeline/themes-ios-material-windows',
      component: TimelineThemesIosMaterialWindows
    },
    {
      path: '/timeline/gregorian-jalali-hijri',
      name: 'timeline/gregorian-jalali-hijri',
      component: TimelineGregorianJalaliHijri
    },
    {
      path: '/timeline/event-hooks',
      name: 'timeline/event-hooks',
      component: TimelineEventHooks
    },
    {
      path: '/timeline/localization',
      name: 'timeline/localization',
      component: TimelineLocalization
    },
    {
      path: '/timeline/rtl-right-to-left',
      name: 'timeline/rtl-right-to-left',
      component: TimelineRtlRightToLeft
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
