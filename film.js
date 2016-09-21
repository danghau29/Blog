//------------------- 13. Doi nguon Video
var i_13= 0;
function changeSourceVideo(linkVideo, idPlayer, defaultStyle, type, idTitle, i){
  var player= document.getElementById(idPlayer);
  var btn = document.getElementsByTagName('button');

  if (i>=btn.length) return false; // dieu kien ket thuc de quy
 
  if (idPlayer != btn[i].id.slice(0, idPlayer.length)) return false; // dieu kien dung khi qua khu vuc phat khac
  if (0==i_13){
      btn[0].style = "color: #ffe;font-weight: 600;background-color: #359bed;margin: 5px;padding: 5px;border: solid 2px #111; border-radius: 5px; -webkit-box-shadow: 0 0 6px #111;box-shadow: 0 0 6px #111;cursor: not-allowed;";
  }
  btn[i].onclick = function(){
    var sVid = btn[i].id.slice(idPlayer.length);
    //Doi mau cho nut
    this.style = "color: #ffe;font-weight: 600;background-color: #359bed;margin: 5px;padding: 5px;border: solid 2px #111; border-radius: 5px; -webkit-box-shadow: 0 0 6px #111;box-shadow: 0 0 6px #111;cursor: not-allowed;";
    for (var j= 0; j<btn.length; j++){
      if (j!=i){
        btn[j].style = defaultStyle;
      }
    }   
    // -Doi mau cho nut
   
    // Doi tieu de
    if (document.getElementById(idTitle)!==null)
      document.getElementById(idTitle).innerHTML = Number(sVid) + 1;
   
    // Xac dinh de doi nguon dung kieu
    if (1==type){
      //player.src = linkVideo[sVid];
      //parent.player.reload();
      player.contentWindow.location.replace(linkVideo[sVid]);
    }else if(2==type){
      jwplayer(idPlayer).setup({
          file: linkVideo[sVid],
      });
    }else{
      alert("Không có chế độ tạo nút này!!!");
    }
    return false;
  };
 
  i_13++;
  changeSourceVideo(linkVideo, idPlayer, defaultStyle, type, idTitle, i+1);
}//

//-------------------- 14. Tu tao nut cho Video
function autoCreatButton(linkVideo, parentBox, idPlayer, nameObject, idTitle, type){
  var defaultStyle = "color: black;font-weight: 600;background-color: transparent;margin: 5px;padding: 5px;border: solid 2px #111; border-radius: 5px; -webkit-box-shadow: 0 0 6px #111;box-shadow: 0 0 6px #111;cursor: pointer;";
  for (var i= 0; i<linkVideo.length;i++){
    var btn = document.createElement('button');
    btn.innerHTML = (nameObject +" "+(i+1));
    btn.style= defaultStyle;
    btn.title = "Xem " + nameObject + " " + (i+1);
    btn.id= idPlayer + i;
 
    if (''===parentBox){
      document.body.appendChild(btn);
    }else{
      document.getElementById(parentBox).appendChild(btn);
    }
  }
  changeSourceVideo(linkVideo, idPlayer, defaultStyle, type, idTitle, i_13);  // khoi chay de bat dau kiem tra viec click vao cua nguoi dung//
}//