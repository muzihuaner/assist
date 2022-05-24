
/*
ie10 不支持 location.origin，以下是hack方法
*/

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

