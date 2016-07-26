<?php

class Param {
    static public function getAll() {
        return array_merge($_GET, $_POST);
    }
    
    static public function get($key) {
        if (isset($_GET[$key])) {
            return $_GET[$key];
        } else if (isset($_POST[$key])) {
            return $_POST[$key];
        } else {
            return null;
        }
    }
}

class DB {
    private $mysqli;
    
    public function __construct() {
        $this->mysqli = new mysqli('localhost', getenv('C9_USER'), '', 'summer');
        $this->mysqli->set_charset('utf-8');
    }
    
    public function select($sql) {
        $ret = array();
        if ($result = $this->mysqli->query($sql)) {
            // 連想配列を取得
            while ($row = $result->fetch_assoc()) {
                $ret[] = $row;
            }
            // 結果セットを閉じる
            $result->close();
        } else {
            throw new Exception('Fails to execute select query : ' . $sql);
        }
        return $ret;
    }
    
    public function insert($sql) {
        if ($this->mysqli->query($sql)) {
            return true;
        } else {
            throw new Exceptionp('Fails to execute select query : ' . $sql);
        }
    }
}

class Response {
    static public function send($arr) {
        $json = json_encode($arr);
        $callback = Param::get('callback');
        if ($callback !== null) {
            echo $callback . '(' . $json . ')';
        } else {
            echo $json;
        }
    }
}