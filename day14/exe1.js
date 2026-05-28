let apiResponse = {
    status: "success",
    data: {
        agent: {
            id: 1,
            name: "Dawood Ahmed",
            email: "dawood@gmail.com",
            stats: {
                total_leads: 45,
                converted: 12,
                pending: 33
            },
            recent_leads: [
                { id: 101, title: "Lead One", value: 5000 },
                { id: 102, title: "Lead Two", value: 8000 },
                { id: 103, title: "Lead Three", value: 3000 },
            ]
        }
    }
};

let agentName=apiResponse.data.agent.name;
let totalLeadCount=apiResponse.data.agent.stats.total_leads;
let secondRecentTitle=apiResponse.data.agent.recent_leads[1].title;
let totalValue=apiResponse.data.agent.recent_leads.reduce((total,lead)=> total+(lead.value),0);
let greaterThanFourThousand=apiResponse.data.agent.recent_leads.filter((lead)=>lead.value>4000);

console.log(agentName);
console.log(totalLeadCount);
console.log(secondRecentTitle);
console.log(totalValue);
console.log(greaterThanFourThousand);