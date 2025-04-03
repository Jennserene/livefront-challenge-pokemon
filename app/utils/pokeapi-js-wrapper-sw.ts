/// <reference lib="webworker" />

const imgRe = /https:\/\/raw\.githubusercontent\.com\/PokeAPI\/sprites\/[\/-\w\d]+\/[\d\w-]+\.(?:png|svg|gif)/;
const version = 1;

self.addEventListener('fetch', ((event: FetchEvent) => {
    if (event.request.url.match(imgRe)) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response) {
                    return response;
                }
                
                return fetch(event.request).then((response) => {
                    if (event.request.url.match(imgRe)) {
                        caches.open(`pokeapi-js-wrapper-images-${version}`).then((cache) => {
                            cache.add(event.request.url);
                        });
                    }
                    return response;
                }).catch((error: Error) => {
                    console.error(error);
                    return new Response('Network error', { status: 503 });
                });
            })
        );
    }
}) as EventListener);

self.addEventListener('install', (() => {
    (self as unknown as ServiceWorkerGlobalScope).skipWaiting();
}));
