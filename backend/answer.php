<?php

/*
  This page is only for testing purposes to return value to the add-on 
*/

$arr = array(
  "evals" => array(
    "trustwortyness" => mt_rand(0,10),
    "childs" => mt_rand(0,10),
    "privacy" => mt_rand(0,10),
    "angel-o-meter" => mt_rand(0,10),
  ),
  "tags" => array("search-engine", "adult-site"),
);

echo json_encode($arr);
/*
  https://github.com/Extarys/OpenTrust/wiki/Tag-list
  https://github.com/Extarys/OpenTrust/wiki/Evals-list
*/
