let elem = document.querySelector('.p64x9c')
let elem2 = document.querySelector('.gqLncc')

if (elem)
{
	elem.remove()
}

if (elem2)
{
	document.querySelector("#oFNiHe > p > a > b > i").innerHTML = 'большие черные члены?'
	document.querySelector("#oFNiHe > p > a").href = '/search?q=большие+черные+члены'
	document.querySelector("#oFNiHe > p > a").style.color = 'lightblue' 
	document.querySelector("#oFNiHe > p > a").style.fontSize = '18px'
	document.querySelector("#oFNiHe > p > span").style.fontSize ='18px'
}
else 
{
	document.querySelector("#oFNiHe").outerHTML = `
	<div id="oFNiHe" 
	data-ved="2ahUKEwiciI71zcv4AhVrAxAIHcWiB5kQL3oECAEQNQ">
	<p class="gqLncc card-section KDCVqf" 
	aria-level="3" 
	role="heading">
	<span class="gL9Hy d2IKib">Возможно, вы имели в виду:</span>
	 <a class="gL9Hy" 
	 href="/search?q=большие+черные+члены"><b><i>большие черные члены?</i></b></a> </p></div>`
	 	document.querySelector("#oFNiHe > p > a").style.color = '#ff7769'
	document.querySelector("#oFNiHe > p > a").style.fontSize = '18px'
	document.querySelector("#oFNiHe > p > span").style.fontSize ='18px'
}
