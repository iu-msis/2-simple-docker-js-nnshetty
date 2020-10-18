var app = new Vue({
  el: '#commentsId',
  data: {
    comments: [{
      id: '',
      commentText: ''
    }],

    newcomments: {
      id:'',
      commentText:''
    }
  },

    methods: {
      fetchUser(){
        fetch('api/comments/')
        .then(response => response.json())
        .then(json => {
          this.comments=json;
          console.log(this.comments);
        });
      },

      CreateUser(){
        fetch('api/comments/post.php', {
          method:'POST',
          body: JSON.stringify(this.newcomments),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.comments.push(json[0]);
          this.newcomments = this.newUserData();
        });
        console.log("Creating (POSTing)...!");
        console.log(this.newcomments);
      },
      newUserData() {
        return {
          id:"",
          commentText: ""
        }
      }
    },
  created() {
      this.fetchUser();
    },
  })
