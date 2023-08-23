/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","af64ec158aa4c69c52d483c47ea3ea38"],["css/main.css","331bc107470df5c7b8582c0d3a9f3b60"],["css/plugins.css","73c2b28328f54ad9086a41341acb6740"],["css/plugins/YouTubePopUp.css","01e9f0d93cd21daba609c767d41cc784"],["css/plugins/animate.min.css","4cd52090fb293f124b8cb9877760fe92"],["css/plugins/bootstrap.min.css","bda1e0e8e355ff2f9bbd8e5cde279345"],["css/plugins/fontawesome-all.min.css","d2808d7e2c27a240a8458f1368a767e1"],["css/plugins/ionicons.min.css","7300e0bab0db858e53f8b357a3ee0d3f"],["css/plugins/jquery-ui.min.css","3a823c428531dd6bc1ccfcb018b91e35"],["css/plugins/justifiedGallery.min.css","77d5f931ffd1aa83cb6cd692c7eb01b1"],["css/plugins/magnific-popup.css","30b593b71d7672658f89bfea0ab360c9"],["css/plugins/pe-icon-7-stroke.css","8239c82ef9b3a803bc98e8064e56fbee"],["css/plugins/slick-theme.css","8a8e7772f0074fe146397abf45618621"],["css/plugins/slick.css","f38b2db10e01b1572732a3191d538707"],["css/plugins/swiper.min.css","5e10386838ea1818a688666985858018"],["css/styles.css","56ad20150117c6fafe5d89248c5e5c37"],["image_2023-08-23_122404189.png","7a30749383b57522009f1a10d018efcc"],["images/dev-khandelwal.png","baa307fec8ed4d89a8d890377f2a7c53"],["images/developer.png","48c45b89c234adfda2d0b1b346084e22"],["images/dots-glitch.png","c1dfdc97ffb8e9ed0a80af2d7466f71f"],["index.html","f8a81275d1b456e6421c56e7ceebeea5"],["js/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["js/jquery-migrate-3.4.0.min.js","5cfa2b481de6e87c2190a0e3538515d8"],["js/plugins.js","a833b0a1bdfc6329eb9f03b116ed18e8"],["js/script.js","7bf72a03226fe6c4e40efa602bcb8da1"],["logo-192.png","25bc428467c430191a10690e5b663535"],["logo-512.png","bdc359dbb07372d85b166b6ba2a370c3"],["manifest.json","5312252f86f6cbfca9978814803baa75"],["myscripts.js","f18465fb60d0534b6d5c97f3b452986b"],["package.json","1814a90b58f404650a1bf3b60f2608ee"],["svg/cool.svg","c9f777159e83c18248504f6ed9615c0a"],["v1/README.md","7fd4cc27acf74fc5dbd4871eb59ecf7a"],["v1/assets/css/style.css","4ee799925b1531f91f53c3a0e16bcc6d"],["v1/assets/img/hero-bg.jpg","102a981644aa4f0c9ed9ef6a9307a433"],["v1/assets/img/overlay-bg.jpg","f1fbf21fc8822b89c4151bd46c36269d"],["v1/assets/img/portfolio-details-3.jpg","d6af0938f5fc9e840f034ab74cbf9ee1"],["v1/assets/img/post-1.jpg","86d2eabf1ba657f4869dfbbf5e18b8e5"],["v1/assets/img/post-2.jpg","b148c856d14ccd832a3931e881c96366"],["v1/assets/img/post-3.jpg","cf402ad48b8947db1789e859ead5aea9"],["v1/assets/img/testimonial-2.jpg","5e63086c09005d7a032103e98bfa44e1"],["v1/assets/img/testimonial-4.jpg","8a6903e7c8452ba941caf063530180c1"],["v1/assets/img/work-1.jpg","7c790d6557c44afce65aa89f25a5eb25"],["v1/assets/img/work-2.jpg","d586e6d9d309afdb12f773342b624ee9"],["v1/assets/img/work-3.jpg","2cfa1d648bcefb4c54938bdfdd5d5e72"],["v1/assets/img/work-4.jpg","0e5ebf74d06ceb51f3d42f000494c904"],["v1/assets/img/work-5.jpg","68dc6cb541f940fecd31ab453ced953e"],["v1/assets/img/work-6.jpg","04933e7f6bdc157ba3c5a791e6bcc90f"],["v1/assets/js/main.js","6f76e4194ff071929a5fa091146cf5be"],["v1/assets/vendor/bootstrap-icons/bootstrap-icons.css","8f4b242830ec54686815617e7b5a5b1b"],["v1/assets/vendor/bootstrap-icons/bootstrap-icons.json","d2bbe7e52253f0439691605916f8b52a"],["v1/assets/vendor/bootstrap-icons/bootstrap-icons.min.css","7b55ca02868d589ed1fb8372085198cf"],["v1/assets/vendor/bootstrap-icons/bootstrap-icons.scss","4a97a0cf4ca08e29bf4869f30757d652"],["v1/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff","3d0ec57f40d62ba6a8e0d1857bb8f7d5"],["v1/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2","a30fb81bd52143bcd4de2898422ac8b9"],["v1/assets/vendor/bootstrap/css/bootstrap-grid.css","88a1a050ac10613882d9b1ea58f39a04"],["v1/assets/vendor/bootstrap/css/bootstrap-grid.css.map","66c1d408fa03d513fa6cf5ffa3c28690"],["v1/assets/vendor/bootstrap/css/bootstrap-grid.min.css","7c218347bb2fdfd6b18ec2c892d33587"],["v1/assets/vendor/bootstrap/css/bootstrap-grid.min.css.map","4c88618131a9900524ae40de73aae394"],["v1/assets/vendor/bootstrap/css/bootstrap-grid.rtl.css","7a54abeae32365edb8b1bd4d4b7f6f4a"],["v1/assets/vendor/bootstrap/css/bootstrap-grid.rtl.css.map","b36d34720e6ece7f2f12be3f4ea35d32"],["v1/assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css","c2ddda8b98dcae6b41d6d1dc782a7e1a"],["v1/assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css.map","e102705b4ef7bf27af8948bfcecd93cb"],["v1/assets/vendor/bootstrap/css/bootstrap-reboot.css","292dc3f9fa0daf4aca278b093dcc82f7"],["v1/assets/vendor/bootstrap/css/bootstrap-reboot.css.map","815840212f00ffcc5989902c5359891b"],["v1/assets/vendor/bootstrap/css/bootstrap-reboot.min.css","fb689eb57aef781178b5b295d4b61e81"],["v1/assets/vendor/bootstrap/css/bootstrap-reboot.min.css.map","65e75eff0e53fb2f7d873dd108f92123"],["v1/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css","d80efc0de1b8f3767a0fff7fbf64f743"],["v1/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css.map","0db9ae78a926ad10378b882b481786c9"],["v1/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css","85ccb5c4f75f1ec670243240d8c4faf8"],["v1/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css.map","b1b4996d91813a42f2da6350f60be3ad"],["v1/assets/vendor/bootstrap/css/bootstrap-utilities.css","390e5e885c6137f3c8406fbb7ee97678"],["v1/assets/vendor/bootstrap/css/bootstrap-utilities.css.map","15cf3481c5c5008d050df1bd2f5d9b86"],["v1/assets/vendor/bootstrap/css/bootstrap-utilities.min.css","1a9d5a205310b030f2a1c075cc9b9ad1"],["v1/assets/vendor/bootstrap/css/bootstrap-utilities.min.css.map","9c866169e504c443fb03b7a0151281ed"],["v1/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css","2807321baffce3f4cbe0a7ba91c513ea"],["v1/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css.map","9b02cbdc8e67853ad2c780e0ce968c06"],["v1/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css","58348c84aae17b088558358167a46849"],["v1/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css.map","5617820d16351690bf3bd1b1ea48726e"],["v1/assets/vendor/bootstrap/css/bootstrap.css","c1ca1e21ab9c6b86028c8335b66e9408"],["v1/assets/vendor/bootstrap/css/bootstrap.css.map","68ac681d3f108080249b1e9f1eec20f6"],["v1/assets/vendor/bootstrap/css/bootstrap.min.css","fe7fdfec700d100dc745dc64d3600cb2"],["v1/assets/vendor/bootstrap/css/bootstrap.min.css.map","1ba0636f372a95e955d90e2be7b63e0c"],["v1/assets/vendor/bootstrap/css/bootstrap.rtl.css","9a040d9b7289c890a4795be07148e298"],["v1/assets/vendor/bootstrap/css/bootstrap.rtl.css.map","2bc070f911d8b60552e8075b09f6f685"],["v1/assets/vendor/bootstrap/css/bootstrap.rtl.min.css","f4b976988fc103085c1c9694d00a84aa"],["v1/assets/vendor/bootstrap/css/bootstrap.rtl.min.css.map","c785010d3a058fa6f74ce59a259c0d8e"],["v1/assets/vendor/bootstrap/js/bootstrap.bundle.js","57a985a5376d69aeb76bda8cdedc9ad1"],["v1/assets/vendor/bootstrap/js/bootstrap.bundle.js.map","2bf3db742d63c0e78ca6ab364530c237"],["v1/assets/vendor/bootstrap/js/bootstrap.bundle.min.js","849e6db145f2905ce210f628bddd9de5"],["v1/assets/vendor/bootstrap/js/bootstrap.bundle.min.js.map","4e2153fcdc3deb338fc7201e0f1d6995"],["v1/assets/vendor/bootstrap/js/bootstrap.esm.js","7b035133f2cbd1f35b9545709fc725b3"],["v1/assets/vendor/bootstrap/js/bootstrap.esm.js.map","932835b0e45f44ad518f4b9f11a667a3"],["v1/assets/vendor/bootstrap/js/bootstrap.esm.min.js","df21bc4ff36ca1341a99bb09f401300d"],["v1/assets/vendor/bootstrap/js/bootstrap.esm.min.js.map","9942c441969ef5b10b2d8a0775b3054f"],["v1/assets/vendor/bootstrap/js/bootstrap.js","77d976360ee7592ecd1e64ababc1c245"],["v1/assets/vendor/bootstrap/js/bootstrap.js.map","816377a2382498151de106c375e8f5ae"],["v1/assets/vendor/bootstrap/js/bootstrap.min.js","716e3e3c1588d51d4dfa6da3752b0bea"],["v1/assets/vendor/bootstrap/js/bootstrap.min.js.map","2128ea8092d480dc88072ce9c135b3ae"],["v1/assets/vendor/glightbox/css/glightbox.css","76e8ba51c713846b57e22b321dfd7a63"],["v1/assets/vendor/glightbox/css/glightbox.min.css","9b438b29cef1c212d1c65a877ffc7232"],["v1/assets/vendor/glightbox/css/plyr.css","a39f7b91915f8ed00dd4e3e11a3c93eb"],["v1/assets/vendor/glightbox/css/plyr.min.css","72c244ef068825d17123de804e1880b0"],["v1/assets/vendor/glightbox/js/glightbox.js","7bafdeb041b5a6eac144d1cfefe01b07"],["v1/assets/vendor/glightbox/js/glightbox.min.js","2b4c8cbaade24ecb58bcb0d89694ccee"],["v1/assets/vendor/php-email-form/validate.js","942e0d365d33a0f2d2b6ebfbe9321ba1"],["v1/assets/vendor/purecounter/purecounter_vanilla.js","306b61cceb925965f85d9b377f1539ad"],["v1/assets/vendor/purecounter/purecounter_vanilla.js.map","5aacc5b6c44e45e89a87392283cb18d5"],["v1/assets/vendor/swiper/swiper-bundle.min.css","04720c60bc020cbba92785dd4029f7d2"],["v1/assets/vendor/swiper/swiper-bundle.min.js","24fd8f796609d79fcb7b6e5ae754433b"],["v1/assets/vendor/swiper/swiper-bundle.min.js.map","3b736f395302bbd73a0d73e4a419443d"],["v1/assets/vendor/typed.js/typed.cjs","0def002179a6d6aa3daa0a523f4c5751"],["v1/assets/vendor/typed.js/typed.cjs.map","ee8d5a9ef67f940d65b8054ec2e6e39e"],["v1/assets/vendor/typed.js/typed.module.js","d2fb5c913cb22c542e308dc0f486ab45"],["v1/assets/vendor/typed.js/typed.module.js.map","a4d120c62ad5447dd82117b4a07d3d00"],["v1/assets/vendor/typed.js/typed.umd.js","3ba6a3f6e22122d8f5ed22c423299981"],["v1/assets/vendor/typed.js/typed.umd.js.map","cf8e22198cec90fa9f376f5158b0495a"],["v1/index.html","a925950edec26de1dcc2e2c2f41b337e"],["v1/my.css","2e1dcbefbdd85f532b629e4f41dd6b93"],["v1/og.png","d8e93191c94bcb9ef3709e69b05b7e31"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







