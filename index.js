const restify = require('restify');

const server = restify.createServer({
	name: 'sine',
	version: '1.0.0'
});

var knex = require('knex')({
	client:'mysql',
	connection:{
		host:'us-cdbr-iron-east-02.cleardb.net',
		user:'bfa3a4c6fc32ee',
		password : '2474de3f',
    	database : 'heroku_eeb2a45684fcfd6'
	}
});

const errs = require('restify-errors')

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

const PORT = process.env.PORT || 8080;

server.listen(PORT, function(){
	console.log('%s listening at %s', server.name, server.url);
});

//rotas rest

server.get('/', (req, res, next) => {

	res.send('Bem Vindo: utilize - /positions/:id ou ||'+ 
		' /:description/:location/:full_time ou ||'+
		' /description/:description ou ||'+
		' /location/:location ou ||'+
		' /full_time/:full_time ou ||'+
		' /description/:description/location/:location/full_time/:full_time');

});

//positions
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

//descriptions
server.get('/description/:description', (req, res, next) => {
	const { description } = req.params;

	knex('vagas')
	.where('description', 'like', '%'+description+'%')
	.then((dados) => {
		if(!dados) return res.send(new errs.BadRequestError('nenhum registro encontrado'));
		res.send(dados);
	},next)
});

//location
server.get('/location/:location', (req, res, next) => {
	const { location } = req.params;

	knex('vagas')
	.where('location','like','%'+location+'%')
	.then((dados) => {
		if(!dados) return res.send(new errs.BadRequestError('nenhum registro encontrado'));
		res.send(dados);
	},next)
});

//full_time
server.get('/full_time/:full_time', (req, res, next) => {
	const { full_time } = req.params;

	knex('vagas')
	.where('full_time','like','%'+full_time+'%')
	.then((dados) => {
		if(!dados) return res.send(new errs.BadRequestError('nenhum registro encontrado'));
		res.send(dados);
	},next)
});

//geral params
server.get('/:description/:location/:full_time', (req, res, next) => {
	const { description } = req.params;
	const { location } = req.params;
	const { full_time } = req.params;

	knex('vagas')
	.where('description', 'like', '%'+description+'%')
	.andWhere('location','like','%'+location+'%')
	.andWhere('full_time','like','%'+full_time+'%')
	.then((dados) => {
		if(!dados) return res.send(new errs.BadRequestError('nenhum registro encontrado'));
		res.send(dados);
	},next)
});

server.get('/description/:description/location/:location/fulltime/:full_time', (req, res, next) => {
	const { description } = req.params;
	const { location } = req.params;
	const { full_time } = req.params;

	knex('vagas')
	.where('description', 'like', '%'+description+'%')
	.andWhere('location','like','%'+location+'%')
	.andWhere('full_time','like','%'+full_time+'%')
	.then((dados) => {
		if(!dados) return res.send(new errs.BadRequestError('nenhum registro encontrado'));
		res.send(dados);
	},next)
});