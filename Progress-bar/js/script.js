

//========================================================
// Скажу честно, JS не понимаю, поэтому искал в интернете.
//========================================================


const fulfill = e => {
    const progress = document.getElementById('progress');
    progress.style.width = parseInt(progress.style.width) + e.target.dataset.value + '%'
    }
     
    let buttons = document.getElementsByTagName('button');
    [].forEach.call(buttons, (button) => {
    button.onclick = fulfill;
    })
    