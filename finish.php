<?php
   header('Content-Type: application/plain');
   $json = $_POST['data'];
   $jencode = json_decode($json, true);
   //print_r ($jencode)
   //fputcsv(fopen('master.csv', 'a+'), $jencode);
   $forcsv = '';
   foreach($jencode as $value)
   {
     $forcsv = $forcsv.'"'.$value['participant'].'","'.$value['phase'].'","'.$value['trialNo'].'","'.$value['trialBlock'].'","'.$value['iac'].'","'.$value['evttype'].'","'.$value['datatype'].'","'.$value['pos'].'","'.$value['target'].'","'.$value['chartyped'].'","'.$value['curroutput'].'","'.$value['startTime'].'","'.$value['endTime'].'","'.$value['timeTaken'].'"'.PHP_EOL;
   }            
                        
   $file = fopen('master.csv', 'a+');
   fwrite($file, $forcsv);
   fclose($file);

   exit();
?>
