export const togleDpodDown = () => {
    const dropbtn = document.querySelector('.dropbtn')
    const dropDownContent = document.querySelector('.dropdown-content')

    dropbtn.addEventListener('click', () => {
        dropDownContent.style.display = dropDownContent.style.display === "none" ? 'block': "none";
    })
}
