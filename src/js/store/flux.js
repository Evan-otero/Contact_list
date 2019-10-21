const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			createcontact: () => {
				let temp = blank;
				let temp2 = { full_name: "$", email: "", phone: "", address: "" };
				temp.push(temp2);
				this.setstore((blank = temp2));
			},
			editcontact: index => {
				let temp = blank[index];
				temp.full_name = blank1;
				temp.email = blank2;
				temp.phone = blank3;
				temp.address = blank4;
				this.setstore((blank[index] = temp));
			},
			deletecontact: del => {
				let temp = blank;
				temp.filter((name, index) => {
					del != index;
				});
				this.setStore((blank = temp));
			}
		}
	};
};

export default getState;
