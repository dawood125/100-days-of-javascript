<?php
$numbers = [5, 12, 8, 130, 44, 3, 17, 29];

$even_numbers = array_filter($numbers, function($n) {
    return $n % 2 == 0;  
});

$sum=array_sum($even_numbers);
$maxNumber=max($even_numbers);

echo "Even numbers:" . implode(", ", $even_numbers);

echo "\nSum of numbers is:" . $sum;
echo "\n Highest even:" . $maxNumber;

