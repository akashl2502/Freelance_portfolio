class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "React",
    };
  }

  render() {
    return (
      <div>
        {this.state.name} count is: {this.state.count}
      </div>
    );
  }
}

incrementCount = () => {
  this.setState({ count: this.state.count + 1 });
};

this.setState((prevState) => ({
  count: prevState.count + 1,
}));
