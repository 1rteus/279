var SCHEDULE = {
    1: [
        { n: 1, name: "Материаловед", room: "201" },
        { n: 2, name: "ФКиз", room: "2" },
        { n: 3, name: "Биология", room: "305" },
        { n: 4, name: "СПТ сл-ремонтн", room: "201" },
        { n: 5, name: "Обед", room: "", lunch: true },
        { n: 6, name: "Допуски, пос", room: "401" },
        { n: 7, name: "Допуски, пос", room: "401" },
        { n: 8, name: "Общ курс сл д", room: "110" }
    ],
    2: [
        { n: 1, name: "Химия", room: "301" },
        { n: 2, name: "Ин язык", room: "306" },
        { n: 3, name: "Математика", room: "405" },
        { n: 4, name: "Ин язык", room: "306" },
        { n: 5, name: "СПТ сл-ремонтн", room: "201" },
        { n: 6, name: "ннф час", room: "102" },
        { n: 7, name: "География", room: "305" },
        { n: 8, name: "Математика", room: "405" }
    ],
    3: [
        { n: 1, name: "Ист Бел в к ВИ", room: "101" },
        { n: 2, name: "Биология", room: "305" },
        { n: 3, name: "СПТ сл-ремонтн", room: "201" },
        { n: 4, name: "Материаловед", room: "201" },
        { n: 5, name: "Обед", room: "", lunch: true },
        { n: 6, name: "ФКиз", room: "2" },
        { n: 7, name: "Бел язык", room: "111" },
        { n: 8, name: "Бел литерат", room: "111" }
    ],
    4: [
        { n: 1, name: "Химия", room: "301" },
        { n: 2, name: "География", room: "305" },
        { n: 3, name: "Физика", room: "308" },
        { n: 4, name: "Общ курс сл д", room: "110" },
        { n: 5, name: "Математика", room: "405" },
        { n: 6, name: "курат час", room: "101" },
        { n: 7, name: "Математика", room: "405" },
        { n: 8, name: "Рус язык", room: "404" },
        { n: 9, name: "Рус литерат", room: "404" }
    ],
    5: [
        { n: 1, name: "Защита насел", room: "403" },
        { n: 2, name: "ФКиз", room: "2" },
        { n: 3, name: "СПТ сл-ремонтн", room: "201" },
        { n: 4, name: "Физика", room: "308" },
        { n: 5, name: "Обед", room: "", lunch: true },
        { n: 6, name: "Общ курс сл д", room: "110" },
        { n: 7, name: "Допуски, пос", room: "401" },
        { n: 8, name: "Ист Бел в к ВИ", room: "101" }
    ]
};

var BELLS = {
    "45": [["08:30","09:15"],["09:25","10:10"],["10:20","11:05"],["11:15","12:00"],["12:10","12:55"],["13:15","14:00"],["14:10","14:55"],["15:05","15:50"],["16:00","16:45"]],
    "35": [["08:30","09:05"],["09:10","09:45"],["09:50","10:25"],["10:30","11:05"],["11:10","11:45"],["11:50","12:25"],["12:30","13:05"],["13:10","13:45"],["13:50","14:25"]],
    "30": [["08:30","09:00"],["09:05","09:35"],["09:40","10:10"],["10:15","10:45"],["10:50","11:20"],["11:25","11:55"],["12:00","12:30"],["12:35","13:05"],["13:10","13:40"]],
    "from5": [["08:30","09:15"],["09:25","10:10"],["10:20","11:05"],["11:15","12:00"],["12:05","12:35"],["12:40","13:10"],["13:15","13:45"],["13:50","14:20"],["14:25","14:55"]]
};

var DAYS_FULL = ["","Понедельник","Вторник","Среда","Четверг","Пятница"];

function getMonday(d) {
    var date = new Date(d);
    var day = date.getDay();
    var diff = day === 0 ? -6 : 1 - day;
    date.setDate(date.getDate() + diff);
    return date;
}

function formatDate(d) {
    return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
}

function getWeekKey(offset) {
    var now = new Date();
    var monday = getMonday(now);
    monday.setDate(monday.getDate() + (offset * 7));
    return formatDate(monday);
}

function getWeekDates(offset) {
    var now = new Date();
    var monday = getMonday(now);
    monday.setDate(monday.getDate() + (offset * 7));
    var dates = [];
    var fullDates = [];
    for (var i = 0; i < 7; i++) {
        var d = new Date(monday);
        d.setDate(monday.getDate() + i);
        dates.push(d.getDate());
        fullDates.push(formatDate(d));
    }
    return { dates: dates, fullDates: fullDates };
}

function getWeekLabel(offset) {
    if (offset === 0) return "Эта неделя";
    if (offset === 1) return "Следующая";
    var now = new Date();
    var monday = getMonday(now);
    monday.setDate(monday.getDate() + (offset * 7));
    var sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    var months = ["","янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"];
    if (monday.getMonth() === sunday.getMonth()) {
        return monday.getDate() + "-" + sunday.getDate() + " " + months[monday.getMonth()];
    }
    return monday.getDate() + " " + months[monday.getMonth()] + " - " + sunday.getDate() + " " + months[sunday.getMonth()];
}

