function Saludo2(props)
{
	return (<h1>Hola mundo</h1>);
}

var Saludo3 = props =>
{
	return (<h1>Hola mundo</h1>);
}

var Saludo4 = React.createClass({

	render:function()
	{
		return (
				<h1>Hola mundo</h1>
			)
	}

});


ReactDOM.render(
				<h1>Hola mundo</h1>,
				document.getElementById('saludo1')
				);


ReactDOM.render(
				<Saludo2 />,
				document.getElementById('saludo2')
				);


ReactDOM.render(
				<Saludo3 />,
				document.getElementById('saludo3')
				);

ReactDOM.render(
				<Saludo4 />,
				document.getElementById('saludo4')
				);