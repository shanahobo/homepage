<?php

        // db login details
		$mysql_host = 'localhost';
		$mysql_user = 'niallsha_dbuser';
		$mysql_pass = 'Pa88w0rd';
		$mysql_db = 'niallsha_db';

        // create DB connection
		$con = mysqli_connect($mysql_host, $mysql_user, $mysql_pass,$mysql_db);
		if ($con->connect_error)
		{
            trigger_error('Database connection failed: '  . $con->connect_error, E_USER_ERROR);
		}

        // read contents of POST
        $json = file_get_contents("php://input");

		//convert the string of data to JSON array
		$data = json_decode($json, true);

		// set variables
        $name = $con->real_escape_string($data['name']);
        $email = $con->real_escape_string($data['email']);
        $comment = $con->real_escape_string($data['comment']);
        //$date = $data['date'];


        $sql = "INSERT INTO `contact`(`name`, `email`, `message`) VALUES ('$name','$email','$comment')";

        if($con->query($sql) === false) {
          trigger_error('Wrong SQL: ' . $sql . ' Error: ' . $con->error, E_USER_ERROR);
        } else {
          $last_inserted_id = $con->insert_id;
          $affected_rows = $con->affected_rows;
        }

        mail("info@niallshannon.com","contact service from niallshannon.com",$comment);

		// close DB connection
		mysqli_close($con);
?>
