# react-intl

This is as simple Meteor wrapper package for [React Intl](http://formatjs.io/react/).

### Why

> FormatJS is a modular collection of JavaScript libraries for internationalization that are focused on formatting numbers, dates, and strings for displaying to people. It includes a set of core libraries that build on the JavaScript Intl built-ins and industry-wide i18n standards, plus a set of integrations for common template and component libraries.

FormatJS have already supported React. However, in order to use it in Meteor apps, some additional works should be done there. This is why we have **[zephyre:react-intl](https://atmospherejs.com/zephyre/react-intl)**.

### Installation

In your Meteor app directory, enter:

```
$ meteor add zephyre:react-intl
```

### Usage

Here is a simple demo. For detailed instructions, please refer to the [React Intl webpage](http://formatjs.io/react/).

First of all, one can create a React component with React Intl mixin:

```javascript
var IntlMixin       = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;

var App = React.createClass({
    mixins: [IntlMixin],

    render: function () {
        return (
            <p>
                <FormattedNumber value={1000} style="currency" currency="USD" />
            </p>
        );
    }
});
```

Then the above component can be integrated in the web application:

```javascript
React.render(
    <App locales={['en-US']} />,
    document.getElementById('example')
);
```

Or the French version:

```javascript
React.render(
    <App locales={['fr-FR']} />,
    document.getElementById('example')
);
```

### License

MIT

### Contributing

Anyone is welcome to contribute. Fork, make andyour changes, and then submit a pull request.

### Thanks

- @HopeLyn
