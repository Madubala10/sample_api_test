module.exports = {
  
  
  src_folders: ['test'],
  webdriver: {
   "start_process": true,
        "server_path": "",
        "port":9515
      },
   
    "test_settings": {
      "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      },
      "detailed_output":true,
      "output_timestamp":true,
      "screenshots" : {
        "enabled" : true,
        "on_failure" : true,
        "on_error" : true,
        
        "path" : "./tests_output/screenshots"
    },
   
    
  },}}
  


