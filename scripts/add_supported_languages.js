#!/usr/bin/env node
'use strict';

// Add supported languages for App Store (iTunes)
// v1.0.5
// Automatically adds supported languages to your iOS app
// within the info.plist file after the `prepare` command.

const fs = require('fs');
const path = require('path');
const plist = require('plist');

module.exports = context => {
  const ConfigParser = context.requireCordovaModule('cordova-common').ConfigParser;

  return new Promise((resolve, reject) => {
    let mainConfig = new ConfigParser(path.resolve(context.opts.projectRoot, 'config.xml'));
    let name = mainConfig.name();
    let config = new ConfigParser(path.resolve(context.opts.projectRoot, 'platforms', 'ios', name, 'config.xml'));
    let MAIN_LANGUAGE = config.getGlobalPreference('MAIN_LANGUAGE');
    let ADDITIONAL_LANGUAGES = config.getGlobalPreference('ADDITIONAL_LANGUAGES');
    let plistPath = path.join(context.opts.projectRoot, 'platforms', 'ios', name, `${name}-Info.plist`);

    fs.readFile(plistPath, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }
      let infoPlist = plist.parse(data);

      process.stdout.write('[iOS] Setting main language to: ' + MAIN_LANGUAGE + '\n');
      infoPlist.CFBundleDevelopmentRegion = MAIN_LANGUAGE;

      process.stdout.write('[iOS] Setting also additional languagees to: ' + ADDITIONAL_LANGUAGES.split(',') + '\n');
      infoPlist.CFBundleLocalizations = ADDITIONAL_LANGUAGES.split(',');

      fs.writeFile(plistPath, plist.build(infoPlist), err => {
        if (err) {
          return reject();
        }
        resolve();
      });
    });
  });
};
