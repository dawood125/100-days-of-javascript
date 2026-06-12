<?php

class LeadManager
{
    private $leads = [];

    public function addLead(string $name, string $status,$value=0): void
    {
        array_push($this->leads, [
            "id" => count($this->leads) + 1,
            "name" => $name,
            "status" => $status,
            "value" => $value
        ]);
    }

    public function getLeads(): array
    {
        return $this->leads;
    }

    public function getLeadsByStatus(string $status): array
    {
        return array_filter($this->leads, function ($lead) use ($status) {
            return $lead["status"] === $status;
        });
    }

    public function deleteLead(int $id): void
    {
        $this->leads = array_filter($this->leads, function ($lead) use ($id) {
            return $lead["id"] !== $id;
        });

        $this->leads = array_values($this->leads);
    }

    public function getTotalValue(): int
    {
        $values = array_column($this->leads, "value");
        return array_sum($values);
    }
}

$manager = new LeadManager();
$manager->addLead("Ali Khan", "new");
$manager->addLead("Sara Ahmed", "qualified");
$manager->addLead("Hassan Ali", "new");

echo count($manager->getLeads());              // 3
echo count($manager->getLeadsByStatus("new")); // 2
$manager->deleteLead(1);
echo count($manager->getLeads());
