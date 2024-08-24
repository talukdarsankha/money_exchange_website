const allsidemenu=document.querySelectorAll('#sidebar .side-menu.top li a');

allsidemenu.forEach(item=>{
    const li=item.parentElement;
    item.addEventListener('click',function(){
        allsidemenu.forEach(i=>{
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    });
});


// toggle
const menubar=document.querySelector('#content nav .bx.bx-menu-alt-left');
const sidebar=document.getElementById('sidebar');

menubar.addEventListener('click',function(){
    sidebar.classList.toggle('hide');
})


const searchButton=document.querySelector('#content nav form .form-input button');
const searchButtonIcon=document.querySelector('#content nav form .form-input button .bx');
const searchForm=document.querySelector('#content nav form');

searchButton.addEventListener('click',function(e){
    if(window.innerWidth < 576){
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')){
            searchButtonIcon.classList.replace('bx-search-alt-2','bx-x');
        }else{
            searchButtonIcon.classList.replace('bx-x','bx-search-alt-2');
        }
    }
});



if(window.innerWidth < 768){
    sidebar.classList.add('hide');
}else if(window.innerWidth>576){
    searchButtonIcon.classList.replace('bx-x','bx-search-alt-2');
    searchForm.classList.remove('show');
}

window.addEventListener('resize',function(){
  if(this.innerWidth>576){
    searchButtonIcon.classList.replace('bx-x','bx-search-alt-2');
    searchForm.classList.remove('show');
  }
});