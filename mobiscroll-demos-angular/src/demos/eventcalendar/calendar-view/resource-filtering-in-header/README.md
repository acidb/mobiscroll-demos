To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-angular?tab=readme-ov-file#mobiscroll-angular-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/angular/eventcalendar/resource-filtering-in-header#).

## Demo description

The calendar view doesn't have built in resource listing, however we can easily solve that inside the header using the segmented component.
The header of the agenda is a canvas and an opportunity for customization. You can add custom components and enable new interaction in context.

Such an example would be a custom filter block created with the help of a segmented control and placed between the standard UI components, which are:

- **Navigation component** - `&lt;mbsc-calendar-nav&gt;&lt;/mbsc-calendar-nav>`. Use the `.md-header-filter-controls` CSS class for custom overrides.
- **Today button** - `&lt;mbsc-calendar-today&gt;&lt;/mbsc-calendar-today>`. Use the `.md-header-filter-today` CSS class for custom overrides.
- **Previous month button** - `&lt;mbsc-calendar-prev&gt;&lt;/mbsc-calendar-prev>`. Use the `.md-header-filter-prev` CSS class for custom overrides.
- **Next month button** - `&lt;mbsc-calendar-next&gt;&lt;/mbsc-calendar-next>`. Use the `.md-header-filter-next` CSS class for custom overrides.

For changing the order the controls are laid out, you only need to set up the `headerTemplate`.

**Overriding the order for specific themes**

For a custom order on a theme to theme basis, you will need to use a little CSS. [Flex layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) makes reordering easy. It's just a matter of setting the order in CSS. For material use the `.mbsc-material`, for windows the `.mbsc-windows` prefix and for iOS it is `.mbsc-ios` class. Eg.:

`.mbsc-material .mds-header-filter-prev { order: 1; }
.mbsc-material .mds-header-filter-next { order: 2; }
.mbsc-material .mds-header-filter { order: 3; }
.mbsc-material .mds-header-filter-today { order: 4; }`

## Related demos

- **Want to style and reorder the header?** [Take a look at the previous example &#8594;](https://demo.mobiscroll.com/angular/eventcalendar/customizing-header#)
