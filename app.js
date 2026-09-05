var SCHEDULE = {
    1: [
        { n: 1, name: "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432\u0435\u0434", room: "201" },
        { n: 2, name: "\u0424\u041a\u0418\u0417", room: "2" },
        { n: 3, name: "\u0411\u0438\u043e\u043b\u043e\u0433\u0438\u044f", room: "305" },
        { n: 4, name: "\u0421\u041f\u0422 \u0441\u043b-\u0440\u0435\u043c\u043e\u043d\u0442\u043d", room: "201" },
        { n: 0, lunch: true },
        { n: 6, name: "\u0414\u043e\u043f\u0443\u0441\u043a\u0438, \u043f\u043e\u0441", room: "401" },
        { n: 7, name: "\u0414\u043e\u043f\u0443\u0441\u043a\u0438, \u043f\u043e\u0441", room: "401" },
        { n: 8, name: "\u041e\u0431\u0449 \u043a\u0443\u0440\u0441 \u0441\u043b \u0434", room: "110" }
    ],
    2: [
        { n: 1, name: "\u0425\u0438\u043c\u0438\u044f", room: "301" },
        { n: 2, name: "\u0418\u043d \u044f\u0437\u044b\u043a", room: "306" },
        { n: 3, name: "\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430", room: "405" },
        { n: 4, name: "\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430", room: "405" },
        { n: 5, name: "\u0421\u041f\u0422 \u0441\u043b-\u0440\u0435\u043c\u043e\u043d\u0442\u043d", room: "201" },
        { n: 6, name: "\u043d\u043d\u0444 \u0447\u0430\u0441", room: "102" },
        { n: 7, name: "\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u044f", room: "305" },
        { n: 8, name: "\u0417\u0430\u0449\u0438\u0442\u0430 \u043d\u0430\u0441\u0435\u043b", room: "403" }
    ],
    3: [
        { n: 1, name: "\u0418\u0441\u0442 \u0411\u0435\u043b \u0432 \u043a \u0412\u0418", room: "101" },
        { n: 2, name: "\u0411\u0438\u043e\u043b\u043e\u0433\u0438\u044f", room: "305" },
        { n: 3, name: "\u0421\u041f\u0422 \u0441\u043b-\u0440\u0435\u043c\u043e\u043d\u0442\u043d", room: "201" },
        { n: 4, name: "\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432\u0435\u0434", room: "201" },
        { n: 0, lunch: true },
        { n: 6, name: "\u0424\u041a\u0418\u0417", room: "2" },
        { n: 7, name: "\u0411\u0435\u043b \u044f\u0437\u044b\u043a", room: "111" },
        { n: 8, name: "\u0411\u0435\u043b \u043b\u0438\u0442\u0435\u0440\u0430\u0442", room: "111" }
    ],
    4: [
        { n: 1, name: "\u0425\u0438\u043c\u0438\u044f", room: "301" },
        { n: 2, name: "\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u044f", room: "305" },
        { n: 3, name: "\u0424\u0438\u0437\u0438\u043a\u0430", room: "308" },
        { n: 4, name: "\u0418\u043d \u044f\u0437\u044b\u043a", room: "306" },
        { n: 5, name: "\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430", room: "405" },
        { n: 6, name: "\u043a\u0443\u0440\u0430\u0442 \u0447\u0430\u0441", room: "101" },
        { n: 7, name: "\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430", room: "405" },
        { n: 8, name: "\u0420\u0443\u0441 \u044f\u0437\u044b\u043a", room: "404" },
        { n: 9, name: "\u0420\u0443\u0441 \u043b\u0438\u0442\u0435\u0440\u0430\u0442", room: "404" }
    ],
    5: [
        { n: 1, name: "\u041e\u0431\u0449 \u043a\u0443\u0440\u0441 \u0441\u043b \u0434", room: "110" },
        { n: 2, name: "\u0424\u041a\u0418\u0417", room: "2" },
        { n: 3, name: "\u0421\u041f\u0422 \u0441\u043b-\u0440\u0435\u043c\u043e\u043d\u0442\u043d", room: "201" },
        { n: 4, name: "\u0424\u0438\u0437\u0438\u043a\u0430", room: "308" },
        { n: 5, name: "\u041e\u0431\u0449 \u043a\u0443\u0440\u0441 \u0441\u043b \u0434", room: "110" },
        { n: 0, lunch: true },
        { n: 7, name: "\u0414\u043e\u043f\u0443\u0441\u043a\u0438, \u043f\u043e\u0441", room: "401" },
        { n: 8, name: "\u0418\u0441\u0442 \u0411\u0435\u043b \u0432 \u043a \u0412\u0418", room: "101" }
    ]
};

