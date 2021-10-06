module.exports = {
  apps : [{
    cwd: "/data/webroot/sunflowerswap/",
    name:"SUNF",
    script: 'yarn start',
    watch: false,
    instances: 1,
    "error_file": "/data/logs/node-app.stderr.log",
    "out_file": "/data/logs/node-app.stdout.log",
    "pid_file": "pids/node-geo-api.pid",
  }]
};
