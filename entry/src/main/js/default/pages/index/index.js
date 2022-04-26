/*
* Copyright (C) 2022 Application library engineering group.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import fetch from '@system.fetch';

export default {
    data: {
        notifications: false,
        weather_icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        temperature: "30",
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
    onClickStepCounter: function () {
        console.log("Step Counter Button Clicked !");
    },
    onClickNotifications: function () {
        console.log("Notifications Button Clicked !");
    },
    onClickCalories: function () {
        console.log("Calories Button Clicked !");
    },
    onClickHeartRate: function () {
        console.log("Heart Rate Button Clicked !");
    },
    onClickSleepTrack: function () {
        console.log("Sleep Track Button Clicked !");
    },
    toggleNotifications: function () {
        this.notifications = !this.notifications;
        console.log("Notifications toggled !");
    },
    fetchDateAndTime: function () {
        const date = new Date();
        this.date_d = (String(date.getDate()).padStart(2, '0'))
        this.date_m = (String(date.getMonth() + 1).padStart(2, '0'))
        this.time_h = (String(date.getHours()).padStart(2, '0'))
        this.time_m = (String(date.getMinutes()).padStart(2, '0'))
        this.time_h_0 = this.time_h.toString().substring(0, 1);
        this.time_h_1 = this.time_h.toString().substring(1, 2);
        this.time_m_0 = this.time_m.toString().substring(0, 1);
        this.time_m_1 = this.time_m.toString().substring(1, 2);
        const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        this.date_w = this.$t('strings.' + weekDays[date.getDay()]);
    },
    fetchData: function () {
        let data;
        fetch.fetch({
            url: 'https://neumorphism-api.herokuapp.com/neumorphism/smart_watch',
            responseType: "json",
            method: 'GET',
            success: function (resp) {
                data = JSON.parse(resp.data);
            },
            fail: (err, code) => {
                console.log("fail data:" + JSON.stringify(err));
                console.log("fail code:" + code)
            },
            complete: () => {
                this.notification_title = data.notification_title;
                this.notification_subject = data.notification_subject;
                this.notification_message = data.notification_message;
            }
        })
        fetch.fetch({
            url: 'https://weatherdbi.herokuapp.com/data/weather/chennai',
            responseType: "json",
            method: 'GET',
            success: function (resp) {
                data = JSON.parse(resp.data);
            },
            fail: (err, code) => {
                console.log("fail data:" + JSON.stringify(err));
                console.log("fail code:" + code)
            },
            complete: () => {
                this.temperature = data.currentConditions.temp.c;
                this.weather_icon = data.currentConditions.iconURL;
            }
        })
    },
    onInit() {
        this.notification_title = this.$t('strings.notification_title');
        this.notification_subject = this.$t('strings.notification_subject');
        this.notification_message = this.$t('strings.notification_message');
        this.fetchDateAndTime();
        this.fetchData();
        setInterval(this.fetchDateAndTime, 1000);
    }
}