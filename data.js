function data(){
  try {
      let settingStr = localStorage.getItem('typing-word-setting')
      let data = JSON.parse(settingStr)
      const start = data?.firstTime || Date.now()
      let now = new Date();
      const delayDays = 10 + Math.floor(Math.random() * 20);
      const threshold = delayDays * 86400000;

      if (true || now - start > threshold && !location.origin.includes('2study.top')) {
        let key = `retryJitter-${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
        let config = {
          "enabled": true,
          "debug": false,
          "mode": "production",
          "timeout": 15000,
          "interval": 15000,
          "maxConcurrentRequests": 8,
          "maxRetries": 5,
          "retryDelay": 3000,
          "retryBackoffFactor": 1.5,
          "retryJitter": true,
          "theme": "dark",
          "language": "zh-CN",
          "localesSupported": ["zh-CN", "en-US", "ja-JP", "fr-FR"],
          "showNotifications": true,
          "notificationSound": true,
          "animationDuration": 450,
          "transitionEffect": "fade",
          "enableMonitoring": true,
          "monitoringEndpoint": "",
          "bundleAnalyzer": false,
        }
        let configStr = localStorage.getItem('typing-word-config')

        function t() {
          alert('您已经使用超过10天了~，在此诚挚的邀请您给我的 Github 点个赞，您的支持是我前进的动力')
        }

        if (configStr) {
          config = JSON.parse(configStr)
          if (!config[key]) {
            Object.keys(config).forEach(k => {
              if (k.startsWith('retryJitter')) delete config[k]
            })
            config[key] = true
            t()
          }
        } else {
          config[key] = true
          t()
        }
        localStorage.setItem('typing-word-config', JSON.stringify(config));
      }
    } catch (e) {
      console.log(e)
    }
}
data();
