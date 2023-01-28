$(function(){

	$.ajax({
		url: `https://rickandmortyapi.com/api/character`,
		type: 'GET',
		dataType: 'json',

		beforeSend: ()=>{
			$('.character').html('<div class="col-sm-12 text-center"><img class="loading"src="../img/loading.gif"></div>')
		},

		success: (json) =>{
			$('.character').html('<div class="col-sm-12 h3 text-dark">Characters</div>');
			
			
			for(let i in json.results){
				console.log(json.results[i]);

				$('.character').append(`
					<div class="col-sm-4 mb-2">
						<div class="card bg-dark">
							<img class="card-img-top" src=${json.results[i].image}>
							<div class="card-body">
								<h5 class="card-title text-light text-center">${json.results[i].name}</h5>
								<h5 class="card-title text-light text-center">${json.results[i].species}</h5>
								<h5 class="card-title text-light text-center">${json.results[i].location.name}</h5>
							</div>
						</div>
					</div>
				`);
			}
		},

		error: ()=>{
			console.log('erro' + error);
		}
	})
});