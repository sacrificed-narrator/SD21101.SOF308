import { reactive } from 'vue'

export const store = reactive({
  user: null, // null nếu chưa đăng nhập
  login(email, password) {
    // Mock login
    this.user = { name: 'Division Agent', email: email, avatar: '/images/icon.jpg' }
  },
  logout() {
    this.user = null
  },
  updateProfile(name, email) {
    if(this.user) {
      this.user.name = name;
      this.user.email = email;
    }
  },
  posts: [
    { id: 1, title: 'Factions', date: 'September 25, 2025', image: '/images/factions.jpg', content: 'Once Washington, D.C. had fallen...', category: 'Overviews' },
    { id: 2, title: 'The Division 2: 10 Year Anniversary', date: 'March 4, 2026', image: '/images/post1.jpg', content: 'Tune in from March 3rd until March 10th...', category: 'Updates/DLCs' }
  ]
})