function getBellsForDay(dayDow) {
    var mode = "45";
    if (bellModesCache && bellModesCache[String(dayDow)]) {
        mode = bellModesCache[String(dayDow)];
    }
    return BELLS[mode] || BELLS["45"];
}

function getLessons(day, hwData, repsData, weekOffset) {
    var lessons = SCHEDULE[day] || [];
    var wkData = getWeekDates(weekOffset);
    var dayIdx = day >= 1 && day <= 5 ? day - 1 : -1;
    var dateString = dayIdx >= 0 ? wkData.fullDates[dayIdx] : "";
    var repKey = day + "_" + dateString;
    var repsToday = (repsData && repsData[repKey]) || [];
    var hwDay = (hwData && hwData[String(day)]) || [];
    var bells = getBellsForDay(day);

    var shortType = shortDaysCache[String(day)] || null;
    var filteredLessons = [];
    var skipFrom = -1;
    if (shortType === "1less") skipFrom = lessons.length - 1;
    else if (shortType === "last2") skipFrom = 1;
    else if (shortType === "last3") skipFrom = 2;
    for (var i = 0; i < lessons.length; i++) {
        if (skipFrom >= 0 && i >= skipFrom && !lessons[i].lunch) continue;
        filteredLessons.push(lessons[i]);
    }
    lessons = filteredLessons;

    var bellIdx = 0;
    var result = [];
    for (var i = 0; i < lessons.length; i++) {
        var lesson = lessons[i];
        var bell = bells[bellIdx] || bells[bells.length - 1];
        bellIdx++;

        if (lesson.lunch) {
            result.push({ n: lesson.n, lunch: true, name: "Обед", room: "", bell: bell });
            continue;
        }

        var rep = null;
        for (var j = 0; j < repsToday.length; j++) {
            if (repsToday[j].n === lesson.n) { rep = repsToday[j]; break; }
        }

        var hw = null;
        for (var j = 0; j < hwDay.length; j++) {
            if (hwDay[j].n === lesson.n) { hw = hwDay[j].t; break; }
        }

        result.push({
            n: lesson.n,
            origName: rep ? lesson.name : null,
            name: rep ? rep.name : lesson.name,
            room: rep ? (rep.room || lesson.room) : lesson.room,
            bell: bell,
            hw: hw,
            replaced: !!rep
        });
    }
    return result;
}

function getCurrentBell(weekOffset) {
    if (weekOffset !== 0) return -1;
    var now = new Date();
    var day = now.getDay();
    if (day < 1 || day > 5) return -1;
    var bells = getBellsForDay(day);
    var m = now.getHours() * 60 + now.getMinutes();
    var lastEnd = bells[bells.length - 1];
    var endMins = parseInt(lastEnd[1]) * 60 + parseInt(lastEnd[1].split(":")[1]);
    if (m > endMins) return -2;
    for (var i = 0; i < bells.length; i++) {
        var s = bells[i][0].split(":");
        var e = bells[i][1].split(":");
        if (m >= parseInt(s[0])*60 + parseInt(s[1]) && m <= parseInt(e[0])*60 + parseInt(e[1])) return i;
    }
    return -1;
}

function getLastEndedLesson(weekOffset) {
    if (weekOffset !== 0) return -1;
    var now = new Date();
    var day = now.getDay();
    if (day < 1 || day > 5) return -1;
    var bells = getBellsForDay(day);
    var m = now.getHours() * 60 + now.getMinutes();
    var ended = -1;
    for (var i = 0; i < bells.length; i++) {
        var e = bells[i][1].split(":");
        if (m > parseInt(e[0])*60 + parseInt(e[1])) ended = i;
    }
    return ended;
}

var todayDow = new Date().getDay();
var selectedDay = todayDow;
var weekOffset = 0;
var currentHW = {};
var currentReps = {};
var bellModesCache = {};
var shortDaysCache = {};

