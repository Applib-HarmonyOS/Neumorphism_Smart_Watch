import fetch from '@system.fetch';

export default {
    data: {
        notifications: false,
        // cloudy, windy, partly_sunny, rainy, sleeting, sun_n_rain, sun_n_windy, sunny, thunderstorm_n_rain, thunderstorm
        weather: "partly_sunny",
        temperature: "30",
        notification_title: "Title",
        notification_subject: "Subject",
        notification_message: "Message",
        time_h: "00",
        time_m: "00",
        date_w: "Mon",
        date_d: "01",
        date_m: "01",
        time_h_0: "0",
        time_h_1: "0",
        time_m_0: "0",
        time_m_1: "0",
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
    fetchDateAndTime : function(){
        let data;
        fetch.fetch({
            url:'https://www.timeapi.io/api/Time/current/zone?timeZone=asia/kolkata',
            responseType:"json",
            method: 'GET',
            success:function(resp)
            {
                data = JSON.parse(resp.data);
            },
            fail:(data,code) => {
                console.log("fail data:"+ JSON.stringify(data));
                console.log("fail code:"+ code)
            },
            complete: ()=>{
                this.date_d=data.day;
                this.date_m=data.month;
                this.time_h=data.hour;
                this.time_m=data.minute;
                this.date_w=data.dayOfWeek.substring(0,3);
                if (this.time_h.toString().length == 1)
                {
                    this.time_h_0 = "0";
                    this.time_h_1 = this.time_h.toString().substring(0,1);
                }
                else
                {
                    this.time_h_0 = this.time_h.toString().substring(0, 1);
                    this.time_h_1 = this.time_h.toString().substring(1, 2);
                }
                if (this.time_m.toString().length == 1)
                {
                    this.time_m_0 = "0";
                    this.time_m_1 = this.time_m.toString().substring(0, 1);
                }
                else
                {
                    this.time_m_0 = this.time_m.toString().substring(0, 1);
                    this.time_m_1 = this.time_m.toString().substring(1, 2);
                }
            }
        })
    },
    fetchData : function(){
        let data;
        fetch.fetch({
            url:'https://neumorphism-api.herokuapp.com/neumorphism/smart_watch',
            responseType:"json",
            method: 'GET',
            success:function(resp)
            {
            data = JSON.parse(resp.data);
            },
            fail:(data,code) => {
            console.log("fail data:"+ JSON.stringify(data));
            console.log("fail code:"+ code)
            },
            complete: ()=>{
                this.weather = data.weather;
                this.notification_title =  data.notification_title;
                this.notification_subject =  data.notification_subject;
                this.notification_message =  data.notification_message;
            }
        })
    },
    onInit(){
        this.fetchDateAndTime();
        this.fetchData();
        setInterval(this.fetchDateAndTime, 1000);
    }
}