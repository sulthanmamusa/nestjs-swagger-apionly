<?php ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $.post('http://localhost:8000/custom_product/b2c/index.php/flight/flight/service/AirportList',
    {
        userinp: "DUB"
    }, function(data){
        console.log(data);
    });
});
</script>
    curl -X POST "http://192.168.0.219/custom_product/b2c/index.php/flight/flight/service/AirportList" -H "accept: */*" -H "Content-Type: application/json" -d "{\"userinp\":\"DUB\"}"
</body>
</html>