<?php

// Initialize
include_once('common.php');

$updated = false;
$new_memo = Param::get('memo');
if ($new_memo !== null) {
    file_put_contents('memo.dat', $new_memo);
    $updated = true;
}

Response::send(['updated' => $updated]);

