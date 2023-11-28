//  탭 스크립
const tabMenus = document.querySelectorAll('.tab_menu')
const tabName = document.querySelector('#tab_name')
const menu = document.querySelector('.menu')
const contents = document.querySelectorAll('.menu_section')

menu.addEventListener('click',function(e){
    let id = e.target.dataset.id;
    contents.forEach(function(content){
    content.classList.remove('active2');
    });
    let secId = document.getElementById(id);
    secId.classList.add('active2');
    let menuText = e.target.dataset.text
    tabName.innerHTML = menuText
})
//  탭 스크립
// 하프앤하프 피자 이미지
const leftPizza = document.querySelector('.left_pizza')
const rightPizza = document.querySelector('.right_pizza')
const selectPizza = document.querySelectorAll('select')
const select1Pizza = document.querySelector('.select_1')
const select2Pizza = document.querySelector('.select_2')
const selects = document.querySelectorAll('.select_pizza>select')

let array = ['RPZ223.png','RPZ223.png','RPZ223.png','RPZ223.png','RPZ223.png','RPZ223.png'
,'RPZ169.png','RPZ169.png','RPZ169.png','RPZ169.png','RPZ169.png','RPZ003.png','RPZ003.png'
,'RPZ003.png','RPZ003.png','RPZ003.png','RPZ155.png','RPZ155.png','RPZ155.png','RPZ155.png'
,'RPZ155.png']
selects.forEach(function(selected){
    selected.addEventListener('change',function(){
        let num = selected.options.selectedIndex;
        if(selected == select1Pizza){
            leftPizza.innerHTML = `<img src="img/${array[num]}" alt="">`
        }else if(leftPizza.children.length == 0){
            alert('첫번째 피자 부터 선택하세요')
        }else if(selected == select2Pizza){
            rightPizza.innerHTML = `<img src="img/${array[num]}" alt="">`
        }
    })
})
// 하프앤하프 피자 이미지
// 피자 사이즈 체크 
const size_choice = document.querySelector('.size_choice')
const size_btns = document.querySelectorAll('.size_btn')

size_choice.addEventListener('click',function(e){
    let tarr = e.target
    size_btns.forEach(function(size_btn){
        size_btn.classList.remove('size_color')
        if( tarr == size_btn){
            size_btn.classList.add('size_color')
        }
    })
})
// 피자 사이즈 체크
//피자 수량선택 스크립
const btns = document.querySelectorAll('.pizza_btn');
const minusBtns = document.querySelectorAll('.pizza_minus_btn');
const plusBtns = document.querySelectorAll('.pizza_plus_btn');
let totalpizza3 = document.querySelector('.total_pizza3')
let pizzaBtn = document.querySelector('.pizza_btn>input')
btns.forEach(function(btn, i){
    btn.addEventListener('click',function(e){
        let t = e.target;
        if(t == minusBtns[i]){
            minusFuncPizza(t)
            }else if(t == plusBtns[i]){
                plusFuncPizza(t)
            }
    })
});
function minusFuncPizza(t){
    const next = t.nextElementSibling;
    if(next.value > 0){
        next.value--;
        totalpizza3.innerHTML = next.value
    }
}
function plusFuncPizza(t){
    const prev = t.previousElementSibling;//이전 자식을 불러옴
    if(prev.value < 10){
    prev.value++;
    totalpizza3.innerHTML = prev.value
    }
}
//피자 수량선택 스크립
//토핑추가 스스륵 스크립
let topingUnder = document.querySelector('.toping_under')
let topingWrap = document.querySelector('.toping_wrap')
console.log(topingWrap)

