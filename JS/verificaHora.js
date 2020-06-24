      function carregar(){
        let res = document.getElementById('res')
        let msg = document.getElementById('msg')
        let img = document.getElementById('imagem')
        let data = new Date()
        let hora = data.getHours()
        let minuto = data.getMinutes()
        msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
        if(hora >= 6 && hora <= 12){
          img.src = "imgs/manha.png" //Bom dia
          document.body.style.background = '#e2cd9f'
          res.innerHTML = 'Bom Dia!'
          res.style.color = '#e2cd9f'
        }
        else if(hora < 6){
          img.src = "imgs/madrugada.png" //Boa madrugada
          document.body.style.background = '#27374d'
          res.innerHTML = 'Boa Madrugada!'
          res.style.color = '#27374d'
        }
        else if(hora < 18){
          img.src = "imgs/tarde.png" //Boa tarde
          document.body.style.background = '#b9846f'
          res.innerHTML = 'Boa tarde!'
          res.style.color = '#b9846f'
        }
        else{
          img.src = "imgs/noite.png" //Boa noite
          document.body.style.background = '#515154'
          res.innerHTML = 'Boa Noite!'
          res.style.color = '#515154'
        }
      }