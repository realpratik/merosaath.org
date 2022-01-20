<?php
//require_once('../vendor/stripe/lib/Stripe.php');
require_once('vendor/autoload.php');   //  ./ -> is a folder back

$stripe = array(
  "secret_key"      => "sk_test_BQokikJOvBiI2HlWgH4olfQ2",
  "publishable_key" => "pk_test_6pRNASCoBOKtIshFeQd4XMUh"
);

/*Stripe\*/Stripe::setApiKey($stripe['secret_key']);
