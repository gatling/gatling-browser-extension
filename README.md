# gatling-browser-extension

NB: For the moment, it works only on Chrome

## Build the extension for Chrome (result in `./dist` directory)
```
yarn build
```

## Build the extension for Firefox (result in *.zip file in `./web-ext-artifacts` directory)

Build for Firefox works from build for Chrome (using `web-ext` lib), so be sure to have already done last step before

```
yarn build:firefox
```

## Test on Chrome
https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked
