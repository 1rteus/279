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
        { n: 4, name: "Математика", room: "405" },
        { n: 5, name: "СПТ сл-ремонтн", room: "201" },
        { n: 6, name: "ннф час", room: "102" },
        { n: 7, name: "География", room: "305" },
        { n: 8, name: "Защита насел", room: "403" }
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
        { n: 4, name: "Ин язык", room: "306" },
        { n: 5, name: "Математика", room: "405" },
        { n: 6, name: "курат час", room: "101" },
        { n: 7, name: "Математика", room: "405" },
        { n: 8, name: "Рус язык", room: "404" },
        { n: 9, name: "Рус литерат", room: "404" }
    ],
    5: [
        { n: 1, name: "Общ курс сл д", room: "110" },
        { n: 2, name: "ФКиз", room: "2" },
        { n: 3, name: "СПТ сл-ремонтн", room: "201" },
        { n: 4, name: "Физика", room: "308" },
        { n: 5, name: "Общ курс сл д", room: "110" },
        { n: 6, name: "Обед", room: "", lunch: true },
        { n: 7, name: "Допуски, пос", room: "401" },
        { n: 8, name: "Ист Бел в к ВИ", room: "101" }
    ]
};

var BELLS = {
    "45": [
        ["08:30","09:15"],["09:25","10:10"],["10:20","11:05"],
        ["11:15","12:00"],["12:10","12:55"],["13:15","14:00"],
        ["14:10","14:55"],["15:05","15:50"],["16:00","16:45"]
    ],
    "35": [
        ["08:30","09:05"],["09:10","09:45"],["09:50","10:25"],
        ["10:30","11:05"],["11:10","11:45"],["11:50","12:25"],
        ["12:30","13:05"],["13:10","13:45"],["13:50","14:25"]
    ],
    "30": [
        ["08:30","09:00"],["09:05","09:35"],["09:40","10:10"],
        ["10:15","10:45"],["10:50","11:20"],["11:25","11:55"],
        ["12:00","12:30"],["12:35","13:05"],["13:10","13:40"]
    ],
    "from5": [
        ["08:30","09:15"],["09:25","10:10"],["10:20","11:05"],
        ["11:15","12:00"],["12:05","12:35"],["12:40","13:10"],
        ["13:15","13:45"],["13:50","14:20"],["14:25","14:55"]
    ]
};

var BELL_NAMES = {
    "45": "45 минут",
    "35": "35 минут",
    "30": "30 минут",
    "from5": "с 5-го урока"
};

var DAYS_SHORT = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
var DAYS_FULL = ["","Понедельник","Вторник","Среда","Четверг","Пятница"];

function gid() {
    var id = localStorage.getItem("did");
    if (!id) { id = "d" + Math.random().toString(36).slice(2,14); localStorage.setItem("did", id); }
    return id;
}

function gs(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch(e) { return d; } }
function ss(k, v) { localStorage.setItem(k, JSON.stringify(v)); }

function getWeekKey() {
    var now = new Date();
    var jan1 = new Date(now.getFullYear(), 0, 1);
    var days = Math.floor((now - jan1) / 86400000);
    var week = Math.ceil((days + jan1.getDay() + 1) / 7);
    return now.getFullYear() + "-W" + week;
}

function clearOldWeek() {
    var wk = getWeekKey();
    var saved = localStorage.getItem("week_key");
    if (saved !== wk) {
        localStorage.setItem("week_key", wk);
        localStorage.removeItem("hw");
        localStorage.removeItem("reps");
    }
}

function isBanned() { return gs("banned", []).indexOf(gid()) !== -1; }

function track() {
    var id = gid();
    var v = gs("visits", []);
    var ex = null;
    for (var i = 0; i < v.length; i++) { if (v[i].id === id) { ex = v[i]; break; } }
    var info = { id: id, ua: navigator.userAgent, ts: Date.now(), cnt: ex ? ex.cnt + 1 : 1 };
    if (ex) { for (var k in info) ex[k] = info[k]; } else { v.push(info); }
    ss("visits", v);
}

function getBells() {
    var mode = gs("bell_mode", "45");
    return BELLS[mode] || BELLS["45"];
}

function getLessonName(day, n) {
    var list = SCHEDULE[day] || [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].n === n) return list[i].name;
    }
    return "";
}

