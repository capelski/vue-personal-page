<template>
    <BlogEntry
        date="2019-08-10"
        description="Quick guide on how to turn a single page application into a progressive web app"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :title="title"
    >
        <p>
            If you are visiting this website from a mobile device, you might have seen the following message at the bottom of the screen. No, I am not trying to hack you. I have made my website a <a href="https://developers.google.com/web/progressive-web-apps/" target="_blank">progressive web app</a> and, as such, it can be installed in Android and iOS devices and it can be accessed offline. Keep reading if you want to turn your website in a PWA in less than 15 minutes!
        </p>
        <p class="text-center">
            <img :src="`/img/blog/${entry.id}-add-home.png?$modena=vue-personal-page`" alt="Progressive web apps add to home screen prompt" />
        </p>
        <div v-if="!isRenderedFromList">
            <p>
                The magic behind the progressive web apps are the <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" _target="blank">service workers</a>. To cut a long story short, a service worker is a script that the browser runs in the background, in a separate thread from the UI, providing additional features such as the ability to intercept and handle network requests as well as managing a cache of responses. In fact, this is the only feature we will need to make our website available offline.
            </p>
            <p>
                A service worker lifecycle is completely separate from the web application so, first, it must be registered through the browser <b>navigator API</b>. You will want to register the service worker as soon as possible so all the application requests are intercepted and handled (including the application Javascript files themselves). For that reason, I place the service worker registration in a script tag inside the head tag of the HTML page:
            </p>
            <div ref="registration" class="code-editor"></div>
            <p>
                The register method tells the browser to search for a service worker in the <b>sw.js</b> file and will cause the browser to start the service worker install step in the background, which we will define in no time. Note also the <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" _target="blank">manifest.json file</a>, which has nothing to do with the service worker, but is required in order to allow your application to be installed in mobile devices. It's content is pretty straightforward:
            </p>
            <div ref="manifest" class="code-editor"></div>
            <p>
                The last thing remaining is to define what we want the service worker to do in the install step. Typically we will want to cache some static assets. If all the files are cached successfully, then the service worker becomes installed and we get those static assets in the cache. If any of the files fail to download and cache, then the install step will fail and the service worker won't activate (not the end of the world though, it will try to install again the next time the page is loaded).
            </p>
            <p>
                There are multiple caching strategies to choose from when it comes to service workers and they are all very well explained in <a href="https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#serving-suggestions" _target="blank">the offline cookbook</a>. Feel free to give them a look even if you don't implement them
            </p>
            <div ref="serviceWorker" class="code-editor"></div>
        </div>
    </BlogEntry>
</template>

<script>
    import BlogEntry from '../BlogEntry';
    import entries from './entries';
    import { createMonacoEditor } from './monaco-utils';

    const entry = entries['progressive-web-apps'];
    const title = 'PWA: Make your website available offline';

    export default {
        name: entry.id,
        components: {
            BlogEntry
        },
        props: ['isRenderedFromList'],
        data() {
            return {
                entry,
                title
            };
        },
        mounted() {
            if (!this.isRenderedFromList) {
                createMonacoEditor(
                    this.$refs.registration,
                    'html',
                    // Html must be encoded so that webpack doesn't complain because of unresolvable scripts
                    atob('PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KICAgIDx0aXRsZT5DYXJsZXMgQ2FwZWxsYXM8L3RpdGxlPgogICAgPG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlIiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiIC8+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8iIC8+CiAgICA8bWV0YSBuYW1lPSJhdXRob3IiIGNvbnRlbnQ9IkNhcmxlcyBDYXBlbGxhcyIgLz4KICAgIAogICAgPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPgogICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7CiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcz8kbW9kZW5hPXZ1ZS1wZXJzb25hbC1wYWdlJywgewogICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnLycKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICB9CiAgICA8L3NjcmlwdD4KICAgIAogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0iL21hbmlmZXN0Lmpzb24/JG1vZGVuYT12dWUtcGVyc29uYWwtcGFnZSI+CiAgICA8bGluayByZWw9Imljb24iIHR5cGU9ImltYWdlL3BuZyIgaHJlZj0iL2Zhdmljb24ucG5nPyRtb2RlbmE9dnVlLXBlcnNvbmFsLXBhZ2UiPgo8L2hlYWQ+Cjxib2R5IGlkPSJwYWdlLXRvcCI+CiAgICA8bm9zY3JpcHQ+CiAgICAgICAgPGgxPkNhcmxlcyBDYXBlbGxhczwvaDE+CiAgICAgICAgPHA+SmF2YVNjcmlwdCBpcyByZXF1aXJlZCB0byBsb2FkIG15IHBhZ2U8L3A+CiAgICA8L25vc2NyaXB0PgogICAgPGRpdiBpZD0iYXBwIj48L2Rpdj4KICAgIDwhLS0gYnVpbHQgZmlsZXMgd2lsbCBiZSBhdXRvIGluamVjdGVkIC0tPgo8L2JvZHk+CjwvaHRtbD4=')
                );

                createMonacoEditor(
                    this.$refs.manifest,
                    'json',
`{
    "short_name": "cc.xyz",
    "name": "Carles Capellas",
    "icons": [{
        "src": "/favicon.png",
        "sizes": "72x72 96x96 128x128 256x256 512x512",
        "type": "image/png"
    }],
    "start_url": "/",
    "background_color": "#FFFFFF",
    "display": "standalone",
    "scope": "/",
    "theme_color": "#FFFFFF"
}`
                );

                createMonacoEditor(
                    this.$refs.serviceWorker,
                    'javascript',
`const myCache = 'WEB_APP_CACHE_NAME';

self.addEventListener('install', (event) => {
    event.waitUntil(async function() {
        const cache = await caches.open(myCache);
        // Non required on start assets
        cache.addAll([
            '/blog',
            '/projects',
            '/trips'
        ]);
        // Required on start assets
        await cache.addAll([
            '/'
        ]);
    }());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(async function() {
        const cache = await caches.open(myCache);
        const cacheNames = await cache.keys();
        await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
        );
    }());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(async function() {
        const networkPromise = fetch(event.request);
        const cachePromise = caches.open(myCache);

        try {
            const networkResponse = await networkPromise;
            cachePromise
                .then(cache => {
                    cache.put(event.request, networkResponse);
                });
            return networkResponse.clone();
        } catch (error) {
            const cache = await cachePromise;
            const cacheResponse = await cache.match(event.request);
            return cacheResponse;
        }
    }());
});`
                );
            }
        }
    };
</script>