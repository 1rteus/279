var FirebaseDB = (function() {
    var db = null;

    function init() {
        if (db) return;
        if (typeof FIREBASE_CONFIG === 'undefined') return;
        try {
            firebase.initializeApp(FIREBASE_CONFIG);
            db = firebase.firestore();
        } catch(e) {}
    }

    function pathToDoc(path) {
        return db.collection('_data').doc(path.replace(/\//g, '_'));
    }

    function get(path, cb) {
        if (!db) { cb(null); return; }
        pathToDoc(path).get().then(function(d) {
            cb(d.exists ? d.data() : null);
        }).catch(function() { cb(null); });
    }

    function set(path, data) {
        if (!db) return Promise.resolve();
        return pathToDoc(path).set(data);
    }

    function onValue(path, cb) {
        if (!db) { cb(null); return function(){}; }
        return pathToDoc(path).onSnapshot(function(d) {
            cb(d.exists ? d.data() : null);
        }, function() { cb(null); });
    }

    init();

    return { init: init, get: get, set: set, onValue: onValue };
})();
