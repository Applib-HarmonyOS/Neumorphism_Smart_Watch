export default {
    data: {
        notifications: false,
        weather: "partly_sunny",
        // cloudy, windy, partly_sunny, rainy, sleeting, sun_n_rain, sun_n_windy, sunny, thunderstorm_n_rain, thunderstorm
        temperature: 30,
        time_h: 12,
        time_m: 38,
        date_w: "Mon",
        date_d: 14,
        date_m: 12,
        notification_title: "11:15 AM - 12:30 PM",
        notification_subject: "UI Design Review",
        notification_message: "Meeting Room 5, FLoor 3, HTIPL.",
    },
    onClickStepCounter: function() {
        console.log("Step Counter Button Clicked !");
    },
    onClickNotifications: function() {
        console.log("Notifications Button Clicked !");
    },
    onClickCalories: function() {
        console.log("Calories Button Clicked !");
    },
    onClickHeartRate: function() {
        console.log("Heart Rate Button Clicked !");
    },
    onClickSleepTrack: function() {
        console.log("Sleep Track Button Clicked !");
    },
    toggleNotifications: function() {
        this.notifications = !this.notifications;
        console.log("Notifications toggled !");
    },
    onInit(){
        this.time_h_0=this.time_h.toString()[0];
        this.time_h_1=this.time_h.toString()[1];
        this.time_m_0=this.time_m.toString()[0];
        this.time_m_1=this.time_m.toString()[1];
    }
}