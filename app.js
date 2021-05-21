var base_url = '';

var listaUsuarios = [
	{name:'Maria', date: 'adm'},
	{name:'Lucas', date: 'adm'},
	{name:'João', date: 'med'},
	{name:'Clara', date: 'med'},
	{name:'Bruna', date: 'pac'},
	{name:'Mario', date: 'pac'},
	{name:'Carol', date: 'pac'},
	{name:'Julia', date: 'pac'},
];

localStorage.setItem("task", JSON.stringify(listaUsuarios));