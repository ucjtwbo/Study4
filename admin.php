<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <title>Study 4 Administration</title>
    <link type="text/css" rel="stylesheet" href="css/reset.css" />
    <link type="text/css" rel="stylesheet" href="css/style.css" />
</head>

<body>
    <div class="container">
        <h1>Study 4 Administration</h1>
        <form method="post" action="admin.php">
        <p>Reset password: <input type="password" name="password"></p>
        <p><button action="submit">Reset all data</button></p>
        </form>
        
        <p>
            <?php 
                if(isset($_POST['password'])){
                    if($_POST['password'] == 'delete'){
                        file_put_contents('master.csv','"ParticipantID", "Phase", "TrialNo", "IAC", "EventType", "DataType", "Target",  "CharTyped", "CurrOutput", "StartTime", "EndTime", "TimeTaken"'.PHP_EOL);
                        echo "Master spreadsheet has been reset.";     
                    }
                    else{
                        echo "That's not the password.";
                    }

                }
            ?>
        </p>
    </div>
</body>

</html>