(function ($) {
  Drupal.ding_reservation = {};
  Drupal.ding_reservation.delete_confirm = function (event, ready, del_id) {
    event.preventDefault();
    var id = "";
    if(ready) {
      id = "reservation-delete-confirm-ready-branch";
    }
    else {
      id = "reservation-delete-confirm-not-ready-branch";
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
          $('input[name="delete-' + del_id + '"]').attr("onclick", "").trigger('click');
        }
      },
      {
        text: dialog_no,
        click: function () {
          $(this).dialog('close');
          return false;
        }
      }]
    });
  }
})(jQuery);
