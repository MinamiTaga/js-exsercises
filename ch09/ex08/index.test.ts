import { AlarmClock } from "./index.ts";

test("ArarmClock", () => {
  const alarmClock = new AlarmClock();

  expect(alarmClock.setAlarm()).toBe("none");
  expect(alarmClock.state).toBe("alarmSet");
  expect(alarmClock.cancelAlarm()).toBe("none");
  expect(alarmClock.state).toBe("normal");
  expect(alarmClock.cancelAlarm()).toBe("none");
  expect(alarmClock.state).toBe("normal");
  expect(alarmClock.reachedToAlarmTime()).toBe("none");
  expect(alarmClock.state).toBe("normal");
  expect(alarmClock.snooze()).toBe("none");
  expect(alarmClock.state).toBe("normal");
  expect(alarmClock.elapseSnoozeTime()).toBe("none");
  expect(alarmClock.state).toBe("normal");

  const alarmClock2 = new AlarmClock("alarmSet");

  expect(alarmClock2.setAlarm()).toBe("none");
  expect(alarmClock2.state).toBe("alarmSet");
  expect(alarmClock2.cancelAlarm()).toBe("none");
  expect(alarmClock2.state).toBe("normal");

  const alarmClock3 = new AlarmClock("alarmSounding");

  expect(alarmClock3.setAlarm()).toBe("none");
  expect(alarmClock3.state).toBe("alarmSounding");
  expect(alarmClock3.cancelAlarm()).toBe("stopAlarm");
  expect(alarmClock3.state).toBe("normal");

  const alarmClock4 = new AlarmClock("snoozing");

  expect(alarmClock4.setAlarm()).toBe("none");
  expect(alarmClock4.state).toBe("snoozing");
  expect(alarmClock4.cancelAlarm()).toBe("none");
  expect(alarmClock4.state).toBe("normal");

  const alarmClock5 = new AlarmClock("alarmSet");

  expect(alarmClock5.reachedToAlarmTime()).toBe("soundAlarm");
  expect(alarmClock5.state).toBe("alarmSounding");
  expect(alarmClock5.reachedToAlarmTime()).toBe("none");
  expect(alarmClock5.state).toBe("alarmSounding");
  expect(alarmClock5.snooze()).toBe("stopAlarm");
  expect(alarmClock5.state).toBe("snoozing");
  expect(alarmClock5.snooze()).toBe("none");
  expect(alarmClock5.state).toBe("snoozing");
  expect(alarmClock5.elapseSnoozeTime()).toBe("soundAlarm");
  expect(alarmClock5.state).toBe("alarmSounding");
  expect(alarmClock5.elapseSnoozeTime()).toBe("none");
  expect(alarmClock5.state).toBe("alarmSounding");

  const alarmClock6 = new AlarmClock("snoozing");

  expect(alarmClock6.reachedToAlarmTime()).toBe("none");
  expect(alarmClock6.state).toBe("snoozing");

  const alarmClock7 = new AlarmClock("alarmSet");

  expect(alarmClock7.snooze()).toBe("none");
  expect(alarmClock7.state).toBe("alarmSet");
  expect(alarmClock7.elapseSnoozeTime()).toBe("none");
  expect(alarmClock7.state).toBe("alarmSet");
});
