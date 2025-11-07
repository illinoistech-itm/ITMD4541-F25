<?php

if ( isset($_SERVER['CONTENT_TYPE']) && strtolower($_SERVER['CONTENT_TYPE']) == 'application/json' ) {
  $inputJSON = file_get_contents('php://input');
  $data = json_decode($inputJSON);
  $output = [ "post_data" => $data ];
  $output["time"] = date("Y-m-d H:i:s");
  $output["request_content_type"] = $_SERVER['CONTENT_TYPE'];
  $output["http_method"] = $_SERVER['REQUEST_METHOD'];
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json");
  echo json_encode($output);
} else {
  $output = ["post_data" => $_POST];
  $output["time"] = date("Y-m-d H:i:s");
  $output["request_content_type"] = $_SERVER['CONTENT_TYPE'];
  $output["http_method"] = $_SERVER['REQUEST_METHOD'];
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json");
  echo json_encode($output);
}