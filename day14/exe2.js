let agents = [
    { id: 1, name: "Ali", address: { city: "Lahore" }, leads: 5 },
    { id: 2, name: "Hassan", address: null, leads: 0 },
    { id: 3, name: "Usman", address: { city: "Karachi" }, leads: null },
];

let agentData= agents.map((agent)=>{
    return `${agent?.name}- ${agent.address?.city ?? "Not specified"}- ${agent?.leads ?? 0} leads`;
})

console.log(agentData);
