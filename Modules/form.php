<?php
    include_once 'C:/xampp/htdocs/portfolio/dbh.inc.php';
    include_once 'Classes/DbClientRepository.php';
?>

<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
    <link rel="stylesheet" href="../Public/Css/client.css">
    <link rel="stylesheet" href="../Public/Css/gegevens.css">
</head>
<body>
    <div class="jumbotron text-center">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <a href="../Templates/Main.html"></a>
                        <img class="logo" src="../Public/img/TriKool_7_Logo.png" alt="showing Logo" width="100" height="auto">
                    </a>
                </div>
                <div class="col-sm-6">
                    <ul class="NavLinks">
                        <li><a href="../Templates/Main.html">Startpagina</a></li>
                        <li><a href="../Templates/inlog.html">Ouders/verzorgers</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <?php
    $db = new DbClientRepository(new PDO("mysql:host=localhost;dbname=portfolio","root", ""));
    $clients = $db->findAll();

    ?>
    <?php foreach ($clients as $client):?>
        <div class="gegevens">
            <div class='grid'>
                <span> <strong> Naam: </strong></span>
                <span class="editable-span"><?= $client["naam"] ?></span>
                <span> <strong> Geboorte jaar:</strong>  </span>
                <span class="editable-span"> <?= $client["geboortejaar"]  ?> </span>
                <span><strong>Zorg Zwaarte Pakket:</strong></span>
                <span class="editable-span"> <?= $client["ZZP_ID"] ?> </span>
                <span><strong>Telefoon Client:</strong></span>
                <span class="editable-span"><?= $client["Telnummer_Client"] ?></span>
                <span><strong>Telefoon Ouders/Verzorgers:</strong></span>
                <span class="editable-span"> <?= $client["Telnummer_OV"] ?></span>
                <span><strong>email:</strong></span>
                <span class="editable-span"> <?= $client["Email_OV"] ?></span>
            </div>

        </div>
    <?php endforeach;?>



    <script src="../JS/gegevens.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>