<?php
   header('Content-Type: application/plain');
   $json = $_POST['data'];
   $jencode = json_decode($json, true);
   $forcsv = '';
   foreach($jencode as $value)
   {
     $forcsv = $forcsv.'"'.$value['participant'].'","'.$value['phase'].'","'.$value['trialNo'].'","'.$value['trialBlock'].'","'.$value['iac'].'","'.$value['datatype'].'","'.$value['output'].'","'.$value['target'].'","'.$value['startTrial'].'","'.$value['endTrial'].'","'.$value['timeTaken'].'","'.$value['correct'].'"'.PHP_EOL;
   }            
                    
   $file = fopen('errors.csv', 'a+');
   fwrite($file, $forcsv);
   fclose($file);

   exit();
?>
