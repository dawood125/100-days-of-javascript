<?php
$leads = [
    ["id" => 1, "name" => "Ali Khan", "status" => "new", "value" => 5000],
    ["id" => 2, "name" => "Sara Ahmed", "status" => "qualified", "value" => 15000],
    ["id" => 3, "name" => "Mike Johnson", "status" => "new", "value" => 8000],
    ["id" => 4, "name" => "Emma Davis", "status" => "lost", "value" => 3000],
];

$new_leads=array_filter($leads,function($lead){
    if ($lead["status"] === "new") {
        return $lead;
    }
});

echo "New Leads:\n";
foreach ($new_leads as $lead) {
    echo $lead["name"] . "\n";
}

$qualified = array_filter($leads, function($lead){
    return $lead["status"] === "qualified";
});

$values = array_column($qualified, "value");

$total = array_sum($values);

echo "\nTotal qualified value: " . $total . "\n";

$names = array_column($leads, "name");

echo "\nAll Names: " . implode(", ", $names) . "\n";

$leadsWithPriority = array_map(function($lead){
    $lead["priority"] = $lead["value"] > 10000 ? "high" : "low";
    return $lead;
}, $leads);

echo "\nLeads with priority:\n";
foreach ($leadsWithPriority as $lead) {
    echo $lead["name"] . " - " . $lead["priority"] . "\n";
}