var inset = document.getElementById('inset');
const offsetHeight = inset.offsetHeight;
function toggleHeight(element, height, inset_text_n) 
{
    var parent = element.parentNode;
    var inset_wrapper = document.getElementById("inset_wrapper");
    var inset_text = document.getElementById(inset_text_n);
    var height_text = inset_text.offsetHeight;
    alert(inset_text_n);
    alert(height_text);
    if (parent.offsetHeight == offsetHeight) 
    {
      parent.style.height = (height_text+150)+"px";
      parent.style.backgroundColor = "white";
      parent.style.color = "black";
      parent.style.borderRadius = "15px";
      inset_text.style.visibility = "visible";
      inset_wrapper.style.height = inset_wrapper.offsetHeight + (height_text+150) + "px";
    } 
    else 
    {
        inset_text.style.visibility = "hidden";
      parent.style.height = "55px";
      parent.style.backgroundColor = "rgb(13, 2, 15)";
      parent.style.color = "white";
      parent.style.borderRadius = "0";
      inset_wrapper.style.height = (inset_wrapper.offsetHeight - (height_text+150)) + "px";
    }
  }
