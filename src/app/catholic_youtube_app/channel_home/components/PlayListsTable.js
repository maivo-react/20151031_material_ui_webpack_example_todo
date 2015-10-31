import React from 'react';

import PlayListRow from './PlayListRow';

export default class PlayListsTable extends React.Component{
	constructor(props){
		super(props);
		console.log("playlists: " , this.props.playlists);
		console.log("playlists.length: "+this.props.playlists.length);
		console.log("this.props.playlists[0].title: "+this.props.playlists[0].title);
	}
	
	render(){
		let rows = [];
		
		this.props.playlists.forEach(function(playlist){
			
			console.log("playlist.title: "+ playlist.title);
			rows.push(<PlayListRow playlist={playlist}/>);
		})
		
		
		
		
		let tableStyle = {
			"borderCollapse": "collapse",
		     "border": "1px solid black",
		};
		
		return (
			<div>
			<table style={tableStyle}>
				<tbody>
					{rows}
				</tbody>
			</table>
			</div>
		);
	}
}