function getLessons(day) {
    var lessons = SCHEDULE[day] || [];
    var today = new Date().toISOString().slice(0,10);
    var reps = gs("reps", {});
    var repKey = String(day) + "_" + today;
    var repsToday = reps[repKey] || [];
    var hwAll = gs("hw", {});
    var hwDay = hwAll[String(day)] || [];
    var bells = getBells();

    var bellIdx = 0;
    var result = [];
    for (var i = 0; i < lessons.length; i++) {
        var lesson = lessons[i];
        var bell = bells[bellIdx] || bells[bells.length - 1];
        bellIdx++;

        if (lesson.lunch) {
            result.push({
                n: lesson.n, lunch: true, name: "Обед", room: "",
                bell: bell, hw: null, origName: null, replaced: false
            });
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

function getCurrentBell() {
    var bells = getBells();
    var now = new Date();
    var m = now.getHours() * 60 + now.getMinutes();
    for (var i = 0; i < bells.length; i++) {
        var s = bells[i][0].split(":");
        var e = bells[i][1].split(":");
        if (m >= +s[0]*60 + +s[1] && m <= +e[0]*60 + +e[1]) return i;
    }
    return -1;
}

function getWeekDates() {
    var now = new Date();
    var dayOfWeek = now.getDay();
    var monday = new Date(now);
    var diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    monday.setDate(now.getDate() + diff);
    var dates = [];
    for (var i = 0; i < 7; i++) {
        var d = new Date(monday);
        d.setDate(monday.getDate() + i);
        dates.push(d.getDate());
    }
    return dates;
}

var todayDow = new Date().getDay();
var selectedDay = todayDow;

function render() {
    var lessons = getLessons(selectedDay);
    var curBell = getCurrentBell();
    var now = new Date();
    var bells = getBells();

    var sel = document.getElementById("day-selector");
    sel.innerHTML = "";
    var dates = getWeekDates();
    var dayLabels = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
    for (var d = 1; d <= 7; d++) {
        var dayIdx = d <= 6 ? d : 0;
        (function(day, idx) {
            var btn = document.createElement("button");
            btn.className = "day-pill" + (day === selectedDay ? " active" : "") + (day === todayDow ? " has-today" : "");
            btn.innerHTML = '<span class="day-name">' + dayLabels[day] + '</span><span class="day-num">' + dates[idx] + '</span>';
            btn.onclick = function() { selectedDay = day; render(); };
            sel.appendChild(btn);
        })(dayIdx, d - 1);
    }

    var sched = document.getElementById("schedule");

    if (selectedDay === 0 || selectedDay === 6) {
        document.getElementById("now-banner").classList.add("hidden");
        sched.innerHTML = '<div class="weekend-msg"><div class="weekend-icon">\ud83d\ude34</div><h2>\u0412\u0440\u0435\u043c\u044f \u043e\u0442\u0434\u044b\u0445\u0430!</h2></div>';
        document.getElementById("current-date").textContent = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
        return;
    }

    var banner = document.getElementById("now-banner");
    if (todayDow === selectedDay && curBell >= 0) {
        var ci = 0;
        for (var k = 0; k < lessons.length; k++) {
            if (ci === curBell) {
                var cl = lessons[k];
                var end = bells[curBell][1];
                var sub = cl.lunch ? "\u0435\u0434\u0438\u043c \u0434\u043e " + end : "\u043a\u0430\u0431. " + cl.room + " \u00b7 \u0434\u043e " + end;
                banner.innerHTML = '<div class="now-dot"></div><div class="now-info"><h3>' + cl.name + '</h3><p>' + sub + '</p></div>';
                banner.classList.remove("hidden");
                break;
            }
            ci++;
        }
    } else {
        var count = lessons.length;
        banner.innerHTML = '<div class="now-dot" style="background:var(--dim);animation:none"></div><div class="now-info"><h3>' + DAYS_FULL[selectedDay] + '</h3><p>' + count + ' \u043f\u0430\u0440</p></div>';
        banner.classList.remove("hidden");
    }

    sched.innerHTML = "";
    for (var i = 0; i < lessons.length; i++) {
        var l = lessons[i];
        var isActive = todayDow === selectedDay && i === curBell;
        var past = todayDow === selectedDay && curBell >= 0 && i < curBell;
        var cls = isActive ? "active" : past ? "past" : "";

        var numHtml = l.lunch ? '\ud83c\udf5d' : l.n;
        var nameHtml = '<div class="name">' + l.name + '</div>';
        if (l.origName) nameHtml = '<div class="name old">' + l.origName + '</div><div class="replace">\u2192 ' + l.name + '</div>';

        var hwHtml = '';
        if (l.hw) {
            hwHtml = '<div class="hw-inline">' + l.hw.replace(/\n/g, '<br>') + '</div>';
        }

        var roomHtml = l.lunch ? '' : '<div class="room">\u043a\u0430\u0431. ' + l.room + '</div>';

        sched.innerHTML += '<div class="card ' + cls + '">' +
            '<div class="num">' + numHtml + '</div>' +
            '<div class="info">' + nameHtml + roomHtml + hwHtml + '</div>' +
            '<div class="time"><div class="t">' + l.bell[0] + ' \u2013 ' + l.bell[1] + '</div><div class="d">45 \u043c\u0438\u043d</div></div>' +
            '</div>';
    }

    document.getElementById("current-date").textContent = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

function init() {
    clearOldWeek();
    if (isBanned()) {
        document.getElementById("ban-screen").classList.remove("hidden");
        return;
    }
    track();
    document.getElementById("app").classList.remove("hidden");
    render();
    setInterval(render, 15000);
}

document.addEventListener("DOMContentLoaded", init);
