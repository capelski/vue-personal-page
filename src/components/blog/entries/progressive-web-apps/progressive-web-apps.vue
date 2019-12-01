<template>
    <BlogEntry
        :date="date"
        description="Quick guide on how to turn a single page application into a progressive web app"
        duration="10"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :allTags="allTags"
        :tags="[tags.WebDevelopment]"
        :title="title"
    >
        <p>
            If you are visiting this website from a mobile device, you might have seen the following message at the bottom of the screen. No, I am not trying to hack you. I have made my website a
            <a
                href="https://developers.google.com/web/progressive-web-apps/"
                target="_blank"
            >progressive web app</a> and, as such, it can be installed in Android and iOS devices and it can be accessed offline. Keep reading if you want to turn your website in a PWA in less than 15 minutes!
        </p>
        <div v-if="!isRenderedFromList">
            <p class="text-center">
                <img
                    :src="`${images.addHome}?$modena=vue-personal-page`"
                    alt="Add PWA to home screen prompt"
                />
            </p>
            <p>
                The magic behind the progressive web apps are the
                <a
                    href="https://developers.google.com/web/fundamentals/primers/service-workers/"
                    _target="blank"
                >service workers</a>. To cut a long story short, a service worker is a script that the browser runs in the background, in a separate thread from the UI, providing additional features such as the ability to intercept and handle network requests as well as managing a cache of responses. In fact, this is the only feature we will need to make our website available offline.
            </p>
            <p>
                A service worker lifecycle is completely separate from the web application so, first, it must be registered through the browser
                <b>navigator API</b>. You will want to register the service worker as soon as possible so all the application requests are intercepted and handled (including the application Javascript files themselves). For that reason, I place the service worker registration in a script tag inside the head tag of the HTML page:
            </p>
            <div ref="registration" class="code-editor"></div>
            <p>
                The register method tells the browser to search for a service worker in the
                <b>sw.js</b> file and will start the install step in the background. Thus the next thing to be done is to tell the service worker what to do during the install step which, typically, will consist in caching some static assets.
            </p>
            <p>
                There are multiple caching strategies to choose from when it comes to service workers and they are all very well explained in
                <a
                    href="https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#serving-suggestions"
                    _target="blank"
                >the offline cookbook</a>. Take a look at them to know which patterns there are and which ones suit better your application needs (you might apply different strategies depending on the type of resource being cached and how often they get updated). I chose the
                <b>Network falling back to cache</b> strategy for my webpage for the following reasons:
            </p>
            <ul>
                <li>
                    <b>Simplicity</b>. There are better performing strategies (e.g.
                    <b>Cache then network</b> or
                    <b>Cache & network race</b>) but they add more complexity to the service worker implementation. Let's keep in mind that the only goal of this exercise is to make the website available offline, not to optimize the time to content
                </li>
                <li>
                    I first started with
                    <b>cache falling back to network</b> for better performance but, given I frequently update the application, I was getting errors due to old versions of static assets being cached. Feel free to dedicate some time to solve those errors but, again, the purpose of this tutorial is just to make the website available offline
                </li>
            </ul>
            <p>So, without further ado, let's implement the service worker. First we need to add a specific set of files to the cache during installation. If all the files are cached successfully, then the service worker becomes installed and we get those static assets available in the cache. If any of the files fail to download and cache, then the install step will fail and the service worker won't activate (not the end of the world though, it will try to install again the next time the page is loaded).</p>
            <p>
                The shorter the list is the least chances the installation has to fail (and the rest of assets can be cached later on anyway). In my case, I am only caching the landing page of my site. The
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self"
                >self property</a> is a reference to the WorkerGlobalScope (available only in service worker threads):
            </p>
            <div ref="serviceWorker" class="code-editor"></div>
            <p>
                Now let's get the work done! The most important part of our service worker is the
                <b>fetch</b> listener. This handler will intercept every network request and will allow us to serve a cached version of a given resource, which, due to the
                <b>Network falling back to cache</b> strategy, will happen only if the corresponding network request fails (lines 35-37). Don't forget to add the asset to the cache on a successful network response in order to keep the cache content updated (line 31). The
                <b>clone</b> method is required because the responses can only be consumed once.
            </p>
            <p>
                Optionally, an
                <b>activate</b> listener can also be defined in order to run some tasks each time the service worker is successfully installed. This feature comes handy to clear the application cache every time the service worker is updated. You don't need to do this but remember the
                <b>universe tends to disorder</b> and is our duty to keep the application clean and tidy; remove the files you are no longer going to need and make the users happier by freeing space up in their devices.
            </p>
            <p>
                Once the server worker is put into place the browser will start caching every network request. You can have a look at the contents of your application cache in the
                <b>Application</b> tab of the Chrome
                <b>Developer Tools</b>. Once all the content you need has been cached, you can also test the application offline behaviour by checking the
                <b>Offline</b> box and refreshing the page. Notice how the network requests fail and the assets are served from the service worker:
            </p>
            <p class="text-center">
                <img
                    :src="`${images.cacheContent}?$modena=vue-personal-page`"
                    alt="Service worker cache content"
                />
            </p>
            <p class="text-center">
                <img
                    :src="`${images.offlineDesktop}?$modena=vue-personal-page`"
                    alt="Service worker cache content"
                />
            </p>
            <p>
                Congratulations &#127881; Your application just turned offline friendly! You are free to go playing now but stick around because I still have something cool to show you. See that
                <a
                    href="https://developers.google.com/web/fundamentals/web-app-manifest/"
                    _target="blank"
                >manifest.json file</a> inside the head tag of the HTML page? It has nothing to do with the service worker, but it will make your application installable in mobile devices for free and it only takes a few mintues to add it. It's content is self-explanatory and here are some screenshots of how professional your app will look like when installed in a mobile device:
            </p>
            <div ref="manifest" class="code-editor"></div>
            <p class="text-center">
                <img
                    :src="`${images.installed}?$modena=vue-personal-page`"
                    alt="PWA installed notification"
                    style="width: 350px;"
                />
                <img
                    :src="`${images.starting}?$modena=vue-personal-page`"
                    alt="Starting PWA"
                    style="width: 350px; border: 1px solid beige;"
                />
                <img
                    :src="`${images.offlineMobile}?$modena=vue-personal-page`"
                    alt="Offline PWA in mobile device"
                    style="width: 350px;"
                />
            </p>
            <p>
                That's the end of it! As promised, you can turn your website into an offline available progressive web app in less than 15 minutes. Reach me at
                <b>capellas.carles@gmail.com</b> if I haven't been clear enough about any aspect and see you in the next post!
            </p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../BlogEntry';
