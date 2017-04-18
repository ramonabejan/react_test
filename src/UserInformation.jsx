import React from 'react';

const UserInformation = props => {	
	let results = props.data;
	var index =0;

	var tmp = [];

	for(var userInfo in results) {
		tmp.push(`${userInfo}: ${results[userInfo]}`);
	}

	var infos = tmp.map(result => {
		return (<li key={index++}> {result} </li>);
	})

	return (
		 <div>
		 	<ul>
		 	{infos}
		 	</ul>
 		 </div>
	);
}
 


export default UserInformation;
