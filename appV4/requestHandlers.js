function start() {
    console.log("Request handler 'start' was called.");
    }
    function upload() {
    console.log("Request handler 'upload' was called.");
    }
    function find() {
    console.log("Request handler 'find' was called.");
    }
    function show() {
    console.log("Request handler 'show' was called.");
    }
    function login() {
    console.log("Request handler 'login' was called.");
    }
    function logout() {
    console.log("Request handler 'start' was called.");
    }
    exports.start = start;
    exports.upload = upload;
    exports.find = find;
    exports.show = show;
    exports.login = login;
    exports.logout = logout;