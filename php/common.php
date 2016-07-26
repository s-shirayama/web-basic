<?php

include_once('lib.php');
date_default_timezone_set('Asia/Tokyo');

// Set Exception
function exception_handler($exception) {
  echo "Uncaught exception: " , $exception->getMessage(), "\n";
}
set_exception_handler('exception_handler');

// Set Header
header("Access-Control-Allow-Origin: *");
if (Param::get('callback') !== null) {
    header("Content-Type: application/x-javascript");
} else {
    header("Content-Type: application/json");
}
