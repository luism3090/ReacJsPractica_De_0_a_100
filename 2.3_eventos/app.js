var Comida = React.createClass({
	getInitialState: function()
	{
		return {
			like:false
			
		}
	},
	DarLike:function(e)
	{
		this.setState({
			like: !this.state.like
		})


		var classe = e.target.getAttribute("class");
		var index = classe.indexOf("rojo");
		if(index==-1)
		{
			classe +=" rojo";
			e.target.className= classe;

			//var nombreComida = this.props.nombre;
			//alert("La comida que me gusta es " + nombreComida);
			
		}
		else
		{
			classe = classe.replace("rojo", "");
			e.target.className= classe;
		}

		
	},
	render: function()
	{
		return (
					
					<div className="contenedor">
						<div className="TipoComida" >{this.props.nombre}</div>
						<div className="NombreComida" >{this.props.children}</div>
						<div className="corazon" onClick={this.DarLike} >
						<span className="glyphicon glyphicon-heart glyphicon-heart-lg"></span>
							<p className="like">Like: <b>{String(this.state.like)}</b></p>
						</div>
					</div>
					
				);
	}
});

ReactDOM.render(
					<div>
						<Comida nombre="Tacos" >	
							Comida mexicana
						</Comida>
						<Comida nombre="Paella">	
							Comida española
						</Comida>
						<Comida nombre="Ceviche" >	
							Comida peruana
						</Comida>
					</div>
					,
					document.getElementById('principal')
				);