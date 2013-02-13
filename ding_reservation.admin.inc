<?php

/**
 * @file
 * Contains the configuration interface for Ding reservation.
 */

function ding_reservation_admin_settings_form($form, &$form_state) {
  $form = array();

  $form['settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Ding reservation settings'),
  );

  $form['settings']['ding_reservation_always_choose_pickup'] = array(
    '#type' => 'checkbox',
    '#title' => t('Make the user always choose pickup branch.'),
    '#default_value' => variable_get('ding_reservation_always_choose_pickup', FALSE),
  );

  return system_settings_form($form);
}
