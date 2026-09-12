var FirebaseDB = (function() {
    var db = null;
    var listeners = {};

    function init() {
        if (db) return true;
        if (typeof FIREBASE_CONFIG === 'undefined') {
            console.warn('Firebase config not found');
            return false;
        }
        try {
            firebase.initializeApp(FIREBASE_CONFIG);
            db = firebase.firestore();
            console.log('Firestore connected');

            db.collection('_data').doc('config_admin_pw').get().then(function(doc) {
                if (!doc.exists) {
                    db.collection('_data').doc('config_admin_pw').set({ value: '279admin' });
                    console.log('Default password created');
                }
            }).catch(function() {});

            return true;
        } catch(e) {
            console.warn('Firebase init error:', e);
            return false;
        }
    }

    function pathToDoc(path) {
        var flat = path.replace(/\//g, '_');
        return db.collection('_data').doc(flat);
    }

    function get(path, callback) {
        if (!db) { callback(null); return; }
        pathToDoc(path).get().then(function(doc) {
            callback(doc.exists ? doc.data() : null);
        }).catch(function(e) {
            console.warn('Get error:', path, e);
            callback(null);
        });
    }

    function set(path, data) {
        if (!db) { return Promise.resolve(); }
        return pathToDoc(path).set(data).catch(function(e) {
            console.warn('Set error:', path, e);
        });
    }

    function remove(path) {
        if (!db) { return Promise.resolve(); }
        return pathToDoc(path).delete().catch(function(e) {
            console.warn('Remove error:', path, e);
        });
    }

    function onValue(path, callback) {
        if (!db) { callback(null); return function(){}; }
        var unsub = pathToDoc(path).onSnapshot(function(doc) {
            callback(doc.exists ? doc.data() : null);
        }, function(e) {
            console.warn('onValue error:', path, e);
            callback(null);
        });
        listeners[path] = unsub;
        return function() { if (listeners[path]) { listeners[path](); delete listeners[path]; } };
    }

    function disconnect() {
        for (var p in listeners) { listeners[p](); }
        listeners = {};
    }

    init();

    return { init: init, get: get, set: set, remove: remove, onValue: onValue, disconnect: disconnect };
})();
