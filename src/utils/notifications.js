export default {
  askPermission() {
    if(Notification.permission === 'default'){
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          new Notification("Hi there!");
        }
      });
    }
  },
  focus() {
    const title = "Let's get back to work!"
    const body = "You shall not procrastinate!"
    if (Notification.permission === "granted")
      new Notification(title, {
        body,
        // icon: import('@/assets/logo.png')
      });
    
  },
  shortBreak() {
    const title = "Short Break - 5 minutes"
    const body = "Get up and stretch a little bit!"
    if (Notification.permission === "granted")
    new Notification(title, {
      body,
      // icon: import('@/assets/logo.png')
    });
  },
  longBreak() {
    const title = "Long Break - 20 minutes";
    const body = "You have done a good job! Time to rest.";
    if (Notification.permission === "granted")
    new Notification(title, {
      body,
      // icon: import('@/assets/logo.png')
    });
  },

}