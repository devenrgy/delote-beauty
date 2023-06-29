'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const introScroll = document.querySelector('.intro__scroll')
  const selectCategoriesList = document.querySelector('.our-works__list')
  const selectCategories = Array.from(document.querySelectorAll('.our-works__btn'))
  const ourWorksPhotos = document.querySelector('.our-works__photos')
  const ourWorksPhotosArray = Array.from(document.querySelectorAll('.our-works__photos-img'))

  selectCategoriesList.addEventListener('click', changeCategories)

  function changeCategories(evt) {
    if (evt.target.closest('button')) {
      ourWorksPhotos.innerHTML = ''
      selectCategories.forEach(btn => btn.dataset.category === evt.target.dataset.category ? btn.classList.add('active') : btn.classList.remove('active'))
      const value = evt.target.dataset.category
      if (value === 'all') {
        ourWorksPhotosArray.forEach(img => ourWorksPhotos.appendChild(img))
      } else {
        const sortWorkPhotos = [...ourWorksPhotosArray.filter(img => img.dataset.value === value)]
        sortWorkPhotos.forEach(img => {
          ourWorksPhotos.appendChild(img)
        })
      }
    }
  }

  window.addEventListener('scroll', toggleScroll)

  function toggleScroll() {
    if (window.scrollY && introScroll.classList.contains('bounce-top')) {
      introScroll.classList.add('text-blur-out')
      introScroll.classList.remove('bounce-top')
    }
    window.removeEventListener('scroll', toggleScroll)
  }
})