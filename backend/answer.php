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
  
  #Evals
  
  trustwortyness
    Rank from 0 to 10 (No sites deserve a 10!). How much can we trust this website
    
  shopping-confidence
    
   
  childs
    How the site's content is safe for childrens
    
  privacy
    How much does this company have your privacy at heart
    
  angel-o-meter (MUHAHAHAAA - we do need a better name for this though)
    50% based of other values
    50% based on some research (for popular websites) ,considering
      company integrity, missions, recent news (like WOT would not make good here)
*/
