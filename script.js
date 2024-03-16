function move(){
    const redbox = document.getElementById('redbox');
    let position = 0
    let animate = setInterval(movetocorner, 10)
    
    function movetocorner(){
      if(position == 360){
        clearInterval(animate)
      }else{
        position++
        redbox.style.top = position + 'px'
        redbox.style.left = position + 'px'
      }
    }
}



