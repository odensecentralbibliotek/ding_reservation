(function ($) {
  Drupal.ding_reservation = {};
  Drupal.ding_reservation.delete_confirm = function(event, ready) {
    event.preventDefault();
    var id = "";
    var form_id = "";
    if(ready) {
      id = "reservation-delete-confirm-ready-branch";
      form_id = "ding-reservation-reservations-ready-form";
    }
    else {
      id = "reservation-delete-confirm-not-ready-branch";
      form_id = "ding-reservation-reservations-notready-form";
    }
    $('#' + id).attr('title', Drupal.t("Delete reservation"))
    $('#' + id).html('<p>' + Drupal.t("Are you sure you want to remove this reservation?") + '</p>');
    dialog_yes = Drupal.t("Yes");
    dialog_no = Drupal.t("No");
    $('#' + id).dialog({
      modal: true,
      buttons: [{
        text: dialog_yes,
        click: function() {
          $(this).dialog('close');
          $("#" + form_id).submit();
        }
      },
      {
        text: dialog_no,
        click: function() {
          $(this).dialog('close');
          return false;
        }
      }]
    });
  }
})(jQuery);
