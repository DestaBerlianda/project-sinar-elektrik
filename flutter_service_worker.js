'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b03fb76ffa3bacbcd10868434867f918",
"assets/AssetManifest.bin.json": "870b7c3a34933fade9b7188d894c87af",
"assets/AssetManifest.json": "b1dc3e9db7becb04a0c0e491729b03ac",
"assets/assets/elektrik%2520satelit.png": "ce8a013f6f33fd2c700c4f2c7c444f7e",
"assets/assets/images/charger.jpg": "e07e51378b656ac00241ecbbfa2e1424",
"assets/assets/images/headphonelenovo.jpg": "6b330809d75786da4abdd55ad1dd73d2",
"assets/assets/images/headphonesamsung.jpg": "ccc01c7c0cd7f7d0c3d0f676967328e0",
"assets/assets/images/headphonesony.jpg": "e07c52e3f93b87d877f7939188276abc",
"assets/assets/images/headset.png": "16ebac9d33b7aacfc01fb284411ac256",
"assets/assets/images/hp.png": "0043b10939b74ad8b75a008c22b143b0",
"assets/assets/images/iphone14.jpg": "9b341805ffd34c8a21b6cbab76bb3e53",
"assets/assets/images/kamera.png": "f6fde2f93580847d4363132f61e71a01",
"assets/assets/images/kameracanon.jpg": "785f67dbeb7fb0cf67468e660504599b",
"assets/assets/images/kameranikon.jpg": "925173c61ef828eece2c5cfb4ecf097b",
"assets/assets/images/kamerasony.jpg": "dab4b000c57ab65c2ae525ac9ffae681",
"assets/assets/images/laptop.png": "32afe9692f890d81b8deaa073ce9aff1",
"assets/assets/images/laptopasus.jpg": "cf7946fe527d1f15f715f0e65fcd2329",
"assets/assets/images/laptoprog.jpg": "9b11e229d1752525a66aeca84bab20bd",
"assets/assets/images/laptopthinkpad.jpg": "86b891e28154774df8af762968cdc698",
"assets/assets/images/lenovoloq.jpg": "f4fa9dd525185eaf972414038dc2941f",
"assets/assets/images/macbookm4.jpg": "919a54911adc684a9dc26098c7e01430",
"assets/assets/images/powerbank.jpg": "c707b0d6fe6bfe85fb2bbc7d46b542ce",
"assets/assets/images/router.jpg": "5f06bb297037c4fdb6551a72b58289d0",
"assets/assets/images/samsungs23.jpg": "face7aca5543b28d97d693b323bdb7f6",
"assets/assets/images/smarttvsamsung.png": "28c0fc244cd945a294f0f62cfc671eed",
"assets/assets/images/smarttvvivo.jpg": "907c870640b2029cfa73c8a46fbc0b8a",
"assets/assets/images/smarttvxiaomi.jpg": "430bc56dd5fb8a02cb7393acf8d5f00e",
"assets/assets/images/smartwatch.png": "f09b3bd023e5541c2ec17f074eb2417c",
"assets/assets/images/smartwatchadvan.jpg": "037a660c3afd17af37a44261d7bccab3",
"assets/assets/images/smartwatchitel011.jpg": "3c17cc2d96e2fe9b65c7b9a47102adcc",
"assets/assets/images/smartwatchxiaomi.jpg": "a2573e4a395d445d7809139204070076",
"assets/assets/images/speaker.jpg": "0ad43c371023acfd37aa4f3377aed793",
"assets/assets/images/ssd.jpg": "9ee6228f9bad7249e7d7129f5473cf46",
"assets/assets/images/TV.png": "c7ee9f24c088eeb182c8b08a5c143e90",
"assets/assets/promo1.png": "132faa644690530e1fbc0f7c57b3a9a6",
"assets/assets/promo2.png": "9a305c22abe575d1d6bdfe06269b46d0",
"assets/assets/promo3.png": "72438f02cd8327900de490fc1f73414b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "521740b55f5248cff7225672677cf206",
"assets/NOTICES": "8e41fe053a31325eab36a03b031aea53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "6232ec2c7b3f4541e383de97a092f06d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "63bc51f853e4b1ff2a3c9b61f3078efe",
"/": "63bc51f853e4b1ff2a3c9b61f3078efe",
"main.dart.js": "658fcb26235f89c62bce90afbfc834d0",
"manifest.json": "45f38fc9e8a6aff44246ce0e7f4d29d5",
"version.json": "2c1ecc2a9f94b43f4a53054971b4db41"};
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
