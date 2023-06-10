document.querySelector('.order_wrap_title').addEventListener('click', () => {
    document.querySelector('.oreder').classList.toggle('order_open')
})

const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY
        document.body.style.cssText = `
         overflow: hidden;
         position: fixed;
         top: -${scrollController.scrollPosition}px;
         left: 0;
         height: 100vh;
         width: 100vw;
         
         `
    },
    enabledScroll() {
        document.body.style.cssText = "",
            window.scroll({ top: scrollController.scrollPosition })
    }

}


function funcDescription({ modalii, product, closes, time = 300 ,}) {
    const btnOpen = document.querySelector(product);
    const modalWindow = document.querySelector(modalii);
    const closeBtn = document.querySelector(closes);
    modalWindow.style.cssText = `
            display:flex;
            visibility: hidden;
            opacity: 0;
            transition: opacity ${time}ms ease-in-out;
        `

    /*modalDelivery.style.cssText = `
            display:flex;
            visibility: hidden;
            opacity: 0;
            background-color: rgba(0, 0, 0, 0.8);
            transition: opacity ${time}ms ease-in-out;
        `*/
    const modalCloseFunc = (event) => {
        const taget = event.target;
        if (
            taget === modalWindow ||
            taget === closeBtn ||
            event.code == 'Escape') {
            modalWindow.style.opacity = `0`;

            setTimeout(() => {
                modalWindow.style.visibility = `hidden`,
                    scrollController.enabledScroll()
            }, time)

            window.removeEventListener('click', modalCloseFunc)
        }
    }

    modalWindow.addEventListener('click', modalCloseFunc)

    /*const modalCloseDel = (event) =>{
        const targget = event.target
        if (targget === modalDelivery ||
            targget === deliveryClose||
            event.code == 'Escape'){
            modalDelivery.style.opacity = 0;
            }
            setTimeout( () =>{
                modalDelivery.style.visibility = `hidden`,
                    scrollController.enabledScroll()
            }, time)
    }
    modalDelivery.addEventListener('click', modalCloseDel)*/

    const modalOpenFunc = () => {
        modalWindow.style.visibility = `visible`;
        modalWindow.style.opacity = `1`;
        scrollController.disabledScroll();
        window.addEventListener('keydown', modalCloseFunc)
    }
    btnOpen.addEventListener('click', modalOpenFunc);

    /*const modalOpenDelivery = () => {
        modalDelivery.style.visibility = `visible`;
        modalDelivery.style.opacity = `1`;
        scrollController.disabledScroll();
        window.addEventListener('keydown', modalCloseFunc)
    }
    delBtnn.addEventListener('click', modalOpenDelivery); */
};
funcDescription({
    modalii: '.modal1',
    product: '.product-add_first',
    closes: '.modal-main__close',
    /*modalDel: '.modal-deleviry',
    delBtn: '.modal-main__add',
    delClose: '.modal-main__close_del' */
});

funcDescription({
    modalii: '.modal2',
    product: '.product-add_second',
    closes: '.modal-main__close_second',
});

funcDescription({
    modalii: '.modal3',
    product: '.product_add-third',
    closes: '.modal-main__close_third'
});

funcDescription({
    modalii: '.modal4',
    product: '.product_add-fourth',
    closes: '.modal-main__close_fourth'
});

funcDescription({
    modalii: '.modal5',
    product: '.product_add-fifth',
    closes: '.modal-main__close_fifth'
});

funcDescription({
    modalii: '.modal6',
    product: '.product_add-sixth',
    closes: '.modal-main__close_sixth'
});



const counters = document.querySelectorAll('[data-countar]');

if (counters) {
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = e.target
            if (target.closest('.counter__button')){
                let value = parseInt(target.closest('.counter').querySelector('input').value);
                if (target.classList.contains('counter__burron_plus')){
                    value++
                } else{
                    --value
                }

                if(value <=0){
                    value=0;
                    target.closest('.counter').querySelector('.counter__burron_minus').classList.add('disavled')
                } else{
                    target.closest('.counter').querySelector('.counter__burron_minus').classList.remove('disavled')
                }
                target.closest('.counter').querySelector('input').value=value
            }
        })
    })
}


function delivery({ modalDel, delBtn, delClose }){
    const modalDelivery = document.querySelector(modalDel);
    const delBtnn = document.querySelector(delBtn);
    const deliveryClose = document.querySelector(delClose);
    modalDelivery.style.cssText = `
    display: flex;
    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms ease-in-out ;`

    const closeDelivery = (event) =>{
        const targget = event.taget;
        if (targget === modalDelivery || targget === deliveryClose ){
            modalDelivery.style.opacity = `0`;

            setTimeout(() => {
                modalDelivery.style.visibility = `hidden`,
                    scrollController.enabledScroll()
            }, 300)
        }
    }
    modalDelivery.addEventListener('click',closeDelivery)


    const openDelivery = () =>{
        modalDelivery.style.visibility = `visible`;
        modalDelivery.style.opacity = `1`;
        scrollController.disabledScroll();
    }
    delBtnn.addEventListener('click', openDelivery)
}
delivery({
    modalDel:'.modal-deleviry',
    delBtn:'.modal-main__add',
    delClose:'.modal-main__closes_del',
})


const closeBag = document.querySelector('.order_close');
const catalog = document.querySelector('.catalog_order')
closeBag.addEventListener('click', () =>{
    catalog.classList.remove('order_open')
})