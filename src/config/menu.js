
export default {
  items: [
    {
      icon: 'fas fa-home',
      title: 'Home',
      id: 'home'
    },
    {
      icon: 'fab fa-facebook-square',
      title: 'Facebook Page',
      id: 'fb'
    },
    {
      icon: 'fab fa-pinterest-square',
      title: 'Pinterest Page',
      id: 'pt'
    }
  ],
  controller (item) {
    alert('Clicked ' + item.title)
  },
  miniVariant: false
}
