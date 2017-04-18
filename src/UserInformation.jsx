import React from 'react';

const UserInformation = props => {	
	let results = props.data;
	var index =0;
	var tmp = [];

	for(var userInfo in results) {
		tmp.push(`${userInfo}: ${results[userInfo]}`);
	}

	var infos = tmp.map(result => {
		return (<div key={index++}> {result} </div>);
	})

	return (
		 <div>		 
		 	{infos}
 		 </div>
	);
}
 


export default UserInformation;