import { tags } from '../../tags';
import { createMonacoEditor } from '../monaco-utils';
import entriesRegistry from '../registry';
import addHome from './add-home.png';
import cacheContent from './cache-content.png';
import installed from './installed.png';
import offlineDesktop from './offline-desktop.png';
import offlineMobile from './offline-mobile.png';
import starting from './starting.png';

const date = '2019-08-12';
const entry = entriesRegistry['progressive-web-apps'];
const title = 'PWA: Make your website available offline';

export default {
    name: entry.id,
    components: {
        BlogEntry
    },
    props: ['isRenderedFromList', 'allTags'],
    data() {
        return {
            date,
            entry,
            images: {
                addHome,
                cacheContent,
                installed,
                offlineDesktop,
                offlineMobile,
                starting
            },
            tags,
            title
        };
    },
    mounted() {
        if (!this.isRenderedFromList) {
            createMonacoEditor(
                this.$refs.registration,
                'html',
                // Html must be encoded so that webpack doesn't complain because of unresolvable scripts
                atob(
                    'PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KICAgIDx0aXRsZT5DYXJsZXMgQ2FwZWxsYXM8L3RpdGxlPgogICAgPG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlIiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiIC8+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8iIC8+CiAgICA8bWV0YSBuYW1lPSJhdXRob3IiIGNvbnRlbnQ9IkNhcmxlcyBDYXBlbGxhcyIgLz4KICAgIAogICAgPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPgogICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7CiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcz8kbW9kZW5hPXZ1ZS1wZXJzb25hbC1wYWdlJywgewogICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnLycKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICB9CiAgICA8L3NjcmlwdD4KICAgIAogICAgPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0iL21hbmlmZXN0Lmpzb24/JG1vZGVuYT12dWUtcGVyc29uYWwtcGFnZSI+CiAgICA8bGluayByZWw9Imljb24iIHR5cGU9ImltYWdlL3BuZyIgaHJlZj0iL2Zhdmljb24ucG5nPyRtb2RlbmE9dnVlLXBlcnNvbmFsLXBhZ2UiPgo8L2hlYWQ+Cjxib2R5IGlkPSJwYWdlLXRvcCI+CiAgICA8bm9zY3JpcHQ+CiAgICAgICAgPGgxPkNhcmxlcyBDYXBlbGxhczwvaDE+CiAgICAgICAgPHA+SmF2YVNjcmlwdCBpcyByZXF1aXJlZCB0byBsb2FkIG15IHBhZ2U8L3A+CiAgICA8L25vc2NyaXB0PgogICAgPGRpdiBpZD0iYXBwIj48L2Rpdj4KICAgIDwhLS0gYnVpbHQgZmlsZXMgd2lsbCBiZSBhdXRvIGluamVjdGVkIC0tPgo8L2JvZHk+CjwvaHRtbD4='
                )
            );

            createMonacoEditor(
                this.$refs.serviceWorker,
                'javascript',
                `const myCache = 'WEB_APP_CACHE_NAME';

self.addEventListener('install', (event) => {
    event.waitUntil(async function() {
        const cache = await caches.open(myCache);
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
        }
    }
};
</script>