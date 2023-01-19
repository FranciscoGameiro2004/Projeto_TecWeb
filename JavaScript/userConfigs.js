function trocarImagem(){
    console.log(String(document.getElementsByName('profilePicPath')[0].value).replace('C:\fakepath','imagens\fotosPerfil'))
    document.getElementsByName('profilePic').src = document.getElementsByName('profilePicPath')[0].files.value
}