class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <p>Website Title / Logo</p>
            </div>
        )
    }
}

class Item extends React.Component {
    constructor(props){
        super(props);
        this.imagePath = "image/meun_trigger_icon.png";
        this.state = {
            mobile_menu_style: {
                display: 'none'
            }
        }
    }

    openMobileMenu = () => {
        console.log("???")
        this.setState({
            mobile_menu_style: {
                display: 'block'
            }
        })
    }

    clostMobileMenu = () => {
        console.log("close")
        this.setState({
            mobile_menu_style: {
                display: 'none'
            }
        })    
    }

    render() {
        return (
            <div>
                <div className="items">
                    <ul>
                        <li><img src={this.imagePath} onClick={this.openMobileMenu} /></li>
                        <li><p>Item 1</p></li>
                        <li><p>Item 2</p></li>
                        <li><p>Item 3</p></li>
                        <li><p>Item 4</p></li>
                    </ul>
                </div>
                <div style={this.state.mobile_menu_style}>
                    <div id="mobile_items" >
                        <p className="close_menu" onClick={this.clostMobileMenu}>X</p>
                        <ul>
                            <li><p>Item 1</p></li>
                            <li><p>Item 2</p></li>
                            <li><p>Item 3</p></li>
                            <li><p>Item 4</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return <div className="content">{this.props.text}</div>
    }
}

class Contents extends React.Component {
    render() {
        return (
            <div className="contents">
                <Content text="Content box 1"/>
                <Content text="Content box 2"/>
                <Content text="Content box 3"/>
                <Content text="Content box 4"/>
            </div>
        )
    }
}

class Message extends React.Component {
    render () {
        return (
            <div className="message">
                <h1>Welcome Message</h1>
            </div>
        )
    }
}

class Section extends React.Component {
    render () {
        return (
            <div className="section">
                <h2>Section Title</h2>
            </div>
        )
    }
}

class Actions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                display: 'none'
            }
        }
    }
    openContents = () => {
        this.setState({
            style: {
                display: 'block'
            }
        });
    }
    render() {
        return (
            <div>
                <div className="actions">
                    <button onClick={this.openContents}>Call to Action</button>
                </div>
                <div className="hiddenContents" style={this.state.style}>
                    <Contents />
                </div>
            </div>
        )
    }
}

const styleHide = {
    display: 'none',
};

class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <Title />
                <Item />
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Message />
                <Section />
                <Contents />
                <Actions />
            </div>
        )
    };
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);