self.addEventListener('install', e => {
    console.log("event: install")
});

self.addEventListener('fetch', e => {
    console.log("event: fetch")
});//