var BELLS = [
    ["08:30","09:15"],["09:25","10:10"],["10:20","11:05"],
    ["11:15","12:00"],["12:10","12:55"],["13:15","14:00"],
    ["14:10","14:55"],["15:05","15:50"],["16:00","16:45"]
];

var DAYS_SHORT = ["\u0412\u0441","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"];
var DAYS_FULL = ["","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430"];

function gid() {
    var id = localStorage.getItem("did");
    if (!id) { id = "d" + Math.random().toString(36).slice(2,14); localStorage.setItem("did", id); }
    return id;
}

function gs(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch(e) { return d; } }
function ss(k, v) { localStorage.setItem(k, JSON.stringify(v)); }

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

    var bellIdx = 0;
    var result = [];
    for (var i = 0; i < lessons.length; i++) {
        var lesson = lessons[i];
        if (lesson.lunch) {
            result.push({ n: 0, lunch: true, hw: null, bell: null });
            continue;
        }

        var rep = null;
        for (var j = 0; j < repsToday.length; j++) {
            if (repsToday[j].n === lesson.n) { rep = repsToday[j]; break; }
        }

        var bell = BELLS[bellIdx] || BELLS[BELLS.length - 1];
        bellIdx++;

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
    var now = new Date();
    var m = now.getHours() * 60 + now.getMinutes();
    for (var i = 0; i < BELLS.length; i++) {
        var s = BELLS[i][0].split(":");
        var e = BELLS[i][1].split(":");
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
        sched.innerHTML = '<div class="weekend-msg"><div class="weekend-icon">\ud83d\ude34</div><h2>\u0412\u0440\u0435\u043c\u044f \u043e\u0442\u0434\u044b\u0445\u0430\u0439!</h2></div>';
        document.getElementById("current-date").textContent = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
        return;
    }

    var banner = document.getElementById("now-banner");
    if (todayDow === selectedDay && curBell >= 0) {
        var ci = 0;
        for (var k = 0; k < lessons.length; k++) {
            if (lessons[k].lunch) continue;
            if (ci === curBell) {
                var cl = lessons[k];
                banner.innerHTML = '<div class="now-dot"></div><div class="now-info"><h3>' + cl.name + '</h3><p>\u043a\u0430\u0431. ' + cl.room + ' \u00b7 \u0434\u043e ' + BELLS[curBell][1] + '</p></div>';
                banner.classList.remove("hidden");
                break;
            }
            ci++;
        }
    } else {
        var count = 0;
        for (var i = 0; i < lessons.length; i++) { if (!lessons[i].lunch) count++; }
        banner.innerHTML = '<div class="now-dot" style="background:var(--dim);animation:none"></div><div class="now-info"><h3>' + DAYS_FULL[selectedDay] + '</h3><p>' + count + ' \u0443\u0440\u043e\u043a\u043e\u0432</p></div>';
        banner.classList.remove("hidden");
    }

    var sched = document.getElementById("schedule");
    sched.innerHTML = "";
    var bellI = 0;
    for (var i = 0; i < lessons.length; i++) {
        var l = lessons[i];
        if (l.lunch) {
            sched.innerHTML += '<div class="card lunch"><span>\u041e\u0431\u0435\u0434</span></div>';
            continue;
        }

        var isActive = todayDow === selectedDay && bellI === curBell;
        var past = todayDow === selectedDay && curBell >= 0 && bellI < curBell;
        var cls = isActive ? "active" : past ? "past" : "";

        var nameHtml = '<div class="name">' + l.name + '</div>';
        if (l.origName) nameHtml = '<div class="name old">' + l.origName + '</div><div class="replace">\u2192 ' + l.name + '</div>';

        var hwHtml = '';
        if (l.hw) {
            hwHtml = '<div class="hw-inline">' + l.hw.replace(/\n/g, '<br>') + '</div>';
        }

        sched.innerHTML += '<div class="card ' + cls + '">' +
            '<div class="num">' + l.n + '</div>' +
            '<div class="info">' + nameHtml + '<div class="room">\u043a\u0430\u0431. ' + l.room + '</div>' + hwHtml + '</div>' +
            '<div class="time"><div class="t">' + l.bell[0] + ' \u2013 ' + l.bell[1] + '</div><div class="d">45 \u043c\u0438\u043d</div></div>' +
            '</div>';
        bellI++;
    }

    document.getElementById("current-date").textContent = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

function init() {
    if (isBanned()) {
        document.getElementById("ban-screen").classList.remove("hidden");
        return;
    }
    track();
    document.getElementById("app").classList.remove("hidden");
    render();
    setInterval(render, 30000);
}

document.addEventListener("DOMContentLoaded", init);
