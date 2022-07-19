<?php
// Create database connection using config file
include_once("db_config.php");
 
// Fetch all users data from database
$result = mysqli_query($mysqli, "SELECT * FROM `movie` ORDER BY price ASC LIMIT 3");
?>
 
<html>
<head>    
    <title>wINsOFT - film</title>
</head>
 
<body>
 
    <table width='80%' border=1>
 
    <tr>
        <th>kode</th> <th>price</th> 
    </tr>
    <?php  
    while($movie_data = mysqli_fetch_array($result)) {         
        echo "<tr>";
        echo "<td>".$movie_data['nama']."</td>";
        echo "<td>".$movie_data['price']."</td>";
        echo "</tr>";        
    }
    ?>
    </table>
</body>
</html>