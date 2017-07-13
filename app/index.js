var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');


class Users extends React.Component {
    render() {
        return (
            <div className="center">
                <h1>{this.props.name}</h1>
                <ul>
                {this.props.list.map(p => <li key={p.name}>{p.name}</li>)}
                </ul>
            </div>
        );
    }
}
Users.propTypes = {
    list: PropTypes.array.isRequired
};


class App extends React.Component {
    render() {
        let friends = this.props.people.filter(p => p.friend);
        let nonFriends = this.props.people.filter(p => !p.friend);
        return (
            <div>
                <Users name="Friends" list={friends}/>
                <hr/>
                <Users name="Non Friends" list={nonFriends}/>
            </div>
        );
    }
}
App.propTypes = {
    people: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        friend: PropTypes.bool.isRequired,
    })),
};

var people = [
    {name: "Rebecca", friend: true},
    {name: "Steve", friend: false},
    {name: "Sam", friend: true},
    {name: "Bob", friend: false}
];

ReactDOM.render(
    <App people={people}/>,
    document.getElementById('app')
);
