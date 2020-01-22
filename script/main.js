document.getElementById('toggle').addEventListener('click',()=>{
    if(document.getElementById('toggle-list').classList.contains('nav-list-off')){
        document.getElementById('toggle-list').classList.remove('nav-list-off')
        document.getElementById('toggle-list').classList.add('nav-list-on');

        document.getElementById('toggle').classList.remove('toggle-on')
        document.getElementById('toggle').classList.add('toggle-bar')
        
  


    }else{
        document.getElementById('toggle-list').classList.add('nav-list-off');
        document.getElementById('toggle-list').classList.remove('nav-list-on');

        document.getElementById('toggle').classList.remove('toggle-bar')
        document.getElementById('toggle').classList.add('toggle-on')
    }   
})