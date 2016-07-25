<?php

// Initialize
include_once('common.php');
$db = new DB();


$memo = Param::get('memo');
$inserted = false;

if ($memo !== null) {
    // It's better to use prepared statement for security.
    $db->insert('Insert into memo values (NULL, "'.$memo.'")');
    $inserted = true;
}
Response::send(['inserted' => $inserted]);
