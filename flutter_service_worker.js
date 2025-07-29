'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "825ea39830b2d2e422e81077d76e27f2",
"version.json": "40e7b06505e2c3869ae177334fa1b1b4",
"index.html": "7032bc646e19d476f2c8827009e5ecaf",
"/": "7032bc646e19d476f2c8827009e5ecaf",
"main.dart.js": "53f8c249c4eb3bb10ab0e05aa8afd04c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bebc59895b217a9c11a75c3ddf719789",
"assets/AssetManifest.json": "d08041e9fbe1525fa638cb48192e044b",
"assets/NOTICES": "35e5097397c20a765376a549cdec11f7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "8bee1c585c6b8fa7e54cfac40b8957e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4c7901d5f1196a1e21d0566d93a5b8b3",
"assets/fonts/MaterialIcons-Regular.otf": "3687fc93a5236447445babfa04d6c10d",
"assets/assets/images/ticket-wallet-logo.png": "605e647332cc16750ad53fdb0a97b82b",
"assets/assets/images/dart-logo.png": "2d60b0b561379db9f0d8b4122bf4e425",
"assets/assets/images/google-maps-logo.png": "48abdcaadb5f448f3f6ae501789c1c83",
"assets/assets/images/bitbucket-logo.png": "4be4c1656ae12c3776d57f5dc03e88f7",
"assets/assets/images/recall-app-logo.png": "c81ee95afc7fa6aed71f43263f512564",
"assets/assets/images/gitlab-logo.png": "9389b98d6cc4951d13500e6d0a66f6cd",
"assets/assets/images/kotlin-logo.png": "a2657f621876b7ce762efaba7dcde6cb",
"assets/assets/images/firebase-logo.png": "9c06eaec5348ea6977f1b461b974861e",
"assets/assets/images/bloc-logo.png": "6081b18a42e7d1809eca8529f4d36ff1",
"assets/assets/images/android-logo.png": "53afb5464f59c310ffe91a1f8365dabb",
"assets/assets/images/python-logo.png": "0196cda1aaac36dee105e07069d2bce6",
"assets/assets/images/flutter_bg.jpg": "1ecc0aea3e7891f14ab3c5f4f06e3b8d",
"assets/assets/images/fast-api-logo.png": "65eff97578977563b8f5982227c2e693",
"assets/assets/images/sqlight-logo.png": "ca4e3aabd981340ddd7b48c4ea234dd8",
"assets/assets/images/github-mark-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/images/mufazal1.png": "7b46969561b7ff58abe26bca59082db8",
"assets/assets/images/play-logo.png": "c931005ccaee2d3d51ca643d5b786592",
"assets/assets/images/flutter-logo.png": "4b687d308768d21eb156ab48c6043d5f",
"assets/assets/images/linkedin.png": "480892d3eecbe84f34789875d056432e",
"assets/assets/images/javascript-logo.png": "34ab0ac49531d9376f9933e1aead7c81",
"assets/assets/images/LI-In-Bug.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/assets/images/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/images/tfm-courier-logo.png": "9476ef6800adf18ce85e0113c53e80ab",
"assets/assets/images/apple-logo.png": "1bb3f917272ddd5b39fbc3fdec84dc18",
"assets/assets/images/graphql-logo.png": "febe45120b1fc324e2227d430359b4ca",
"assets/assets/images/mufazal.jpg": "ba589a828e49165a8c922ccdd5bedb80",
"assets/assets/images/swift-logo.png": "8d605fab0cbd4088522bda7b42cc510b",
"assets/assets/images/river-pod-logo.png": "4192184745d9663a2a47a2586ba4ef53",
"assets/assets/images/whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/images/java-icon.png": "6058d44f0c5ee31ae9bdc86e87b16126",
"assets/assets/images/website-logo.png": "40b15c2cc5c5876eda1779a8d438d772",
"assets/assets/images/react-native-logo.png": "9f44be7359de8b16c0f973ef38934f7e",
"assets/assets/images/github-logo.png": "794bdbe1500f33acf95d8e7d6f2276c4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
