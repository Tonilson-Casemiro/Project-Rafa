// Scroll Reveal

var scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration:700,
  reset: true
})

scrollReveal.reveal(
 `#container-info-progress,
 #container-twoImgs,
 #section_imgs_elements h1,
 #section_imgs_elements .container-imgElements_info,
 #section_info h1,
 #container-content-infos-numbers .container_info_number,
 #container-content-infos-numbers #container-img,
 .section-tables-planos #title-tables,
 .section-tables-planos .container-table
 `
,{interval: 100}
)