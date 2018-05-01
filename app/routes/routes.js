module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});

	application.get('/home', function(req, res){
		application.app.controllers.home.home(application, req, res);
	});

	application.get('/anuncio', function(req, res){
		application.app.controllers.anuncio.anuncio(application, req, res);
	});

	application.get('/chamado', function(req, res){
		application.app.controllers.chamado.chamado(application, req, res);
	});

	application.get('/consultor', function(req, res){
		application.app.controllers.consultor.consultor(application, req, res);
	});

	application.get('/funcionario', function(req, res){
		application.app.controllers.funcionario.funcionario(application, req, res);
	});

	application.get('/produto', function(req, res){
		application.app.controllers.produto.produto(application, req, res);
	});

	application.get('/usuario', function(req, res){
		application.app.controllers.usuario.usuario(application, req, res);
	});


}