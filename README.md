# 📈UptimeFlare

Another **serverless (and free!)** uptime monitoring & status page on Cloudflare Workers with more advanced features and nice UI.

## ⭐Features

- **Opensource** & Easy to deploy (in 10 minutes **without local tools**) & Free

#### Monitoring

- Up to 50 **2-minute** interval check
- **Geo-specific checks** from more than [310 cities](https://www.cloudflare.com/network/) around the world
- Monitoring for **HTTP/HTTPS/TCP port**
- Up to 90-day uptime history and uptime percentage
- Custom request method & headers & body for HTTP(s)
- Custom status code & keyword check for HTTP(s)
- Customizable Webhook

#### Status page

- **Interactive ping(response time) chart** for all type of monitors
- Responsive UI & Follow system theme
- Customizable status page
- Use your own domain with CNAME

## 👀Demo

My status page (Online demo): https://uptimeflare.pages.dev/

Some screenshots:

![Desktop, Light theme](docs/desktop.png)

## ⚡Quickstart / 📄Documentation

Please refer to [Quickstart](https://github.com/lyc8503/UptimeFlare/wiki/Quickstart) and [Wiki](https://github.com/lyc8503/UptimeFlare/wiki)

## TODOs

- [x] TCP `opened` promise
- [x] ~~SSL certificate checks~~
- [ ] Slack / Telegram webhook example
- [ ] Incident timeline
- [ ] Email notification via Cloudflare Email Workers
- [x] Specify region for monitors
