class AlarmClock {
    alarmCollection = [];
    intervalId = null;

    constructor() {}

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        const isRepeatAlarm = this.alarmCollection.find((item) => {
            return item.time === time;
        });
        if (isRepeatAlarm) {
            console.warn("Уже присутствует звонок на это же время");
        }

        this.alarmCollection.push({ time, callback, canCall: true });
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((item) => {
            return item.time !== time;
        });
    }
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    }
    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((item) => {
                if (
                    item.canCall &&
                    item.time === this.getCurrentFormattedTime()
                ) {
                    item.canCall = false;
                    item.callback();
                }
            });
        }, 1000);
    }
    stop() {
        if (this.intervalId) {
            clearInterval();
            this.intervalId = null;
        }
    }
    resetAllCalls() {
        this.alarmCollection.forEach((item) => {
            item.canCall = true;
        });
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
const test = new AlarmClock();
console.log(test.getCurrentFormattedTime());
