let laravelResponse = {
    current_page: 1,
    data: [
        { id: 1, first_name: "John", last_name: "Doe", status: "new", lead_value: "5000" },
        { id: 2, first_name: "Sarah", last_name: "Smith", status: "qualified", lead_value: "15000" },
        { id: 3, first_name: "Mike", last_name: "Johnson", status: "new", lead_value: "8000" },
        { id: 4, first_name: "Emma", last_name: "Davis", status: "lost", lead_value: "3000" },
    ],
    total: 4,
    per_page: 10
};

let resultLeads = laravelResponse.data;

let data = resultLeads.map((lead) => {
    return {
        id: lead.id,
        fullName: lead.first_name +" "+ lead.last_name,
        status: lead.status,
        lead_value: lead.lead_value
    }
});

let newLeads=data.filter((lead)=> lead.status=== "new");

let totalQualifiedValue=data.filter((lead)=> lead.status=== "qualified").reduce((total,lead)=> total+(lead.lead_value),0);

let totalCount=laravelResponse.total;

console.log("Following is the full Name leads");
console.log(data);
console.log("Following is the New leads");
console.log(newLeads);
console.log("Following is the Total Value of Qualified leads");
console.log(totalQualifiedValue);
console.log(totalCount);