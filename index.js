var database = firebase.database();

function enviar() {
var usuario = document.getElementById('usuario').value
var email = document.getElementById('email').value
var senha = document.getElementById('senha').value
var filme = document.getElementById('filme').value
var musica = document.getElementById('musica').value

database.ref('usuario/' + usuario).set({
  email : email,
  senha : senha,
  usuario : usuario,
  musica : musica,
  filme : filme
})

  alert ('Informações salvas')
}

function get() {
    var username = document.getElementById('username').value
  
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert(data.email)
  
    })
  
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }
