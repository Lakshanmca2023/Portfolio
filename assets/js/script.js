//SHOW MENU
const showmenu=(toggleId,navId)=>{
      const toggle=document.getElementById(toggleId),
      nav=document.getElementById(navId)
      if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
          });
      }
}
showmenu('nav_toggle','nav_menu')

