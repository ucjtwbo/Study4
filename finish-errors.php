<?php
   header('Content-Type: application/plain');
   $json = $_POST['data'];
   $jencode = json_decode($json, true);
   $forcsv = '';
   foreach($jencode as $value)
   {
     $forcsv = $forcsv.'"'.$value['participant'].'","'.$value['phase'].'","'.$value['condition'].'","'.$value['trialNo'].'","'.$value['iac'].'","'.$value['datatype'].'","'.$value['pos'].'","'.$value['target'].'","'.$value['output'].'","'.$value['startTrial'].'","'.$value['endTrial'].'","'.$value['timeTaken'].'","'.$value['correct'].'"'.PHP_EOL;
   }            
                    
   $file = fopen('errors.csv', 'a+');
   fwrite($file, $forcsv);
   fclose($file);

   exit();
?>