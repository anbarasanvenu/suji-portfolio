var tabs = document.getElementById('icetab-container').children;
var tabcontents = document.getElementById('icetab-content').children;

var myFunction = function() {
	var tabchange = this.mynum;
	for(var int=0;int<tabcontents.length;int++){
		tabcontents[int].className = ' tabcontent';
		tabs[int].className = 'icetab';
	}
	tabcontents[tabchange].classList.add('tab-active');
	this.classList.add('current-tab');
}	


for(var index=0;index<tabs.length;index++){
	tabs[index].mynum=index;
	tabs[index].addEventListener('click', myFunction, false);
}




/*
Inspired by Florin Pop's coding challenges, you can check them here: https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/
*/

function loading() {
	document.querySelectorAll(".bar").forEach(function(current) {
	  let startWidth = 0;
	  const endWidth = current.dataset.size;
	  
	  /* 
	  setInterval() time sholud be set as trasition time / 100. 
	  In our case, 2 seconds / 100 = 20 milliseconds. 
	  */
	  const interval = setInterval(frame, 20);
  
	  function frame() {
		if (startWidth >= endWidth) {
		  clearInterval(interval);
		} else {
			startWidth++;
			current.style.width = `${endWidth}%`;
			current.firstElementChild.innerText = `${startWidth}%`;
		  }
	   }
	});
  }
  
  setTimeout(loading, 1000);