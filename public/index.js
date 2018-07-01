// /* global Vue, VueRouter, axios */


// var HomePage = {
//   template: "#home-page",
//   data: function() {
//     return {
//       message: "Welcome to Vue.js!"
//     };
//   },
//   created: function() {
//     axios.get('/users/home').then(function(response) {
//       console.log(response.data);
//     });
//   },

//   methods: {
//   },
//   computed: {}
// };



// var NewsPage = {
//   template: "#News-Page",
//   data: function() {
//     return {
//       news: [],
//       author: "",
//       title: "", 
//       description: "",
//       article: "",
//       url: "",
//       urlToImage: "",
//       publishedAt: "",
      
//     };
//   },
//   created: function() {

//     axios.get("/news").then(function(response) {
//           this.news = response.data;
//         }.bind(this));
//     console.log("--------------");
//     console.log(this.news);
//     console.log("--------------");
//   },

//   methods: {},
//   computed: {}
// };


// // ####################################################
// // ROUTES
// // ####################################################

// var router = new VueRouter({
//   routes: [
//     { path: "/", component: HomePage },
//     { path: "/news", component: NewsPage}

//   ],
//   scrollBehavior: function(to, from, savedPosition) {
//     return { x: 0, y: 0 };
//   }
// });

// var app = new Vue({
//   el: "#app",
//   router: router,
//   created: function() {
//     var jwt = localStorage.getItem("jwt");
//     if (jwt) {
//       axios.defaults.headers.common["Authorization"] = jwt;
//     }
//   }
// });






