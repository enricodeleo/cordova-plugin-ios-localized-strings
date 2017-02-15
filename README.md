## Supported languages iOS Apache Cordova

**Cordova / PhoneGap Plugin that exposes supported languages to the App Store (iTunes).**

On iOS, Cordova declares (just) english as supported language. Since most of the i18n solutions that developers use for their translation/internazionalizations support are javascript based there is no way to say to app store that anoter language is also supported. You need to explicitly declare those languages within the `info.plist` file.

Since I'm lazy I prefer letting a plugin do this job (avoiding the need to re-edit the file everytime I do a fresh build from the cordova cli). Hope you find it useful as well.

## Install

### Latest published version on npm (with Cordova CLI >= 5.0.0)

```
cordova plugin add cordova-plugin-ios-localized-strings --variable MAIN_LANGUAGE=English --variable ADDITIONAL_LANGUAGES=it,fr,de --fetch
```

### Latest version from GitHub

```
cordova plugin add https://github.com/enricodeleo/cordova-plugin-ios-localized-strings.git --variable MAIN_LANGUAGE=English --variable ADDITIONAL_LANGUAGES=it,fr,de --fetch
```

## Platforms

Applies to iOS only.

## Bonus

For ionic/angular v1.x based projects I really like [gabegorelick/gulp-angular-gettext](https://github.com/gabegorelick/gulp-angular-gettext).

## License

[MIT License](http://ilee.mit-license.org)
