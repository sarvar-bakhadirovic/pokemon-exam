export function likeBtn(btn) {
    btn.addEventListener('click', e => {
        e.preventDefault()

        console.log(e.target);
    })
}