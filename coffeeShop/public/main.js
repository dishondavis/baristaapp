var complete = document.getElementsByClassName("completeButton");
var trash = document.getElementsByClassName("fa-trash");









Array.from(complete).forEach(function(element) {
      element.addEventListener('click', function(){
        alert("Coffee Shop!")
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const order = this.parentNode.parentNode.childNodes[3].innerText
        //const complete =
        //console.log(completed)
        //If busted try user orders
        fetch('orders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'order': order,
            //'completed': completed
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })

      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