topingUnder.addEventListener('click',function(){
    topingWrap.classList.toggle('active2')
})
//토핑추가 스스륵 스크립
//토핑추가 수량 스크립
const topingBtns = document.querySelectorAll('.toping_btn');
const topingMinusBtns = document.querySelectorAll('.toping_minus_btn');
const topingPlusBtns = document.querySelectorAll('.toping_plus_btn');
let totalToping =  document.querySelector('.total_side');
let topingBtn =  document.querySelectorAll('.toping_btn>input');
topingBtns.forEach(function(btn, i){
    btn.addEventListener('click',function(e){
        let t = e.target;
        if(t == topingMinusBtns[i]){
            minusFuncToping(t)
            }else if(t == topingPlusBtns[i]){
                plusFuncSide(t)
            }
    })
});
function minusFuncToping(t){
    const next = t.nextElementSibling;
    if(next.value > 0){
        next.value--;
    }
}
function plusFuncToping(t){
    const prev = t.previousElementSibling;//이전 자식을 불러옴
    if(prev.value < 10)
    prev.value++;
}
//토핑추가 수량 스크립
//사이드디시  수량선택 스크립
const sideBtns = document.querySelectorAll('.side_dish_btn');
const sideMinusBtns = document.querySelectorAll('.side_dish_minus_btn');
const sidePlusBtns = document.querySelectorAll('.side_dish_plus_btn');
let totalSide =  document.querySelector('.total_side');
let totalBtn =  document.querySelectorAll('.side_dish_btn>input');
sideBtns.forEach(function(btn, i){
    btn.addEventListener('click',function(e){
        let t = e.target;
        if(t == sideMinusBtns[i]){
            minusFuncSide(t)
            totalAllPrice()
            }else if(t == sidePlusBtns[i]){
                plusFuncSide(t)
                totalAllPrice()
            }
    })
});
function minusFuncSide(t){
    const next = t.nextElementSibling;
    if(next.value > 0){
        next.value--;
        totalSide.innerHTML = next.value
    }
}
function plusFuncSide(t){
    const prev = t.previousElementSibling;//이전 자식을 불러옴
    if(prev.value < 10)
    prev.value++;
    totalSide.innerHTML = prev.value
}
//사이드디시 수량선택 스크립
//콜라 수량선택 스크립 & 결제 
const cokeBtns = document.querySelectorAll('.coke_btn');
const cokeMinusBtns = document.querySelectorAll('.coke_minus_btn');
const cokePlusBtns = document.querySelectorAll('.coke_plus_btn');
let totalCoke = document.querySelector('.total_coke');
let cokeBtn = document.querySelectorAll('.coke_btn>input');
cokeBtns.forEach(function(btn, i){
    btn.addEventListener('click',function(e){
        let t = e.target;
        if(t == cokeMinusBtns[i]){
            minusFuncCoke(t)
            totalAllPrice()
            }else if(t == cokePlusBtns[i]){
                plusFuncCoke(t)
                totalAllPrice()
            }
    })
});
function minusFuncCoke(t){
    const next = t.nextElementSibling;
    if(next.value > 0){
        next.value--;
        totalCoke.innerHTML = next.value
    }
}
function plusFuncCoke(t){
    const prev = t.previousElementSibling;//이전 자식을 불러옴
    if(prev.value < 10)
    prev.value++;
    totalCoke.innerHTML = prev.value
}
//콜라 수량선택 스크립 & 결제
//피자장바구니 & 결제금액
let totalPizza1 = document.querySelector('.total_pizza1');
let totalPizza2 = document.querySelector('.total_pizza2');
let option1 = document.querySelectorAll('.select_1');
let option2 = document.querySelectorAll('.select_2');

option1.forEach(function(option){
    option.addEventListener('click',function(e){
        let optionNum = option.options.selectedIndex
        let optionData = option.options[optionNum].dataset.text
        totalPizza1.innerHTML = `${optionData}`
    })
})
option2.forEach(function(option){
    option.addEventListener('click',function(e){
        let optionNum = option.options.selectedIndex
        let optionData = option.options[optionNum].dataset.text
        totalPizza2.innerHTML = `${optionData}`
    })
})
//피자 장바구니 & 결제금액
//총금액 스크립
let TOPIAll = totalPizza2.textContent
let TODIAll = totalSide.textContent
let TOCOAll = totalCoke.textContent
let TOPR = document.querySelector('.total_price')
console.log(TOPIAll)
console.log(TODIAll)
console.log(TOCOAll)
function totalAllPrice(){
    let veryExpensive = `${Number(TOPIAll)} + ${Number(TODIAll)} + ${Number(TOCOAll)}`
    console.log(veryExpensive)
    TOPR.innerHTML = veryExpensive
}
//총금액 스크립
