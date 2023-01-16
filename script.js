function encriptar()
{
  var texto = document.getElementById('texto').value;
  var texto2 = texto.toLowerCase();
  var arr = texto2.split('');
  
  for (i = 0; i < arr.length; i++)
  {
    switch (arr[i])
    {
      case 'a': arr[i] = 'n'; break;
      case 'b': arr[i] = 'o'; break;     
      case 'c': arr[i] = 'p'; break;  
      case 'd': arr[i] = 'q'; break;   
      case 'e': arr[i] = 'r'; break;   
      case 'f': arr[i] = 's'; break;  
      case 'g': arr[i] = 't'; break;
      case 'h': arr[i] = 'u'; break; 
      case 'i': arr[i] = 'v'; break;
      case 'j': arr[i] = 'w'; break;
      case 'k': arr[i] = 'x'; break;   
      case 'l': arr[i] = 'y'; break;
      case 'm': arr[i] = 'z'; break;
      case 'n': arr[i] = 'a'; break;  
      case 'o': arr[i] = 'b'; break;  
      case 'p': arr[i] = 'c'; break;
      case 'q': arr[i] = 'd'; break; 
      case 'r': arr[i] = 'e'; break;  
      case 's': arr[i] = 'f'; break; 
      case 't': arr[i] = 'g'; break;  
      case 'u': arr[i] = 'h'; break; 
      case 'v': arr[i] = 'i'; break; 
      case 'w': arr[i] = 'j'; break;  
      case 'x': arr[i] = 'k'; break; 
      case 'y': arr[i] = 'l'; break; 
      case 'z': arr[i] = 'm'; break; 
      case 'ñ': arr[i] = ' '; break;
      case ' ': arr[i] = 'ñ'; break;
      case 'á': arr[i] = '#'; break; 
      case 'é': arr[i] = '$'; break;  
      case 'í': arr[i] = '%'; break; 
      case 'ó': arr[i] = '&'; break; 
      case 'ú': arr[i] = '@'; break;  
      case '#': arr[i] = 'á'; break; 
      case '$': arr[i] = 'é'; break; 
      case '%': arr[i] = 'í'; break; 
      case '&': arr[i] = 'ó'; break;
      case '@': arr[i] = 'ú'; break;
    }
  }
  
  var EncrTexto = arr.join('');
  document.getElementById('resultado').value = EncrTexto;
}