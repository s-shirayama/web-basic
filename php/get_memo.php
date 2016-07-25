<?php

// Initialize
include_once('common.php');

$memo = file_get_contents('memo.dat');

Response::send(['memo' => $memo]);

