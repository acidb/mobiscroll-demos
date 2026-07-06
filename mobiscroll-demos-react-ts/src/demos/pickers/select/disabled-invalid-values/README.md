To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/disabled-invalid-values#).

## Demo description

:::inline-fw-group
prefix: Enforcing validation is essential to a great UX. It supports the following:
suffix: 
:::framework{only="javascript"}
- **Disabled attribute** - In case you are passing the data through markup: `&lt;option value="chi" disabled&gt;Chicago&lt;/option&gt;`
                                        - **Disabled property** - In case you are using the data option: ` data: [ ... { text: 'Chicago', value: 'chi', disabled: true }] `
:::
:::framework{only="jquery"}
- **Disabled attribute** - In case you are passing the data through markup: `&lt;option value="chi" disabled&gt;Chicago&lt;/option&gt;`

                                        - **Disabled property** - In case you are using the data option: ` data: [ ... { text: 'Chicago', value: 'chi', disabled: true }] `
:::
:::framework{only="react"}
You can set an option to invalid through the disabled property: ` data: [ ... { text: 'Chicago', value: 'chi', disabled: true }] `
:::
:::framework{only="angular"}
- **Disabled attribute** - In case you are passing the data through markup:

                                        - **Disabled property** - In case you are using the data option: ` myData = [ ... { text: 'Chicago', value: 'chi', disabled: true }] `
:::
:::end-inline-fw-group

Having invalids set up correctly not just enhances the UX, but improves performance.
