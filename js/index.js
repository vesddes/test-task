let createBtn = document.querySelector('.create_tab');
let numberContent = 3;
createBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let contentBtn = document.querySelector('.input_btn').value;
    let content = document.querySelector('.text_content').value;
    if (contentBtn == '' || content == '' ) {
        alert('Enter data')
    } else {
        let btnTab = document.createElement('button');
        btnTab.className = 'tabs__btn';
        numberContent += 1;
        btnTab.setAttribute('data-tab',`#content-${numberContent}`);
        btnTab.innerHTML = `${contentBtn}`
        document.querySelector('.tabs__nav').appendChild(btnTab)



        let contentTab = document.createElement('div');
        contentTab.className = 'tabs__pane';
        contentTab.id = `content-${numberContent}`
        contentTab.innerHTML = `${content}`
        document.querySelector('.tabs__content').appendChild(contentTab);


        document.querySelector('.input_btn').value = '';
        document.querySelector('.text_content').value = '';
    }

})


document.querySelector('.tabs__nav').addEventListener('click', function (event) {
    let currentBtn = event.target;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);


    if (!currentBtn.classList.contains('active')) {
        document.querySelectorAll('.tabs__btn').forEach(function (item) {
            item.classList.remove('active');
        });

        document.querySelectorAll('.tabs__pane').forEach(function (item) {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    }
})
