jQuery( document ).ready(function() {
    /*
     * Delete reservations
     
   var elems = jQuery('.delete-reservations').find('input');
   jQuery('body').on('click','#ding-reservation-delete-reservations-form .form-submit',function(){
       debugger; 
       jQuery('<div class="search-overlay--wrapper"><div class="search-overlay--inner"><i class="icon-spinner icon-spin search-overlay--icon"></i><p class="search-overlay--text">' + Drupal.t('Sletter reservationer...') + '</p><p class="cancel"><a href="#">' + Drupal.t('Luk') + '</a></p></div></div>').prependTo('body');
    });
    */
    jQuery('.nav-tabs').on('click',function(){
       jQuery('<div class="search-overlay--wrapper"><div class="search-overlay--inner"><i class="icon-spinner icon-spin search-overlay--icon"></i><p class="search-overlay--text">' + Drupal.t('Henter oversigt...') + '</p><p class="cancel"><a href="#">' + Drupal.t('Luk') + '</a></p></div></div>').prependTo('body');
    });
});