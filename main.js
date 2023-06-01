const displayLinks = document.querySelectorAll('.coffee-method a');

let linksClicked = [false, false, false, false];

for (let i = 0; i < 4; i++) {
    displayLinks[i].onclick = () => {
        if (linksClicked[i] === false) {
            linksClicked[i] = true;
            const text = document.getElementById(`${i}`);
            text.style.visibility = 'visible';
            text.classList.add('animate-in');
            setTimeout(() => {
                text.classList.remove('animate-in');
                text.classList.add('animate-out');
                setTimeout(() => {
                    text.classList.remove('animate-out');
                    text.style.visibility = 'hidden';
                    linksClicked[i] = false;
                }, 250);
            }, 2000);
        }
    };
}