function toggleHeight(element, height, inset_text_n) 
{
    var parent = element.parentNode;
    var inset_wrapper = document.getElementById("inset_wrapper");
    var inset_text = document.getElementById(inset_text_n);
    
    if (parent.offsetHeight == 81) 
    {
      parent.style.height = height+"px";
      parent.style.backgroundColor = "white";
      parent.style.color = "black";
      parent.style.borderRadius = "15px";
      inset_text.style.visibility = "visible";
      inset_wrapper.style.height = inset_wrapper.offsetHeight + height + "px";
    } 
    else 
    {
        inset_text.style.visibility = "hidden";
      parent.style.height = "55px";
      parent.style.backgroundColor = "rgb(13, 2, 15)";
      parent.style.color = "white";
      parent.style.borderRadius = "0";
      inset_wrapper.style.height = inset_wrapper.offsetHeight - height + "px";
    }
  }

  ///////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////
  document.querySelector('.icon1').addEventListener('click', function() 
  {
    window.location.href = 'https://www.youtube.com/';
  });

  document.querySelector('.icon2').addEventListener('click', function() 
  {
    window.location.href = 'https://vk.com';
  });

  document.querySelector('.icon3').addEventListener('click', function() 
  {
    window.location.href = 'https://telegram.org/?1';
  });

  /////////////////////////////////////////////////////////////////////////

  var logo = document.getElementById('logo');
  logo.addEventListener('click', function() 
  {
    logo.style.transform = 'scale(1.1)';
    window.location.href = 'Curs.html';
  })

    /////////////////////////////////////////////////////////////////////////

    var log_but2 = document.getElementById('log_but2');
    log_but2.addEventListener('click', function() 
    {
      alert("Вы успешно зарегистрировались!");
    })


    function Vxod(element) 
{
  alert("Вы успешно вошли!");
};
    var log_but = document.getElementById('log_but');
    log_but.addEventListener('click', function() 
    {
      alert("Вы успешно вошли!");
    })
////////////////////////////////////////////////////////////////////
    const sectionLink = 'Curs_artist.html/#Rembrandt';

document.getElementById('ppp').addEventListener('click', function() {
  window.location.href = sectionLink;
});
