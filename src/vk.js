;(function () {
    var vk_config = {
        root: '/',
        path: {
            'jquery': 'lib/jquery/jquery.min.js',
            'layer': 'lib/layer/layer.js',
            'template': 'lib/art-template/dist/template.js'
        }
    };

    var vk = {
        loadjs: function(script_filename,callback) {
            script_doc = document.getElementById(script_filename);
            if(script_doc){
                return;
            }
            var script = document.createElement('script');
            script.setAttribute('id', script_filename);
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', vk_config.root + vk_config.path[script_filename]);
            document.getElementsByTagName('body')[0].appendChild(script);
            console.log('loading:'+script_filename);
            script.onload = script.onreadystatechange = function(){
                console.log('loaded:'+script_filename);
                callback();
            }
        },
        count_js: 0,
        use: function(ids,callback){
            var that = this;
            if (!Array.isArray(ids)) {
                ids = [ids];
            }
            that.count_js = ids.length;
            for(var i=0;i<ids.length;i++){
                (function(i){
                    script_doc = document.getElementById(ids[i]);
                    if(script_doc){
                        return;
                    }
                    script = document.createElement('script');
                    script.setAttribute('id', ids[i]);
                    script.setAttribute('type', 'text/javascript');
                    script.setAttribute('src', vk_config.root + vk_config.path[ids[i]]);
                    document.getElementsByTagName('body')[0].appendChild(script);
                    console.log('loading:'+ids[i]);
                    script.onload = script.onreadystatechange = function(){
                        console.log('loaded:'+ids[i]); 
                        that.count_js--;
                        if(that.count_js == 0){
                            callback();
                        }
                    }
                })(i);
            }

        }
    };

    window.vk = vk;
})();