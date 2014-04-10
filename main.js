var width = 100;
var count = 3;
function MyScoll(id,side,step)
{
	var div=document.getElementById(id);
	if(side=='Left')
	{
		if(div.scrollLeft!=1224)
		div.scrollLeft+=step;
        if ((div.scrollLeft < - width*(id.length-count)) || (dev.scrollLeft>0)){
            clearInterval(timeID);
            timeID = null;
        }


	}
  if(side=='Right')
  {
      div.scrollLeft-=step;
  }
}

