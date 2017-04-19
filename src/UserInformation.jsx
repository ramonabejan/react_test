import React from 'react';
import RepoInformation from './RepoInformation';


const UserInformation = props => {	
	let results = props.data;
	//key of the user info array
	var index= 0;
	//user info
	var userDetails=[];
	var avatar;

	for(var userInfo in results) {
		//hide fields without values
		if(results[userInfo] !== '') {
			if (userInfo === 'avatar_url') {
				avatar=<div className="avatarUserInfo" key={index++} ><img src={results[userInfo]} alt="avatar"/> </div> ;
			}
			else {
			    userDetails.push (<div key={index++} className="textUserInfo"> {userInfo}: {results[userInfo]}  </div>)
			}
		
		}		
	
	}
	//display photo first
	userDetails.unshift(avatar);

	userDetails.unshift(<button key={index++} onClick={props.getRepoInfo} > Show repositories </button>)

	return (

		 <div>	
		 <RepoInformation data={props.repoData} /> 

		 { props.displayRepo ? 
		 	userDetails
		 :null }
 		 </div>
	);
}
 


export default UserInformation;
