<?php
include 'config/db.php';
include 'config/constants.php';
header("Content-Type: text/html;charset=UTF-8");

$db = new DB();
$actionSuccessMSG="";
$actionFailsMSG="";

$requestData = file_get_contents('php://input');
$requestData = json_decode( $requestData, TRUE ); 

if(isset($requestData['type']) && !empty($requestData['type'])){
    $tblName = "";
    if(!empty($requestData['table']))
      $tblName = $requestData['table'];
    $type = $requestData['type'];

    if($tblName == 'category'){
      if($type == 'add'){
        $actionSuccessMSG=CATEGORY_ADD_MSG;
        $actionFailsMSG=CATEGORY_ADD_ERR_MSG;
      }else if($type == 'delete'){
        $actionSuccessMSG=CATEGORY_DELETE_MSG;
        $actionFailsMSG=CATEGORY_DELETE_ERR_MSG;
      }else if($type == 'edit'){
        $actionSuccessMSG=CATEGORY_EDIT_MSG;
        $actionFailsMSG=CATEGORY_EDIT_ERR_MSG;
      }
    }else if($tblName == 'product'){
      if($type == 'add'){
        $actionSuccessMSG=PRODUCT_ADD_MSG;
        $actionFailsMSG=PRODUCT_ADD_ERR_MSG;
      }else if($type == 'delete'){
        $actionSuccessMSG=PRODUCT_DELETE_MSG;
        $actionFailsMSG=PRODUCT_DELETE_ERR_MSG;
      }else if($type == 'edit'){
        $actionSuccessMSG=PRODUCT_EDIT_MSG;
        $actionFailsMSG=PRODUCT_EDIT_ERR_MSG;
      }
    }else if($tblName == 'gallery'){
      if($type == 'add'){
        $actionSuccessMSG=GALLERY_ADD_MSG;
        $actionFailsMSG=GALLERY_ADD_ERR_MSG;
      }else if($type == 'delete'){
        $actionSuccessMSG=GALLERY_DELETE_MSG;
        $actionFailsMSG=GALLERY_DELETE_ERR_MSG;
      }else if($type == 'edit'){
        $actionSuccessMSG=GALLERY_EDIT_MSG;
        $actionFailsMSG=GALLERY_EDIT_ERR_MSG;
      }
    }

    switch($type){
        case "view":
            $records = $db->getRows($tblName);
            if($records){
                $data['records'] = $db->getRows($tblName);
                $data['status'] = 'OK';
            }else{
                $data['records'] = array();
                $data['status'] = 'ERR';
            }
            echo json_encode($data);
            break;
        case "add":
            if(!empty($requestData['data'])){
                $userData = array();
                foreach($requestData['data'] as $k => $v){
                    $userData[$k]=$v;
                }
                $insert = $db->insert($tblName,$userData);
                if($insert){
                    $data['data'] = $insert;
                    $data['status'] = 'OK';
                    $data['msg'] = $actionSuccessMSG;
                }else{
                    $data['status'] = 'ERR';
                    $data['msg'] = $actionFailsMSG;
                }
            }else{
                $data['status'] = 'ERR';
                $data['msg'] = $actionSuccessMSG;
            }
            echo json_encode($data);
            break;
        case "edit":
            if(!empty($requestData['data'])){
                $userData = array();
                foreach($requestData['data'] as $k => $v){
                    $userData[$k]=$v;
                }
                $condition = array('id' => $requestData['data']['id']);
                $update = $db->update($tblName,$userData,$condition);
                if($update){
                    $data['status'] = 'OK';
                    $data['msg'] = $actionSuccessMSG;
                }else{
                    $data['status'] = 'ERR';
                    $data['msg'] = $actionFailsMSG;
                }
            }else{
                $data['status'] = 'ERR';
                $data['msg'] = $actionFailsMSG;
            }
            echo json_encode($data);
            break;
        case "delete":
            if(!empty($requestData['id'])){
                $condition = array('id' => $requestData['id']);
                $delete = $db->delete($tblName,$condition);
                if($delete){
                  $data['status'] = 'OK';
                  $data['msg'] = $actionSuccessMSG;                  
                }else{
                    $data['status'] = 'ERR';
                    $data['msg'] = $actionFailsMSG;
                }
            }else{
                $data['status'] = 'ERR';
                $data['msg'] = $actionFailsMSG;
            }
            echo json_encode($data);
            break;
        case "verify":
          $verify = $db->verfiyUser($requestData['email'],$requestData['password']);
          if($verify){
              $data['status'] = true;
              echo"lll";
          }else{
              $data['status'] = false;
              $data['email']=$requestData['email'];
              $data['password']=$requestData['password']; 
          }
          echo json_encode($data);
          break;
        default:
            echo '{"status":"INVALID"}';
    }
}

function createStoreJSON($db){
  $storeData['categories'] = $db->getRows('category');
  $storeData['products'] = $db->getRows('product');
  $storeData['gallery'] = $db->getRows('gallery');
  $storeData['carousel'] = $db->getRows('carousel');
  file_put_contents(STORE_JSON_FILE_DIR,json_encode($storeData),LOCK_EX);

  $settings = $db->getRows('settings');
  $settingsA=[];

  foreach ($settings as $k => $v) {
    $settingsA[$v['s_key']] = $v['s_value'];
  }
  file_put_contents(STORE_SETTINGS_JSON_FILE_DIR,json_encode($settingsA),LOCK_EX);
}
