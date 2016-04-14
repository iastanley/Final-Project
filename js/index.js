//minimizing the left sidbar

//toggling the hamburger 
$('#hamburger').on('click',function(){
	$(this).toggleClass('open');
	$('nav, #pathwayList').toggleClass('close');
});

//to work with mediaquery
//using resize() event handler

$(window).on('resize', function(){
	if ($(document).width() <= 800) {
		$('#hamburger').removeClass('open');
		$('nav, #pathwayList').addClass('close');
	} 

	if ($(document).width() > 800) {
		$('#hamburger').addClass('open');
		$('nav, #pathwayList').removeClass('close');	
	}

})



//Activating the fig caption on click
$('area').on('click', showCaption);

//show the figure caption 
function showCaption(){
	//this represents area clicked
	
	if ($(this).is('area[alt="RAS"]')){
		removeAllCaptions();
		$('#ras-p').addClass('displayswitch');
	} else if ($(this).is('area[alt="RAF"]')){
		removeAllCaptions();
		$('#raf-p').addClass('displayswitch');
	} else if ($(this).is('area[alt="MEK"')) {
		removeAllCaptions();
		$('#mek-p').addClass('displayswitch');
	} else if ($(this).is('area[alt="MAPK"')) {
		removeAllCaptions();
		$('#erk-p').addClass('displayswitch');
	}
}

//function for removing all displayswitch classes from fig captions

function removeAllCaptions(){
	$('figcaption p').removeClass('displayswitch');
}


//Search function

//test load() function
$('#search').on('submit', function(e){
	e.preventDefault();

	var query = $('#search-query').val();
	query = query.toLowerCase();
	query = query.trim();
	console.log(query);

	switch(query) {
		case 'mapk':
		case 'ras':
		case 'raf':
		case 'braf':
		case 'erk':
		case 'mek':
			window.location.href = 'mapk.html';
			break;
		case 'egfr':
		case 'her':
		case 'erbb':
		case 'erbb1':
		case 'erbb2':
		case 'her2':
		case 'her3':
		case 'egf':
			window.location.href = 'egfr.html';
			break;
		case 'vegf':
		case 'vegfr':
		case 'vegfa':
		case 'vegf-a':
		case 'vegf a':
		case 'vegfr1':
		case 'vegfr2':
		case 'vegfr3':
		case 'flt-1':
		case 'flt1':
		case 'flt 1':
		case 'flk-1':
		case 'flk1':
		case 'flk 1':
			window.location.href = 'vegf.html';
			break;
		case 'pi3k':
		case 'pi3k/akt':
		case 'pi3k/akt/mtor':
		case 'akt':
		case 'mtor':
		case 'mtorc1':
		case 'pten':	
		case 'raptor':
			window.location.href = 'pi3k.html';
			break;
		default:
			alert('Search term was not found.');
			
	}

});






