import React from 'react';

const RepoInformation = props => {
  	let results = props.data;
	//key of the user repo info array
	var index= 0;
	//user info
	var allInfo=[];
	
	for(var repoInfo in results) {		
		allInfo.push (<div key={index++} className="repoTitle"> {results[repoInfo].name}  </div>);
		allInfo.push (<p key={index++} className="repoDescription"> {results[repoInfo].description}  </p>);
	}		
		

	return (
		 <div className="repo">		 
		 	{allInfo}
 		 </div>
	);
}

export default RepoInformation;