import React from 'react';
import ProjectEntry from './ProjectEntry.jsx';
import './ProjectMain.css';


export default class ProjectMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var heightPerEntry =  parseInt(100 / this.props.listEntries.length);
        var listEntryStyles = [];
        for(var i = 0; i < this.props.listEntries.length; i++) {
            listEntryStyles.push({top: `${parseInt(0 + (heightPerEntry * i))}%`, left: '20%', height: `${heightPerEntry}%`, width: '80%'});
        }
        var listEntries = this.props.listEntries.map(item => <li><ProjectEntry title = {item.title} srcLink = {item.srcLink} description = {item.description} style = {listEntryStyles.pop()}/></li>);
        return (
            <div id = "projectMain">
                <ul>
                    {listEntries}
                </ul>
            </div>
        )
    }
}