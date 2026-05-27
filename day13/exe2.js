let agents = [
    { id: 1, name: "Ali", isActive: true, leads: 5 },
    { id: 2, name: "Hassan", isActive: false, leads: 12 },
    { id: 3, name: "Usman", isActive: true, leads: 8 },
    { id: 4, name: "Bilal", isActive: false, leads: 3 },
    { id: 5, name: "Kamran", isActive: true, leads: 20 },
];


let activeAgents = agents.filter((agent) => agent.isActive == true);

let unactiveAgentsName = agents.map((agent) => {
    if (agent.isActive == false) {
        return agent.name;
    }
});

let totalLeads = agents.reduce((total, leadNum) => total + (leadNum.leads), 0);

let findAgent = agents.find((agent) => agent.id == 3);

let newTarget = agents.map((agent) => {
    return { ...agent, target: 15 };
});

console.log(activeAgents);
console.log(unactiveAgentsName);
console.log(totalLeads);
console.log(findAgent);
console.log(newTarget);