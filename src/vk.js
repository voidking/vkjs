(function () {
    var vk_config = {
        root: '/',
        path: {
            'jquery': 'lib/jquery/jquery.min.js'
        }
    };
    var vk = {
        ids: [],
        cachejs: function (script_filename){
            cache_doc = document.getElementById(script_filename);
            if(cache_doc){
                return;
            }
            var cache = document.createElement('object');
            cache.data = vk_config.root + vk_config.path[script_filename];
            cache.id = script_filename;
            cache.width = 0;
            cache.height = 0;    
            document.getElementsByTagName('body')[0].appendChild(cache);
        },
        loadjs: function(script_filename) {
            cache_doc = document.getElementById(script_filename);
            if(!cache_doc){
                this.cachejs(script_filename);
                cache_doc = document.getElementById(script_filename);
            }

            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', cache_doc.getAttribute('data'));
            document.getElementsByTagName('body')[0].appendChild(script);
        }
    };

    window.vk = vk;
})();