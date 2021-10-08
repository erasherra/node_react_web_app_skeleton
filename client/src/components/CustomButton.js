let button = function Button({buttonClick}){
	
	const searchBar = {
		border: '2px solid black',
		backgroundColor: '#caa659',
		position: 'fixed',
		bottom: '50px',
		padding: '5px',
	};
	
	const btn = {
		border: '2px solid black',
		backgroundColor: 'white',
	};
	
	async function onClick(e){
		buttonClick(e.target.value);
	}
	
	return(
		<div style={searchBar}>
			<button style={btn} onClick={onClick}/>
		</div>
	);
	
}

module.exports = button;