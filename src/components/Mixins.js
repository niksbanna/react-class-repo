import React from 'react';

// mixin
const myMixin = {
    componentDidMount() {
        console.log('Component has mounted.');
    },

    componentWillUnmount() {
        console.log('Component is about to unmount.');
    }
};


// Create a component using the mixin
class Mixins extends React.Component {
    // Apply the mixin
    componentDidMount() {
        if (typeof myMixin.componentDidMount === 'function') {
            myMixin.componentDidMount.call(this);
        }
    }

    componentWillUnmount() {
        if (typeof myMixin.componentWillUnmount === 'function') {
            myMixin.componentWillUnmount.call(this);
        }
    }

    render() {
        return (
            <div>Mixins</div>
        )
    }
}

export default Mixins;

// export default class TestClass extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             firstName: "Narendra",
//             lastName: "singh"
//         }

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         console.log("clicked")
//         this.setState({ firstName: "hello" })
//     }

//     componentWillMount() {
//         console.log("before render");
//     }

//     componentDidMount() {
//         console.log("rendered..")
//     }

//     componentWillUpdate() {
//         console.log("will update")
//     }

//     componentDidUpdate() {
//         console.log("updated ....")
//     }

//     componentWillUnmount() {
//         console.log("unmounting...")
//     }

//     render() {

//         console.log("hello")

//         return (
//             <>

//                 <div>TestClass {this.state.firstName} {this.props.lastName} </div>
//                 <button onClick={this.handleClick} >Click</button>

//             </>
//         )
//     }
// }
