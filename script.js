var arr= [
    {songName:"Dil to bachcha hai",url:"./songs/Y2meta.app - LYRICALLY_ Dil Toh Bachcha Hai Ji lyrics _ Ishqiya _ naseeruddin shah & Vidya Balan _ Gulzar _ Rahat (256 kbps).mp3",img:"./dil to baccha hai.jpg",time:" 4:52"},
    {songName:"Haareya ",url:"./songs/Y2meta.app - Haareya Song _ Meri Pyaari Bindu _ Ayushmann, Parineeti _ Arijit Singh _ Sachin-Jigar, Priya Saraiya (256 kbps).mp3",img:"./haariya mai dil haariya.jpg",time:" 3:03"},
    {songName:"Hua hai aaj ",url:"./songs/Hua Hain Aaj Pehli Baar.mp3",img:"./hua hai aaj pehli baar.jpg",time:" 4:08"},
    {songName:"O khuda",url:"./songs/O Khuda.mp3",img:"./O Khuda.jpg",time:"5:23"},
    {songName:"Tera pyar mera pyar",url:"./songs/tera pyar mera pyar.mp3",img:"./tera pyar mera pyar.jpg",time:" 3:24"}
]
var audio = new Audio();
var allSongs=document.querySelector(".allsong")
var poster=document.querySelector("#left");
var play=document.querySelector("#play");
var forward=document.querySelector("#forward");
var backward=document.querySelector("#backward");
var selectedSong=0;

function mainFunction(){
    var clutter="";
arr.forEach((elem,index)=>{
    clutter+=`<div class="songcard" id="${index}">
    <div class="part1">
      <img src='${elem.img}' alt="" />
      <h2>${elem.songName}</h2>
    </div>
    <div>
      <h6>${elem.time}</h6>
    </div>
  </div>`
    // console.log(clutter);
}); 
audio.src = arr[selectedSong].url;
allSongs.innerHTML=clutter;
poster.style.backgroundImage =`url('${arr[selectedSong].img}')`;

}
mainFunction();

allSongs.addEventListener("click",(e)=>{
//    console.log(arr[e.target.id].url);
selectedSong=e.target.id
play.innerHTML=`<i class="ri-pause-line"></i>`;
mainFunction();
audio.play().catch(err=>console.log(err));
    
})
var flag=0;
play.addEventListener("click",()=>{
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-line"></i>`;
        mainFunction();
        audio.play().catch(err=>console.log(err));
        flag=1;
    }else{
        play.innerHTML=`<i class="ri-play-line"></i>`;
        audio.pause();
        flag=0;
    }
})

forward.addEventListener("click",()=>{
    selectedSong++; //agar last song pe hai toh first song pe jaaye
    if(selectedSong>arr.length-1){
        selectedSong=0;
    }
    mainFunction();
    audio.play().catch(err=>console.log(err));
    play.innerHTML=`<i class="ri-pause-line"></i>`;
    
    // if(selectedSong<arr.length-1){
    //     selectedSong++;
    //     mainFunction();
    //     audio.play().catch(err=>console.log(err));
    //     play.innerHTML=`<i class="ri-pause-line"></i>`;
    // }else{
    //     forward.style.opacity=0.4;
    // }


})
backward.addEventListener("click",()=>{
    selectedSong--; //agar first song pe hai toh last song pe jaaye
    if(selectedSong<0){
        selectedSong=arr.length-1;
    }
    mainFunction();
    audio.play().catch(err=>console.log(err));
    play.innerHTML=`<i class="ri-pause-line"></i>`;
    // if(selectedSong>0){
    //     selectedSong--;
    //     mainFunction();
    //     audio.play().catch(err=>console.log(err));
    //     play.innerHTML=`<i class="ri-pause-line"></i>`;
    // }else{
    //     backward.style.opacity=0.4;
    // }
})



















