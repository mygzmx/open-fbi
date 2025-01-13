import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    "theme_color": "#000000",
    "background_color": "#000000",
    "display": "fullscreen",
    "scope": "/",
    "start_url": "/",
    "name": "DramaBox",
    "description": "DramaBox is the next generation of HD streaming platform that changes the way you watch and consume video shows. Each episode is 1 minute in length, making it easy to stream on any mobile device, anytime, anywhere.",
    "short_name": "DramaBox",
    "icons": [
      {
        "src": "/images/logo/logo-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/images/logo/logo-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "/images/logo/logo-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/images/logo/logo-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }
}
