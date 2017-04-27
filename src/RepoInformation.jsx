import React from 'react';

const RepoInformation = props => {
  	let repoData = props.data;
	//key of the user repo info array
	let index= 0;
	//user info
	let arrayRepo=[];
	if(repoData !== undefined ) {
		repoData.map(result => {
			arrayRepo.push (<div key={index++} className="repoTitle"> {result.name}  </div>);
			arrayRepo.push (<p key={index++} className="repoDescription"> {result.description}  </p>);
			return true;	
		});
	}
	
	return (
		<div className="repo">		 
			{arrayRepo}	 
 		</div>
	);
}

export default RepoInformation;