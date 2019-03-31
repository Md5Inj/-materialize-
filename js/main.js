document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    M.Tabs.init(document.querySelectorAll('.tabs'), {});

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
});