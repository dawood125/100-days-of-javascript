import React, { useState } from "react";

const ShowLeads = () => {
  const initialLeads = [
    { id: 1, name: "Lead One", status: "new" },
    { id: 2, name: "Lead Two", status: "new" },
    { id: 3, name: "Lead Three", status: "new" },
  ];

  const [leads, setLeads] = useState(initialLeads);
  let newLeadsCount = leads.filter(lead => lead.status === "new").length;

  let changeStatusLead = (id) => {
    console.log(leads);
    setLeads(
      leads.map((lead) =>
        lead.id === id ? { ...lead, status: "done" } : lead,
      ),
    );
  };
  return (
    <main className="MainSection">
    <p>New Leads Remaining: {newLeadsCount}</p>
      <div className="leadseciton">
        <table border={1} cellSpacing={10}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.status}</td>
                <td>
                  <button onClick={()=>{changeStatusLead(lead.id)}} disabled={lead.status === "done"} >{lead.status === "done" ? "Completed" : "Mark As Done"}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ShowLeads;
