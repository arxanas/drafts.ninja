module.exports = {
  src_folders: ["tests"],

  selenium: {
    start_process: true,
    server_path: "bin/selenium-standalone.jar",
    host: "localhost",
    port: 4444,
  },

  test_settings: {
    default: {
      launch_url: "http://localhost",
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      screenshots: {
        enabled: false,
        path: "",
      },
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
}
