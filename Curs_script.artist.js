var lo = false;
function toggleColor(element) 
{
  if(lo == false)
  {
    element.style.fill = 'red';
    lo = true;
  }
  else
  {
    element.style.fill = 'white';
    lo = false;
  }
  }; 