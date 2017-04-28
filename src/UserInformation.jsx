import React from 'react';
import RepoInformation from './RepoInformation';


const UserInformation = props => {	
	let userData = props.data;
	//key of the user info array
	let index = 0;
	//user info
	let arrayUser = [];
	let avatar;

	Object.keys(userData).map( (propKey) => {	
		if (propKey === 'avatar_url') {
			avatar= <div className="avatarUserInfo" key={index++} ><img src={userData[propKey]} alt="avatar"/> </div> ;
		}
		else {
		    arrayUser.push (<div key={index++} className="textUserInfo"> {propKey}: {userData[propKey]}  </div>)
		}
	
		return true;
	});

	//display photo first
	arrayUser.unshift(avatar);

	//add show repositories button to array
	arrayUser.unshift(<button key={index++} onClick={props.getRepoInfo} > Show repositories </button>)

	return (

		 <div>	
		 <RepoInformation data={props.repoData} /> 

		 { props.displayRepo ? 
		 	arrayUser
		 :null }
 		 </div>
	);
}
 


export default UserInformation;
