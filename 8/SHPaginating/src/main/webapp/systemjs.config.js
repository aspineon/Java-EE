(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'SHPaginating/app', // 'dist',
    'rxjs':                       'SHPaginating/node_modules/rxjs',
    'angular2-in-memory-web-api': 'SHPaginating/node_modules/angular2-in-memory-web-api',
    '@angular':                   'SHPaginating/node_modules/@angular',
'primeng':                        'SHPaginating/node_modules/primeng'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'boot.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'primeng':                    { defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
    '@angular/router-deprecated'
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
