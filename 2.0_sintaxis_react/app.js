var saludo = 	(
					<div>
						<h1>Hola mundo</h1>
						<h2>Buenas noches</h2>
					</div>
				);

ReactDOM.render(saludo,document.getElementById('saludo1'));


// otra forma de crear elementos con react js es la siguiente 

ReactDOM.render(React.createElement('h1',null,'Hola mundo'),document.getElementById('saludo2'));
