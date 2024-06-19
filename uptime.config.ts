const pageConfig = {
  // Title for your status page
  title: "Aocro Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [],
}

const workerConfig = {
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
      id: 'vaultwarden',
      name: 'Vault',
      method: 'GET',
      target: 'https://vault.aocro.com',
      tooltip: 'Aocro Vault',
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
  callbacks: {
    onStatusChange: async (
      id: string,
      name: string,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when any monitor's status changed
      // Write any Typescript code here
      // Example implementation:
      const timeString = new Date(timeNow * 1000).toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
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
      id: string,
      name: string,
      timeIncidentStart: number,
      timeNow: number,
      currentError: string
    ) => {
      // This callback will be called EVERY 2 MINTUES if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
