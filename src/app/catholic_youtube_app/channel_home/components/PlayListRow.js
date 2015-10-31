import React from 'react';

export default class PlayListRow extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		console.log("inside PlayListRow.render: item: ", this.props.playlist)
		
		const tdStyle = {
			border: '1px solid black',
		};
		
		let playListTransformed ={};
		playListTransformed.thumbnailUrl = this.props.playlist.snippet.thumbnails.default.url;
		playListTransformed.title = this.props.playlist.snippet.title;
		playListTransformed.description = this.props.playlist.snippet.description;
		
		return (
			<tr>
				<td style={tdStyle}>
					<img className="thumbnail_default_url" src={playListTransformed.thumbnailUrl}/>
				</td>
				<td style={tdStyle}>
					<div className="title">{playListTransformed.title}</div>
					<span className="description">{playListTransformed.description}</span>
				</td>
			</tr>
		);
	}
}

