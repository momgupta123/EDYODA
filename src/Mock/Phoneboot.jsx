import React, { useState } from 'react';
function PhoneBook() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (name.trim() !== '' && phone.trim() !== '') {
      const newContact = { name, phone };
      setContacts([...contacts, newContact]);
      setName('');
      setPhone('');
    }
  };

  return (
    <div>
      <h1>Phone Book</h1>
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>namw"</label>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>
      {contacts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
}

export default PhoneBook;
