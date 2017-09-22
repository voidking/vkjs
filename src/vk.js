(function () {
    var vk_config = {
        root: '/',
        path: {
            'jquery': 'lib/jquery/jquery.min.js',
            'layer': 'lib/layer/layer.js'
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
            console.log('caching:'+script_filename);
            cache.onload = cache.onreadystatechange = function(){
                console.log('cached:'+script_filename);
            };
            
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
            console.log('loading:'+script_filename);
            script.onload = script.onreadystatechange = function(){
                console.log('loaded:'+script_filename);
            }
        }
    };

    window.vk = vk;
})();