const pageConfig = {
  // Title for your status page
  title: "Aocro Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    {
      id: 'whoogle',
      name: 'Search',
      method: 'GET',
      target: 'https://s.aocro.com',
      tooltip: 'Aocro Search',
    },
    {
      id: 'gitea',
      name: 'Git',
      method: 'GET',
      target: 'https://git.aocro.com',
      tooltip: 'Aocro Git',
    },
    {
      id: 'ittools',
      name: 'Tools',
      method: 'GET',
      target: 'https://tools.aocro.com',
      tooltip: 'Aocro Tools',
    },
    {
      id: 'blog',
      name: 'Blog',
      method: 'GET',
      target: 'https://blog.aocro.com',
      tooltip: 'Aocro Blog',
    },
    {
      id: 'excalidraw',
      name: 'Draw',
      method: 'GET',
      target: 'https://draw.aocro.com',
      tooltip: 'Aocro Draw',
    },
    {
      id: 'drawio',
      name: 'Drawio',
      method: 'GET',
      target: 'https://drawio.aocro.com',
      tooltip: 'Aocro Drawio',
    },
    {
      id: 'rsshub',
      name: 'Rss',
      method: 'GET',
      target: 'https://rss.aocro.com',
      tooltip: 'Aocro Rss',
    },
    {
      id: 'authelia',
      name: 'Auth',
      method: 'GET',
      target: 'https://auth.aocro.com',
      tooltip: 'Aocro Auth',
    },
    {
      id: 'home',
      name: 'Home',
      method: 'GET',
      target: 'https://www.aocro.com',
      tooltip: 'Aocro Home',
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
      const timeString = new Date(timeNow * 1000).toLocaleString('en-US', {
        timeZone: 'Asia/Taipei',
      })
      let statusChangeMsg
      if (isUp) {
        statusChangeMsg = `✔️${name} came back up at ${timeString} after ${Math.round(
          (timeNow - timeIncidentStart) / 60
        )} minutes of downtime`
      } else {
        statusChangeMsg = `❌${name} was down at ${timeString} with error ${reason}`
      }
      await fetch('https://ntfy.sh/status-agreement6969', {
          method: 'POST',
          body: statusChangeMsg,
          headers: {
              'Title': 'Aocro Status Changed',
              'Priority': 'urgent',
              'Tags': 'warning'
          }
      })
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
