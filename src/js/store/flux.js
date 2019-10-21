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
			createcontact: () => {
				let temp = blank;
				let temp2 = { full_name: "$", email: "", phone: "", address: "" };
				temp.push(temp2);
				setStore({ blank: temp2 });
			},
			//editcontact: index => {
			//	let temp = blank[index];
			//	temp.full_name = blank1;
			//	temp.email = blank2;
			//	temp.phone = blank3;
			//	temp.address = blank4;
			//	setStore(${blank[index] = temp});
			//},
			deletecontact: del => {
				let temp = blank;
				temp.filter((name, index) => {
					del != index;
				});
				setStore({ blank: temp });
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
