// create an array
let contactList = [];

// This is the function that I need in order to add a new contact to my list
function add(contact) {


  // Here I check if the contact has both name and email
  if (!contact.name || !contact.email) {
    console.log("Missing fields");
    return;
  }

  // Check if the contact email exists already
  const duplicate = contactList.find(c => c.email === contact.email);
  if (duplicate) {
    console.log("Duplicate was found");
    return;
  }

  // If I need to add the new contact to my list
  contactList.push(contact);
  console.log(`${contact.name} was added`);
}




// If I need to remove one of the contacts by the email

function remove(email) {
  const index = contactList.findIndex(c => c.email === email);

  // output an error if I cannot find the contact
  if (index === -1) {
    console.log("Contact not found");
    return;
  }
}



// Function to edit a contact by email
function edit(email, newData) {

  // Find the contact with the given email
  const contact = contactList.find(c => c.email === email);

  // If the contact is not found, output an error
  if (!contact) {
    console.log("Contact not found");
    return;
  }
}




// Function to get a contact's information by email
function get(email) {

  // Find the contact with the given email
  const contact = contactList.find(c => c.email === email);

  // If the contact is not found, output an error
  if (!contact) {
    console.log("Contact not found");
    return;
  }
}


// Function to list all contacts
function listAll() {
  if (contactList.length === 0) {
    console.log("No contacts available");
    return;
  }
}

// Function to clear the contact list
function clear() {
  // Clear the contact list
  contactList = [];
  console.log("The contact list was cleared");
}
