// Transition 1
window.onload = () => {
    // Получение элементов нажатия
    const but1 = document.getElementById("bot_trans");

    // Получение ссылок
    const anchor = document.getElementById("get_href");
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 600);

    but1.addEventListener('click', e => {
        e.preventDefault();
        transition_el.classList.add('is-active');

        setInterval(() => {
            window.location.href = anchor.href;
        }, 400);
    })
}