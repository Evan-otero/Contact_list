const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			alpha: [
				{
					id: "369",
					agenda_slug: "marcosAgenda",
					full_name: "pikachu",
					email: "pikapika@hotmail.com",
					phone: "91923499807",
					address: "2922 pupu st",
					created_at: "2019-08-17 20:46:05"
				},
				{
					id: "384",
					agenda_slug: "marcosAgenda",
					full_name: "Marcos D Gomez",
					email: "marcosgomezda@gmail.com",
					phone: "9192478189",
					address: "2901 Virginia Street",
					created_at: "2019-08-20 21:30:40"
				}
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			fetchContacts: () => {
				const store = getStore();
				const url = "https://assets.breatheco.de/apis/fake/contact/agenda/evan_agenda";
				let response1 = fetch(url, {
					method: "Get"
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(data => {
						setStore({ alpha: data });
					});
			},

			putContact: () => {
				const store = getStore();
				const url = "https://assets.breatheco.de/apis/fake/contact/";
				let response1 = fetch(url, {
					method: "PUT",
					body: JSON.stringify(store),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => console.log("Success:", JSON.stringify(response)))
					.catch(error => console.error("Error", error));
			},
			createContact: (name, address, phone, email, index) => {
				console.log("name", name, address, phone, email);
				const store = getStore();
				setStore({
					alpha: store.alpha.concat({ full_name: name, address: address, phone: phone, email: email })
				});
				const url = `https://assets.breatheco.de/apis/fake/contact/`;
				let response1 = fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "evan_agenda",
						address: address,
						phone: phone
					})
				})
					.then(res => res.json())
					.then(response => console.log("Success:", JSON.stringify(response)))
					.catch(error => console.error("Error", error));
			},
			editContact: (name, address, phone, email, index) => {
				console.log(index);
				const store = getStore();
				let editedStore = store.alpha
					.slice(0, index)

					.concat({
						...store.alpha[index],
						full_name: name,
						email: email,
						address: address,
						phone: phone
					})
					.concat(store.alpha.slice(index + 1));
				setStore({ alpha: editedStore });

				const url = `https://assets.breatheco.de/apis/fake/contact/${store.alpha[index].id}`;
				let response1 = fetch(url, {
					method: "PUT",
					body: JSON.stringify(store.alpha[index]),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => console.log("Success:", JSON.stringify(response)))
					.catch(error => console.error("Error", error));
			},

			deleteContact: (del, id) => {
				const store = getStore();

				let filteredStore = store.alpha;
				let temp = [];
				console.log(filteredStore);
				filteredStore.filter((name, index) => {
					if (del != index) temp.push(name);
				});
				console.log(temp);
				console.log(del);
				const url = `https://assets.breatheco.de/apis/fake/contact/${id}`;
				let response1 = fetch(url, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				});
				setStore({ alpha: temp });
			}
		}
	};
};

export default getState;
