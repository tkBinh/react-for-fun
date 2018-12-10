class ThankBink extends React.Component {
    render() {
        return <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.children}</p>
            <Component2/>
        </div>;
    }
}

class Component2 extends React.Component {
    render() {
        return <h3>Nội dung gì đó</h3>;
    }
}

ReactDOM.render(
    <ThankBink name="Test props">Hello cac ban</ThankBink>,
    document.getElementById('root'));