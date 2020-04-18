function calculateGrade(){
  var ParticipationPercent=parseInt(document.getElementById("ParticipationPercent").innerHTML)
  var HWPercent=parseInt(document.getElementById("HWPercent").innerHTML)
  var PM1Percent=parseInt(document.getElementById("PM1Percent").innerHTML)
  var PM2Percent=parseInt(document.getElementById("PM2Percent").innerHTML)
  var PM3Percent=parseInt(document.getElementById("PM3Percent").innerHTML)

  var ParticipationGrade=parseFloat(document.getElementById("ParticipationGrade").value)
  var HWGrade=parseFloat(document.getElementById("HWGrade").value)
  var PM1Grade=parseFloat(document.getElementById("PM1Grade").value)
  var PM2Grade=parseFloat(document.getElementById("PM2Grade").value)
  var PM3Grade=parseFloat(document.getElementById("PM3Grade").value)
  
  var Participation=ParticipationPercent*ParticipationGrade/100
  var HW= HWPercent*HWGrade/100
  var PM1=PM1Percent*PM1Grade/100
  var PM2=PM2Percent*PM2Grade/100
  var PM3=PM3Percent*PM3Grade/100

  
  
  var currentGrade=Participation+HW+PM1+PM2+PM3
  console.log(currentGrade)

  document.getElementById("currentGrade").innerHTML=currentGrade
}

function CheckGrade(evt){
  var grade=parseFloat(evt.currentTarget.value);

  if(grade>100 || grade<0){
    console.log("Wrong Value")
    evt.currentTarget.style.color="red"
  }else{
    evt.currentTarget.style.color="black"
  }
}

