{
    const helloSay = () => {

        console.log("Cześć wszystkim  !");
    }

    const checkLog = (onButton) => {

        if (onButton.innerText === "Wyłącz nuda") console.log(`"Wyłącz nuda" ${onButton.innerText}`);

        else console.log(`"Moja pasja" ${onButton.innerText}`);

    }

    const init = () => {

        changeButtonContent();

        helloSay();
    }

    const onChangeButtonHidden = () => {

        document.querySelector(".nuda").toggleAttribute('hidden');

    }

    const changeButtonContent = () => {

        const onButton = document.querySelector(".przycisk");
        onButton.addEventListener("click", () => {

            if (onButton.innerText === 'Wyłącz nuda') {

                onButton.innerText = ("Moja pasja");
                onButton.classList.toggle("kolorPrzycisk");

            }

            else {
                ((onButton.innerText) = ("Wyłącz nuda"));
                onButton.classList.toggle("kolorPrzycisk");
            }

            checkLog(onButton);
            onChangeButtonHidden();

        });
    };

    init();

}