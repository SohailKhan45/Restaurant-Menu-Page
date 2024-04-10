let container = document.querySelector('.container');
let allBtn = document.querySelector('#all');
let bfBtn = document.querySelector('#bf');
let lunchBtn = document.querySelector('#lunch');
let shakeBtn = document.querySelector('#shakes');
let dinnerBtn = document.querySelector('#dinner');

bfBtn.addEventListener('click', () =>{
    container.innerHTML = '';
    myData.forEach((item) =>{
        if(item.type == 'breakfast'){
        container.innerHTML += `
        <div class="item">
            <div class="img-content">
                <img src="${item.imgLink}" alt="">
            </div>
            <div class="info">
                <div class="title">
                    <p>${item.name}</p>
                    <p id="price">$${item.price}</p>
                </div>
                <div class="details">
                    <p>${item.info}</p>
                </div>
            </div>
        </div>`
        }
    })
});
lunchBtn.addEventListener('click', () =>{
    container.innerHTML = '';
    myData.forEach((item) =>{
        if(item.type == 'lunch'){
        container.innerHTML += `
        <div class="item">
            <div class="img-content">
                <img src="${item.imgLink}" alt="">
            </div>
            <div class="info">
                <div class="title">
                    <p>${item.name}</p>
                    <p id="price">$${item.price}</p>
                </div>
                <div class="details">
                    <p>${item.info}</p>
                </div>
            </div>
        </div>`
        }
    })
});
shakeBtn.addEventListener('click', () =>{
    container.innerHTML = '';
    myData.forEach((item) =>{
        if(item.type == 'shake'){
        container.innerHTML += `
        <div class="item">
            <div class="img-content">
                <img src="${item.imgLink}" alt="">
            </div>
            <div class="info">
                <div class="title">
                    <p>${item.name}</p>
                    <p id="price">$${item.price}</p>
                </div>
                <div class="details">
                    <p>${item.info}</p>
                </div>
            </div>
        </div>`
        }
    })
});
dinnerBtn.addEventListener('click', () =>{
    container.innerHTML = '';
    myData.forEach((item) =>{
        if(item.type == 'dinner'){
        container.innerHTML += `
        <div class="item">
            <div class="img-content">
                <img src="${item.imgLink}" alt="">
            </div>
            <div class="info">
                <div class="title">
                    <p>${item.name}</p>
                    <p id="price">$${item.price}</p>
                </div>
                <div class="details">
                    <p>${item.info}</p>
                </div>
            </div>
        </div>`
        }
    })
});

allBtn.addEventListener('click', () =>{
    container.innerHTML = '';
    myData.forEach((item) =>{
        container.innerHTML += `
        <div class="item">
            <div class="img-content">
                <img src="${item.imgLink}" alt="">
            </div>
            <div class="info">
                <div class="title">
                    <p>${item.name}</p>
                    <p id="price">$${item.price}</p>
                </div>
                <div class="details">
                    <p>${item.info}</p>
                </div>
            </div>
        </div>`
    })
});

myData.forEach((item) =>{
    container.innerHTML += `
    <div class="item">
        <div class="img-content">
            <img src="${item.imgLink}" alt="">
        </div>
        <div class="info">
            <div class="title">
                <p>${item.name}</p>
                <p id="price">$${item.price}</p>
            </div>
            <div class="details">
                <p>${item.info}</p>
            </div>
        </div>
    </div>`
})