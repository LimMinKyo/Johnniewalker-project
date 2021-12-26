const gnb = document.querySelector('.gnb');
const subMenu = document.querySelectorAll('.gnb ul ul');
const subMenuBg = document.querySelector('.sub_menu_bg');

subMenu.forEach(item => {
  gnb.addEventListener('mouseenter', () => {
    item.style.display = 'block';
    subMenuBg.style.display = "block";
  });
  gnb.addEventListener('mouseleave', () => {
    item.style.display = 'none';
    subMenuBg.style.display = "none";
  });
});