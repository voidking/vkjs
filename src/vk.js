(function () {
    var vk_config = {
        root: '/',
        path: {
            'jquery': 'lib/jquery/jquery.min.js',
            'layer': 'lib/layer/layer.js'
        }
    };
    var vk = {
        loadjs: function(script_filename) {
            script_doc = document.getElementById(script_filename);
            if(script_doc){
                return;
            }
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', vk_config.root + vk_config.path[script_filename]);
            document.getElementsByTagName('body')[0].appendChild(script);
            console.log('loading:'+script_filename);
            script.onload = script.onreadystatechange = function(){
                console.log('loaded:'+script_filename);
            }
        }
    };

    window.vk = vk;
})();