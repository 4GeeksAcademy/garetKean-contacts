import { DataRouterContext } from "react-router/dist/lib/context";

const getState = ({ getStore, getActions, setStore }) => {

	const handleResponse = (response) => {
		if (!response.ok) throw Error(response.statusText);
			return response.text().then(text => text ? JSON.parse(text) : {} )
		};

		const fetchContacts = () => {
			fetch("https://playground.4geeks.com/contact/agendas/GaretKean/contacts")
			.then(handleResponse)
			.then((data) => {
				console.log("fetched contact data: ", data);
				if (Array.isArray(data.contacts)){
					setStore({ contacts: data.contacts });
					console.log("Contacts set in store: ", data.contacts) 	
				} else {
					console.error("fetched data is not an array", data);
					setStore({ contacts: [] })
				}
				
			})
			.catch((error) => {
				console.error("fetching contacts error: ", error );
				addAgendaSlug();
			})


		}
		const addAgendaSlug = () => {
			fetch("https://playground.4geeks.com/contact/agendas/GaretKean", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({})
			})
				.then(handleResponse)
				.then((data) => {
					console.log("agenda added successfully ", data);
					fetchContacts();
				}) 
				.catch((error) => console.error("Adding agenda slug failed", error));
		}
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: fetchContacts(),

			addContacts: (contactData) => {
				fetch("https://playground.4geeks.com/contact/agendas/GaretKean/contacts", {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(contactData)
				})
					.then(handleResponse)
					.then(() => fetchContacts()) 
					.catch((error) => console.error("Adding contact failed", error));
			},
			deleteContacts: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/GaretKean/contacts/${id}`, {
					method: "DELETE"
					
				})
					.then(handleResponse)
					.then(() => fetchContacts()) 
					.catch((error) => console.error("Error deleting contact", error));
			},

			editContacts: (id, contactData) => {
				fetch(`https://playground.4geeks.com/contact/agendas/GaretKean/contacts/${id}`, {
					method: "PUT",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(contactData)
				})
					.then(handleResponse)
					.then(() => fetchContacts()) 
					.catch((error) => console.error("Updating contact failed", error));
			},

			addAgendaSlug: addAgendaSlug()
		}
	};
};

export default getState;
