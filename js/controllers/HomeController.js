app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
    { 
      title:	'casino', 
      iscore:	8.2,
      rating:	'R',
      runtime:	178,
      released:	new Date('1995', '11', '22'),
      country:	'USA',
      posters:	['img/casino_movie.jpg','img/casino movie poster.jpg'],
      imdb:		'http://www.imdb.com/title/tt0112641/?ref_=fn_al_tt_1',
      website:	'https://www.facebook.com/CasinoMovie/',
      likes:	0,
      dislikes:	0,
      posterindex: 0
	},
	{
		title:	'reservoir dogs', 
      iscore:	8.2,
      rating:	'R',
      runtime: 99,
	  released: new Date('1992','9','2'),
	  country: 'USA',
	  posters: ['img/reservoir_dogs_scrubbed_150402.jpg','img/reservoir dogs image 2.jpg'],
	  imdb: 'http://www.imdb.com/title/tt0105236/?ref_=nv_sr_1',
	  website: 'https://www.facebook.com/ReservoirDogsMovie',
	  likes: 0,
	  dislikes: 0,
	posterindex: 0
	},
	{
	  title: 'terminator',	
	  iscore: 8.1,
	  rating: 'R',
	  runtime: 107,
	  released: new Date('1984','10','26'),
	  country: 'USA',
	  posters:['img/top-25-movie-franchises-of-all-time-17-20061204052521974.jpg','img/794443-terminator_1.png'],
	  imdb: 'http://www.imdb.com/title/tt0088247/?ref_=nv_sr_3',
	  website: 'https://www.facebook.com/The-Terminator-181221288646788/',
	  likes: 0,
	  dislikes: 0,
	  posterindex: 0
	 
		
	}
	];
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	$scope.title="IMDB + Michael's Top 8 Movies";
	$scope.owner="Michael";
	$scope.github="https://github.com/sungurovm/is219s16sungurovp3";
	



	

	
	
	
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
		
	$scope.like = function (index){
		$scope.movies[index].likes++;
	}
	
	$scope.dislike = function (index){
		$scope.movies[index].dislikes += 1;
	}
	
	$scope.posterclick = function (index){
		//show poster after posterindex updated
		//...
		if ($scope.movies[index].posterindex > $scope.movies[index].posters.length - 1) {
		$scope.movies[index].posterindex = 0; }
		else {
			$scope.movies[index].posterindex++;
			}
	};
	
	$scope.timetext = function (minutes){
			//toString might not be needed, modify accordingly
			var hours = Math.floor(minutes / 60);
			var h = hours.toString();
			var m = (minutes % 60).toString();
			return h + "h" + m + "m" ;
			//print h and m;
	};
	
	
	
	
	
	
	
}]);
