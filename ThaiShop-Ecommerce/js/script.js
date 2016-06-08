

// color changing on main
elmColor = 0;


    function changeColor(elmColor)
    {  
        
        switch(elmColor)
        {
           

            case 0:
            document.getElementById('colorChange').style.color = '#0688ad'; 
            elmColor++;
            break;
            
            case 1:
            document.getElementById('colorChange').style.color = '#2f6202'; 
            elmColor++;
            break;
            
            case 2:
            document.getElementById('colorChange').style.color = '#c26a14'; 
            elmColor++;
            break;
            
            case 3:
            document.getElementById('colorChange').style.color = '#cf013b'; 
            elmColor = 0;
            break;
                                                            
            default:
            break;
        }
        setTimeout(function(){changeColor(elmColor);}, 3000);
    }




window.onload = function(){changeColor(elmColor);};
//color changin on main end






// text change on main
var roles = [ 'piano ', 'book', 'game', 'music' ];
var roleId = 0;

window.setInterval(function () {
    $('#role').html(roles[roleId]);
    roleId = roleId + 1;
    if(roleId >= roles.length) { roleId = 0; }
}, 3000);

// text change on main ends

