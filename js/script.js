
// experience kerala script start
let items1 = document.querySelectorAll('#keralaExp-Carousel .carousel-item')

		items1.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items1[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//experience kerala script end

window.addEventListener('scroll', ()=>{

    const header = document.querySelector("header");
    const scrollHeight = window.scrollY;


    if(scrollHeight > 60){
      header.classList.add('header-bg');
    }else{
      header.classList.remove('header-bg');
    }
    

  });

//kerala events part script start

  let items = document.querySelectorAll('#eventsCarousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//keerala events part script end
