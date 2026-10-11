import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: 'Dummy',
                location: 'Default',
                avatar_url: null
            }
        }
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/kapilsinghal13465');
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log('Comp did update')
    }

    componentWillUnmount() {
        console.log('Comp will unmount')
    }
    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        return (<div className="user-card">
            <img src={avatar_url} height={'50'} />
        <div>Name: {name}</div>
        <div>Location: {location}</div>
            <div>Mobile: 8930545783</div>
             <div>Gmail: kkss123@gmail.com</div>
             {/* <div>{this.props.tag + '-' + count}</div> */}
             <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
             }}>+1</button>
        </div>)
    }
}

export default UserClass