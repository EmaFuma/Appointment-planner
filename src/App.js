import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage";
import { ContactsPage } from "./containers/contactsPage";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };

  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to={ROUTES.CONTACTS} />}
          ></Route>
          <Route
            path={ROUTES.CONTACTS}
            element={
              <ContactsPage contacts={contacts} addContact={addContact} />
            }
          ></Route>
          <Route
            path={ROUTES.APPOINTMENTS}
            element={
              <AppointmentsPage
                appointments={appointments}
                addAppointment={addAppointment}
                contacts={contacts}
              />
            }
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

// Since <Route></Route> is the only component that's able to be child of <Routes></Routes>
// you have to write the place where you want to connect inside an element prop, inside the <Route></Route> component.
// Look inside main section inside Route comonents
