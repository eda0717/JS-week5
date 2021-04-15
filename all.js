let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
  {
    id: 3,
    name: "山林悠遊套票",
    imgUrl: "https://i.imgur.com/H97Wgfn.png",
    area: "台中",
    description:
    "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 20,
    price: 1765,
    rate: 7,
  },
];
//變數宣告
let tickekName = document.querySelector('#ticketName');
let ticketImgUrl = document.querySelector('#ticketImgUrl');
let ticketRegion = document.querySelector('#ticketRegion');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketRate = document.querySelector('#ticketRate');
let ticketDescription = document.querySelector('#ticketDescription');

let ticketCardList =  document.querySelector('.ticketCard-area');
let addTicketBtn = document.querySelector('.addTicket-btn');
let form = document.querySelector('.addTicket-form');
let selected = document.querySelector('.regionSearch');
let searchResult = document.querySelector('#searchResult-text');

/** 初始化（顯示所有套票資訊）*/
init();
function init() {
  let str = "";
  data.forEach(function (item) {
    str += `<li class="ticketCard">
  <div class="ticketCard-img">
    <a href="#">
      <img src=${item.imgUrl} alt="">
    </a>
    <div class="ticketCard-region">${item.area}</div>
    <div class="ticketCard-rank">${item.rate}</div>
  </div>
  <div class="ticketCard-content">
    <div>
      <h3>
        <a href="#" class="ticketCard-name">${item.name}</a>
      </h3>
      <p class="ticketCard-description">
        ${item.description}
      </p>
    </div>
    <div class="ticketCard-info">
      <p class="ticketCard-num">
        <span><i class="fas fa-exclamation-circle"></i></span>
        剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
      </p>
      <p class="ticketCard-price">
        TWD <span id="ticketCard-price">$${item.price}</span>
      </p>
    </div>
  </div>
</li>`
  });
  searchResult.innerHTML = `本次搜尋共${data.length}筆資料`;
  ticketCardList.innerHTML = str;
}
/** 新增套票 */
addTicketBtn.addEventListener('click',addTicketCard)
function addTicketCard(){
  event.preventDefault();
  if(tickekName.value!='' && ticketImgUrl.value!='' && ticketRegion.value!='' && ticketPrice.value>0 && ticketNum.value>0 && ticketRate.value>0 && ticketRate.value<=10 && ticketDescription.value!='' && ticketDescription.value.length<=100){
    let obj = {};
    obj.name = tickekName.value,
    obj.imgUrl = ticketImgUrl.value,
    obj.area = ticketRegion.value,
    obj.description = ticketDescription.value,
    obj.group = ticketNum.value,
    obj.price = ticketPrice.value,
    obj.rate = ticketRate.value,
    data.push(obj);
  }
  else if(ticketRate.value<0 || ticketRate.value>10){
    alert('套票星級區間位於1-10，請重新填寫！');
  }
  else if(ticketNum.value<0){
    alert('套票組數不得小於1組，請重新填寫！');
  }
  else if(ticketDescription.value.length>100){
    alert('套票描述不得超過100個字，請重新填寫！');
  }
  else{
    alert('請確認所有欄位均有填寫');
    console.log(tickekName);
  }
  init();
  form.reset();
}

/** 判斷下拉式選單被選取的值 && 搜尋功能 */
selected.addEventListener('change',function(e){
  console.log(e.target.value);
  let str = '';
  data.forEach(function(item){
    if(e.target.value=='全部地區'){
      init();
    }
    else if(e.target.value==item.area){
       let searchDatas = data.filter(item=>item.area==e.target.value);
       init(searchDatas);
       console.log(searchDatas);
       str+=`<li class="ticketCard">
       <div class="ticketCard-img">
         <a href="#">
           <img src=${item.imgUrl} alt="">
         </a>
         <div class="ticketCard-region">${item.area}</div>
         <div class="ticketCard-rank">${item.rate}</div>
       </div>
       <div class="ticketCard-content">
         <div>
           <h3>
             <a href="#" class="ticketCard-name">${item.name}</a>
           </h3>
           <p class="ticketCard-description">
             ${item.description}
           </p>
         </div>
         <div class="ticketCard-info">
           <p class="ticketCard-num">
             <span><i class="fas fa-exclamation-circle"></i></span>
             剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
           </p>
           <p class="ticketCard-price">
             TWD <span id="ticketCard-price">$${item.price}</span>
           </p>
         </div>
       </div>
     </li>`
    searchResult.innerHTML = `本次搜尋共${searchDatas.length}筆資料`
    ticketCardList.innerHTML = str;
    }
    else{
      let searchDatas = data.filter(item=>item.area==e.target.value);
       init(searchDatas);
      searchResult.innerHTML = `本次搜尋共${searchDatas.length}筆資料`
      ticketCardList.innerHTML = str;
    }
  })
})
