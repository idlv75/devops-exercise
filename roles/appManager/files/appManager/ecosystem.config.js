module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [


    // gify-panda
    {
      "name"      : "gify-panda",
      "cwd"       : "/tmp/gify-panda",
      "script"    : "./gify-panda.js",
      "instances" : "max",
      "exec_mode" : "cluster"
    },

    // counter-panda
    {
      "name"      : "counter-panda",
      "cwd"       : "/tmp/counter-panda",
      "script"    : "./counter-panda.js",    
      "instances" : "max",
      "exec_mode" : "cluster"
    } ] 
}
