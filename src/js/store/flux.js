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
			createContact: (name, address, phone, email) => {
				console.log("name", name, address, phone, email);
				const store = getStore();
				setStore({
					alpha: store.alpha.concat({ full_name: name, address: address, phone: phone, email: email })
				});
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
			},

			deleteContact: del => {
				const store = getStore();

				let filteredStore = store.alpha;
				let temp = [];
				console.log(filteredStore);
				filteredStore.filter((name, index) => {
					if (del != index) temp.push(name);
				});
				console.log(temp);
				console.log(del);
				setStore({ alpha: temp });
			}
			//getcontacts: ()=>{
			//   fetch("https://assets.breatheco.de/apis/fake/contact/agenda/marcosAgenda")
			//	.then(resp => {
			//		if (resp.ok) {
			//			return resp.json();
			//		}
			//	})
			//	.then(data => {
			//		setstore(data);
			//	});
			//}
		}
	};
};

export default getState;