function render() {
    if (selectedDay < 0 || selectedDay > 6) selectedDay = todayDow;

    var lessons = getLessons(selectedDay, currentHW, currentReps, weekOffset);
    var curBell = getCurrentBell(weekOffset);
    var lastEnded = getLastEndedLesson(weekOffset);
    var now = new Date();
    var wkData = getWeekDates(weekOffset);
    var bells = getBellsForDay(selectedDay);

    var weekLabel = document.getElementById("week-label");
    if (weekLabel) weekLabel.textContent = getWeekLabel(weekOffset);

    var sel = document.getElementById("day-selector");
    sel.innerHTML = "";
    var dayLabels = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
    for (var d = 1; d <= 7; d++) {
        var dayIdx = d <= 6 ? d : 0;
        var btn = document.createElement("button");
        var isToday = dayIdx === todayDow && weekOffset === 0;
        btn.className = "day-pill" + (dayIdx === selectedDay ? " active" : "") + (isToday ? " has-today" : "");
        btn.innerHTML = '<span class="day-name">' + dayLabels[dayIdx] + '</span><span class="day-num">' + wkData.dates[d-1] + '</span>';
        (function(day) { btn.onclick = function() { selectedDay = day; render(); }; })(dayIdx);
        sel.appendChild(btn);
    }

    var sched = document.getElementById("schedule");

    if (selectedDay === 0 || selectedDay === 6) {
        document.getElementById("now-banner").classList.add("hidden");
        sched.innerHTML = '<div class="weekend-msg"><div class="weekend-icon">\ud83d\ude34</div><h2>\u0412\u0440\u0435\u043c\u044f \u043e\u0442\u0434\u044b\u0445\u0430!</h2></div>';
        document.getElementById("current-date").textContent = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
        return;
    }

    var banner = document.getElementById("now-banner");
    var isToday = todayDow === selectedDay && weekOffset === 0;
    var isAfterSchool = isToday && curBell === -2;

    if (isToday && curBell >= 0 && curBell < lessons.length) {
        var cl = lessons[curBell];
        var end = bells[curBell][1];
        if (cl.lunch) {
            banner.innerHTML = '<div class="now-dot" style="background:var(--orange)"></div><div class="now-info"><h3>\ud83c\udf5d \u041e\u0431\u0435\u0434</h3><p>' + end + '</p></div>';
        } else {
            banner.innerHTML = '<div class="now-dot"></div><div class="now-info"><h3>' + cl.name + '</h3><p>\u043a\u0430\u0431. ' + cl.room + ' \u00b7 \u0434\u043e ' + end + '</p></div>';
        }
        banner.classList.remove("hidden");
    } else if (isAfterSchool) {
        banner.innerHTML = '<div class="now-dot" style="background:var(--orange);animation:none"></div><div class="now-info"><h3>\u0423\u0440\u043e\u043a\u0438 \u0437\u0430\u043a\u043e\u043d\u0447\u0435\u043d\u044b</h3><p>' + DAYS_FULL[selectedDay] + '</p></div>';
        banner.classList.remove("hidden");
    } else {
        banner.innerHTML = '<div class="now-dot" style="background:var(--dim);animation:none"></div><div class="now-info"><h3>' + DAYS_FULL[selectedDay] + '</h3><p>' + lessons.length + ' \u0443\u0440\u043e\u043a\u043e\u0432</p></div>';
        banner.classList.remove("hidden");
    }

    sched.innerHTML = "";
    for (var i = 0; i < lessons.length; i++) {
        var l = lessons[i];
        var isActive = false;
        var past = false;

        if (weekOffset === 0 && isToday) {
            if (curBell >= 0 && i === curBell) isActive = true;
            else if (isAfterSchool) past = true;
            else if (lastEnded >= 0 && i <= lastEnded) past = true;
        } else if (weekOffset === 0 && selectedDay >= 1 && selectedDay <= 5 && selectedDay !== todayDow) {
            if (todayDow === 0 || todayDow === 6 || todayDow > selectedDay) past = true;
        } else if (weekOffset < 0) {
            past = true;
        }

        var cls = isActive ? " active" : past ? " past" : "";
        var numHtml = l.lunch ? '\ud83c\udf5d' : l.n;
        var nameHtml = '<div class="name">' + l.name + '</div>';
        if (l.origName) nameHtml = '<div class="name old">' + l.origName + '</div><div class="replace">\u2192 ' + l.name + '</div>';
        var hwHtml = '';
        if (l.hw) hwHtml = '<div class="hw-inline">' + l.hw.replace(/\n/g, '<br>') + '</div>';
        var roomHtml = l.lunch ? '' : '<div class="room">\u043a\u0430\u0431. ' + l.room + '</div>';

        sched.innerHTML += '<div class="card' + cls + '">' +
            '<div class="num">' + numHtml + '</div>' +
            '<div class="info">' + nameHtml + roomHtml + hwHtml + '</div>' +
            '<div class="time"><div class="t">' + l.bell[0] + ' \u2013 ' + l.bell[1] + '</div></div>' +
            '</div>';
    }

    var dateIdx = selectedDay >= 1 && selectedDay <= 5 ? selectedDay - 1 : 0;
    document.getElementById("current-date").textContent = wkData.fullDates[dateIdx];
}

function changeWeek(dir) {
    weekOffset += dir;
    if (weekOffset > 1) weekOffset = 1;
    if (weekOffset < 0) weekOffset = 0;
    loadHWForWeek();
    render();
}

function loadHWForWeek() {
    var path = "hw_" + getWeekKey(weekOffset);
    FirebaseDB.onValue(path, function(data) {
        currentHW = data || {};
        render();
    });
}

function init() {
    FirebaseDB.init();
    document.getElementById("app").classList.remove("hidden");

    loadHWForWeek();

    FirebaseDB.onValue("reps", function(data) {
        currentReps = data || {};
        render();
    });

    FirebaseDB.onValue("bell_modes", function(data) {
        bellModesCache = data || {};
        render();
    });

    FirebaseDB.onValue("short_days", function(data) {
        shortDaysCache = data || {};
        render();
    });

    render();
    setInterval(render, 15000);
}

document.addEventListener("DOMContentLoaded", init);
