# ZuckerJS

<p align="justify">
ZuckerJS is a simple JavaScript library which was given birth to assist any web developer to build any SPA web application by component-oriented architecture(view, handler and service components). It's free, fast, efficient and no required dependencies.
</p>

<p align="justify">
Basically, ZuckerJS relies on some configurations from you to specify what components will be loaded. All of them will be loaded into memory. When user requests a page, ZuckerJS will get location's hash of current window to specify what page will be loaded(in theory). In practice, all components, that have that same route/hash, will be executed to render page dynamically.

ZuckerJS's concept:
> Hide the complexity and creating SPA web application by writing or reusing components. Then, ZuckerJS loads them and render web page based upon user's requests.

NOTE: this term "component-oriented architecture" can be understood as a set of all uncoupled components to form an application.
</p>

## Install and Usage

It's simple to install and use ZuckerJS, only in 3 following steps:

- Download ZuckerJS library "zucker.min.js" from source.
- Include it at the end of body tag.
- Configure ZuckerJS for application:

``` html
    <script>
        window.zucker.config([YOUR_COMPONENT_LIST_HERE]).execute();
    </script>
```

See more details on WIKI [here](https://github.com/saposs-org/zuckerjs/wiki).

## Samples

You can find two samples from source: simple and todo(played with AngularJS).

## Benefits

- Simple, fast and efficient.
- Component-oriented architecture.
- SPA + cache.
- Multiple layouts.
- Easy to test.
- Replace any component easily.
- Mark version easily.

If you want some of them, ZuckerJS will be a right decision for you to work on.

## Play with third-party libraries

ZuckerJS can play with all third-party libraries well. Some of them are:

- jQuery.
- AngularJS.
- VueJS.
- EmberJS.
- KnockoutJS.

and so on.

## Browser Compatibility

- Google Chrome.
- Firefox.
- Edge & Edge Dev.
- Opera.
- Safari.
- IE 8+.

## Contributing

We're very glad to receive any contribution from you to make ZuckerJS better.

We appreciate your help!

## Copyright & License

&copy;Copyright 2019 by Saposs - MIT License
