(function() {
    var $body = document.body,
    $menuTrigger = $body.getElementsByClassName('menu-trigger')[0];

    if ( typeof $menuTrigger !== 'undefined' ) {
        $menuTrigger.addEventListener('click', function() {
            $body.className = ( $body.className == 'menu-active' )? '' :  'menu-active';
        });
    }

}).call(this);