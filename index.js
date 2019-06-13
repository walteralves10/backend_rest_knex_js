const restify = require('restify');

const server = restify.createServer({
	name: 'sine',
	version: '1.0.0'
});

var knex = require('knex')({
	client:'mysql',
	connection:{
		host:'127.0.0.1',
		user:'root',
		password : '',
    	database : 'vagasemprego'
	}
});

const errs = require('restify-errors')

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.listen(8080, function(){
	console.log('%s listening at %s', server.name, server.url);
});

//rotas rest

server.get('/', (req, res, next) => {
	knex('vagas').then((dados) =>{
		res.send(dados)
	},next)
});

server.get('/positions/:id', (req, res, next) =>{
	const { id } = req.params;

	knex('vagas')
	.where('id',id)
	.first()
	.then((dados) => {
		if(!dados) return res.send(new errs.BadRequestError('nenhum registro encontrado'));
		res.send(dados);
	},next)
});

server.get('/:description/:location/:full_time', (req, res, next) => {
	const { description } = req.params;
	const { location } = req.params;
	const { full_time } = req.params;

	knex('vagas')
	.where('description', 'like', '%'+description+'%')
	.andWhere('location','like','%'+location+'%')
	.andWhere('full_time','like','%'+full_time+'%')
	.first()
	.then((dados) => {
		if(!dados) return res.send(new errs.BadRequestError('nenhum registro encontrado'));
		res.send(dados);
	},next)
});