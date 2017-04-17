function Saludo1(props)
{
	return (
			<div>
				<h1>Hola mundo</h1>
				<p>Buenos dias {props.nombre}</p>
				<p>{props.children}</p>
			</div>
		);
}

ReactDOM.render(
					<div>
						<Saludo1 nombre="Luis Molina 1" />
						<Saludo1 nombre="Luis Molina 2" >
							Mexicano
						</Saludo1>
					</div>
					,
					document.getElementById('saludo1')
				);


var Saludo2 = props =>
{
	return (
			<div>
				<h1>Hola mundo</h1>
				<p>Buenos dias {props.nombre}</p>
				<p>{props.children}</p>
			</div>
		);
}


ReactDOM.render(
					<div>
						<Saludo2 nombre="Luis Molina 1"/>
						<Saludo2 nombre="Luis Molina 2">
							Brasileño
						</Saludo2>
					</div>
					,
					document.getElementById('saludo2')
				);


var Saludo3 = React.createClass
({
	render:function()
	{
		return (
			<div>
				<h1>Hola mundo</h1>
				<p>Buenos dias {this.props.nombre}</p>
				<p>{this.props.children}</p>
			</div>
		);
	}
});

ReactDOM.render(
					<div>
						<Saludo3 nombre="Luis Molina 1" />
						<Saludo3 nombre="Luis Molina 2" />
						<Saludo3 nombre="Luis Molina 3" >
							Chileno
						</Saludo3>
					</div>
					,
					document.getElementById('saludo3')
				);
