import React from 'react';

const UserInformation = props => {	
	let results = props.data;
	var index= 0;
	var allInfo= [];
	var avatar;
	for(var userInfo in results) {
		if(results[userInfo] !== '') {
			if (userInfo === 'avatar_url') {
				avatar= <div className="avatarUserInfo" key={index++} ><img src={results[userInfo]} alt="avatar"/> </div> ;
			}
			else {
			    allInfo.push (<div key={index++} className="textUserInfo"> {userInfo}: {results[userInfo]}  </div>)
			}
		
		}		
	
	}

	allInfo.unshift(avatar);

	return (
		 <div>		 
		 	{allInfo}
 		 </div>
	);
}
 


export default UserInformation;
