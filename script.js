const URL = 'https://api.adviceslip.com/advice';
 
async function chamarApi(){
  const resp = await fetch(URL);
  
  if (resp.status === 200) {
    const obj = await resp.json();
    
      console.log(obj);
      console.log(obj.slip.advice);
      
  document.getElementById("conselho").innerHTML = (obj.slip.advice);
  
  } else {
    console.log('Erro com API...');
  }
  
}

chamarApi();




  
