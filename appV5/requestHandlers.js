function start() {
    /*console.log("Request handler 'start' was called.");
    return "Hello start";*/
        console.log("Request handler 'start' was called.");
        function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
        }
        sleep(60000);
        return "Hello Start"; 
    }
    
    function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello upload";
    }
    function find() {
    console.log("Request handler 'find' was called.");
    return "Hello find";
    }
    function show() {
    console.log("Request handler 'show' was called.");
    return "Hello show";
    }
    function login() {
    console.log("Request handler 'login' was called.");
    return "Hello login";
    }
    function logout() {
        console.log("Request handler 'start' was called.");
            return "Hello logout";
        }
exports.start = start;
exports.upload = upload;
exports.find = find;
exports.show = show;
exports.login = login;
exports.logout = logout;