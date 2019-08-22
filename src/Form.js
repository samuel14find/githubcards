import React, {Component} from 'react';

export class Form extends Component {
    state = {
        userName: ''
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        fetch(`https://api.github.com/users/${this.state.userName}`).then((response)=>{
            if(response.status === 404){
                this.setState({userName: `ERROR | ${response.statusText} `})
             } else {
                response.json().then((data)=>{
                    this.props.onSubmit(data);
                    this.setState({userName: ''});
                })
            }
        });
    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text" placeholder="GitHub username" value={this.state.userName}
                    onChange={event=>this.setState({userName:event.target.value})}
                    required/>
                <button>Add cart</button>
            </form>
        );
    }
}
