import React, { useState } from "react";
import LeadForm from "../Components/LeadForm";

const ShowLeads = () => {
  const initialLeads = [
    { id: 1, name: "Ali Khan", status: "new" },
    { id: 2, name: "Sara Ahmed", status: "done" },
    { id: 3, name: "Usman Ali", status: "new" },
  ];

  const [leads, setLeads] = useState(initialLeads);
  const [filter, setFilter] = useState("all");

  let totalLeadCount = leads.length;
  let newLeadsCount = leads.filter((lead) => lead.status === "new").length;
  let doneLeadsCount = leads.filter((lead) => lead.status === "done").length;

  let changeStatusLead = (id) => {
    console.log(leads);
    setLeads(
      leads.map((lead) =>
        lead.id === id ? { ...lead, status: "done" } : lead,
      ),
    );
  };

  let deleteLead = (id) => {
    const updatedLeads = leads.filter((lead) => lead.id !== id);
    setLeads(updatedLeads);
  };

  let filteredLeads = leads.filter((lead) => {
    if (filter === "all") {
      return lead;
    } else if (filter === "new") {
      return lead.status === "new";
    } else if (filter === "done") {
      return lead.status === "done";
    }
  });
  return (
    <>
      <main className="MainSection">
        <div className="leadseciton">
          <div className="statSection">
            <p>Total Leads: {totalLeadCount}</p>
            <p>New Leads Remaining: {newLeadsCount}</p>
            <p>Done Leads: {doneLeadsCount}</p>
          </div>

          <div className="filterSection">
            <div>
              <h2>Filters</h2>
            </div>
            <div>
              <button onClick={() => setFilter("all")}>All</button>
              <button onClick={() => setFilter("new")}>New</button>
              <button onClick={() => setFilter("done")}>Done</button>
            </div>
          </div>
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
              {filteredLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.status}</td>
                  <td>
                    <button
                      onClick={() => {
                        changeStatusLead(lead.id);
                      }}
                      disabled={lead.status === "done"}
                    >
                      {lead.status === "done" ? "Completed" : "Mark As Done"}
                    </button>
                    <button
                      onClick={() => {
                        deleteLead(lead.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <LeadForm onAddLead={setLeads}></LeadForm>
      </main>
    </>
  );
};

export default ShowLeads;
